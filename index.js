require('dotenv').config();
const cors = require('cors');
const router = require('./routes/router');
const express = require('express');
const path = require('path');

const app = express();


app.use(express.json());


app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname, 'build')));


app.use('/api', router);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


require('./database');


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} successfully.`);
});
