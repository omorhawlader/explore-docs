# Intro to raw React APIs

## 📝 Your Notes

<!-- Elaborate on your learnings here in `src/exercise/02.md` -->

## Background

React is the most widely used frontend framework in the world and it's using the
same APIs that you're using when it creates DOM nodes.

React abstracts away the imperative browser API from you to give you a much more
declarative API to work with.

> Learn more about the difference between those two concepts here:

- Imperative Programming: Tells the computer exactly how to do something step-by-step, focusing on the process and changing states directly.
- Declarative Programming: Focuses on what you want to accomplish, describing the desired outcome without specifying every detail of how to achieve it. It's more about stating rules and letting the computer figure out the steps.

> In React, declarative programming means you describe what you want your user interface to look like based on the current application state. You define components and their relationships, and React takes care of updating the DOM to match your descriptions when the state changes. It's like telling React "here's what I want the UI to be like," and React figures out how to update it efficiently. This contrasts with imperative approaches where you might manually manipulate the DOM to achieve the same result.

One important thing to know about React is that it supports multiple platforms
(for example, native and web). Each of these platforms has its own code
necessary for interacting with that platform, and then there's shared code
between the platforms.

With that in mind, you need two JavaScript files to write React applications for
the web:

- React: responsible for creating React elements (kinda like
  `document.createElement()`)
- ReactDOM: responsible for rendering React elements to the DOM (kinda like
  `rootElement.append()`)

## Exercise

Production deploys:

Let's convert previous code to use React! But don't worry, we won't be doing any JSX just
yet... You're going to use raw React APIs here.

In modern applications you'll get React and React DOM files from a "package
registry" like [npm](https://npmjs.com) ([react](https://npm.im/react) and
[react-dom](https://npm.im/react-dom)). But for these first exercises, we'll use
the script files which are available on [unpkg.com](https://unpkg.com) and
regular script tags so you don't have to bother installing them. So in the
exercise you'll be required to add script tags for these files.

Once you include the script tags, you'll have two new global variables to use:
`React` and `ReactDOM`.

Here's a simple example of the API:

```javascript
const elementProps = {id: 'element-id', children: 'Hello world!'}
const elementType = 'h1'
const reactElement = React.createElement(elementType, elementProps)
const root = ReactDOM.createRoot(rootElement)
root.render(reactElement)
```

## Extra Credit

### 1. 💯 nesting elements

See if you can figure out how to write the JavaScript + React code to generate
this DOM output:

```html
<body>
  <div id="root">
    <div class="container">
      <span>Hello</span>
      <span>World</span>
    </div>
  </div>
</body>
```

## Solution

```js
    const rootElement = document.getElementById('root')
    const span = React.createElement('span',{},'hello')
    const span_ = React.createElement('span',{},'world')
    const props = {
      className:'container',
      children:[
        span,
        ' ',
        span_
      ]
    }
    const elementType = 'div'
    const element = React.createElement(elementType,props)
    console.log(element);

    const root = ReactDOM.createRoot(rootElement)
    root.render(element)

```
