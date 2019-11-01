/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/blocks/src/blocks.js":
/*!*********************************!*\
  !*** ./js/blocks/src/blocks.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boxout_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxout/block */ "./js/blocks/src/boxout/block.js");
/* harmony import */ var _boxout_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boxout_block__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/block */ "./js/blocks/src/button/block.js");
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_block__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/block */ "./js/blocks/src/card/block.js");
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_block__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero/block */ "./js/blocks/src/hero/block.js");
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hero_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hero2_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero2/block */ "./js/blocks/src/hero2/block.js");
/* harmony import */ var _hero2_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hero2_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metric/block */ "./js/blocks/src/metric/block.js");
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metric_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice/block */ "./js/blocks/src/notice/block.js");
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_notice_block__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel/block */ "./js/blocks/src/panel/block.js");
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_panel_block__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote/block */ "./js/blocks/src/quote/block.js");
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_quote_block__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tab */ "./js/blocks/src/tabs/tab.js");
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tabs_tab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/block */ "./js/blocks/src/tabs/block.js");
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tabs_block__WEBPACK_IMPORTED_MODULE_10__);












/***/ }),

/***/ "./js/blocks/src/boxout/block.js":
/*!***************************************!*\
  !*** ./js/blocks/src/boxout/block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'uri-cl/button'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Your boxout content...',
  dropCap: false
}]];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/boxout.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = "cl-boxout";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
  }

  return classes;
};

registerBlockType('uri-cl/boxout', {
  title: __('Boxout'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    title: {
      type: 'string'
    },
    alignment: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    // generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes);
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __("Your boxout title"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })));
    }; // generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(content) {
          return setAttributes({
            alignment: content
          });
        }
      }));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var classes = classNames(attributes);
    return wp.element.createElement("div", null, wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("h1", null, attributes.title), wp.element.createElement(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./js/blocks/src/button/block.js":
/*!***************************************!*\
  !*** ./js/blocks/src/button/block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    URLInput = _wp$editor.URLInput,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/button.png',
    alt: "button"
  });
};
/**
 * Render the shortcode
 */


function buildShortCode(args) {
  // unfortunately, Gutenberg cares a lot about the order in which attributes appear,
  // so this process is best done manually.
  var shortcode = '[cl-button ';

  if (args.link) {
    shortcode += ' link="' + args.link + '"';
  }

  if (args.text) {
    shortcode += ' text="' + args.text + '"';
  }

  if (args.tooltip) {
    shortcode += ' tooltip="' + args.tooltip + '"';
  }

  if (args.style) {
    shortcode += ' style="' + args.style + '"';
  }

  if (args.className) {
    shortcode += ' class="' + args.className + '"';
  }

  shortcode += ']';
  return shortcode;
}

registerBlockType('uri-cl/button', {
  title: __('Button'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    link: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    tooltip: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // generate editor view of the button itself
    var createContentEditForm = function createContentEditForm() {
      var meta;

      if (!!isSelected) {
        meta = wp.element.createElement("form", {
          className: "meta",
          onSubmit: function onSubmit(event) {
            return event.preventDefault();
          }
        }, wp.element.createElement("fieldset", {
          "class": "row link"
        }, wp.element.createElement("label", {
          title: "Links to:"
        }, wp.element.createElement(Dashicon, {
          icon: "admin-links"
        })), wp.element.createElement(URLInput, {
          value: attributes.link,
          onChange: function onChange(content) {
            return setAttributes({
              link: content
            });
          },
          placeholder: "https://www.uri.edu/",
          className: "meta-field"
        })));
      } // set the classnames


      var classes = "cl-button";

      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      } // set the tooltip


      var title = "";

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-button-block-form"
      }, wp.element.createElement("span", {
        "class": classes,
        title: title
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            text: content
          });
        },
        value: attributes.text,
        placeholder: __("Your button text"),
        keepPlaceholderOnFocus: true,
        className: "cl-button"
      })), meta);
    }; // generate block controls for alignment, etc
    // @todo: do we need alignment/float controls on buttons?


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(content) {
          return setAttributes({
            alignment: content
          });
        }
      }));
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __("Button Style")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Button Style")
      }, ["default", "prominent", "disabled"].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === "default" ? '' : value;
        var isSelected = key === attributes.style;
        return wp.element.createElement(Button, {
          key: key,
          isDefault: true,
          isPrimary: isSelected,
          "aria-pressed": isSelected,
          onClick: function onClick(content) {
            return setAttributes({
              style: key
            });
          }
        }, capitalizedValue);
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Tool tip",
        onChange: function onChange(content) {
          return setAttributes({
            tooltip: content
          });
        },
        value: attributes.tooltip,
        className: "meta-field"
      }))));
    }; // send the editor interfaces to the view


    return [//createBlockControls(),
    createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var o = wp.element.createElement(wp.element.RawHTML, null, buildShortCode(attributes)); // console.log(o);

    return o;
  }
});

/***/ }),

