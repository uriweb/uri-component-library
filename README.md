# URI Component Library

The Component Library standardizes the look and feel of web elements, and makes it fast and simple to build webpages that look great and stay on-brand.

## What's new in 5.0.0

CL 5.0.0 is a major release focused on cards, tiles, and enhancements in the Block Editor.

### Enhancements to Cards
* __Cards have an all-new DOM construction__ that allows for flexibility and makes it easier to add new features in the future (__this is a *breaking change*__: see note below).
* __Cards have a new full-width default layout__
  - Card display is optimized based on context
  - When space allows, cards not in tiles or columns now display similar to Panels, with image and body content appearing side-by-side
  - On mobile, card images and body content stack traditionally
* __Cards now support videos__
  - A video can now be used in place of an image
  - Theatre Mode: Cards can also feature a user-controllable video that is revealed when the card is clicked
* Equal-height cards render more consistently and now work with WordPress column blocks in addition to Tiles
* Story cards can now be made equal-height in Tiles and columns
* Cards appear more accurately styled in the Block Editor

### Enhancements to Tiles
* __Introducing Magic Tiles__
  - With Magic Tiles, tiles flow from full-width, to asymmetric halves, to thirds automatically.
  - Magic Tiles are useful for generating hierarchy that dynamically adjusts when content is updated.
  - Using Magic Tiles replaces a specified column count (e.g. `thirds`)
* Asymmetric tile layouts have been adjusted to make grid layouts appear more organic, and to help content from becoming too narrow.

### Block Editor
* Block patterns featuring typical compound component usage have been added, which make it easy to build layouts quickly and consistently.
* Descriptions and examples have been added to the block picker, providing inline documentation and a preview of the component before adding it to the page.

### General Improvements
* The Slideshow component now works with WordPress gallery blocks that are set to one column
* Component icons have been refreshed across the interface for clarity and consistency
* The image upload interface and media picker now only appear when appropriate

### Bug Fixes and Development
* Prevents loading of TinyMCE buttons in admin contexts where they don't work (specifically, the WordPress All Import screen)
* Removes deprecated PHP functions (no longer supports PHP v5.3 and earlier)
* Fixes an issue where `0` was considered empty in required shortcode attributes
* Updates development tools, including major versions with breaking changes:
  - Migration to Autoprefixer v10 (plus required peer dependencies)
  - Migration to Webpack v5
* Other bug fixes

_Note: Card constructions is a breaking change that will affect existing cards built with HTML. Existing cards built with the Visual (TinyMCE) Editor and Block Editor will not be affected._

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/204/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues).

## How do I get set up?

1. Grab a copy of the [latest version](https://github.com/uriweb/uri-component-library/releases/latest)
2. [Install it](https://wordpress.org/support/article/managing-plugins/#installing-plugins) into your WordPress `wp-content/plugins` directory
3. Activate it in your site's plugin manager

For help with using components, see [documentation](https://www.uri.edu/wordpress/components/).

## Plugin Details

[![GitHub release](https://img.shields.io/github/release/uriweb/uri-component-library.svg)](https://github.com/uriweb/uri-component-library/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/uriweb/uri-component-library.svg)](https://github.com/uriweb/uri-component-library/releases/latest)
[![Master Build Status](https://travis-ci.com/uriweb/uri-component-library.svg?branch=master "Master build status")](https://travis-ci.com/uriweb/uri-component-library)
[![CodeFactor](https://www.codefactor.io/repository/github/uriweb/uri-component-library/badge/master)](https://www.codefactor.io/repository/github/uriweb/uri-component-library/overview/master)
[![Codacy Badge](https://img.shields.io/codacy/grade/043fca0aa28b4b2db799d5daacf2d27d.svg)](https://www.codacy.com/app/uriweb/uri-component-library?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=uriweb/uri-component-library&amp;utm_campaign=Badge_Grade)
[![devDependencies Status](https://david-dm.org/uriweb/uri-component-library/dev-status.svg)](https://david-dm.org/uriweb/uri-component-library?type=dev)

URI Component Library  
Add the component library, including shortcodes and visual editor support, to WordPress.  

Contributors: Brandon Fuller, John Pennypacker  
Tags: plugins  
Requires at least: 4.0  
Tested up to: 5.5  
Stable tag: 5.0.0  
