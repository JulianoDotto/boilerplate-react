import { render, screen } from '@testing-library/react';
import UserInfo from '.';

describe('<UserInfo />', () => {
  it('should render the heading', () => {
    render(<UserInfo />);

    expect(
      screen.getByRole('heading', { name: /UserInfo/i })
    ).toBeInTheDocument();
  });
});
