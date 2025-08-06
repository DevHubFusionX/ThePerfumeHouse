import { API_ENDPOINTS } from './api';

let keepAliveInterval;

export const startKeepAlive = () => {
  // Ping server every 12 minutes when app is active
  keepAliveInterval = setInterval(async () => {
    try {
      await fetch(`${API_ENDPOINTS.products}?limit=1`);
      console.log('Keep-alive ping sent');
    } catch (error) {
      console.log('Keep-alive ping failed:', error);
    }
  }, 12 * 60 * 1000); // 12 minutes
};

export const stopKeepAlive = () => {
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
  }
};

// Auto-start when module loads
if (typeof window !== 'undefined') {
  startKeepAlive();
  
  // Stop when page unloads
  window.addEventListener('beforeunload', stopKeepAlive);
}