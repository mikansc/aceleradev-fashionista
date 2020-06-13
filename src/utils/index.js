export function createSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáäâãèéëêìíïîòóöôõùúüûñç·/_,:;';
  var to = 'aaaaaeeeeiiiiooooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

export function parseCurrency(value) {
  return parseFloat(value.replace('R$ ', '').replace(',', '.'));
}

export function bagItemsTotalizer(bag) {
  return bag.reduce((acc, item) => acc + Number(item.quantity), 0);
}

export function bagValueTotalizer(bag) {
  const total = bag.reduce(
    (acc, item) => acc + item.quantity * parseCurrency(item.actual_price),
    0
  );

  return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export function bagQuantityUpdate(quantity, operation) {
  let newQty = quantity;
  if (operation === 'add') {
    return newQty + 1;
  }
  if (operation === 'sub') {
    if (quantity === 1) return newQty;
    return newQty - 1;
  }
  return newQty;
}
