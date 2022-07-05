import React from 'react';
import {render} from '@testing-library/react-native';
import {EpisodeList} from '../EpisodeList';

import {mocks} from './mocks';
describe('EpisodeList', () => {
  test('first render show all season one episodes', () => {
    render(<EpisodeList show={mocks.show} />);
  });
});
