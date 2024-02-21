const placesList = ["Makkah & Madina", "Germany", "Japan", "China", "Egypt"];

console.log("Original List");
console.log(placesList);
// ordering the list
const orderedList = [...placesList].sort();
console.log("Ordered List");
console.log(orderedList);
// printing original list
console.log("Original List");
console.log(placesList);

const reverseOrderedList = [...placesList].reverse();
console.log("reverse Ordered List");
console.log(reverseOrderedList);

const againReversedList = [...reverseOrderedList].reverse();
console.log("Again Reverse List");
console.log(againReversedList);

const sortedList = placesList.sort();
console.log("sortedList");
console.log(sortedList);
const reverseSortedList = placesList.reverse();
console.log("reverse Sorted List");
console.log(reverseSortedList);
