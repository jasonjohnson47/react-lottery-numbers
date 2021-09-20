function getSelectMax(n: number) {
  if (n <= 2) {
    return 1;
  }
  if (n >= 3 && n < 7) {
    return 2;
  }
  if (n >= 7 && n < 11) {
    return 3;
  }
  if (n >= 11 && n < 17) {
    return 4;
  }
  if (n >= 17 && n < 23) {
    return 5;
  }
  if (n >= 23 && n < 31) {
    return 6;
  }
  if (n >= 31 && n < 39) {
    return 7;
  }
  if (n >= 39 && n < 49) {
    return 8;
  }
  if (n >= 49 && n < 59) {
    return 9;
  }
  if (n >= 59 && n < 71) {
    return 10;
  }
  if (n >= 71 && n < 83) {
    return 11;
  }
  if (n >= 83 && n < 97) {
    return 12;
  }
  if (n >= 97) {
    return 13;
  }
  return 13;
}

export default getSelectMax;
