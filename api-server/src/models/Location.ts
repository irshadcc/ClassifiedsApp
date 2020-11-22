import mongoose from 'mongoose' ;

interface LocationDoc extends mongoose.Document {

    street : string,
    sub_locality : string,
    locality : string,
    state : string
    country : string
} 


const LocationSchema : mongoose.Schema = new mongoose.Schema({

    street : String ,
    sub_locality : String,
    locality : String,
    state : String,
    country : String
})

let Location =  mongoose.model<LocationDoc>('Location',LocationSchema) ;

export default Location ;
