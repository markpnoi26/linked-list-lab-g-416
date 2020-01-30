function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

<<<<<<< HEAD
=======

>>>>>>> 7c278573c8f65c628f6c7f7399b78568c0551199
function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let list = []
  let currentNode = headNode(linkedList, collection)
  list.push(currentNode)
  while (currentNode.next !== null) {
    list.push(collection[currentNode.next])
    currentNode = collection[currentNode.next]
  }
<<<<<<< HEAD

=======
  
>>>>>>> 7c278573c8f65c628f6c7f7399b78568c0551199
  return list[index]
}

function addressAt(index, linkedList, collection) {
<<<<<<< HEAD
  let currentIndex = 0
  let currentNode = headNode(linkedList, collection)
  while (currentIndex !== index) {
    currentIndex += 1
    currentNode = collection[currentNode.next]
  }
  for (const property in collection) {
    if (currentNode === collection[property]) {
      return property
    }
  }
}

function indexAt(node, collection, linkedList) {
  
}
=======
  let currentAddress = collection.find((element, index)
  let currentIndex = 0
  let currentNode = headNode(likedList, collection)
  while (currentIndex !== index) {
    
  }
}



let collection = {
    rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: null}
  }
  
// nodeAt(0, "rnadnm", collection)

console.log(next("rnadnm", collection))
>>>>>>> 7c278573c8f65c628f6c7f7399b78568c0551199
