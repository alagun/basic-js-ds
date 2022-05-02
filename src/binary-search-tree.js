const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data, left, right) {
//     this.data = data; // данные
//     this.left = left; // левый узел
//     this.right = right; // правый узел
//     this.show = show; // Отображаем данные узла
//   }
// }
class BinarySearchTree {
  constructor() {
    this.topRoot = null; // корневой узел
    // this.insert = insert; // Вставляем узел
    // this.preOrder = preOrder; // обход предварительного заказа
    // this.inOrder = inOrder; // Обход среднего ордера
    // this.postOrder = postOrder; // Обход пост-заказа
    // this.find = find; // найти узел
    // this.getMin = getMin; // Находим минимальное значение
    // this.getMax = getMax; // находим максимальное значение
    // this.remove = remove; // удаляем узел
    // this.removeNode = removeNode; // удаляем узел
  }

  root() {
    return this.topRoot;
  }

  add(data) {
    this.topRoot = addNode(this.topRoot, data);
    // this.topRoot = this.addNode(this.topRoot, data);

    function addNode(node, data) {
    if (!node) return new Node(data);
    if (node.data === data) return node;
    if (data < node.data) {
      node.left = addNode(node.left, data);
    } else {
      node.right = addNode(node.right, data);
    }
  return node;
  }
}
// addNode(node, data) {
//   if (!node) return new Node(data);
//   if (node.data === data) return node;
//   if (data < node.data) {
//     node.left = addNode(node.left, data);
//   } else {
//     node.right = addNode(node.right, data);
//   }
// return node;
// }


  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let findNode = this.topRoot;

    while (findNode !== null) {
      if (data < findNode.data) {
        findNode = findNode.left;
      } else if (data > findNode.data) {
        findNode = findNode.right;
      } else {
        return findNode;
      }
    }
    return null;
  }

  // Удалить операцию
  remove(data) {
  this.topRoot = removeNode(this.topRoot, data);
 
  // удаляем узел
  function removeNode(node, data) {
    if (node === null) return null;
    if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = removeNode(node.right, data);
      return node;
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let leftNode = node.left;
        while (leftNode.right) {
          leftNode = leftNode.right;
        }
        node.data = leftNode.data;
        node.left = removeNode(node.left, leftNode.data); 
      }
      return node;
    }
  }
}
  // Находим минимальное значение
  min() {
    if (this.topRoot === null) return false;
    let currNode = this.topRoot;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  // Находим максимальное значение
  max() {
    if (this.topRoot === null) return false;
    let currNode = this.topRoot;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree
};