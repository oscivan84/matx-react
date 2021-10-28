const router = require('express').Router()

//const customerController = require('../controllers/customerController');
const mysqlConnection = require('../database.js')

router.get('/', (req, res) => {
    mysqlConnection.query(
        'SELECT * FROM movimientomercancia',
        (err, row, fields) => {
            if (err) {
                res.json(err)
            } else {
                console.log(row)
            }
        }
    );
});

// GET An Employee
router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM movimientomercancia WHERE idmovimiento = ?', [id], (err, rows, fields) => {
      if (!err) {
        
        res.json(rows[0]);
      } else {
        console.log("ok");
        console.log(err);
      }
    });
  });
//router.post('/add', customerController.save);
//router.get('/update/:id', customerController.edit);
//router.post('/update/:id', customerController.update);
//router.get('/delete/:id', customerController.delete);

module.exports = router
