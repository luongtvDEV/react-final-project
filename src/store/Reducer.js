export const intitialState = {
    data: '',
    list: [],
    toggleMenu: false,
    idProduct:"",
    isLogin: false,
};
const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'DATA': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'LIST': {
            return {
                ...state,
                list: action.payload
            }
        }
        case 'OPEN': {
            return {
                ...state,
                toggleMenu: action.payload
            }
        }
        case 'CLOSE': {
            return {
                ...state,
                toggleMenu: action.payload
            }
        }
        case 'GET_ID_PRODUCT': {
            return {
                ...state,
                idProduct: action.payload
            }
        }
        case 'LOGIN1': {
            console.log("heelo")
            return {
                ...state,
                isLogin: true,
                
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isLogin: false
            }
        }
        default: {
            return state;
        }
    }
};
export default reducer;