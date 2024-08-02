/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
const anotherElement=(
    <a href="'https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser="chai aur React"
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
