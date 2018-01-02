# [Sirius UI](https://larastars.com/ui/sirius)

[![npm](https://img.shields.io/npm/v/sirius-ui.svg?style=flat-square)](https://www.npmjs.com/package/sirius-ui)
[![npm](https://img.shields.io/npm/dt/sirius-ui.svg?style=flat-square)](https://www.npmjs.com/package/sirius-ui)
[![twitter](https://img.shields.io/badge/twitter-%23areyousirius%3F-blue.svg?style=flat-square)](https://twitter.com/larastarsgalaxy)

[![Sirius UI - Framework based on Grid and Vue](https://raw.githubusercontent.com/macmotp/sirius/master/app/assets/images/sirius_cover.png)](https://larastars.com/ui/sirius)

Sirius is a framework based on [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [Vue](https://vuejs.org). Designed to aim for aesthetics and simplicity.

[Documentation](https://larastars.com/ui/sirius)

Features:

```
.
├── sass
│   ├── base
│   │   ├── reset
│   │   ├── config
│   │   ├── functions
│   │   ├── animations
│   │   ├── general
│   │   └── typography
│   ├── elements
│   │   ├── badge
│   │   ├── banner
│   │   ├── breadcrumb
│   │   ├── button
│   │   ├── checkbox
│   │   ├── drawer
│   │   ├── image
│   │   ├── input
│   │   ├── list
│   │   ├── loader
│   │   ├── menu
│   │   ├── modal
│   │   ├── notification
│   │   ├── pagination
│   │   ├── progress-bar
│   │   ├── radio
│   │   ├── ribbon
│   │   ├── select
│   │   ├── switch
│   │   ├── tab
│   │   ├── table
│   │   ├── tag
│   │   └── tooltip
│   └── layouts
│       ├── header
│       ├── nav
│       ├── footer
│       ├── card
│       └── helpers
│
├── Vue
│   ├── components
│   │   ├── Drawer
│   │   ├── Flash
│   │   ├── Menu Button
│   │   ├── Modal
│   │   ├── Notification
│   │   ├── Pagination
│   │   ├── Progress Bar
│   │   └── Tabs
│   └── mixins
│       ├── Flash Interface
│       └── Toggle Interface
│
└── documentation
```

## Installation for Stand-Alone projects
Create your new project directory:

```bash
mkdir new-project && cd new-project
```

### Fetch Sirius UI
Install Sirius with your favourite driver:

#### Yarn (Recommended)
```bash
yarn add sirius-ui
```

#### NPM
```bash
npm install sirius-ui
```

#### Git
```bash
git clone git@github.com:macmotp/sirius.git
```

### Publishing Assets
You can publish a ready-to-go development example by running:

```bash
node_modules/sirius-ui/app/start/publish
```

This will install [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) as API for compilation and the Vue dependency.
The prompt will let you choose if you want NPM or Yarn as driver. Also, the script will copy a `webpack.mix.js` file and a `package.json` file that you can use as entry points for the compiler, as well as a boilerplate containing a `index.html`, and the two main `app.js` and `app.sass` files where Sirius UI is injected.
In these last two files you can customize your project as explained below. 

### SASS to CSS Customization
Open your main SASS endpoint file `src/sass/app.sass` where Sirius is imported.

```sass
/*
 *
 * File example: app.sass 
 *
 */
 
// Custom configuration of variables
@import "config.sass"

// Sirius UI
@import "~sirius-ui/dist/src/sass/sirius.sass"
```

As you can see, you should declare a `src/sass/config.sass` file on top of Sirius. By default Sirius has an analog `_config.sass` configuration file that can be overridden. Here there is an example of a custom implementation:

```sass
/*
 *
 * File example: config.sass 
 *
 */

// Border radius and border size of elements like button, card, form input, etc.
$border-radius: 5px
$border-size: 1px

// Gap between articles and columns in a section grid
$gap: 1em
$column-gap: 1em

// Theme Colors
$primary: blue
$secondary: purple

// State Colors
$success: green
$warning: yellow
$error: red

// Grayscale Colors
$black: black
$white: white
$gray: gray

```

There are plenty of editable variables. You can either override the main ones (browse the original [config file](https://github.com/macmotp/sirius/tree/master/assets/sass/base/_config.sass)) or the more specific ones (browse specific elements).


### Vue to Js Customization
Open your main JavaScript endpoint file `src/js/app.js` where Sirius is imported.

```javascript
/*
 *
 * File example: app.js 
 *
 */

import Vue from 'vue'
import Sirius from 'sirius-ui'

window.events = new Vue();

Vue.use(Sirius);

new Vue({
    el: '#app',
    components: {
        Sirius
    },
    mounted() {
        console.log("Sirius works!")
    }
});
```
Remember to tell the Vue instance to use Sirius, and now you can use all the components in your html views.

### HTML Usage
```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Sirius UI</title>
    <link href="./dist/min/app.min.css" type="text/css" rel="stylesheet">
</head>

<body>
    <div class="page" id="sirius">
        <h1>Sirius</h1>
        <h3>This is a boilerplate. Start creating something awesome.</h3>
    </div>
    <script src="./dist/min/app.min.js"></script>
</body>

</html>
```
By default, the Vue target element is called `sirius`, so if you need to use the compiled dist, remember to add this id to the parent div: `<div class="page" id="sirius">`, (not the body element).
### Development Scripts
After you import Sirius into your project , compile your new assets by running:

```sh
# compile assets in development environment
yarn dev

# watch all files for changes in development environment
yarn watch

# compile and minify assets for production
yarn production
```
If you like NPM more, use `npm run` instead of `yarn`.

## Integration in Laravel projects
For Laravel lovers (like me) you can easily integrate Sirius UI into your project. Add the SASS and Vue dependencies into you `resources/assets/` folder in the same way described above. Since Laravel Mix is installed by default, you can directly run your development scripts.

## Browser Support
Sirius is compatible with:
* Firefox, Chrome, Safari, Internet Explorer 11+, Opera for desktop
* Android Chrome 42+, Android Firefox 37+, iOS 8+ for Mobile
* Internet Explorer (10+) may experience some issues with grid design

## Documentation
Browse the documentation online [here](https://larastars.com/ui/sirius).

## Issues
Support only through Github. Please don't send emails about issues, make a Github issue instead.

## Copyright and License
Copyright 2018 - [Larastars](https://larastars.com) -  created by and maintained by [Marco Gava](https://www.linkedin.com/in/gavamarco).
Code released under [LGPL-2.1 license](https://github.com/macmotp/sirius/blob/master/license.md).
You are free to use it in personal and commercial projects. The code can be forked and modified, but the original copyright author should always be included.

#### powered by [Larastars](https://larastars.com) | [Official Documentation](https://larastars.com/ui/sirius) | [#areyousirius?](https://twitter.com/larastarsgalaxy)