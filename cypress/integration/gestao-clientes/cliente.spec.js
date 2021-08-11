describe('Gestão de Clientes - Modulo', function() {
    it('Deve renderizar tela de cadastro', function() {
        cy.visit('http://localhost:4200/livraria/novo-cliente'); 
    }),
    it('Deve renderizar tela de atualização de dados cliente', function() {
        cy.visit('http://localhost:4200/clientes');
    }),
    it('Deve renderizar tela de consulta de pedidos', function() {
        cy.visit('http://localhost:4200/clientes/pedidos')
    }),
    it('Deve renderizar tela de consulta de cupons', function() {
        cy.visit('http://localhost:4200/clientes/cupons')
    })
})