import apiClient from './apiClient';

test('apiClient is configured to point to api', () => {
  expect(apiClient.defaults.baseURL).toBe('http://localhost:5000/api');
});

test('api/captains endpoint works', () => {
  const getPromise = apiClient.get('/captains');
  return getPromise
    .then(response => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveLength(4);
    })
    .catch(() => {
      console.log('Be sure you have started the mock api: npm run api');
      expect(true).toBe(false);
    });
});

test('api/ships endpoint works', async () => {
  const getPromise = apiClient.get('/ships');
  return getPromise
    .then(response => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveLength(4);
    })
    .catch(() => {
      console.log('Be sure you have started the mock api: npm run api');
      expect(true).toBe(false);
    });
});
