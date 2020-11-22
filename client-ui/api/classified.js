const axios = require('axios') ;


// class Classified {

//     constructor(baseURL){

//         this.instance = axios.create({
//             baseURL : baseURL,
//         })
//         this.token = null

//     }


//     async signInWithEmailAndPassword(email,password){

//         try{

//             const res = await this.instance.post('/api/users/signin',{
//                 email : email,
//                 password : password 
//             })

//             this.token = res.headers['set-cookie'][0].split(';')[0]

//             return res.data ;
//         } catch(err) {

//             throw err
//         }
//     }

//     async signUpWithEmailAndPassword(user) {


//         try {

//             const res = await this.instance.post('/api/users/signup',user) ;

//             return res.data ;
//         } catch(err){

//             throw err 

//         }
//     }
// };
let lib = require('./values')

let property = require('./property')


let Classified = {


    login : function(){

        console.log(lib.token)


    },
    setToken : function(token){

        lib.token = token
    },
    property : property

}

module.exports = Classified 