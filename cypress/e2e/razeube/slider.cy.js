describe('slider', () => {

  const baseUrl = 'http://127.0.0.1:8000/'

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
    cy.get('[data-cy=id_image]').selectFile('cypress/fixtures/1400x400.png', { action: 'drag-drop' })
    cy.get('[data-cy=id_image_responsive]').selectFile('cypress/fixtures/640x577.png', { action: 'drag-drop' })

    cy.get('[data-cy="Título Principal"]').type('Dale a tu familia la seguridad que merece')
    cy.get('[data-cy="Descripción Principal"]').type('-')
    cy.get('[data-cy="Texto botón Principal"]').type('Consulta')
    cy.get('[data-cy="Url botón Principal"]').type('https://google.com')
    cy.get('[data-cy="Válido desde"] input').type('06:15 01-09-2022')
    cy.get('[data-cy="Válido hasta"] input').type('06:15 01-09-2023')

    cy.get('[data-cy="Guardar"]').click()
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })

  it('edit slider', () => {
    cy.visit(`${baseUrl}/slider`)
    cy.visit(`${baseUrl}/slider/editar/1`)
    cy.get('[data-cy=id_image]').selectFile('cypress/fixtures/1400x400.png', { action: 'drag-drop' })
    cy.get('[data-cy=id_image_responsive]').selectFile('cypress/fixtures/640x577.png', { action: 'drag-drop' })

    cy.get('[data-cy="Título Principal"]').clear().type('Dale a tu familia la seguridad que merece')
    cy.get('[data-cy="Descripción Principal"]').clear().type('-')
    cy.get('[data-cy="Texto botón Principal"]').clear().type('Consulta')
    cy.get('[data-cy="Url botón Principal"]').clear().type('https://google.com')
    cy.get('[data-cy="Válido desde"] input').clear().type('06:15 01-09-2022')
    cy.get('[data-cy="Válido hasta"] input').clear().type('06:15 01-09-2023')

    cy.get('[data-cy="Actualizar"]').click()
    cy.wait(2000)
    cy.get('.swal2-confirm').click()
  })
})