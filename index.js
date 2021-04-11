import { createElement } from "react";
import directive from "remark-directive";
import visit from "unist-util-visit";

function plugin(options) {
    this.use(directive)

    const components = options.components || {}

    return (tree) => {
        visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], (node) => {
            if(components[node.name]) {
                node.type = 'parsedHtml'
                node.element = createElement(components[node.name], node.attributes)
            } else {
                node.type = 'virtualHtml'
                node.tag = node.name
            }
            return node
        })
    }
}

export default plugin