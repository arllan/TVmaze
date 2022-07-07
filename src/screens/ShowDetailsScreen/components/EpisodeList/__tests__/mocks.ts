import {Episode} from 'src/models/EpisodeModel';
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

const episode1: Episode = {
  id: 20849,
  url: 'https://www.tvmaze.com/episodes/20849/kirby-buckets-1x01-cars-buses-and-lawnmowers',
  name: 'Cars, Buses and Lawnmowers',
  season: 1,
  number: 1,
  type: 'regular',
  airdate: '2014-10-20',
  airtime: '20:00',
  airstamp: '2014-10-21T00:00:00+00:00',
  runtime: 30,
  rating: {
    average: null,
  },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_landscape/303/759608.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/303/759608.jpg',
  },
  summary:
    '<p>Kirby learns about a character design contest featuring the ultimate prize - a chance to meet idol Mac McCallister and debut an animated character on TV. He plans to attend with Fish and Eli, but when they unexpectedly get stranded at school hours before the contest, they devise a plan that accidently places them in the middle of "Clown Town," an abandoned area of the city where creepy clowns reign. Meanwhile, Dawn realizes Kirby is using an embarrassing drawing of her titled "Dawnzilla" as his submission for the contest, so she and Belinda do everything in their power to stop him.</p>',
  _links: {
    self: {
      href: 'https://api.tvmaze.com/episodes/20849',
    },
  },
};

const episode2: Episode = {
  id: 20850,
  url: 'https://www.tvmaze.com/episodes/20850/kirby-buckets-1x02-flice-of-the-living-dead',
  name: 'Flice of the Living Dead',
  season: 1,
  number: 2,
  type: 'regular',
  airdate: '2014-10-27',
  airtime: '19:30',
  airstamp: '2014-10-27T23:30:00+00:00',
  runtime: 30,
  rating: {
    average: null,
  },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_landscape/303/759609.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/303/759609.jpg',
  },
  summary:
    '<p>Kirby and his friends are excited that they\'re finally old enough to attend the annual "Forest Hills Ninth Annual Fright Night Film Festival." However, when their biology teacher accidentally breaks open a container of Forest Hills Super Flice, the principal quarantines Kirby\'s class within the school, ruining their chance to go. Meanwhile, Dawn and Belinda are psyched to be invited to a Halloween party at the house of one of the coolest boys in school, Evan.</p>',
  _links: {
    self: {
      href: 'https://api.tvmaze.com/episodes/20850',
    },
  },
};

export const mocks = {
  show,
  episode1,
  episode2,
};
