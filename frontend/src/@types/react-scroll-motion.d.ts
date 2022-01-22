declare module 'react-scroll-motion' {
  import { IAnimation } from 'react-scroll-motion/dist/utils/interface';
  export {
    Animator,
    ScrollContainer,
    ScrollContainerContext,
    ScrollPageContext,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut,
  };
  const batch: (...animations: any[]) => IAnimation;
}
