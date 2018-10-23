// https://vincent.billey.me/pure-javascript-immutable-array/
export function immutableArrayCopy(arr) {
  return [...arr];
}

export function immutablePop(arr) {
  return arr.slice(0, -1);
}

export function immutableShift(arr) {
  return arr.slice(1);
}

export function immutableUnshift(arr, newEntry) {
  return [newEntry, ...arr];
}

export function immutableSort(arr, compareFunction) {
  return [...arr].sort(compareFunction);
}

export function immutableReverse(arr) {
  return [...arr].reverse();
}

export function immutablePush(arr, newEntry) {
  return [...arr, newEntry];
}

export function immutableSplice(arr, start, deleteCount, ...items) {
  return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
}

export function immutableDelete(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}
