describe('Gestão de Clientes - Modulo', function() {
    
    it('RF0021 - Deve cadastrar um cliente', function() {
        cy.visit('http://localhost:4200/livraria/novo-cliente'); 
        cy.get('.client-form-input').within(()=> {
            cy.get('#nome')
                .type('Lucas')
                
            cy.get('#sobrenome')
                .type('Nogueira')

            cy.get('#dataNascimento')
                .type('1998-12-12')
            
            cy.get('#cpf')
                .type('47126964862')

            cy.get('#rdMasculino')
                .click()

            cy.get('#email')
                .type('lucasnogueira@gmail.com')

            cy.get('#telefone')
                .type('11997477173')
            
            cy.get('#senha').type('lucas123')
            cy.get('#repeteSenha').type('lucas123')

            cy.get('.client-form-button').within(()=> {
                cy.get('#btnEnviar').click()
            })
        });        
    }),

    it('RF0022 - Deve alterar dados cadastrais do cliente', ()=> {
        cy.visit('http://localhost:4200/livraria/login'); 

        cy.get('.painel_login-container').within(()=> {
            cy.get('#inputEmail')
                .type('fabio@gmail.com')
            cy.get('#inputSenha')
                .type('lucas')
        });

        cy.get('.painel_login-container-form > button').click();
        cy.visit('http://localhost:4200/clientes')

        //Dados cliente
        cy.get('#txtNome').clear().type('Gabriel')
        cy.get('#sobrenome').clear().type('da Luz')
        cy.get('#dataNascimento').clear().type('1998-04-06')
        cy.get('#cpf').clear().type('47126964862')
        cy.get('#btnAtualizaDados').click()

        // //Atualiza Telefone
        // cy.get('div[role=tab]').eq(1).click()

        // //Endereco
        // cy.get('div[role=tab]').eq(2).click()

        //Email
        cy.get('div[role=tab]').eq(3).click().then(()=> {
            cy.get('#txtEmail').type('gabriel@gmail.com')
            cy.get('#txtConfirmaEmail').type('gabriel@gmail.com')
            cy.get('#btnEmail').click()
            cy.get('div[role=tab]').eq(3).click()
        })


        // Senha
        cy.get('div[role=tab]').eq(4).click().then(()=> {
            cy.get('#txtSenha').type('gabriel')
            cy.get('#txtConfirmaSenha').type('gabriel')
            cy.get('#btnAtualizaSenha').click()
            cy.get('div[role=tab]').eq(4).click()
        })

        //Credito
        cy.get('div[role=tab]').eq(5).click().click().then(()=> {
            cy.get('.cartoes_form').within(()=> {
                cy.get('#btnMaisCartao').click()
                cy.get('#txtNomeCartao').type('Jonathan Joestar')
                cy.get('#txtNumeroCartao').type('57684758374586')
                // cy.get('.matSelectBandeira').click().then(()=> {
       
                // })
            })

            cy.get('mat-select[formControlName="bandeira"]')
            .click()

            // cy.get('mat-option')
            //     .contains('Mastercard').click();
            cy.get('mat-option')
                .first().click()

            cy.get('#txtCodigoSeg').type('989')

            cy.get('#btnEnviaNovoCartao').click()


            cy.get('.cartoes_form-cadastrados-lista-preferencial')
                .within(()=> {
                    cy.get('mat-icon').first().click()
                })
            
            cy.get('.btnInativarCartao').first().click()
            cy.get('#btnModalInativarCartao').click()
        })
    })

    it('RF0023 - Deve inativar cliente', ()=> {
        cy.visit('http://localhost:4200/clientes')

        cy.get('#btnDesativarCliente').click()

        cy.get('.inativar-dialog').within(()=> {
            cy.get('#btnDesativarCliente').click({force: true})
        })
        
    })
})