/***/ "./js/blocks/src/card/block.js":
/*!*************************************!*\
  !*** ./js/blocks/src/card/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    PlainText = _wp$editor.PlainText,
    URLInput = _wp$editor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("svg", {
    width: "20",
    height: "20",
    className: "dashicon"
  }, wp.element.createElement("path", {
    d: "M2,8 L2,16 L16,16 L16,8 L2,8 Z M2,7 L16,7 L16,2 L2,2 L2,7 Z M18,1 L18,17 C18,17 18,18 18,18 C18,18 17,18 17,18 L1,18 C1,18 0,18 0,18 C0,18 0,17 0,17 L0,1 C0,1 0,0 0,0 C0,0 1,0 1,0 L17,0 C17,0 18,0 18,0 C18,0 18,1 18,1 Z M15,15 L3,15 L3,12 L15,12 L15,15 Z"
  }));
};

var classNames = function classNames(attributes) {
  var classes = "cl-card";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
  }

  return classes;
};

registerBlockType('uri-cl/card', {
  title: __('Card'),
  icon: customIcon,
  category: 'cl-blocks',
  // the mediaID is what goes into the shortcode for front-end display
  // the img and alt are for editor placeholders
  attributes: {
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
    mediaID: {
      type: 'number'
    },
    img: {
      type: 'string'
    },
    alt: {
      type: 'string'
    },
    button: {
      type: 'string'
    },
    tooltip: {
      type: 'string'
    },
    alignment: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
        return wp.element.createElement(MediaPlaceholder, {
          icon: 'format-image',
          className: className,
          labels: {
            title: 'Add an image',
            instructions: __('Drag an image, upload a new one or select a file from your library.')
          },
          onSelect: function onSelect(media) {
            setAttributes({
              alt: media.alt,
              img: media.url,
              mediaID: media.id
            });
          },
          accept: "image/*",
          allowedTypes: ALLOWED_MEDIA_TYPES
        });
      }
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("form", {
        className: "meta",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, wp.element.createElement("fieldset", {
        "class": "row link"
      }, wp.element.createElement("label", {
        title: "Links to:"
      }, wp.element.createElement(Dashicon, {
        icon: "admin-links"
      })), wp.element.createElement(URLInput, {
        value: attributes.link,
        onChange: function onChange(content) {
          return setAttributes({
            link: content
          });
        },
        placeholder: "https://www.uri.edu/",
        className: "meta-field"
      })));
    } // generate editor view of the card itself


    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes); // set the tooltip

      var title = "";

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-card-block-form"
      }, wp.element.createElement("div", {
        className: classes,
        title: title
      }, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        type: "image",
        value: attributes.mediaID,
        render: function render(_ref2) {
          var open = _ref2.open;
          return getImageButton(open);
        }
      }), wp.element.createElement("div", {
        "class": "cl-card-text"
      }, wp.element.createElement("h3", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __("Your card title"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        tagname: "p",
        value: attributes.body,
        placeholder: __("Your card text"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            button: content
          });
        },
        value: attributes.button,
        placeholder: __("Your button text"),
        keepPlaceholderOnFocus: true,
        className: "cl-button"
      })), meta);
    }; // generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(content) {
          return setAttributes({
            alignment: content
          });
        }
      }), !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, null, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: attributes.mediaID,
        render: function render(_ref3) {
          var open = _ref3.open;
          return wp.element.createElement(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Tool tip",
        onChange: function onChange(content) {
          return setAttributes({
            tooltip: content
          });
        },
        value: attributes.tooltip,
        className: "meta-field"
      }))));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    // @todo: use the media ID to build a src set
    var classes = classNames(attributes);

    if (!!attributes.alignment) {
      classes += " " + attributes.alignment;
    }

    return wp.element.createElement("div", null, wp.element.createElement("a", {
      "class": classes,
      href: attributes.link
    }, wp.element.createElement("img", {
      src: attributes.img,
      alt: attributes.alt
    }), wp.element.createElement("div", {
      "class": "cl-card-text"
    }, wp.element.createElement("h3", null, attributes.title), wp.element.createElement(RichText.Content, {
      tagName: "p",
      value: attributes.body
    })), wp.element.createElement("div", {
      "class": "cl-button"
    }, attributes.button)));
  }
});

/***/ }),

/***/ "./js/blocks/src/hero/block.js":
/*!*************************************!*\
  !*** ./js/blocks/src/hero/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    PlainText = _wp$editor.PlainText,
    URLInput = _wp$editor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/hero.png',
    alt: "button"
  });
};

var randomID = function randomID() {
  // https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};

registerBlockType('uri-cl/hero', {
  title: __('Hero'),
  icon: customIcon,
  category: 'cl-blocks',
  // the mediaID is what goes into the shortcode for front-end display
  // the img and alt are for editor placeholders
  attributes: {
    title: {
      type: 'string'
    },
    subhead: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
    mediaID: {
      type: 'number'
    },
    id: {
      type: 'string'
    },
    vid: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    alt: {
      type: 'string'
    },
    button: {
      type: 'string'
    },
    tooltip: {
      type: 'string'
    },
    format: {
      type: 'string'
    },
    animation: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
        return wp.element.createElement(MediaPlaceholder, {
          icon: 'format-image',
          className: className,
          labels: {
            title: 'Add an image',
            instructions: __('Drag an image, upload a new one or select a file from your library.')
          },
          onSelect: function onSelect(media) {
            setAttributes({
              alt: media.alt,
              img: media.url,
              mediaID: media.id
            });
          },
          accept: "image/*",
          allowedTypes: ALLOWED_MEDIA_TYPES
        });
      }
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("form", {
        className: "meta",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, wp.element.createElement("fieldset", {
        "class": "row link"
      }, wp.element.createElement("label", {
        title: "Links to:"
      }, wp.element.createElement(Dashicon, {
        icon: "admin-links"
      })), wp.element.createElement(URLInput, {
        value: attributes.link,
        onChange: function onChange(content) {
          return setAttributes({
            link: content
          });
        },
        placeholder: "https://www.uri.edu/",
        className: "meta-field"
      })));
    } // generate editor view of the hero itself


    var createContentEditForm = function createContentEditForm() {
      if (!attributes.id) {
        attributes.id = randomID();
      }

      var classes = "cl-hero";

      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      }

      if (!!attributes.format) {
        classes += ' ' + attributes.format;
      }

      if (!!isSelected) {
        classes += ' selected';
      }

      if (!!attributes.img) {
        classes += ' has-image';
      } else {
        classes += ' no-image';
      } // set the tooltip


      var title = "";

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-hero-block-form"
      }, wp.element.createElement("div", {
        className: classes,
        title: title
      }, wp.element.createElement("div", {
        "class": "poster"
      }, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        type: "image",
        value: attributes.mediaID,
        render: function render(_ref2) {
          var open = _ref2.open;
          return getImageButton(open);
        }
      })), wp.element.createElement("div", {
        "class": "cl-hero-text overlay"
      }, wp.element.createElement("div", {
        "class": "block"
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __("Your hero title"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("p", {
        "class": "subhead"
      }, wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            subhead: content
          });
        },
        value: attributes.subhead,
        placeholder: __("Your hero subtitle"),
        keepPlaceholderOnFocus: true,
        className: "subhead"
      })), wp.element.createElement("span", {
        "class": "cl-button"
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            button: content
          });
        },
        value: attributes.button,
        placeholder: __("Your button text"),
        keepPlaceholderOnFocus: true
      })), meta))));
    }; // generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(content) {
          return setAttributes({
            alignment: content
          });
        }
      }), !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, null, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: attributes.mediaID,
        render: function render(_ref3) {
          var open = _ref3.open;
          return wp.element.createElement(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __("Format")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Hero Format")
      }, ["default", "fullwidth", "super"].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === "default" ? '' : value;
        var isSelected = key === attributes.format;
        return wp.element.createElement(Button, {
          key: key,
          isDefault: true,
          isPrimary: isSelected,
          "aria-pressed": isSelected,
          onClick: function onClick(content) {
            return setAttributes({
              format: key
            });
          }
        }, capitalizedValue);
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Youtube ID",
        onChange: function onChange(content) {
          return setAttributes({
            vid: content
          });
        },
        value: attributes.vid,
        className: "meta-field vid",
        help: "For creating a video hero."
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Tool tip",
        onChange: function onChange(content) {
          return setAttributes({
            tooltip: content
          });
        },
        value: attributes.tooltip,
        className: "meta-field"
      }))));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    // @todo: use the media ID to build a src set
    var classes = "cl-hero";

    if (!!attributes.className) {
      // @todo this gets automatically applied to wrapper... remove it?
      classes += " " + attributes.className;
    }

    if (!!attributes.format) {
      classes += " " + attributes.format;
    }

    var bg = "";

    if (!!attributes.img) {
      bg = "background-image:url(" + attributes.img + ")";
    }

    var still = "still";

    if (!!attributes.vid) {
      still = "poster";
    }

    var button = "";

    if (!!attributes.button && !!attributes.link) {
      button = wp.element.createElement("a", {
        "class": "cl-button",
        href: attributes.link
      }, attributes.button);
    } // @todo add still photo animations... e.g. "animation shift"


    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("div", {
      "class": "overlay"
    }, wp.element.createElement("div", {
      "class": "block"
    }, wp.element.createElement("h1", null, attributes.title), wp.element.createElement("p", null, attributes.subhead), button)), wp.element.createElement("div", {
      id: attributes.id,
      "data-id": attributes.vid,
      "class": still,
      style: bg
    }));
  }
});

/***/ }),

