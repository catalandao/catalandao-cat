import moment from 'moment-timezone';
import { useEffect, useState } from 'react';

const tz = moment.tz.guess();

export const useTicker = (until: string): string => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const intervalID = setInterval(() => {
      const end = moment(until).tz(tz);
      setMessage(moment(end.diff(moment().tz(tz))).format('HH mm\' ss"'));
    }, 1000);
    return () => clearInterval(intervalID);
  }, [until]);
  return message;
};

export function getCurrent(): number {
  const now = moment().tz(tz);
  if (now.hours() < 13) {
    return now.date() - 1;
  }
  return now.date();
}
