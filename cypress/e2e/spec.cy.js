
describe('ENDPOINT /brazil/uf/sp', () => {
  it('primeiro teste funcional com cy.request()', () => {
    let uf = 'SP'

    cy.request({
      url: `/report/v1/brazil/uf/${uf}`,
      method: "GET"
    }).then((response) => {
      console.log(response)
      expect(response.status).to.equal(200)
      expect(response.duration).to.be.lessThan(2000)
      expect(response.body).to.have.property('cases')
      expect(response.body.uf).to.equal(uf)
    })
  })

  it('primeiro teste funcional com cy.api()', () => {
    let uf = 'SP'

    cy.api({
      url: `/report/v1/brazil/uf/${uf}`,
      method: "GET"
    }).then((response) => {
      console.log(response)
      expect(response.status).to.equal(200)
      expect(response.duration).to.be.lessThan(2000)
      expect(response.body).to.have.property('cases')
      expect(response.body.uf).to.equal(uf)
    })
  })

  it('Cenário negativo - UF inválida', () => {
    let uf = true

    cy.api({
      url: `/report/v1/brazil/uf/${uf}`,
      method: "GET"
    }).then((response) => {
      console.log(response)
      expect(response.status).to.equal(200)
      expect(response.duration).to.be.lessThan(2000)
      expect(response.body).to.have.property('error')
      expect(response.body.error).to.equal('state not found')
    })
  })

  it.only('Validando contrato com AJV - UF', () => {
    cy.contractTest('GET', '/report/v1/brazil/uf/SP', 'ufSchema.json')
  })

  it.only('Validando contrato com AJV - Country', () => {
    cy.contractTest('GET', '/report/v1/brazil', 'countrySchema.json')
  })

})