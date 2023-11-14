const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
    const { username, email } = req.body;

    // In a real application, you would store this data in a database
    console.log(`User registered: ${username}, ${email}`);

    res.send('Registration successful!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
