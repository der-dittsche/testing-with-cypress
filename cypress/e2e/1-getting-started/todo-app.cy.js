/// <reference types="cyypress" />

describe("todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have empty todo-list by default", () => {
    cy.get("#todo-list li").should("have.length", 0);
  });

  it("add one todo", () => {
    cy.get("#new-todo").type("Lern CSS");
    cy.get("#add-todo").click();
    cy.get("#todo-list li").should("have.length", 1);
  });
});
