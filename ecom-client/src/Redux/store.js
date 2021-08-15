import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import{ getProductReducer} from "./reducers/productReducer"
import {composeWithDevTools} from "redux-devtools-extension"

const reducer = combineReducers({
    getProduct:getProductReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store;