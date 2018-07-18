// import { LOGIN, ERROR, FORGETPASSWORD } from '../actions/login_action';

const initialState = {
    tags_data: '',
  };
  
  // receiving response sent by action according to type of action
  export default function test(state = initialState, action) {
      console.log(action,'action')
    switch (action.type) {
      case 'TAGSSUCCESS':
        return { tags_data: action.payload };
        break;
  
      case 'TAGSERROR':
        return { tags_data: action.payload };
        break;
  
      case 'TAGSREQUEST':
        return { tags_data: action.message };
        break;
  
      default:
        return state;
    }
  }
  