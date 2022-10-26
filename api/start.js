const app = require('./app.js');
const config = require('../config');

const port = config.get('port');

app.listen(port, () => {
    console.log('Server start at localhost:' + port);
});
