function analyzeArray(arr) {
   function average() {
      let sum = arr.reduce((acc, cur) => {
         return acc + cur;
      }, 0)
      return sum / arr.length
      }

   function min() {
      return Math.min(...arr)
   }

   function max() {
      return Math.max(...arr)
   }

   function length() {
      return arr.length;
   }
   
   return {
    average,
    min,
    max,
    length
   }
}

console.log(analyzeArray([1,2,3,4,5,6,7,24]))

module.exports = analyzeArray;