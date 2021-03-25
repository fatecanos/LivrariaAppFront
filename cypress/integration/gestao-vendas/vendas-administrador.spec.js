describe('Gestão de vendas do Administrador - Modulo', ()=> {
    it('Deve renderizar tela de consulta de vendas', function() {
        cy.visit('http://localhost:4200/admin/venda')
    })
})