describe('Despacho de vendas do Administrador', ()=> {
    it('Deve renderizar tela de consulta de vendas', function() {
        cy.visit('http://localhost:4200/admin/venda')
    }),

    it('Deve despachar pedido', ()=> {
        cy.contains('Despachar Pedido').click()
    })
})