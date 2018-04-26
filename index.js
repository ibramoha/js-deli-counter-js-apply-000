let number = 0;


const takeANumber = (katzDeliLine) => {
   number++
  katzDeliLine.push(number)
  
  
   return `Welcome, You are number ${number}.`
}



takeANumber([])









const nowServing = (deliLine) => {
   if(deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    let remove = deliLine.shift()
    return`Currently serving ${remove}.`
  }
}

 const currentLine = (deliLine) => {
   if(deliLine.length === 0){
    return "The line is currently empty."
  }
  let arr = [];
    for (let i=0; i<deliLine.length; i++) {
    arr.push(i + 1 + ". " + deliLine[i])
}
  return `The line is currently:  ${arr.join(", ")}`;
}
