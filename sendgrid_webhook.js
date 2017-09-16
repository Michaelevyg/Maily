var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'mymaily' }, function(err, tunnel) {
    console.log(tunnel)
    console.log('LT running')
});