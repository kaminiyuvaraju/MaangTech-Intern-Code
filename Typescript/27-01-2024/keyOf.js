// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"s
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
