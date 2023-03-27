describe('docente', () => {

  const baseUrl = 'http://127.0.0.1:8000/'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(2000)
  })

  it('add docente', () => {
    cy.visit(`${baseUrl}/docentes`)
    cy.get('[data-cy="Nuevo docente"]').click()

    cy.get('[data-cy=id_image]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })
    cy.get('[data-cy="Nombre"]').type('Carlos Chirito')
    cy.get('[data-cy="Título"]').type('Consulta')
    cy.get('[data-cy="Descripción"]').type('Javascript')

    cy.get('[data-cy="Crear"]').click()
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })
})