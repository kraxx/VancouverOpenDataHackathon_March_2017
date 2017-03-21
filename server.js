const express = require('express'),
      routes = require('./app/routes/index.js'),
      app = express(),
      port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'public');

app.use(express.static(__dirname + '/public'));
// app.use('/', require('./app/routes/index'));

routes(app);

app.listen(port, function() {
  console.log(`OpenSesame listening on port: ${port}`);
})
