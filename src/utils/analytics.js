// Analytics utility
export const analytics = {
  track: (event, data) => console.log('Analytics:', event, data),
  page: (name) => console.log('Page:', name)
};
