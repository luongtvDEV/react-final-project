import React, { createContext, useContext, useReducer } from "react";
import reducer,{intitialState} from "./Reducer";


export const AppContext = createContext();

const AppProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer, intitialState);
    return <AppContext.Provider value={[state,dispatch]}>
        {children}
    </AppContext.Provider>
}

export const AppConsumer =()=> useContext(AppContext);

export default AppProvider;