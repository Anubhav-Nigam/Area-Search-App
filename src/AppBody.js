import React, { Component } from 'react';
import './AppBodyCss.css';
import $ from 'jquery';

var val='';
var error_text='';

var message='';
var postOffices=[];
var printData;

class AppBody extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      displaySearchResults:false,
      showErrorText:false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleInputChange(e)
  {
    val=e.target.value;
  }

  handleSubmit()
  {
    if(val === '')
    {
      error_text="Please enter your pincode";
      this.setState({showErrorText:true});
      setTimeout(function() {
        this.setState({showErrorText:false});
      }.bind(this), 1500)
    }
    else
    {
      if(/^[0-9]*$/.test(val) === true)
      {
        if(val.length === 6)
        {
          console.log(true);
          this.setState({showErrorText:false});
          error_text='';
          $.ajax({
            method: 'GET',
            url: "https://api.postalpincode.in/pincode/" +val,
            dataType: 'json',
            jsonp: false,
            success: function(response) {
              console.log(response);
              if (response[0].Status === 'Success') {
                message=response[0].Message;
                postOffices=response[0].PostOffice;
                printData=postOffices.map((option, index) => {
                  return(
                        <div key={index}>
                          <div className="row container-fluid">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-body">{option.District}</div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-body">{option.Division}</div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-body">{option.Name}</div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-body">{option.State}</div>
                          </div>
                          <hr />
                        </div>
                  )
                })
                this.setState({displaySearchResults:true});
              }
              else if (response[0].Status === 'Error') {
                error_text=response[0].Message;
                this.setState({showErrorText:true});
                setTimeout(function() {
                  this.setState({showErrorText:false});
                }.bind(this), 1500)
              }
            }.bind(this),
            error: function() {
              console.log('There is a problem with server');
            }
          });
        }
        else
        {
          this.setState({showErrorText:true});
          error_text="Pincode must be of 6 digits";
          setTimeout(function() {
            this.setState({showErrorText:false});
          }.bind(this), 1500)
        }
      }
      else
      {
        this.setState({showErrorText:true});
        error_text="Pincode must have digits only";
        setTimeout(function() {
          this.setState({showErrorText:false});
        }.bind(this), 1500)
      }
    }
  }

  handleGoBack()
  {
    this.setState({displaySearchResults:false});
  }

  render() {
    if(this.state.displaySearchResults===false)
    {
      return (
        <div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 area-search-app-body-enter-details">
            <p>To get the area details, enter the pincode.</p>
            Enter the pincode here: <input type="text" placeholder="Enter your pincode here..." onChange={this.handleInputChange}/>
            <input type="button" value="Get details" onClick={this.handleSubmit}/>
            <div id="error-div" className={"submit_error_div " + (this.state.showErrorText ? 'show-div':'')}>
              {error_text}
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          </div>
        </div>
      );
    }
    else
    {
      return (
        <div>
          <div className="display_response_message">
            {message}
            <hr />
          </div>
          <div>
            <div className="row container-fluid">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-headings">District</div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-headings">Division</div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-headings">Name</div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 table-headings">State</div>
            </div>
            <hr />
            {printData}
          </div>
          <input className="go_back_button" type="button" value="Go back" onClick={this.handleGoBack}/>
        </div>
      );
    }
  }
}

export default AppBody;
