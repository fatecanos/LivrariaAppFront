describe('Gestão de pedido - gravar pedido', function() {

    it('deve gravar pedido anexando novo endereço', function() {
   
       cy.viewport(1366, 632)
    
       cy.visit('http://localhost:4200/livraria/carrinho')
    
       cy.get('.ng-star-inserted > .carrinho > .carrinho-content > .mat-focus-indicator > .mat-button-wrapper').click()
    
       cy.get('.estoque-container > .mat-card:nth-child(1) > .estoque-container-card-button > #livroCard > .mat-button-wrapper').click()
    
       cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line > td > .mais').click()
    
       cy.get('.carrinho > .carrinho-table > .carrinho-step_one-options > #btnContinuaCompra > .mat-button-wrapper').click()
    
       cy.get('.estoque-container > .mat-card:nth-child(2) > .estoque-container-card-button > #livroCard > .mat-button-wrapper').click()
    
       cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.ng-star-inserted > .carrinho > .carrinho-table > .carrinho-step_one-options > #btnContinuaCompra').click()
    
       cy.get('.estoque > .estoque-container > .mat-card:nth-child(3) > .estoque-container-card-button > #livroCard').click()
    
       cy.get('.detalhes-produto-display > .detalhes-produto-display-valor > .detalhes-produto-display-valor-button > #addCarrinho > .mat-button-wrapper').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-table > table > .carrinho-table-item_line:nth-child(2) > td > .mais').click()
    
       cy.get('.carrinho-content-adress_selector > #formFieldMyEndereco > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
    
       cy.get('#cdk-overlay-0 > .mat-select-panel-wrap > #matSelectEndereco-panel > #mat-option-26 > .mat-option-text').click()
    
       cy.get('.mat-radio-group > #mat-radio-21 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
    
       cy.get('.mat-radio-group > #mat-radio-21 > .mat-radio-label > .mat-radio-container > #mat-radio-21-input').type('false')
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #txtCep').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #txtCep').type('08744103')
    
       cy.get('.carrinho-content > .carrinho-content-adress_selector > .carrinho-content-adress_selector-form > .mat-focus-indicator > .mat-button-wrapper').click()
    
       cy.get('.mat-form-field-infix > #myCardSelector > .mat-select-trigger > #mat-select-value-17 > .mat-select-placeholder').click()
    
       cy.get('#cdk-overlay-1 > .mat-select-panel-wrap > #myCardSelector-panel > #mat-option-37 > .mat-option-text').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #txtValorPago').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #txtValorPago').type('1880')
    
       cy.get('.carrinho > .carrinho-table > .carrinho-step_one-options > #btnFinalizar > .mat-button-wrapper').click()
    
    })
   
   })
   