import Movie from '../domain/Movie';

test('Должен создаваться новый фильм', () => {
    const movie = new Movie(4298, 'The Avengers', 'Marvel Studios', 650, 2012, 'USA', 'Avengers Assemble!', 'science fiction, action, fantasy, adventure', '137 min. / 02:17');
    expect(movie).toBeDefined();
});
