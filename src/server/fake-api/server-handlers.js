import { rest } from "msw";
import * as genreDB from "../fake-db/genres";

const apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.get(`${apiUrl}/genres`, async (req, res, ctx) => {
    const genres = await genreDB.fetchAll();
    return res(ctx.status(200), ctx.json({ data: genres }));
  }),

  rest.post(`${apiUrl}/genres`, async (req, res, ctx) => {
    const values = JSON.parse(req.body);

    const newSubGenre = await genreDB.createSubGenre(values);

    return res(ctx.status(201), ctx.json({ data: newSubGenre }));
  }),

  rest.post(`${apiUrl}/books`, async (req, res, ctx) => {
    const values = JSON.parse(req.body);

    console.log(values);

    return res(ctx.status(201), ctx.json({ data: values }));
  }),
];

export { handlers };
