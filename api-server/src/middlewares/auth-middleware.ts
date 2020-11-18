import { Request, Response, NextFunction } from 'express' ;
import jwt from 'jsonwebtoken' ;

import NotAuthorizedError from '../errors/not-authorized-error' ;



interface currentUserOptions {

    redirect : boolean

}

interface SessionPayload {
    id : string ;
    email : string ;
}

declare global {
    namespace Express {
        interface Request {
            currentuser? : SessionPayload ;
        //     session : {
        //         token : string
        //     }
        }
    }

}




const currentUser = function( req : Request , res : Response , next : NextFunction ){

    if(!req.session?.token) {

        return next() ;
    }
    try {

        const payload = jwt.verify(
            req.session.token,
            process.env.JWT_KEY!
        ) as SessionPayload ;

        req.currentuser = payload ;


    } catch (err) {

        throw new NotAuthorizedError() ;
    }
    next()
}



const requireAuth = (
    req : Request,
    res : Response,
    next : NextFunction
) => {

    if(! req.currentuser ){

        throw new NotAuthorizedError();
    }



    next();

}

export {SessionPayload,currentUser,requireAuth}