const express = require('express');

const router = express.Router();

const server = express();
server.use(express.json())


router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id',validatePostId, (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  
}

module.exports = router;
