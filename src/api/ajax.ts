export const ajax = (url: string): Promise<any> => fetch(url, {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'd526b701b2msh132c098786d6e2cp19e6cbjsn179a56f18800',
  }
});
