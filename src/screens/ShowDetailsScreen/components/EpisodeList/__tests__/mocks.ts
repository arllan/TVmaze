import {DaysOfWeek} from '../../../../../models/CommonModels';
import {Show} from '../../../../../models/ShowModel';

export const show: Show = {
  id: 250,
  url: 'https://www.tvmaze.com/shows/250/kirby-buckets',
  name: 'Kirby Buckets',
  type: 'Scripted',
  genres: ['Comedy'],
  status: 'Ended',
  ended: '2017-02-02',
  schedule: {
    time: '07:00',
    days: [
      DaysOfWeek.Monday,
      DaysOfWeek.Tuesday,
      DaysOfWeek.Wednesday,
      DaysOfWeek.Thursday,
      DaysOfWeek.Friday,
    ],
  },
  rating: {
    average: null,
  },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg',
  },
  summary:
    "<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>",
};

export const mocks = {
  show,
};