/***/ "./js/blocks/src/hero2/block.js":
/*!**************************************!*\
  !*** ./js/blocks/src/hero2/block.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'uri-cl/button'];
var TEMPLATE = [['core/heading', {
  level: 1,
  placeholder: 'My Hero',
  blockControls: {}
}], ['core/paragraph', {
  placeholder: '',
  dropCap: false
}], ['uri-cl/button', {}]];
var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/hero.png',
    alt: "button"
  });
};

registerBlockType('uri-cl/hero2', {
  title: __('hero2'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    title: {
      type: 'string'
    },
    alignment: {
      type: 'string'
    },
    mediaID: {
      type: 'number'
    },
    vid: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    alt: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
        return wp.element.createElement(MediaPlaceholder, {
          icon: 'format-image',
          className: className,
          labels: {
            title: 'Add an image',
            instructions: __('Drag an image, upload a new one or select a file from your library.')
          },
          onSelect: function onSelect(media) {
            setAttributes({
              alt: media.alt,
              img: media.url,
              mediaID: media.id
            });
          },
          accept: "image/*",
          allowedTypes: ALLOWED_MEDIA_TYPES
        });
      }
    };

    var createContentEditForm = function createContentEditForm() {
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": "cl-hero2"
      }, wp.element.createElement("div", {
        "class": "poster"
      }, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        type: "image",
        value: attributes.mediaID,
        render: function render(_ref2) {
          var open = _ref2.open;
          return getImageButton(open);
        }
      })), wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
        templateLock: "all"
      })));
    }; // generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(content) {
          return setAttributes({
            alignment: content
          });
        }
      }));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var classes = "cl-hero";

    if (!!attributes.className) {
      // @todo this gets automatically applied to wrapper... remove it?
      classes += " " + attributes.className;
    }

    if (!!attributes.alignment) {
      classes += " " + attributes.alignment;
    }

    if (!!attributes.format) {
      classes += " " + attributes.format;
    }

    var bg = "";

    if (!!attributes.img) {
      bg = "background-image:url(" + attributes.img + ")";
    }

    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("div", {
      "class": "overlay"
    }, wp.element.createElement("div", {
      "class": "block"
    }, wp.element.createElement("h1", null, attributes.title), wp.element.createElement(InnerBlocks.Content, null))), wp.element.createElement("div", {
      id: "hero1",
      "data-id": attributes.vid,
      "class": "poster",
      style: bg
    }));
  }
});

/***/ }),

/***/ "./js/blocks/src/metric/block.js":
/*!***************************************!*\
  !*** ./js/blocks/src/metric/block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/metric.png',
    alt: "metric"
  });
};

var classNames = function classNames(attributes) {
  var classes = "cl-metric";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.style) {
    classes += " " + attributes.style;
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
  }

  return classes;
};

registerBlockType('uri-cl/metric', {
  title: __('Metric'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    metric: {
      type: 'string'
    },
    caption: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    alignment: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    // generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes); // set the tooltip

      var title = "";

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-metric-block-form"
      }, wp.element.createElement("div", {
        className: classes,
        title: title
      }, wp.element.createElement("span", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            metric: content
          });
        },
        value: attributes.metric,
        placeholder: __("100%"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("span", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            caption: content
          });
        },
        tagname: "p",
        value: attributes.caption,
        placeholder: __("metrics on this page"),
        keepPlaceholderOnFocus: true
      }))));
    }; // generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(content) {
          return setAttributes({
            alignment: content
          });
        }
      }));
    }; // generate sidebar inspector controls for other custom attributes
    // @todo: technically, you can have a clear and dark metric
    // 				our buttongroup only allows users to select one


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Tool tip",
        onChange: function onChange(content) {
          return setAttributes({
            tooltip: content
          });
        },
        value: attributes.tooltip,
        className: "meta-field"
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __("Metric Style")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Metric Style")
      }, ["standard", "clear", "dark", "overlay"].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === "default" ? '' : value;
        var isSelected = key === attributes.style;
        return wp.element.createElement(Button, {
          key: key,
          isDefault: true,
          isPrimary: isSelected,
          "aria-pressed": isSelected,
          onClick: function onClick(content) {
            return setAttributes({
              style: key
            });
          }
        }, capitalizedValue);
      }))))));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var classes = classNames(attributes);
    var title = "";

    if (!!attributes.tooltip) {
      title = attributes.tooltip;
    }

    return wp.element.createElement("div", {
      "class": classes,
      title: title
    }, wp.element.createElement("span", null, attributes.metric), wp.element.createElement("span", null, attributes.caption));
  }
});

/***/ }),

