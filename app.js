const w = require("./processArray.js")

function Node(data, left, right) {
  return {
    data: data,
    left: null,
    right: null,
  }
}

function Tree(array) {
  const arr = w.processArray(array)
  return {
    root: buildTree(arr, 0, arr.length - 1),

    print: function () {
      return prettyPrint(this.root)
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

function insertNode(node, key) {
  if (node === null) {
    return new Node(key)
  }
  
  if (key < node.data) {
    node.left = insertNode(node.left, key)
  } else if (key > node.data) {
    node.right = insertNode(node.right, key)
  }

  return node
}

function deleteNode() {}

function findNode(key, bst) {
  if (bst !== null) {
    const root = bst.data
    if (root === key) {
      return bst
    } else if (root > key) {
      let tmp = bst.left
      return findNode(key, tmp)
    } else if (root < key) {
      let tmp = bst.right
      return findNode(key, tmp)
    }
  } else {
    return "Not found"
  }
}

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
  //return findNode(1, bst.root)
  insertNode(bst.root, 0)
  return bst.print()
}
module.exports = {
  z: test,
}
