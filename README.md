# NReact
1)What is Emmet?
Emmet is a VS code extension used to do auto filling of the code. This helps for high speed coding and editing.

2) Difference between a Library and Framework?
Framework is full fledged one 
whereas library takes minimum effort to put inside the code. User can use it as needed.

3)What is CDN? Why do we use it?
CDN is conetnt delivery network. These are servers that are geographically located and delivers data from nearby location.
This helps for caching and imporves performance.

4) Why is React known as React?
React responds to the changes or reacts to the updates and hence called so.

5) What is crossorigin in script tag?
Means we are loading resources present on other servers.

6) What is diference between React and ReactDOM
React helps to create the HTMNL to render and ReactDOM helps to render the same.

7) What is difference between react.development.js and react.production.js files via CDN?
react.development.js is not minified and react.production.js is minified and hence ready for more performant production applications.

8) What is async and defer?
While parsing a html file, when a script tag comes, the html parsing is pasued and scripts are fetched and executed.
When async is used scripts are fetched from network in parallel during html parsing. Then scripts are executed, during execution html parsing is blocked.
In defer, the scripts are fetched in parallel to html parsing as in async, but execution of scripts happen only after html parsing is done.
async doesnt matter order of execution, but defer does, so when scripts are dependant on each other, usage of defer is better.
If we have to load external scripts which are independant, in that case we can use async.
