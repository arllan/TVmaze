import {showService} from '../showService';
import {api} from '../../api';
import {episodeList} from './mocks';

describe('showService', () => {
  describe('getEpisodes', () => {
    test('when API response 200 return episodes grouped by season', async () => {
      jest.spyOn(api, 'get').mockResolvedValueOnce({data: episodeList});
      const groupedEpisodes = await showService.getEpisodes('250');

      expect(groupedEpisodes.seasonNames.length).toBe(2);
      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();
    });
  });
});
