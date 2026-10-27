interface Window {
  __imageZoomInitialized?: boolean;
  googleTranslateElementInit?: () => void;
  google: {
    translate: {
      TranslateElement: new (options: { pageLanguage: string }, elementId: string) => unknown;
    };
  };
}
