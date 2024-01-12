type Node = 'div' | 'p' | 'label' | 'input'

export const parseText = (element: Element): string => {
  return element.textContent || ''
}

export const parseValue = (element: Element): string => {
  return element.getAttribute('value')! || ''
}

export const findFirstChildren = (element: Element, nodeName: Node): Element | undefined => {
  return Array.from(element.children).find((e) => e.nodeName.toLowerCase() === nodeName)
}
