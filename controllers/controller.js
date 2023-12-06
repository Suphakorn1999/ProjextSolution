const Calculator = require('../models/models.js');

exports.home = (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
}

exports.calculate = (req, res) => {
    let x = parseInt(req.query.x);
    let y = parseInt(req.query.y);
    let operation = req.query.operation;

    if(operation == 'add') {
        let calculator = new Calculator(x, y);
        let result = calculator.calculate('add');
        res.json({result: x + ' + ' + y + ' = ' + result});
    } else if (operation == "sub") {
      let calculator = new Calculator(x, y);
      let result = calculator.calculate("sub");
      res.json({ result: x + " - " + y + " = " + result });
    } else if (operation == "mul") {
      let calculator = new Calculator(x, y);
      let result = calculator.calculate("mul");
      res.json({ result: x + " * " + y + " = " + result });
    } else if (operation == "div") {
      let calculator = new Calculator(x, y);
      let result = calculator.calculate("div");
      res.json({ result: x + " / " + y + " = " + result });
    } else {
      res.json({ result: "Invalid operation" });
    }
}