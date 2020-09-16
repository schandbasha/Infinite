import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBView } from 'mdbreact';
import ChartPageOneComponent from './ChartPageOneComponent';
import CardTable from "./CardTable";
import ChartPageTwoComponent from './ChartPageTwoComponent'
// import './App.css'; //Import here your file style

class CardComponent extends Component{
    render(){
        return(
          <MDBRow>
          <MDBCol md='4' className="cardItems">
            <MDBCard narrow>
              <MDBView cascade>
              <div className="view view-cascade narrower d-flex justify-content-between align-items-center cardHeader">
              <span className="heartIcon"><i className="fa fa-heart" aria-hidden="true"></i></span>
                <div className="bloodPressureClass">
                  BLOOD PRESSURE<br />
                  <span className="bpNumber">128/60</span>
                </div>
                <div className="dropdownClass">
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
                  <ChartPageOneComponent />
                  <CardTable />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
    
          <MDBCol md='4' className="cardItems">
            <MDBCard narrow>
              <MDBView cascade>
              <div className="view view-cascade narrower d-flex justify-content-between align-items-center cardHeader">
              <span className="bloodpressureIcons"><i className="fa fa-heart" aria-hidden="true"></i></span>
                <div className="bloodPressureClass">
                HEART RATE<br />
                  <span className="bpNumber">87 bpm</span>
                </div>
                <div className="dropdownClass">
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
                  <ChartPageTwoComponent />
                  <CardTable />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md='4' className="cardItems">
            <MDBCard narrow>
              <MDBView cascade>
              <div className="view view-cascade narrower d-flex justify-content-between align-items-center cardHeader">
              <span className="heartIcon"><i className="fa fa-heart" aria-hidden="true"></i></span>
                <div className="bloodPressureClass">
                BLOOD SUGAR<br />
                  <span className="bpNumber">98</span>
                </div>
                <div className="dropdownClass">
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
                  <ChartPageOneComponent />
                  <CardTable />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow>
        )
    }
}

export default CardComponent;