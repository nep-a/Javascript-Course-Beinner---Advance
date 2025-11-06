/*
try ... catch statement is used to handle the exceptions.
  try{
  //body of try
  }
  catch(error){
  //body of catch
  }
*/
const numerator = 100, denominator = 'a';
try{
    console.log(numerator/denominator)
    console.log(a)
}
catch(error){
    console.log('An error caught')
    console.log('Error message: ' + error)
}
finally{
    console.log('Finally Will execute any way')
}