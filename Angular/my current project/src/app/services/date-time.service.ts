/*******************************************************************************
 * 
 * This is a utility service that handles all the date and time formatting task 
 * using Day.js.
 * 
 ******************************************************************************/
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as utc from 'dayjs/plugin/utc';
import * as duration from 'dayjs/plugin/duration';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }
  dateFormats = {
    longDateTime: "MMM D, YYYY h:mm:ss A",
    fullDate: "MMM D, YYYY",
    timeWithoutSec: "h:mm A"
  }

  getFullDateTime(date: string, format: string){
    if(date !== "" || date !== null){
      dayjs.extend(utc);
      return dayjs(date).utc(true).local().format(format);
    } else {
      return 'NA'
    }
  }

  getFromNow(date: string, isUtc?:boolean){
    if(date !== "" || date !== null){
      dayjs.extend(relativeTime);
      dayjs.extend(utc);
      // dayjs does not support 2022-07-08T07:52:59.300281 format.
      // replace decimal part with "Z"
      // if(date.split(".").length>1){
      //   date=date.split(".")[0]+"Z"
      // }
      if(!date.includes("Z")){
        date += "Z";
      }
      let dtObj = dayjs(date)
      if(isUtc){
        return dtObj.fromNow(true);
      }
      return dtObj.utc(true).fromNow(true);
    } else {
      return 'NA';
    }
  }

  getFormattedDateTime(date: string, format: string, isUtc?: boolean){
    if(date !== "" || date !== null){
      dayjs.extend(utc);
      if(isUtc&&!date.includes("Z")){
        date += "Z";
      }

      // by default we assume input is in UTC.
      // pass false to utc only if isUtc is specified false
      return dayjs(date).utc(isUtc===false?false:true).format(format);
    } else {
      return 'NA';
    }
  }

  getDatestampFromUnixStamp(unixstamp: number, isUtc?: boolean){
    return dayjs(unixstamp).toJSON();
  }

  getDurationFromMs(timeDuration: number){
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
    const durationObj = dayjs.duration(timeDuration, "milliseconds");
    let timeStr = "";
    if(durationObj.get('year') > 0) {
      timeStr += durationObj.get('year') + "y"
    }
    if(durationObj.get('month') > 0) {
      timeStr += " " + durationObj.get('month') + "m"
    }
    if(durationObj.get('day') > 0) {
      timeStr += " " + durationObj.get('day') + "d"
    }
    if(durationObj.get('hour') > 0) {
      timeStr += " " + durationObj.get('hour') + "h"
    }
    if(durationObj.get('minute') > 0) {
      timeStr += " " + durationObj.get('minute') + "m"
    }
    if(durationObj.get('second') > 0) {
      timeStr += " " + durationObj.get('second') + "s"
    }
    if(durationObj.get('millisecond') > 0) {
      timeStr += " " + durationObj.get('millisecond').toPrecision(5) + "ms"
    }
    if(timeStr===""){
      timeStr = "0ms"
    }
    return timeStr;
  }

  getISOString(date: any) {
    dayjs.extend(utc);
    return dayjs(date).toJSON();
  } 

  getDurationObject(date: string, isUtc: boolean){
    dayjs.extend(duration);
    if(date !== "" || date !== null){
      dayjs.extend(utc);
      if(isUtc&&!date.includes("Z")){
        date += "Z";
      }

      // by default we assume input is in UTC.
      // pass false to utc only if isUtc is specified false
      const userDate = dayjs(date).utc(isUtc===false?false:true);
      const today = dayjs().utc(isUtc===false?false:true);
      return dayjs.duration(userDate.diff(today))
    } else {
      return null;
    }
  }

  isOldDate(date: string, isUtc?: boolean){
    if(!date) return;
    if(!date.includes("Z")){
      date += "Z";
    }
    const userDate = dayjs(date).utc(isUtc===false?false:true)
    const today = dayjs().utc(isUtc===false?false:true);
    return userDate.isBefore(today);
  }

  getDateDiff(date1: string, date2: string){
    if(!date1.includes("Z")){
      date1 += "Z";
    }
    if(!date2.includes("Z")){
      date2 += "Z";
    }
    return dayjs(date1).diff(dayjs(date2))
  }
}
