describe('Agregar Producto', () => {
  it('debe crear un producto', () => {
    cy.visit('/products/new')
    cy.get('[data-testid="product-name"]').type('Teclado Mecánico')
    cy.get('[data-testid="save-product"]').click()
    cy.contains('Producto agregado exitosamente')
  })
})

