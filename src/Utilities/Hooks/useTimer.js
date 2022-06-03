import { useEffect, useState } from 'react'; 
import moment from 'moment';

const useTimer = () => {
    const [mints, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        let duration = moment.duration({
            minutes: mints,
            seconds: seconds
        });
        const interval = setInterval(function(){
        // Time Out check
        if (duration.asSeconds() <= 1) {
            clearInterval(interval);
            // window.location.reload(true); //reload server
        }

        //Otherwise
        duration = moment.duration(duration.asSeconds() - 1, 'seconds');
        setMinutes(duration.minutes())
        setSeconds(duration.seconds())
        }, 1000);
    }, []);

    return {
        mints,
        seconds,
    }
};

export default useTimer;