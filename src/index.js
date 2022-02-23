module.exports = function check(str, bracketsConfig) {
  // your solution
  let map = {};
    
  for (let value of bracketsConfig) {
    map[value[1]] = value[0]; // формируем объект
  }
  
  console.log(map);
  
  const arrayOpen = Object.values(map);
  
  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
    
    const current = str[i];
    
    
    if (arrayOpen.includes(current) && !(current === stack[stack.length - 1] && current === map[current])) {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      
      if (map[current] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
