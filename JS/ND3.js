function openOrSenior(data){
    let list = [];
    for(let i = 0; i < data.length; i++){
        if (data[i][0] >= 55) {
            if (data[i][1] > 7) {
                list.push('Senior');
            }
            else {
                list.push('Open');
            }
        }
        else {
            list.push('Open');
        }
    } 
    return list;
}



console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]));
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));

function openOrSenior(data){
    var result = [];
    data.forEach(function(member) {
      if(member[0] >= 55 && member[1] > 7) {
        result.push('Senior');
      } else {
        result.push('Open');
      }
    })
    return result;
  }

  function openOrSenior(data){
    return data.map(function(d){
      return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
    });
  }
  
  function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
  }