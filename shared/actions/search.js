import variables from '../../variables';

export const SEARCHSUCCESS = 'SEARCHSUCCESS';
export const SEARCHREQUEST = 'SEARCHREQUEST';
export const SEARCHERROR = 'SEARCHERROR';

const apiURL = variables.configFiles.apiUrl;
const searchData=[
    {
        title:'www.xyz.com',
        subject:'Insurance',
        credibility:'97 %',
        user_trust:'89 %',
        brand_value:'Good',
        price:'8 $ / Sale',
        request_for:'8 $ / Sale',
        expected_profit:'72 $',
        expected_sales:'99 $ / Month'
    },
    {
        title:'www.asd.com',
        subject:'Life Cover',
        credibility:'96 %',
        user_trust:'89 %',
        brand_value:'Excellent',
        price:'8 $ / Sale',
        request_for:'8 $ / Sale',
        expected_profit:'72 $',
        expected_sales:'99 $ / Month'

    },
    {
        title:'www.abc.com',
        subject:'Banking',
        credibility:'93 %',
        user_trust:'89 %',
        brand_value:'Good',
        price:'8 $ / Sale',
        request_for:'8 $ / Sale',
        expected_profit:'72 $',
        expected_sales:'99 $ / Month'

    },
    {
        title:'www.cde.com',
        subject:'Education',
        credibility:'94 %',
        user_trust:'89 %',
        brand_value:'Good',
        price:'8 $ / Sale',
        request_for:'8 $ / Sale',
        expected_profit:'72 $',
        expected_sales:'99 $ / Month'

    },
    {
        title:'www.qwerty.com',
        subject:'Insurance',
        credibility:'97 %',
        user_trust:'89 %',
        brand_value:'Good',
        price:'8 $ / Sale',
        request_for:'8 $ / Sale',
        expected_profit:'72 $',
        expected_sales:'99 $ / Month'

    }
]
// sending received response form fetchSEARCH to reducer
export function handleSearchSuccess(res) {
  return {
    type: SEARCHSUCCESS,
    payload: res,
  };
}

export function handleSearchRequest() {
  return {
    type: SEARCHREQUEST,
    message: 'loading',
  };
}

// to handle error
export function handleSearchError(err) {
  return {
    type: SEARCHERROR,
    payload: err,
    message: err.message,
  };
}

// sending post request of search data i.e. email and password to backend
export function _searchAction() {
    console.log('searchAction')
    
  return (dispatch) => {
    dispatch(handleSearchRequest());
    return dispatch(handleSearchSuccess(searchData))
    
  };
}
