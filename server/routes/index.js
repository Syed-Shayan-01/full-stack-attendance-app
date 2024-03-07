const express = require('express');
const router = express.Router();

// provide 4 sexy jokes 
let jokeList = [
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    "What do you call a group of cows playing instruments? A moo-sical band.",
    'Why don’t scientists trust atoms? Because they make up everything.',
    'Why did the bicycle fall over? Because it was two-tired.'
]
router.get('/', (req, res) => {

    res.send(jokeList);
})
module.exports = router;