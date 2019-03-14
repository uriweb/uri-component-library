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
      }));
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
      })), wp.element.createElement("fieldset", null, wp.element.createElement(PlainText, {
        className: "vid",
        onChange: function onChange(content) {
          return setAttributes({
            vid: content,
            id: content
          });
        },
        value: attributes.vid,
        placeholder: __("Youtube ID"),
        keepPlaceholderOnFocus: true
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
      })))), meta));
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
  placeholder: 'My Hero'
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
      }, wp.element.createElement("section", {
        "class": "cl-tab"
      }, wp.element.createElement(InnerBlocks, {
        template: getTabsTemplate(attributes.tabs),
        templateLock: "all",
        allowedBlocks: ALLOWED_BLOCKS
      }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvaGVyby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL2hlcm8yL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvbWV0cmljL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvbm90aWNlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvcGFuZWwvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9xdW90ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL3RhYnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy90YWJzL3RhYi5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiZWRpdG9yIiwiUGxhaW5UZXh0IiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwicGxhY2Vob2xkZXIiLCJkcm9wQ2FwIiwiY3VzdG9tSWNvbiIsIlVSSV9DTF9VUkwiLCJjbGFzc05hbWVzIiwiYXR0cmlidXRlcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJhbGlnbm1lbnQiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsInR5cGUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNvbnRlbnQiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwic2F2ZSIsIlVSTElucHV0IiwiY29tcG9uZW50cyIsIkRhc2hpY29uIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJidWlsZFNob3J0Q29kZSIsImFyZ3MiLCJzaG9ydGNvZGUiLCJsaW5rIiwidGV4dCIsInRvb2x0aXAiLCJzdHlsZSIsImlzU2VsZWN0ZWQiLCJtZXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUluc3BlY3RvckNvbnRyb2xzIiwibWFwIiwidmFsdWUiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImtleSIsIm8iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJhd0hUTUwiLCJ3aXRoTm90aWNlcyIsIk1lZGlhUGxhY2Vob2xkZXIiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJib2R5IiwibWVkaWFJRCIsImltZyIsImFsdCIsImJ1dHRvbiIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwiaW5zdHJ1Y3Rpb25zIiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJyYW5kb21JRCIsIlM0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwic3ViaGVhZCIsInZpZCIsImZvcm1hdCIsImFuaW1hdGlvbiIsImJnIiwic3RpbGwiLCJsZXZlbCIsIm1ldHJpYyIsImNhcHRpb24iLCJyZXZlcnNlIiwicXVvdGUiLCJjaXRhdGlvbiIsImltYWdlQ2xhc3MiLCJpbWFnZVN0eWxlIiwiUmFuZ2VDb250cm9sIiwiZ2V0VGFic1RlbXBsYXRlIiwidGFicyIsIkFycmF5IiwieCIsImRlZmF1bHQiLCJuZXh0VGFicyIsInBhcmVudCIsInN1cHBvcnRzIiwiaW5zZXJ0ZXIiLCJyZXVzYWJsZSIsImh0bWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7SUNUUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVQRyxpQixHQUNHRixFQUFFLENBQUNHLE0sQ0FETkQsaUI7aUJBWUdGLEVBQUUsQ0FBQ0ksTTtJQVROQyxTLGNBQUFBLFM7SUFDQUMsUSxjQUFB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USxFQUFFLEtBREQ7QUFFVEMsWUFBUSxFQUFFLEtBRkQ7QUFHVEMsUUFBSSxFQUFFO0FBSEcsR0FQcUI7QUFjL0J0RixNQWQrQixzQkFjZ0I7QUFBQSxRQUF4Q1IsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsUUFBNUJFLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLFFBQWpCTyxhQUFpQixRQUFqQkEsYUFBaUI7QUFDOUMsV0FDQztBQUFLLGVBQU07QUFBWCxPQUNDLHlCQUFDLFdBQUQ7QUFBYSxrQkFBWSxFQUFHO0FBQTVCLE1BREQsQ0FERDtBQUtBLEdBcEI4QjtBQW9CNUI7QUFFSEksTUF0QitCLHVCQXNCVjtBQUFBLFFBQWRiLFVBQWMsU0FBZEEsVUFBYztBQUNwQixXQUNDO0FBQUssZUFBTTtBQUFYLE9BQ0MseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERCxDQUREO0FBS0E7QUE1QjhCLENBQWYsQ0FBakIsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2JveG91dC9ibG9jayc7XG5pbXBvcnQgJy4vYnV0dG9uL2Jsb2NrJztcbmltcG9ydCAnLi9jYXJkL2Jsb2NrJztcbmltcG9ydCAnLi9oZXJvL2Jsb2NrJztcbmltcG9ydCAnLi9oZXJvMi9ibG9jayc7XG5pbXBvcnQgJy4vbWV0cmljL2Jsb2NrJztcbmltcG9ydCAnLi9ub3RpY2UvYmxvY2snO1xuaW1wb3J0ICcuL3BhbmVsL2Jsb2NrJztcbmltcG9ydCAnLi9xdW90ZS9ibG9jayc7XG5pbXBvcnQgJy4vdGFicy90YWInO1xuaW1wb3J0ICcuL3RhYnMvYmxvY2snO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcyAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmVkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCd1cmktY2wvYnV0dG9uJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYm94b3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9XSxcbl07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2JveG91dC5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC1ib3hvdXRcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYm94b3V0JywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQm94b3V0JyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBib3hvdXQgdGl0bGVcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdDxoMT57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDE+XG5cdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2J1dHRvbi5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuXG5cblxuLyoqXG4gKiBSZW5kZXIgdGhlIHNob3J0Y29kZVxuICovXG5mdW5jdGlvbiBidWlsZFNob3J0Q29kZSggYXJncyApIHtcblx0XHQvLyB1bmZvcnR1bmF0ZWx5LCBHdXRlbmJlcmcgY2FyZXMgYSBsb3QgYWJvdXQgdGhlIG9yZGVyIGluIHdoaWNoIGF0dHJpYnV0ZXMgYXBwZWFyLFxuXHRcdC8vIHNvIHRoaXMgcHJvY2VzcyBpcyBiZXN0IGRvbmUgbWFudWFsbHkuXG5cdFx0dmFyIHNob3J0Y29kZSA9ICdbY2wtYnV0dG9uICc7XG5cdFx0aWYgKGFyZ3MubGluaykge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgbGluaz1cIicgKyBhcmdzLmxpbmsgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy50ZXh0KSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyB0ZXh0PVwiJyArIGFyZ3MudGV4dCArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLnRvb2x0aXApIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHRvb2x0aXA9XCInICsgYXJncy50b29sdGlwICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3Muc3R5bGUpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHN0eWxlPVwiJyArIGFyZ3Muc3R5bGUgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5jbGFzc05hbWUpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIGNsYXNzPVwiJyArIGFyZ3MuY2xhc3NOYW1lICsgJ1wiJztcblx0XHR9XG5cblx0XHRzaG9ydGNvZGUgKz0gJ10nO1xuXG5cdFx0cmV0dXJuIHNob3J0Y29kZTtcblxufVxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2J1dHRvbicsIHsgICBcblxuICB0aXRsZTogX18oJ0J1dHRvbicpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0ZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cdFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXG5cdFx0XHRsZXQgbWV0YTtcblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3M9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0Ly8gc2V0IHRoZSBjbGFzc25hbWVzXG5cdFx0XHRsZXQgY2xhc3NlcyA9IFwiY2wtYnV0dG9uXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gc2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSBcIlwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1idXR0b24tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPXtjbGFzc2VzfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRleHQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGV4dCB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgYnV0dG9uIHRleHRcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIkJ1dHRvbiBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJCdXR0b24gU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJkZWZhdWx0XCIsIFwicHJvbWluZW50XCIsIFwiZGlzYWJsZWRcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcImRlZmF1bHRcIikgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdHlsZToga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdC8vY3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHR2YXIgbyA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCggd3AuZWxlbWVudC5SYXdIVE1MLCBudWxsLCBidWlsZFNob3J0Q29kZSggYXR0cmlidXRlcyApICk7XG5cdFx0Ly8gY29uc29sZS5sb2cobyk7XG5cdFx0cmV0dXJuIG87XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRJY29uQnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25cbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuZWRpdG9yO1xuXG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8c3ZnXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHQ+XG5cdFx0XHQ8cGF0aCBkPVwiTTIsOCBMMiwxNiBMMTYsMTYgTDE2LDggTDIsOCBaIE0yLDcgTDE2LDcgTDE2LDIgTDIsMiBMMiw3IFogTTE4LDEgTDE4LDE3IEMxOCwxNyAxOCwxOCAxOCwxOCBDMTgsMTggMTcsMTggMTcsMTggTDEsMTggQzEsMTggMCwxOCAwLDE4IEMwLDE4IDAsMTcgMCwxNyBMMCwxIEMwLDEgMCwwIDAsMCBDMCwwIDEsMCAxLDAgTDE3LDAgQzE3LDAgMTgsMCAxOCwwIEMxOCwwIDE4LDEgMTgsMSBaIE0xNSwxNSBMMywxNSBMMywxMiBMMTUsMTIgTDE1LDE1IFpcIi8+XG5cdFx0PC9zdmc+XG5cdCk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoYXR0cmlidXRlcykgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFwiY2wtY2FyZFwiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiggISEgYXR0cmlidXRlcy5hbGlnbm1lbnQgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9jYXJkJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQ2FyZCcpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHQvLyB0aGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpXG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtY2FyZC1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9oMz5cblx0XHRcdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBjYXJkIHRleHRcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgYnV0dG9uIHRleHRcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFxuXHRcdC8vIEB0b2RvOiB1c2UgdGhlIG1lZGlhIElEIHRvIGJ1aWxkIGEgc3JjIHNldFxuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGEgY2xhc3M9e2NsYXNzZXN9IGhyZWY9eyBhdHRyaWJ1dGVzLmxpbmsgfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17IGF0dHJpYnV0ZXMuaW1nIH0gYWx0PXsgYXR0cmlidXRlcy5hbHQgfSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1jYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdDxoMz57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHQuQ29udGVudFxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWJ1dHRvblwiPnsgYXR0cmlidXRlcy5idXR0b24gfTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdFxuXHRcdFxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5lZGl0b3I7XG5cblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2hlcm8ucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IHJhbmRvbUlEID0gKCkgPT4ge1xuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82ODYwODUzL2dlbmVyYXRlLXJhbmRvbS1zdHJpbmctZm9yLWRpdi1pZFxuXHRsZXQgUzQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICgoKDErTWF0aC5yYW5kb20oKSkqMHgxMDAwMCl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblx0fTtcblx0cmV0dXJuIChTNCgpK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStTNCgpK1M0KCkpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvaGVybycsIHsgICBcblxuICB0aXRsZTogX18oJ0hlcm8nKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0Ly8gdGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3ViaGVhZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidmlkXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB2aWQ6IGNvbnRlbnQsIGlkOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZpZCB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXR1YmUgSURcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdClcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBoZXJvIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblxuXHRcdFx0aWYoICEgYXR0cmlidXRlcy5pZCApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5pZCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR9XHRcdFx0XG5cblx0XHRcdGxldCBjbGFzc2VzID0gXCJjbC1oZXJvXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0fVxuXHRcdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtaGVyby10ZXh0IG92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgaGVybyB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwic3ViaGVhZFwiPjxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdWJoZWFkOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJoZWFkIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgaGVybyBzdWJ0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzdWJoZWFkXCJcblx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiRm9ybWF0XCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIkhlcm8gRm9ybWF0XCIgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbIFwiZGVmYXVsdFwiLCBcImZ1bGx3aWR0aFwiLCBcInN1cGVyXCIgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gXCJkZWZhdWx0XCIpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGZvcm1hdDoga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XG5cdFx0Ly8gQHRvZG86IHVzZSB0aGUgbWVkaWEgSUQgdG8gYnVpbGQgYSBzcmMgc2V0XG5cblx0XHRsZXQgY2xhc3NlcyA9IFwiY2wtaGVyb1wiO1xuXHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdFx0fVxuXHRcdGlmICggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5mb3JtYXRcblx0XHR9XG5cdFx0bGV0IGJnID0gXCJcIjtcblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0YmcgPSBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgYXR0cmlidXRlcy5pbWcgKyBcIilcIjtcblx0XHR9XG5cdFx0bGV0IHN0aWxsID0gXCJzdGlsbFwiO1xuXHRcdGlmICggISEgYXR0cmlidXRlcy52aWQgKSB7XG5cdFx0XHRzdGlsbCA9IFwicG9zdGVyXCI7XG5cdFx0fVxuXHRcdGxldCBidXR0b24gPSBcIlwiO1xuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLmJ1dHRvbiAmJiAhISBhdHRyaWJ1dGVzLmxpbmsgKSB7XG5cdFx0XHRidXR0b24gPSAoIDxhIGNsYXNzPVwiY2wtYnV0dG9uXCIgaHJlZj17IGF0dHJpYnV0ZXMubGluayB9PnsgYXR0cmlidXRlcy5idXR0b24gfTwvYT4gKTtcblx0XHR9XG5cdFx0Ly8gQHRvZG8gYWRkIHN0aWxsIHBob3RvIGFuaW1hdGlvbnMuLi4gZS5nLiBcImFuaW1hdGlvbiBzaGlmdFwiXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHQ8aDE+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gxPlxuXHRcdFx0XHRcdFx0PHA+eyBhdHRyaWJ1dGVzLnN1YmhlYWQgfTwvcD5cblx0XHRcdFx0XHRcdHtidXR0b259XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPXthdHRyaWJ1dGVzLmlkfSBkYXRhLWlkPXthdHRyaWJ1dGVzLnZpZH0gY2xhc3M9e3N0aWxsfSBzdHlsZT17Ymd9PjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRJY29uQnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuZWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCd1cmktY2wvYnV0dG9uJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvaGVhZGluZycsIHsgbGV2ZWw6IDEsIHBsYWNlaG9sZGVyOiAnTXkgSGVybycgfV0sXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfV0sXG4gIFsndXJpLWNsL2J1dHRvbicsIHt9XVxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvaGVyby5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2hlcm8yJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnaGVybzInKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLm1lZGlhSUQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWhlcm8yXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPVwiYWxsXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFx0bGV0IGNsYXNzZXMgPSBcImNsLWhlcm9cIjtcblx0XHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdFx0fVxuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHRcdH1cblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuZm9ybWF0XG5cdFx0fVxuXHRcdGxldCBiZyA9IFwiXCI7XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdGJnID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIGF0dHJpYnV0ZXMuaW1nICsgXCIpXCI7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0PGgxPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiaGVybzFcIiBkYXRhLWlkPXthdHRyaWJ1dGVzLnZpZH0gY2xhc3M9XCJwb3N0ZXJcIiBzdHlsZT17Ymd9PjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpO1xuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5lZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9tZXRyaWMucG5nJyl9XG5cdFx0XHRhbHQ9XCJtZXRyaWNcIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoYXR0cmlidXRlcykgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFwiY2wtbWV0cmljXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLnN0eWxlXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvbWV0cmljJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnTWV0cmljJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRtZXRyaWM6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH1cblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cdFx0XHRcblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWV0cmljLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBtZXRyaWM6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWV0cmljIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiMTAwJVwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGNhcHRpb246IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwibWV0cmljcyBvbiB0aGlzIHBhZ2VcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHQvLyBAdG9kbzogdGVjaG5pY2FsbHksIHlvdSBjYW4gaGF2ZSBhIGNsZWFyIGFuZCBkYXJrIG1ldHJpY1xuXHRcdC8vIFx0XHRcdFx0b3VyIGJ1dHRvbmdyb3VwIG9ubHkgYWxsb3dzIHVzZXJzIHRvIHNlbGVjdCBvbmVcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdG9vbHRpcDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJNZXRyaWMgU3R5bGVcIiApIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oIFwiTWV0cmljIFN0eWxlXCIgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbIFwic3RhbmRhcmRcIiwgXCJjbGVhclwiLCBcImRhcmtcIiwgXCJvdmVybGF5XCIgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gXCJkZWZhdWx0XCIpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IGtleSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdGxldCB0aXRsZSA9IFwiXCI7XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHQ8c3Bhbj57IGF0dHJpYnV0ZXMubWV0cmljIH08L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnsgYXR0cmlidXRlcy5jYXB0aW9uIH08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRJY29uQnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuZWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCd1cmktY2wvYnV0dG9uJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1BsZWFzZSBub3RlJywgZHJvcENhcDogZmFsc2UgfV0sXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9ub3RpY2UucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9ub3RpY2UnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdOb3RpY2UnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gXCJjbC1ub3RpY2VcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuc3R5bGVcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIk5vdGljZSBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJOb3RpY2UgU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJkZWZhdWx0XCIsIFwidXJnZW50XCIgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gXCJkZWZhdWx0XCIpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IGtleSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFx0bGV0IGNsYXNzZXMgPSBcImNsLW5vdGljZVwiO1xuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0XHR9XG5cblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5zdHlsZVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmVkaXRvcjtcblxuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCd1cmktY2wvYnV0dG9uJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvaGVhZGluZycsIHsgbGV2ZWw6IDEsIHBsYWNlaG9sZGVyOiAnTXkgUGFuZWwnIH1dLFxuICBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH1dLFxuICBbJ3VyaS1jbC9idXR0b24nLCB7fV1cbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL3BhbmVsLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLXBhbmVsXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLnJldmVyc2UgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiByZXZlcnNlXCJcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvcGFuZWwnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdQYW5lbCcpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cmV2ZXJzZToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzcz1cInBvc3RlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiUGFuZWwgU3R5bGVcIiApIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oIFwiUGFuZWwgU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJzdGFuZGFyZFwiLCBcInJldmVyc2VcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcImRlZmF1bHRcIikgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyByZXZlcnNlOiAoXCJyZXZlcnNlXCIgPT0ga2V5KSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXG5cdFx0XHQpO1xuXHRcdH1cbiAgXHRcblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG4gIFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9Plx0XG5cdFx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2F0dHJpYnV0ZXMuaW1nfSBhbHQ9e2F0dHJpYnV0ZXMuYWx0fS8+XG5cdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmVkaXRvcjtcblxuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH1dXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9xdW90ZS5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC1xdW90ZVwiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiggISEgYXR0cmlidXRlcy5yZXZlcnNlICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgcmV2ZXJzZVwiXG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL3F1b3RlJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnUXVvdGUnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHF1b3RlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNpdGF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmKGF0dHJpYnV0ZXMubWVkaWFJRCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGltYWdlQ2xhc3MgPSAoICEhIGF0dHJpYnV0ZXMubWVkaWFJRCApID8gXCJjbC1xdW90ZS1pbWFnZVwiIDogXCJcIjtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9e2ltYWdlQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdDxjaXRlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBjaXRhdGlvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jaXRhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIkFub255bW91c1wiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9jaXRlPlxuXHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG4gIFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXHRcdFxuXHRcdGxldCBpbWFnZVN0eWxlID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIGF0dHJpYnV0ZXMuaW1nICsgXCIpXCI7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtcXVvdGUtaW1hZ2VcIiBzdHlsZT17aW1hZ2VTdHlsZX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdFx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdDxjaXRlPnthdHRyaWJ1dGVzLmNpdGF0aW9ufTwvY2l0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFxuXG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0UmFuZ2VDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5lZGl0b3I7XG5cblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCd1cmktY2wvdGFiJ1xuXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvdGFicy5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC10YWJzXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5jb25zdCBnZXRUYWJzVGVtcGxhdGUgPSAoIHRhYnMgKSA9PiB7XG5cblx0cmV0dXJuIFsuLi5BcnJheSh0YWJzKV0ubWFwKGZ1bmN0aW9uKHgpe1xuXHRcdHJldHVybiBbJ3VyaS1jbC90YWInLCB7fV07XG5cdH0pO1xuXHRcbn1cblxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvdGFicycsIHsgICBcblxuICB0aXRsZTogX18oJ1RhYnMnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHRhYnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMixcblx0XHR9LFxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiVGFic1wiICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50YWJzIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dFRhYnMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhYnM6IG5leHRUYWJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17IDYgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuICBcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImNsLXRhYlwiPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IGdldFRhYnNUZW1wbGF0ZSggYXR0cmlidXRlcy50YWJzICkgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlTG9jaz1cImFsbFwiXG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH0gLz5cblx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG4gIFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cdFxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdElubmVyQmxvY2tzXG59ID0gd3AuZWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvdGFiLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvdGFiJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnVGFiJyksXG4gIGljb246IGN1c3RvbUljb24sXG5cdHBhcmVudDogWyAndXJpLWNsL3RhYnMnIF0sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdHN1cHBvcnRzOiB7XG5cdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJjbC10YWJcIj5cblx0XHRcdFx0PElubmVyQmxvY2tzIHRlbXBsYXRlTG9jaz17IGZhbHNlIH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cImNsLXRhYlwiPlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9