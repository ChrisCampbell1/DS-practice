// Node class

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// LinkedList class

class LinkedList {
  constructor() {
    this.legnth = 0
    this.head = null
    this.tail = null
  }

  
  //method to add a new node as the head of the LinkedList
  prepend(data) {
    const node = new Node(data)
    
    if(!this.head) { //this refers to the LinkedList that the method is being called on
      this.head = node
      this.tail = node
      this.legnth++
    } else {
      node.next = this.head
      this.head = node
      this.legnth++
    }
  }

  //method to print the LinkedList to easily read the data
  print() {
    const result = []
    let counter = 0
    let current = this.head
    while(counter < this.legnth) {
      result.push(current.data)
      current = current.next
      counter++
    }
    return result
  }

  //method to print the properties of the LinkedList
  getProps() {
    return `Length: ${this.legnth} || Head: ${this.head.data} || Tail: ${this.tail.data}`
  }

  //method to add a Node to the end of the LinkedList
  append(data) {
    if(!this.head){
      this.prepend(data)
    } else {
      const node = new Node(data)
      this.tail.next = node
      this.tail = node
      this.legnth++
    }
  }

  //method to insert a node at a specific index
  insert(index, data) {
    if(index < 0 || index > this.legnth) { //checks if index is out of bounds
      return -1
    } else if (index === 0) { 
      this.prepend(data)
    } else if (index === this.legnth) {
      this.append(data)
    } else {
      //create new node
      const newNode = new Node(data)
      //initialize counter to itterate through the LinkedList
      let current = this.head
      let counter = 0
      //itteration happens in this while loop, counter is less than index -1 because we want to insert the new node before that node in the LinkedList nothing is being mutated in the LinkedList yet, this just sets current to the proper node
      while(counter < index -1) {
        counter++
        current = current.next
        console.log(current)
      }
      //sets a temporary variable to hold the pointer of the node in the index that will be inserted
      let temp = current.next
      //points the current node's next property to the new node
      current.next = newNode
      //sets the pointer of the inserted node as the next node in the LinkedList
      newNode.next = temp
      //incriments the lenghth of the LinkedList
      this.legnth++
    }
    return this
  }
}

const list = new LinkedList()
list.append(list.legnth)
list.append(list.legnth)
list.append(list.legnth)
list.append(list.legnth)
list.append(list.legnth)
list.append(list.legnth)
list.append(list.legnth)
list.append(list.legnth)
list.insert(5, 'this will be inserted at index 5')

console.log(list.print())
