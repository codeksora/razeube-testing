describe('home', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=username]').type('cchirito');
    cy.get('[data-cy=password]').type('chirito')

    cy.contains('Ingresar').click()
    cy.wait(1000)
  })

  it('create quotation', () => {
    cy.visit('http://localhost:3000/admin/#!/quotations/add/')
    cy.wait(3000)
    cy.get('[data-cy=currency_type]').click()
    // cy.get('[data-cy=currency_type]').type('Soles')
    cy.get('[data-cy=currency_type] .select-dropdown-optgroup-option').eq(0).click()//.type('Soles{enter}')
    
    // cy.get('[data-cy=credit_time]').click()
    // cy.get('[data-cy=currency_type] li').eq(1).click()
    // cy.get('[data-cy=add_product]').click()
  //   cy.visit('https://admin.cotmoscar.com/slider/nuevo')
  //   cy.get('[id="id_image"]').selectFile('cypress/fixtures/1400x400.png', { action: 'drag-drop' })
  //   cy.get('[id="id_image_responsive"]').selectFile('cypress/fixtures/640x577.png', { action: 'drag-drop' })

  //   cy.get('input').eq(1).type('Dale a tu familia la seguridad que merece')
  //   cy.get('input').eq(2).type('-')
  //   cy.get('input').eq(3).type('Leer más')
  //   cy.get('input').eq(4).type('https://google.com')
  //   cy.get('input').eq(5).type('Consultas')
  //   cy.get('input').eq(6).type('Tus consultas con los mejores')
  //   cy.get('input').eq(7).type('https://google.com')
  //   cy.get('input').eq(8).type('06:15 01-09-2022')
  //   cy.get('input').eq(9).type('06:15 01-09-2023')

  //   cy.get('button[data-v-7a0ec1bd]').click()
  })
})