export const intitialState = {
    data: '',
    list: [],
    toggleMenu: false,
    idProduct:""
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
        default: {
            return state;
        }
    }
};
export default reducer;