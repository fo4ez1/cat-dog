function printAnimals(animal, ) {
    let n=prompt("Введите число");

  for (let i = 0; i < n; i++) { 
      if(i%10==0){
          document.write('<img src="images/' + animal + '.jpg" width="100"><br>');
      }else {
          document.write('<img src="images/' + animal + '.jpg" width="100">');
      }
      } 
    }
printAnimals("dog");
printAnimals("cat");


