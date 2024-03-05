export const teachersData = [
  {
    name: "CAMPANA AÑASCO, RILDO",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "AYALA FALCON, ELOY ELADIO",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "SANCHEZ HUARINGA, CARLOS",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "PALACIOS SAMANIEGO, LEONCIO GABRIEL",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "MIRANDA TORRES, CESAR AURELIO",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "MONDRAGÓN HERNÁNDEZ, MARGARITA DELICIA",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "SAN BARTOLOME MONTERO, JAIME",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "PEÑA YALICO, VICENTE",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "ROMERO AQUINO, JUAN CARLOS",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "VALDIVIA MENDOZA, HECTOR GIOVANNY",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "CAÑOTE FAJARDO, PERCY VICTOR",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "MOSQUERA MOLINA, MIGUEL ANGEL",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  {
    name: "SALCEDO TORRES, JOAQUIN MAGNOT",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
  
  {
    name: "NAVARRO NEYRA, MIGUEL ANGEL",
    urlLinkedin:
      "https://www.linkedin.com/in/percy-victor-ca%C3%B1ote-fajardo-945070139/",
  },
];

export function transformGmail(cadena: string) {
  // Cambiar de Ñ a N
  cadena = cadena.replace("Ñ", "N");
  // Dividir la cadena en partes utilizando el guión como separador
  const partes = cadena.split(" ");

  // Obtener la primera letra del nombre y el primer apellido
  const primeraLetraNombre = partes[2].charAt(0).toLowerCase();
  const primerApellido = partes[0].toLowerCase();

  // Construir el correo electrónico utilizando plantillas literales
  const correo = `${primeraLetraNombre}${primerApellido}@uni.edu.pe`;

  return correo;
}
