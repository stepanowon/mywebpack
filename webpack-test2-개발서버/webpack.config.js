const path = require('path');

module.exports = { 
    devtool : 'source-map',
    mode : 'development',
    entry: __dirname + '/src/App.js', 
    output: { 
        path: __dirname + '/build', 
        filename: 'bundle.js' 
    },
    devServer : {
        static : './build',
        historyApiFallback :true,
        port : 7777,
        hot : true,
        open : true
    }
};