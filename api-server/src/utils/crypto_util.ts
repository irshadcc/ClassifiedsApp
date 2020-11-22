import crypto from 'crypto' ;



const getSHA256Hash = (...messages : string[]) => {
	
	const message = messages.reduce((accumulator ,curElement)=>{
		return accumulator + curElement ;
	},'')	

	let hash = crypto.createHash('sha256').update(message).digest('hex') ;

	return hash ;
}

const encodeBase64 = (data : string)=>{

	return Buffer.from(data).toString('base64') ;
	
}
const decodeBase64  = (encodedData : string)=>{

	return Buffer.from(encodedData,'base64').toString('ascii') ;
}

export default { getSHA256Hash,encodeBase64,decodeBase64} ;