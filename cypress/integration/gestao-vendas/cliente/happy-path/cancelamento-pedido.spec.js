import { DURACAO, usuarioDump } from "../../../../support/enviroments"

describe('Cancelamento de Pedido', function() {
    const TEMPO = DURACAO;
    const USER = usuarioDump;

    it('deve renderizar pagina de login', ()=> {
        cy.visit('http://localhost:4200/livraria/login')
        cy.wait(TEMPO)
    }),

    it('deve executar login de usuario', ()=> {
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type(USER.email)

            cy.get('#inputSenha')
                .type(USER.senha)
        });
        cy.wait(TEMPO)
        cy.get('.painel_login-container-form > button').click();
    }),

    it('deve executar cancelamento', function() {
       cy.visit('http://localhost:4200/clientes/pedidos')
       cy.wait(TEMPO)

       cy.get('#btnCancelarPedido')
        .click()
       cy.wait(TEMPO)
    })
})