/***/ "./js/blocks/src/notice/block.js":
/*!***************************************!*\
  !*** ./js/blocks/src/notice/block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'uri-cl/button'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Please note',
  dropCap: false
}]];
var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/notice.png',
    alt: "button"
  });
};

registerBlockType('uri-cl/notice', {
  title: __('Notice'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    style: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    var createContentEditForm = function createContentEditForm() {
      var classes = "cl-notice";

      if (!!attributes.className) {
        // @todo this gets automatically applied to wrapper... remove it?
        classes += " " + attributes.className;
      }

      if (!!attributes.style) {
        classes += " " + attributes.style;
      }

      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })));
    };

    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __("Notice Style")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Notice Style")
      }, ["default", "urgent"].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === "default" ? '' : value;
        var isSelected = key === attributes.style;
        return wp.element.createElement(Button, {
          key: key,
          isDefault: true,
          isPrimary: isSelected,
          "aria-pressed": isSelected,
          onClick: function onClick(content) {
            return setAttributes({
              style: key
            });
          }
        }, capitalizedValue);
      }))))));
    }; // send the editor interfaces to the view


    return [createContentEditForm(), createInspectorControls()];
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var classes = "cl-notice";

    if (!!attributes.className) {
      // @todo this gets automatically applied to wrapper... remove it?
      classes += " " + attributes.className;
    }

    if (!!attributes.style) {
      classes += " " + attributes.style;
    }

    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./js/blocks/src/panel/block.js":
/*!**************************************!*\
  !*** ./js/blocks/src/panel/block.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'uri-cl/button'];
var TEMPLATE = [['core/heading', {
  level: 1,
  placeholder: 'My Panel'
}], ['core/paragraph', {
  placeholder: '',
  dropCap: false
}], ['uri-cl/button', {}]];
var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/panel.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = "cl-panel";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.reverse) {
    classes += " reverse";
  }

  return classes;
};

registerBlockType('uri-cl/panel', {
  title: __('Panel'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    title: {
      type: 'string'
    },
    reverse: {
      type: 'boolean'
    },
    img: {
      type: 'string'
    },
    alt: {
      type: 'string'
    },
    mediaID: {
      type: 'number'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
        return wp.element.createElement(MediaPlaceholder, {
          icon: 'format-image',
          className: className,
          labels: {
            title: 'Add an image',
            instructions: __('Drag an image, upload a new one or select a file from your library.')
          },
          onSelect: function onSelect(media) {
            setAttributes({
              alt: media.alt,
              img: media.url,
              mediaID: media.id
            });
          },
          accept: "image/*",
          allowedTypes: ALLOWED_MEDIA_TYPES
        });
      }
    };

    var classes = classNames(attributes);

    var createContentEditForm = function createContentEditForm() {
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement("figure", {
        "class": "poster"
      }, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        type: "image",
        value: attributes.mediaID,
        render: function render(_ref2) {
          var open = _ref2.open;
          return getImageButton(open);
        }
      })), wp.element.createElement("article", null, wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      }))));
    };

    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, null, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: attributes.mediaID,
        render: function render(_ref3) {
          var open = _ref3.open;
          return wp.element.createElement(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __("Panel Style")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Panel Style")
      }, ["standard", "reverse"].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === "default" ? '' : value;
        var isSelected = key === attributes.style;
        return wp.element.createElement(Button, {
          key: key,
          isDefault: true,
          isPrimary: isSelected,
          "aria-pressed": isSelected,
          onClick: function onClick(content) {
            return setAttributes({
              reverse: "reverse" == key
            });
          }
        }, capitalizedValue);
      }))))));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var classes = classNames(attributes);
    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("figure", null, wp.element.createElement("img", {
      src: attributes.img,
      alt: attributes.alt
    })), wp.element.createElement("article", null, wp.element.createElement(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./js/blocks/src/quote/block.js":
/*!**************************************!*\
  !*** ./js/blocks/src/quote/block.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/paragraph'];
var TEMPLATE = [['core/paragraph', {
  placeholder: '',
  dropCap: false
}]];
var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/quote.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = "cl-quote";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.reverse) {
    classes += " reverse";
  }

  return classes;
};

registerBlockType('uri-cl/quote', {
  title: __('Quote'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    quote: {
      type: 'string'
    },
    citation: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    alt: {
      type: 'string'
    },
    mediaID: {
      type: 'number'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
        return wp.element.createElement(MediaPlaceholder, {
          icon: 'format-image',
          className: className,
          labels: {
            title: 'Add an image',
            instructions: __('Drag an image, upload a new one or select a file from your library.')
          },
          onSelect: function onSelect(media) {
            setAttributes({
              alt: media.alt,
              img: media.url,
              mediaID: media.id
            });
          },
          accept: "image/*",
          allowedTypes: ALLOWED_MEDIA_TYPES
        });
      }
    };

    var classes = classNames(attributes);

    var createContentEditForm = function createContentEditForm() {
      var imageClass = !!attributes.mediaID ? "cl-quote-image" : "";
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement("div", {
        "class": imageClass
      }, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        type: "image",
        value: attributes.mediaID,
        render: function render(_ref2) {
          var open = _ref2.open;
          return getImageButton(open);
        }
      })), wp.element.createElement("blockquote", null, wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })), wp.element.createElement("cite", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            citation: content
          });
        },
        value: attributes.citation,
        placeholder: __("Anonymous"),
        keepPlaceholderOnFocus: true
      }))));
    };

    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, null, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          setAttributes({
            alt: media.alt,
            img: media.url,
            mediaID: media.id
          });
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: attributes.mediaID,
        render: function render(_ref3) {
          var open = _ref3.open;
          return wp.element.createElement(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var classes = classNames(attributes);
    var imageStyle = "background-image:url(" + attributes.img + ")";
    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("div", {
      "class": "cl-quote-image",
      style: imageStyle
    }), wp.element.createElement("blockquote", null, wp.element.createElement(InnerBlocks.Content, null)), wp.element.createElement("cite", null, attributes.citation));
  }
});

/***/ }),

