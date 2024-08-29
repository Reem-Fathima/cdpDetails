import React from 'react';
import { render } from '@testing-library/react';
import Cdp from './Cdp';

test('renders Cdp component without crashing', () => {
  const { getByText } = render(<Cdp />);
  expect(getByText(/CDP Reporting Year/i)).toBeInTheDocument();
});
test('renders CDP Reporting Year and CDP Score with correct text', () => {
    const { getByText } = render(<Cdp />);
    expect(getByText(/CDP Reporting Year/i)).toBeInTheDocument();
    expect(getByText(/2022/i)).toBeInTheDocument();
    expect(getByText(/CDP Score/i)).toBeInTheDocument();
    expect(getByText(/B-\(Management\)/i)).toBeInTheDocument();
  });
  test('checks if the label has correct style', () => {
    const { getByText } = render(<Cdp />);
    const label = getByText('Scope 1 Location Based[C6]');
    expect(label).toHaveStyle('color: #014d4ecd');
    expect(label).toHaveStyle('font-weight: bold');
  });
  import React from 'react';
import { render } from '@testing-library/react';
import Cdp from './Cdp';

test('renders Comments section correctly', () => {
  const { getByText } = render(<Cdp />);
  expect(getByText(/Comments/i)).toBeInTheDocument();
  expect(getByText(/Energy efficiency program targets natural gas and electricity use/i)).toBeInTheDocument();
});
test('renders form input labels correctly', () => {
    const { getByText } = render(<Cdp />);
    expect(getByText(/Scope 1 Location Based\[C6\]/i)).toBeInTheDocument();
    expect(getByText(/Scope 2 Location Based\[C6.3\]/i)).toBeInTheDocument();
    expect(getByText(/Scope 2 Market Based\[C6.3\]/i)).toBeInTheDocument();
    expect(getByText(/Initiative Category/i)).toBeInTheDocument();
    expect(getByText(/Annual CO2 Savings/i)).toBeInTheDocument();
    expect(getByText(/Intensity % attributed for your company/i)).toBeInTheDocument();
  });
  test('matches snapshot', () => {
    const { asFragment } = render(<Cdp />);
    expect(asFragment()).toMatchSnapshot();
  });  