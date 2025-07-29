const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력
    output: {
        path: path.jojn(__dirname, 'dist'), // 현재 폴더를 가져온다.
        filename: 'app.js'
    } // 출력

};