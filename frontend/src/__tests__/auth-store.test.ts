describe('auth-store', () => {
  it('should have default state', () => {
    const store = require('../stores/auth-store').useAuthStore.getState();
    expect(store.isAuthenticated).toBe(false);
  });
});
