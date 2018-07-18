import variables from '../../variables';

export const SEARCHSUCCESS = 'SEARCHSUCCESS';
export const SEARCHREQUEST = 'SEARCHREQUEST';
export const SEARCHERROR = 'SEARCHERROR';

const apiURL = variables.configFiles.apiUrl;
const temp_url = `${apiURL}/search/`;
const filter_url = `${apiURL}/search/filter`;

const searchData=[
    {
        "title":'www.xyz.com',
        "subject":'Insurance',
        "credibility":'97 %',
        "user_trust":'89 %',
        "brand_value":'Good',
        "price":'8 $ / Sale',
        "request_for":'8 $ / Sale',
        "expected_profit":'72 $',
        "expected_sales":'99 $ / Month',
        "tags":["Insurance", "Life Cover"]
    },
    {
        "title":'www.asd.com',
        "subject":'Life Cover',
        "credibility":'96 %',
        "user_trust":'89 %',
        "brand_value":'Excellent',
        "price":'8 $ / Sale',
        "request_for":'8 $ / Sale',
        "expected_profit":'72 $',
        "expected_sales":'99 $ / Month',
        "tags":["Life Cover", "Banking"]


    },
    {
        "title":'www.abc.com',
        "subject":'Banking',
        "credibility":'93 %',
        "user_trust":'89 %',
        "brand_value":'Good',
        "price":'8 $ / Sale',
        "request_for":'8 $ / Sale',
        "expected_profit":'72 $',
        "expected_sales":'99 $ / Month',
        "tags":["Banking", "Life Cover"]


    },
    {
        "title":'www.cde.com',
        "subject":'Education',
        "credibility":'94 %',
        "user_trust":'89 %',
        "brand_value":'Good',
        "price":'8 $ / Sale',
        "request_for":'8 $ / Sale',
        "expected_profit":'72 $',
        "expected_sales":'99 $ / Month',
        "tags":["Education", "Life Cover", "Blog"]


    },
    {
        "title":'www.qwerty.com',
        "subject":'Insurance',
        "credibility":'97 %',
        "user_trust":'89 %',
        "brand_value":'Good',
        "price":'8 $ / Sale',
        "request_for":'8 $ / Sale',
        "expected_profit":'72 $',
        "expected_sales":'99 $ / Month',
        "tags": ["Insurance", "Banking"]


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
export function _searchAction(page) {

  return (dispatch) => {
    dispatch(handleSearchRequest());
    fetch(temp_url)
    .then((res)=> res.json())
    .then( (res) => {
      return dispatch(handleSearchSuccess(res.data))
    }).catch((err)=>{
      return dispatch(handleSearchError(err))
    })

  };
}

export function _searchFilterAction(tags, page) {
  console.log(tags.length)
  if(tags.length > 0){
      console.log(tags)
      const url= `${filter_url}/?tags=${tags}&pageReq=${page}`
      console.log('searchFilterAction')
      return (dispatch) => {
      dispatch(handleSearchRequest());
      fetch(url, {
        method: 'get',
          headers: {
            Accept: 'application/json , text/plain, */*',
            'Content-type': 'application/json',
          },
        })
        .then((res)=> res.json())
        .then((res) => {
          return dispatch(handleSearchSuccess(res.data))
        }).catch((err)=>{
          return dispatch(handleSearchError(err))
        })

    };
  }
}
