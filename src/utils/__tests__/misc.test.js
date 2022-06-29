import { findById } from "../misc";

test("findById function returns the correct item from the array", () => {
  const mockArray = [
    { id: 1, value: "one" },
    { id: 2, value: "two" },
    { id: 3, value: "three" },
  ];

  const result = findById(mockArray, 3);
  expect(result.id).toBe(3);
});
