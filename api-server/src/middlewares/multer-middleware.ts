import path from 'path'

import multer, { Multer } from 'multer' ;
import NotAuthorizedError from '../errors/not-authorized-error';
import cryptoUtil from '../utils/crypto_util';


interface MulterConfig {

    type : string // Type of the file upload Images etc
    uploadsDir : string , // Uploads Directory
    transformFileName : boolean
    
    fileFilter?(
        req: Express.Request,
        file: Express.Multer.File,
        callback: multer.FileFilterCallback,
    ): void;
}



const getFileName = (user_id : string, type : string, originalname : string) => {

    let hash1 = cryptoUtil.getSHA256Hash(user_id,type)
    let hash2 = cryptoUtil.getSHA256Hash(originalname + Date.now().toString()) ;

    let hash3 = cryptoUtil.getSHA256Hash(hash1 + hash2)

    return hash3 + '_' + hash2;
}


function Multer(config : MulterConfig){

    let storage = multer.diskStorage({
        destination : function(req,file,cb) {
            cb(null,config.uploadsDir)
        },
        filename : function(req,file,cb){

            if(!req.currentuser?.id){

                throw new NotAuthorizedError("File Upload is not authorized without signin")
            }

            if(config.transformFileName){
                const filename = getFileName(req.currentuser?.id,config.type,file.originalname) + path.extname(file.originalname);
                cb(null,filename)
               
            } else {
                cb(null,file.fieldname) ;
            }
        }
    })

    return multer({
        storage : storage ,
        fileFilter : config.fileFilter 
    
    }) 

}


export default Multer ;