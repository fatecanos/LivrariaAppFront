describe("Solicitação troca", function () {
  it("Despachar pedidos", function () {
    cy.viewport(1366, 653);

    cy.visit("http://localhost:4200/admin/venda");

    cy.get(
      ".mat-drawer-container > .mat-drawer-content > .ng-star-inserted > .consulta_vendas > .consulta_vendas-header-filtro"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      "#tabelaVendasAdmin > tbody > .mat-row:nth-child(4) > .mat-cell > .mat-focus-indicator:nth-child(1)"
    ).click();

    cy.visit("http://localhost:4200/admin/venda");
  });

  it("Confirmar entrega pedido", function () {
    cy.viewport(1366, 653);

    cy.visit("http://localhost:4200/admin/venda");

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      ".mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon"
    ).click();

    cy.get(
      "tbody > .mat-row:nth-child(5) > .mat-cell > .mat-focus-indicator:nth-child(1) > .mat-button-wrapper"
    ).click();

    cy.visit("http://localhost:4200/admin/venda");
  });

  it('Solicitar troca itens pedido', function() {

    cy.viewport(1366, 653)

    cy.visit('http://localhost:4200/livraria/login')

    cy.get('.painel_login-container > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()

    cy.get('.painel_login-container > .mat-form-field:nth-child(2) > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()

    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #inputEmail').type('gluz@gmail.com')

    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #inputSenha').type('abc12345')

    cy.get('.painel_login > .painel_login-container > .painel_login-container-form > .mat-focus-indicator > .mat-button-wrapper').click()

    cy.get('.mat-toolbar > .liv-header-right_painel > .liv-header-right_painel-account > .liv-header-right_painel-account-account > span').click()

    cy.get('.mat-drawer > .mat-drawer-inner-container > .cliente-domain-nav-item_list > li:nth-child(2) > a').click()

    cy.get('tbody > .mat-row:nth-child(4) > .mat-cell > .mat-focus-indicator > .mat-button-wrapper').click()

    cy.get('.detalhes-pedido > .detalhes-pedido-content > .detalhes-pedido-content-item > .detalhes-pedido-content-opcoes > .cdk-focused').click()

 })
});
