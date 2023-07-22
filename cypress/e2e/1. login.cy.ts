describe("Validate login Functionality", () => {
  it("Validate login with Valid Credentials", () => {
    const { link, username, password } = Cypress.env("login")[0];
    cy.visit(link);

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    /*  
    submit 버튼 클릭 동작을 `enter` special character sequences로 대체할 수 있다. 
    → cy.get('input[name="password"]').type(`${password}{enter}`);
    */
    cy.get('button[type="submit"]').click();
  });
});
