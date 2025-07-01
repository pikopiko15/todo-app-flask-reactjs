describe('auth-store', () => {
  beforeEach(() => {
    // Reset the store state before each test
    const { useAuthStore } = require('../stores/auth-store');
    useAuthStore.setState({ token: null, isLoggedIn: false });
  });

  it('should have default state', () => {
    const store = require('../stores/auth-store').useAuthStore.getState();
    expect(store.isLoggedIn).toBe(false);
    expect(store.token).toBeNull();
  });

  it('should set isLoggedIn and token on signIn', () => {
    const { useAuthStore } = require('../stores/auth-store');
    useAuthStore.getState().signIn('test-token');
    const store = useAuthStore.getState();
    expect(store.isLoggedIn).toBe(true);
    expect(store.token).toBe('test-token');
  });

  it('should reset isLoggedIn and token on logout', () => {
    const { useAuthStore } = require('../stores/auth-store');
    useAuthStore.getState().signIn('test-token');
    useAuthStore.getState().logout();
    const store = useAuthStore.getState();
    expect(store.isLoggedIn).toBe(false);
    expect(store.token).toBeNull();
  });
});
