const assetsLoader = require('proton-pack/webpack/assets.loader');
const cssLoader = require('proton-pack/webpack/css.loader');
const jsLoader = require('proton-pack/webpack/js.loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

    return config;
};
