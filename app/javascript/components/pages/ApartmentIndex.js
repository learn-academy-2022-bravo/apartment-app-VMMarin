import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component {
  render() {
    return (
      <>
        <h3>All the Apartments</h3>
        <Row className="cards">
            { this.props.apartments.map(apartment => {
              return (
                <Col sm="4" key={ apartment.id }>
                  <Card body>
                    <CardTitle>
                      <h5>{ apartment.street }</h5>
                      <h5>{ apartment.city }, { apartment.state }</h5>
                      <p className="card-button">
                        <NavLink to={`/apartment/${apartment.id}`}>
                          <Button color="secondary">
                            More Info
                          </Button>
                        </NavLink>
                      </p>
                    </CardTitle>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </>
    )
  }
}
export default ApartmentIndex