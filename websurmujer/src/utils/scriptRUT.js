export default {
  format(rut) {
    let actual = rut.toString().replace(/^0+/, "");

    if (actual != "" && actual.length > 1) {
      var sinPuntos = actual.replace(/\./g, "");
      var actualLimpio = sinPuntos.replace(/-/g, "");
      var dv = actualLimpio.substring(actualLimpio.length - 1);
      let resultTemp = actualLimpio.slice(0, actualLimpio.length - 1);
      let resultante = resultTemp + "-" + dv;

      return resultante;
    }
  },
  validaRut: function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐", "-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
    var tmp = rutCompleto.split("-");
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == "K") digv = "k";

    return this.dv(rut) == digv;
  },
  dv: function (T) {
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  },

};
