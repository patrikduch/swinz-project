//-----------------------------------------------------------------------
// <copyright file="webpack.config.js" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Bundler configuration for creating single output JS file
//-----------------------------------------------------------------------

const path = require('path');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    const outputDir = (env && env.publishDir)
        ? env.publishDir
        : __dirname;

    return [{
        mode: isDevBuild ? 'development' : 'production',

        devtool: 'inline-source-map',

        stats: { modules: false },

        entry: {
            'App': './Frontend/Index.tsx',
        },

        watchOptions: {
            ignored: /node_modules/
        },

        output: {
            filename: "dist/[name].js",
            path: path.join(outputDir, 'wwwroot'),
            publicPath: '/'
        },

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        devServer: {
            hot: true
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    include: /Frontend/,
                    loader: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                useCache: true,
                                useBabel: true,
                                babelOptions: {
                                    babelrc: false,
                                    plugins: ['react-hot-loader/babel'],
                                }
                            }
                        },

                        



                    ]
                },

                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],  
                },
            ]
        },

        plugins: [
            new CleanWebpackPlugin(path.join(outputDir, 'wwwroot', 'dist')),
            new CheckerPlugin()
        ]
    }];
};
