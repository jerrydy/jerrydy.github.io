## This is Jerry's Website Performance Optimization Portfolio Project

### index.html optimized for PageSpeed Insights
The index.html has been optimized to have a score of 93/100 for Mobile and 94/100 for Desktop. You can test this by running the following url http://jerrydy.github.io/mobile-portfolio in PageSpeed Insights. You may also clone this repository to your own computer and run your own web server using SimpleHTTPServer and exposing it to PageSpeed Insights using ngrok.

### Scrolling Pizza Optimized to run 60fps
Cam's Pizzaria page has been optimized so that the animation during scrolling is at least 60 fps.

### Resize Pizza Optimized to 1ms
And lastly, the pizza resizing has been optimized so each resize only takes about 1ms.

### Using the Build Tools

The package.json and Gruntfile.js files are also provided so grunt can be used to minify the css and js files used by index.html.

Make sure that npm and the grunt-cli is installed. Then use npm install to install grunt, grunt-contrib-cssmin and grunt-contrib-uglify. Then simply run grunt to automatically minify the css and js files.
