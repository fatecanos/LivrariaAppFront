import { DURACAO, usuarioDump } from "../../../../support/enviroments";

describe('Casos de erro - Carrinho', function () {
    const TEMPO = DURACAO;
    const USER = usuarioDump

    it('deve adicionar quantidade', ()=> {

        cy.visit('http://localhost:4200/carrinho')
        cy.wait(TEMPO)
        cy.get('#btnConsultarEstoque').click()
        cy.wait(TEMPO)
        cy.get('.mat-button-wrapper').eq(0).click()
        cy.wait(TEMPO)
        cy.get('#livroCard').eq(0).click()
        cy.wait(TEMPO)
        cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').click()
        cy.wait(TEMPO)
        
        for(let i = 0; i < 4; i++) {
            cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
        }
    }),

    it('adicionar endereco anexado ao perfil', ()=> {
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

        cy.get('.comboEnderecoPerfil').eq(0).click()
        cy.wait(TEMPO)
        cy.get('#slcEnderecoPerfil').click()
        cy.wait(TEMPO)
        cy.get('.enderecoPerfilOption').eq(0).click()
        cy.wait(TEMPO)
     }),

     it('finalizar pedido', ()=> {
        cy.wait(TEMPO)
        cy.get('#btnFinalizar').click()
        cy.wait(TEMPO)
     })
})
