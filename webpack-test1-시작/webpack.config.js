module.exports = { 
    devtool : 'source-map',
    mode : 'development',
    entry: __dirname + '/src/App.js', 
    output: { 
        path: __dirname + '/build', 
        filename: 'bundle.js' 
    } 
};