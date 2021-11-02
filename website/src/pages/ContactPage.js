import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5" id="contacts">
        Contacts
      </h2>

      <MDBRow>

        <MDBCol md="4" className="text-center">
          <ul className="list-unstyled mb-0">

            <li>
              <MDBIcon icon="map-marker-alt" size="3x" className="orange-text" />
              <p>Eldoret, 30100, Kenya</p>
            </li>

          </ul>
        </MDBCol>


        <MDBCol md="4" className="text-center">
          <ul className="list-unstyled mb-0">

            <li>
              <MDBIcon icon="envelope" size="2x" className="orange-text mt-4" />
              <p>brnluvonga@gmail.com</p>

            </li>
          </ul>
        </MDBCol>

        <MDBCol md="4" className="text-center">
          <ul className="list-unstyled mb-0 ">
            <li>
              <MDBIcon icon="phone" size="2x" className="orange-text mt-4" />
              <p>+254798210403</p>
            </li>

          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactPage;