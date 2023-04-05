describe('blog', () => {

  const baseUrl = 'http://127.0.0.1:8000/'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(1000)
  })

  // it('add category', () => {
  //   cy.visit(`${baseUrl}blog/categorias`)
  //   cy.get('[data-cy="Nueva categoría"]').click()
  //   cy.get('[data-cy=Nombre]').type('{selectAll}Categoría de prueba 2')
  //   cy.get('[data-cy=Crear]').click()
  //   cy.get('.swal2-confirm').click()
  // })

  // it('add tag', () => {
  //   cy.visit(`${baseUrl}blog/etiquetas`)
  //   cy.get('[data-cy="Nueva Etiqueta"]').click()
  //   cy.get('[data-cy=Nombre]').type('{selectAll}Etiqueta de prueba')
  //   cy.get('[data-cy=Crear]').click()
  //   cy.get('.swal2-confirm').click()
  // })

})