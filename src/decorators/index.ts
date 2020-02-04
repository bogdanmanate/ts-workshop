
function printable(constructorFunc: Function) {
    constructorFunc.prototype.whoAmI = function() {
    console.log(this);
    this.name = 'John Smith'
}
}

@printable
class User {
    private name = "John Doe";
}

const user = new User();
// user.whoAmI(); // <-- won't work because typescript doesn't recognize this method
(user as any).whoAmI(); // will print User object: { name: "John Doe" }, then change the name property.
console.log(user); // will print User object: { name: "John Smith" }
