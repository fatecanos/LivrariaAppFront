describe("GESTÃO DO CARRINHO DE COMPRAS", () => {
  it("RF0031 - Gerenciar carrinho de compra deslogado", () => {
    let TEMPO = 1000;

    cy.visit("http://localhost:4200/livraria/estoque");
    cy.wait(TEMPO)
    cy.get(".estoque-container-card")
      .last()
      .find(".estoque-container-card-button")
      .click();
    cy.wait(TEMPO)

    cy.get(".detalhes-produto-display-valor-button > button").click();
    cy.wait(TEMPO)
    // cy.get(".carrinho-step_one-options > button").first().click();
  });

  it("RF0031 - Gerenciar carrinho de compra", () => {
    let TEMPO = 3000;

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
    cy.wait(5000)
    cy.get(".estoque-container-card")
      .eq(1)
      .find(".estoque-container-card-button")
      .click();
    cy.wait(TEMPO)

    cy.get(".detalhes-produto-display-valor-button > button").click();
    cy.wait(TEMPO)
    cy.get(".carrinho-step_one-options > button").first().click();
    cy.wait(TEMPO)

    cy.get(".estoque-container-card")
      .first()
      .find(".estoque-container-card-button")
      .click();
    cy.wait(TEMPO)

    cy.get(".detalhes-produto-display-valor-button > button").click();
    cy.wait(TEMPO)

    cy.get(".carrinho-step_one-options > button").first().click();
    cy.wait(TEMPO)

    cy.get(".estoque-container-card")
      .first()
      .find(".estoque-container-card-button")
      .click();
    cy.wait(TEMPO)

    cy.get(".detalhes-produto-display-valor-button > button").click();
    cy.wait(TEMPO)

    cy.get(".mais").first().click();
    cy.wait(TEMPO)
    cy.get(".mais").first().click();
    cy.wait(TEMPO)

    cy.get(".carrinho-table-item_line-option > span").first().click();
  });
});
