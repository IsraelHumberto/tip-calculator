export const moneyMask = (value: string) => {
  if (value.length > 0) {
    value = value.replace(/\D/g, '')

    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('en-US', options).format(
      parseFloat(value) / 100
    )

    return result
  } else {
    return ''
  }
}

