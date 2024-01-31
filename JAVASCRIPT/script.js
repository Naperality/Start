//function to get mean
// const getMean = (array)=>{
//     // .reduce method takes accumulator and the element of the array the third value sets inital value 
//     const sum = array.reduce((acc, el) => acc + el, 0);
//     const mean = sum/array.length;
//     return mean;
// }; or
const getMean = (array) => array.reduce((acc, el) => acc + el, 0)/ array.length;

//function to get median
const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
    const median =
      array.length % 2 === 0
        ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
        : sorted[Math.floor(array.length / 2)];
        return median;
  }

//function to get mode
const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    })
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];
    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
    };

//function to get range
const getRange = (array) => Math.max(...array) - Math.min(...array);

//function to get variance
// const getVariance = (array) => {
//     const mean = getMean(array);
//   const differences = array.map(
//     el => el - mean
//   );
//   const squaredDifferences = differences.map(
//     el => el ** 2
//   );
//   const sumSquaredDifferences = squaredDifferences.reduce(
//     (acc, el) => acc + el, 0
//   );
// };
const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc,el)=>{
        const difference = el-mean;
        const squared = difference**2;
        return acc+squared;
    },0)/array.length;
    return variance;
};
//function to get data from user input
const calculate = ()=>{
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    //get mean of the number
    const mean = getMean(numbers);
    //get the median of the number
    const median = getMedian(numbers);
    //get mode of the number
    const mode = getMode(numbers);
    //get range of the number
    const range = getRange(numbers);
    //display value of mean
    document.querySelector("#mean").textContent = mean;
    //display value of median
    document.querySelector("#median").textContent = median;
    //display value of mode
    document.querySelector("#mode").textContent = mode;
    //display value of range
    document.querySelector("#range").textContent = range;

};