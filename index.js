import { createElement } from "react";
import directive from "remark-directive";
import visit from "unist-util-visit";

const renderer = {
    reactElement: (node) => {
        node.attributes.value = node.children[0]?.props?.value
        return createElement(node.tagName, node.attributes, node.children)
    }
}

function plugin(options) {
    this.use(directive)

    const components = options.components || {}

    return (tree) => {
        visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], (node) => {
            node.type = 'reactElement'
            node.tagName = components[node.name] || node.name
            return node
        })
    }
}

export default { plugin, renderer}