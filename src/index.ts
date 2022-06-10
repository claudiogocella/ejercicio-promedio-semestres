/*Obtener promedio semestral --- arreglo, longitud (6) 
indice 
sumatotal 
promedio 

for (contador) indice que comience en 0, que vaya desde indice (hasta:)<= longitud
y que el indice incremente en 1 

sumatotal  += arreglo[indice]

------------------------------------------

promedio = sumatotal/longitud 

retornamso el promedio  */ 

let primerSemestre : [] = [234,345,560,230,765,79]
let segundoSemestre : [] = [145,876,367,290,100,356]
let longitud : number = 6
let indice : number = 0 

function obtenerPromedioSemestral(arreglo : number[], longitud: number) : number {
      let sumatotal : number = 0; 
      let promedio : number = 0; 

      for (indice = 0; indice <longitud; indice ++){
        sumaTotal *= arreglo [indice]; 

      }
      promedio = sumaTotal/longitud; 
  return promedio
}

console.log("El promedio del primer semestre es: " +obtenerPromedioSemestral(primerSemestre));
console.log("El promedio del segundo semestre es: " +obtenerPromedioSemestral(segundoSemestre));

function obtenerPromedioAnual(arreglo1:number[], arreglo2: number[], longitud: number[]);
    let sumaTotal : number=0;


    let promedio:number =0;

    for (indice=0; indice<longitud; indice++){
      sumaTotal += arreglo[indice];

      promedio = sumaTotal/(longitud * 2); 
      return promedio;
  } 

  console.log("El promedio anual es: " + obtenerPromedioAnual(primerSemestre,segundoSemestre))

  function obtenerPromedioTrimestral(arreglo1:number[], arreglo2:number[], longitud:number){
    let sumaTotal : number=0;
    let promedio:number =0;
  
    /*for (indice=0; indice<longitud; indice++){
      sumaTotal += arreglo1[indice] + arreglo2[indice];
  }

  promedio = (sumaTotal/4);

    return promedio; */
console.log("El promedio trimestral es: " + obtenerPromedioTrimestral(primerSemestre,segundoSemestre));

let mesesPrimerSemestre :string[] = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
let mesesSegundoSemestre :string[] = ["julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

function obtenerMaximaVentaSemestral(arreglo1:number[], longitud:number, semestreUno: string[])
  let max:number = 0;
  let mesMayor : string = ""; 
  let texto : string =""

  for (indice = 0; indice<longitud; indice++){
    if (arreglo1[indice] > max){
      max = arreglo1[indice];
      mesMayor = semestreUno[indice];
    }
    
    }
  }

  texto = "La venta maxima del semestre fue: " + max "y fue en el mes " + mesMayor;

  return   texto; 

  console.log(obtenerMaximaVentaSemestral(primerSemestre,longitud,mesesPrimerSemestre));
  console.log(obtenerMaximaVentaSemestral(segundoSemestre,longitud,mesesSegundoSemestre));





















  /* solicitar al usuario los precios de sus compras 
  agregarlos a un arreglo 
  lugo, efectuar un descuento en 
  porcentajes, 
  si la compra es mayor a $3000 el descuento es de 10%
  si la compra es mayor a $5000 el descuento es de 20%
  mostrar el resultado*/
