import React , { createContext, useReducer } from 'react' ;

const UserContext = createContext()

let init_user = {
    first_name : '',
    last_name : '',
    email : ''
}

function userReducer(user,action){


    console.log(user,action)

}


function UserProvider({children}){


    const [user,userDispatch] = useReducer(userReducer,init_user);


    return (
        <UserContext.Provider value ={[user,userDispatch]}>
            {children}
        </UserContext.Provider>

    )
}





export {UserContext,UserProvider}
