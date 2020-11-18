import express from 'express' ;

import { json } from 'body-parser' ;
import 'express-async-errors' ;
import morgan from 'morgan' ;
import helmet from 'helmet' ;
import mongoose from 'mongoose' ;
import cookieSession from 'cookie-session' ;

import log from './utils/console-log' ;
import NotFoundError from './errors/not-found-error' ;
import errorHandler from './middlewares/error-handler' ;

import authRoutes from './routes/auth/routes'
import propertyRotues from './routes/property/routes'; 



const app = express() 
app.set('trust proxy',1)

app.use(morgan('combined'))
app.use(helmet()) ;
app.use(json()) ;
app.use(
    cookieSession({
        signed : false,
        secure : false 
    })
);

authRoutes.forEach((router)=>{
    app.use(router)
})
propertyRotues.forEach((router)=>{
    app.use(router)
})


app.all('*', async (req,res,next)=>{
    
    throw new NotFoundError() ;
})
app.use(errorHandler) ;

const start = async ()=>{

    process.env.SERVER_PORT = '3000' ;
    process.env.JWT_KEY = 'secret' ;
    process.env.MONGO_DB_HOST = 'localhost'
    process.env.MONGO_DB_PORT = '27017'


    if(!process.env.SERVER_PORT ){
        throw new Error('SERVER_PORT must be defined')
    }
    if(!process.env.JWT_KEY){
        throw new Error('JWT_KEY must be defined') ;
    }
    if(!process.env.MONGO_DB_HOST){ 
        throw new Error('MONGO_DB_HOST must be defined') ;
    }
    if(!process.env.MONGO_DB_PORT){

        throw new Error('MONGO_DB_PORT must be defined') ;
    }
    // if(!process.env.MONGO_DB_USERNAME){
    //     throw new Error('MONGO_DB_USERNAME must be defined') ;
    // }

    try {
        const MONGO_DB_URL = "mongodb://" + process.env.MONGO_DB_HOST + ":" +process.env.MONGO_DB_PORT 
          
        await mongoose.connect(MONGO_DB_URL,{
            useNewUrlParser : true,
            useUnifiedTopology :true
        })
        log("INFO","MongoDB connected at  " + MONGO_DB_URL) ;
    }
    catch(err){

        log("ERROR",err) ;
    }
    app.listen(parseInt(process.env.SERVER_PORT),()=>{
        log("INFO","App listening on :" + process.env.SERVER_PORT)
    })

}
start() ;