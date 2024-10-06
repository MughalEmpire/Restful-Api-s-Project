const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Books = require('./routes/book');

dotenv.config();
app.use(express.json());
app.use('/api/books', Books);

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParse: true, useUnifiedTopology: true})
.then(() => console.log('MongoDb Connected Successfully!'))
.catch(err => console.log('error: err.message'));

app.get('/', (req, res) => {
    res.send('Welcome to the RESTFUL API SERVICE!');
});

app.listen(PORT, () => console.log(`Server is listening on the http://localhost:27017:${PORT}`));