function Node(data, left, right) {
    return {
      data: data,
      left: null,
      right: null
    }
  }

function Tree(array, root) {
    return {
        root: root,

        doSomething: function() {
            return
        }
    }
}

function buildTree(array) {
    //Remove duplicates from array
    const sortedArray = mergeSort(array)
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

function test() {}


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