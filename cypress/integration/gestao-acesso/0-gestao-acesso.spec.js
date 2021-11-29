describe('Gestao de Acesso - Modulo', ()=> {
    const TEMPO = 1000;
    it('deve renderizar pagina de login', ()=> {
        cy.visit('http://localhost:4200/livraria/login')
        cy.wait(TEMPO)
    }),
    it('deve executar login de usuario', ()=> {
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type('lucasman@gmail.com')
            cy.wait(TEMPO)

            cy.get('#inputSenha')
                .type('lucas')
            cy.wait(TEMPO)
        });

        cy.get('.painel_login-container-form > button').click();
    }),
    it('deve barrar o usuario quando os campos estiverem vazios', ()=> {
        cy.visit('http://localhost:4200/livraria/login')
        cy.wait(TEMPO)
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type(' ')
            cy.wait(TEMPO)
            cy.get('#inputSenha')
                .type(' ')
            cy.wait(TEMPO)
        });

        cy.get('.painel_login-container-form > button').click();
        cy.wait(TEMPO)
    })
})

// cy.get('form').within(() => {
//     cy.get('input').type('Pamela') // Only yield inputs within form
//     cy.get('textarea').type('is a developer') // Only yield textareas within form
//   })
