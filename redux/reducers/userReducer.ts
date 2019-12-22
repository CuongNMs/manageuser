import {CHANGE_EMAIL, CHANGE_PASSWORD} from '../actions/actionTypes'
const INITIAL_STATE:object = {
    login_name:'',
    password: ''
}
const userReducer = (state = INITIAL_STATE, action: {type: string, text:string}) => {
    // debugger
    switch(action.type) {
        case CHANGE_EMAIL:
            return {
                ...state,
                login_name: action.text
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.text
            }
        default:
            return state
    }
}
export {userReducer}