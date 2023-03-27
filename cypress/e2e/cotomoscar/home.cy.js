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

  it('edit especialidades', () => {
    cy.get('[data-cy="Especialidades"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}ESPECIALIDADES')
    cy.get('[data-cy="Subtítulo"]').type('{selectAll}CONOCE LAS ESPECIALIDADES QUE MOSCAR TIENE PARA TI')
    cy.get('[data-cy="Texto de Botón"]').type('{selectAll}VER TODAS LAS ESPECIALIDADES')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit nosotros', () => {
    cy.get('[data-cy="Nosotros"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}NOSOTROS')
    cy.get('[data-cy="Subtítulo"]').type('{selectAll}CONOCE LAS ESPECIALIDADES QUE MOSCAR TIENE PARA TI')
    cy.get('[data-cy="Título Tab 1"]').type('{selectAll}¿Quienes somos?')
    cy.get('[data-cy="Subtítulo Tab 1"]').type('{selectAll}Somos un centro especializado')
    cy.get('[data-cy="Descripción Tab 1"]').type('{selectAll}Somos un centro especializado2')
    cy.get('[data-cy="Texto Botón Tab 1"]').type('{selectAll}Somos un centro especializado3')
    cy.get('[data-cy="Imagen Tab 1"] input').selectFile('cypress/fixtures/574x300.png', {force: true})
    cy.get('[data-cy="Título Tab 2"]').type('{selectAll}CONTACTO')
    cy.get('[data-cy="Subtítulo Tab 2"]').type('{selectAll}Somos un centro especializado')
    cy.get('[data-cy="Texto Botón Tab 2"]').type('{selectAll}VER MÁS')
    cy.get('[data-cy="Imagen Tab 2"] input').selectFile('cypress/fixtures/574x300.png', {force: true})
    
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit staff', () => {
    cy.get('[data-cy="Staff"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}STAFF')
    cy.get('[data-cy="Texto de Botón"]').type('{selectAll}CONOCE A NUESTRO STAFF')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit blog', () => {
    cy.get('[data-cy="Blog"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}BLOG')
    cy.get('[data-cy="Descripción"]').type('{selectAll}En MOSCAR te invitamos a conocer nuestros ultimos articulos')
    cy.get('[data-cy="Texto de Botón"]').type('{selectAll}IR AL BLOG')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit pacientes', () => {
    cy.get('[data-cy="Pacientes"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}PACIENTES')
    cy.get('[data-cy="Subtítulo"]').type('{selectAll}ARTÍCULOS DE INTERÉS')
    cy.get('[data-cy="Descripción"]').type('{selectAll}Si tienes dudas sobre la atención en MOSCAR Ingresa aqui y resuévelas')
    cy.get('[data-cy="Texto de Botón"]').type('{selectAll}IR AL PACIENTES')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit ortopedia', () => {
    cy.get('[data-cy="Ortopedia"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}ORTOPEDIA')
    cy.get('[data-cy="Subtítulo"]').type('{selectAll}PROTESIS / CORSETS / PROTESIS Y MÁS')
    cy.get('[data-cy="Descripción"]').type('{selectAll}CONOCE LOS DIVERSOS PRODUCTOS QUE ORTOPEDIA<br> HATUN AWQAQ TIENE PARA TI')
    cy.get('[data-cy="Título 1"]').type('{selectAll}PROTESIS DE MIEMBRO SUPERIOR')
    cy.get('[data-cy="Imagen 1"] input').selectFile('cypress/fixtures/430x450.png', {force: true})
    cy.get('[data-cy="Url 1"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Título 2"]').type('{selectAll}PROTESIS DE MIEMBRO SUPERIOR')
    cy.get('[data-cy="Imagen 2"] input').selectFile('cypress/fixtures/430x450.png', {force: true})
    cy.get('[data-cy="Url 2"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Título 3"]').type('{selectAll}PROTESIS DE MIEMBRO SUPERIOR')
    cy.get('[data-cy="Imagen 3"] input').selectFile('cypress/fixtures/430x450.png', {force: true})
    cy.get('[data-cy="Url 3"]').type('{selectAll}https://google.com')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit centro medio', () => {
    cy.get('[data-cy="Centro Médico"]').click()
    cy.get('[data-cy="Logo"] input').selectFile('cypress/fixtures/294X74.png', {force: true})
    cy.get('[data-cy="Título"]').type('{selectAll}CENTRO MÉDICO')
    cy.get('[data-cy="Descripcion"]').type('{selectAll}Centro de Cirtugía Ortopédica y Traumatología Moscar')
    cy.get('[data-cy="Direccion"]').type('{selectAll}Av. Arequipa 3209 - Lince - Lima Consultorios externos - Primer piso Consultorio 107')
    cy.get('[data-cy="Texto botón"]').type('{selectAll}visitar web')
    cy.get('[data-cy="Url botón"]').type('{selectAll}https://google.com')
    cy.get('[data-cy="Imagen"] input').selectFile('cypress/fixtures/588x300.png', {force: true})
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

})