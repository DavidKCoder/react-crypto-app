import {cryptoAssets} from './data'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'lYaLkM6itDo96suFbXTw6COBYC3eox4pW0V/dE1/e28='
  }
};

export function fakeFetchCrypto() {
  return fetch('https://openapiv1.coinstats.app/coins', options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 1)
  })
}