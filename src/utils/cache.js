const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const cache = {
  get: (key) => {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const { data, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data;
  },
  
  set: (key, data) => {
    const item = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
};