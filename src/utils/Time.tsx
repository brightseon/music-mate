import Axios from "axios";
import { DURATION_URL } from "../../api";

let totalDuration : number = 0;
const SECOND : number = 60,
    TYPE_H : string = 'H',
    TYPE_M : string = 'M',
    TYPE_S : string = 'S';
const TIME_SEQUENCE : string[] = [TYPE_H, TYPE_M, TYPE_S];

type TYPES = typeof TYPE_H | typeof TYPE_M | typeof TYPE_S;

const setTotalDuration = (time : number, type : TYPES) => {
    switch(type) {
        case TYPE_H :
            totalDuration += time * SECOND * SECOND;
            break;

        case TYPE_M :
            totalDuration += time * SECOND;
            break;

        case TYPE_S : 
            totalDuration += time;
            break;
    }
};

export const makeTimeFormat = (time : number | string) => {
    const strTime = typeof time === 'number' ? time.toString() : time;

    return strTime.length < 2 ? `0${ strTime }` : strTime;
};

const sliceTime = (time : string, index : number, type : TYPES) => {
    let start = 0;

    if(type === TYPE_M) start = getIndex(time, TYPE_H) + 1;
    else if(type === TYPE_S) start = getIndex(time, TYPE_M) + 1;

    const sliceTime = time.slice(start, index);
    setTotalDuration(parseInt(sliceTime), type);

    return `${ makeTimeFormat(sliceTime) }${ type === TYPE_S ? '' : ':' }`;
};

export const getTotalDuration = () : number => {
    return totalDuration;
};

const getIndex = (str : string, type : TYPES) => {
    return str.indexOf(type);
};

export const makeTotalDuration = (currentDuration : string) : string => {
    let time = '';
    const replaceDuration = currentDuration.replace('PT', '');

    TIME_SEQUENCE.forEach(timeType => {
        const index = getIndex(replaceDuration, timeType);

        if(index >= 0) {
            time += sliceTime(replaceDuration, index, timeType);
        }
    });

    return time;
};

export const getDuration = async (id : string) : Promise<string> => {
    try {
        const { data : { items } } : any = await Axios.get(`${ DURATION_URL }${ id }`);
        const duration = items[0].contentDetails.duration;
        
        return duration;
    } catch(err) {
        console.log('Time.tsx getDuration error : ', err);
    }
};