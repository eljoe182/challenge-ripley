function calculateDV(rut) {
  const cuerpo = `${rut}`;
  let suma = 0;
  let multiplo = 2;
  for (let i = 1; i <= cuerpo.length; i++) {
    const index = multiplo * cuerpo.charAt(cuerpo.length - i);
    suma += index;
    if (multiplo < 7) {
      multiplo += 1;
    } else {
      multiplo = 2;
    }
  }

  const dvEsperado = 11 - (suma % 11);
  if (dvEsperado === 10) return "k";
  if (dvEsperado === 11) return "0";
  return `${dvEsperado}`.toUpperCase();
}

export default function rutIsValid(rut) {
  if (!rut || rut.trim().length < 3) return false;

  const rutLimpio = rut.replace(/[^0-9kK-]/g, "").toLowerCase();

  if (rutLimpio.length < 3) return false;

  const split = rutLimpio.split("-");

  if (split.length !== 2) return false;

  const num = parseInt(split[0], 10);
  const dgv = split[1];
  const dvCalc = calculateDV(num);
  
  return dvCalc === dgv;
}