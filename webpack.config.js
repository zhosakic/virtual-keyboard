const path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },
};

module.exports = (env, options) => {

    let production = options.mode === 'production';

    conf.devtool = production ? false : "eval-sourcemap";

    return conf;
};
