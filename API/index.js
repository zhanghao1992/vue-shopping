var express = require('express');
var router = express.Router();
// 列表页
router.get('/user', function (req, res, next) {
    res.send(JSON.stringify({
      code: 0,
      name: 'zhanghao'
    }));
});

// router.get('/getRefereeList', function (req, res) {
//     vService.transfer(req, res, {path: '/Referee/getRefereeInfoList', url: 'http://172.21.120.174:18088'});
//
// });

router.post('/log', function (req, res, next) {
    res.send(JSON.stringify({
      code: 0,
      name: 'zhanghao'
    }));
});

router.post('/submit', function (req, res, next) {
    res.send(JSON.stringify({
      code: 0,
      name: 'zhanghao'
    }));
});


module.exports = router;
