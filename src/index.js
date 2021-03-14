module.exports = function check(str, bracketsConfig) {
  let num = 0
  for(i = 0; i < bracketsConfig.length; i++) {
      if((((bracketsConfig[i] == '(') || (bracketsConfig[i] == '[' || (bracketsConfig[i] == '{') || (bracketsConfig[i] == '|')))))
      {
      num++
      }
      else{
      if((bracketsConfig[i] == ')') || (bracketsConfig[i] == ']') || (bracketsConfig[i] == '}') || (bracketsConfig[i] == '|'))
        {
        num--
        }
      }
    }
    if(num == 0){
      return str= true
  }
  else{
    return str= false
  }
}
