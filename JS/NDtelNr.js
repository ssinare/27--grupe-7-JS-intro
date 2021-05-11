function createPhoneNumber(numbers){
    let result = '';

    if (Array.isArray(numbers) == false){
        return `ERORR: "${numbers}" is not an array`;
    }
    else if (numbers.length !== 10) {
        return 'ERORR: The number of elemens must be 10';
    }

    else {
        for (let i = 0; i <= 9; i++) {
            if (isNaN(numbers[i]) === true) {
                return `ERORR: "${numbers[i]}" is not a number`; 
            }
            
            else if (numbers[i] < 0) {
                return `ERORR: "${numbers[i]}" is a negative number`;
            }
            else if (numbers[i] > 9) {
                return `ERORR: "${numbers[i]}" is bigger than 9`;
            }
            else if (Number.isInteger(numbers[i]) == false) {
                return `ERORR: "${numbers[i]}" is not an integer`;
            }
            for (let i = 0; i <=9; i++) {
                result += numbers[i];
                if (i == 2) {
                   result = '('+ result + ') ';
                }
                else if (i == 5) {
                    result += '-';
                }
            }
            return result;   
        } 
    } 
}

var numbers = [2, 8, 4, 9, 8, 9, 4, 4, 5, 3];
console.log(createPhoneNumber(numbers));









