
# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## I've added additional test specs

1. Tests that each feed has a URL.
2. Tests that each feed has a name.
3. Tests that the menu is hidden by default.
4. Tests that the menu's visibility is toggled whenever it is clicked.
5. Tests that when loadFeed is called, that there is at least one .entry element. This makes use of the beforeEach and done() function of Jasmine to test the loadFeed asynchronous function.
6. Tests that when loadFeed is called, that the content actually changes. This also uses beforeEach and done() to test the loadFeed asynchronous function.


Check out the live version of this page here: [Feed Reader Testing](http://jerrydy.github.io/feedreader-testing/)
