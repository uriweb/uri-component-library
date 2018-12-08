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
    body: {
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
        tagName: "h2",
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __("Your boxout title"),
        className: "heading",
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
    return wp.element.createElement("div", {
      "class": "cl-boxout"
    }, wp.element.createElement("h1", null, attributes.title), wp.element.createElement(InnerBlocks.Content, null));
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
        tagName: "div",
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        value: attributes.body,
        multiline: "p",
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
      classes += " " + attributes.className;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJlZGl0b3IiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIk1lZGlhVXBsb2FkIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0NvbnRyb2xzIiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJCbG9ja0FsaWdubWVudFRvb2xiYXIiLCJJbm5lckJsb2NrcyIsIkFMTE9XRURfQkxPQ0tTIiwiVEVNUExBVEUiLCJwbGFjZWhvbGRlciIsImN1c3RvbUljb24iLCJVUklfQ0xfVVJMIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwidHlwZSIsImJvZHkiLCJhbGlnbm1lbnQiLCJlZGl0IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNvbnRlbnQiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwic2F2ZSIsImNvbXBvbmVudHMiLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsIkJhc2VDb250cm9sIiwiVGV4dENvbnRyb2wiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsImJ1aWxkU2hvcnRDb2RlIiwiYXJncyIsInNob3J0Y29kZSIsImxpbmsiLCJ0ZXh0IiwidG9vbHRpcCIsInN0eWxlIiwiaXNTZWxlY3RlZCIsIm1ldGEiLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsIm1hcCIsInZhbHVlIiwiY2FwaXRhbGl6ZWRWYWx1ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJrZXkiLCJvIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJSYXdIVE1MIiwibWVkaWFJRCIsImltZyIsImFsdCIsImJ1dHRvbiIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0lDRFFBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFFUEcsaUIsR0FDR0YsRUFBRSxDQUFDRyxNLENBRE5ELGlCO2lCQVlHRixFQUFFLENBQUNJLE07SUFUTkMsUyxjQUFBQSxTO0lBQ0FDLFEsY0FBQUEsUTtJQUNBQyxXLGNBQUFBLFc7SUFDQUMsaUIsY0FBQUEsaUI7SUFDQUMsYSxjQUFBQSxhO0lB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IiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vYm94b3V0L2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcyAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmVkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCd1cmktY2wvYnV0dG9uJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYm94b3V0IGNvbnRlbnQuLi4nIH1dLFxuXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYm94b3V0LnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYm94b3V0JywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQm94b3V0JyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtYm94b3V0XCI+XG5cdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwiaDJcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBib3hvdXQgdGl0bGVcIil9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImhlYWRpbmdcIlxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1ib3hvdXRcIj5cblx0XHRcdFx0XHQ8aDE+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gxPlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYnV0dG9uLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cblxuXG4vKipcbiAqIFJlbmRlciB0aGUgc2hvcnRjb2RlXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkU2hvcnRDb2RlKCBhcmdzICkge1xuXHRcdC8vIHVuZm9ydHVuYXRlbHksIEd1dGVuYmVyZyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgb3JkZXIgaW4gd2hpY2ggYXR0cmlidXRlcyBhcHBlYXIsXG5cdFx0Ly8gc28gdGhpcyBwcm9jZXNzIGlzIGJlc3QgZG9uZSBtYW51YWxseS5cblx0XHR2YXIgc2hvcnRjb2RlID0gJ1tjbC1idXR0b24gJztcblx0XHRpZiAoYXJncy5saW5rKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLnRleHQpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHRleHQ9XCInICsgYXJncy50ZXh0ICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MudG9vbHRpcCkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgdG9vbHRpcD1cIicgKyBhcmdzLnRvb2x0aXAgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5zdHlsZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgc3R5bGU9XCInICsgYXJncy5zdHlsZSArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgY2xhc3M9XCInICsgYXJncy5jbGFzc05hbWUgKyAnXCInO1xuXHRcdH1cblxuXHRcdHNob3J0Y29kZSArPSAnXSc7XG5cblx0XHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYnV0dG9uJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQnV0dG9uJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblx0XG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXG5cdFx0XHRsZXQgbWV0YTtcblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWV0YVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkxpbmtzIHRvOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgbGluazogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1idXR0b25cIj5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0ZXh0OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIkJ1dHRvbiBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJCdXR0b24gU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJkZWZhdWx0XCIsIFwicHJvbWluZW50XCIsIFwiZGlzYWJsZWRcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcImRlZmF1bHRcIikgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdHlsZToga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdC8vY3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHR2YXIgbyA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCggd3AuZWxlbWVudC5SYXdIVE1MLCBudWxsLCBidWlsZFNob3J0Q29kZSggYXR0cmlidXRlcyApICk7XG5cdFx0Ly8gY29uc29sZS5sb2cobyk7XG5cdFx0cmV0dXJuIG87XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyXG59ID0gd3AuZWRpdG9yO1xuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvblxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxzdmdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdD5cblx0XHRcdDxwYXRoIGQ9XCJNMiw4IEwyLDE2IEwxNiwxNiBMMTYsOCBMMiw4IFogTTIsNyBMMTYsNyBMMTYsMiBMMiwyIEwyLDcgWiBNMTgsMSBMMTgsMTcgQzE4LDE3IDE4LDE4IDE4LDE4IEMxOCwxOCAxNywxOCAxNywxOCBMMSwxOCBDMSwxOCAwLDE4IDAsMTggQzAsMTggMCwxNyAwLDE3IEwwLDEgQzAsMSAwLDAgMCwwIEMwLDAgMSwwIDEsMCBMMTcsMCBDMTcsMCAxOCwwIDE4LDAgQzE4LDAgMTgsMSAxOCwxIFogTTE1LDE1IEwzLDE1IEwzLDEyIEwxNSwxMiBMMTUsMTUgWlwiLz5cblx0XHQ8L3N2Zz5cblx0KTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2NhcmQnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdDYXJkJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5pbWcpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRQaWNrIGFuIGltYWdlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdFxuXHRcdGxldCBtZXRhO1xuXHRcdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1ldGFcIj5cblx0XHRcdFx0XHQ8bGFiZWw+TGlua3MgdG86PC9sYWJlbD5cblx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGxpbms6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZFwiPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGluZ1wiXG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImRpdlwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XG5cdFx0Ly8gQHRvZG86IHVzZSB0aGUgbWVkaWEgSUQgdG8gYnVpbGQgYSBzcmMgc2V0XG5cblx0XHRsZXQgY2xhc3NlcyA9IFwiY2wtY2FyZFwiO1xuXHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8YSBjbGFzcz17Y2xhc3Nlc30gaHJlZj17IGF0dHJpYnV0ZXMubGluayB9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXsgYXR0cmlidXRlcy5pbWcgfSBhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9IC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMz5cblx0XHRcdFx0XHRcdDxSaWNoVGV4dC5Db250ZW50IHRhZ05hbWU9XCJwXCIgdmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1idXR0b25cIj57IGF0dHJpYnV0ZXMuYnV0dG9uIH08L2Rpdj5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==