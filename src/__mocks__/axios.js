const mockResponse = {
  data: {
    results: [
      { name: "Bruce Wayne" },
      { name: "Bob Wayne" },
      { name: "Jane Wayne" },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
