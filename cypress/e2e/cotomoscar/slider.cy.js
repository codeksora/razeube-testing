describe('slider', () => {

  const baseUrl = 'http://admin.cotmoscar.com'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(2000)
  })

  it('add slider', () => {
    cy.visit(`${baseUrl}/slider`)
    cy.visit(`${baseUrl}/slider/nuevo`)
    cy.get('[id="id_image"]').selectFile('cypress/fixtures/1400x400.png', { action: 'drag-drop' })
    cy.get('[id="id_image_responsive"]').selectFile('cypress/fixtures/640x577.png', { action: 'drag-drop' })

    cy.get('input').eq(1).type('Dale a tu familia la seguridad que merece')
    cy.get('input').eq(2).type('-')
    cy.get('input').eq(3).type('Leer más')
    cy.get('input').eq(4).type('https://google.com')
    cy.get('input').eq(5).type('Consultas')
    cy.get('input').eq(6).type('Tus consultas con los mejores')
    cy.get('input').eq(7).type('https://google.com')
    cy.get('input').eq(8).type('06:15 01-09-2022')
    cy.get('input').eq(9).type('06:15 01-09-2023')

    cy.get('[data-cy=submit]').click()
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })
})