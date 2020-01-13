# URI Component Library

The Component Library exists in order to standardize the look and feel of web elements, and make it fast and simple to build webpages that look great and stay on-brand.

## What's new in 4.0.2

CL 4.0.2 is a bug fix release.

* Fixes an issue with cache busting of main script and stylesheet (correctly)

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/174/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues).

## New in 4.0.1

CL 4.0.1 is a bug fix release.

* Fixes an issue with cache busting of main script and stylesheet
* Fixes an issue that caused the motion button on video heroes to not change state when paused

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/172/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues).

## New in 4.0.0

CL 4.0.0 is a major release focused on Gutenberg support and making it easier for themes to customize component look and feel.

### Introducing Gutenberg Support

Components can now be built using the Gutenberg block editor (WordPress v5.0 and later).

* Using Gutenberg is the fastest, easiest way to create and edit components
* Components can be edited directly and render more accurately than ever in the editor window
* Full support is maintained for existing components built using shortcodes (shortcode components will not appear styled in the editor window unless included in a Classic Editor block)
* Gutenberg currently supports the following components: Boxouts, Buttons, Cards, Heroes, Metrics, Panels, Quotes, and Tabs.  Some components may have restrictions.

### Component Updates
* All components are now styled generically out-of-the-box.  Any customization should be done in the theme.
* Adds a Countdown component for displaying dynamic, deadline-driven information
* Notices can now be dismissible and expire
* Heroes can now display the media caption, or display a custom caption and credit
* Video Heroes using Vimeo are now visible and play automatically on mobile devices
* Panels formatted as `super` can now have reversed layouts

### General Improvements
* Updates support for heroes in the Classic Editor
* Cards now use `h2` for titles
* Fixes an issue that caused floated elements in Tabs to overflow the tab in certain cases
* Updates development tools
* Other bug fixes

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/170/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues).

## Plugin Details

[![GitHub release](https://img.shields.io/github/release/uriweb/uri-component-library.svg)](https://github.com/uriweb/uri-component-library/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/uriweb/uri-component-library.svg)](https://github.com/uriweb/uri-component-library/releases/latest)
[![Master Build Status](https://travis-ci.org/uriweb/uri-component-library.svg?branch=master "Master build status")](https://travis-ci.org/uriweb/uri-component-library)
[![CodeFactor](https://www.codefactor.io/repository/github/uriweb/uri-component-library/badge/master)](https://www.codefactor.io/repository/github/uriweb/uri-component-library/overview/master)
[![Codacy Badge](https://img.shields.io/codacy/grade/043fca0aa28b4b2db799d5daacf2d27d.svg)](https://www.codacy.com/app/uriweb/uri-component-library?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=uriweb/uri-component-library&amp;utm_campaign=Badge_Grade)
[![devDependencies Status](https://david-dm.org/uriweb/uri-component-library/dev-status.svg)](https://david-dm.org/uriweb/uri-component-library?type=dev)

URI Component Library  
Add the component library, including shortcodes and visual editor support, to WordPress.  

Contributors: Brandon Fuller, John Pennypacker  
Tags: plugins  
Requires at least: 4.0  
Tested up to: 5.3  
Stable tag: 4.0.3  
