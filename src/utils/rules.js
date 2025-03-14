export default {
  isRequired: value => !!value || '❌ Campo obrigatório',
  isCEP: value => /^[0-9]{5}-[0-9]{3}$/.test(value) || '❌ CEP inválido',
  isBetweenValues: (value, min, max) => {
    const number = parseInt(value)
    return number > min && number < max || `❌ Valor deve ser entre ${min} e ${max}`
  },
  isBetweenFloatValues: (value, min, max) => {
    const number = parseFloat(value)
    return number > min && number < max || `❌ Valor deve ser entre ${min} e ${max}`
  },
  isPositiveCurrency: (value) => {
    const cleanValueWithDecimals = parseFloat(value.replace(/[^0-9,]/g, '').replace(',', '.') || 0)
    return cleanValueWithDecimals > 0 || '❌ Valor inválido'
  },
}