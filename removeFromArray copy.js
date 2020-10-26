const removeFromArray = function(array, ...deleteValues) {
    let newArray = [];
    array.forEach((item) => {
         if (!deleteValues.includes(item)) {
            newArray.push(item);
        }})
    
   return newArray;
}
module.exports = removeFromArray
