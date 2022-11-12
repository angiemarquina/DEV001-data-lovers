import { filterDirectors, sortYears } from '../src/data.js';


/*Test para filter*/
describe('filterDirectors test', () => {
    it('es una función', () => {
        expect(typeof filterDirectors).toBe('function');
    });

    it('debe retornar las películas según el nombre del director seleccionado', () => {
        const exampleData = [
            {
                "title": "Castle in the Sky",
                "director": "Hayao Miyazaki"
            },
            {
                "title": "Grave of the Fireflies",
                "director": "Isao Takahata"
            },
            {
                "title": "Whisper of the Heart",
                "director": "Yoshifumi Kondō"
            }
        ];

        const expectResult = [
            {
                "title": "Castle in the Sky",
                "director": "Hayao Miyazaki"
            }
        ];

        const filterDirector = filterDirectors(exampleData, "Hayao Miyazaki");
        expect(filterDirector).toEqual(expectResult);
    });
});

/*Test para sort*/
describe('sortYears test', () => {
    it('es una función', () => {
        expect(typeof sortYears).toBe('function');
    });

    it('debe retornar las películas en orden ascendente y descendente', () => {
        const exampleData = [
            { "release_date": "2014" },
            { "release_date": "1986" },
            { "release_date": "2001" }
        ];

        const expectDescendingResult = [
            { "release_date": "2014" },
            { "release_date": "2001" },
            { "release_date": "1986" }
        ];
        
        const expectAscendingResult = [
            { "release_date": "1986" },
            { "release_date": "2001" },
            { "release_date": "2014" }
        ];

        expect(sortYears(exampleData, "Oldest")).toEqual(expectAscendingResult);
        expect(sortYears(exampleData, "Most recent")).toEqual(expectDescendingResult);
    });
});
