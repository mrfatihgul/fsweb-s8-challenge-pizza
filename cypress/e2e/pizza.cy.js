describe("Pizza Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("İsim girme", () => {
    cy.get('input[placeholder="İsminiz"]').type("Fatih");
  });

  it("Pizza boyutu seçme", () => {
    cy.get('input[name="pizza-size"][value="M"]').check({ force: true });
  });

  it("Hamur seçme", () => {
    cy.get('select[name="hamur"]').select("Süpper İnce");
  });

  it("Malzeme seçme", () => {
    cy.get('input[name="toppings"][value="Sucuk"]').check({ force: true });
    cy.get('input[name="toppings"][value="Mısır"]').check({ force: true });
    cy.get('input[name="toppings"][value="Soğan"]').check({ force: true });
    cy.get('input[name="toppings"][value="Pepperoni"]').check({ force: true });
  });

  it("Formu gönderme", () => {
    // önce valid form doldur
    cy.get('input[placeholder="İsminiz"]').type("Fatih");
    cy.get('input[name="pizza-size"][value="M"]').check({ force: true });
    cy.get('select[name="hamur"]').select("Süpper Normal");
    cy.get('input[name="toppings"][value="Sucuk"]').check({ force: true });
    cy.get('input[name="toppings"][value="Soğan"]').check({ force: true });
    cy.get('input[name="toppings"][value="Pepperoni"]').check({ force: true });
    cy.get('input[name="toppings"][value="Domates"]').check({ force: true });

    // submit
    cy.get('button[type="submit"]').click();
  });
});
