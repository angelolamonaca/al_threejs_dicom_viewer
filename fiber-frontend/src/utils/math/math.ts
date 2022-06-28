const zeroPad = (num: number, places: number): string =>
  String(num)
    .padStart(places, '0');

export default zeroPad;
