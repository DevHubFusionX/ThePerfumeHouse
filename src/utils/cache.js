const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

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
    
    // Preload first few product images for faster display
    if (key === 'products' && Array.isArray(data)) {
      data.slice(0, 6).forEach(product => {
        if (product.images?.[0]) {
          const img = new Image();
          img.src = product.images[0];
        }
      });
    }
  },
  
  clear: (key) => {
    if (key) {
      localStorage.removeItem(key);
    } else {
      // Clear all cache items
      const keys = Object.keys(localStorage);
      keys.forEach(k => {
        if (k === 'products' || k === 'combos') {
          localStorage.removeItem(k);
        }
      });
    }
  }
};