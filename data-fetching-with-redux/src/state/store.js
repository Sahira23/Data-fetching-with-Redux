import { rootReducer } from "./reducers/rootReducer";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import {logger} from "redux-logger"
import { fetch_photos } from "./actions/actions";


export const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk,logger))
)

export default store