export const signIn= (userData:any) =>{
    
    return {
        type: 'SIGN_IN',
        payload: userData
    }
}
export const signOut = ()=>{
    return {
        type: 'SIGN_OUT'
    }
}