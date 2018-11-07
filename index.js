function dwarfRollCall(dwarves) {
    
var numberedDwarves = [""];
    
for(var i = 0; i < dwarves.length; i++){
    
  numberedDwarves.push(`${i+1}. ${dwarves[i]} `);
    
}
    
return numberedDwarves.join("");
  
}

function summonCaptainPlanet(planeteerCalls){
  
  var newPlaneteerCallsArray = [];
    
    for(var i = 0; i < planeteerCalls.length; i++){
        
        var upperCaseName = planeteerCalls[i].toUpperCase("");
        
        newPlaneteerCallsArray.push(upperCaseName + "!");
    } 
 
   return newPlaneteerCallsArray;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    
       if(words[i].length > 4){
           return true;
       }else{
           return false;
       }   
  }
  
}

function findTheCheese (foods) {
  
  var typeOfChesee = ["cheddar", "gouda", "camembert"];
  
  for(var i = 0; i < foods.length; i++) {
    
    if (foods[i] == "cheddar"){
      
      return foods[i];
    } 
  }
  return "no cheese!";
}  