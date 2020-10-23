import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if(loading) return <h5>loading...</h5>;
  if(error) console.log(error);

  return (
    <Fragment>
      <h1>Launches</h1>
      <MissionKey />
      {data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch}/>
      ))}
    </Fragment>
  )
}

export default Launches
