export default {
  getBackground: (avg) => {
    if (avg >=30 ) return "#42f587";
    else if (avg >= 50) return "#a7f542";
    else if (avg >= 100) return "#f5e942";
    else return "#f57b42";
  }
}
