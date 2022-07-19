// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply) {
    return function (num) {
        return multiply * num;
    }
}
const fareDoubler = function (number) {
    return number * 2;
}
const fareTripler = function (numb) {
    return numb * 3;
}
const selectDifferentDrivers = function (first, last) {
    return last(first);
  };