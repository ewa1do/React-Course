import { getImagen } from '../../base/11-async-await';

describe('Test on Async-Await and Fetch', () => {
  test('should return an image url', async () => {
    const url = await getImagen();

    console.log(url);

    // expect(url.includes('https://')).toBe(true);
    expect(typeof url).toBe('string');
  });
});
