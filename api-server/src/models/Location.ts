import mongoose from 'mongoose' ;

interface LocationDoc extends mongoose.Document {

    subLocality : string,
    locality : string , 
    state   : string 
} 


const LocationSchema : mongoose.Schema = new mongoose.Schema({

    street : String ,
    subLocality : String,
    locality : String,
    state : String,
})

let Location =  mongoose.model<LocationDoc>('Location',LocationSchema) ;

export default Location ;
