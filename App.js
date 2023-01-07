const heading=React.createElement("h1",{},"heading 1")
const heading2=React.createElement("h1",{},"heading 2")
const conatiner=React.createElement(
    "div",
{id:"container"},
[heading,heading2])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(conatiner)