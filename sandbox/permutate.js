let array = [1, 2, 3, 4, 5];

let moveEl = (array,fromIndex,toIndex) => {
    let bufferArray = array.slice(0);
    bufferArray.splice(toIndex, 0, bufferArray.splice(fromIndex, 1)[0] );

    return bufferArray;
}

let permutate = (arr, lastArray, r = 0) => {                  // arr - initial array, 
                                                              // lastArray (optional) - last expanded array
                                                              // r (optional) - current row index
  if (arr.length === 0) return 0;                             
  lastArray = (lastArray === undefined ? [arr] : lastArray);  
  const expandedLastArray = [];                                   
  const totalRows = arr.length - 1;                           
  let maxEl = (r !== 0) ?  lastArray.length - 1 : arr.length;                               


   lastArray.forEach((item, index) => {
     for (let index2 = r; index2 < arr.length; index2++) {
       let bufferElement = item.slice(0);
       if (r === 0) {
         bufferElement = moveEl(arr, index2, r);
       } else {
         bufferElement = moveEl(item, index2, r);
       }
       expandedLastArray.push(bufferElement);
     }
   });
  
  r++;  
  if (r < arr.length) {
    permutate(arr, expandedLastArray, r);
  } else {
    console.table(expandedLastArray);
    return expandedLastArray; 
  }
}

let permutatedArray = permutate(array);
