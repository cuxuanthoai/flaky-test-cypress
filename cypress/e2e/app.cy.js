describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    // type user name into input
    cy.get('input[name="name"]').click().type('Some Name')
    // type user email
    cy.get('input[name="email"]').click().type('some@email.com')
    // select the "core" department
    cy.get('select[name="department"]').select('core')
    // select the "git-it" course
    cy.get('select[name="course"]').select('git-it')
    // submit the form
    cy.get('input[type="submit"]').click()
    // the "Saved!" message should appear
    // level 1 fix add timeout to hanlde
    //level 2 install pluggin  to repreat quick test to cf it work event mutiple time
    cy.get('input[value="Saved!"]',{timeout: 10000}).should('be.visible')
    // and the list of registered people should contain the new person
    // including the email and the course name
    cy.get('li').should('contain', 'Some Name - some@email.com - core - git-it')
  })
})
