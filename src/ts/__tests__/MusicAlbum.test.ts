import MusicAlbum from '../domain/MusicAlbum';

test('Должен создаваться новый альбом', () => {
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    expect(musicAlbum).toBeDefined();
});
