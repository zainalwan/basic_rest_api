module.exports.run = (express, app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
};