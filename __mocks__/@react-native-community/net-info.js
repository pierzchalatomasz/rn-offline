const RNCNetInfoMock = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
  isConnected: {
    fetch: jest.fn(() => Promise.resolve(true)),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  },
};

export default RNCNetInfoMock;
