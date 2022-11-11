import { filterDirectors } from '../src/data.js';

const ghibliData = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "release_date": "1989",
    "rt_score": "96",
  },
];

/*Test para filter*/
describe('filterDirectors test', () => {
  it('es una función', () => {
    expect(typeof filterDirectors).toBe('function');
  });

  it('debe retornar las películas según el nombre del director seleccionado', () => {
    const exampleData = [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "release_date": "1986",
        "rt_score": "95"
      }
    ];
    const director = [
        {
          "director": "Hayao Miyazaki",
        }
      ];
    const expectResult = filterDirectors(ghibliData,director);
    expect(filterDirectors(exampleData)).toEqual(expectResult);
  });
});
