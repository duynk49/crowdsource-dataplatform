/* eslint-disable import/no-internal-modules */
import '__fixtures__/mockComponentsWithSideEffects';

import HomePage from 'pages/bolo-india/index.page';
import { render, screen } from 'utils/testUtils';

describe('Bolo Home Page', () => {
  window.alert = jest.fn();

  const setup = () => {
    return render(<HomePage />);
  };

  it('should render the bolo india homepage', () => {
    setup();

    expect(screen.getByTestId('BoloIndiaActions')).toBeInTheDocument();
    expect(screen.getByTestId('BoloIndiaDetails')).toBeInTheDocument();
  });
});
