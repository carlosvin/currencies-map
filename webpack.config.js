module.exports = {
    entry: {
        codes: './src/codes.ts',
        names: './src/CurrencyNamesMap.ts',
        symbols: './src/CurrencySymbolsMap.ts'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};