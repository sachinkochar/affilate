// import { LOGIN, ERROR, FORGETPASSWORD } from '../actions/login_action';

const initialState = {
    search_data: '',
  };
  
  // receiving response sent by action according to type of action
  export default function test(state = initialState, action) {
      console.log(action,'action')
    switch (action.type) {
      case 'SEARCHSUCCESS':
        return { search_data: action.payload };
        break;
  
      case 'SEARCHERROR':
        return { search_data: action.payload };
        break;
  
      case 'SEARCHREQUEST':
        return { search_data: action.message };
        break;
  
      default:
        return state;
    }
  }
  