
interface ErrorMessage{

	message : string ;
	statusCode : number ;

}

abstract class CustomError extends Error {

	abstract statusCode : number ;

	constructor(message : string){
		super(message) ;

		Object.setPrototypeOf(this,CustomError.prototype) ;

	}

	abstract serializeErrors(): ErrorMessage ;

}
// export { ErrorMessage } ;
export default CustomError ;