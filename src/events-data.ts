export const EVENTS: any = [
  {
    id: 1,
    name: 'Music Concert 1',
    category: 'Music',
    longDescription: 'This program is abour Music and Concert about musics. all kinda musics are will be part of this event... Most welcome all!',
    image: 'mic.jpg',
    bookedCount: 10,
    location: "Chennai"
  },
  {
    id: 2,
    name: 'Music Concert 2',
    category: 'Music',
    longDescription: 'This program is abour Music and Concert about musics. all kinda musics are will be part of this event... Most welcome all to Bangalore!',
    image: 'mic.jpg',
    bookedCount: 10,
    location: "Bangalore"
  },
  {
    id: 3,
    name: 'Night pub 1',
    category: 'Night Life',
    longDescription: '',
    image: 'night.jpg',
    bookedCount: 10,
    location: "Chennai"
  },
  {
    id: 4,
    name: 'Night pub 2',
    category: 'Night Life',
    longDescription: '',
    image: 'night.jpg',
    bookedCount: 10,
    location: "Mumbai"
  },
  {
    id: 5,
    name: 'Performing and Visual Arts 1',
    category: 'Performing and Visual Arts',
    longDescription: '',
    image: 'art.jpeg',
    bookedCount: 10,
     location: "Mumbai"
  },
  {
    id: 6,
    name: 'Performing and Visual Arts 2',
    category: 'Performing and Visual Arts',
    longDescription: '',
    image: 'art.jpeg',
    bookedCount: 10,
     location: "Chennai"
  },
  {
    id: 7,
    name: 'Holidays Event 1',
    category: 'Holidays Event',
    longDescription: '',
    image: 'holi.jpg',
    bookedCount: 10,
    location: "Chennai"
  },
  {
    id: 8,
    name: 'Holidays Event 2',
    category: 'Holidays Event',
    longDescription: '',
    image: 'holi.jpg',
    bookedCount: 10,
    location: "Bangalore"
  },

  {
    id: 9,
    name: 'Dating event 1',
    category: 'Dating',
    longDescription: '',
    image: 'datin.png',
    bookedCount: 10,
    location: "Bangalore"
  },
  {
    id: 10,
    name: 'Dating event 2',
    category: 'Dating',
    longDescription: '',
    image: 'datin.png',
    bookedCount: 10,
    location: "Chennai"
  },
  {
    id: 11,
    name: 'Games and Hobbies 1',
    category: 'Hobbies',
    longDescription: '',
    image: 'gam.jpg',
    bookedCount: 10,
    location: "Chennai"
  },
  {
    id: 12,
    name: 'Games and Hobbies 2',
    category: 'Hobbies',
    longDescription: '',
    image: 'gam.jpg',
    bookedCount: 10,
    location: "Mumbai"
  },
  {
    id: 13,
    name: 'Food & Drink event 1',
    category: 'Food & Drink',
    longDescription: '',
    image: 'food.png',
    bookedCount: 10,
    location: "Mumbai"
  },
  {
    id: 14,
    name: 'Food & Drink event 2',
    category: 'Food & Drink',
    longDescription: '',
    image: 'food.png',
    bookedCount: 10,
    location: "Chennai"
  }
];

export function findEventsById(eventId: number) {
  return EVENTS.find((event: { id: number }) => event.id === eventId);
}
