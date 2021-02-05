import React from 'react';
import styled from "styled-components";

class CreatePotluck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:'',
      time:'',
      locationName: '',
      locationStreet: '',
      locationAddress: 0,
      locationUnit: '',
      locationState: '',
      locationCity: '',
      locationCountry: '',
      locationPostcode: ''
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,

      [e.target.name]: e.target.value
    });
  };

  onCancel = _ => {
    this.props.history.push('/protected/potlucks');
  };

  render() {
    return (
      <FormContainer>
      <div className='create-potluck-container'>
        <Form className='potluck-form'
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <h2>Add Your Event!</h2>
          <div><Label>Event Name:</Label>
          <Input className='potluck-inputs'
            placeholder="Event name"
            name="locationName"
            onChange={this.onChange}
            value={this.state.locationName}
          /></div>
          <div><Label>Data:</Label>
          <Input className='potluck-inputs'
            placeholder="date"
            type='date'
            name="date"
            onChange={this.onChange}
            value={this.state.date}
          /></div>
          <div><Label>Time:</Label>
          <Input className='potluck-inputs'
            placeholder="time"
            type='time'
            name="time"
            onChange={this.onChange}
            value={this.state.time}
          /></div>
          <div><Label>Address Number:</Label>
          <Input className='potluck-inputs'
            placeholder="address number"
            name="locationAdress"
            onChange={this.onChange}
            value={this.state.locationAddress}
          /></div>
          <div><Label>Street:</Label>
          <Input className='potluck-inputs'
            placeholder="street"
            name="locationStreet"
            onChange={this.onChange}
            value={this.state.locationStreet}
          /></div>
          <div><Label>Unit:</Label>
          <Input className='potluck-inputs'
            placeholder="unit"
            name="locationUnit"
            onChange={this.onChange}
            value={this.state.locationUnit}
          /></div>
          <div><Label>City:</Label>
          <Input className='potluck-inputs'
            placeholder="city"
            name="locationCity"
            onChange={this.onChange}
            value={this.state.locationCity}
          /></div>
          <div><Label>Zip Code:</Label>
          <Input className='potluck-inputs'
            placeholder="zip code"
            name="locationPostcode"
            onChange={this.onChange}
            value={this.state.locationPostcode}
          /></div>
          <div><Label>State:</Label>
          <Input className='potluck-inputs'
            placeholder="state"
            name="locationState"
            onChange={this.onChange}
            value={this.state.locationState}
          /></div>
          <div><Label>Country:</Label>
          <Input className='potluck-inputs'
            placeholder="country"
            name="locationCountry"
            onChange={this.onChange}
            value={this.state.locationCountry}
          /></div>
          
          <div>
            <Button className='potluck-btn'
              onClick={e => {
                e.preventDefault();
                return this.props.addPotluck(this.state);
              }}
            >
              Submit
            </Button>
            <Button className='potluck-btn' onClick={this.onCancel}>Cancel</Button>
          </div>
        </Form>
      </div>
      </FormContainer>
    );
  }
}
export default CreatePotluck;

const FormContainer = styled.div`
border: 1px dashed black;
margin: auto;
width: 80%;
`;

const Form = styled.div`
top-border: 1px solid #00af91;
align-items: center;
width: 100%;
background-color: gold;
flex: no-wrap;
display: flex;
flex-direction: column;
`;
const Input = styled.input`
margin: 1rem;
font-size: 1rem;
`;
const Button = styled.button`
border: 1rem ridge #ffcc29;
color: #00af91;
font-weight: bold;
margin: 1rem;
`;
const Label = styled.label`
color: black;`


