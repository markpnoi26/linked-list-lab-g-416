function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

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

  return list[index]
}

function addressAt(index, linkedList, collection) {
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
