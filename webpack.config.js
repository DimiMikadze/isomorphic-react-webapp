module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "./public/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /(app)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};