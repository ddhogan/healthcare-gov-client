import React from 'react';
import State from './State';

const StatesList = (props) => {
  const statesList = props.states.map(USstate => {
    return (
      <div>
        <State title={USstate.title} url={USstate.url} />
      </div>
    )
  });

  return (
    <ul className="statesList">
        {statesList}
    </ul>
  );
}

export default StatesList;