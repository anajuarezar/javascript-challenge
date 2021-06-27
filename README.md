# JavaScript Homework - JavaScript and DOM Manipulation
# The truth is out there

## Level 1: Automatic Table and Date Search

For this assignment we had to:
* Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
* Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

To create this we needed:
* a HTML file (that was provided).
* a CSS file (also provided).
* a JS file (the assignment).


To secure the process of the JS file we had to make sure the links for the data and the js were in their correct places. Once this was done, it was time to code!

1. The first step was to import the data from de data.js file by assigning it to a variable. This data was in an array format so it didn't need to be converted or manipulated. Then we had to extract the elements we were going to work with, beginning with the "tbody" where our table is going to be. 
2. Then we had to upload the data we had into the html. To do this I used "for each" to go through the array and created a function that would append each element withn the array to the rows or "tr" and the values and keys to the "td" of the HTML thus creating the table.
3. Once this was done it was time to work on the filter and events. The first thing I did was select the button and the form using d3. 
4. After the were selected, I created the event handlers. I assign "click" and "submit" to activate the function UFOfilter.
5. Now it was time to define the function. I used "preventDefault" to prevent the page from refreshing then I selected the input element by getting the html node. Then I used inputElement.property to get the value property of the input.
6. Once I obtained the value of the input I used that value to filter the table. I compared that value to the datetime column and selected those that matched. In order to see if it worked, I console.logged the result.
7. After, I cleared the tbody.
8. Now it was time to show the new table. In order to do this, I used the same process as before using the filterd data.
