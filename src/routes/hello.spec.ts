describe('Hello', () => {
  describe('GET', () => {
    it('should return a greeting message', () => {
      const res = {
        send: jest.fn(),
      };
      const { get } = require('./hello');
      const req = {};

      get(req, res);

      expect(res.send).toHaveBeenCalledWith('Hello from Alchemy! 🧪🔮🚀');
    });
  });
});
