// Lol I wanted to use JSX but not react. Don't be like me.

const ATTR_MAP: { [attr: string]: string; } = {
  className: 'class',
  htmlFor: 'for',
};

export const Fragment = Symbol('Fragment');

export function appendChildren(parent: HTMLElement, children: JSX.Element[]): void {
  for (const child of children) {
    if (typeof child === 'string') {
      parent.appendChild(document.createTextNode(child))
    } else if (Array.isArray(child)) {
      appendChildren(parent, child);
    } else if (child != null) {
      parent.appendChild(child);
    }
  }
};

export function createElement<Tag extends keyof JSX.IntrinsicElements>(tag: Tag | typeof Fragment, props: null | Partial<JSX.IntrinsicElements[Tag]>, ...children: JSX.Element[]): JSX.IntrinsicElements[Tag] {
  if (tag === Fragment) return children;
  const elem = document.createElement(tag);
  if (props) {
    for (const key of Object.keys(props) as (keyof JSX.IntrinsicElements[Tag])[]) {
      elem.setAttribute(ATTR_MAP[key as string] ?? key, String(props[key]));
    }
  }
  appendChildren(elem, children);
  return elem;
};

export function render(parent: HTMLElement, child: JSX.Element): void {
  appendChildren(parent, [child]);
}
