export default {
    Addition: (...operands) => {
        return operands[0] + operands[1];
    },
    Subtraction: (...operands) => {
        return operands[0] - operands[1];
    },
    Multiplication: (...operands) => {
        return operands[0] * operands[1];
    },
    Division: (...operands) => {
        return operands[0] / operands[1];
    }
}