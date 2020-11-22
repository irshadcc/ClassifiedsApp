import mongoose from 'mongoose' ;
import Password from '../utils/password' ;




interface UserDoc extends mongoose.Document {

    first_name : string ,
    last_name : string ,
    gender : string,
    email  : string ,
    password : string ,

    info : {
        status : string,
        created_at : Date ,
        last_login : {
            attempt_at : Date ,
            attempt_count : number ;
        }
    }
}

const userSchema : mongoose.Schema = new mongoose.Schema(

    {
        first_name : {
            type : String,
            required : true 
        },
        last_name : {
            type : String ,
            required : true 
        },
        email : {
            type : String,
            lowercase : true,
            required : true 
        },
        password : {
            type : String,
            required : true 
        },
        gender : {
            type : String,
            enum : ['Male','Female']
        },
        info : {
            status : {
                type : String ,
                enum : ['Active','InActive','Blocked','Verification Pending']
            },
            created_at : {
                type : Date,
                default : Date.now()
            } ,
            last_login : {
                attempt_at : Date,
                attempt_count : Number 
            }
        }
    },
    {
        toJSON : {
            transform(doc,ret){
                ret.id = ret._id ;
                delete ret._id ;
                delete ret.password ;
                delete ret.__v ;
            }
        }
    }



)

userSchema.pre('save', async function(done){

    if( this.isModified('password') ){

        const hashed = await Password.toHash(this.get('password')) ;
        this.set('password',hashed) ;
    }
    done() ;
})

const User = mongoose.model<UserDoc>('User',userSchema) ;

export default User ;