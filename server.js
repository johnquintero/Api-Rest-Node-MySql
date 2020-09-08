const http = require('http');
const app = require('./app');

const PORT = (process.env.PORT || '3000');

app.set('port', PORT);

const server = http.createServer(app);

server.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});

