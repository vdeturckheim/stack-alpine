'use strict';
const http = require('http');
const addon = require('bindings')('hello');

http.createServer((req, res) => {

    const native = require('sq-native');
    console.log('hello', addon.hello());
    res.end(native.getVersion() + '\n');
})
    .listen(process.env.PORT || 8080);

