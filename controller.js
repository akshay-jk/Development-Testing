import ServiceLayer from './service.js'

export default {
    Addition: (req, res) => {
        let { Operands } = req.body;
        let Result = ServiceLayer.Addition(...Operands);
        res.status(200).json({
            status: "ok", msg: "Addition Performed",
            data: { value: Result }
        });
    },
    Subtraction: (req, res) => {
        let { Operands } = req.body;
        let Result = ServiceLayer.Subtraction(...Operands);
        res.status(200).json({
            status: "ok", msg: "Addition Performed",
            data: { value: Result }
        });
    },
    Multiplication: (req, res) => {
        let { Operands } = req.body;
        let Result = ServiceLayer.Multiplication(...Operands);
        res.status(200).json({
            status: "ok", msg: "Addition Performed",
            data: { value: Result }
        });
    },
    Division: (req, res) => {
        let { Operands } = req.body;
        let Result = ServiceLayer.Division(...Operands);
        res.status(200).json({
            status: "ok", msg: "Addition Performed",
            data: { value: Result }
        });
    }
}