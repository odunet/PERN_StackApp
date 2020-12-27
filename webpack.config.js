//import webpack module
const webpack = require("webpack");

//define entry and exit points, i.e. takes in JS files and spits out a bundle
const config = {
    entry: {
        index: __dirname + '/public/js/src/index.jsx'
    },
    output: {
        path: __dirname + '/public/dist',
        filename: '[name].bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx','.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
    //Use this option if you want to get rid of the babel.config.js file
                // use: {
                //     loader: 'babel-loader',
                // options: {
                //     presets: ["@babel/preset-env", "@babel/preset-react"]
                //          }
                // }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                loader: "file-loader",

                options: {
                    name: "[name].[ext]",
                    outputPath: "/images",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }

};

//export module
module.exports = config;