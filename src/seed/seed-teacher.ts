export const teachersData = [
    {
      name: "CAÑOTE-FAJARDO-PERCY VICTOR",
      urlLinkedin: "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
    },
    {
      name: "FISFALEN-HUERTA-MARIO HEINRICH",
      urlLinkedin: "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
    },
    {
      name: "CERNA-VALDEZ-YARKO ALVARO",
      urlLinkedin: "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
    },
    {
      name: "SALAS-COZ-ERWIN ERASMO",
      urlLinkedin: "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
    }
  ]

  export function transformGmail(cadena:string) {
    // Cambiar de Ñ a N
    cadena = cadena.replace('Ñ','N')
    // Dividir la cadena en partes utilizando el guión como separador
    const partes = cadena.split('-');
    
    // Obtener la primera letra del nombre y el primer apellido
    const primeraLetraNombre = partes[2].charAt(0).toLowerCase();
    const primerApellido = partes[0].toLowerCase();
    
    // Construir el correo electrónico utilizando plantillas literales
    const correo = `${primeraLetraNombre}${primerApellido}@uni.edu.pe`;
    
    return correo;
  }
  