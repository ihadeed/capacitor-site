import { handlePushState } from '../utils/helpers';

describe('handlePushState', () => {
  let win: any;
  let doc: Document;
  let hstry: History;
  let pushedStateHref: string;
  let elementScrolledIntoView: boolean;

  beforeEach(() => {
    pushedStateHref = null;
    elementScrolledIntoView = false;
    win = {
      scrollTo(x: number, y: number) {
        win.scrollX = x;
        win.scrollY = y;
      },
      scrollX: 0,
      scrollY: 0,
    };
    doc = {
      querySelector() {
        return {
          scrollIntoView() {
            elementScrolledIntoView = true;
          },
        };
      },
    } as any;
    hstry = {
      pushState(_data: any, _title: string, url: string) {
        pushedStateHref = url;
      },
    } as any;
  });

  it('pushState, elm.scrollIntoView() cuz same pathname, different hash', () => {
    win.scrollX = 50;
    win.scrollY = 80;
    const loc = new URL('https://stenciljs.com/page-1');
    const newUrl = new URL('https://stenciljs.com/page-1#hash');
    const isFromPopState = false;

    handlePushState(win, doc, loc, hstry, isFromPopState, newUrl);
    expect(pushedStateHref).toBe('https://stenciljs.com/page-1#hash');
    expect(elementScrolledIntoView).toBe(true);
  });

  it('pushState, no scroll to top cuz same pathname, different hash', () => {
    win.scrollX = 50;
    win.scrollY = 80;
    const loc = new URL('https://stenciljs.com/page-1');
    const newUrl = new URL('https://stenciljs.com/page-1#hash');
    const isFromPopState = false;

    handlePushState(win, doc, loc, hstry, isFromPopState, newUrl);
    expect(pushedStateHref).toBe('https://stenciljs.com/page-1#hash');
    expect(win.scrollX).toBe(50);
    expect(win.scrollY).toBe(80);
  });

  it('pushState, no scroll to top cuz its from popstate event', () => {
    win.scrollX = 50;
    win.scrollY = 80;
    const loc = new URL('https://stenciljs.com/page-1');
    const newUrl = new URL('https://stenciljs.com/page-2');
    const isFromPopState = true;
    handlePushState(win, doc, loc, hstry, isFromPopState, newUrl);
    expect(pushedStateHref).toBe('https://stenciljs.com/page-2');
    expect(win.scrollX).toBe(50);
    expect(win.scrollY).toBe(80);
  });

  it('pushState, scroll to top', () => {
    win.scrollX = 50;
    win.scrollY = 80;
    const loc = new URL('https://stenciljs.com/page-1');
    const newUrl = new URL('https://stenciljs.com/page-2');
    const isFromPopState = false;
    handlePushState(win, doc, loc, hstry, isFromPopState, newUrl);
    expect(pushedStateHref).toBe('https://stenciljs.com/page-2');
    expect(win.scrollX).toBe(0);
    expect(win.scrollY).toBe(0);
  });
});
