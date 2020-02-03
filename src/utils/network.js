export const retriableAction = (fnName, originalActionCreator) => (...args) => {
  const originalFn = originalActionCreator(...args);
  originalFn.interceptInOffline = true; // In order to be intercepted by the middleware
  originalFn.meta = {
    retry: true,
    name: fnName,
    args,
  };

  return originalFn;
};
