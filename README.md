1️⃣Question -1:What is the difference between getElementById,getElementsByClassName and querySelector/querySelectorAll.

Ans:getElementById means to find out one specific element addressed by an unique id
getElementsByClassName means to find out many element naming by a one class..it means the collection or list of a element
querySelector means find out the first element from same class/id/tags elements
querySelectorAll means it finds out all the matching elements from same class/id/tags elements.

2️⃣Question -02:How do You create and insert a new element into the DOM?

Ans:1.first of all i will create a box(e.g:it can be 'div') by const newElement=document.createElement('div')
2.Then text, styles,classes,id whatever i want to add in this i will use newElement.innerHTML=' '
3.Then i will insert it into the desired section or specifically in DOM by using 
.appendChild(newElement).

3️⃣Question-3:What is Event Bubbling?And how does it work?

Answer:Event bubbling means when i click on an element the event first will happen on that elemnt and then it correspondingly moves upward to its parentNode,,then its grandParentNode and finally on to the Document
child-parent-grandParent-document

4️⃣Question-4:What is event delegation in JavaScript?why it is useful?

Answer:Event delegation means using only one event at a time to the parentNode instead of many to handle all child events.It works like bubbling.
Event clicked-parentNode checks which child node has been clicked then handles the event of that childNode.
Usefulness:Less code,only one event which can control many childs as a boss,can also work for new element automatically.

5️⃣Question-5:What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() means stopping the browser's normal actions so that event bubbling from childNode to parentNode can operate smoothly.
stopPropagation() is the reverse situation of preventDefault().It allows browser's to continue its actions smoothly by stopping all event bubbling from childNode to parentNode in any specific moment.

