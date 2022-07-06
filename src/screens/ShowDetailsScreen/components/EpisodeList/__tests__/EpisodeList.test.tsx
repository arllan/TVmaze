import React from 'react';
import {EpisodeList} from '../EpisodeList';

import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';
import {render} from 'test-utils';

describe('EpisodeList', () => {
  test('first render show all season one episodes', () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasons: {
        1: [],
      },
      seasonNames: [],
    });
    render(<EpisodeList show={mocks.show} />);

    expect(true).toBeTruthy();
  });
});
