
import express, { Request, Response } from 'express' ;
import { currentUser, requireAuth } from '../../middlewares/auth-middleware';



const router = express.Router() ;

router.use(currentUser) ;
router.use(requireAuth) ;

router.post('/api/users/signup',

    async (req : Request, res : Response) => {


    }
)



export default router ;