


`push()`	Adds new elements to the end of an array, and **returns the new length**
`pop()`	    Removes the last element of an array, and **returns that element**
`unshift()`	Adds new elements to the beginning of an array, and **returns the new length**
`shift()`	Removes the first element of an array, and **returns that element**
`concat()`	Joins arrays and returns an array with the joined arrays
`constructor`	Returns the function that created the Array object's prototype
`copyWithin()`	Copies array elements within the array, to and from specified positions
`entries()`	Returns a key/value pair Array Iteration Object
`every()`	Checks if every element in an array pass a test
`fill()`	Fill the elements in an array with a static value
`filter()`	Creates a new array with every element in an array that pass a test
`find()`	Returns the value of the first element in an array that pass a test
`findIndex()`	Returns the index of the first element in an array that pass a test
`forEach()`	Calls a function for each array element
`from()`	Creates an array from an object
`includes()`	Check if an array contains the specified element
`indexOf()`	Search the array for an element and returns its position
`isArray()`	Checks whether an object is an array
`join()`	Joins all elements of an array into a string
`keys()`	Returns a Array Iteration Object, containing the keys of the original array
`lastIndexOf()`	Search the array for an element, starting at the end, and returns its position
`length`	Sets or returns the number of elements in an array
`map()`	Creates a new array with the result of calling a function for each array element
`prototype`	Allows you to add properties and methods to an Array object
`reduce()`	Reduce the values of an array to a single value (going left-to-right)
`reduceRight()`	Reduce the values of an array to a single value (going right-to-left)
`reverse()`	Reverses the order of the elements in an array
`slice()`	Selects a part of an array, and returns the new array
`some()`	Checks if any of the elements in an array pass a test
`sort()`	Sorts the elements of an array
`splice()`	Adds/Removes elements from an array
`toString()`	Converts an array to a string, and returns the result
`valueOf()`	Returns the primitive value of an array





## Add/remove element from Array

### `push()`	

Adds new elements to the end of an array, and **returns the new length**

syntax :-
 ```js 
    push(element0)   // syntax
    push(element0, element1)   // syntax
    push(element0, element1, /* … ,*/ elementN)   // syntax



    const animals = ['pigs', 'goats', 'sheep'];
    const count = animals.push('cows');
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]

    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

### `pop()`	

Removes the last element of an array, and **returns that element**

### `shift()`	

Removes the first element of an array, and **returns that element**

### `unshift()`	

Adds new elements to the beginning of an array, and **returns the new length**

## Add two Array


# Object









element.addEventListener("EventName", (event) => {});

element.onEventName = (event) => {};







1. Events
Experimental - beforexrselect
Non-standard - afterscriptexecute
animationcancel
animationend
animationiteration
animationstart
auxclick
Experimental - beforematch
Non-standard - beforescriptexecute
blur
click
compositionend
compositionstart
compositionupdate
Experimental - contentvisibilityautostatechanged
contextmenu
copy
cut
dblclick
Deprecated - DOMActivate
Non-standard+Deprecated - DOMMouseScroll
error
focus
focusin
focusout
fullscreenchange
fullscreenerror
Non-standard - gesturechange
Non-standard - gestureend
Non-standard - gesturestart
gotpointercapture
keydown
Deprecated - keypress
keyup
lostpointercapture
mousedown
mouseenter
mouseleave
mousemove
mouseout
mouseover
mouseup
Non-standard+Deprecated - mousewheel
Non-standard+Deprecated - MozMousePixelScroll
Non-standard - msContentZoom
Non-standard - MSGestureChange
Non-standard - MSGestureEnd
Non-standard - MSGestureHold
Non-standard - MSGestureStart
Non-standard - MSGestureTap
Non-standard - MSInertiaStart
Non-standard - MSManipulationStateChanged
paste
pointercancel
pointerdown
pointerenter
pointerleave
pointermove
pointerout
pointerover
pointerup
scroll
securitypolicyviolation
Non-standard+Deprecated - show
touchcancel
touchend
touchmove
touchstart
transitioncancel
transitionend
transitionrun
transitionstart
Non-standard - webkitmouseforcechanged
Non-standard - webkitmouseforcedown
Non-standard - webkitmouseforceup
Non-standard - webkitmouseforcewillbegin
wheel











1. XRSessionEvent
beforexrselect

2. generic event
abort
afterprint
afterscriptexecute
beforeprint
beforeunload
beforematch 
beforescriptexecute 
canplay		
canplaythrough	
change
durationchange
error
fullscreenchange 
fullscreenerror 
input
invalid
load		
loadeddata	
loadedmetadata	
message
open
online
offline
pause			
play			
playing		
progress	
ratechange
reset
resize
submit
search
stalled
select
scroll 
seeked
seeking
show 
suspend
toggle
timeupdate
unload
waiting





3. Animation event
animationcancel 
animationend 
animationiteration 
animationstart 



4. Mouse event
auxclick 
click 
contextmenu 
dblclick 
DOMActivate 
DOMMouseScroll
mousedown  
mouseenter 
mouseleave
mousemove 
mouseout 
mouseover 
mouseup 
webkitmouseforcechanged 
mousewheel
wheel





5. Focus event
blur
focus 
focusin 
focusout 




6. Composition event
compositionend 
compositionstart 
compositionupdate 



7. CSS Containment
contentvisibilityautostatechanged 



8. clipboard event
copy 
cut 
paste





9. UI event 
error 
abort
beforunload
fullscreenchange
fullscreenerror
unload
scroll
select
load
resize
message
open



10. gesture event
gesturechange 
gestureend 
gesturestart





11. pointer event
gotpointercapture 
lostpointercapture 
pointercancel 
pointerdown 
pointerenter 
pointerleave 
pointermove 
pointerout 
pointerover 
pointerup 


12. keyboard event
keydown
keypress  
keyup 


13. wheel event
wheel 
mousewheel

14. security policy violation  event
securitypolicyviolation 

15. touch event
touchcancel 
touchend 
touchmove 
touchstart 

16.  Transition Event
transitioncancel 
transitionend 
transitionrun 
transitionstart 



17. printing event
afterprint
beforeprint





18. media event
canplay
canplaythrough
durationchange
ended
fullscreenchange
fullscreenerror
waiting
volumechange
timeupdate
suspend
stalled
seeking
seeked
load
loadeddata
loadedmetadata
loadstart
pause
play
playing
progress
ratechange






19. drag event
drag
dragend
dragenter
dragleave
dragover
dragstart
drop

20. progress event
error
loadstart

21. touch event
touchcancel
touchend
touchmove
touchstart



22.storage event
storage



23 from event
input
search
submit
reset
message

24. submit event
submit


25. hash change event
hashchange

26. input event
input


27 message wevent
message


28. Page Transition Event	
pagehide			
pageshow			



29.Pop State Event
popstate


30. browser event
online
offline

