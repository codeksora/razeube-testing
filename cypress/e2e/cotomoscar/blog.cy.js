describe('blog', () => {

  const baseUrl = 'http://admin.cotmoscar.com'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(1000)

    cy.visit(`${baseUrl}/paginas`)
    cy.get('[data-cy=go-blogs]').click()
  })

  it('edit articulos', () => {
    cy.get('[data-cy="Artículos"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}ARTCULOS')
    cy.get('[data-cy="Descripción"] .ql-editor').type('{selectAll}Lorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. NunLorem ipsum dolor sit amet, consectetur adipiscing elit. Nun')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit publicidad', () => {
    cy.get('[data-cy="Publicidad"]').click()
    cy.get('[data-cy="Imagen 1"] input').selectFile('cypress/fixtures/315X284.png', {force: true})
    cy.get('[data-cy="Imagen 2"] input').selectFile('cypress/fixtures/315X284.png', {force: true})
    cy.get('[data-cy="Imagen 3"] input').selectFile('cypress/fixtures/315X284.png', {force: true})
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

  it('edit video', () => {
    cy.get('[data-cy="Video"]').click()
    cy.get('[data-cy="Título"]').type('{selectAll}VIDEOS')
    cy.get('[data-cy="Url de video"]').type('{selectAll}https://www.youtube.com/watch?v=PlnbTdpYCCU')
    cy.get('[data-cy="Texto de Botón"]').type('{selectAll}VER TODOS LOS VIDEOS')
    cy.get('[data-cy=submit]').click()
    cy.get('.swal2-confirm').click()
  })

})