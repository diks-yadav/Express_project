import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Home() {
  const [name,setName] =useState("");
  const email=localStorage.getItem('email');
  const getSpecificUserDetails=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-usersbyemail/${email}`).then((res)=>{
      console.log('Backend response Success:', res);
      if(res.data.status===1){
        console.log("user details",res.data.users.firstname);
        setName(res.data.users.firstname + " " +res.data.users.lastname);
        // setName(res.data.data.name);        
      }
      else{
          alert(`${res.data.message}`)
      }
    }).catch((err) => {
      console.log('Backend response failes:', err.message);
    });
  }
useEffect(()=>{
getSpecificUserDetails();
},[email]);
  return (
    <div className="main-panel" style={{width:"950px"}}>
    <div className="content-wrapper contentClass pb-0">
      <div className="page-header flex-wrap">
        <h3 className="mb-0"> Hi, welcome back! <span className="pl-0 h6 pl-sm-2 text-muted d-inline-block capitalize">{name}</span>
        </h3>
        {/* <div className="d-flex">
          <button type="button" className="btn btn-sm bg-white btn-icon-text border">
            <i className="mdi mdi-email btn-icon-prepend"></i> Email</button>
          <button type="button" className="btn btn-sm bg-white btn-icon-text border ml-3">
            <i className="mdi mdi-printer btn-icon-prepend"></i> Print </button>
          <button type="button" className="btn btn-sm ml-3 btn-success"> Add User </button>
        </div> */}
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-12 stretch-card grid-margin">
          <div className="row">
            <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
              <div className="card bg-warning">
                <div className="card-body px-3 py-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="color-card">
                      <p className="mb-0 color-card-head">Sales</p>
                      <h2 className="text-white"> $8,753.<span className="h5">00</span>
                      </h2>
                    </div>
                    <i className="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"></i>
                  </div>
                  <h6 className="text-white">18.33% Since last month</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
              <div className="card bg-danger">
                <div className="card-body px-3 py-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="color-card">
                      <p className="mb-0 color-card-head">Margin</p>
                      <h2 className="text-white"> $5,300.<span className="h5">00</span>
                      </h2>
                    </div>
                    <i className="card-icon-indicator mdi mdi-cube-outline bg-inverse-icon-danger"></i>
                  </div>
                  <h6 className="text-white">13.21% Since last month</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3">
              <div className="card bg-primary">
                <div className="card-body px-3 py-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="color-card">
                      <p className="mb-0 color-card-head">Orders</p>
                      <h2 className="text-white"> $1,753.<span className="h5">00</span>
                      </h2>
                    </div>
                    <i className="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary"></i>
                  </div>
                  <h6 className="text-white">67.98% Since last month</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-md-6 stretch-card pb-sm-3 pb-lg-0">
              <div className="card bg-success">
                <div className="card-body px-3 py-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="color-card">
                      <p className="mb-0 color-card-head">Affiliate</p>
                      <h2 className="text-white">2368</h2>
                    </div>
                    <i className="card-icon-indicator mdi mdi-account-circle bg-inverse-icon-success"></i>
                  </div>
                  <h6 className="text-white">20.32% Since last month</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 stretch-card grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-7">
                  <h5>Business Survey</h5>
                  <p className="text-muted"> Show overview jan 2018 - Dec 2019 <a className="text-muted font-weight-medium pl-2" href="#"><u>See Details</u></a>
                  </p>
                </div>
                <div className="col-sm-5 text-md-right">
                  <button type="button" className="btn btn-icon-text mb-3 mb-sm-0 btn-inverse-primary font-weight-normal">
                    <i className="mdi mdi-email btn-icon-prepend"></i>Download Report </button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="card mb-3 mb-sm-0">
                    <div className="card-body py-3 px-4">
                      <p className="m-0 survey-head">Today Earnings</p>
                      <div className="d-flex justify-content-between align-items-end flot-bar-wrapper">
                        <div>
                          <h3 className="m-0 survey-value">$5,300</h3>
                          <p className="text-success m-0">-310 avg. sales</p>
                        </div>
                        <div id="earningChart" className="flot-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card mb-3 mb-sm-0">
                    <div className="card-body py-3 px-4">
                      <p className="m-0 survey-head">Product Sold</p>
                      <div className="d-flex justify-content-between align-items-end flot-bar-wrapper">
                        <div>
                          <h3 className="m-0 survey-value">$9,100</h3>
                          <p className="text-danger m-0">-310 avg. sales</p>
                        </div>
                        <div id="productChart" className="flot-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body py-3 px-4">
                      <p className="m-0 survey-head">Today Orders</p>
                      <div className="d-flex justify-content-between align-items-end flot-bar-wrapper">
                        <div>
                          <h3 className="m-0 survey-value">$4,354</h3>
                          <p className="text-success m-0">-310 avg. sales</p>
                        </div>
                        <div id="orderChart" className="flot-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-sm-12">
                  <div className="flot-chart-wrapper">
                    <div id="flotChart" className="flot-chart">
                      <canvas className="flot-base"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <p className="text-muted mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <b>Learn More</b>
                  </p>
                </div>
                <div className="col-sm-4">
                  <p className="mb-0 text-muted">Sales Revenue</p>
                  <h5 className="d-inline-block survey-value mb-0"> $2,45,500 </h5>
                  <p className="d-inline-block text-danger mb-0"> last 8 months </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-xl-8 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body px-0 overflow-auto">
              <h4 className="card-title pl-4">Purchase History</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead className="bg-light">
                    <tr>
                      <th>Customer</th>
                      <th>Project</th>
                      <th>Invoice</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/faces/face1.jpg" alt="image" />
                          <div className="table-user-name ml-3">
                            <p className="mb-0 font-weight-medium"> Cecelia Cooper </p>
                            <small> Payment on hold</small>
                          </div>
                        </div>
                      </td>
                      <td>Angular Admin</td>
                      <td>
                        <div className="badge badge-inverse-success"> Completed </div>
                      </td>
                      <td>$ 77.99</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/faces/face10.jpg" alt="image" />
                          <div className="table-user-name ml-3">
                            <p className="mb-0 font-weight-medium"> Victor Watkins </p>
                            <small>Email verified</small>
                          </div>
                        </div>
                      </td>
                      <td>Angular Admin</td>
                      <td>
                        <div className="badge badge-inverse-success"> Completed </div>
                      </td>
                      <td>$245.30</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/faces/face11.jpg" alt="image" />
                          <div className="table-user-name ml-3">
                            <p className="mb-0 font-weight-medium"> Ada Burgess </p>
                            <small>Email verified</small>
                          </div>
                        </div>
                      </td>
                      <td>One page html</td>
                      <td>
                        <div className="badge badge-inverse-danger"> Completed </div>
                      </td>
                      <td>$ 160.25</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/faces/face13.jpg" alt="image" />
                          <div className="table-user-name ml-3">
                            <p className="mb-0 font-weight-medium"> Dollie Lynch </p>
                            <small>Email verified</small>
                          </div>
                        </div>
                      </td>
                      <td>Wordpress</td>
                      <td>
                        <div className="badge badge-inverse-success"> Declined </div>
                      </td>
                      <td>$ 123.21</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/faces/face16.jpg" alt="image" />
                          <div className="table-user-name ml-3">
                            <p className="mb-0 font-weight-medium"> Harry Holloway </p>
                            <small>Payment on process</small>
                          </div>
                        </div>
                      </td>
                      <td>VueJs Application</td>
                      <td>
                        <div className="badge badge-inverse-danger"> Declined </div>
                      </td>
                      <td>$ 150.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a className="text-black mt-3 d-block pl-4" href="#">
                <span className="font-weight-medium h6">View all order history</span>
                <i className="mdi mdi-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="card-title font-weight-medium"> Business Survey </div>
              <p className="text-muted"> Lorem ipsum dolor sitadipiscing elit, sed amet do eiusmod tempor we find a new solution </p>
              <div className="d-flex flex-wrap border-bottom py-2 border-top justify-content-between">
                <img className="survey-img mb-lg-3" src="/assets/images/dashboard/img_3.jpg" alt="" />
                <div className="pt-2">
                  <h5 className="mb-0">Villa called Archagel</h5>
                  <p className="mb-0 text-muted">St, San Diego, CA</p>
                  <h5 className="mb-0">$600/mo</h5>
                </div>
              </div>
              <div className="d-flex flex-wrap border-bottom py-2 justify-content-between">
                <img className="survey-img mb-lg-3" src="/assets/images/dashboard/img_1.jpg" alt="" />
                <div className="pt-2">
                  <h5 className="mb-0">Luxury villa in Hermo</h5>
                  <p className="mb-0 text-muted">Glendale, CA</p>
                  <h5 className="mb-0">$900/mo</h5>
                </div>
              </div>
              <div className="d-flex flex-wrap border-bottom py-2 justify-content-between">
                <img className="survey-img mb-lg-3" src="/assets/images/dashboard/img_2.jpg" alt="" />
                <div className="pt-2">
                  <h5 className="mb-0">House on the Clarita</h5>
                  <p className="mb-0 text-muted">Business Survey</p>
                  <h5 className="mb-0">$459/mo</h5>
                </div>
              </div>
              <a className="text-black mt-3 d-block font-weight-medium h6" href="#">View all <i className="mdi mdi-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <div className="col-xl-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-black">To do Task List</h4>
              <p className="text-muted">Created by anonymous</p>
              <div className="list-wrapper">
                <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" /> Meeting with Alisa </label>
                      <span className="list-time">4 Hours Ago</span>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" /> Create invoice </label>
                      <span className="list-time">6 Hours Ago</span>
                    </div>
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" checked /> Prepare for presentation </label>
                      <span className="list-time">2 Hours Ago</span>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" /> Pick up kids from school </label>
                      <span className="list-time">8 Hours Ago</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="add-items d-flex flex-wrap flex-sm-nowrap">
                <input type="text" className="form-control todo-list-input flex-grow" placeholder="Add task name" />
                <button className="add btn btn-primary font-weight-regular text-nowrap" id="add-task"> Add Task </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-black">Recent Customers</h4>
              <p className="text-muted">All contacts</p>
              <div className="row pt-2 pb-1">
                <div className="col-12 col-sm-7">
                  <div className="row">
                    <div className="col-4 col-md-4">
                      <img className="customer-img" src="/assets/images/faces/face22.jpg" alt="" />
                    </div>
                    <div className="col-8 col-md-8 p-sm-0">
                      <h6 className="mb-0">Cecelia Cooper</h6>
                      <p className="text-muted font-12">05:58AM</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 pl-0">
                  <canvas id="areaChart1"></canvas>
                </div>
              </div>
              <div className="row py-1">
                <div className="col-sm-7">
                  <div className="row">
                    <div className="col-4 col-sm-4">
                      <img className="customer-img" src="/assets/images/faces/face25.jpg" alt="" />
                    </div>
                    <div className="col-8 col-sm-8 p-sm-0">
                      <h6 className="mb-0">Victor Watkins</h6>
                      <p className="text-muted font-12">05:28AM</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 pl-0">
                  <canvas id="areaChart2"></canvas>
                </div>
              </div>
              <div className="row py-1">
                <div className="col-sm-7">
                  <div className="row">
                    <div className="col-4 col-sm-4">
                      <img className="customer-img" src="/assets/images/faces/face15.jpg" alt="" />
                    </div>
                    <div className="col-8 col-sm-8 p-sm-0">
                      <h6 className="mb-0">Ada Burgess</h6>
                      <p className="text-muted font-12">05:57AM</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 pl-0">
                  <canvas id="areaChart3"></canvas>
                </div>
              </div>
              <div className="row py-1">
                <div className="col-sm-7">
                  <div className="row">
                    <div className="col-4 col-sm-4">
                      <img className="customer-img" src="/assets/images/faces/face5.jpg" alt="" />
                    </div>
                    <div className="col-8 col-sm-8 p-sm-0">
                      <h6 className="mb-0">Dollie Lynch</h6>
                      <p className="text-muted font-12">05:59AM</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 pl-0">
                  <canvas id="areaChart4"></canvas>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="row">
                    <div className="col-4 col-sm-4">
                      <img className="customer-img" src="/assets/images/faces/face2.jpg" alt="" />
                    </div>
                    <div className="col-8 col-sm-8 p-sm-0">
                      <h6 className="mb-0">Harry Holloway</h6>
                      <p className="text-muted font-12 mb-0">05:13AM</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 pl-0">
                  <canvas id="areaChart5" height="100"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-black">Business Survey</h4>
              <p className="text-muted pb-2">Jan 01 2019 - Dec 31 2019</p>
              <canvas id="surveyBar"></canvas>
              <div className="row border-bottom pb-3 pt-4 align-items-center mx-0">
                <div className="col-sm-9 pl-0">
                  <div className="d-flex">
                    <img src="/assets/images/dashboard/img_4.jpg" alt="" />
                    <div className="pl-2">
                      <h6 className="m-0">Red Chair</h6>
                      <p className="m-0">Home Decoration</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 pl-0 pl-sm-3">
                  <div className="badge badge-inverse-success mt-3 mt-sm-0"> +7.7% </div>
                </div>
              </div>
              <div className="row py-3 align-items-center mx-0">
                <div className="col-sm-9 pl-0">
                  <div className="d-flex">
                    <img src="/assets/images/dashboard/img_5.jpg" alt="" />
                    <div className="pl-2">
                      <h6 className="m-0">Gray Sofa</h6>
                      <p className="m-0">Home Decoration</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 pl-0 pl-sm-3">
                  <div className="badge badge-inverse-success mt-3 mt-sm-0"> +7.7% </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
     
    </div>
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard template</a> from Bootstrapdash.com</span>
      </div>
    </footer>
  </div>
  )
}
