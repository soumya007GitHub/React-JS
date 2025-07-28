import { createElement } from "react"

function App() {

  // Using React CreateElement
    const details = {
      element: 'a',
      href: 'https://soumya007github.github.io/codeyatra',
      target: '_blank',
      content: 'Explore CodeYatra'
    }
    function NewElement() {
      return createElement(details.element, {
        href: details.href,
        target: details.target
      },
        details.content
      )
    }
  
    // Using variable to render Element
  
    const google = <a href="https://www.google.com/" target="_blank">Google</a>

  return (
    <>
    <NewElement/>
    <br />
    {google}
    </>
  )
}

export default App
