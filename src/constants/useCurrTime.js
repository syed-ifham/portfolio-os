import {useEffect, useState} from "react";

const useCurrTime = () => {
    const [currTime, setCurrTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrTime(new Date());
        },60_000);

        return ()=>clearInterval(timer);
    }, []);

    return currTime.toLocaleDateString("en-US",
        {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        }).replace(/,/g, "");
}

export {useCurrTime};