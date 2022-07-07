import React from 'react';
import {EpisodeList} from '../EpisodeList';

import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';
import {render} from 'test-utils';

describe('EpisodeList', () => {
  test('first render show all episodes from season one', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasons: {
        1: [mocks.episode1, mocks.episode2],
      },
      seasonNames: ['1'],
    });
    const {findByText, getByText} = render(<EpisodeList show={mocks.show} />);

    await findByText(mocks.episode1.name);

    const element1 = getByText(mocks.episode1.name);
    const element2 = getByText(mocks.episode2.name);

    expect(element1).toBeTruthy();
    expect(element2).toBeTruthy();
  });
});
