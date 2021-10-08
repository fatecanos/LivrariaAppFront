describe('Gestão de Livros - Modulo', () => {

  it('Deve renderizar a página de listagem de livros', ()=>{
    cy.visit('http://localhost:4200/livraria/estoque')
  });

  it('Deve renderizar a página de detalhes de um livro', ()=>{
    cy.get('.estoque-container-card-button > button').last().click();
  });

})
   