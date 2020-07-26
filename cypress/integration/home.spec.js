describe('Lists', () => {
    it('create 2 lists', () => {
        cy.visit('/')

        cy.get('[data-test=listCreate]')
            .click()

        cy.get('[data-test=newListName]')
            .type('Groceries')

        cy.get('[data-test=newListSubmit]')
            .click()

        cy.get('[data-test=list]')
            .contains('Groceries')

        cy.get('[data-test=listCreate]')
            .click()

        cy.get('[data-test=newListName]')
            .type('Work')

        cy.get('[data-test=newListSubmit]')
            .click()

        cy.get('[data-test=list]')
            .contains('Work')
    })

    it('delete a list', () => {
        //cy.visit('/')

        cy.get('[data-test=list]')
            .first()
            .within(() => {
                cy.get('[data-test=listEdit]')
                    .click()
            })

        cy.get('[data-test=listDelete]')
            .click()

        cy.get('[data-test=list]')
            .contains('Work')
            .should('not.exist')

    })

    it('create a task', () => {
        //cy.visit('/')

        cy.get('[data-test=list]')
            .first()
            .click()

        cy.get('[data-test=taskCreate]')
            .click()

        cy.get('[data-test=newTaskName]')
            .type('Apple')

        cy.get('[data-test=newTaskSubmit]')
            .click()

        cy.get('[data-test=task]')
            .contains('Apple')

    })

    it('delete a task', () => {
        //cy.visit('/')

        cy.get('[data-test=task]')
            .first()
            .within(() => {
                cy.get('[data-test=taskEdit]')
                    .click()
            })

        cy.get('[data-test=taskDelete]')
            .click()

        cy.get('[data-test=list]')
            .contains('Apple')
            .should('not.exist')

    })
})