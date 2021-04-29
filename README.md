# React Markdown Remark Directive

This is a plugin for react-markdown.

It uses the directive format to easily add custom functionality into your markdown via remark-directive.

If the tag is one of the included components, it will render the element

To use, simply add incluced plugin and render when calling ReactMarkdown

```jsx
import ReactMarkdown from 'react-markdown'
import rmDirective from '../react-markdown-remark-directive'

// Object of custom Markdown components
const components = {}

// Array of ReactMarkdown plugins
const rmPlugins = [
    // ... other plugins for ReactMarkdown
    [rmDirective, {components}],
]

// Expected result:
// <tag foo="bar" foofoo="barbar">value</tag>
const markdownCode = ":tag[value]{foo=bar foofoo=barbar}"
    <ReactMarkdown plugins={rmPlugins} source={markdownCode} />
```

## Valid React

```jsx
// include above code

const Welcome = (attr) => {
    console.log(attr)
    return (
        <>
            {attr.greeting} to you {attr.name}, {attr.value}!
        </>
    )
}
Object.assign(components, Welcome) // Or add it in the original object


const markdownCode = "::Welcome[nice to meet you]{greeting=Hello name=Rob}"
    <ReactMarkdown plugins={rmPlugins} source={markdownCode} />
```

Generated React
```jsx
<Welcome greeting="Hello" name="Rob">nice to meet you</Welcome>
```

Rendered Html
```
Hello to you Rob, nice to meet you!
```

## Invalid React

If a valid React component was not included, it will simply render it as valid Html

```jsx
// include above code

const markdownCode = ":tag[value]{attr1=val1 attr2=val2}"
    <ReactMarkdown plugins={rmPlugins} source={markdownCode} />
```

Generated Html


```html
<tag attr1="val1" attr2="val2">value</tag>
```

Rendered Html
```
value
```

## Updates
v1.1.0 Adds ability to render the children.
