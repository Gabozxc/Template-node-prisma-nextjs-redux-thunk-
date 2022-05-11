const testRoute = require('./testRoute');


module.exports = indexRoutes = (app) => {
    app.use('/api/test', testRoute);
};