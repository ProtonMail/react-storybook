const assetsLoader = require('proton-pack/webpack/assets.loader');
const cssLoader = require('proton-pack/webpack/css.loader');
const jsLoader = require('proton-pack/webpack/js.loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = async ({ config, mode }) => {
    config.plugins = [
        ...config.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ];
    config.module.rules = [
        ...config.module.rules,
        ...assetsLoader({}),
        ...cssLoader({}),
        ...jsLoader({})
    ];
    config.resolve = {
        ...config.resolve,
        symlinks: false,
        alias: {
            // Ensure that the correct package is used when symlinking
            pmcrypto: path.resolve('./node_modules/pmcrypto'),
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
            'design-system': path.resolve('./node_modules/design-system'),
            'proton-shared': path.resolve('./node_modules/proton-shared'),
            'react-components': path.resolve('./node_modules/react-components')
        }
    };

    return config;
};
