Question 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 
'getElementById' select and let perform operation on unique element.
'getElementsByClassName' select all the similar class. 
'querySelector' select the html element by first match css selector (like, id, class, tag etc)
'querySelectorAll' select all the similar css selector. 



Question 2. How do you **create and insert a new element into the DOM**?

Answer: 
const myVariable = document.createElement(Specific_HTML_Element_Name);
const parentElement = document.getElementByID(id);
parentElement.appendChild(myVariable);



Question 3. What is **Event Bubbling** and how does it work?

Answer: 
Event Bubbling: In JavaScript, event bubbling is a process where an event triggered on a nested HTMl element propagate or bubbles up through its parent and ancestor elements in the DOM heararchy, all the way the root of the document.

How does it work: 
  1. Event Trigger: An event, such as a click or key press, occurs on a specific HTML element (the target element);
  2. Target Phase: The event handler attached to the target element is executed first
  3. Bubbling Phase: The event then bubbles up through the dom tree, moving tho its target element to its immediate parent, then to its parent's parent, and so on.

Question 4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event delegation is a powerfull pattern in JavaScript that improve both the performance and maintainability of our code, especially when dealing with dynamic content or a large number of elements.

It is useful for:
  1. Improve performance and reduce memory use,
  2. Handle dynamic elements seamlessly,
  3. Let simplified and cleaner code,
  4. Centralized control

Question 5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: 
preventDefault(): stops the default behavior of an event, such as auto reload the page by form button clicking.
stopPropagation(): stops the event from bubbling up or propagating to parent elements.