module.exports = () => {
    const today = new Date();
    const USToday = today.toLocaleDateString('en-US');
    const fullYear = today.getFullYear();
    const twoDigitYear = today.toLocaleDateString('en', {year: '2-digit'});
    const twoDigitMonth = today.toLocaleDateString('en', {month: '2-digit'});
    const twoDigitDay = today.toLocaleDateString('en', {day: '2-digit'});
    const twoDigit = {
        year: twoDigitYear,
        month: twoDigitMonth,
        day: twoDigitDay,
        today: {
            
        }
    }
    const today2DigitDD_MM_YY = [twoDigit.day, twoDigit.month, twoDigit.year].join("-");
    const today2DigitDD_MM_YYNonSeparated = removeDashSymbols(today2DigitDD_MM_YY);
    const today2DigitYY_MM_DD = [twoDigit.year, twoDigit.month, twoDigit.day].join("-");
    const today2DigitYY_MM_DDNonSeparated = removeDashSymbols(today2DigitYY_MM_DD);
    const today2DigitMM_DD_YY = [twoDigit.month, twoDigit.day, twoDigit.year].join("-");
    const today2DigitMM_DD_YYNonSeparated = removeDashSymbols(today2DigitMM_DD_YY);
    const todayStrings = {
        US: USToday,
            twoDigit: {
                DD_MM_YY: today2DigitDD_MM_YY,
                YY_MM_DD: today2DigitYY_MM_DD,
                MM_DD_YY: today2DigitMM_DD_YY
            },
            twoDigitNonSeparated: {
                DD_MM_YY: today2DigitDD_MM_YYNonSeparated,
                YY_MM_DD: today2DigitYY_MM_DDNonSeparated,
                MM_DD_YY: today2DigitMM_DD_YYNonSeparated
            }
    }
    twoDigit.today = {...todayStrings}
    const UTCHours = today.getUTCHours();
    const UTCMinutes = today.getUTCMinutes();
    const UTCStringToday = today.toUTCString();
    const UTCTime = `${UTCHours}-${UTCMinutes}`;
    const time2DigitDD_MM_YY_HH_mm = `${today2DigitDD_MM_YY}-${UTCTime}`;
    const time2DigitDD_MM_YY_HH_mmNonSeparated = removeDashSymbols(time2DigitDD_MM_YY_HH_mm);
    const time2DigitYY_MM_DD_HH_mm = `${today2DigitYY_MM_DD}-${UTCTime}`;
    const time2DigitYY_MM_DD_HH_mmNonSparated = removeDashSymbols(time2DigitYY_MM_DD_HH_mm);
    const UTC = {
        hours: UTCHours,
        minutes: UTCMinutes,
        today: UTCStringToday,
        time: UTCTime
    }
    const year = {
        full: fullYear,
        twoDigit: twoDigitYear
    }
    const fullTimes = {
        twoDigit: {
            DD_MM_YY_HH_mm: time2DigitDD_MM_YY_HH_mm,
            YY_MM_DD_HH_mm: time2DigitYY_MM_DD_HH_mm
        },
        twoDigitNonSeparated: {
            DD_MM_YY_HH_mm: time2DigitDD_MM_YY_HH_mmNonSeparated,
            YY_MM_DD_HH_mm: time2DigitYY_MM_DD_HH_mmNonSparated
        }
    }
    const timeStamp = today.getTime();
    const timeStampInSec = Math.floor(timeStamp / 1000);

    const timeStampStrings = {
        milliseconds: timeStamp,
        seconds: timeStampInSec
    }

    const GMTTimes = getAllGMTTimes({UTCToday: UTCStringToday});
    

    return {
        year,
        today: todayStrings,
        twoDigit,
        UTC,
        timeStamp: timeStampStrings,
        GMT: GMTTimes,
        day: twoDigitDay,
        hour: UTCHours,
        minute: UTCMinutes,
        fullTime: fullTimes
    }

}

const getGMTTime = ({sign, hours, UTCToday}) => {
    hours = (hours < 10) ? `0${hours}` : hours;
    const signReverted = (sign == "-") ? "+" : "-";
    const todayGMTManipulated = UTCToday.replace(/GMT/, `"GMT${signReverted}${hours}:00"`);
    const dateOfTodayGMTManipulated = new Date(todayGMTManipulated);

    return dateOfTodayGMTManipulated;
}

const signs = ["-", "+"];
const getAllGMTTimes = ({UTCToday}) => {
    let GMTTimes = {};
    for (let i = 0; i <= 12; i++){
        const hours = i;
        signs.forEach(sign=>{
            const GMTTime = getGMTTime({sign, hours, UTCToday});
            GMTTimes[`GMT${sign}${hours}`] = GMTTime;
        })
    }

    return GMTTimes;
}

const removeDashSymbols = (string) => string.replace(/\-/g, "");