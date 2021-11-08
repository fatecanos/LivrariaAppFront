describe('Cancelamento de pedido Cliente', ()=> {
    it('Deve renderizar tela de consulta de pedidos', function() {
        cy.visit('http://localhost:4200/clientes/pedidos')
    }),

    it('Deve cancelar um pedido', ()=> {
        cy.contains('CANCELAR PEDIDO').click()
    })
})