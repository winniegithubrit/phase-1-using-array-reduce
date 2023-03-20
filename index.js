const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((acc, Value) => {
  return acc + Value;
}, 0);

console.log(totalBatteries); // Output: 27


