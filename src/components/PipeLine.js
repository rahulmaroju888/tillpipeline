import React, { useEffect } from 'react';
import Axios from 'axios';    

    export default function PipeLine(props) {
     
      let job =props.job|| {};
    let {id,name,client,location,description,experience,pay_rate,created_on,updated_on}=job;

    
    
      
      return (
        <div>
          <div>
  <nav className="navbar navbar-expand navbar-dark bg-primary shadow-sm">
    <div className="container">
      <a className="navbar-brand m-0 h1" href="#">CATS Logo</a>
      <div className>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-inbox" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
              </svg>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarMessagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
            <div className="dropdown-menu animate slideIn" aria-labelledby="navbarMessagesDropdown">
              <a className="dropdown-item" href="#">Email</a>
              <a className="dropdown-item" href="#">Text Messages</a>
              <a className="dropdown-item" href="#">Messages</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="d-none d-sm-inline">Home</span>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
              </svg>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarProfileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-none d-sm-inline">Profile</span>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle font-lg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
              </svg>
            </a>
            <div className="dropdown-menu animate slideIn" aria-labelledby="navbarProfileDropdown">
              <a className="dropdown-item" href="#">Personal Info</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Page Content */}
  <div className="container py-4">
    <ol className="breadcrumb mb-4">
      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
      <li className="breadcrumb-item"><a href="HRMS_JobList.html">Jobs</a></li>
      <li className="breadcrumb-item"><a href="HRMS_JobForm.html">{name}</a></li>
      <li className="breadcrumb-item active">Pipeline</li>
    </ol>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="font-weight-normal mb-0">Pipeline Info</h4>
      <button type="button" className="btn btn-sm btn-primary" id="openSearchBtn" onclick="$(&quot;#jobSearch, #openSearchBtn, #closeSearchBtn&quot;).toggleClass(&quot;d-none&quot;);">
        Search Profiles<i className="fa fa-plus ml-2" aria-hidden="true" />
      </button>
      <button type="button" className="btn btn-sm btn-primary d-none" id="closeSearchBtn" onclick="$(&quot;#jobSearch, #openSearchBtn, #closeSearchBtn&quot;).toggleClass(&quot;d-none&quot;);">
        Search Profiles<i className="fa fa-minus ml-2" aria-hidden="true" />
      </button>
    </div>
    <div className="card shadow-sm">
      <div className="card-body">
        <div id="jobSearch" className="d-none">
          <h5 className="font-weight-normal mb-4">Search</h5>
          <form>
            <div className="form-row align-items-center">
              <div className="form-group input-icon col-md-6 col-lg-4">
                <label htmlFor className="sr-only">What</label>
                <span className="icon"><i className="fas fa-user fa-sm mr-2 text-primary" /></span>
                <input type="text" className="form-control" id placeholder="Job Name" />
              </div>
              <div className="form-group input-icon col-md-6 col-lg-4">
                <label htmlFor className="sr-only">Where</label>
                <span className="icon"><i className="fas fa-map-marker-alt fa-sm mr-2 text-primary" /></span>
                <input type="text" className="form-control" id placeholder="Location" />
              </div>
              <div className="form-group col-md-12 col-lg-4">
                <button type="button" className="btn btn-primary btn-sm">Search</button>
                <a href="#" className="ml-4" data-toggle="modal" data-target="#advancedSearchModal">Advanced Search</a>
              </div>
            </div>
          </form>
          <div className="d-flex flex-wrap">
            <div className="dropdown m-1">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
            <div className="dropdown m-1">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Slider Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <div className="px-3 py-2 small">
                  <div className="form-group mb-0">
                    <label htmlFor>Range</label>
                    <input type="range" className="form-control-range" id min={1} max={30} defaultValue={15} />
                    <div className=" mt-1 d-flex justify-content-between">
                      <div>0</div>
                      <div>30 Yrs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown m-1">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
            <div className="dropdown m-1">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
            <div className="dropdown m-1">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
            <div className="dropdown m-1">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div className="mb-3">
            <div className="h5 font-weight-normal">{name}</div>
            <div className="h6 font-weight-medium mb-1">Description</div>
            <div className="font-md">{description}</div>
          </div>
          <div id="showmoreDescription" className="d-none">
            <div className="font-md mb-3">
              <div className="font-weight-medium mb-1">Requirement</div>
              <div className>Lorem ipsum, or lipsum as it is sometimes known</div>
              <div className>Lorem ipsum, or lipsum as it is sometimes known</div>
            </div>
            <div className="font-md mb-3">
              <div className="font-weight-medium mb-1">More Requirement</div>
              <div className>Lorem ipsum, or lipsum as it is sometimes known</div>
              <div className>Lorem ipsum, or lipsum as it is sometimes known</div>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-flat btn-sm btn-flat-custom" id="moreBtn" onclick="$(&quot;#showmoreDescription, #moreBtn, #lessBtn&quot;).toggleClass(&quot;d-none&quot;);">
              See more<i className="fas fa-angle-double-right ml-2" />
            </button>
            <button type="button" className="btn btn-flat btn-sm btn-flat-custom d-none" id="lessBtn" onclick="$(&quot;#showmoreDescription, #moreBtn, #lessBtn&quot;).toggleClass(&quot;d-none&quot;);">
              <i className="fas fa-angle-double-left mr-2" />See less
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="h6 mb-1">Filters</div>
            <div className="mb-3">
              <div className="text-dark p-2">
                <div className>
                  <div className="mb-1 font-weight-medium">Filter 1</div>
                  <div className="ml-2 small">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id />
                      <label className="form-check-label mt-1" htmlFor>
                        Option 1
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id />
                      <label className="form-check-label mt-1" htmlFor>
                        Option 2
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id />
                      <label className="form-check-label mt-1" htmlFor>
                        Option 3
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mb-1 font-weight-medium">Filter 2</div>
                  <div className="ml-2 small">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id />
                      <label className="form-check-label mt-1" htmlFor>
                        Option 1
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id />
                      <label className="form-check-label mt-1" htmlFor>
                        Option 2
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mb-1 font-weight-medium">Range</div>
                  <div className="ml-2 small">
                    <div className="form-group">
                      <label htmlFor>Range</label>
                      <input type="range" className="form-control-range" id defaultValue={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {/*Panel*/}
            <div className="card shadow-sm mb-3">
              <div className="card-body text-dark p-3">
                <div className="row">
                  <div className="col-md-5">
                    <div className="mb-1"><i className="fas fa-user fa-sm mr-2" /><span className="h6">Jonas K</span></div>
                    <div className="small text-muted d-flex">
                      <div className>
                        <i className="fas fa-briefcase mr-2" />Consultant
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-building mr-2" />TCS
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-map-marker-alt mr-2" />Boston
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 border-right border-left">
                    <div className="d-flex small my-1">
                      <div className="mr-2 font-weight-600 text-nowrap">Skills :</div>
                      <div className>Python, R, Django, AI, ML</div>
                    </div>
                    <div className="small text-muted d-flex">
                      <div className>
                        <i className="fas fa-phone mr-2" />9999999999
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-envelope mr-2" />Jonas.K@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 pt-1">
                    <button type="button" className="btn btn-flat btn-floating btn-sm text-dark"><i className="fas fa-file-download" /></button>
                    <button type="button" className="btn btn-flat btn-floating btn-sm text-dark"><i className="fas fa-user-check" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/*/.Panel*/}
            {/*Panel*/}
            <div className="card shadow-sm mb-3">
              <div className="card-body text-dark p-3">
                <div className="row">
                  <div className="col-md-5">
                    <div className="mb-1"><i className="fas fa-user fa-sm mr-2" /><span className="h6">Jonas K</span></div>
                    <div className="small text-muted d-flex">
                      <div className>
                        <i className="fas fa-briefcase mr-2" />Consultant
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-building mr-2" />TCS
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-map-marker-alt mr-2" />Boston
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 border-right border-left">
                    <div className="d-flex small my-1">
                      <div className="mr-2 font-weight-600 text-nowrap">Skills :</div>
                      <div className>Python, R, Django, AI, ML</div>
                    </div>
                    <div className="small text-muted d-flex">
                      <div className>
                        <i className="fas fa-phone mr-2" />9999999999
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-envelope mr-2" />Jonas.K@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 pt-1">
                    <button type="button" className="btn btn-flat btn-floating btn-sm text-dark"><i className="fas fa-file-download" /></button>
                    <button type="button" className="btn btn-flat btn-floating btn-sm text-dark"><i className="fas fa-user-check" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/*/.Panel*/}
            {/*Panel*/}
            <div className="card shadow-sm mb-3">
              <div className="card-body text-dark p-3">
                <div className="row">
                  <div className="col-md-5">
                    <div className="mb-1"><i className="fas fa-user fa-sm mr-2" /><span className="h6">Jonas K</span></div>
                    <div className="small text-muted d-flex">
                      <div className>
                        <i className="fas fa-briefcase mr-2" />Consultant
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-building mr-2" />TCS
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-map-marker-alt mr-2" />Boston
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 border-right border-left">
                    <div className="d-flex small my-1">
                      <div className="mr-2 font-weight-600 text-nowrap">Skills :</div>
                      <div className>Python, R, Django, AI, ML</div>
                    </div>
                    <div className="small text-muted d-flex">
                      <div className>
                        <i className="fas fa-phone mr-2" />9999999999
                      </div>
                      <div className="border-left pl-2 ml-2">
                        <i className="fas fa-envelope mr-2" />Jonas.K@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 pt-1">
                    <button type="button" className="btn btn-flat btn-floating btn-sm text-dark"><i className="fas fa-file-download" /></button>
                    <button type="button" className="btn btn-flat btn-floating btn-sm text-dark"><i className="fas fa-user-check" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/*/.Panel*/}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="advancedSearchModal" tabIndex={-1} aria-labelledby="advancedSearchModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="advancedSearchModalLabel">Advanced Search</h5>
          <button className="btn close" type="button" data-dismiss="modal" aria-label="Close">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="media">
            <div className="media-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <label htmlFor>Job Name</label>
                    <input type="text" className="form-control" id />
                  </div>
                  <div className="form-group col-lg-6">
                    <label htmlFor>Location</label>
                    <input type="text" className="form-control" id />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <label htmlFor>Skills</label>
                    <input type="text" className="form-control" id />
                  </div>
                  <div className="form-group col-lg-6">
                    <label htmlFor>Experience</label>
                    <input type="text" className="form-control" id />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-flat btn-sm" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary btn-sm">Search</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      )
      }
    
