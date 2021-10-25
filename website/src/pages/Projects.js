import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBBtn, MDBCard } from "mdbreact";
import app2 from "../app2.jpg";
const Projects = () => {
    return (
        <MDBContainer className="">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Projects
            </h2>

            <MDBRow>

                <MDBCol md="6" className="md-0 mb-4 ">
                    <MDBCardBody className="pb-0 text-center">

                        <h4 className="font-weight-bold my-3">Blog</h4>
                        <p className="black-text">
                            My blogging platform where I talk about whats happening, with much dwelling on the covid pandemic
                        </p>

                        <a href="https://4luvongabrianmuyekho.wordpress.com/" className=" border-radius 10px 10px btn btn-primary" href="">View Blog</a>

                    </MDBCardBody>

                </MDBCol>

                <MDBCol md="6" className="md-0 mb-4 ">
                    <MDBCardBody className="pb-0 text-center">
                        <h4 className="font-weight-bold my-3">Website</h4>
                        <p className="black-text">
                            My website, currently under maintenance, great website that talked about emerging technologies and provided useful tech materials
                        </p>
                        <button className=" border-radius 10px 10px btn btn-primary" >View Website</button>

                    </MDBCardBody>

                </MDBCol>

                <MDBCol md='12' className='mb-4'>
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage:
                                'url(' + app2 + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
                        }}
                    >
                        <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
                            <h6 className='cyan-text'>
                                <MDBIcon size="3x" icon='mobile-alt' />
                            </h6>
                            <h3 className='py-3 font-weight-bold'>
                                <strong>Mobile Apps</strong>
                            </h3>
                            <p className='pb-3'>
                                Links to mobile applications av been working on coming soon
                            </p>

                        </div>
                    </MDBCard>
                </MDBCol>




            </MDBRow>
        </MDBContainer>
    );
}

export default Projects;