describe('Project', () => {
    beforeEach(() => {
        cy.login()
    });
    it('successfuly', () => {
        cy.get('.page-title-controls > .btn').click()
        cy.get('#blank-project-name > .project-name > #project_name').type("Teste")
        cy.get('#blank-project-pane > #new_project > .btn-success').click()
        
    });
});