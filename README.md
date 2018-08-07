# URI Component Library

The Component Library exists in order to standardize the look and feel of web elements, and make it fast and simple to build webpages that look great and stay on-brand.

## What's new in 3.0.1

CL 3.0.1 is a bug fix release.

* Increases security compliance of AJAX calls
* The `id` attribute in hero components is now required
* Fixes an error that caused capitalized shortcode attributes to be ignored by the visual editor
* Minor visual adjustments to certain visual editor modals

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/102/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues). 

## New in 3.0.0

CL 3.0.0 is a major release focused on usability, performance, and fine-tuning existing components.

### Introducing Visual Editor Support (_Beta_)

Components can now be built and edited directly in the visual editor without needing to write shortcodes.  Simply click on a component button in the editor toolbar to open a dialogue where the component can be created.

* Using the visual editor is the fastest, simplest way to create and edit components
* Components render fully in the visual editor window
* Shortcodes can still be written and edited in the text editor
* Components built using shortcodes in the text editor will appear fully styled in the visual editor

### Component Updates

* Adds a story card component for rich linking to posts or pages (_beta_)
* The media id can now be used to set an image in cards and panels
* Images in cards and panels now use source sets for better performance across devices
* Panels can now use images added from the WordPress media library
* Tiles can now be built with any block level elements

### General Improvements

* More typography now adapts to theme font sizes
* Fixes an issue that prevented menus from displaying on mobile devices without JavaScript
* Fixes a display issue with submenus in the menu component
* Fixes an issue that prevented multiple instances of tabs on a page
* Adds additional development tools
* Other bug fixes

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/99/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues). 

## Plugin Details

[![Master Build Status](https://travis-ci.org/uriweb/uri-component-library.svg?branch=master "Master build status")](https://travis-ci.org/uriweb/uri-component-library)
[![CodeFactor](https://www.codefactor.io/repository/github/uriweb/uri-component-library/badge/master)](https://www.codefactor.io/repository/github/uriweb/uri-component-library/overview/master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/043fca0aa28b4b2db799d5daacf2d27d?branch=master)](https://www.codacy.com/app/uriweb/uri-component-library?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=uriweb/uri-component-library&amp;utm_campaign=Badge_Grade)
[![devDependencies Status](https://david-dm.org/uriweb/uri-component-library/dev-status.svg)](https://david-dm.org/uriweb/uri-component-library?type=dev)

URI Component Library  
Add the component library, including shortcodes and visual editor support, to WordPress.  

Contributors: Brandon Fuller, John Pennypacker  
Tags: plugins  
Requires at least: 4.0  
Tested up to: 4.9  
Stable tag: 3.0.1  