describe('Gestão de Livros - Modulo', () => {

  it('Deve renderizar a página de listagem de livros', ()=>{
    cy.visit('http://localhost:4200/livraria/estoque')
  });

  it('Deve renderizar a página de detalhes de um livro', ()=>{
    cy.get('.estoque-container-card-button > button').last().click();
  });

  it('Deve gravar um novo livro', { scrollBehavior: false }, ()=> {

    cy.visit('http://localhost:4200/admin')
 
    cy.get('.mat-drawer-inner-container > .admin-domain-options > li:nth-child(2) > .admin-domain-options-item:nth-child(2) > a').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-0').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-0').type('O Hobbit')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-1').type('JK Rolling')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-2').type('2021')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-3').type('Leitura')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-4').type('Primeira')
    cy.wait(500)
    cy.get('.ng-star-inserted > .novo-livro > .novo-livro-container > .novo-livro-container-form > .novo-livro-container-form-row:nth-child(2)').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-4').type('1')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-5').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-5').type('249942940204')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-6').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-6').type('233')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-7').type(`era uma vez um hobbit`)
    cy.wait(500)
    cy.get('.mat-form-field-infix > #mat-select-4 > .mat-select-trigger > #mat-select-value-5 > .mat-select-placeholder').click()
    cy.wait(500)
    cy.get('.mat-option-text').eq(0).click()
    cy.wait(500)
    cy.get('.mat-option-text').eq(1).click()
    cy.wait(500)
    cy.get('.mat-typography > .cdk-overlay-container > .cdk-overlay-backdrop').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-8').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-8').type('131')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-9').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-9').type('45')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-10').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-10').type('355')
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-11').click()
    cy.wait(500)
    cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-11').type('23')
    cy.wait(500)
    cy.get('#selectorGrupoPrecificacao').click()
 
    cy.get('.grupoPrecoOption').first().click()
    cy.wait(500)
    
    cy.get('#valorDeCompraId').type('98.90')
    cy.wait(500)

    cy.get('#txtCodigoBarras').type('2424524242424442')
    cy.wait(500)

    cy.get('#txtUrlImagem').type('https://www.lojadobolseiro.com.br/uploads/images/2021/06/120-livro-o-hobbit-anotado-j-r-r-tolkien-1623293634.jpg')
    cy.wait(500)

    cy.get('#txtQuantidadeEstoque').type('23')
    cy.wait(500)
    
    cy.get('#btnEnviarLivro').click()

  });
})
   