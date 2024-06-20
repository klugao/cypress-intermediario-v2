describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
    cy.get('.tanuki-logo').should('be.visible')
  })

  // it('logout', () => {
  //   cy.login()

  //   cy.get('.qa-user-avatar').click()
  //   cy.get('.sign-out-link').click()
  //   cy.get('.tanuki-logo').should('be.visible')
  // })
})

