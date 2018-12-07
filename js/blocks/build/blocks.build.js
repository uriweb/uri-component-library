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
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InnerBlocks = _wp$blocks.InnerBlocks;
var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
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
    src: URI_CL_URL + 'i/boxout.png',
    alt: "button"
  });
};
/**
 * Assemble the shortcode
 */


function buildShortCode(args) {
  // unfortunately, Gutenberg cares a lot about the order in which attributes appear,
  // so this process is best done manually.
  var shortcode = '[cl-boxout';

  if (args.title) {
    shortcode += ' title="' + args.title + '"';
  }

  if (args.alignment == 'left' || args.alignment == 'right') {
    shortcode += ' float="' + args.alignment + '"';
  }

  if (args.className) {
    shortcode += ' class="' + args.className + '"';
  }

  shortcode += ']' + args.body + '[/cl-boxout]';
  return shortcode;
}

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
      })), wp.element.createElement(RichText, {
        tagName: "div",
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        value: attributes.body,
        multiline: "p",
        placeholder: __("Your boxout text"),
        keepPlaceholderOnFocus: true
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
    var o = wp.element.createElement(wp.element.RawHTML, null, buildShortCode(attributes)); // console.log(o);

    return o;
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
        setAttributes = _ref.setAttributes;

    // generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
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
      })), wp.element.createElement("div", {
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
      })));
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
/**
 * Render the shortcode
 */


