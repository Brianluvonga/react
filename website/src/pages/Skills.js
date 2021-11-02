import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const Skills = () => {
    return (
        <MDBContainer>
            <h2 className="h1-responsive font-weight-bold text-center my-5" id="skills">
                Skills
            </h2>

            <MDBRow className="">

                <MDBCol md="3" className="text-center border 1px solid">
                    <ul className="list-unstyled mb-0">

                        <li>
                            <MDBIcon icon="" size="3x" className="orange-text" />
                            <p className="font-weight-bold text-center">Web Development</p>
                            <p>CMS</p>
                            <p>React</p>

                        </li>

                    </ul>
                </MDBCol>
                <MDBCol md="3" className="text-center border 1px solid">
                    <ul className="list-unstyled mb-0">

                        <li>
                            <MDBIcon icon="" size="3x" className="orange-text" />
                            <p className="font-weight-bold text-center">App Development</p>
                            <p>Flutter</p>
                            <p>React Native</p>

                        </li>

                    </ul>
                </MDBCol>


                <MDBCol md="3" className="text-center border 1px solid">
                    <ul className="list-unstyled mb-0">

                        <li>
                            <MDBIcon icon="" size="2x" className="orange-text mt-4" />
                            <p className="font-weight-bold text-center">Tutoring</p>
                            <p>Programming</p>
                            <p>Computer Skills</p>
                            <p>Software Development</p>

                        </li>
                    </ul>
                </MDBCol>

                <MDBCol md="3" className="text-center border 1px solid">
                    <ul className="list-unstyled mb-0 ">
                        <li>
                            <MDBIcon icon="data" size="2x" className="orange-text mt-4" />
                            <p className="font-weight-bold text-center">Data Analysis</p>
                            <p>Python</p>
                            <p>R-basics</p>

                        </li>

                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Skills;