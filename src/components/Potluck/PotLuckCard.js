import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { getPotlucks } from '../../actions/index';
import styled from "styled-components";

//#region Styled components
const CardDiv = Styled.div`
    background-color: green;
    width: 20rem;
    height: auto; 
    margin: 3rem 3rem 3rem 3rem;
`;
//#endregion

class PotluckCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

   click () {
    window.location.replace('/add-food');
  }

  render() {

    console.log(this.props.potlucks);
    if (this.props.potlucks === undefined) {
      return <div>You dont have any potlucks currently</div>;
    }
    return (
      <FormData>
        <h1>Your Potlucks</h1>
        <Form>
        <div>
          <h2>Yale Park</h2>
          <p>March 18, 2021</p>
          <p>1000 Yale St. Ave, Unit: 2</p>
          <p>South Yale, TX 78945</p>
          <h3>you need to bring:</h3>
          <ul>
            <li>chips</li>
            <li>salsa</li>
          </ul>
          <button>Can no longer attend</button><br />
          <button onClick={this.click}>Bring more food</button>
        </div>
        <div>
          <h2>Tara's Home</h2>
          <p>May 1, 2021</p>
          <p>1598 Something Drive Ave, Unit: 7</p>
          <p>Kingston, NY 46845</p>
          <h3>you need to bring:</h3>
          <ul>
            <li>ranch</li>
            <li>pasta</li>
            <li>cups</li>
          </ul>
          <button>Can no longer attend</button><br />
          <button onClick={this.click}>Bring more food</button>
        </div>
        </Form>
        {this.props.potlucks.map(potluck => {
          return (  
            <CardDiv>
              <h1>Yale Park{potluck.locationName}</h1>
              <adress>
                <h3>Location</h3>
                <p>
                  {potluck.locationAddress} {potluck.locationStreet} Unit:{' '}
                  {potluck.locationUnit}
                </p>
                <p>
                  {potluck.locationCity}, {potluck.locationState}{' '}
                  {potluck.locationCountry}
                </p>
              </adress>
            </CardDiv>
            
          );
        })}
      </FormData>
    );
  }
}

const mapStateToProps = state => ({
  potlucks: state.reducer.potlucks
});

const WithRouter = withRouter(PotluckCard)

export default connect(
  mapStateToProps,
  {}
)(PotluckCard);

const FormData = styled.div`
margin: 5% 30%;
width: 100%;
display: flex;
flex-direction: column;
align-item: center;
`
const Form = styled.div`
margin: 15px 0;
padding: 15px 0;
background-color:gold;
display: flex;
width: 50%;
flex-wrap: wrap;
align-content: center;
justify-content: space-evenly;
border: 1px solid black;
button {
  border: 1rem ridge #ffcc29;
  color: #00af91;
  font-weight: bold;
}
`
