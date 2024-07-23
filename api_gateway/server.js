const gateway = require('fast-gateway');

const port = 9001;

const server = gateway({
    routes: [{
        prefix: '/order',
        target: 'http://localhost:8001',
        hooks: {
            onRequest (req, res) {
                console.log(`Request to service1: ${req.method} ${req.url}`);
            }
        }
    }, {
        prefix: '/payment',
        target: 'http://localhost:8002',
        hooks: {
            onRequest (req, res) {
                console.log(`Request to service1: ${req.method} ${req.url}`);
            }
        }
    }]
});

server.get('/test', (req, res) => {
    res.send('Gateway Called');
});

server.start(port).then(server => {
    console.log(`Gateway is runing ${port}`);
});
