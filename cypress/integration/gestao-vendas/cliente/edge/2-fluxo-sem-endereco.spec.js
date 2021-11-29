import { DURACAO, usuarioDump } from "../../../../support/enviroments";

describe('Casos de erro - Carrinho', function () {
    const TEMPO = DURACAO;
    const USER = usuarioDump;

    it('deve fazer login', () => {
        cy.visit('http://localhost:4200/')
        if (!sessionStorage.getItem("isLogado")) {
            cy.visit("http://localhost:4200/livraria/login");
            cy.wait(TEMPO)
  
            cy.get(".painel_login-container").within(() => {
              cy.get("#inputEmail").type(USER.email);
              cy.wait(TEMPO)
  
              cy.get("#inputSenha").type(USER.senha);
              cy.wait(TEMPO)

              cy.get('.painel_login-container-form > button').click();
              cy.wait(TEMPO)
            });
        }
    })

    it('deve adicionar quantidade', function () {
        cy.visit('http://localhost:4200/')
        cy.wait(TEMPO)
        cy.get('liv-header > .mat-toolbar > .liv-header-right_painel > .liv-header-right_painel-cart > .mat-icon').click()
        cy.wait(TEMPO)
        cy.get('ng-component > .carrinho > .carrinho-content > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(TEMPO)
        cy.get('.estoque > .estoque-container > .mat-card:nth-child(2) > .estoque-container-card-button > #livroCard').click()
        cy.wait(TEMPO)
        cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').click()
        cy.wait(TEMPO)
        
        for(let i = 0; i < 4; i++) {
            cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
        }
    }),

    it('adicionar cartao do perfil', ()=> {
        cy.get('.seletorBandeira').eq(1).click()
        cy.wait(TEMPO)
        cy.get('.cardOption').eq(0).click()
        cy.wait(TEMPO)
        cy.get('#idValorCartao').clear().type(1200)
        cy.wait(TEMPO)
    })
})
