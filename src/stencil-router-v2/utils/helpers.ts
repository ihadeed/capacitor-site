import { Build } from '@stencil/core';

export const isFunction = (v: any): v is Function => typeof v === 'function';

export const isPromise = <T = any>(v: any): v is Promise<T> =>
  !!v && (typeof v === 'object' || isFunction(v)) && isFunction(v.then);

export const isString = (v: any): v is string => typeof v === 'string';

export const normalizePathname = (url: URL | Location) =>
  url.pathname.toLowerCase();

export const serializeURL = (url: URL | Location) =>
  normalizePathname(url) + url.search;

export const shouldPushState = (loc: URL | Location, newUrl: URL) =>
  loc.href !== newUrl.href;

export const handlePushState = (
  win: Window,
  doc: Document,
  loc: URL | Location,
  hstry: History,
  isFromPopState: boolean,
  newUrl: URL,
) => {
  if (shouldPushState(loc, newUrl)) {
    hstry.pushState(null, null, newUrl.href);
    if (!isFromPopState) {
      if (loc.hash !== newUrl.hash && newUrl.hash.startsWith('#')) {
        const elm = doc.querySelector(newUrl.hash);
        if (elm) {
          elm.scrollIntoView();
        }
      } else {
        win.scrollTo(0, 0);
      }
    }
  }
};

export const urlFromHref = (doc: Document, href: string) =>
  new URL(href, doc.baseURI);

export const devDebug = (msg: string) => {
  if (Build.isDev) {
    console.debug.apply(console, [
      '%crouter',
      `background: #717171; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,
      msg,
    ]);
  }
};
