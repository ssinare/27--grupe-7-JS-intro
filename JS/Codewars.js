//Implement a method that accepts 3 integer values a, b, c. 
//The method should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c){
    let numbers = [a,b,c];
    for (let i = 0; i <= 2; i++) {
        if ((Number.isInteger(numbers[i])) == false) {
            console.log(`ERROR: number "${numbers[i]}" is not an integer`);
            return false;
        }
        else if (numbers[i] <= 0) {
            console.log( `ERORR: "${numbers[i]}" is not a side of triangle`);
            return false;
        }
    }
    if (a + b <= c) {
        console.log(`ERROR: number ${c} is not a side of triangle`);
        return false;
    }
    if (a + c <= b) {
        console.log(`ERROR: number ${b} is not a side of triangle`);
        return false;
    }
    if (b + c <= a) {
        console.log(`ERROR: number ${a} is not a side of triangle`);
        return false;
    } 
    return true;
}

console.log(isTriangle(1,1,2));


function isTriangle(a,b,c) {
    var sides = [a, b, c].sort();
    return (sides[0] + sides[1] > sides[2]);
  }

  function isTriangle(a,b,c) {
    if(a > 0 && b > 0 && c > 0) {
      if(a < b + c && b < a + c && c < a + b) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
     return false;
    }
  }
