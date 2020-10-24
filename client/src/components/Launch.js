import React from 'react';
import { gql, useQuery } from '@apollo/client';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;


const Launch = (props) => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });
  if(loading) return (
    <p>loading...</p>
  ) 
  if(error) console.log(error);

  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket: {
      rocket_id,
      rocket_name,
      rocket_type}
  } = data.launch;

  console.log(data.launch)

  return (
    <div>
      <h1 className="display-5 my-3">Mission: {mission_name}</h1>

      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">
          Flight Number: {flight_number}
        </li>
        <li className="list-group-item">
          Launch Year: {launch_year}
        </li>
        <li className="list-group-item">
          Launch Date: <Moment format="MM-DD-YY HH:mm">{ launch_date_local }</Moment>
        </li>
        <li className="list-group-item">
          Launch Successful: <span className={classNames({
            'text-success': launch_success,
            'text-dance': !launch_success
          })}>{launch_success ? 'YES' : 'NO'}</span>
        </li>
      </ul>

      <h4 className="mb-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">
          Rocket ID: {rocket_id}
        </li>
        <li className="list-group-item">
          Rocket Name: {rocket_name}
        </li>
        <li className="list-group-item">
          Rocket Type: {rocket_type}
        </li>
      </ul>
      <hr/>
      <Link to="/" className='btn btn-secondary'>BACK</Link>
    </div>
  )
}

export default Launch;
