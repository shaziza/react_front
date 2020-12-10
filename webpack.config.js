const config = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules/,
                ],
                use: [
                    "babel-loader"
                ]
            }, {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader',],
            }, {
                test: /\.scss$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                ]
            }, {
                test: /\.(css|scss)$/,
                use: [
                    {
                    loader: 'css-loader',
                    }, 
                    'postcss-loader'
                ],
                exclude: /node_modules/,
            },
            rules.images,
            rules.svg,
            rules.fonts
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}
module.exports = config;
