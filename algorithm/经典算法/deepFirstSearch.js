const tree = {
    key: '第一层-1',
    children: [
        {
            key: '第二层-1-1',
            children: [
                {
                    key: '第三层-1-1',
                    children: [],
                },
                {
                    key: '第三层-1-2',
                    children: [],
                }
            ]
        },
        {
            key: '第二层-2-1',
            children: [
                {
                    key: '第三层-2-1',
                    children: [],
                }
            ]
        },
        {
            key: '第二层-3-1',
            children: [
                {
                    key: '第三层-3-1',
                    children: [],
                }
            ]
        },
    ]
}

let deepTraversal1 = (node, nodeList = []) => {
    if (node !== null) {
        nodeList.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
        deepTraversal1(children[i], nodeList)
        }
    }
    return nodeList
}

console.log(deepTraversal1(tree), '深度优先搜索的递归实现')

let deepTraversal2 = (node) => {
    let stack = []
    let nodes = []

    if (node) {
        stack.push(node)
        
        while(stack.length) {
            const temp = stack.pop()
            const children = temp.children

            nodes.push(temp)

            for(let i = children.length-1; i >=0; i--) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}
// console.log(deepTraversal2(tree))