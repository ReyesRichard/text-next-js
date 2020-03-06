import { FOO} from '../actions/fooActions'
const initialState = {foo: ''}

// create a simple reducer
const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOO:
            return {...state, foo: action.payload};
        default:
            return state
    }
};
export default simpleReducer