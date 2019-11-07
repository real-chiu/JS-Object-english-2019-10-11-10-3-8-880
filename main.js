// 1.
let user = null;
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;
console.log(user);
// The above will give type error, which is "Cannot set property 'name' of null",  in line "user.name = "John", even though null has type object.

// 2.
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
let sum = 0;
for (let f in fruit){
    if(fruit.hasOwnProperty(f)){
      sum += fruit[f];
    }
}
console.log(sum);