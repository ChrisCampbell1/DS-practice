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
}

const list = new LinkedList()
list.prepend('first node')
list.prepend('new head')
list.prepend('newest head')
console.log(list.print())
