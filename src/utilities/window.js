const browser = {
  window: {
    location: {
      href: "",
      pathname: "/",
      origin: "",
      reload: () => {},
    },
    localStorage: {
      getItem: () => {},
      setItem: () => {},
      removeItem: () => {},
    },
    matchMedia: () => {},
  },
  document: {
    activeElement: null,
  },
};

if (typeof window !== "undefined") {
  browser.window = window;
}

if (typeof document !== "undefined") {
  browser.document = document;
}

if (typeof Element !== "undefined") {
  browser.Element = Element;
}

export default browser;
