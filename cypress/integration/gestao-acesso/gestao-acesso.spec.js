describe('Gestao de Acesso - Modulo', ()=> {
    it('deve renderizar pagina de login', ()=> {
        cy.visit('http://localhost:4200/livraria/login')
    }),
    it('deve executar login de usuario', ()=> {
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type('lucas@gmail.com')
                
            cy.get('#inputSenha')
                .type('12345')
        });

        cy.get('.painel_login-container-form > button').click();
    }),
    it('deve barrar o usuario quando os campos estiverem vazios', ()=> {
        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type(' ')
                
            cy.get('#inputSenha')
                .type(' ')
        });

        cy.get('.painel_login-container-form > button').click();
    })
})

// cy.get('form').within(() => {
//     cy.get('input').type('Pamela') // Only yield inputs within form
//     cy.get('textarea').type('is a developer') // Only yield textareas within form
//   })