# URI Component Library

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/uriweb/uri-component-library)](https://github.com/uriweb/uri-component-library/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/uriweb/uri-component-library)](https://github.com/uriweb/uri-component-library/releases/latest)
![GitHub License](https://img.shields.io/github/license/uriweb/uri-component-library)
[![Codacy Badge](https://img.shields.io/codacy/grade/043fca0aa28b4b2db799d5daacf2d27d/master)](https://www.codacy.com/app/uriweb/uri-component-library?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=uriweb/uri-component-library&amp;utm_campaign=Badge_Grade)
![GitHub top language](https://img.shields.io/github/languages/top/uriweb/uri-component-library?color=violet&branch=master)

The Component Library standardizes the look and feel of web elements, and makes it fast and simple to build webpages that look great and stay on-brand.

See [this documentation](https://www.uri.edu/wordpress/components/) to learn about components and how to use them.

## What's new in 5.2.0

> IMPORTANT: This version supersedes both v5.1.0 and the v5.0.3.x series, and includes features released as part of the latter (as noted).  The v5.0.3.x series is discontinued by this release.

CL 5.2.0 is a minor release focued on bug fixes and minor feature additions.

* Fixes several issues with unified accessibility controls introduced in v5.1, including unresponsive controls and videos that did not appear to autoplay
* Video cards now display accessibility controls in the default (lower right) location
* Contrast control is now available for non-video heroes containing text
* Social Bars can now include TikTok<sup>1</sup>
* The Twitter logo has been replaced with that for X (the `twitter` attribute in Share Bars and Social Bars has been deprecated in favor of `x`, but is maintained for legacy support)<sup>1</sup>
* Icons in Share Bars and Social Bars have been updated with high resolution versions<sup>1</sup>
* Ensures compatibility with WordPress 6 and later<sup>2</sup>
* Updates development tools

> <sup>1</sup> First stable version: v5.0.3.1  
> <sup>2</sup> First stable version: v5.0.3.3

> This plugin is available from Packagist as [uriweb/uri-component-library](https://packagist.org/packages/uriweb/uri-component-library)

For complete details, see the [commit history](https://github.com/uriweb/uri-component-library/pull/231/commits) and the [issue tracker](https://github.com/uriweb/uri-component-library/issues).

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
__Tested up to:__ 6.4.5  
__Stable tag:__ 5.2.0  
__License:__ GPL-3.0  
__Licence URI:__ https://www.gnu.org/licenses/gpl-3.0.html
