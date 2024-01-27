var value = null;
value = 'hello';
value = undefined;
function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log("Yard is ".concat(yardSize, " sqft"));
    }
}
var home = {
    sqft: 500
};
printYardSize(home);
function getValue() {
    return 'hello';
}
var value1 = getValue();
console.log('value length: ' + value1.length);
