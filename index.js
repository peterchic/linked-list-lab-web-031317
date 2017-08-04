// let collection = {
//     rnadnm: {
//       name: 'Alexandra',
//       next: 'masjdrandm'
//     },
//     masjdrandm: {
//       name: 'Kirstin',
//       next: 'ntrandm'
//      },
//     ntrandm: {
//       name: 'Juliet',
//       next: null
//     }
//   }

  // let head = collection[0]

function getName(node){
  return node["name"]
}

function headNode(linkedList, collection){
  let headNode = collection[linkedList]
  return headNode
}

function next(node, collection){
  let nextAddress = node["next"]
  return collection[nextAddress]
}

let nodeAt = (index, linkedList, collection) => {
  let counter = 0
  let currentNode = headNode(linkedList, collection)
  if(index === 0){
    return currentNode
  } else {
    while (counter != index){
      currentNode["name"]
      currentNode = next(currentNode, collection)
      counter ++
    }
  }
  return currentNode
}

let addressAt = (index, linkedList, collection) => {
  let address;
  let node = nodeAt(index, linkedList, collection)
  for(let key in collection){
    if(collection[key] === node){
      address = key
    }
  }
  return address
}

let indexAt = (node, collection, linkedList) => {
  let index = 0
  let head = headNode(linkedList, collection)
  if (head === node){
    return index
  } else {
    while(head !== node){
      head = next(head, collection)
      index++
    }
    return index
  }
}

let insertNodeAt = (index, address, linkedList, collection) => {
  let firstNode = nodeAt(index - 1, linkedList, collection)
  let newNode = collection[address]
  newNode.next = firstNode.next
  firstNode.next = address
}

let deleteNodeAt = (index, linkedList, collection) => {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let deleteNode = nodeAt(index, linkedList, collection)
  let nextProp = deleteNode.next
  prevNode.next = nextProp

}
