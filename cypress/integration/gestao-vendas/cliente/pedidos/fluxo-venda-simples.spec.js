describe('Fluxo de venda - ()', function() {

    it('deve executar login', ()=> {
     
        cy.viewport(1366, 632)

        cy.visit('http://localhost:4200/')
        
        cy.visit('http://localhost:4200/')
        
        cy.get('liv-header > .mat-toolbar > .liv-header-right_painel > #btnPainel > .liv-header-right_painel-account-login').click()
        
        cy.get('liv-header > .dialog-absolute > .dialog-absolute-item > .mat-focus-indicator > .mat-button-wrapper').click()
        
        cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #inputEmail').type('lucasman@gmail.com')
        
        cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #inputSenha').type('lucas')
        
        cy.get('.app-root > .ng-star-inserted > .ng-star-inserted > .painel_login > .painel_login-container').click()
    
        cy.wait(3000)
        
    }),

    it('deve executar venda - happy path :3 ', function() {
    
       cy.get('.ng-star-inserted > .painel_login > .painel_login-container > .painel_login-container-form > .mat-focus-indicator').click()
    
       cy.get('liv-header > .mat-toolbar > .liv-header-right_painel > .liv-header-right_painel-cart > .mat-icon:nth-child(1)').click()
    
       cy.get('.ng-star-inserted > .carrinho > .carrinho-content > .mat-focus-indicator > .mat-button-wrapper').click()
    
       cy.get('.estoque-container > .mat-card:nth-child(2) > .estoque-container-card-button > #livroCard > .mat-button-wrapper').click()
    
       cy.get('.detalhes-produto > .detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho').click()
    
       cy.get('.carrinho > .carrinho-table > .carrinho-step_one-options > #btnContinuaCompra > .mat-button-wrapper').click()
    
       cy.get('.estoque > .estoque-container > .mat-card:nth-child(5) > .estoque-container-card-button > #livroCard').click()
    
       cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(3) > td > .mais').click()
    
       cy.get('.mat-form-field-infix > #matSelectEndereco > .mat-select-trigger > #mat-select-value-9 > .mat-select-placeholder').click()
    
       cy.get('#cdk-overlay-0 > .mat-select-panel-wrap > #matSelectEndereco-panel > #mat-option-5 > .mat-option-text').eq(0).click()
    
       cy.get('.mat-form-field-infix > #myCardSelector > .mat-select-trigger > #mat-select-value-11 > .mat-select-placeholder').click()
    
       cy.get('#cdk-overlay-1 > .mat-select-panel-wrap > #myCardSelector-panel > #mat-option-8 > .mat-option-text').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #txtValorPago').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #txtValorPago').clear().type('1890')
    
       cy.get('.carrinho > .carrinho-table > .carrinho-step_one-options > #btnFinalizar > .mat-button-wrapper').click()
    
       cy.get('.ng-tns-c111-18 > .mat-simple-snackbar > .mat-simple-snackbar-action > .mat-focus-indicator > .mat-button-wrapper').click()
    
    })
   
   })
   