const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/router'));

app.listen(port, function() {
  console.log(`OpenSesame listening on port: ${port}`);
})
