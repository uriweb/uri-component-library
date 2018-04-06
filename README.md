# URI Component Library

The Component Library exists in order to standardize the look and feel of web elements, and make it fast and simple to build webpages that look great and stay on-brand.

## What's new in 2.3.0

* Adds a quote component
* The tab component is now an enclosing shortcode
  - **This is a breaking change.**  To remedy, move any content in the `[cl-tab]` `body` attribute to between the opening and closing `[cl-tab]` tags.
* Fixes an issue that may cause superheros to not size properly when the page is reloaded
* Fixes an issue with validating urls that omit the url protocol

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/70/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues). 

## Plugin Details

[![Master Build Status](https://travis-ci.org/uriweb/uri-component-library.svg?branch=master "Master build status")](https://travis-ci.org/uriweb/uri-component-library)
[![Develop Build Status](https://travis-ci.org/uriweb/uri-component-library.svg?branch=develop "Develop build status")](https://travis-ci.org/uriweb/uri-component-library)

URI Component Library  
Add the component library, including shortcodes, to WordPress.  

Contributors: Brandon Fuller  
Tags: plugins  
Requires at least: 4.0  
Tested up to: 4.9  
Stable tag: 2.3.0  