// const express = require('express'),
//       router = express.Router();

// router.get('/', (req,res) => {
//   res.render('./pages/index');
// })
//
// module.exports = router;

module.exports = (app) => {
    app.route('/')
        .get((req, res) => {
            res.render('pages/index');
        });
    app.route('/datapage')
        .get((req, res) => {
            res.render('pages/datapage');
        });
      }
