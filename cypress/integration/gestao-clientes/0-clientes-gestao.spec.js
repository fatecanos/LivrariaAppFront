import { DURACAO, usuarioDump } from "../../support/enviroments";

describe('Gestão de Clientes - Modulo', function() {
    const TEMPO = DURACAO;
    const USER = usuarioDump;

    it('RF0021 - Deve cadastrar um cliente', function() {

        cy.visit('http://localhost:4200/livraria/novo-cliente'); 

        cy.get('.client-form-input').within(()=> {
            cy.get('#nome')
                .type('Lucas')
            cy.wait(TEMPO)
                
            cy.get('#sobrenome')
                .type('Nogueira')
            cy.wait(TEMPO)

            cy.get('#dataNascimento')
                .type('1998-12-12')
            cy.wait(TEMPO)
            
            cy.get('#cpf')
                .type('47126964862')
            cy.wait(TEMPO)
            
            cy.get('#rdMasculino')
                .click()
            cy.wait(TEMPO)

            cy.get('#email')
                .type('lucasnogueira@gmail.com')
            cy.wait(TEMPO)

            cy.get('#telefone')
                .type('11997477173')
            cy.wait(TEMPO)
            
            cy.get('#senha').type('lucas123')
            cy.wait(TEMPO)

            cy.get('#repeteSenha').type('lucas123')
            cy.wait(TEMPO)

            cy.get('.client-form-button').within(()=> {
                cy.get('#btnEnviar').click()
                cy.wait(TEMPO)
            })
        });        
    }),

    it('RF0022 - Deve gerenciar dados cadastrais do cliente', ()=> {
        if (!sessionStorage.getItem("isLogado")) {
            cy.visit("http://localhost:4200/livraria/login");
      
            cy.get(".painel_login-container").within(() => {
              cy.get("#inputEmail").type(USER.email);
      
              cy.get("#inputSenha").type(USER.senha);
            });
      
            cy.get(".painel_login-container-form > button").click();
        }

        // cy.visit('http://localhost:4200/livraria/login'); 
        // cy.wait(TEMPO)
        // cy.get('.painel_login-container').within(()=> {
        //     cy.get('#inputEmail')
        //         .type('fabio@gmail.com')
        //         cy.wait(TEMPO)
        //     cy.get('#inputSenha')
        //         .type('lucas')
        //         cy.wait(TEMPO)
        //      cy.get('.painel_login-container-form > button').click();
        // });

        
        cy.wait(TEMPO)
        cy.visit('http://localhost:4200/clientes')
        cy.wait(TEMPO)

        //Dados cliente
        cy.get('#txtNome').clear().type('Gabriel')
        cy.wait(TEMPO)
        cy.get('#sobrenome').clear().type('da Luz')
        cy.wait(TEMPO)
        cy.get('#dataNascimento').clear().type('1998-04-06')
        cy.wait(TEMPO)
        cy.get('#cpf').clear().type('47126964862')
        cy.wait(TEMPO)
        cy.get('#btnAtualizaDados').click()
        cy.wait(TEMPO)

    }),

    it('RF0022 - Deve gerenciar Telefones do cliente', ()=> {
        cy.visit('http://localhost:4200/clientes')
        cy.wait(TEMPO)
        //Atualiza Telefone
        cy.get('div[role=tab]').eq(1).click().then(()=> {
            //add
            cy.get('#maisTel').click().then(()=> {
                cy.get('#txtNovoTelefone').type('11997477173')
                cy.wait(TEMPO)
                cy.get('#btnNovoTel').click()
                cy.wait(TEMPO)
            })
        cy.get('.btnRemoverTelefone').eq(0).click()
        cy.get('#btnEfetuarExclusaoTelefone').click()

            //atualiza
            // cy.get('mat-form-field').first().click({ force: true }).within(()=> {
            //     cy.get('input').first().clear().type('1198465674')
            // })
            // cy.get('.mat-focus-indicator').first().click()

            // //add
            // cy.get('#maisTel').click().then(()=> {
            //     cy.get('#txtNovoTelefone').type('11997477173')
            //     cy.get('#btnNovoTel').click()
            // })

            //remover
            // cy.get.get('.btnRemoveTel').first().click();
            // cy.get('.mat-focus-indicator').eq(0).click()

        })
    }),

    it('RF0022 - Deve gerenciar Endereços do cliente', ()=> {
        //Endereco
        cy.get('div[role=tab]').eq(2).click()
        cy.wait(TEMPO)
        cy.get('#maisEndereco').click()
        cy.wait(TEMPO)

        cy.get('#txtNomeEndereco').type('Casa da vó');
        cy.wait(TEMPO)
        cy.get('#txtCep').type('08744103')
        cy.wait(TEMPO)
        cy.get('#txtNumero').type('266')
        cy.wait(TEMPO)
        cy.get('.txtTipoEndereco').first().click()
        cy.wait(TEMPO)

        cy.get('#btnEnviaEndereco').click()
        cy.wait(TEMPO)

        cy.visit('http://localhost:4200/clientes')
        cy.wait(TEMPO)
        cy.get('div[role=tab]').eq(2).click()
        cy.wait(TEMPO)

        cy.get('.endereco-form-tabs_container-form-tipo_residencia-options')
            .first()
            .get('.btnRemoverEndereco')
            .first().click();
            cy.wait(TEMPO)

        cy.get('#btnInativarEndereco').click()
        cy.wait(TEMPO)

        cy.visit('http://localhost:4200/clientes')
        cy.wait(TEMPO)
        cy.get('div[role=tab]').eq(2).click()     
        cy.wait(TEMPO)
    }),

    it('RF0022 - Deve atualizar email', ()=> {
        //Email
        cy.get('div[role=tab]').eq(3).click().then(()=> {
            cy.get('#txtEmail').type('gabriel@gmail.com')
            cy.wait(TEMPO)
            cy.get('#txtConfirmaEmail').type('gabriel@gmail.com')
            cy.wait(TEMPO)
            cy.get('#btnEmail').click()
            cy.wait(TEMPO)
            cy.get('div[role=tab]').eq(3).click()
            cy.wait(TEMPO)
        })
    }),

    it('RF0022 - Deve atualizar senha', () => {
        // Senha
        cy.get('div[role=tab]').eq(4).click().then(()=> {
            cy.get('#txtSenha').type('gabriel')
            cy.wait(TEMPO)
            cy.get('#txtConfirmaSenha').type('gabriel')
            cy.wait(TEMPO)
            cy.get('#btnAtualizaSenha').click()
            cy.wait(TEMPO)
            // cy.get('div[role=tab]').eq(4).click()
        })
    }),

    it('RF0022 - Deve alterar cartões', ()=> {
        //Credito
        cy.get('div[role=tab]').eq(5).click().click().then(()=> {
            cy.get('.cartoes_form').within(()=> {
                cy.get('#btnMaisCartao').click()
                cy.wait(TEMPO)
                cy.get('#txtNomeCartao').type('Jonathan Joestar')
                cy.wait(TEMPO)
                cy.get('#txtNumeroCartao').type('57684758374586')
                cy.wait(TEMPO)
                // cy.get('.matSelectBandeira').click().then(()=> {
       
                // })
            })

            cy.get('mat-select[formControlName="bandeira"]')
            .click()
            cy.wait(TEMPO)

            // cy.get('mat-option')
            //     .contains('Mastercard').click();
            cy.get('mat-option')
                .first().click()
            cy.wait(TEMPO)

            cy.get('#txtCodigoSeg').type('989')
            cy.wait(TEMPO)

            cy.get('#btnEnviaNovoCartao').click()
            cy.wait(TEMPO)

            cy.get('.cartoes_form-cadastrados-lista-preferencial')
                .within(()=> {
                    cy.get('mat-icon').first().click()
                    cy.wait(TEMPO)
                })
            
            cy.get('.btnInativarCartao').first().click()
            cy.wait(TEMPO)
            cy.get('#btnModalInativarCartao').click()
            cy.wait(TEMPO)
        })
    })



    it('RF0023 - Deve inativar cliente', ()=> {
        cy.visit('http://localhost:4200/clientes')
        cy.wait(TEMPO)

        cy.get('#btnDesativarCliente').click()
        cy.wait(TEMPO)

        cy.get('.inativar-dialog').within(()=> {
            // cy.get('#btnDesativarCliente').click({force: true})
        })
        
    })
})