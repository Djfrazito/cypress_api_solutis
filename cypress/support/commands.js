import Ajv from "ajv"
const ajv = new Ajv()

Cypress.Commands.add('contractTest', (method, url, schema, body) => {

    cy.api({
        url: url,
        method: method
    }).then((response) => {
        cy.fixture(schema).then((reportSchema) => {
            const validate = ajv.compile(reportSchema)
            const valid = validate(response.body)

            if (!valid) {
                cy.log(validate.errors).then(() => {
                    console.log(validate.errors)
                    throw new Error(`Contract Error: ${validate.errors[0].instancePath} - ${validate.errors[0].message} `)
                })
            } else {
                cy.log('Contract Test is valid!')
            }

        })
    })
})