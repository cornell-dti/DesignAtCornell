import googleCalIcon from '../static/images/google-cal-icon.svg';
import emailIcon from '../static/images/email-icon.svg';
import facebookIcon from '../static/images/facebook-icon.svg';
import zoomIcon from '../static/images/zoom-icon.svg';
import linkIcon from '../static/images/link-icon.svg';

type EventButton = {
  icon: string;
  name: string;
  color: string;
};

export const buttons: { [key: string]: EventButton } = {
  google: { icon: googleCalIcon, name: 'Add to Google Calendar', color: '#C9E1AA' },
  rsvp: { icon: emailIcon, name: 'RSVP', color: '#FFCBCB' },
  facebook: { icon: facebookIcon, name: 'Facebook Link', color: 'rgba(98, 43, 255, 0.25)' },
  zoom: { icon: zoomIcon, name: 'Zoom Link', color: '#AED8F7' },
  eventLink: { icon: linkIcon, name: 'Event Link', color: '#FFC0FC' },
};
