context("Search CEP", () => {
  it("Shoud be able to search an address by CEP", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.get("input").type(20785210);
    cy.get("button").click();
  });
});
