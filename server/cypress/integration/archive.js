// 1. login as jl_picard (pw: "enterprise")

// 2. click Archive page
/*
        cy.findByRole('link', {  name: /archive/i})
*/

// 3. Archive page should have 1 room: "room 1"
/*
        cy.findByRole('heading', {  name: /search your 1 archived rooms/i})
        cy.findByTestId('SelectableContentBox-container-room 1')
 */

// 4. click unarchive icon
/*
        const button = cy.findByRole('button', {  name: /unarchive unarchive output/i});within(button).getByText(/output/i);
 */

// 5. click yes on popup modal
/*
        cy.findByRole('button', {  name: /yes/i})
*/

// 6. "room 1" should no longer exist

// 7. click MyVMT in navbar
/*
        cy.findByRole('link', {  name: /my vmt/i})
*/

// 8. click "Last Week"
/*
        cy.findByText(/last week/i)
*/

// 9. click "All" in the drop down
/*
        cy.findByText(/last week/i)
*/

// 10. "room 1" should exist
/*
        cy.findByText(/room 1/i)
*/

// @TODO: server > seeders > tab.js -> ObjectId('5d3b493dca44f53a90a9ed35') is used by 3 rooms and each room should have unique tabs.
// click "Select All"
// click Archive Icon next to "Select All"
// click "yes" on popup modal
// text should exist: "There doesn't appear to be anything here yet"
// click Archive tab in navbar