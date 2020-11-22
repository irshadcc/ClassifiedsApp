import mongoose from 'mongoose' ;


interface Image {

    file_name : string,
    original_file_name : string,
    file_path : string

}


interface PropertyDoc extends mongoose.Document {

    title : string,
    description : string,

    price : number,

    rent_frequency : string,

    location_id : mongoose.Types.ObjectId,

    property_type : String, 
    purpose : String,
    status : String 

    images : Image[], 
    coordinates : Number[]  ,
    tags : string[],
    
    info : Map<string,string>,
    posted_on : Date, 

}


const PropertySchema = new mongoose.Schema({

    title : String,
    description : String,
   
    price : Number ,

    rent_frequency : String,

    location_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Location'
    },

    property_type : {
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
        file_name : String,
        original_file_name : String,
        file_path : String
    
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
    posted_on : {
        type : Date,
        default : Date.now
    },
})

const Property = mongoose.model<PropertyDoc>('Property',PropertySchema) ;

export default Property ; 