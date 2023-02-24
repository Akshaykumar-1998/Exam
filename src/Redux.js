import React from "react";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
function Redux(){
    return(
        <Provider Store={Store}>
        <div>
            <h1> HI</h1>
        </div>
        </Provider>
        )
}
export default Redux;