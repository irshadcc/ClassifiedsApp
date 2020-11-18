import { Request, Response, NextFunction } from 'express' ;
import CustomError  from '../errors/custom-error' ;


const errorHandler = (
    err : Error,
    req : Request ,
    res : Response,
    next : NextFunction
) =>{

    if( err instanceof CustomError ){
        console.log(err) ;

        return res.status(err.statusCode).send(err.serializeErrors())

    }

    console.log(err.stack) ;
    res.status(400).send({
        message : "Something went wrong",
        statusCode : 400
    })
}


export default errorHandler ;