/**
 * Array Prototype
 */
const car = ["bmw", "audi", "lamborgini", "maruti"];

//Length Prototype
console.log(car.length);

//at()
let index = 1;
console.log(car.at(index));

//cancat()
const car1 = ["skoda", "hyundai", "verna", "tata"];
const car2 = car.concat(car1);
console.log(car2);

//copyWithin()
console.log(car2.copyWithin(0, 2, 5));

//entries()
const iterator = car2.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//every()
const checkpass = (word) => word.length < 5;
console.log(car2.every(checkpass));

//fill()
console.log(car2.fill("0", 2, 4));

//filter()
const result = car2.filter((word) => word.length > 6);
console.log(result);

//find()
console.log(car2.find((word) => word.length < 7));

//findindex()
console.log(car2.findIndex((word) => word.length < 5));

//flat()
const arr2 = [1, 2, 3, 4, [5, [6]]];
console.log(arr2.flat(2));

//flatmap()
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.flatMap((x) => x * 2);
console.log(result1);

//forEach()
car2.forEach((element) => console.log(element));

//from()
console.log(Array.from("bmw"));

//includes()
console.log(car2.includes("0"));

//indexOf()
console.log(car2.indexOf("verna"));

//isArray()
console.log(Array.isArray(car2));

//join()
console.log(car2.join());

//keys()
const array1 = ["a", "b", "c"];
const iterator1 = array1.keys();

for (const key of iterator1) {
  console.log(key);
}

//lastIndex
console.log(car2.lastIndexOf("lamborgini"));

//map
const result2 = arr1.map((x) => x * 2);
console.log(result2);

//Array of
console.log(Array.of(1, 2, 3));

//pop
console.log(car2.pop());
console.log(car2.pop());
console.log(car2.pop());
console.log(car2.pop());

//push
console.log(car2.push("tata"));
console.log(car2.push("skoda"));
console.log(car2.push("verna"));
console.log(car2.push("hyundai"));
console.log(car2.push(new Date()));

//reduce
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(arr1.reduce(reducer));

//reverse
console.log(car2.reverse());

//shift
console.log(car2.shift());

//slice
console.log(car2.slice(3, 5));

//some
console.log(car2.some(checkpass));

//sort
console.log(car2.sort());

//splice
console.log(car2.splice(0, 2, "toyota", "kia"));

//toLocalString
const array2 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array2.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);

//toString
console.log(arr1.toString());

//unshift
console.log(arr1.unshift(6, 7));
