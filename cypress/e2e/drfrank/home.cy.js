describe('home', () => {

  const baseUrl = 'http://127.0.0.1:8000'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(1000)

    cy.visit(`${baseUrl}/paginas`)
    cy.get('[data-cy=go]').click()
  })

  it('edit noticias', () => {
    cy.get('[data-cy="Noticias"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}UN PROFESIONAL A TU SERVICIO Y DISPOSICIÓN')
    cy.get('[data-cy="Texto Botón"]').type('{selectAll}VER NOTICIAS')
    cy.get('[data-cy="Url Botón"]').type('{selectAll}https://google.com')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit banner', () => {
    cy.get('[data-cy="Banner"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}¡MI OBJETIVO ES HACER QUE EL CAMPO DE LA ORTOPEDIA Y TRUMATOLOGÍA SEA MÁS COMPRENSIBLE Y CONFIABLE')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit Perfil profesional', () => {
    cy.get('[data-cy="Perfíl Profesional"]').click()
    cy.get('[data-cy="Imagen"] input').selectFile('cypress/fixtures/300x300.png', {force: true})
    cy.get('[data-cy="Título"]').type('{selectAll}PERFIL PROFESIONAL')
    cy.get('[data-cy="Descripción 1"]').type('{selectAll}Más de 10 años de Experiencia')
    cy.get('[data-cy="Descripción 2"]').type('{selectAll}Especialidad de Cirtugía Manos')
    cy.get('[data-cy="Descripción 3"]').type('{selectAll}+ de 100 Operaciones Exitosas')
    cy.get('[data-cy="Descripción 4"]').type('{selectAll}Resultados altamente efectivos')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit Perfíl', () => {
    cy.get('[data-cy="Perfíl"]').click()
    cy.get('[data-cy="Título 1"]').type('{selectAll}MÉDICO CIRUJANO')
    cy.get('[data-cy="Descripción 1"]').type('{selectAll}Egresado de la Universidad<br> Privada Antenor Orrego<br> Trujillo - Perú')
    cy.get('[data-cy="Título 2"]').type('{selectAll}CIRUGÍA OTROPÉDICA Y TRAUMATOLOGÍA')
    cy.get('[data-cy="Descripción 2"]').type('{selectAll}Egresado de la Universidad<br> Privada Antenor Orrego<br> Trujillo - Perú')
    cy.get('[data-cy="Título 3"]').type('{selectAll}CIRUGÍA DE MANO')
    cy.get('[data-cy="Descripción 3"]').type('{selectAll}Master Fellowship en la<br> Universidad de Barcelona<br> Barcelona - España')
    cy.get('[data-cy="Texto Botón"]').type('{selectAll}VER PERFIL')
    cy.get('[data-cy="Url Botón"]').type('{selectAll}https://google.com')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })
  
  it('edit blog', () => {
    cy.get('[data-cy="Blog"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}BLOG')
    cy.get('[data-cy="Texto Botón"]').type('{selectAll}IR AL BLOG')
    cy.get('[data-cy="Url Botón"]').type('{selectAll}https://google.com')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit redes sociales', () => {
    cy.get('[data-cy="Redes sociales"]').click()
    cy.get('[data-cy="Título Principal"]').type('{selectAll}REDES SOCIALES')
    cy.get('[data-cy="Título Secundario"]').type('{selectAll}Dr. Frank A. Hernández')
    cy.get('[data-cy="Descripcion"]').type('{selectAll}El Dr. Frank es un experto cirujano de mano con más de 7 años de experiencia')
    cy.get('[data-cy="Texto botón"]').type('{selectAll}VER VIDEOS')
    cy.get('[data-cy="Url botón"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Instagram"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Facebook"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Twitter"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Linkedin"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Imagen"] input').selectFile('cypress/fixtures/600x400.png', {force: true})
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit contacto', () => {
    cy.get('[data-cy="Contacto"]').click()
    // cy.get('[data-cy="Título"]').type('{selectAll}CONTACTO')
    cy.get('[data-cy="Imagen 1"] input').selectFile('cypress/fixtures/600x400.png', {force: true})
    cy.get('[data-cy="Logo 1"] input').selectFile('cypress/fixtures/logo-haq.png', {force: true})
    cy.get('[data-cy="Título 1"]').type('{selectAll}CENTRO MÉDICO HATUN AWQAQ')
    cy.get('[data-cy="Dirección 1"]').type('{selectAll}Av. Arequipa 3209 - Lince - Lima Consultorios externos - Primeri piso Consultorio 107')
    cy.get('[data-cy="Teléfono 1"]').type('{selectAll}01 245 7032')
    cy.get('[data-cy="Correo 1"]').type('{selectAll}citas@hatunawqaq.com')

    cy.get('[data-cy="Imagen 2"] input').selectFile('cypress/fixtures/600x400.png', {force: true})
    cy.get('[data-cy="Logo 2"] input').selectFile('cypress/fixtures/logo-cot.png', {force: true})
    cy.get('[data-cy="Título 2"]').type('{selectAll}CENTRO DE CIRUGÍA ORTOPÉDICA Y TRAUMATOLOGÍA MOSCAR')
    cy.get('[data-cy="Dirección 2"]').type('{selectAll}Av. Arequipa 3209 - Lince - Lima Consultorios externos - Primeri piso Consultorio 107')
    cy.get('[data-cy="Teléfono 2"]').type('{selectAll}01 245 7032')
    cy.get('[data-cy="Correo 2"]').type('{selectAll}citas@hatunawqaq.com')

    cy.get('[data-cy="Texto del botón"]').type('{selectAll}CONTACTAR AL DR. FRANK HERNANDEZ')
    cy.get('[data-cy="Url del botón"]').type('{selectAll}https://google.com')
    
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit patreon', () => {
    cy.get('[data-cy="Patreon"]').click()
    cy.get('[data-cy="Imagen"] input').selectFile('cypress/fixtures/1300x500.png', {force: true})

    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit ecommerce', () => {
    cy.get('[data-cy="Ecommerce"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}E-COMMERCE')
    cy.get('[data-cy="Subtítulo"]').type('{selectAll}E-COMMERCE: POLERAS / CASACAS')
    cy.get('[data-cy="Descripción"]').type('{selectAll}CONOCE LOS DIVERSOS PRODUCTOS QUE SE CREARON PENSANDO EN EL AMOR POR LA ORTOPEDIA')
    cy.get('[data-cy="Título producto 1"]').type('{selectAll}CAMISETAS I LOVE C.O.T.')
    cy.get('[data-cy="Imagen producto 1"] input').selectFile('cypress/fixtures/300x300.png', {force: true})
    cy.get('[data-cy="Título producto 2"]').type('{selectAll}ORTÉSICOS MOSCAT')
    cy.get('[data-cy="Imagen producto 2"] input').selectFile('cypress/fixtures/300x300.png', {force: true})

    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })
  
  
})