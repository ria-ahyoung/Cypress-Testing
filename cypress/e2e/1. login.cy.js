describe("Validate login Functionality", () => {
  it("Validate login with Valid Credentials", () => {
    const { link, username, password } = Cypress.env("login")[0];

    cy.visit(link);

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
});
