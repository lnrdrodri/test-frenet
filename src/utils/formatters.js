export default {
  currencyInReal: value => {
    const currency = parseFloat(value)
    return currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
}