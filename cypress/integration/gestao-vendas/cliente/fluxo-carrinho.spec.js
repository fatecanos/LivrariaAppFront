describe("FLUXO CARRINHO", () => {
  it("RF0031 - Gerenciar carrinho de compra deslogado", () => {
    cy.visit("http://localhost:4200/livraria/estoque");
    cy.get(".estoque-container-card")
      .last()
      .find(".estoque-container-card-button")
      .click();

    cy.get(".detalhes-produto-display-valor-button > button").click();
    // cy.get(".carrinho-step_one-options > button").first().click();
  });

  it("RF0031 - Gerenciar carrinho de compra", () => {
    //login gluz@gmail.com abc12345
    if (!sessionStorage.getItem("isLogado")) {
      cy.visit("http://localhost:4200/livraria/login");

      cy.get(".painel_login-container").within(() => {
        cy.get("#inputEmail").type("gluz@gmail.com");

        cy.get("#inputSenha").type("abc12345");
      });

      cy.get(".painel_login-container-form > button").click();
    }

    cy.visit("http://localhost:4200/livraria/estoque");
    cy.get(".estoque-container-card")
      .last()
      .find(".estoque-container-card-button")
      .click();

    cy.get(".detalhes-produto-display-valor-button > button").click();
    cy.get(".carrinho-step_one-options > button").first().click();

    cy.get(".estoque-container-card")
      .first()
      .find(".estoque-container-card-button")
      .click();
    cy.get(".detalhes-produto-display-valor-button > button").click();
    cy.get(".carrinho-step_one-options > button").first().click();

    cy.get(".estoque-container-card")
      .first()
      .find(".estoque-container-card-button")
      .click();
    cy.get(".detalhes-produto-display-valor-button > button").click();

    cy.get(".mais").first().click();
    cy.get(".mais").first().click();

    cy.get(".carrinho-table-item_line-option > span").first().click();


  });
});
