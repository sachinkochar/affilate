console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  var configFiles = {
   apiUrl: 'http://localhost:3000/api',
   fbId: '194272327936106',
   gooleId: '548645868132-r43er88ob6r0eukdhat4mk16foiljn9u.apps.googleusercontent.com',
   emailReg: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  };
  module.exports = { url };
} else if (process.env.NODE_ENV === 'development') {
  var configFiles = {
    apiUrl: 'http://localhost:3000/api',
    fbId: '194272327936106',
    gooleId: '548645868132-r43er88ob6r0eukdhat4mk16foiljn9u.apps.googleusercontent.com',
    emailReg: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
   };
  module.exports = { configFiles };
}
