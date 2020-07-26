function match(string){
  let state = start;
  for(let i of string){
    state = state(i)
  }
  return state === end
}

function start(i){
  if(i === 'a'){
    return foundB
  }else{
    return start
  }
}

function foundB(i){
  if(i === 'b'){
    return foundA2
  }else{
    return start(i)
  }
}

function foundA2(i){
  if(i === 'a'){
    return foundB2
  }else{
    return start(i)
  }
}

function foundB2(i){
  if(i === 'b'){
    return foundA3
  }else{
    return start(i)
  }
}

function foundA3(i){
  if(i === 'a'){
    return foundB3
  }else{
    return start(i)
  }
}

function foundB3(i){
  if(i === 'b'){
    return foundX
  }else{
    return start(i)
  }
}

function foundX(i){
  if(i === 'x'){
    return end
  }else{
    return foundA3(i)
  }
}

function end(i){
  return end
}

console.log(match('ababaabxabxabababaxx'))