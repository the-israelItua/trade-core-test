import { server, rest } from "server/fake-api/test-server";
import { client } from "../api-client";

const apiURL = process.env.REACT_APP_API_URL;

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("makes GET requests to the given endpoint", async () => {
  const endpoint = "test-endpoint";
  const mockResult = { mockValue: "VALUE" };
  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult));
    })
  );

  const result = await client(endpoint);

  expect(result).toEqual(mockResult);
});

test("when data is provided, it is stringified and the method defaults to POST", async () => {
  const endpoint = "test-endpoint";
  server.use(
    rest.post(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(req.body));
    })
  );
  const data = { a: "b" };
  const result = await client(endpoint, { data });
  expect(JSON.parse(result)).toEqual(data);
});

test("correctly rejects the promise if there is an error", async () => {
  const endpoint = "test-endpoint";
  const testError = { message: "Test error" };
  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.status(400), ctx.json(testError));
    })
  );

  await expect(client(endpoint)).rejects.toEqual(testError);
});
