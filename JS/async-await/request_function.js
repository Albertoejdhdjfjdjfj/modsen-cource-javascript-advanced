import { apiToken, host, language } from './config.js';
import fetch from 'node-fetch';

async function getGenres() {
  const res = await fetch('https://if-student-api.onrender.com/api/hotels', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return await res.json();
}

(async function(){
     console.log(await getGenres())
})()
