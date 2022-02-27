const controller = require('./controller.js')

module.exports.run = (app) => {
    app.get('/', controller.index);
    app.get('/whatismybrowser', controller.determineBrowser);
    app.get('/uppercase', controller.createUppercase);
    app.post('/cube_volume', controller.calculateCubeVolume);
};