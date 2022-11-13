import React from 'react';
import { Settings } from '../../events/EventsStyles';
import { HomepageEventContainer } from '../external-elements-styles';
import { Event } from '../../../../server/src/types';
import time from '../../static/images/time.svg';

const HomepageEventDisplay = (event: Event) => (
  <HomepageEventContainer>
    <Settings>
      <p>
        {new Date(event.date).toLocaleString('en', {
          month: 'short',
          day: 'numeric',
        })}
      </p>
    </Settings>
    <h1>{event.title}</h1>
    <Settings>
      <img src={time} alt="time" />
      <p>
        {new Date(event.date).toLocaleString('en', {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </p>
    </Settings>
  </HomepageEventContainer>
);

export default HomepageEventDisplay;
