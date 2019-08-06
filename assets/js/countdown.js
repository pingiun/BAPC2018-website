/**
 * countdown.js
 * A simple countdown script to save your sanity
 * @author Leonard Teo, Ballistiq Digital Inc.
 * 
 * Copyright (C) 2012 Ballistiq Digital Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Declare the countdown object
// Constructor. target_date and current_date are Javascript Date objects
function Countdown(target_date, current_date) {
	this.target_date = target_date;
	this.current_date = current_date;
}

// Countdown code
// You must pass a callback function in
Countdown.prototype.countdown = function(callback) {

	var difference = this.target_date.getTime() - this.current_date.getTime();
	
	var runNext = (difference > 0) ? true : false;

	if (runNext) {
		//Calculate number of days
		var days = Math.floor( difference / (1000 * 60 * 60 * 24) ); 

		//Calculate number of hours
		difference = difference - (days * 1000 * 60 * 60 * 24);
		var hours = Math.floor( difference / (1000 * 60 * 60) ); 	

		//Calculate number of minutes
		difference = difference - (hours * 1000 * 60 * 60);
		var minutes = Math.floor( difference / (1000 * 60) ); 

		//Calculate number of seconds
		difference = difference - (minutes * 1000 * 60);
		var seconds = Math.floor( difference / 1000 );

		var differenceObject = {
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	} else {
		var differenceObject = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}
	
	// Fire the callback function user is passing in
	callback(differenceObject);

	// If there is more to countdown to, set up the next run
	if (runNext) {

		//Set up the next countdown by setting a new date object with 1 second off	
		this.current_date = new Date( this.current_date.getTime() + 1000 );

		// Wonky Javascript quirk to run setTimeout within the object
		// http://stackoverflow.com/questions/1101668/how-to-use-settimeout-to-invoke-object-itself
		var _this = this;
		setTimeout(function() { _this.countdown(callback) }, 1000);
	}
	
	
}
