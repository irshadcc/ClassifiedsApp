
import express, { Request, Response } from 'express' ;
import path from 'path' ;
import { currentUser, requireAuth } from '../../middlewares/auth-middleware';
import Multer from '../../middlewares/multer-middleware';
import Property from '../../models/Property';

const router = express.Router() ;

router.use(currentUser) ;
router.use(requireAuth) ;

console.log(process.env.UPLOADS_BASE_DIR)

const uploads = Multer({
    type : 'image',
    uploadsDir : path.join(process.env.UPLOADS_BASE_DIR!,'images'),
    transformFileName : true,

    // fileFilter : (req,file,cb) =>{

    //     const mimetypes = ['image/png','image/jpg','image/jpeg']

    //     console.log(file.mimetype)

    //     if(file.mimetype in mimetypes){
    //         cb(null,true)
    //     } else {

    //         console.log("I am here")
    //         cb(null,false)
    //         return cb(new RequestValidationError([{
    //             field : 'images',
    //             message : 'Invalid File Type'
    //         }]))
    //     }
    // }
})

router.post('/api/property/add', uploads.any(),async (req : Request, res : Response) => {

    const files = (req.files) as Express.Multer.File[] ;

    const images = files.map((file)=>{
        return {
            file_name : file.filename,
            original_file_name : file.originalname,
            file_path : file.path
        }
    }) 
    let data  = JSON.parse(req.body.data) ;
    // const data = req.body.data
    data.images = images

    let property = new Property(data)

    property.save()

    
    
    res.send({"message" : "sucess"})
})

export default router ;