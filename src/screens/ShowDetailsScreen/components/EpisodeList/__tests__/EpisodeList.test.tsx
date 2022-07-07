import React from 'react';
import {EpisodeList} from '../EpisodeList';

import {mocks} from './mocks';
import {showService} from '../../../../../services/show/showService';
import {fireEvent, render} from 'test-utils';

describe('EpisodeList', () => {
  beforeAll(() => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
      seasonNames: ['1', '2'],
    });
  });
  test('first render show all episodes from season one', async () => {
    const {findByText, getByText} = render(<EpisodeList show={mocks.show} />);

    await findByText(mocks.episode1.name);

    const element1 = getByText(mocks.episode1.name);
    const element2 = getByText(mocks.episode2.name);

    expect(element1).toBeTruthy();
    expect(element2).toBeTruthy();
  });

  test('when press season show correct episodes', async () => {
    const {findByText, getByText} = render(<EpisodeList show={mocks.show} />);
    const seasonSelectElement = getByText(/Season:/i);

    fireEvent.press(seasonSelectElement);

    const season2Element = await findByText(/Season 2/i);
    fireEvent.press(season2Element);

    const ep22Element = getByText(mocks.episode22.name);

    expect(ep22Element).toBeTruthy();
  });
});
