import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import ChartsPage from './ChartsPage ';
import CardTable from "./CardTable";
// import './App.css'; //Import here your file style

class CardComponent extends Component{
    render(){
        return(
          <MDBRow>
          <MDBCol md='4' className="cardItems">
            <MDBCard narrow>
              <MDBView cascade>
              <div className="view view-cascade narrower d-flex justify-content-between align-items-center cardHeader">
              <span className="heartIcon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                <div className="bloodPressureClass">
                  BLOOD PRESSURE<br />
                  <span className="bpNumber">128/60</span>
                </div>
                <div class="dropdownClass">
                  <div className="selectedDates">Selected Dates</div>
                    <select id="Dates" name="Dates">
                        <option value="volvo">Last 7 days</option>
                        <option value="saab">Last 3 days</option>
                        <option value="fiat">Last 5 days</option>
                    </select>
                  </div>
              </div>
              </MDBView>
              <MDBCardBody>
                  <ChartsPage />
                  <CardTable />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
    
          <MDBCol md='4' className="cardItems">
            <MDBCard narrow>
              <MDBView cascade>
              <div className="view view-cascade narrower d-flex justify-content-between align-items-center cardHeader">
              <span className="bloodpressureIcons"><i class="fa fa-heart" aria-hidden="true"></i></span>
                <div className="bloodPressureClass">
                BLOOD PRESSURE<br />
                  <span className="bpNumber">87 bpm</span>
                </div>
                <div class="dropdownClass">
                  <div className="selectedDates">Selected Dates</div>
                    <select id="Dates" name="Dates">
                        <option value="volvo">Last 7 days</option>
                        <option value="saab">Last 3 days</option>
                        <option value="fiat">Last 5 days</option>
                    </select>
                  </div>
              </div>
              </MDBView>
              <MDBCardBody>
                  <ChartsPage />
                  <CardTable />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md='4' className="cardItems">
            <MDBCard narrow>
              <MDBView cascade>
              <div className="view view-cascade narrower d-flex justify-content-between align-items-center cardHeader">
              <span className="heartIcon"><i class="fa fa-heart" aria-hidden="true"></i></span>
                <div className="bloodPressureClass">
                BLOOD PRESSURE<br />
                  <span className="bpNumber">98</span>
                </div>
                <div class="dropdownClass">
                  <div className="selectedDates">Selected Dates</div>
                    <select id="Dates" name="Dates">
                        <option value="volvo">Last 7 days</option>
                        <option value="saab">Last 3 days</option>
                        <option value="fiat">Last 5 days</option>
                    </select>
                  </div>
              </div>
              </MDBView>
              <MDBCardBody>
                  <ChartsPage />
                  <CardTable />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow>
        )
    }
}

export default CardComponent;