### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?
<!-- ans -->
1. getElementById To select a single unique element.
getElementsByClassName To select multiple elements with the same class.
querySelector To select the first element that matches the specified CSS selector (ID, Class, or Tag).
querySelectorAll To select all elements that match the specified CSS selector.

2.  A new HTML tag is created using the document.createElement() method.

Text, attributes, or styles are added to the new element.

The new element is inserted into the DOM using appendChild() or insertBefore().

3. Event Bubbling is the default mechanism in JavaScript where an event (like a click) that is triggered on a specific element first travels upward through the DOM (Document Object Model) hierarchy, affecting all of its parent elements until it reaches the root of the document (the window object).

How It Works..?
Target Phase: The event is first handled by the exact element where it originated (the target element).

Bubbling Phase: The event then immediately starts to "bubble up". If any of the element's parent or ancestor elements also have a listener for that same event, those listeners will execute sequentially, from the innermost element outwards


4. Event Delegation is the practice of assigning the responsibility of event handling for many child elements to a common parent element.

Benefit	Explanation
Memory Saving	Uses a single listener for thousands of elements.
Dynamic Support	Works immediately for newly created elements.
Increased Performance	Reduces the number of listeners in the DOM tree.

5. event.preventDefault()	Stops the browser's default action for the event.
	
event.stopPropagation()	Stops Event Propagation (Bubbling/Capturing).	