/***/ "./js/blocks/src/tabs/block.js":
/*!*************************************!*\
  !*** ./js/blocks/src/tabs/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['uri-cl/tab'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/tabs.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = "cl-tabs";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  return classes;
};

var getTabsTemplate = function getTabsTemplate(tabs) {
  return _toConsumableArray(Array(tabs)).map(function (x) {
    return ['uri-cl/tab', {}];
  });
};

registerBlockType('uri-cl/tabs', {
  title: __('Tabs'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    tabs: {
      type: 'number',
      default: 2
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    // generate the image or the add image section
    var classes = classNames(attributes); // generate sidebar inspector controls for other custom attributes

    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(RangeControl, {
        label: __("Tabs"),
        value: attributes.tabs,
        onChange: function onChange(nextTabs) {
          setAttributes({
            tabs: nextTabs
          });
        },
        min: 2,
        max: 6
      }))));
    };

    var createContentEditForm = function createContentEditForm() {
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement(InnerBlocks, {
        template: getTabsTemplate(attributes.tabs),
        templateLock: "all",
        allowedBlocks: ALLOWED_BLOCKS
      })));
    }; // send the editor interfaces to the view


    return [createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var classes = classNames(attributes);
    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./js/blocks/src/tabs/tab.js":
/*!***********************************!*\
  !*** ./js/blocks/src/tabs/tab.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/tab.png',
    alt: "button"
  });
};

registerBlockType('uri-cl/tab', {
  title: __('Tab'),
  icon: customIcon,
  parent: ['uri-cl/tabs'],
  category: 'cl-blocks',
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    return wp.element.createElement("div", {
      "class": "cl-tab"
    }, wp.element.createElement(InnerBlocks, {
      templateLock: false
    }));
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return wp.element.createElement("div", {
      "class": "cl-tab"
    }, wp.element.createElement(InnerBlocks.Content, null));
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvaGVyby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL2hlcm8yL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvbWV0cmljL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvbm90aWNlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvcGFuZWwvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9xdW90ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL3RhYnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy90YWJzL3RhYi5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiZWRpdG9yIiwiUGxhaW5UZXh0IiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwicGxhY2Vob2xkZXIiLCJkcm9wQ2FwIiwiY3VzdG9tSWNvbiIsIlVSSV9DTF9VUkwiLCJjbGFzc05hbWVzIiwiYXR0cmlidXRlcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJhbGlnbm1lbnQiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsInR5cGUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNvbnRlbnQiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwic2F2ZSIsIlVSTElucHV0IiwiY29tcG9uZW50cyIsIkRhc2hpY29uIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJidWlsZFNob3J0Q29kZSIsImFyZ3MiLCJzaG9ydGNvZGUiLCJsaW5rIiwidGV4dCIsInRvb2x0aXAiLCJzdHlsZSIsImlzU2VsZWN0ZWQiLCJtZXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUluc3BlY3RvckNvbnRyb2xzIiwibWFwIiwidmFsdWUiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImtleSIsIm8iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJhd0hUTUwiLCJ3aXRoTm90aWNlcyIsIk1lZGlhUGxhY2Vob2xkZXIiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJib2R5IiwibWVkaWFJRCIsImltZyIsImFsdCIsImJ1dHRvbiIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwiaW5zdHJ1Y3Rpb25zIiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJyYW5kb21JRCIsIlM0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwic3ViaGVhZCIsInZpZCIsImZvcm1hdCIsImFuaW1hdGlvbiIsImJnIiwic3RpbGwiLCJsZXZlbCIsImJsb2NrQ29udHJvbHMiLCJtZXRyaWMiLCJjYXB0aW9uIiwicmV2ZXJzZSIsInF1b3RlIiwiY2l0YXRpb24iLCJpbWFnZUNsYXNzIiwiaW1hZ2VTdHlsZSIsIlJhbmdlQ29udHJvbCIsImdldFRhYnNUZW1wbGF0ZSIsInRhYnMiLCJBcnJheSIsIngiLCJkZWZhdWx0IiwibmV4dFRhYnMiLCJwYXJlbnQiLCJzdXBwb3J0cyIsImluc2VydGVyIiwicmV1c2FibGUiLCJodG1sIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0lDVFFBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFFUEcsaUIsR0FDR0YsRUFBRSxDQUFDRyxNLENBRE5ELGlCO2lCQVlHRixFQUFFLENBQUNJLE07SUFUTkMsUyxjQUFB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QUQsQ0FGcUI7QUFHOUIyQixNQUFJLEVBQUVSLFVBSHdCO0FBSS9COEYsUUFBTSxFQUFFLENBQUUsYUFBRixDQUp1QjtBQUs5QnJGLFVBQVEsRUFBRSxXQUxvQjtBQU8vQnNGLFVBQVEsRUFBRTtBQUNUQyxZQUFRLEVBQUUsS0FERDtBQUVUQyxZQUFRLEVBQUUsS0FGRDtBQUdUQyxRQUFJLEVBQUU7QUFIRyxHQVBxQjtBQWMvQnZGLE1BZCtCLHNCQWNnQjtBQUFBLFFBQXhDUixVQUF3QyxRQUF4Q0EsVUFBd0M7QUFBQSxRQUE1QkUsU0FBNEIsUUFBNUJBLFNBQTRCO0FBQUEsUUFBakJPLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUM5QyxXQUNDO0FBQUssZUFBTTtBQUFYLE9BQ0MseUJBQUMsV0FBRDtBQUFhLGtCQUFZLEVBQUc7QUFBNUIsTUFERCxDQUREO0FBS0EsR0FwQjhCO0FBb0I1QjtBQUVISSxNQXRCK0IsdUJBc0JWO0FBQUEsUUFBZGIsVUFBYyxTQUFkQSxVQUFjO0FBQ3BCLFdBQ0M7QUFBSyxlQUFNO0FBQVgsT0FDQyx5QkFBQyxXQUFELENBQWEsT0FBYixPQURELENBREQ7QUFLQTtBQTVCOEIsQ0FBZixDQUFqQixDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vYm94b3V0L2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuaW1wb3J0ICcuL2hlcm8vYmxvY2snO1xuaW1wb3J0ICcuL2hlcm8yL2Jsb2NrJztcbmltcG9ydCAnLi9tZXRyaWMvYmxvY2snO1xuaW1wb3J0ICcuL25vdGljZS9ibG9jayc7XG5pbXBvcnQgJy4vcGFuZWwvYmxvY2snO1xuaW1wb3J0ICcuL3F1b3RlL2Jsb2NrJztcbmltcG9ydCAnLi90YWJzL3RhYic7XG5pbXBvcnQgJy4vdGFicy9ibG9jayc7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5lZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQndXJpLWNsL2J1dHRvbidcbl07XG5jb25zdCBURU1QTEFURSA9IFtcbiAgWydjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJveG91dCBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfV0sXG5dO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9ib3hvdXQucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoYXR0cmlidXRlcykgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFwiY2wtYm94b3V0XCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5hbGlnbm1lbnRcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2JveG91dCcsIHsgICBcblxuICB0aXRsZTogX18oJ0JveG91dCcpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgYm94b3V0IHRpdGxlXCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHQ8aDE+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gxPlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXJcbn0gPSB3cC5lZGl0b3I7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9idXR0b24ucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cblxuXG5cbi8qKlxuICogUmVuZGVyIHRoZSBzaG9ydGNvZGVcbiAqL1xuZnVuY3Rpb24gYnVpbGRTaG9ydENvZGUoIGFyZ3MgKSB7XG5cdFx0Ly8gdW5mb3J0dW5hdGVseSwgR3V0ZW5iZXJnIGNhcmVzIGEgbG90IGFib3V0IHRoZSBvcmRlciBpbiB3aGljaCBhdHRyaWJ1dGVzIGFwcGVhcixcblx0XHQvLyBzbyB0aGlzIHByb2Nlc3MgaXMgYmVzdCBkb25lIG1hbnVhbGx5LlxuXHRcdHZhciBzaG9ydGNvZGUgPSAnW2NsLWJ1dHRvbiAnO1xuXHRcdGlmIChhcmdzLmxpbmspIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIGxpbms9XCInICsgYXJncy5saW5rICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MudGV4dCkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgdGV4dD1cIicgKyBhcmdzLnRleHQgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy50b29sdGlwKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyB0b29sdGlwPVwiJyArIGFyZ3MudG9vbHRpcCArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLnN0eWxlKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBzdHlsZT1cIicgKyBhcmdzLnN0eWxlICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MuY2xhc3NOYW1lKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBjbGFzcz1cIicgKyBhcmdzLmNsYXNzTmFtZSArICdcIic7XG5cdFx0fVxuXG5cdFx0c2hvcnRjb2RlICs9ICddJztcblxuXHRcdHJldHVybiBzaG9ydGNvZGU7XG5cbn1cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9idXR0b24nLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdCdXR0b24nKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXHRcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYnV0dG9uIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblxuXHRcdFx0bGV0IG1ldGE7XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdC8vIHNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0bGV0IGNsYXNzZXMgPSBcImNsLWJ1dHRvblwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtYnV0dG9uLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz17Y2xhc3Nlc30gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0ZXh0OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdC8vIEB0b2RvOiBkbyB3ZSBuZWVkIGFsaWdubWVudC9mbG9hdCBjb250cm9scyBvbiBidXR0b25zP1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblx0XHRcblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJCdXR0b24gU3R5bGVcIiApIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oIFwiQnV0dG9uIFN0eWxlXCIgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbIFwiZGVmYXVsdFwiLCBcInByb21pbmVudFwiLCBcImRpc2FibGVkXCIgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gXCJkZWZhdWx0XCIpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IGtleSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHQvL2NyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0dmFyIG8gPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoIHdwLmVsZW1lbnQuUmF3SFRNTCwgbnVsbCwgYnVpbGRTaG9ydENvZGUoIGF0dHJpYnV0ZXMgKSApO1xuXHRcdC8vIGNvbnNvbGUubG9nKG8pO1xuXHRcdHJldHVybiBvO1xuXHRcdFxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmVkaXRvcjtcblxuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PHN2Z1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0PlxuXHRcdFx0PHBhdGggZD1cIk0yLDggTDIsMTYgTDE2LDE2IEwxNiw4IEwyLDggWiBNMiw3IEwxNiw3IEwxNiwyIEwyLDIgTDIsNyBaIE0xOCwxIEwxOCwxNyBDMTgsMTcgMTgsMTggMTgsMTggQzE4LDE4IDE3LDE4IDE3LDE4IEwxLDE4IEMxLDE4IDAsMTggMCwxOCBDMCwxOCAwLDE3IDAsMTcgTDAsMSBDMCwxIDAsMCAwLDAgQzAsMCAxLDAgMSwwIEwxNywwIEMxNywwIDE4LDAgMTgsMCBDMTgsMCAxOCwxIDE4LDEgWiBNMTUsMTUgTDMsMTUgTDMsMTIgTDE1LDEyIEwxNSwxNSBaXCIvPlxuXHRcdDwvc3ZnPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLWNhcmRcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvY2FyZCcsIHsgICBcblxuICB0aXRsZTogX18oJ0NhcmQnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0Ly8gdGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH1cblx0fSxcblx0XG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmKGF0dHJpYnV0ZXMubWVkaWFJRCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdFxuXHRcdGxldCBtZXRhO1xuXHRcdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRtZXRhID0gKFxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpXG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtY2FyZC1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9oMz5cblx0XHRcdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBjYXJkIHRleHRcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgYnV0dG9uIHRleHRcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFxuXHRcdC8vIEB0b2RvOiB1c2UgdGhlIG1lZGlhIElEIHRvIGJ1aWxkIGEgc3JjIHNldFxuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGEgY2xhc3M9e2NsYXNzZXN9IGhyZWY9eyBhdHRyaWJ1dGVzLmxpbmsgfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17IGF0dHJpYnV0ZXMuaW1nIH0gYWx0PXsgYXR0cmlidXRlcy5hbHQgfSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1jYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdDxoMz57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHQuQ29udGVudFxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWJ1dHRvblwiPnsgYXR0cmlidXRlcy5idXR0b24gfTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdFxuXHRcdFxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5lZGl0b3I7XG5cblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2hlcm8ucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IHJhbmRvbUlEID0gKCkgPT4ge1xuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82ODYwODUzL2dlbmVyYXRlLXJhbmRvbS1zdHJpbmctZm9yLWRpdi1pZFxuXHRsZXQgUzQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICgoKDErTWF0aC5yYW5kb20oKSkqMHgxMDAwMCl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblx0fTtcblx0cmV0dXJuIChTNCgpK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStTNCgpK1M0KCkpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvaGVybycsIHsgICBcblxuICB0aXRsZTogX18oJ0hlcm8nKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0Ly8gdGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3ViaGVhZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdClcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBoZXJvIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblxuXHRcdFx0aWYoICEgYXR0cmlidXRlcy5pZCApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5pZCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR9XHRcdFx0XG5cblx0XHRcdGxldCBjbGFzc2VzID0gXCJjbC1oZXJvXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0fVxuXHRcdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtaGVyby10ZXh0IG92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgaGVybyB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwic3ViaGVhZFwiPjxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdWJoZWFkOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJoZWFkIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgaGVybyBzdWJ0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzdWJoZWFkXCJcblx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiRm9ybWF0XCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIkhlcm8gRm9ybWF0XCIgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbIFwiZGVmYXVsdFwiLCBcImZ1bGx3aWR0aFwiLCBcInN1cGVyXCIgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gXCJkZWZhdWx0XCIpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGZvcm1hdDoga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIllvdXR1YmUgSURcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdmlkOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmlkIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIkZvciBjcmVhdGluZyBhIHZpZGVvIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFxuXHRcdC8vIEB0b2RvOiB1c2UgdGhlIG1lZGlhIElEIHRvIGJ1aWxkIGEgc3JjIHNldFxuXG5cdFx0bGV0IGNsYXNzZXMgPSBcImNsLWhlcm9cIjtcblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHRcdH1cblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuZm9ybWF0XG5cdFx0fVxuXHRcdGxldCBiZyA9IFwiXCI7XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdGJnID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIGF0dHJpYnV0ZXMuaW1nICsgXCIpXCI7XG5cdFx0fVxuXHRcdGxldCBzdGlsbCA9IFwic3RpbGxcIjtcblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudmlkICkge1xuXHRcdFx0c3RpbGwgPSBcInBvc3RlclwiO1xuXHRcdH1cblx0XHRsZXQgYnV0dG9uID0gXCJcIjtcblx0XHRpZiggISEgYXR0cmlidXRlcy5idXR0b24gJiYgISEgYXR0cmlidXRlcy5saW5rICkge1xuXHRcdFx0YnV0dG9uID0gKCA8YSBjbGFzcz1cImNsLWJ1dHRvblwiIGhyZWY9eyBhdHRyaWJ1dGVzLmxpbmsgfT57IGF0dHJpYnV0ZXMuYnV0dG9uIH08L2E+ICk7XG5cdFx0fVxuXHRcdC8vIEB0b2RvIGFkZCBzdGlsbCBwaG90byBhbmltYXRpb25zLi4uIGUuZy4gXCJhbmltYXRpb24gc2hpZnRcIlxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0PGgxPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMT5cblx0XHRcdFx0XHRcdDxwPnsgYXR0cmlidXRlcy5zdWJoZWFkIH08L3A+XG5cdFx0XHRcdFx0XHR7YnV0dG9ufVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD17YXR0cmlidXRlcy5pZH0gZGF0YS1pZD17YXR0cmlidXRlcy52aWR9IGNsYXNzPXtzdGlsbH0gc3R5bGU9e2JnfT48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcyAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmVkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQndXJpLWNsL2J1dHRvbidcbl07XG5jb25zdCBURU1QTEFURSA9IFtcbiAgWydjb3JlL2hlYWRpbmcnLCB7IGxldmVsOiAxLCBwbGFjZWhvbGRlcjogJ015IEhlcm8nLCBibG9ja0NvbnRyb2xzOiB7fSB9XSxcbiAgWydjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9XSxcbiAgWyd1cmktY2wvYnV0dG9uJywge31dXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9oZXJvLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvaGVybzInLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdoZXJvMicpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHR2aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmKGF0dHJpYnV0ZXMubWVkaWFJRCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtaGVybzJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9XCJhbGxcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRsZXQgY2xhc3NlcyA9IFwiY2wtaGVyb1wiO1xuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0XHR9XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdFx0fVxuXHRcdGlmICggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5mb3JtYXRcblx0XHR9XG5cdFx0bGV0IGJnID0gXCJcIjtcblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0YmcgPSBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgYXR0cmlidXRlcy5pbWcgKyBcIilcIjtcblx0XHR9XG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHQ8aDE+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJoZXJvMVwiIGRhdGEtaWQ9e2F0dHJpYnV0ZXMudmlkfSBjbGFzcz1cInBvc3RlclwiIHN0eWxlPXtiZ30+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmVkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL21ldHJpYy5wbmcnKX1cblx0XHRcdGFsdD1cIm1ldHJpY1wiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC1tZXRyaWNcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuc3R5bGVcblx0fVxuXHRpZiggISEgYXR0cmlidXRlcy5hbGlnbm1lbnQgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9tZXRyaWMnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdNZXRyaWMnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdG1ldHJpYzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblx0XHRcdFxuXHRcdFx0Ly8gc2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSBcIlwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1tZXRyaWMtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IG1ldHJpYzogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZXRyaWMgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCIxMDAlXCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgY2FwdGlvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHRhZ25hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJtZXRyaWNzIG9uIHRoaXMgcGFnZVwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdC8vIEB0b2RvOiB0ZWNobmljYWxseSwgeW91IGNhbiBoYXZlIGEgY2xlYXIgYW5kIGRhcmsgbWV0cmljXG5cdFx0Ly8gXHRcdFx0XHRvdXIgYnV0dG9uZ3JvdXAgb25seSBhbGxvd3MgdXNlcnMgdG8gc2VsZWN0IG9uZVxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIk1ldHJpYyBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJNZXRyaWMgU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJzdGFuZGFyZFwiLCBcImNsZWFyXCIsIFwiZGFya1wiLCBcIm92ZXJsYXlcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcImRlZmF1bHRcIikgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdHlsZToga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRpZiggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdDxzcGFuPnsgYXR0cmlidXRlcy5tZXRyaWMgfTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+eyBhdHRyaWJ1dGVzLmNhcHRpb24gfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5lZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J3VyaS1jbC9idXR0b24nXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnUGxlYXNlIG5vdGUnLCBkcm9wQ2FwOiBmYWxzZSB9XSxcbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL25vdGljZS5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL25vdGljZScsIHsgICBcblxuICB0aXRsZTogX18oJ05vdGljZScpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSBcImNsLW5vdGljZVwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5zdHlsZVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiTm90aWNlIFN0eWxlXCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIk5vdGljZSBTdHlsZVwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcImRlZmF1bHRcIiwgXCJ1cmdlbnRcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcImRlZmF1bHRcIikgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdHlsZToga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRsZXQgY2xhc3NlcyA9IFwiY2wtbm90aWNlXCI7XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHRcdH1cblxuXHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLnN0eWxlXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzXG59ID0gd3AuZWRpdG9yO1xuXG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J3VyaS1jbC9idXR0b24nXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9oZWFkaW5nJywgeyBsZXZlbDogMSwgcGxhY2Vob2xkZXI6ICdNeSBQYW5lbCcgfV0sXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfV0sXG4gIFsndXJpLWNsL2J1dHRvbicsIHt9XVxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvcGFuZWwucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoYXR0cmlidXRlcykgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFwiY2wtcGFuZWxcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMucmV2ZXJzZSApIHtcblx0XHRjbGFzc2VzICs9IFwiIHJldmVyc2VcIlxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9wYW5lbCcsIHsgICBcblxuICB0aXRsZTogX18oJ1BhbmVsJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRyZXZlcnNlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLm1lZGlhSUQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzPVwicG9zdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJQYW5lbCBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJQYW5lbCBTdHlsZVwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcInN0YW5kYXJkXCIsIFwicmV2ZXJzZVwiIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09IFwiZGVmYXVsdFwiKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHJldmVyc2U6IChcInJldmVyc2VcIiA9PSBrZXkpIH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cblx0XHRcdCk7XG5cdFx0fVxuICBcdFxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcbiAgXHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XHRcblx0XHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17YXR0cmlidXRlcy5pbWd9IGFsdD17YXR0cmlidXRlcy5hbHR9Lz5cblx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzXG59ID0gd3AuZWRpdG9yO1xuXG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9wYXJhZ3JhcGgnXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfV1cbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL3F1b3RlLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLXF1b3RlXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLnJldmVyc2UgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiByZXZlcnNlXCJcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvcXVvdGUnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdRdW90ZScpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0cXVvdGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2l0YXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgaW1hZ2VDbGFzcyA9ICggISEgYXR0cmlidXRlcy5tZWRpYUlEICkgPyBcImNsLXF1b3RlLWltYWdlXCIgOiBcIlwiO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz17aW1hZ2VDbGFzc30+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGJsb2NrcXVvdGU+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0PGNpdGU+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGNpdGF0aW9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNpdGF0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiQW5vbnltb3VzXCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L2NpdGU+XG5cdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcbiAgXHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cdFx0XG5cdFx0bGV0IGltYWdlU3R5bGUgPSBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgYXR0cmlidXRlcy5pbWcgKyBcIilcIjtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1xdW90ZS1pbWFnZVwiIHN0eWxlPXtpbWFnZVN0eWxlfT48L2Rpdj5cblx0XHRcdFx0XHRcdDxibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0XHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0PGNpdGU+e2F0dHJpYnV0ZXMuY2l0YXRpb259PC9jaXRlPlxuXHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XG5cblx0XHQpO1xuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRSYW5nZUNvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmVkaXRvcjtcblxuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J3VyaS1jbC90YWInXG5dO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS90YWJzLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLXRhYnNcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmNvbnN0IGdldFRhYnNUZW1wbGF0ZSA9ICggdGFicyApID0+IHtcblxuXHRyZXR1cm4gWy4uLkFycmF5KHRhYnMpXS5tYXAoZnVuY3Rpb24oeCl7XG5cdFx0cmV0dXJuIFsndXJpLWNsL3RhYicsIHt9XTtcblx0fSk7XG5cdFxufVxuXG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC90YWJzJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnVGFicycpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGFiczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAyLFxuXHRcdH0sXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJUYWJzXCIgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRhYnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0VGFicyApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFiczogbmV4dFRhYnMsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsgMiB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXsgNiB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG4gIFxuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBnZXRUYWJzVGVtcGxhdGUoIGF0dHJpYnV0ZXMudGFicyApIH1cblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9XCJhbGxcIlxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuICBcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XHRcblx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmVkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL3RhYi5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL3RhYicsIHsgICBcblxuICB0aXRsZTogX18oJ1RhYicpLFxuICBpY29uOiBjdXN0b21JY29uLFxuXHRwYXJlbnQ6IFsgJ3VyaS1jbC90YWJzJyBdLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRzdXBwb3J0czoge1xuXHRcdGluc2VydGVyOiBmYWxzZSxcblx0XHRyZXVzYWJsZTogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtdGFiXCI+XG5cdFx0XHRcdDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJjbC10YWJcIj5cblx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRcblx0XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==