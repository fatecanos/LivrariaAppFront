describe("Despachar pedido", function () {
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
});
