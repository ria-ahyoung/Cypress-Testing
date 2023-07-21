Cypress.Commands.add("login", () => {
  cy.clearAllCookies();

  const { link, username, password } = Cypress.env("login")[0];
  cy.visit(link);

  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get("button").contains("Login").click();
});
