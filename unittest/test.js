const axios = require('axios').default;

const mockFunc = jest.fn(x => x + 1);
test("1 + 1 = 2", () => {
    expect(1+1).toBe(2);
  }
)

test("1 + 2 = 3", () => {
    expect(1+2).toBe(3);
  }
)

test("Mock" , () => {
  mockFunc(1);
  expect(mockFunc.mock.calls.length).toBe(2);
}
)

