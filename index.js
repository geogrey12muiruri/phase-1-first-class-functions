const welcomesAPerson = () => {
    return "hello";
}
const receivesAFunction = (greetings, name) => {
    return greetings() + " " + "name";
};
console.log(receivesAFunction(welcomesAPerson, "Morris"));

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("my name is function");
    }
}
function returnsAnAnonymousFunction() {
    return () => console.log(`anonymous function`);
}
