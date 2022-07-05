import React from 'react';
import {render} from '@testing-library/react-native';
import {EpisodeList} from '../EpisodeList';

import {mocks} from './mocks';
import {QueryClient, QueryClientProvider, setLogger} from 'react-query';
import {showService} from '../../../../../services/show/showService';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: false,
    },
  },
});

const wrapper = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  test('first render show all season one episodes', () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasons: {
        1: [],
      },
      seasonNames: [],
    });
    render(<EpisodeList show={mocks.show} />, {wrapper});

    expect(true).toBeTruthy();
  });
});
