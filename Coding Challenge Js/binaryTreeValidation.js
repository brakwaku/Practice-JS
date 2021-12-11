const validateTree = (node, min = null, max = null) => {
    if (max != null && node.data > max) {
        return false;
    }

    if (min != null && node.data < min) {
        return false;
    }

    if (node.left && !validateTree(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validateTree(node.right, node.data, max)) {
        return false;
    }

    return true;
}