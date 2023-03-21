import("./bootstrap");
/* 
This fn import is give Webpack the ability to asynchronously load up the bootstrap JS file.
And because we are loading up that code asynchronously Webpack has the opportunity in the browser 
just to realize that before we run this code, we also have to fetch faker.
*/
