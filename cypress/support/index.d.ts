declare namespace Cypress {
  interface Chainable {
    /**
     * 로그인을 하는 커스텀 커맨드
     * @example cy.login()
     */
    login(): Chainable;
  }
}
