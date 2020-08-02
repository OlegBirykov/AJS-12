import MusicAlbum from '../domain/MusicAlbum';

test('new music album should be create', () => {
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    expect(musicAlbum).toBeDefined();
});
