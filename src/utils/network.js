export const retriableAction = fn => {
  fn.interceptInOffline = true; // In order to be intercepted by the middleware
  fn.meta = {
    retry: true,
  };

  return fn;
};
