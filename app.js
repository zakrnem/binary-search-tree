function Node(data, left, right) {
  return {
    data: data,
    left: null,
    right: null,
  }
}

function Tree(array) {
  const arr = processArray(array)
  return {
    root: buildTree(arr, 0, arr.length - 1),

    print: function () {
      return this.root
    },
  }
}

function buildTree(array, start, end) {
  if (start > end) {
    return null
  }

  const mid = parseInt((start + end) / 2)
  const node = new Node(array[mid])

  node.left = buildTree(array, start, mid - 1)
  node.right = buildTree(array, mid + 1, end)

  return node
}

function insertNode() {}

function deleteNode() {}

function findNode() {}

function levelOrder(funct) {}

function inorder() {}

function preorder() {}

function postorder() {}

function height() {}

function depth() {}

function isBalanced() {}

function rebalance() {}

function test() {
  const bst = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
  return prettyPrint(bst.print())
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
  }
}

function merge(left, right) {
  let sortedArray = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }

  return [...sortedArray, ...left, ...right]
}

function mergeSort(array) {
  if (array.length <= 1) return array
  let mid = Math.floor(array.length / 2)

  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))

  return merge(left, right)
}

function removeDuplicates(array) {
  let counter = 0

  while (counter < array.length - 1) {
    if (array[counter] === array[counter + 1]) {
      array.splice(counter, 1)
    }
    counter++
  }
  return array
}

function processArray(array) {
  const sortedArray = mergeSort(array)
  return removeDuplicates(sortedArray)
}

module.exports = {
  z: test,
}
