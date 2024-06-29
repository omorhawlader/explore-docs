# Creating custom components

## Background

Just like in regular JavaScript, when you want to reuse code, you write
functions. If you want to share JSX, you can do that as well. In React we call
these functions "components" and they have some special properties.

Components are basically functions which return something that is "renderable"
(more React elements, strings, `null`, numbers, etc.)

## Exercise

Let's say the DOM we want to generate is like this:

```html
<div class="container">
  <div class="message">hi, </div>
  <div class="message">My name is Omar</div>
</div>
```

In this case, it would be cool if we could reduce the duplication for creating
the React elements for this:

```jsx
<div className="message">{children}</div>
```

So we need to make a function which accepts an object argument with a `children`
property and returns the React element. Then you can interpolate a call to that
function in your JSX.

```jsx
 function message(props){
     return(
         <div className='message'>{props.children}</div>
      )
 const element = (
  <div>{message({children: 'hi'})}</div>
 )
```

This is not how we write custom React components, but this is important for you
to understand them. We'll get to custom components in the extra credit.

📜 Read more

- [https://react.dev/learn/javascript-in-jsx-with-curly-braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [https://kentcdodds.com/blog/what-is-jsx](https://kentcdodds.com/blog/what-is-jsx)

## Extra Credit

### 1. 💯 using a custom component with React.createElement

```js
  function message(props){
      return(
        <div className='message'>{props.children}</div>
      )
    }
    const component =  React.createElement(message,{children:'omar'}) // we can do it like this in it!
  const element = (
  <div>{component}</div> //working
 )

```

So far we've only used `React.createElement(someString)`, but the first argument
to `React.createElement` can also be a function which returns something that's
renderable.

So instead of calling your `message` function, pass it as the first argument to
`React.createElement` and pass the `{children: 'omor'}` object as the
second argument.

### 2. 💯 using a custom component with JSX

We're so close! Just like using JSX for regular `div`s is nicer than using the
raw `React.createElement` API, using JSX for custom components is nicer too.
Remember that it's Babel that's responsible for taking our JSX and compiling it
to `React.createElement` calls so we just need a way to tell Babel how to
compile our JSX so it passes the function by its name rather than a string.

We do this by how the JSX appears. Here are a few examples of Babel output for
JSX:

```javascript
ui = <Capitalized /> // React.createElement(Capitalized)
ui = <property.access /> // React.createElement(property.access)
ui = <Property.Access /> // React.createElement(Property.Access)
ui = <Property['Access'] /> // SyntaxError
ui = <lowercase /> // React.createElement('lowercase')
ui = <kebab-case /> // React.createElement('kebab-case')
ui = <Upper-Kebab-Case /> // React.createElement('Upper-Kebab-Case')
ui = <Upper_Snake_Case /> // React.createElement(Upper_Snake_Case)
ui = <lower_snake_case /> // React.createElement('lower_snake_case')
```

See if you can change your component function name so people can use it with JSX
more easily!

```js
    function Message(props){
      return(
        <div className='message'>{props.children}</div>
      )
    }

    {message({children:"Omar!"})} //is working as well! working 
      
      
    // but if we do it like this in jsx 
     
      <message children='my name is omar' />
       {/* jsx convet this to it -> <message>my name is omar</message>
        
        and in  browser console--

         Warning: The tag <message> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
        at message
        at div
        
        bcoz jsx handle this ->
        React.createElement("message", {
          children: "my name is omar"
        }) jsx past type as a string but we need to past as a function then react can handle this!
         thats why we need to use first letter Upper case like message to Message.
         then
         jsx will do this
         React.createElement(Message, {
          children: "my name is omar"
        })
        that way we need to start with upper letter when we make a react component  
        */}


```

### 3. 💯 Runtime validation with PropTypes

Let's change the Message component a little bit. Make it look like this now:

```javascript
    function Message(props){
      return(
        <div className='message'>{props.children}</div>
      )
    }
}
```

So now we'll use it like this:

```javascript
<Message children="hi, " />
<Message children="My name is Omar" />
```

What happens if I forget to pass the  props? It's not
going to render properly. We'll end up with a dangling comma somewhere. It would
be nice if we got some sort of indication that we passed the wrong value to the
component. This is what the `propTypes` feature is for. Here's an example of how
you use `propTypes`:

```javascript
function FavoriteNumber({favoriteNumber}) {
  return <div>My favorite number is: {favoriteNumber}</div>
}

const PropTypes = {
  number(props, propName, componentName) {
    if (typeof props[propName] !== 'number') {
      return new Error('Some useful error message here')
    }
  },
}

FavoriteNumber.propTypes = {
  favoriteNumber: PropTypes.number,
}
```

With that, if I do this:

```javascript
<FavoriteNumber favoriteNumber="not a number" />
```

I'll get an error in the console.

For this extra credit, add `propTypes` support to your updated component
(remember to update it to have the subject and greeting).

🦉 Note that prop types validation add some runtime overhead resulting in sub-optimal
performance, so the validation functions are not run in production.

📜 Read more about prop-types:

- [https://react.dev/reference/react/Component#static-proptypes](https://react.dev/reference/react/Component#static-proptypes)

### 4. 💯 Use the prop-types package

[Production deploy](http://react-fundamentals.netlify.app/isolated/final/04.extra-4.html)

As it turns out, there are some pretty common things you'd want to validate, so
the React team maintains a package of these called
[`prop-types`](https://npm.im/prop-types). Go ahead and get that added to the
page by adding a script tag for it:

```html
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
```

Then use that package instead of writing it yourself. Also, make use of the
`isRequired` feature!

### 5. 💯 using React Fragments

One feature of JSX that you'll find useful is called
["React Fragments"](https://react.dev/reference/react/Fragment). It's a special
kind of component from React which allows you to position two elements
side-by-side rather than just nested.

The component is available via `<React.Fragment>` (or a
[short syntax](https://react.dev/reference/react/Fragment#returning-multiple-elements) that opens
with `<>` and closes with `</>`). Replace the `<div className="container">` with
a fragment and inspect the DOM to notice that the elements are both rendered as
direct children of `root`.

```js
  <React.Fragment>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  </React.Fragment> or <></ >
```
