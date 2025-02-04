describe("handling table elements", function () {

    it("Select a title from the table", function () {

        cy.visit('/')

        cy.get("tr td:nth-child(2)").each(function ($el, index, $list) {

           const products = $el.text();
           if(products.includes("Webservices"))
            
            {
                cy.log(products,"====")

                cy.get("tr td:nth-child(2)").eq(index).next().then(function (productPrice) {

                    const price = productPrice.text()
                    expect(price).to.equal('35')

                })
            }
        })
        


 




    })








})