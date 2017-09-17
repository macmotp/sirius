# [Sirius UI](https://larastars.com/sirius/demo)

[![npm](https://img.shields.io/npm/v/sirius-ui.svg)](https://www.npmjs.com/package/sirius-ui)
[![npm](https://img.shields.io/npm/dm/sirius-ui.svg)](https://www.npmjs.com/package/sirius-ui)

Sirius UI - Flexible CSS Framework based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and [Vue](https://vuejs.org).

[![Sirius UI - Flexible CSS Framework](https://raw.githubusercontent.com/macmotp/sirius/master/resources/images/sirius_cover.png)](https://larastars.com/sirius/demo)

Build your beautiful website with Sirius. Fully responsive elements and layouts. For Laravel 5 integration check [here](https://github.com/macmotp/sirius-laravel).

In current version:
* SASS
  * Variables, Reset, General, Helpers, Animations
  * Elements
    * Typography
    * Button
    * Form Input: Text, Checkbox, Radio, Switch, Select
    * Notification: Basic, Modal, Badge, Tag, Tooltip, Ribbon
    * Image
    * Table
    * Indicator: Loader, Pagination, Progress Bar
  * Layouts
    * Grid
    * Header
    * Nav
    * Menu
    * Footer
    * Card
* Vue
  * Like Button
  * List
  * Menu
  * Modal
  * Notification
  * Pagination
  * Progress Bar

## [#areyousirius?](https://twitter.com/larastarsgalaxy)

## Installation

Be aware: Sirius UI is still in alpha development!

### NPM

```sh
npm install sirius-ui
```

### or download the [Latest Release](https://github.com/macmotp/sirius/archive/master.zip)

## Basic Usage

You can copy and inject the latest release directly into your HTML:

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Sirius UI - CSS Framework based on flexbox and Vuejs - powered by Larastars</title>
        <link href="/dist/css/sirius.min.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <!-- your code here -->
        <script src="/dist/js/sirius.js"></script>
    </body>
</html>
```
## Advanced Usage

Sirius uses the wonderful [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) to built its assets. If you want to change SASS variables or add your own Vue components, install node dependencies:

```sh
# browse to project
cd sirius-ui
# install dependencies
npm install
```

For [Laravel 5](https://laravel.com) integration, copy the [assets](https://github.com/macmotp/sirius/tree/master/assets) folder into your resources project. If you are familiar with Laravel Mix, you know you can simply run

```sh
# compile assets in development
npm run dev

# compile and minify assets for production
npm run production
```

in order to compile SASS and Vue

## Browser Support

Sirius is compatible with:

* Safari
* Chrome
* Firefox
* Internet Explorer (10+)
* Opera


## Documentation

Browse the application for documentation. Support online will be released in the first beta.

## Support

Support only through Github. Please don't send emails about issues, make a Github issue instead.

## Copyright and License

Copyright 2017 - [Larastars](https://larastars.com) owned by [Marco Gava](https://www.linkedin.com/in/gavamarco).
Code released under [LGPL license](https://github.com/macmotp/sirius/blob/master/license.md).
You are free to use it in personal and commercial projects. The code can be forked and modified, but the original copyright author should always be included!

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/CZCmGuCTGRSYx5MNijWrLSGs/macmotp/sirius'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/CZCmGuCTGRSYx5MNijWrLSGs/macmotp/sirius.svg' /></a>