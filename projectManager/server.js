const express = require('express');
const app = express();
require('./server/config/mongoose.config');
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );