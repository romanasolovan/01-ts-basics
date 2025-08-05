function getFirstElement<T>(arr: T[]): T {
    return arr[0];
 }

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));
console.log(getFirstElement<boolean>([ true , false , true ]));
console.log(getFirstElement<string | number | boolean>([1, "two" ,true]));