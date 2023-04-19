function hash(key) {
  let hash = 0
  //itterate through the key
  for(let i = 0; i < key.length; i++) {
    let char = key.charCodeAt(i)
    hash = (hash << 5) - hash + char
    // hash |= 0
  }
  return hash
}



//set up HashTable class

class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  hash(key) {
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i)  % this.data.length
    }
    return hash
  }

  set(key, value) {
    const address = this.hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    const address = this.hash(key)
    const bucket = this.data[address]
    if(bucket) {
      for(let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
          return bucket[i][1]
        }
      }
    } else {
      return undefined
    }
  }
}

const ht = new HashTable(20)

ht.set("test", 1)
ht.set("anetra", "is kqeen")
ht.set("sahsa", 100)
ht.set("sirhc", 99)

console.log(ht.get("anetra"))
