const path = require('path');

module.exports = { 
    devtool : 'source-map',
    mode : 'development',
    entry: __dirname + '/src/index.js', 
    output: { 
        path: __dirname + '/build', 
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            },        
        ]
    },
    devServer : {
        static : './build',
        historyApiFallback :true,
        port : 7777,
        hot : true,
        open : true
    }
};