
import dotenv from 'dotenv' ;
import mongoose from 'mongoose' ;


if(process.env.NODE_ENV == "dev"){
    dotenv.config()
}


import app from './app' ;
import log from './utils/console-log' ;



const start = async ()=>{

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
    if(!process.env.UPLOADS_BASE_DIR){

        throw new Error('UPLOADS_DIR must be defined'); 
    }
    

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