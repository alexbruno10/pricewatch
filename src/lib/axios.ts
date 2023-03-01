import axiox from 'axios'

export const api = axiox.create({
  baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL',
})