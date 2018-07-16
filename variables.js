console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  var configFiles = {
   apiUrl: 'http://localhost:9000',
   fbId: '194272327936106',
   gooleId: '548645868132-n8rcc09datfhvikaprdcssl149ldncr6.apps.googleusercontent.com',
   emailReg: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  };
  module.exports = { url };
} else if (process.env.NODE_ENV === 'development') {
  var configFiles = {
    apiUrl: 'http://localhost:9000',
    fbId: '194272327936106',
    gooleId: '548645868132-n8rcc09datfhvikaprdcssl149ldncr6.apps.googleusercontent.com',
    emailReg: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
   };
  module.exports = { configFiles };
}
