// Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

let meses = [
  "Enero",
  "Ferbero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
document.write("<h1>Meses del año:</h1>");
document.write("<ul>");
for (let i = 0; i < meses.length; i++){
  document.write(`<li>${meses[i]}</li>`);
  document.write("<br>")
}
document.write("</ul>");

