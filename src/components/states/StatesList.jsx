import React from 'react';
import State from './State';

const StatesList = (props) => {
  
  const sortedStates = props.states.sort(function(state1, state2) {
    if (state1.title > state2.title) {
      return 1;
    }
    if (state1.title < state2.title) {
      return -1;
    }
    return 0;
  });

  const statesList = sortedStates.map(USstate => {
    return (
      <div>
        <State title={USstate.title} url={USstate.url} lang={USstate.lang} />
      </div>
    )
  });

  return (
    <div className="statesList">
        {statesList}
    </div>
  );
}

export default StatesList;