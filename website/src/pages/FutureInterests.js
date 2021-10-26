import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBBtn, MDBCard } from "mdbreact";
import app2 from "../app2.jpg";



const FutureInterests = () => {
    return (
        <MDBContainer className="">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Interests
            </h2>

            <MDBRow>

                <MDBCol md="4" className="md-0 mb-4 ">
                    <MDBCardBody className="pb-0 text-center">
                    <img
                            src={require('../ml.jpeg')}
                            alt=""
                            className="img-fluid"
                        />

                        <h4 className="font-weight-bold my-3">Machine Learning</h4>
                        <p className="black-text">
                            My blogging platform where I talk about whats happening, with much dwelling on the covid pandemic
                        </p>

                        <a href="https://4luvongabrianmuyekho.wordpress.com/" className=" border-radius 10px 10px btn btn-purple text-white" href="">Read More</a>

                    </MDBCardBody>

                </MDBCol>

                <MDBCol md="4" className="md-0 mb-4 ">
                    <MDBCardBody className="pb-0 text-center">
                        <img
                            src={require('../crypto.jpg')}
                            alt=""
                            className="img-fluid"
                        />
                        <h4 className="font-weight-bold my-3">CryptoCurrency</h4>
                        <p className="black-text">
                            My website, currently under maintenance, great website that talked about emerging technologies and provided useful tech materials
                        </p>
                        <button className=" border-radius 10px 10px btn btn-black text-white" >Read More</button>

                    </MDBCardBody>

                </MDBCol>

                <MDBCol md="4" className="md-0 mb-4 ">
                    <MDBCardBody className="pb-0 text-center">
                       
                        <img
                            src={require('../cloud.jpg')}
                            alt=""
                            className="img-fluid"
                        />
                        <h4 className="font-weight-bold my-3">Cloud Computing</h4>
                        <p className="black-text">
                            My website, currently under maintenance, great website that talked about emerging technologies and provided useful tech materials
                        </p>
                        <button className=" border-radius 10px 10px btn btn-warning " > Read More </button>

                    </MDBCardBody>

                </MDBCol>
{/* 
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
                </MDBCol> */}




            </MDBRow>
        </MDBContainer>
    );
}

export default FutureInterests;