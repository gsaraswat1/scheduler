describe("it should book an interview", () => {
  it("should book an interview", () => {
    // Visits the root of our web server
    cy.visit("http://localhost:8001/api/debug/reset")
    // Clicks on the "Add" button in the second appointment
    // Enters their name
    // Chooses an interviewer
    // Clicks the save button
    // Sees the booked appointment

  })
  it("should cancel an interview", () => {
    // Visits the root of our web server
    cy.visit("http://localhost:8001/api/debug/reset")
    // Clicks the delete button for the existing appointment
    // Clicks the confirm button
    // Sees that the appointment slot is empty
  })
  it("should edit an interview", () => {
    // Visits the root of our web server
    cy.visit("http://localhost:8001/api/debug/reset")
    // Clicks the edit button for the existing appointment
    // Changes the name and interviewer
    // Clicks the save button
    // Sees the edit to the appointment
  })
});