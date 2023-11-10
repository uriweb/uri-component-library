# URI Component Library

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/uriweb/uri-component-library)](https://github.com/uriweb/uri-component-library/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/uriweb/uri-component-library)](https://github.com/uriweb/uri-component-library/releases/latest)
![GitHub License](https://img.shields.io/github/license/uriweb/uri-component-library)
[![Codacy Badge](https://img.shields.io/codacy/grade/043fca0aa28b4b2db799d5daacf2d27d/master)](https://www.codacy.com/app/uriweb/uri-component-library?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=uriweb/uri-component-library&amp;utm_campaign=Badge_Grade)
![GitHub top language](https://img.shields.io/github/languages/top/uriweb/uri-component-library?color=violet&branch=master)

The Component Library standardizes the look and feel of web elements, and makes it fast and simple to build webpages that look great and stay on-brand.

See [this documentation](https://www.uri.edu/wordpress/components/) to learn about components and how to use them.

## What's new in 5.1.0

CL 5.1.0 is a minor release focused on accessibility controls and new blocks.

* Adds an __Abstract__ block, useful for hero-like presentations when sufficient artwork isn't available.  Choose from four animation styles and unlimited colorways.
* Adds a __Breakout__ block, useful for creating a section on a page differentiated by a full-width light grey background.  Breakouts support commonly nested blocks like headings, paragraphs, and lists, as well as other components like Cards and Metrics.
* Adds __universal accessibility controls__ for component-specific or site-wide user control of motion and contrast.  Universal accessibility controls are supported by Heroes, Cards, and Abstracts.
* Depricates the `headline` and `subhead` Hero attributes in favor of `title` and `body`, respectively. Backward compatibility is retained.
* Removes the animation option for static Heroes
* Fixes certain spacing and padding issues with Cards
* Updates development tools

> This plugin is now available from Packagist as [uriweb/uri-component-library](https://packagist.org/packages/uriweb/uri-component-library)

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/227/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues).

## How do I get set up?

### Typical installation

1. Grab a copy of the [latest version](https://github.com/uriweb/uri-component-library/releases/latest)
2. [Install it](https://wordpress.org/support/article/managing-plugins/#installing-plugins) into your WordPress `wp-content/plugins` directory
3. Activate it in your site's plugin manager

### Using Packagist
If your site is built on a composer stack, you can add the latest version by running:
```shell
composer require uriweb/uri-component-library
```

---

For help with using components, see [documentation](https://www.uri.edu/wordpress/components/).

## Plugin Details

[![Master Build Status](https://travis-ci.com/uriweb/uri-component-library.svg?branch=master "Master build status")](https://travis-ci.com/uriweb/uri-component-library)
[![CodeFactor](https://www.codefactor.io/repository/github/uriweb/uri-component-library/badge/master)](https://www.codefactor.io/repository/github/uriweb/uri-component-library/overview/master)

__Contributors:__ [bjcfuller](https://github.com/bjcfuller), [johnpennypacker](https://github.com/johnpennypacker), [alexandragauss](https://github.com/alexandragauss)  
__Tags:__ plugins, shortcodes  
__Requires at least:__ 4.0  
__Tested up to:__ 6.3  
__Stable tag:__ 5.1.0  
__License:__ GPL-3.0  
__Licence URI:__ https://www.gnu.org/licenses/gpl-3.0.html
