const initialState = {
  loading: false,
  success: false,
  error: false,
  message: '',
  result: [],
};

// receiving action response

export default function fetchSignUp(state = initialState, action) {
  switch (action.type) {
    case 'SIGNUPSUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        message: action.message,
        result: action.payload,
      };
      break;
    case 'SIGNUPREQUEST':
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        message: action.message,
        result: [],
      };
      break;
    case 'SIGNUPERROR':
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        message: action.message,
        result: action.payload,
      };
    default:
      return state;
  }
}
