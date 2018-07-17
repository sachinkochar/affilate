import variables from '../../variables';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

export const TAGSSUCCESS = 'TAGSSUCCESS';
export const TAGSREQUEST = 'TAGSREQUEST';
export const TAGSERROR = 'TAGSERROR';

const tags=[ 'Blog', 'Website', 'E-commerce', 'Insurance', 'Banking', 'Education' ]
// sending received response form fetchSEARCH to reducer
export function handleTagsSuccess(res) {
  return {
    type: TAGSSUCCESS,
    payload: res,
  };
}

export function handleTagsRequest() {
  return {
    type: TAGSREQUEST,
    message: 'loading',
  };
}

// to handle error
export function handleTagsError(err) {
  return {
    type: TAGSERROR,
    payload: err,
    message: err.message,
  };
}

// sending post request of search data i.e. email and password to backend
export function _tagsAction() {
    console.log('tagsAction')
    
  return (dispatch) => {
    dispatch(handleTagsRequest());
    return dispatch(handleTagsSuccess(tags))
    
  };
}
