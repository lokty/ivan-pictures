// I made two solutions for the task: first -- using standart method (3 lines of code),
// second -- using Quicksort algorythm, modified for sorting two arrays at once.
// On a set of 100000 objects sorting with my quickSort implementation took 
// whopping 2443 milliseconds, while standart method gave 128 milliseconds.
// It should be vice versa, but unfortunately I have no more time to find why
// so for now I'll stick with the standart method :)



$(document).ready(function(){
  
  hotjarTestTask();
  
}) 

function hotjarTestTask() {
  
  var arrayToSort = prepareInitialArray(arrayToSort);
  
  var t0 = performance.now();
  
  var sortedArray = sort1(arrayToSort);    //Sorting using Quicksort
  
  var t1 = performance.now();
  console.log("Call to sorting with Quicksort took " + (t1 - t0) + " milliseconds.")
  
  t0 = performance.now();

  var sortedArray2 = arrayToSort.sort(function(a, b) {     //Sorting using standart sort method
  	return a.age - b.age;                                  //.. 
  });                                                      // the end
  
  t1 = performance.now();
  
   console.log("Sorting with standart sorting " + (t1 - t0) + " milliseconds.")
  
//  console.log(sortedArray);  
//  console.log(sortedArray2); 
  
}
  
function prepareInitialArray() {
  
  var arrayLength = 100000,
      newName = "",
      newAge = 0,
      person = {name:newName, age:newAge},
      arrayToSort = [];

  for (var i = 0; i < arrayLength; i++) {       //  creating array of objects with name and age
      newName = makeName();
      newAge = Math.floor(Math.random() * 100);
      person = {name:newName, age:newAge};
      arrayToSort.push(person);
   
  }
  
  return arrayToSort;
}
  
function makeName()
{
    var name = "";
    var lettersSet1 = "bcdefgphijkldmnpqrstvwxz";
    var lettersSet2 = "aeioauygd";
  
    for( var i=0; i < 7; i++ ) {
      
    switch(isOdd(i) === true) {                                                           //generate name, make it diverse
      case true:
          name += lettersSet1.charAt(Math.floor(Math.random() * lettersSet1.length));
          break;
      default: name += lettersSet2.charAt(Math.floor(Math.random() * lettersSet2.length));
    }
      
      name = name.charAt(0).toUpperCase() + name.slice(1);                                // make first letter uppercase, like in a real name
    }
    return name;
}
          
function isOdd(x) {
  return ( x & 1 ) ? true : false;
}

//-------------------------------------------------------------------------------------------- 
//  Quicksort 
  
function sort1 (arrayToSort) {
  
  var array1 = [],
      array2 = [];
  
  for (i = 0; i < arrayToSort.length; i++) {    //  dividing object into two arrays
    array1.push([arrayToSort[i].age]);
    array2.push([arrayToSort[i].name]);
    
  } 
  
  var newArrays = quickSort(array1, array2);    //  sorting age 
  
  array1 = newArrays[1];
  array2 = newArrays[0];
  
  var sortedArray = [];
  
  for (i = 0; i < array1.length; i++) {          // creating output -- array, sorted by age
    person = {name:array1[i], age:array2[i]};
    sortedArray.push(person);
    
  }
  

  return sortedArray;
  
}

function quickSort(items, items2, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, items2, left, right);
     
        if (left < index - 1) {
          
             quickSort(items, items2, left, index - 1);
        }

        if (index < right) {
         
            quickSort(items, items2, index, right);
        }

    }
    
  return [items,items2];
}

function swap(items, items2, firstIndex, secondIndex, firstPass){
    var temp = items[firstIndex],
        temp2 = items2[firstIndex];
  
    if ( firstPass === true) {
      items[firstIndex] = items[secondIndex];
      items[secondIndex] = temp;
    } else
    {
      items2[firstIndex] = items2[secondIndex];
      items2[secondIndex] = temp2;  
    }
}

function partition(items, items2, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
  
    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            

          
            swap(items, items2, i, j, true);
            swap(items, items2, i, j, false);
            i++;
            j--;
        }
    }

    return i;
}
