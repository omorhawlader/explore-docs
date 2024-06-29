# Styling

## Background

There are two primary ways to style react components

1. Inline styles with the `style` prop
2. Regular CSS with the `className` prop

> also u can use React UI libraries and frameworks

## Frameworks

Frameworks typically provide a more comprehensive set of tools, components, and sometimes a predefined structure to build web applications.

-Material-UI
-Ant Design
-Bootstrap (via react-bootstrap)
-Semantic UI React
-Foundation for Sites (via react-foundation)
-Grommet & more

## Libraries

Libraries are typically focused on specific aspects such as styling, state management, or UI components. They are more lightweight and modular, allowing developers to pick and choose which parts of the library they want to use.

-Styled-components: For styling components with CSS in JavaScript.
-Chakra UI: A component library for building accessible React applications.
-Emotion: A library for writing CSS styles with JavaScript.
& more

### you can also use Shadcn UI

>Shadcn UI is not actually a component library or UI framework. Instead, according to the documentation, it's “a collection of reusable components that we can copy and paste into our apps

**About the `style` prop:**

- In HTML you'd pass a string of CSS:

```html
<div style="margin-top: 20px; background-color: blue;"></div>
```

- In React, you'll pass an object of CSS:

```jsx
<div style={{marginTop: 20, backgroundColor: 'blue'}} />
```

Note that in react the `{{` and `}}` is actually a combination of a JSX
expression and an object expression. The same example above could be written
like so:

```jsx
const myStyles = {marginTop: 20, backgroundColor: 'blue'}
<div style={myStyles} />
```

Note also that the property names are `camelCased` rather than `kebab-cased`.
This matches the `style` property of DOM nodes (which is a
[`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)
object).

**About the `className` prop:**

As we discussed earlier, in HTML, you apply a class name to an element with the
`class` attribute. In JSX, you use the `className` prop.

## Exercise

In this exercise we'll use both methods for styling react components.

We have the following css on the page:

```css
.box {
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.box--large {
  width: 270px;
  height: 270px;
}
.box--medium {
  width: 180px;
  height: 180px;
}
.box--small {
  width: 90px;
  height: 90px;
}
```

Our job is to apply the right className and style props to the divs so the
styles applied match the text content.

```js
// Styling
import * as React from 'react'
import './box-styles.css'

function Box(props){
  return(
    <div className={props.className} style={{...props.style}}>props.children</div>
  )
}


function App() {
  return (
    <div>
      <Box className="box--medium"style={{backgroundColor:'#333',color:'white',fontStyle:'italic'}} >medium box</ Box>
    </div>
  )
}

export default App


```

## Extra Credit

### 1. 💯 Create a custom component

Try to make a custom `<Box />` component that renders a div, accepts all the
props and merges the given `style` and `className` props with the shared values.

I should be able to use it like so:

```jsx
function Box(props){
  return(
    <div className={`box box--${props.size}`} style={{...props.style}}>props.children</div>
  )
}
```

### 2. 💯 accept a size prop to encapsulate styling

It's great that we're composing the `className`s and `style`s properly, but
wouldn't it be better if the users of our components didn't have to worry about
which class name to apply for a given effect? Or that a class name is involved
at all? I think it would be better if users of our component had a `size` prop
and our component took care of making the box that size.

In this extra credit, try to make this API work:

```jsx
// Styling
import * as React from 'react'
import './box-styles.css'

function Box(props){
  return(
    <div className={`box box--${props.size}`} style={{...props.style}}>props.children</div>
  )
}

function App() {
  return (
    <div>
      <Box size="medium"style={{backgroundColor:'#333',color:'white',fontStyle:'italic'}} >medium box</ Box>
      
    </div>
  )
}

export default App

```
