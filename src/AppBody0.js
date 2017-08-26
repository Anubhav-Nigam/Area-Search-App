import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AppBodyCss.css';

var val;
var error_text='';

class AppBody extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      displaySearchResults:false,
      showErrorText:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e)
  {
    val=e.target.value;
  }

  handleSubmit()
  {
    if(/^[0-9]*$/.test(val) === true)
    {
      if(val.length === 6)
      {
        console.log(true);
        this.setState({showErrorText:false});
        error_text='';
        $.ajax({
          method: 'POST',
          url: MyVariables.baseUrl + '/delete-record',
          data: deleteRecordDetails,
          dataType: 'json',
          jsonp: false,
          success: function(response) {
            if (response.success === true) {
              return true;
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
        error_text="Pincode must have 6 digits";
      }
    }
    else
    {
      this.setState({showErrorText:true});
      error_text="Pincode must only have digits";
    }
    console.log(true);
  }

  render() {
    if(this.state.displaySearchResults===false)
    {
      return (
        <div>
          <p>To get the details, enter the pincode.</p>
          Enter the pincode here:<input type="text" placeholder="enter your pincode here..." onChange={this.handleChange}/>
          <input type="button" value="Get details" onClick={this.handleSubmit}/>
          <div id="error-div" className={"submit_error_div " + (this.state.showErrorText ? 'show-div':'')}>
            {error_text}
          </div>
        </div>
      );
    }
    else
    {
      return (
        <div>
          hi
        </div>
      );
    }
  }
}

export default AppBody;
