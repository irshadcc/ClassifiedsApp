import express from 'express' ;
import { json } from 'body-parser' ;
import 'express-async-errors' ;
import morgan from 'morgan' ;
import helmet from 'helmet' ;
import cookieSession from 'cookie-session' ;

import NotFoundError from './errors/not-found-error' ;
import errorHandler from './middlewares/error-handler' ;

import authRoutes from './routes/auth/routes'
import propertyRoutes from './routes/property/routes'; 


const app = express() 
app.set('trust proxy',1)


app.use(morgan('combined'))
app.use(helmet()) ;
app.use(json()) ;
app.use(
    cookieSession({
        signed : false,
        secure : false 
    })
);

authRoutes.forEach((router)=>{
    app.use(router)
})
propertyRoutes.forEach((router)=>{
    app.use(router)
})


app.all('*', async (req,res,next)=>{
    
    throw new NotFoundError() ;
})
app.use(errorHandler) ;



export default app ;
