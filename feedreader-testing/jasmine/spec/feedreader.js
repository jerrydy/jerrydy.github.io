/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
         
         // Checks to make sure that allFeeds is defined.
         // Also checks to make sure allFeeds is an Array since strings also have the length property.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds instanceof Array).toBeTruthy();
        });


        // Checks to make sure each feed has a url.
        // We tested for failure by removing at least one url from allFeeds.
        // We also made one of the url's an empty string to see if the test fails.
        // Checks to make sure url starts with http:// or https://
        it('each feed has url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch(/^http(s?)\:\/\//);
            });
        });


        // Checks to make sure each feed has a name.
        // We tested for failure by removing at least one name from allFeeds.
        // We also made one of the names an empty string to see if the test fails.
        it('each feed has name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });


    });


    describe('The menu', function() {

        // Checks to make sure menu is initially hidden.
        // The menu-hidden class makes the menu hidden. A click event toggles this class from the body element.
        // So we simply check for the presence of this class to see if the menu is initially hidden.
        it('is hiddden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        // Checks to make sure clicking the menu icon works.
        // We use the click() function simulate a user clicking the menuIcon.
        // When initially clicked, the menu should appear so menu-hidden class must not be in the body element.
        // When it is clicked again, the menu should disappears, so menu-hidden class must be in the body element.
        it('toggles visibility when clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

          
    });


    describe('Initial Entries', function() {

        // Checks to make sure the loadFeed function works.
        // Since loadFeed is an async function, beforeEach and done() is used here before testing
        beforeEach(function(done) {
            loadFeed(0, function() {
                done(); // 2nd param is a call back function that gets called when loadFeed is complete
            });
        });

        // This test is only executed after loadFeed is completed.
        it('at least one entry in the feed container', function() {
            expect($('.feed').children().length).toBeGreaterThan(0);
        });
    });


    
    describe('New Feed Selection', function() {

        // Checks to make sure the loadFeed updates the content
        // This is a more complicated test since the async function loadFeed must be called twice
        // to make sure two different feeds are loaded so we can actually check if the
        // content had changed. Fortunately, Jasmine lets us use multiple beforeEach, one for
        // each async call to loadFeed. Since we have no way of knowing which one will finish
        // first, we save the content after each call so we can compare them during our test.
        var feed1, feed2;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feed1 = $('.feed .entry').text(); // save the text content
                done();
            });
        });

        beforeEach(function(done) {
            loadFeed(1, function() {
                feed2 = $('.feed .entry').text(); // save the text content
                done();
            });
        });

        // Both loadFeed calls are complete when the following is executed so now we can compare the result.
        // We know this works because if I change the loadFeed call in beforeEach to load the same id,
        // this test fails.
        it('content changes when a new feed is loaded', function() {
            expect(feed1).not.toBe(feed2);
        });

    });

}());
