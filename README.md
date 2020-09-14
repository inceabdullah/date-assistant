## date-assistant

### Installing
`npm i date-assistant`

### What is it?
Helpful tool for getting date with certain formats for node.JS.

### Use
```Javascript
const getTimes = require('date-assistant');
const times = getTimes();
console.log({times});
```

#### Result
```Javascript
{
  times: {
    year: {
        full: 2020,
        twoDigit: '20'
        },
    today: {
    US: '9/14/2020',
    twoDigit: {
        DD_MM_YY: '14-09-20',
        YY_MM_DD: '20-09-14',
        MM_DD_YY: '09-14-20'
        },
    twoDigitNonSeparated: {
        DD_MM_YY: '140920',
        YY_MM_DD: '200914',
        MM_DD_YY: '091420'
        }
},
    twoDigit: {
        year: '20',
        month: '09',
        day: '14',
        today: {
            US: '9/14/2020',
            twoDigit: {
                DD_MM_YY: '14-09-20',
                YY_MM_DD: '20-09-14',
                MM_DD_YY: '09-14-20'
                },
            twoDigitNonSeparated: {
                DD_MM_YY: '140920',
                YY_MM_DD: '200914',
                MM_DD_YY: '091420'
                }
} },
    UTC: {
      hours: 9,
      minutes: 13,
      today: 'Mon, 14 Sep 2020 09:13:56 GMT',
      time: '9-13'
    },
    timeStamp: {
        milliseconds: 1600074836575,
        seconds: 1600074836
        },
    GMT: {
      'GMT-0': 2020-09-14T09:13:56.000Z,
      'GMT+0': 2020-09-14T09:13:56.000Z,
      'GMT-1': 2020-09-14T08:13:56.000Z,
      'GMT+1': 2020-09-14T10:13:56.000Z,
      'GMT-2': 2020-09-14T07:13:56.000Z,
      'GMT+2': 2020-09-14T11:13:56.000Z,
      'GMT-3': 2020-09-14T06:13:56.000Z,
      'GMT+3': 2020-09-14T12:13:56.000Z,
      'GMT-4': 2020-09-14T05:13:56.000Z,
      'GMT+4': 2020-09-14T13:13:56.000Z,
      'GMT-5': 2020-09-14T04:13:56.000Z,
      'GMT+5': 2020-09-14T14:13:56.000Z,
      'GMT-6': 2020-09-14T03:13:56.000Z,
      'GMT+6': 2020-09-14T15:13:56.000Z,
      'GMT-7': 2020-09-14T02:13:56.000Z,
      'GMT+7': 2020-09-14T16:13:56.000Z,
      'GMT-8': 2020-09-14T01:13:56.000Z,
      'GMT+8': 2020-09-14T17:13:56.000Z,
      'GMT-9': 2020-09-14T00:13:56.000Z,
      'GMT+9': 2020-09-14T18:13:56.000Z,
      'GMT-10': 2020-09-13T23:13:56.000Z,
      'GMT+10': 2020-09-14T19:13:56.000Z,
      'GMT-11': 2020-09-13T22:13:56.000Z,
      'GMT+11': 2020-09-14T20:13:56.000Z,
      'GMT-12': 2020-09-13T21:13:56.000Z,
      'GMT+12': 2020-09-14T21:13:56.000Z
    },
    day: '14',
    hour: 9,
    minute: 13,
    fullTime: {
        twoDigit: {
            DD_MM_YY_HH_mm: '14-09-20-9-13',
            YY_MM_DD_HH_mm: '20-09-14-9-13'
            },
        twoDigitNonSeparated: {
            DD_MM_YY_HH_mm: '140920913',
            YY_MM_DD_HH_mm: '200914913'
            }
}
  }
}
```