# django-react-example

This repository is a heavily reduced example of a Django 1.9 project that uses:

* Python
  * [Django](https://www.djangoproject.com/)
  * [Django REST Framework](http://www.django-rest-framework.org/)
* JavaScript
  * [React](https://facebook.github.io/react/)
  * [alt](http://alt.js.org/) and [alt-container](http://alt.js.org/docs/components/altContainer/)
  * [browserify](http://browserify.org/) and [watchify](https://www.npmjs.com/package/watchify)
    * [babelify](https://babeljs.io/)
    * [babel-preset-2015](https://babeljs.io/docs/plugins/preset-es2015/)
    * [babel-preset-react](http://babeljs.io/docs/plugins/preset-react/)
  * [axios](https://www.npmjs.com/package/axios)
  * [classnames](https://www.npmjs.com/package/classnames)

I think the JavaScript frontend development toolchain is a goddamn mess, so I made an example repository to solidify
what an acceptable workflow using [ES6/ES2015](https://babeljs.io/docs/learn-es2015/) and
[JSX](https://facebook.github.io/jsx/) for a Django frontend looks like as of mid-2016.

## How to develop in ES6 + JSX

1. Start Django as per usual.

   ```
   $ ./manage.py migrate
   $ ./manage.py runserver
   ```

2. Open a new console that will serve as the only extra thing that makes the UI work for modifications.

   ```
   $ cd todo/react-app
   ```

3. Install ~70MB of JavaScript dependencies

   ```
   $ npm install
   ```

4. Start the file-watching compiler thing

   ```
   $ npm run watch
   ```

   Which, if you look at package.json, actually runs: `$ watchify src/app.js -t babelify -o ../static/js/app.bundle.js -v`

5. Develop ES6!

## Why?

Django has a built-in way to immediately load modifications as soon as a source file on disk is modified - you can do
this in pretty much all server-side web development nowadays, so why shouldn't we be able to do that for JavaScript?
The problem with doing the same with the stack above with is that:

1. ES2015 is too new to be supported on user browsers
2. Modules are not a thing unless you want to compile or pull in a framework
3. Facebook literally made JSX up. It's not JavaScript.

To have equivalent edit-as-you-go functionality, we need to do what all of the hip new kids to nowadays - compile a
JavaScript derivative to EMCAScript 5. There are [way](http://gruntjs.com/) [too](http://gulpjs.com/)
[many](https://webpack.github.io/) [options](http://browserify.org/) when it comes to JavaScript build systems however,
so after spending hours of my time getting my head around the situation instead of doing being productive, I decided on
using a build system that required the least amount of complexity to understand and implement.

Thus, this project uses the watchify plugin for browserify with the babel transform plugins for ES6 and React. And a
couple of other JavaScript modules because that gives us a whole module system.

