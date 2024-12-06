function arrayMadness(FirstArray,second) {

   return FirstArray.reduce((acc,element)=>acc+element**2,0) > second.reduce((caa,element)=>caa+element**3,0) 
  }

  console.log (arrayMadness([5,6,7],[4,5,6]))