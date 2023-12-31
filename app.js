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

function deleteNode(root, key) {
  if (root === null) {
    return root
  }

  if (root.data > key) {
    root.left = deleteNode(root.left, key)
    return root
  } else if (root.data < key) {
    root.right = deleteNode(root.right, key)
    return root
  }

  if (root.left === null) {
    let temp = root.right
    delete root
    return temp
  } else if (root.right === null) {
    let temp = root.left
    delete root
    return temp
  } else {
    let succParent = root

    let succ = root.right
    while (succ.left !== null) {
      succParent = succ
      succ = succ.left
    }

    if (succParent !== root) {
      succParent.left = succ.right
    } else {
      succParent.right = succ.right
    }

    root.data = succ.data

    delete succ
    return root
  }
}

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

function levelOrder(node, funct) {
  let queue = []
  let output = []

  if (node.data !== null) {
    queue.push(node)

    while (queue.length > 0) {
      let current = queue[0]
      output.push(current.data)

      if (current.left !== null) {
        queue.push(current.left)
      }
      if (current.right !== null) {
        queue.push(current.right)
      }
      queue.splice(0, 1)
    }

    return output
    //Currently not providing each node into funct()
  }
}

function inorder(node) {
  if (node === null) {
    return []
  }
  
  const result = [];
  result.push(...inorder(node.left));
  result.push(node.data);
  result.push(...inorder(node.right));
  return result
}


function preorder() {}

function recursivePreorder(node, queue, output) {
  if (node.data !== null) {
    queue.push(node)
    let current = queue[0]
    output.push(current.data)
    queue.splice(0, 1)

    if (current.left !== null) {
      recursivePreorder(current.left, queue, output)
    }
    if (current.right !== null) {
      recursivePreorder(current.right, queue, output)
    }
  }
  if (queue.length === 0) return output
}

function postorder(node) {
  if (node == null) {
    return []
  }

  const left = postorder(node.left)
  const right = postorder(node.right)

  return [...left, ...right, node.data]
}

function height(node) {
  if (node == null) return 0
  else {
    let lDepth = height(node.left)
    let rDepth = height(node.right)

    if (lDepth > rDepth) return lDepth + 1
    else return rDepth + 1
  }
}

function depth(bst, node, counter) {
  if (bst !== null) {
    counter++
    if (bst.data === node) {
      return counter
    } else {
      let left = depth(bst.left, node, counter)
      let right = depth(bst.right, node, counter)

      if (left !== undefined) return left
      else if (right !== undefined) return right
    }
  }
}

function isBalanced(node) {
  if (node !== null) {
    let lDepth = height(node.left)
    let rDepth = height(node.right)
    let diff = Math.abs(lDepth - rDepth)
    
    if (diff > 1) {
      return false
    } else {
      let lBranch = isBalanced(node.left)
      let rBranch = isBalanced(node.right)

      if (lBranch === false || rBranch === false) {
        return false
      } else {
        return true
      }
    }
  }
}

function rebalance(node) {
  let arr = [...inorder(node)]
  node = Tree(arr)
  return node
}

function test() {
  const bst = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
  insertNode(bst.root, 101)
  insertNode(bst.root, 102)
  insertNode(bst.root, 103)
  insertNode(bst.root, 104)
  //deleteNode(bst.root, 4)
  //deleteNode(bst.root, 5)
  //deleteNode(bst.root, 7)
  //deleteNode(bst.root, 3)
  //return bst.print()
  let newBst = rebalance(bst.root)
  return isBalanced(newBst.root)
  //return depth(bst.root, 324, 0)
  //return height(bst.root, 0)
  //console.log(bst.root.left)
  //return postorder(bst.root)
  //return recursiveLevelorder(bst.root, [], [])
  //return recursivePreorder(bst.root, [], [])
  //return levelOrder(bst.root)
  //return findNode(1, bst.root)
  //insertNode(bst.root, 0)
  //return inorder(bst.root)
  //deleteNode(bst.root, 8)
  //return bst.print()
  //console.log(bst.root.right.data)
}
module.exports = {
  z: test,
}
