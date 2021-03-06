module.exports = { 
    mode : 'production',
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
                exclude : /\.module\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options : { modules: true } }
                ]
            }         
        ]
    },
};