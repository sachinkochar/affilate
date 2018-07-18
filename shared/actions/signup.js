import variables from '../../variables';

export const SIGNUPSUCCESS = 'SIGNUPSUCCESS';
export const SIGNUPREQUEST = 'SIGNUPREQUEST';
export const SIGNUPERROR = 'SIGNUPERROR';

const apiURL = variables.configFiles.apiUrl;

// sending received response form fetchSignup to reducer
export function handleSignUpSuccess(res) {
  return {
    type: SIGNUPSUCCESS,
    payload: res,
    message: "Success!!",
  };
}

export function handleSignUpRequest() {
  return {
    type: SIGNUPREQUEST,
    message: 'Loading!!',
  };
}

// to handle error
export function handleSignupError(err) {
  return {
    type: SIGNUPERROR,
    payload: err,
    message: "Error!!",
  };
}

// sending post request of signup data i.e. email and password to backend
export function _actionSignup(data) {

  const url = `${apiURL}/email`;

  return (dispatch) => {
    dispatch(handleSignUpRequest());
    fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json , text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((res) => {
        if (typeof res === 'object') {
          console.log("res", res)
          return dispatch(handleSignUpSuccess(res));
        }
        return dispatch(handleSignupError(res));
      })
      .catch(err => dispatch(handleSignupError(err)));
  };
}
