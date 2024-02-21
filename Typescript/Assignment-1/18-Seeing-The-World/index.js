var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesList = ["Makkah & Madina", "Germany", "Japan", "China", "Egypt"];
console.log("Original List");
console.log(placesList);
// ordering the list
var orderedList = __spreadArray([], placesList, true).sort();
console.log("Ordered List");
console.log(orderedList);
// printing original list
console.log("Original List");
console.log(placesList);
var reverseOrderedList = __spreadArray([], placesList, true).reverse();
console.log("reverse Ordered List");
console.log(reverseOrderedList);
var againReversedList = __spreadArray([], reverseOrderedList, true).reverse();
console.log("Again Reverse List");
console.log(againReversedList);
var sortedList = placesList.sort();
console.log("sortedList");
console.log(sortedList);
var reverseSortedList = placesList.reverse();
console.log("reverse Sorted List");
console.log(reverseSortedList);
