describe('nosotros', () => {

  const baseUrl = 'http://admin.cotmoscar.com'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(1000)

    cy.visit(`${baseUrl}/paginas`)
    cy.get('[data-cy=go-nosotros]').click()
  })

  it('edit nosotros', () => {
    cy.get('[data-cy="Nosotros"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}NOSOTROS')
    cy.get('[data-cy="Subtítulo"]').type('{selectAll}¿QUIENES SOMOS')
    cy.get('[data-cy="Descripción"] .ql-editor').type('{selectAll}Lorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. Nun')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit mision', () => {
    cy.get('[data-cy="Misión"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}MISIÓN')
    cy.get('[data-cy="Descripción"] .ql-editor').type('{selectAll}-Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n -NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. Nun')
    cy.get('[data-cy="Imagen"] input').selectFile('cypress/fixtures/340x160.png', {force: true})
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit vision', () => {
    cy.get('[data-cy="Misión"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}VISIÓN')
    cy.get('[data-cy="Descripción"] .ql-editor').type('{selectAll}-Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n -NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. Nun')
    cy.get('[data-cy="Imagen"] input').selectFile('cypress/fixtures/340x160.png', {force: true})
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit parrafo', () => {
    cy.get('[data-cy="¿Cuáles son nuestras mejores cualidades?"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}¿Cuáles son nuestras mejores cualidades?')
    cy.get('[data-cy="Descripción"] .ql-editor').type('{selectAll}-Lorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. Nun')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit galeria', () => {
    cy.get('[data-cy="Galería"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}Galería')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit nuestros valores', () => {
    cy.get('[data-cy="Nuestros Valores"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}Nuestros Valores')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

})