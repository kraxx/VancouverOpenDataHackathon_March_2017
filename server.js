const express = require('express'),
      routes = require('./app/routes/index.js'),
      mongo = require('mongodb').MongoClient,
      app = express(),
      MONGO_URI = 'mongodb://cooldude:1234@ds137100.mlab.com:37100/opensesame', //it'll look different
      port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'public');

// app.use(express.static(__dirname + '/public'));
// app.use('/', require('./app/routes/index'));


mongo.connect(MONGO_URI, (err, db) => {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port whatever.');
    }

    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, db);

    app.listen(port, function() {
      console.log(`OpenSesame listening on port: ${port}`);
    })

});
