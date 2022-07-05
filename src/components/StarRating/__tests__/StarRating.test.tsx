import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  test('if passed rating, show value', () => {
    const {getByText, getByTestId} = render(
      <StarRating rating={{average: 5}} />,
    );
    expect(getByText('5')).toBeTruthy();
    expect(getByTestId('starIcon')).toBeTruthy();
  });
  test('if there is not rating show nothing', () => {
    const {container, queryByTestId} = render(<StarRating />);

    expect(queryByTestId('starIcon')).toBeNull();
    expect(container.children).toEqual([]);
  });
});
