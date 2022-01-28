import { render } from '@testing-library/react';
import HelloWorld from '@src/components/hello-world';
import React from 'react';

test('renders a message', () => {
  const { container, getByText } = render(<HelloWorld />);
  expect(getByText('Hello World')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot(`
        <p>
            Hello World
        </p>
    `);
});
