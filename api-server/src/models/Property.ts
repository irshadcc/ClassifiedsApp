import mongoose from 'mongoose' ;


interface Image {

    path : string
}


interface PropertyDoc extends mongoose.Document {

    title : string,
    description : string,

    price : {
        amount : string,
        rentFrequency : string 
    },

    location : mongoose.Types.ObjectId,

    propertyType : String, 
    purpose : String,
    status : String 

    images : Image[], 
    coordinates : Number[]  ,
    tags : string[],
    
    info : Map<string,string>,
    postedOn : Date, 

}


const PropertySchema = new mongoose.Schema({

    title : String,
    description : String,
    
    price : {
        amount : Number, 
        rentFrequency : String,   
    },

    location : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Location'
    },

    propertyType : {
        type : String,
        enum : ["Villa","Apartment"]
    },  
    purpose : {
        type : String,
        enum : ["Rent","Buy"]
    },   // Rent or Buy  
    status : {
        type : String,
        enum : ["Active","Expired","Sold out"]
    },

    images : [{
        url_path : String
    }],
    coordinates : {
        type : [Number],
        index : '2dsphere'
    },
    tags :[{
        type : String
    }],
    info : {
        type : Map,
        of : String
    },
    postedOn : {
        type : Date,
        default : Date.now
    },
})

const Property = mongoose.model<PropertyDoc>('Property',PropertySchema) ;

export default Property ; 