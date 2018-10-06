const isNumeric = n => (!isNaN(parseFloat(n)) && isFinite(n)) || n === ".";

const isOperation = n => n === "/" || n === "*" || n === "-" || n === "+";

const trimResult = (result) => {
    result = result.toString();
    if(result.length > 16) return "0";
    else return result.toString();
}

export { isNumeric, isOperation, trimResult };