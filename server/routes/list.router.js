const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here... 
// 
// GET students
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM shopping_list`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});     

// end comment 

// POST list
router.post('/', (req, res) => {
    const newItem = req.body.food_name
    const sqlText = `INSERT INTO shopping_list (food_name, quantity, unit)
                    VALUES ($1, $2, $3);`;

    pool.query(sqlText, [newItem])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

//DELETE 
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM shopping_list WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            console.log('Food Item deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})//end delete 

module.exports = router;