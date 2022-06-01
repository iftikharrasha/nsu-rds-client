import { useEffect, useState } from 'react'; 
import moment from 'moment';

const useTimer = () => {
    const now = moment();
    const [time, setTime] = useState(now);
    
    const end = moment('2022-06-31T00:00:00.000Z');

    const duration = moment.duration(end.diff(now));
    let days = duration.days();
    duration.subtract(days, 'days');

    let hours = duration.hours();
    duration.subtract(hours, 'hours');

    let minutes = duration.minutes();
    duration.subtract(minutes, 'minutes');

    let seconds = duration.seconds();
    duration.subtract(seconds, 'seconds');

    let milliseconds = duration.milliseconds();
    duration.subtract(milliseconds, 'miliseconds');

    // console.log("days", "hours", "minutes", "seconds" , "milliseconds", days, hours, minutes, seconds, milliseconds);

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    const timeTotal = days + hours + minutes + seconds;


    const createdDate = moment('2022-05-01T00:00:00.000Z'); 
    // const endingDate = moment('2022-06-10T15:31:56.117');
    // const toDate = moment('2022-06-09T15:31:56.117');
    const percentLeft = Math.round(100 * end.diff(now)/end.diff(createdDate));
    const percentage = 100 - percentLeft;


    return {
        time,
        days,
        hours,
        minutes,
        seconds,
        timeTotal,
        percentage
    }
};

export default useTimer;