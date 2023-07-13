export const SET_DATA = (payload) => {
    return {
        type: "DATA",
        payload
    }
}
export const SET_LIST = (payload) => {
    return {
        type: "LIST",
        payload
    }
}

export const TOGGLE_MENU=(payload)=>{
    return{
        type: 'OPEN',
        payload
    }
}
export const CLOSE=(payload)=>{
    return{
        type: 'CLOSE',
        payload
    }
}
export const GET_ID_PRODUCT=(payload)=>{
    return{
        type: 'GET_ID_PRODUCT',
        payload
    }
}
export const LOGIN1=()=>{
    return{
        type: 'LOGIN1',
    }
}
export const LOGOUT=()=>{
    return{
        type: 'LOGOUT',
    }
}
