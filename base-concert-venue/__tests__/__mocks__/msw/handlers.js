import { rest } from "msw";

import { fakeUserReservations } from "@/__tests__/__mocks__/fakeData/userReservations";

import { readFakeData } from "../fakeData";

export const handlers = [
  rest.get("http://localhost:3000/api/shows/:showId", async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const { showId } = req.params;
    /* index or showId 0 has seats available in fake data but index 1 has not */
    return res(ctx.json({ show: fakeShows[Number(showId)] }));
  }),
  rest.get(
    "http://localhost:3000/api/users/:userId/reservations",
    (req, res, ctx) => {
      const { userId } = req.params;
      return Number(userId) === 1
        ? res(ctx.json({ userReservations: fakeUserReservations }))
        : [];
    }
  ),
];
