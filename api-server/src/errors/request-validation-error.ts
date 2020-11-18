import CustomError from './custom-error' ;


interface FieldError {

    field : string,
    message : string
}


class RequestValidationError extends CustomError {

    statusCode = 400 ;

    constructor(public errors : FieldError[] ){
        super('Invalid request parameters')

        this.errors = errors ;

        Object.setPrototypeOf(this,RequestValidationError.prototype) ;
        
    }

    serializeErrors() {

        return {

            message : this.message,
            statusCode : this.statusCode,
            
            errors : this.errors 
        }
    }
}
export default RequestValidationError ;
