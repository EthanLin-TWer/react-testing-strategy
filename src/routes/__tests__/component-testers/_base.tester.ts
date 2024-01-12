type Node = 'div' | 'p'
export const findFirstChildren = (htmlElement: Element, nodeName: Node): Element | undefined => {
  return Array.from(htmlElement.children).find((e) => e.nodeName.toLowerCase() === nodeName)
}
