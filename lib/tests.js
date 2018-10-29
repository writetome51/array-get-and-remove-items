"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveItems_1 = require("./getAndRemoveItems");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = ['he', 'llo', 'bay', 'bayyyy'];
// Test 1: Make sure 0 and 1 removes first 2 items:
getAndRemoveItems_1.getAndRemoveItems([0, 1], arr);
if (arr[0] === 'bay')
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: Make sure 4 and 5 removes the last 2 items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
getAndRemoveItems_1.getAndRemoveItems([4, 5], arr);
if (arr.length === 4 && arr[3] === 'gg')
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3: Make sure -6 removes first item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa', 'hh', 'oo'];
getAndRemoveItems_1.getAndRemoveItems([1, 3, 5, 7], arr);
if (arrays_match_1.arraysMatch(arr, ['he', 'zz', 'cc', 'hh']))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 6: Make sure -7 triggers error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
var errorTriggered = false;
try {
    getAndRemoveItems_1.getAndRemoveItems([-7], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: Make sure 6 triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
    getAndRemoveItems_1.getAndRemoveItems([6], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: Make sure string '1' triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
    getAndRemoveItems_1.getAndRemoveItems('1', arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9: Make sure object in second argument triggers error:
errorTriggered = false;
try {
    getAndRemoveItems_1.getAndRemoveItems(0, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');