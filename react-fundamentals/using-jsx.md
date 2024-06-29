# Using JSX

## 📝 Your Notes

<!-- Elaborate on your learnings here in `src/exercise/03.md` -->

## Background

JSX is more intuitive than the raw React API and is easier to understand when
reading the code. It's fairly simple HTML-like syntactic sugar on top of the raw
React APIs:

```jsx
const ui = <h2 id="omar">Hey there, My name is Omar</h2>

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

const ui = React.createElement('h1', {id: 'omar', children: 'Hey there, My name is Omar'})
```

Because JSX is not actually JavaScript, you have to convert it using something
called a code compiler. [Babel](https://babeljs.io) is one such tool.

🦉 Pro tip: If you'd like to see how JSX gets compiled to JavaScript,
[check out the online babel REPL here](https://babeljs.io/repl#?builtIns=App&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG4D40QAOAhmLgBICmANtSGgPRGm7rNkDqIATtRo-3wMseAFBA&presets=react&prettier=true).

If you can train your brain to look at JSX and see the compiled version of that
code, you'll be MUCH more effective at reading and using it! I strongly
recommend you give this some intentional practice.

## JSX-

```jsx
const ui = (
<div className="omar">
  <h1>Hi</h1>
  <div>
    <h1>hlow</h1>
    <h1>hlow</h1>
    
  </div>
</div>

)
```

## JSX convert to this

```jsx
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ui = /*#__PURE__*/ _jsxs("div", {
  className: "omar",
  children: [
    /*#__PURE__*/ _jsx("h1", {
      children: "Hi"
    }),
    /*#__PURE__*/ _jsxs("div", {
      children: [
        /*#__PURE__*/ _jsx("h1", {
          children: "hlow"
        }),
        /*#__PURE__*/ _jsx("h1", {
          children: "hlow"
        })
      ]
    })
  ]
});
```

## Exercise

Production deploys:

Normally you'll compile all of your code at build-time before you ship your
application to the browser, but because Babel is written in JavaScript we can
actually run it _in_ the browser to compile our code on the fly and that's what
we'll do in this exercise.

So we'll include a script tag for Babel, then we'll update our own script tag to
tell Babel to compile it for us on the fly. When you're done, you should notice
the compiled version of the code appears in the `<head>` of the DOM (which you
can inspect using DevTools).

## Extra Credit

### 1. 💯 interpolate className and children

"Interpolation" is defined as "the insertion of something of a different nature
into something else."

Let's take template literals for example:

```javascript
const j = 'hi,'
const s = 'there'
const message = `${j} ${s}`
```

See if you can figure out how to extract the `className` (`"container"`) and
`children` (`"Hello World"`) to variables and interpolate them in the JSX.

```jsx
const className = 'container'
const children = 'Hello World'
const element = <div className="hmmm">how do I make this work?</div>
```

📜 The react docs for JSX are pretty good:
[https://react.dev/learn/writing-markup-with-jsx](https://react.dev/learn/writing-markup-with-jsx)

### 2. 💯 spread props

What if I have an object of props that I want applied to the `div` like this:

```jsx
const children = 'Hello World'
const className = 'container'
const props = {children, className}
const element = <div /> // how do I apply props to this div?
```

If we were doing raw React APIs it would be:

```jsx
const element = React.createElement('div', props)
```

Or, it could be written like this:

```jsx
const element = React.createElement('div', {...props})
```

See if you can figure out how to make that work with JSX.

## Solution

```js
const ui = (
<div className="omar">
  <h1>Hi</h1>
  <div>
    <h1>hlow</h1>
    <h1>hlow</h1>
    
  </div>
</div>

// jsx convert to this
// var props = {
//   children: 'hello world - Omar',
//   className: 'container'
// };
// var element = /*#__PURE__*/React.createElement("div", props); 

// ReactDOM.createRoot(document.getElementById('root')).render(element);

)
```
