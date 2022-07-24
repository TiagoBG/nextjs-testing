import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("Should display reservations & the 'purchase more tickets' button", async () => {
  render(<UserReservations userId={1} />);

  const purchaseMoreBtn = await screen.findByText(/purchase more tickets/i);
  expect(purchaseMoreBtn).toBeInTheDocument();
});

test("Should not display any reservations & display the 'purchase tickets' button", async () => {
  render(<UserReservations userId={0} />);

  const purchaseMoreBtn = await screen.findByText(/purchase tickets/i);
  expect(purchaseMoreBtn).toBeInTheDocument();

  const yourTicketsTitle = screen.queryByRole("heading", {
    name: /your tickets/i,
  });
  expect(yourTicketsTitle).not.toBeInTheDocument();
});
