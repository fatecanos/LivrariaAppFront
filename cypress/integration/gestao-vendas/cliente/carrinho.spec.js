/*
RF0031 - Gerenciar carrinho de compra

O sistema deve permitir que produtos sejam colocados 
    em um repositório temporário para futura compra 
    (carrinho de compra). Deve ser possível adicionar, 
    alterar e excluir itens de compra no carrinho. 
    Também deve ser possível visualizar os itens no carrinho.
*/
describe('GERENCIAR VENDAS ELETRÔNICAS', ()=> {
    it(`RF0031 - Gerenciar carrinho de compra`, function() {
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        });

        cy.visit('http://localhost:4200/livraria/carrinho');
        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        cy.get('#mais').click();
        cy.get('#menos').click();

        cy.get('#mais').click();
        cy.get('#mais').click();
        cy.get('#mais').click();

        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();
    });

    it('RF0032 - Definir quantidade de itens no para o carrinho', ()=> {
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        });

        cy.visit('http://localhost:4200/livraria/carrinho');
        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        cy.get('#mais').click();
        cy.get('#menos').click();

        cy.get('#mais').click();
        cy.get('#mais').click();
        cy.get('#mais').click();
    }),

    it('RF0033 - Realizar compra', ()=> {
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        });
        cy.visit('http://localhost:4200/livraria/carrinho');
        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        cy.get('#mais').click();
        cy.get('#menos').click();

        cy.get('#mais').click();
        cy.get('#mais').click();
        cy.get('#mais').click();

        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        //fazer login
        cy.get('#acessarPaginaLogin').click();
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type('lucas@gmail.com')
                
            cy.get('#inputSenha')
                .type('12345')
        });
        cy.get('.painel_login-container-form > button').click();

        //voltar para o carrinho
        cy.visit('http://localhost:4200/livraria/carrinho');
        cy.get('#btnFinalizarPedido').click();
    }),

    it('RF0034 - Calcular frete', ()=> {
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        });

        cy.visit('http://localhost:4200/livraria/carrinho');
        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        cy.get('#mais').click();
        cy.get('#menos').click();

        cy.get('#mais').click();
        cy.get('#mais').click();
        cy.get('#mais').click();

        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        //fazer login a partir do carrinho
        cy.get('#acessarPaginaLogin').click();
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type('lucas@gmail.com')
                
            cy.get('#inputSenha')
                .type('12345')
        });
        cy.get('.painel_login-container-form > button').click();
        cy.wait(2000);

        cy.visit('http://localhost:4200/livraria/carrinho');
        cy.get('#btnCalcularFrete').click();
    }),
    it('RF0035 - Selecionar endereço de entrega', ()=> {
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        });

        cy.visit('http://localhost:4200/livraria/carrinho');
        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        cy.get('#mais').click();
        cy.get('#menos').click();

        cy.get('#mais').click();
        cy.get('#mais').click();
        cy.get('#mais').click();

        cy.visit('http://localhost:4200/livraria');

        cy.get('#visualizarLivros').click();
        cy.get('#livroCard').click();
        cy.get('#addCarrinho').click();

        //fazer login a partir do carrinho
        cy.get('#acessarPaginaLogin').click();
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type('lucas@gmail.com')
                
            cy.get('#inputSenha')
                .type('12345')
        });
        cy.get('.painel_login-container-form > button').click();
        cy.wait(2000);

        cy.visit('http://localhost:4200/livraria/carrinho');

        cy.get('#rdMeusEnderecos').click();

        cy.get('#matSelectEndereco')
            .click().get('mat-option').first().click();

        cy.get('#rdNovoEndereco')
            .click();

        cy.get('#txtCep')
            .type('08744103');

        cy.get('#btnCalcularFrete').click();
    }),

    it('RF0036 - Selecionar forma de pagamento', ()=> {
        cy.get('#btnFinalizarPedido').click();

        cy.get()
    }),

    it('RF0037 - Finalizar Compra')
})