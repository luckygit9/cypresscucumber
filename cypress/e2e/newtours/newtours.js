import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('when user launched appln',() => {
    cy.visit("https://www.google.com/")

})

When('user logged in', ()=>{
    cy.title().should('eq','Google')
})

Then('user is displayed home screen', ()=>{
    cy.get("a[aria-label='Gmail (opens a new tab)']").click()
})
add below line