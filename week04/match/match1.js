function match(string) {
  let state = start;
  for(let i of string) {
    state = state(i)
  }
  return state === end;
}
//abcabcdef
 function start(i) {
   if(i === 'a') {
     return foundA
   }else{
     return start
   }
 }

 function foundA(i) {
    if(i === 'b'){
      return foundB
    }else{
      return start(i)
    }
 }

 function foundB(i) {
  if(i === 'c'){
    return foundC
  }else{
    return start(i)
  }
}

function foundC(i) {
  if(i === 'd'){
    return foundD
  }else{
    return start(i)
  }
}

function foundD(i) {
  if(i === 'e'){
    return foundE
  }else{
    return start(i)
  }
}


function foundE(i) {
  if(i === 'f'){
    return end
  }else{
    return start(i)
  }
}

function end(i) {
  return end;
}

console.log(match('abcabcdef'));