import { DURACAO } from "../../../../support/enviroments";

describe('Gestão de Vendas - Gráficos e Análise', ()=> {
    const TEMPO = DURACAO;

    it('Executar filtro do gráfico - Por Produtos', () =>{
        cy.visit('http://localhost:4200/admin')
        cy.wait(TEMPO)
        cy.get('.mat-form-field-infix > #mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        cy.wait(TEMPO)
        cy.get('#cdk-overlay-0 > .mat-select-panel-wrap > #mat-select-0-panel > #mat-option-2 > .mat-option-text').click()
        cy.wait(TEMPO)
        cy.get('#cdk-overlay-0 > .mat-select-panel-wrap > #mat-select-0-panel > #mat-option-5 > .mat-option-text').click()
        cy.wait(TEMPO)
        cy.get('#cdk-overlay-0 > .mat-select-panel-wrap > #mat-select-0-panel > #mat-option-4 > .mat-option-text').click()
        cy.wait(TEMPO)
        cy.get('.mat-typography > .cdk-overlay-container > .cdk-overlay-backdrop').click()
        cy.wait(TEMPO)
        cy.get('.dashboard > .dashboard-header > .dashboard-form > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(TEMPO)
    }),

    it.skip('Executar filtro do gráfico - Por Data', ()=> {
                  
        cy.get('.mat-typography > app-root > .app-root > .ng-star-inserted > .mat-drawer-container').click()
    
        cy.get('.liv-faturamento-produtos > .ng-star-inserted > div > div > div > svg > rect').click()
    
        cy.get('.mat-form-field-infix > .mat-date-range-input > .mat-date-range-input-container > .mat-date-range-input-start-wrapper > #mat-date-range-input-0').click()
    
        cy.get('.app-root > .ng-star-inserted > .mat-drawer-container > .mat-drawer-content > .ng-star-inserted').click()
    
        cy.get('.mat-form-field-infix > .mat-date-range-input > .mat-date-range-input-container > .mat-date-range-input-end-wrapper > .mat-end-date').click()
    
        cy.get('.mat-form-field-infix > .mat-date-range-input > .mat-date-range-input-container > .mat-date-range-input-end-wrapper > .mat-end-date').type('30/11/2021')
    
        cy.get('.liv-faturamento-produtos > .ng-star-inserted > div > div > div > svg > rect').click()
    
        cy.get('.dashboard > .dashboard-header > .dashboard-form > .mat-focus-indicator > .mat-button-wrapper').click()
    
        cy.get('.mat-form-field-infix > .mat-date-range-input > .mat-date-range-input-container > .mat-date-range-input-end-wrapper > .mat-end-date').click()
    
        cy.get('.liv-faturamento-produtos > .ng-star-inserted > div > div > div > svg > rect').click()
    
        cy.get('.liv-faturamento-produtos > .ng-star-inserted > div > div > div > svg > rect').click()
    
        cy.get('.mat-drawer-content > .ng-star-inserted > .dashboard > .dashboard-header > h2').click()
    
        cy.get('.mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon').click()
    
        cy.get('.mat-typography > .cdk-overlay-container > .cdk-overlay-backdrop').click()
    
        cy.get('.liv-faturamento-produtos > .ng-star-inserted > div > div > div > svg > rect').click()
    
        cy.get('.mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon').click()
    
        cy.get('.mat-calendar-table > .mat-calendar-body > .ng-star-inserted > .mat-calendar-body-active > .mat-calendar-body-cell-content').click()
    
        cy.get('.dashboard > .dashboard-header > .dashboard-form > .mat-focus-indicator > .mat-button-wrapper').click()
    
        cy.get('.mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon').click()
    
        cy.get('#mat-datepicker-0 > .ng-star-inserted > .mat-calendar-header > .mat-calendar-controls > .mat-calendar-period-button').click()
    
        cy.get('.mat-calendar-table > .mat-calendar-body > .ng-star-inserted:nth-child(2) > .mat-calendar-body-cell:nth-child(1) > .mat-calendar-body-cell-content').click()
    
        cy.get('.mat-calendar-table > .mat-calendar-body > .ng-star-inserted > .mat-calendar-body-active > .mat-calendar-body-cell-content').click()
    
        cy.get('.mat-calendar-table > .mat-calendar-body > .ng-star-inserted > .mat-calendar-body-active > .mat-calendar-body-cell-content').click()
    
        cy.get('.mat-calendar-header > .mat-calendar-controls > .mat-focus-indicator > .mat-button-wrapper > #mat-calendar-button-4').click()
    
        cy.get('.mat-calendar-table > .mat-calendar-body > .ng-star-inserted > .mat-calendar-body-cell > .mat-calendar-body-today').click()
    
        cy.get('.mat-calendar-table > .mat-calendar-body > .ng-star-inserted > .mat-calendar-body-active > .mat-calendar-body-cell-content').click()
    
        cy.get('.mat-calendar-table > .mat-calendar-body > .ng-star-inserted > .mat-calendar-body-preview-end > .mat-calendar-body-cell-content').click()
    
        cy.get('.dashboard > .dashboard-header > .dashboard-form > .mat-focus-indicator > .mat-button-wrapper').click()
    
    })
})