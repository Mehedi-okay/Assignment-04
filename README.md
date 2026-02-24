## Answers to Questions

 01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : So there are different ways to pick things from the page in JavaScript. First one is getElementById, it is only for when the thing has an ID and it grabs that one single thing. Then there is getElementsByClassName, this one is for when lots of things have the same class name and it gives you a list but the list is live, means if a new thing with that class shows up later the list gets bigger by itself. Then the other ones querySelector and querySelectorAll are more fancy because you can use any CSS way to find things like how you write in the style file. querySelector only gives you the first one it finds and querySelectorAll gives you all of them in a list but that list is not live, it is just a picture from that time so if things change after the list does not update itself. So yeah one uses ID, one uses class and is live, and the other two use any selector but are not live. Honestly I get confused which one to use sometimes.

 02. How do you create and insert a new element into the DOM?

Ans : To make a new thing on the page, you first use document.createElement and tell it what you want like div or p. That makes the element but it is not on the page yet. Then you put text inside using innerHTML or textContent. You can also add class with className or setAttribute. After it is ready, you need to put it somewhere. You pick a parent element and use appendChild to put your new element at the end inside it. You can also use insertBefore if you want it before some other element. There is also append and prepend now but appendChild is the old way and still works. So first create, then fill it, then put it somewhere.

 03. What is Event Bubbling? And how does it work?

Ans :  Event bubbling is when you click something inside and the click goes up to the parents. So if you click a button, the button handler runs first, then the div handler runs, then body, all the way up. It happens because the button is inside the div so when you click button you also clicking the div. That is why all the parent handlers also fire. You can stop it with stopPropagation if you do not want that.

04. What is Event Delegation in JavaScript? Why is it useful?

Ans : Event delegation is a technique where you attach a single event listener to a parent element instead of attaching listeners to each child element. It relies on event bubbling—when an event triggers on a child, it bubbles up to the parent, and the parent's listener catches it. Inside the listener, you use 'event.target' to identify which child actually triggered the event.

It is useful for two main reasons. First, it improves performance and reduces memory usage because you only need one listener instead of many. Second, it automatically handles dynamically added elements—any new child added later will also be caught by the parent listener without needing to attach new event handlers.

05. What is the difference between preventDefault() and stopPropagation() methods?

Ans : These two do different things.
preventDefault stops the browser from doing its normal thing. Like if you click a link it will not go to that page. Or if you submit a form it will not send and refresh. It just stops that. But the event still moves around bubbling up and all.

stopPropagation is different. It stops the event from going up to parents. So if you click a button inside a div and you use stopPropagation on the button then the div will not know you clicked. The event stops right there and does not go up.

So one stops the browser normal action the other stops the event from going to parents. They are not the same. Sometimes people use both if they want to stop everything.