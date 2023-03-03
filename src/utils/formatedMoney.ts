export function formatMoney(value: string) {
    const valueNumber = parseFloat(value)
    return valueNumber.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }