import CustomError from './custom-error' ;


class NotFoundError extends CustomError {


    statusCode = 404 ; 

    constructor(){
        super("Not Found")

        Object.setPrototypeOf(this,NotFoundError.prototype) ;
    }

    serializeErrors(){

        return {
            statusCode : this.statusCode,
            message : this.message
        }

    }
}

export default NotFoundError ;