const express = require('express');
const app = express();

const port = 8002;
app.get('/payment-list', (req, res) => {
    let response = {
        data: {
            item: [{
                id: 1,
                name: "payment-1"
            }, {
                id: 2,
                name: "payment-2"
            }]
        }
    };
    res.status(200).json(response);
});

app.get("/", (req, res) => {
    res.send("Payment called");
});

app.listen(port, () => {
    console.log(`Listening at localhost ${port}`);
});