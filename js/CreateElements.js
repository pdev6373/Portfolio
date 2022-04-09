export default function CreateElements(elementTag, elementClass, ...children) {
  let element = document.createElement(elementTag);

  elementClass && (element.className = elementClass);
  
  children && element.append(...children);

  return element;
}
