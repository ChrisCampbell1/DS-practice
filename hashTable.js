function hash(key) {
  let hash = 0
  //itterate through the key
  for(let i = 0; i < key.length; i++) {
    let char = key.charCodeAt(i)
    console.log(char)
    hash = (hash << 5) - hash + char
    // hash |= 0
  }
  return hash
}

console.log(hash('This is a really really long keyy for test'))
