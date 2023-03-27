describe('informacion general', () => {

  const baseUrl = 'http://127.0.0.1:8000/'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(2000)
  })

  it('edit information', () => {
    cy.visit(`${baseUrl}/contenido/informacion-general`)
    cy.get('[data-cy="Editar Información"]').click()
    cy.get('[data-cy="Ubicación"]').clear().type('Jr 28 de julio')
    cy.get('[data-cy="Teléfono"]').clear().type('989899898')
    cy.get('[data-cy="Email"]').clear().type('casrl@gmail.com')
    cy.get('[data-cy="Teléfono Whatsapp"]').clear().type('98765432')

    cy.get('[data-cy="Actualizar"]').click()
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })
})