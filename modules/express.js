const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello Node</h1>');
});

app.get('/users', (req, res) =>{
    const users = [
        {
            nome: "Wilson Tuberculoso",
            email: "Wilson@gmail.com"
        },
        {
            nome: "Belle Belinha",
            email: "belle@gmail.com"
        }
    ];
    res.status(200).json(users);
})

const port = 8080

app.listen(port, () => console.log("Dale"));