function buildShortCode(args) {
  // var attributes = Object.keys(args).map(e => (`${e}="${args[e]}"`));
  // var as = attributes.join(' ');
  // return '[cl-card ' + as + ']';
  // unfortunately, Gutenberg cares a lot about the order in which attributes appear,
  // so this process is best done manually.
  var shortcode = '[cl-card ';

  if (args.title) {
    shortcode += ' title="' + args.title + '"';
  }

  if (args.body) {
    shortcode += ' body="' + args.body + '"'; //shortcode += ' body="' + wp.element.renderToString( args.body ) + '"';
  }

  if (args.link) {
    shortcode += ' link="' + args.link + '"';
  }

  if (args.mediaID) {
    shortcode += ' img="' + args.mediaID + '"';
  } else {
    if (args.img) {
      shortcode += ' img="' + args.img + '"';
    }

    if (args.alt) {
      shortcode += ' alt="' + args.alt + '"';
    }
  }

  if (args.button) {
    shortcode += ' button="' + args.button + '"';
  }

  if (args.className) {
    shortcode += ' class="' + args.className + '"';
  }

  if (args.alignment == 'left' || args.alignment == 'right') {
    shortcode += ' float="' + args.alignment + '"';
  }

  shortcode += ']';
  return shortcode;
}

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
        setAttributes = _ref.setAttributes;

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
    }; // generate editor view of the card itself


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
        tagName: "h2",
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
      })), wp.element.createElement("div", {
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
    var o = wp.element.createElement(wp.element.RawHTML, null, buildShortCode(attributes)); // console.log(o);

    return o;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwiYmxvY2tzIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJJbm5lckJsb2NrcyIsImVkaXRvciIsIlBsYWluVGV4dCIsIlJpY2hUZXh0IiwiTWVkaWFVcGxvYWQiLCJJbnNwZWN0b3JDb250cm9scyIsIkJsb2NrQ29udHJvbHMiLCJUb29sYmFyIiwiSWNvbkJ1dHRvbiIsIkJsb2NrQWxpZ25tZW50VG9vbGJhciIsImN1c3RvbUljb24iLCJVUklfQ0xfVVJMIiwiYnVpbGRTaG9ydENvZGUiLCJhcmdzIiwic2hvcnRjb2RlIiwidGl0bGUiLCJhbGlnbm1lbnQiLCJjbGFzc05hbWUiLCJib2R5IiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInR5cGUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNvbnRlbnQiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwic2F2ZSIsIm8iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJhd0hUTUwiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJsaW5rIiwidGV4dCIsInRvb2x0aXAiLCJzdHlsZSIsImNyZWF0ZUluc3BlY3RvckNvbnRyb2xzIiwibWFwIiwidmFsdWUiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImtleSIsImlzU2VsZWN0ZWQiLCJtZWRpYUlEIiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJtZWRpYSIsInVybCIsImlkIiwib3BlbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztJQ0RRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO2lCQUlKQyxFQUFFLENBQUNFLE07SUFGTkMsaUIsY0FBQUEsaUI7SUFDQUMsVyxjQUFBQSxXO2lCQVdHSixFQUFFLENBQUNLLE07SUFSTkMsUyxjQUFBQSxTO0lBQ0FDLFEsY0FBQUEsUTtJQUNBQyxXLGNBQUFBLFc7SUFDQUMsaUIsY0FBQUEsaUI7SUFDQUMsYSxjQUFBQSxhO0lBQ0FDLE8sY0FBQUEsTztJQUNBQyxVLGNBQUFBLFU7SUFDQUMscUIsY0FB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QXJDLEVBQThDLElBQTlDLEVBQW9EcEIsY0FBYyxDQUFFUyxVQUFGLENBQWxFLENBQVIsQ0FGb0IsQ0FHcEI7O0FBQ0EsV0FBT1EsQ0FBUDtBQUVBO0FBcksrQixDQUFoQixDQUFqQixDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vYm94b3V0L2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG5cdElubmVyQmxvY2tzIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmVkaXRvcjtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYm94b3V0LnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cbi8qKlxuICogQXNzZW1ibGUgdGhlIHNob3J0Y29kZVxuICovXG5mdW5jdGlvbiBidWlsZFNob3J0Q29kZSggYXJncyApIHtcblx0Ly8gdW5mb3J0dW5hdGVseSwgR3V0ZW5iZXJnIGNhcmVzIGEgbG90IGFib3V0IHRoZSBvcmRlciBpbiB3aGljaCBhdHRyaWJ1dGVzIGFwcGVhcixcblx0Ly8gc28gdGhpcyBwcm9jZXNzIGlzIGJlc3QgZG9uZSBtYW51YWxseS5cblx0dmFyIHNob3J0Y29kZSA9ICdbY2wtYm94b3V0Jztcblx0aWYgKGFyZ3MudGl0bGUpIHtcblx0XHRzaG9ydGNvZGUgKz0gJyB0aXRsZT1cIicgKyBhcmdzLnRpdGxlICsgJ1wiJztcblx0fVxuXHRpZiAoYXJncy5hbGlnbm1lbnQgPT0gJ2xlZnQnIHx8IGFyZ3MuYWxpZ25tZW50ID09ICdyaWdodCcgKSB7XG5cdFx0c2hvcnRjb2RlICs9ICcgZmxvYXQ9XCInICsgYXJncy5hbGlnbm1lbnQgKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdHNob3J0Y29kZSArPSAnIGNsYXNzPVwiJyArIGFyZ3MuY2xhc3NOYW1lICsgJ1wiJztcblx0fVxuXG5cdHNob3J0Y29kZSArPSAnXScgKyBhcmdzLmJvZHkgKyAnWy9jbC1ib3hvdXRdJztcblxuXHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9ib3hvdXQnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdCb3hvdXQnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdFxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWJveG91dFwiPlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImgyXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgYm94b3V0IHRpdGxlXCIpfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoZWFkaW5nXCJcblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwiZGl2XCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBib2R5OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRtdWx0aWxpbmU9XCJwXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBib3hvdXQgdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdHZhciBvID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCB3cC5lbGVtZW50LlJhd0hUTUwsIG51bGwsIGJ1aWxkU2hvcnRDb2RlKCBhdHRyaWJ1dGVzICkgKTtcblx0XHQvLyBjb25zb2xlLmxvZyhvKTtcblx0XHRyZXR1cm4gbztcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYnV0dG9uLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cblxuXG4vKipcbiAqIFJlbmRlciB0aGUgc2hvcnRjb2RlXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkU2hvcnRDb2RlKCBhcmdzICkge1xuXHRcdC8vIHVuZm9ydHVuYXRlbHksIEd1dGVuYmVyZyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgb3JkZXIgaW4gd2hpY2ggYXR0cmlidXRlcyBhcHBlYXIsXG5cdFx0Ly8gc28gdGhpcyBwcm9jZXNzIGlzIGJlc3QgZG9uZSBtYW51YWxseS5cblx0XHR2YXIgc2hvcnRjb2RlID0gJ1tjbC1idXR0b24gJztcblx0XHRpZiAoYXJncy5saW5rKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLnRleHQpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHRleHQ9XCInICsgYXJncy50ZXh0ICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MudG9vbHRpcCkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgdG9vbHRpcD1cIicgKyBhcmdzLnRvb2x0aXAgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5zdHlsZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgc3R5bGU9XCInICsgYXJncy5zdHlsZSArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgY2xhc3M9XCInICsgYXJncy5jbGFzc05hbWUgKyAnXCInO1xuXHRcdH1cblxuXHRcdHNob3J0Y29kZSArPSAnXSc7XG5cblx0XHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYnV0dG9uJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQnV0dG9uJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblx0XG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGV4dDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50ZXh0IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1ldGFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbD5MaW5rcyB0bzo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGxpbms6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHQvLyBAdG9kbzogZG8gd2UgbmVlZCBhbGlnbm1lbnQvZmxvYXQgY29udHJvbHMgb24gYnV0dG9ucz9cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cdFx0XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiQnV0dG9uIFN0eWxlXCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIkJ1dHRvbiBTdHlsZVwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcImRlZmF1bHRcIiwgXCJwcm9taW5lbnRcIiwgXCJkaXNhYmxlZFwiIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09IFwiZGVmYXVsdFwiKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHN0eWxlOiBrZXkgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdG9vbHRpcDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Ly9jcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdHZhciBvID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCB3cC5lbGVtZW50LlJhd0hUTUwsIG51bGwsIGJ1aWxkU2hvcnRDb2RlKCBhdHRyaWJ1dGVzICkgKTtcblx0XHQvLyBjb25zb2xlLmxvZyhvKTtcblx0XHRyZXR1cm4gbztcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFVcGxvYWQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRJY29uQnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXJcbn0gPSB3cC5lZGl0b3I7XG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PHN2Z1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0PlxuXHRcdFx0PHBhdGggZD1cIk0yLDggTDIsMTYgTDE2LDE2IEwxNiw4IEwyLDggWiBNMiw3IEwxNiw3IEwxNiwyIEwyLDIgTDIsNyBaIE0xOCwxIEwxOCwxNyBDMTgsMTcgMTgsMTggMTgsMTggQzE4LDE4IDE3LDE4IDE3LDE4IEwxLDE4IEMxLDE4IDAsMTggMCwxOCBDMCwxOCAwLDE3IDAsMTcgTDAsMSBDMCwxIDAsMCAwLDAgQzAsMCAxLDAgMSwwIEwxNywwIEMxNywwIDE4LDAgMTgsMCBDMTgsMCAxOCwxIDE4LDEgWiBNMTUsMTUgTDMsMTUgTDMsMTIgTDE1LDEyIEwxNSwxNSBaXCIvPlxuXHRcdDwvc3ZnPlxuXHQpO1xufVxuXG5cbi8qKlxuICogUmVuZGVyIHRoZSBzaG9ydGNvZGVcbiAqL1xuZnVuY3Rpb24gYnVpbGRTaG9ydENvZGUoIGFyZ3MgKSB7XG5cdC8vIHZhciBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoYXJncykubWFwKGUgPT4gKGAke2V9PVwiJHthcmdzW2VdfVwiYCkpO1xuXHQvLyB2YXIgYXMgPSBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcblx0Ly8gcmV0dXJuICdbY2wtY2FyZCAnICsgYXMgKyAnXSc7XG5cdC8vIHVuZm9ydHVuYXRlbHksIEd1dGVuYmVyZyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgb3JkZXIgaW4gd2hpY2ggYXR0cmlidXRlcyBhcHBlYXIsXG5cdC8vIHNvIHRoaXMgcHJvY2VzcyBpcyBiZXN0IGRvbmUgbWFudWFsbHkuXG5cdHZhciBzaG9ydGNvZGUgPSAnW2NsLWNhcmQgJztcblx0aWYgKGFyZ3MudGl0bGUpIHtcblx0XHRzaG9ydGNvZGUgKz0gJyB0aXRsZT1cIicgKyBhcmdzLnRpdGxlICsgJ1wiJztcblx0fVxuXHRcblx0aWYgKGFyZ3MuYm9keSkge1xuXHRcdHNob3J0Y29kZSArPSAnIGJvZHk9XCInICsgYXJncy5ib2R5ICsgJ1wiJztcblx0XHQvL3Nob3J0Y29kZSArPSAnIGJvZHk9XCInICsgd3AuZWxlbWVudC5yZW5kZXJUb1N0cmluZyggYXJncy5ib2R5ICkgKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmxpbmspIHtcblx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdH1cblx0aWYgKGFyZ3MubWVkaWFJRCkge1xuXHRcdHNob3J0Y29kZSArPSAnIGltZz1cIicgKyBhcmdzLm1lZGlhSUQgKyAnXCInO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChhcmdzLmltZykge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgaW1nPVwiJyArIGFyZ3MuaW1nICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MuYWx0KSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBhbHQ9XCInICsgYXJncy5hbHQgKyAnXCInO1xuXHRcdH1cblx0fVxuXHRpZiAoYXJncy5idXR0b24pIHtcblx0XHRzaG9ydGNvZGUgKz0gJyBidXR0b249XCInICsgYXJncy5idXR0b24gKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdHNob3J0Y29kZSArPSAnIGNsYXNzPVwiJyArIGFyZ3MuY2xhc3NOYW1lICsgJ1wiJztcblx0fVxuXHRpZiAoYXJncy5hbGlnbm1lbnQgPT0gJ2xlZnQnIHx8IGFyZ3MuYWxpZ25tZW50ID09ICdyaWdodCcgKSB7XG5cdFx0c2hvcnRjb2RlICs9ICcgZmxvYXQ9XCInICsgYXJncy5hbGlnbm1lbnQgKyAnXCInO1xuXHR9XG5cblx0c2hvcnRjb2RlICs9ICddJztcblxuXHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvY2FyZCcsIHsgICBcblxuICB0aXRsZTogX18oJ0NhcmQnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblxuXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5pbWcpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRQaWNrIGFuIGltYWdlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZFwiPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImgyXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGluZ1wiXG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImRpdlwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWV0YVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkxpbmtzIHRvOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgbGluazogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHR2YXIgbyA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCggd3AuZWxlbWVudC5SYXdIVE1MLCBudWxsLCBidWlsZFNob3J0Q29kZSggYXR0cmlidXRlcyApICk7XG5cdFx0Ly8gY29uc29sZS5sb2cobyk7XG5cdFx0cmV0dXJuIG87XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=