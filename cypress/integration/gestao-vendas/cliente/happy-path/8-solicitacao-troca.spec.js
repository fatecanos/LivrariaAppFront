import { DURACAO, usuarioDump } from "../../../../support/enviroments"

describe('Solicitaçao de troca', function() {
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

    it('troca simples', function() {
       cy.visit('http://localhost:4200/clientes/pedidos')
       cy.wait(TEMPO)
    
       cy.get('#btnDetalhes').click()
       cy.wait(TEMPO)
    
       cy.wait(3000)
       cy.get('#txtQtdeTroca')
            .clear()
            .type('2')
       cy.wait(TEMPO)

       cy.get('#btnSolicitarTroca')
        .click()
       cy.wait(TEMPO)
    })
})