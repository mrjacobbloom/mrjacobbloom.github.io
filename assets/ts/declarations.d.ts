declare var Flickity: typeof import('flickity');

interface CodeProjectButton {
  icon: string;
  text: string;
  href: string;
}

interface CodeProject {
  title: string;
  videoSrc: string;
  technologies: string[];
  description: JSX.Element;
  buttons: CodeProjectButton[];
}

type Intrinsicify<T> = Partial<Omit<T, 'children' | 'class'>> & { class?: string; };

interface HTMLVideoElement {
  playsinline: boolean; // idk why this isn't in TS' version of the DOM
}

declare namespace JSX {
  interface IntrinsicElements {
    a: Intrinsicify<HTMLAnchorElement>;
    div: Intrinsicify<HTMLDivElement>;
    h3: Intrinsicify<HTMLHeadingElement>;
    i: Intrinsicify<HTMLElement>;
    p: Intrinsicify<HTMLParagraphElement>;
    video: Intrinsicify<HTMLVideoElement>;
  }
  type Element = HTMLElement | string | JSX.Element[];
}
