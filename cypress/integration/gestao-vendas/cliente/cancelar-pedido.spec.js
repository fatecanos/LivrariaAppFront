describe('Cancelar Pedido', function() {

  it('Cancelar pedido lado cliente', function() {

     cy.viewport(1366, 653)

     cy.visit('http://localhost:4200/livraria/login')

     cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #inputEmail').click()

     cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #inputEmail').type('gluz@gmail.com')

     cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #inputSenha').type('abc12345')

     cy.get('.ng-star-inserted > .painel_login > .painel_login-container > .painel_login-container-form > .mat-focus-indicator').click()

     cy.get('.mat-toolbar > .liv-header-right_painel > .liv-header-right_painel-account > .liv-header-right_painel-account-account > span').click()

     cy.get('.mat-drawer > .mat-drawer-inner-container > .cliente-domain-nav-item_list > li:nth-child(2) > a').click()

     cy.get('.mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon').click()

     cy.get('.mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon').click()

     cy.get('tbody > .mat-row:nth-child(1) > .mat-cell > .mat-focus-indicator:nth-child(1) > .mat-button-wrapper').click()

     cy.visit('http://localhost:4200/clientes/pedidos')

  })

 })
