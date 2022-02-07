module.exports = { 
    mode : 'production',
    entry: __dirname + '/src/App.js', 
    output: { 
        path: __dirname + '/build', 
        filename: 'bundle.js' 
    } 
};