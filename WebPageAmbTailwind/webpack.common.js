const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './js/app.js',
        styles: './src/styles.css'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};
