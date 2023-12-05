const Calculator = require('../models/models.js');

exports.home = (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
}

exports.add = (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    let calculator = new Calculator();
    calculator.x = x;
    calculator.y = y;
    res.json({ result: `${x} + ${y} = ${calculator.add()}` });
}

exports.sub = (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    let calculator = new Calculator();
    calculator.x = x;
    calculator.y = y;
    res.json({ result: `${x} - ${y} = ${calculator.sub()}` });
}

exports.mul = (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    let calculator = new Calculator();
    calculator.x = x;
    calculator.y = y;
    res.json({ result: `${x} * ${y} = ${calculator.mul()}` });
}

exports.div = (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    let calculator = new Calculator();
    calculator.x = x;
    calculator.y = y;
    res.json({ result: `${x} / ${y} = ${calculator.div()}` });
}