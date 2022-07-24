import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandPage from "@/pages/bands/[bandId]";

/* its async because it's readinbg the mock file */
test("Band page displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandPage band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
    /* this regex allows us to pass the name with insensitive case */
  });
  expect(heading).toBeInTheDocument();
});

test("Error message is display on Band page if there's an error", () => {
  render(<BandPage band={null} error="EVERYTHING IS FINE" />);

  const error = screen.getByRole("heading", {
    name: /everything is fine/i,
  });
  expect(error).toBeInTheDocument();
});

/* It's is neccesary to run more tests according to coverage so we can truly have tested this component */
