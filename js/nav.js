"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show submit form for a new story when a user clicks submit  */

function navSubmitClick(evt) {
  console.log("navSubmitClick", evt);
  $navSubmit.show();
}

$navSubmit.on("click", navSubmitClick);

/*
Write a function in nav.js that is called when users click the new “submit” 
navbar link. This function should cause the new story form to 
appear on the page. Look at the other function names in that 
file that do similar things and pick something descriptive and similar.

*/