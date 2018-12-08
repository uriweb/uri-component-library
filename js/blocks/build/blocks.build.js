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
  placeholder: 'Your boxout content...'
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
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": "cl-boxout"
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
    var classes = "cl-boxout";

    if (!!attributes.className) {
      // @todo this gets automatically applied to wrapper... remove it?
      classes += " " + attributes.className;
    }

    if (!!attributes.alignment) {
      classes += " " + attributes.alignment;
    }

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
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;
var _wp$components = wp.components,
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

    // generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var meta;

      if (!!isSelected) {
        meta = wp.element.createElement("div", {
          "class": "meta"
        }, wp.element.createElement("label", null, "Links to:"), wp.element.createElement(PlainText, {
          onChange: function onChange(content) {
            return setAttributes({
              link: content
            });
          },
          value: attributes.link,
          placeholder: "https://www.uri.edu/",
          className: "meta-field"
        }));
      }

      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": "cl-button"
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
var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;

var customIcon = function customIcon() {
  return wp.element.createElement("svg", {
    width: "20",
    height: "20",
    className: "dashicon"
  }, wp.element.createElement("path", {
    d: "M2,8 L2,16 L16,16 L16,8 L2,8 Z M2,7 L16,7 L16,2 L2,2 L2,7 Z M18,1 L18,17 C18,17 18,18 18,18 C18,18 17,18 17,18 L1,18 C1,18 0,18 0,18 C0,18 0,17 0,17 L0,1 C0,1 0,0 0,0 C0,0 1,0 1,0 L17,0 C17,0 18,0 18,0 C18,0 18,1 18,1 Z M15,15 L3,15 L3,12 L15,12 L15,15 Z"
  }));
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
      if (attributes.img) {
        return wp.element.createElement("img", {
          src: attributes.img,
          onClick: openEvent,
          className: "image"
        });
      } else {
        return wp.element.createElement("div", {
          className: "button-container"
        }, wp.element.createElement(Button, {
          onClick: openEvent,
          className: "button button-large"
        }, "Pick an image"));
      }
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("div", {
        "class": "meta"
      }, wp.element.createElement("label", null, "Links to:"), wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            link: content
          });
        },
        value: attributes.link,
        placeholder: "https://www.uri.edu/",
        className: "meta-field"
      }));
    } // generate editor view of the card itself


    var createContentEditForm = function createContentEditForm() {
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": "cl-card"
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
        className: "heading",
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
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
      }));
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
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    // @todo: use the media ID to build a src set
    var classes = "cl-card";

    if (!!attributes.className) {
      // @todo this gets automatically applied to wrapper... remove it?
      classes += " " + attributes.className;
    }

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJlZGl0b3IiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIk1lZGlhVXBsb2FkIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0NvbnRyb2xzIiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJCbG9ja0FsaWdubWVudFRvb2xiYXIiLCJJbm5lckJsb2NrcyIsIkFMTE9XRURfQkxPQ0tTIiwiVEVNUExBVEUiLCJwbGFjZWhvbGRlciIsImN1c3RvbUljb24iLCJVUklfQ0xfVVJMIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwidHlwZSIsImFsaWdubWVudCIsImVkaXQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGVzIiwiY3JlYXRlQ29udGVudEVkaXRGb3JtIiwiY29udGVudCIsImNyZWF0ZUJsb2NrQ29udHJvbHMiLCJzYXZlIiwiY2xhc3NlcyIsImNvbXBvbmVudHMiLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsIkJhc2VDb250cm9sIiwiVGV4dENvbnRyb2wiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsImJ1aWxkU2hvcnRDb2RlIiwiYXJncyIsInNob3J0Y29kZSIsImxpbmsiLCJ0ZXh0IiwidG9vbHRpcCIsInN0eWxlIiwiaXNTZWxlY3RlZCIsIm1ldGEiLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsIm1hcCIsInZhbHVlIiwiY2FwaXRhbGl6ZWRWYWx1ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJrZXkiLCJvIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJSYXdIVE1MIiwiYm9keSIsIm1lZGlhSUQiLCJpbWciLCJhbHQiLCJidXR0b24iLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsIm1lZGlhIiwidXJsIiwiaWQiLCJvcGVuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0lDRFFBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFFUEcsaUIsR0FDR0YsRUFBRSxDQUFDRyxNLENBRE5ELGlCO2lCQVlHRixFQUFFLENBQUNJLE07SUFUTkMsUyxjQUFBQSxTO0lBQ0FDLFEsY0FBQUEsUTtJQUNBQyxXLGNBQUFBLFc7SUFDQUMsaUIsY0FBQUEsaUI7SUFDQUMsYSxjQUFBQSxhO0lB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QVY7QUFDQyxhQUFPLEVBQUMsR0FEVDtBQUVDLFdBQUssRUFBR0csVUFBVSxDQUFDdUM7QUFGcEIsTUFGRCxDQUZELEVBU0M7QUFBSyxlQUFNO0FBQVgsT0FBeUJ2QyxVQUFVLENBQUMyQyxNQUFwQyxDQVRELENBREQsQ0FERDtBQWlCQTtBQTlMK0IsQ0FBaEIsQ0FBakIsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2JveG91dC9ibG9jayc7XG5pbXBvcnQgJy4vYnV0dG9uL2Jsb2NrJztcbmltcG9ydCAnLi9jYXJkL2Jsb2NrJztcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5lZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQndXJpLWNsL2J1dHRvbidcbl07XG5jb25zdCBURU1QTEFURSA9IFtcbiAgWydjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJveG91dCBjb250ZW50Li4uJyB9XSxcbl07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2JveG91dC5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2JveG91dCcsIHsgICBcblxuICB0aXRsZTogX18oJ0JveG91dCcpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1ib3hvdXRcIj5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJveG91dCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFx0bGV0IGNsYXNzZXMgPSBcImNsLWJveG91dFwiO1xuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0XHR9XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHQ8aDE+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gxPlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYnV0dG9uLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cblxuXG4vKipcbiAqIFJlbmRlciB0aGUgc2hvcnRjb2RlXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkU2hvcnRDb2RlKCBhcmdzICkge1xuXHRcdC8vIHVuZm9ydHVuYXRlbHksIEd1dGVuYmVyZyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgb3JkZXIgaW4gd2hpY2ggYXR0cmlidXRlcyBhcHBlYXIsXG5cdFx0Ly8gc28gdGhpcyBwcm9jZXNzIGlzIGJlc3QgZG9uZSBtYW51YWxseS5cblx0XHR2YXIgc2hvcnRjb2RlID0gJ1tjbC1idXR0b24gJztcblx0XHRpZiAoYXJncy5saW5rKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLnRleHQpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHRleHQ9XCInICsgYXJncy50ZXh0ICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MudG9vbHRpcCkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgdG9vbHRpcD1cIicgKyBhcmdzLnRvb2x0aXAgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5zdHlsZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgc3R5bGU9XCInICsgYXJncy5zdHlsZSArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgY2xhc3M9XCInICsgYXJncy5jbGFzc05hbWUgKyAnXCInO1xuXHRcdH1cblxuXHRcdHNob3J0Y29kZSArPSAnXSc7XG5cblx0XHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYnV0dG9uJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQnV0dG9uJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblx0XG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXG5cdFx0XHRsZXQgbWV0YTtcblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWV0YVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkxpbmtzIHRvOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgbGluazogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1idXR0b25cIj5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0ZXh0OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIkJ1dHRvbiBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJCdXR0b24gU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJkZWZhdWx0XCIsIFwicHJvbWluZW50XCIsIFwiZGlzYWJsZWRcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcImRlZmF1bHRcIikgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdHlsZToga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdC8vY3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHR2YXIgbyA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCggd3AuZWxlbWVudC5SYXdIVE1MLCBudWxsLCBidWlsZFNob3J0Q29kZSggYXR0cmlidXRlcyApICk7XG5cdFx0Ly8gY29uc29sZS5sb2cobyk7XG5cdFx0cmV0dXJuIG87XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyXG59ID0gd3AuZWRpdG9yO1xuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvblxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxzdmdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdD5cblx0XHRcdDxwYXRoIGQ9XCJNMiw4IEwyLDE2IEwxNiwxNiBMMTYsOCBMMiw4IFogTTIsNyBMMTYsNyBMMTYsMiBMMiwyIEwyLDcgWiBNMTgsMSBMMTgsMTcgQzE4LDE3IDE4LDE4IDE4LDE4IEMxOCwxOCAxNywxOCAxNywxOCBMMSwxOCBDMSwxOCAwLDE4IDAsMTggQzAsMTggMCwxNyAwLDE3IEwwLDEgQzAsMSAwLDAgMCwwIEMwLDAgMSwwIDEsMCBMMTcsMCBDMTcsMCAxOCwwIDE4LDAgQzE4LDAgMTgsMSAxOCwxIFogTTE1LDE1IEwzLDE1IEwzLDEyIEwxNSwxMiBMMTUsMTUgWlwiLz5cblx0XHQ8L3N2Zz5cblx0KTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2NhcmQnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdDYXJkJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5pbWcpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRQaWNrIGFuIGltYWdlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdFxuXHRcdGxldCBtZXRhO1xuXHRcdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1ldGFcIj5cblx0XHRcdFx0XHQ8bGFiZWw+TGlua3MgdG86PC9sYWJlbD5cblx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGxpbms6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZFwiPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGluZ1wiXG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBib2R5OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGNhcmQgdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBidXR0b246IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFxuXHRcdC8vIEB0b2RvOiB1c2UgdGhlIG1lZGlhIElEIHRvIGJ1aWxkIGEgc3JjIHNldFxuXG5cdFx0bGV0IGNsYXNzZXMgPSBcImNsLWNhcmRcIjtcblx0XHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdFx0fVxuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGEgY2xhc3M9e2NsYXNzZXN9IGhyZWY9eyBhdHRyaWJ1dGVzLmxpbmsgfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17IGF0dHJpYnV0ZXMuaW1nIH0gYWx0PXsgYXR0cmlidXRlcy5hbHQgfSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1jYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdDxoMz57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHQuQ29udGVudFxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWJ1dHRvblwiPnsgYXR0cmlidXRlcy5idXR0b24gfTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdFxuXHRcdFxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9