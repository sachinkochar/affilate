console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  var url = {
    liveURL: 'http://18.195.238.14:4001',
    localURL: 'http://18.195.238.14:4001',
  };
  module.exports = { url };
} else if (process.env.NODE_ENV === 'development') {
  var url = {
    liveURL: 'http://18.195.238.14:3000',
    localURL: 'http://18.195.238.14:3000',
    // liveURL: 'http://192.168.1.6:5000',
    // localURL: 'http://192.168.1.6:5000',
  };
  module.exports = { url };
}
