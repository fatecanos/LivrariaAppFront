describe('FLUXO DE VENDA', ()=> {
    before(()=> {
        cy.visit('http://localhost:4200/livraria/estoque')
    }),

    it('RF0031 - Gerenciar carrinho de compra', ()=> {
        cy.get('.estoque-container-card')
            .last()
            .find('.estoque-container-card-button')
            .click()
        cy.wait(500)
        
        cy.get('.detalhes-produto-display-valor-button')
            .find('button')
            .click()
        cy.wait(500)

        cy.visit('http://localhost:4200/livraria/estoque')
        cy.get('.estoque-container-card')
            .eq(3)
            .find('.estoque-container-card-button')
            .click()
        cy.wait(500)

        cy.get('.detalhes-produto-display-valor-button')
            .find('button')
            .click()
        cy.wait(500)

        cy.visit('http://localhost:4200/livraria/estoque')
        cy.wait(500)

        cy.get('.estoque-container-card')
            .eq(2)
            .find('.estoque-container-card-button')
            .click()
        cy.wait(500)

        cy.get('.detalhes-produto-display-valor-button')
            .find('button')
            .click()

        cy.wait(500)

        cy.get('.carrinho-table-item_line-option').eq(0).find('span').click()

        cy.wait(1500)
    }),
    it('RF0032 - Definir quantidade de itens no carrinho', ()=> {
        cy.get('.mais').eq(0).click();cy.wait(500)
        cy.get('.mais').eq(0).click();cy.wait(500)
        cy.get('.mais').eq(0).click();cy.wait(500)

        cy.get('.menos').eq(0).click();cy.wait(500)
        cy.get('.menos').eq(0).click();cy.wait(500)
        cy.get('.menos').eq(0).click();cy.wait(500)

        cy.get('.mais').eq(0).click();cy.wait(500)
        cy.get('.mais').eq(0).click();cy.wait(500)

        cy.get('.mais').eq(1).click();cy.wait(500)
        cy.get('.mais').eq(1).click();cy.wait(500)
        cy.get('.mais').eq(1).click();cy.wait(500)

        cy.get('.menos').eq(1).click();cy.wait(500)
        cy.get('.menos').eq(1).click();cy.wait(500)
        cy.get('.menos').eq(1).click();cy.wait(500)

        cy.get('.mais').eq(1).click();cy.wait(500)
        cy.get('.mais').eq(1).click();cy.wait(500)
    }),
    it('RF0035 - Selecionar endereço de entrega', ()=> {
        //login gluz@gmail.com abc12345
        if(!sessionStorage.getItem('isLogado')) {
            cy.visit('http://localhost:4200/livraria/login')

            cy.get('.painel_login-container').within(()=> {
                cy.get('#inputEmail')
                    .type('gluz@gmail.com')

                cy.get('#inputSenha')
                    .type('abc12345')
            });cy.wait(500)

            cy.get('.painel_login-container-form > button').click();cy.wait(500)
            cy.get('.liv-header-right_painel-cart').find('mat-icon').click();cy.wait(500)
        } else {
            cy.get('.liv-header-right_painel-cart').find('mat-icon').click();cy.wait(500)
        }

        cy.get('#formFieldMyEndereco').click();cy.wait(500)
        cy.get('mat-option').first().click();cy.wait(500)
    }),
    it('RF0036 - Selecionar forma de pagamento', () => {
        cy.get('#txtValorPago').clear().type(425.00)
        cy.wait(500)

        cy.get('#myCardSelector').first().click();
        cy.wait(500)
        cy.get('.cardOption').last().click();
        cy.wait(500)
    }),
    it.skip('RF0036 - Selecionar cupom de troca e cancelamento', ()=> {
        cy.get('#cupomPromoSelector').click().get('mat-option').eq(0).click()
        cy.wait(500)
        cy.get('#cupomTrocaSelector').click().get('mat-option').eq(0).click()
        cy.wait(500)

        cy.get('#cupomTrocaSelector').click(-20, -20, { force: true });
        cy.wait(500)
    }),
    it('RF0037 - Finalizar compra', () => {
        //cy.get('.carrinho-step_one-options-btn_finaliza').click()

        cy.get('#btnFinalizar').click({ force: true })
        cy.wait(500)
    })
})
