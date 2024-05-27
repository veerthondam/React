function render(reactElement, containerDOMElement) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerText = reactElement.children;
  for (let key in reactElement.props) {
    const value = reactElement.props[key];
    domElement.setAttribute(key, value);
  }

  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://wikipedia.org",
    id: "hello",
  },
  children: "Read More on wikipedidsas",
};

const containerDOMElement = document.getElementById("root");
render(reactElement, containerDOMElement);
