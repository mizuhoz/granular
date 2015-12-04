//Our aim is to smooth scroll our page to the correct section when a button is clicked
//$("element").action("what we want to change", "how we want to change it")


//Step 1 : attach a click event listener to arrow buttons
$(".scroll-to").on("click", function(){


//Step 2: Find the id of the section that we want to scroll to and store it.

  // var sectionName = "#first-section";

//We use jQuery's keyword 'this' in order to access the element that has been clicked on.
//To access the element attrobutes, we use the .attr action. This takes one value - the name of attribute we wanted to access. We are looking for the href, so we add this as a string - "href"
  var sectionName = $(this).attr("href");
    console.log(sectionName);
    //this here means it will look at anchor tag
    //.attr(): Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
//To make our code dynamic and portable, we need to change the value of our variable section name. Ideally, we want to grab the href attributes of whiever anchor tag has been clicked on. The href stores the section that we need to scroll to.

//.offset() Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.

//Step3: using the section id, store how many picel from the top this is.
//The offsets action allows us to retriee the current position of an element relative to our page - note we need () to complete thsi action.
//We need to specify where we wnt to measure from so we use .top.
//Using these in combination gives us a number which changes depending on the browser height, but always point to the exact location of the section specified.
  var sectionPlacement = $(sectionName).offset().top;
  //console.log prints the things out to the console found in the browser.
  console.log(sectionPlacement);
//Step4 : animate or smoothly scroll our page to this section.
//First we select our entire page, as we want everything to move downwards to where the section is placed. To do this, we add "html,body".
//.animate allows us to animate different properties. It takes the following values, property to animate, duration, easing, and completion. We only need to use the first two.
//We need to move the vertical scroll bar to the position of our section. scrollTop allows us to do this. We add this as the first value, as this is what we want to animate.It takes one value, the pixel height that the scroll bar should be set to.
//We use the 1000 as duratio for the animation, measuredin milliseconds.
  $("html,body").animate ({scrollTop: sectionPlacement}, 1000);   //animate():Perform a custom animation of a set of CSS properties.
//Stp the section from flashing, before our animation takes place.
//To stop our links from jumping t the section, we use return false.
//this stops the 'I'm done-carry on with your default behaviour' message being sent back to the another tag.
  return false;

});//end of [on].
