/*
    To implement Verification of email     
    To implment validation middleware and handle validation errors
*/

import express, { Request, Response } from 'express' ;
import jwt from 'jsonwebtoken' ;

import User from '../../models/User' ;
import RequestValidationError from '../../errors/request-validation-error' ;
import Password from '../../utils/password';
import { currentUser } from '../../middlewares/auth-middleware';
import NotAuthorizedError from '../../errors/not-authorized-error';


const router = express.Router() ;


router.use(currentUser) ;


router.post('/api/users/signin',
    async ( req : Request, res : Response ) => {

        const { email, password } = req.body ;


        // Find existing user
        const existingUser = await User.findOne( { email : email }) ;
        if(!existingUser){
            throw new RequestValidationError(
                [
                    {
                        field : "email",
                        message : "Incorrect email"
                    },
                    {
                        field : "password",
                        message : "Incorrect password"
                    }
                ])
        }

        if(existingUser.info.status == "Blocked" ){

            let timeDiff = new Date().getTime() - existingUser.info.lastLogin.attemptAt.getTime() ;
            if(timeDiff < 3600*1000){

                existingUser.info.lastLogin.attemptAt = new Date()
                existingUser.save()

                throw new NotAuthorizedError("Account blocked, try after 1 hour again");
            } else {

                    existingUser.info.status = "Active"
                    existingUser.info.lastLogin.attemptCount = 0 ;
                    existingUser.save()
            }
        }
        if(existingUser.info.status == "InActive"){

            throw new NotAuthorizedError("Account Inactive")

        }

        // Check for the password match
        const passwordMatch = await Password.compare(existingUser.password,password) ;
        if(! passwordMatch ){

            if(existingUser.info.lastLogin.attemptCount <= 3){

                existingUser.info.lastLogin.attemptCount += 1
                existingUser.save()

                throw new RequestValidationError([
                        {
                            field : "email",
                            message : "Incorrect email"

                        },
                        {
                            field : "password",
                            message : "Incorrect password"
                        }
                    ])

            } else {

                existingUser.info.lastLogin.attemptAt = new Date() 
                existingUser.info.status = "Blocked"
                existingUser.save()

                throw new NotAuthorizedError("Too Many attempts, Account blocked for 1 hour") ; 
            }


        }

        const userJwt = jwt.sign(
            {
                id : existingUser.id,
                email : existingUser.email 
            },
            process.env.JWT_KEY!
        )        
            
        req.session!.token = userJwt ; 
        console.log(userJwt);

        res.status(200).send({
            id : existingUser.id,
            email : existingUser.email
        }) ;




    }
)


router.post('/api/users/signout', (req,res)=>{

    req.session = null ;

    res.send({
        "message" : "success"
    })
})




export default router ;