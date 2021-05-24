describe("Lists", () => {
    it("create 2 lists", () => {
        cy.visit("/");

        cy.get("[data-testid=drawerIcon").click();

        cy.get("[data-testid=newListName]").type("Groceries{enter}");

        cy.get("[data-testid=list]").contains("Groceries");

        cy.get("[data-testid=newListName]").type("Work{enter}");

        cy.get("[data-testid=list]").contains("Work");
    });

    it("delete a list", () => {
        cy.get("[data-testid=list]")
            .first()
            .within(() => {
                cy.get("[data-testid=listEdit]").click();
            });

        cy.get("[data-testid=listDelete]").click();

        cy.get("[data-testid=list]").contains("Work").should("not.exist");
    });

    it("create a task", () => {
        cy.get("[data-testid=drawerIcon").click();

        cy.get("[data-testid=list]").first().click();

        cy.get("[data-testid=drawerOverlay").click();

        cy.get("[data-testid=newTaskName]").type("Apple{enter}");

        cy.get("[data-testid=task]").contains("Apple");
    });

    it("delete a task", () => {
        cy.get("[data-testid=task]")
            .first()
            .within(() => {
                cy.get("[data-testid=taskEdit]").click();
            });

        cy.get("[data-testid=taskDelete]").click();

        cy.get("[data-testid=list]").contains("Apple").should("not.exist");
    });
});
