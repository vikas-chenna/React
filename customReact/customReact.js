// console.log("working");

const mainContainer = document.getElementById("root");

const element = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click here to Visit Google",
};

function customRender(reactElement,Container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (const prop in element.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  mainContainer.appendChild(domElement)
}

customRender(element, mainContainer);

const pEle = {
  type:"p",
  props:{
    id:"myPId",
    class:"myPClass"
  },
  children:"this is P tag"
}

function createPTag(element,container){
  const p = document.createElement(pEle.type);
  p.innerHTML = pEle.children;
  for (const prop in pEle.props) {
    if(prop === 'children') continue;
    p.setAttribute(prop,pEle.props[prop])
  }
  container.appendChild(p)
}

createPTag(pEle,mainContainer)