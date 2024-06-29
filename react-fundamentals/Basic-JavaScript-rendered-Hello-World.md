
# Basic JavaScript-rendered Hello World  

# Modification & Author: Omar

## 📝 Your Notes

<!-- Elaborate on your learnings here in `src/exercise/01.md` -->

## Background

It doesn't take long to learn how to make "Hello World" appear on the page with
HTML:

```html
<html>
  <body>
    <div>Hello World</div>
  </body>
</html>
```

The browser takes this HTML code and generates
[the DOM (the Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
out of it. The browser then exposes the DOM to JavaScript so you can interact
with it to add a layer of interactivity to your web-page.

```html
<html>
  <body>
    <div>Hello World</div>
    <script type="module">
      // your JavaScript here
    </script>
  </body>
</html>
```

## Exercise

Production deploys:

It's important to have a basic understanding of how to generate and interact
with DOM nodes using JavaScript because it will help you understand how React
works under the hood a little better. So in this exercise we're actually not
going to use React at all. Instead we're going to use JavaScript to create a
**div** DOM node with the text "Hello World" and insert that DOM node into the
document.

## Extra Credit

### 1. 💯 generate the root node

Rather than having the **root** node in the HTML, see if you can create that one using JavaScript as well.  

## Solution

```javascript
  <script type="module">
        const root = document.createElement('div')
        root.setAttribute("id","root")
        const div = document.createElement('div')
        div.textContent = 'Hello World'
        document.body.append(root)
        root.append(div)
    </script>
```
