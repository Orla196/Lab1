//takes an array and multiplies it by 2 using an arrow function
const ages = [25, 31, 42, 77];

const mapages = ages.map((x) => {
    if (x < 70) {
        return x * 2;
    } else {
        return x;
    }
});
//prints out the result and leaves the 70 the same
console.log(mapages);
