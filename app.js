function Node(data, left, right) {
    return {
      data: data,
      left: null,
      right: null
    }
  }

function Tree(array) {
    return {
        root: buildTree(array, 0, array.length-1),

        doSomething: function() {
            return this.root
        }
    }
}

function buildTree(array, start, end) {
    //Remove duplicates from array
    const sortedArray = mergeSort(array)

    if (start > end) {
        return null
    }

    const mid = parseInt((start + end) / 2)
    const node = new Node(sortedArray[mid])

    node.left = buildTree(sortedArray, start, mid - 1)
    node.right = buildTree(sortedArray, mid + 1, end)

    return node
}


function insertNode() {}

function deleteNode() {}

function findNode() {}

function levelOrder(funct) {}


function inorder () {}

function preorder () {}

function postorder () {}

function height () {}

function depth () {}

function isBalanced () {}

function rebalance() {}

function test() {
    const bst = Tree([1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324])
    return bst.doSomething()
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
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

module.exports = {
    z: test
  }