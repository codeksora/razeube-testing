describe('curso', () => {

  const baseUrl = 'http://127.0.0.1:8000/'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[id=email]').type('carlos@admin.pe');
    cy.get('[id=password]').type('12345678')

    cy.get('[data-cy=submit]').click()
    cy.wait(2000)
  })

  it('add curso', () => {
    cy.visit(`${baseUrl}/cursos/nuevo`)
    // cy.get('[data-cy="Nuevo docente"]').click()

    cy.get('[data-cy=id_image]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })
    // cy.get('[data-cy="Nombre del curso"]').type('Carlos Chirito')
    cy.get('[data-cy="Precio"]').type('19.56')
    cy.get('[data-cy="Link video 1"]').type('https://google.com')
    cy.get('[data-cy="Descripción 1"]').type('lorem asd sdsdsd ')
    //id_teacher_id
    // cy.get('[id="id_teacher_id"]').type('1')
    cy.get('[data-cy="Descripción de temario"]').type('lorem asd sdsdsd ')
    cy.get('[data-cy="id_image_temario"]').selectFile('cypress/fixtures/order.pdf', { action: 'drag-drop' })

    cy.get('[data-cy="Link de video 2"]').type('https://google.com')
    cy.get('[data-cy="Descripción 2"]').type('lorem asd sdsdsd ')

    cy.get('[data-cy="modulos"] [data-cy="Agregar"]').click()
    cy.get('[data-cy="modulos"] [data-cy="Título 1"]').type('lorem asd sdsdsd')
    cy.get('[data-cy="modulos"] [data-cy="Valor 1"]').type('lorem asd sdsdsd')
    cy.wait(2000)
    cy.get('[data-cy="modulos"] [data-cy="Agregar"]').click()
    cy.get('[data-cy="modulos"] [data-cy="Título 2"]').type('lorem asd Valor 2')
    cy.get('[data-cy="modulos"] [data-cy="Valor 2"]').type('lorem asd sdsdsd del 2')

    cy.get('[data-cy="proyectos"] [data-cy="btn_agregar"]').click()
    cy.get('[data-cy="proyectos"] [data-cy=galeriesimages0]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })
    cy.wait(2000)
    cy.get('[data-cy="proyectos"] [data-cy="btn_agregar"]').click()
    cy.get('[data-cy="proyectos"] [data-cy=galeriesimages1]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })
    cy.wait(2000)
    cy.get('[data-cy="proyectos"] [data-cy="btn_agregar"]').click()
    cy.get('[data-cy="proyectos"] [data-cy=galeriesimages2]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })


    cy.get('[data-cy="certificaciones"] [data-cy="btn_agregar"]').click()
    cy.get('[data-cy="certificaciones"] [data-cy=galeriesimages0]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })
    cy.wait(2000)
    cy.get('[data-cy="certificaciones"] [data-cy="btn_agregar"]').click()
    cy.get('[data-cy="certificaciones"] [data-cy=galeriesimages1]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })
    cy.wait(2000)
    cy.get('[data-cy="certificaciones"] [data-cy="btn_agregar"]').click()
    cy.get('[data-cy="certificaciones"] [data-cy=galeriesimages2]').selectFile('cypress/fixtures/600x600.png', { action: 'drag-drop' })

    // cy.get('[data-cy="Guardar"]').click()
    // cy.wait(2000)
    // cy.get('.swal2-confirm').click()
  })
})