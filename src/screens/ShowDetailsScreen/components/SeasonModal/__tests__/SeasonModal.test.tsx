import React from 'react';
import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  test('the component rendered', () => {
    <SeasonModal
      seasons={['1', '2', '3']}
      selectedSeason="1"
      onSelectSeason={season => console.log(season)}
    />;
  });
});
