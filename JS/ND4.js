function friend(friends){
    var list = [];  
    for (let i = 0; i < friends.length; i++) {   
        if (friends[i].length === 4) {
            list.push(friends[i]);
        }    
    } 
    return list; 
}



  console.log(friend(["Ryan", "Kieran", "Mark"])); ///["Ryan", "Mark"]);
  console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));// ["Ryan"]);
  console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));// ["Jimm", "Cari", "aret"]);
  console.log(friend(["Love", "Your", "Face", "1"]));// ["Love", "Your", "Face"]);
   
  function friend(friends){
    return friends.filter(n => n.length === 4)
  }

  const friendd = friends => friends.filter(friend => friend.length == 4);