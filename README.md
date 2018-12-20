# Creating Components in Vanilla JavaScript

## Practice: Student Components
Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it. If a student is passing, then the structure should look like the following.

```html
<div class="student">
    <h1 class="xx-large green">Student Name</h1>
    <section class="bordered dashed section--padded">Student class</section>
    <aside class="pushRight">Additional information</aside>
</div>
```

## Challenge 1: Rest Operator
Change your functions to use the rest operator.

## Challenge 2: Generic HTML Function
Look at the three functions you created to build an h1, a section, and an aside. Notice that each one follows the same pattern of applying the style argument, and the content argument in the same locations.

Can you think of a way to make a more generic function that not only takes the style and content as arguments, but also the element type?

## Advanced Challenge 1: Using createElement for Components
Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

  1. Put an article DOM element in your index.html with the id attribute value of messages.
  1. In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
  1. Create five (5) section components, each with a class of message, and with the content of your choosing.
  1. Using appendChild(), attach each message as a child to the messages element.
  
## Advanced Challenge 2: DOM Fragments
Update your code from the previous challenge to add the chat messages to the messages elements via a document fragment.
