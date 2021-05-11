Create a function named divisors/Divisors that takes an integer n > 1 
and returns an array with all of the integer's divisors(except for 1 and
     the number itself), from smallest to largest. If the number is prime return
      the string '(integer) is prime' (null in C#) 
      (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).





function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n && x < 10; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(10000));