type Node = 'div' | 'p' | 'label' | 'input'

export const getText = (element: Element): string => {
  return element.textContent || ''
}
export const findFirstChildren = (htmlElement: Element, nodeName: Node): Element | undefined => {
  return Array.from(htmlElement.children).find((e) => e.nodeName.toLowerCase() === nodeName)
}
