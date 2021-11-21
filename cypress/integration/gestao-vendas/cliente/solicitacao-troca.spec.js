describe("Solicitação troca", function () {

    it('what_it_does', function() {
   
       cy.viewport(1366, 632)
    
       cy.visit('http://localhost:4200/')
    
       cy.get('.mat-toolbar > .liv-header-right_painel > .liv-header-right_painel-account > .liv-header-right_painel-account-account > span').click()
    
       cy.get('.mat-drawer > .mat-drawer-inner-container > .cliente-domain-nav-item_list > li:nth-child(2) > a').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-16').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-15').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-15').select('status')
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-17').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-17').select('EM_PROCESSAMENTO')
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-17').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-17').select('ENTREGUE')
    
       cy.get('.pedidos-cliente > .pedidos-cliente-header > .pedidos-cliente-header-filtro > .mat-focus-indicator > .mat-button-wrapper').click()
    
       cy.get('tbody > .mat-row:nth-child(1) > .mat-cell > .mat-focus-indicator > .mat-button-wrapper').click()
    
       cy.get('#mat-dialog-0 > .ng-star-inserted > .detalhes-pedido > .detalhes-pedido-header > .mat-icon').click()
    
       cy.get('.mat-table > tbody > .mat-row:nth-child(4) > .mat-cell > .mat-focus-indicator').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-18').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-18').type('1')
    
    })
   
})
   
