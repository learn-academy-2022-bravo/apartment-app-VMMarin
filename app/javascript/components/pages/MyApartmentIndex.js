import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'



class MyApartmentIndex extends Component {
  render() {
    return (
      <>
      <h3>My Apartments</h3>
      <Row className="cards">
          { this.props.myApartments.map(apartment => {
            return (
              <Col sm="4" key={ apartment.id }>
                <div className="my-show-card">
                  <h4>Location</h4>
                  <h5> {apartment.street }</h5>
                  <h5>{ apartment.city }, { apartment.state }</h5>
                  <br />
                  <h4>Manager Info</h4>
                  <h5>{ apartment.manager }</h5>
                  <h5>{ apartment.email }</h5>
                  <br />
                  <h4>Details</h4>
                  <h5>{ apartment.price } per month</h5>
                  <h5>Bedrooms: { apartment.bedrooms }</h5>
                  <h5>Bathrooms: { apartment.bathrooms }</h5>
                  <h5>Pets Allowed: { apartment.pets }</h5>
                    <p className="my-card-button">
                      <NavLink to={`/apartment-edit/${apartment.id}`}>
                        <Button color="secondary">
                          Update Listing
                        </Button>
                      </NavLink>
                      <NavLink to="/myapartments">
                        <Button color="secondary" onClick={ () => this.props.deleteApartment(apartment.id) }>
                          Remove Listing
                        </Button>
                      </NavLink>
                    </p>
                </div>
              </Col>
            )
          })}
      </Row>
      </>
    )
  }
}
export default MyApartmentIndex