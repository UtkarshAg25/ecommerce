const express = require('express');
const nodemon = require('nodemon');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const app = express();

//const admin = require('./routes/adminRoutes');
const user = require('./routes/userRoutes');
//const product = require('./routes/productRoute');




app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());

app.use('/user', user);
//app.use('/admin', admin);
// app.use('/product', product);





app.listen(config.port, (err) => {
    if(err){
        console.log('Error occur in starting the server');
    } else {
        console.log(`Server started at port ${config.port}`);
    }
});


mongoose.connect(config.database, {useNewUrlParser : true,
                                          useUnifiedTopology : true,
                                          useFindAndModify : false,
                                          useCreateIndex: true
                                         });
mongoose.connection.on('Connected', function(err) {
    if(err){
        console.log(err);
    } else {
        console.log('Connected at port 27017');
    }
});