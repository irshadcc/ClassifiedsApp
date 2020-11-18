import CustomError  from './custom-error' 

class NotAuthorizedError extends CustomError {

    statusCode = 401 ; 

    constructor( err = "Not Authorized") {
        super(err) ;


        Object.setPrototypeOf(this,NotAuthorizedError.prototype) ;
    }

    serializeErrors() {
    
        return {
            message : this.message,
            statusCode : this.statusCode 
        }
    
    }

}

export default NotAuthorizedError ;