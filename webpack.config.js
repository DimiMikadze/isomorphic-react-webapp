var path = require('path');

module.exports = {
    entry: "./src/client/client.js",
    output: {
        filename: "./dist/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src/client"),
                    path.resolve(__dirname, "src/shared"),
                    path.resolve(__dirname, "src/utils")
                ],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};