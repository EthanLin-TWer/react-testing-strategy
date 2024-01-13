type Node = 'div' | 'p' | 'label' | 'input'

const _findMatchedNode = (element: Element, nodeName: Node) => {
  return Array.from(element.children).filter((e) => {
    return e.nodeName.toLowerCase() === nodeName
  })
}

export const parseText = (element: Element): string => {
  return element.textContent || ''
}

export const parseValue = (element?: Element): string => {
  return (element && element.getAttribute('value')!) || ''
}

export const findFirstChildren = (element: Element, nodeName: Node): Element | undefined => {
  return _findMatchedNode(element, nodeName)[0]
}

export const findSecondChildren = (element: Element, nodeName: Node): Element | undefined => {
  return _findMatchedNode(element, nodeName)[1]
}
