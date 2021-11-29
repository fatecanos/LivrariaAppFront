import { DURACAO } from "../../../../support/enviroments";

describe("Gestão de Vendas - Despachar pedido e comfirmar entrega", function () {
  const TEMPO = DURACAO;

  it('Deve renderizar tela de consulta de vendas', function() {
    cy.visit('http://localhost:4200/admin/venda')
  }) 

  it("Despachar pedidos", { scrollBehavior: false }, function () {
    cy.visit('http://localhost:4200/admin/venda')
    cy.wait(5000)

    cy.get('.btnDespacharPedido').first().click()
    cy.wait(TEMPO)
  });
  //btnConfirmarEntrega

  it("Confirmar entrega pedidos", { scrollBehavior: false }, function () {
    cy.wait(5000)

    cy.get('.btnConfirmarEntrega').first().click()
    cy.wait(TEMPO)
  });
});
