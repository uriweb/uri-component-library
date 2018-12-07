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
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/block */ "./js/blocks/src/card/block.js");
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_block__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/block */ "./js/blocks/src/button/block.js");
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_block__WEBPACK_IMPORTED_MODULE_1__);



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
  setButtonStyle: function setButtonStyle(v) {
    var _this = this;

    console.log(v);
    return function () {
      _this.props.setAttributes({
        style: style,
        v: v
      });
    };
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
    }; //const MyButtonGroup = () => {};


    var setButtonStyle = function setButtonStyle(v) {
      console.log(v);
      console.log(attributes);
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement("label", null, "Button Style:")), wp.element.createElement(PanelRow, null, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Image Size')
      }, ['default', 'prominent', 'disabled'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === 'default' ? '' : value;
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
      })))));
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
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, "This text will show when the box is selected")));
    }; // send the editor interfaces to the view


    return [createBlockControls(), // createInspectorControls(),
    createContentEditForm()];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJlZGl0b3IiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJjdXN0b21JY29uIiwiVVJJX0NMX1VSTCIsImJ1aWxkU2hvcnRDb2RlIiwiYXJncyIsInNob3J0Y29kZSIsImxpbmsiLCJ0ZXh0IiwidG9vbHRpcCIsInN0eWxlIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwidHlwZSIsInNldEJ1dHRvblN0eWxlIiwidiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJlZGl0IiwiY3JlYXRlQ29udGVudEVkaXRGb3JtIiwiY29udGVudCIsImNyZWF0ZUJsb2NrQ29udHJvbHMiLCJhbGlnbm1lbnQiLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsIm1hcCIsInZhbHVlIiwiY2FwaXRhbGl6ZWRWYWx1ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJrZXkiLCJpc1NlbGVjdGVkIiwic2F2ZSIsIm8iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJhd0hUTUwiLCJNZWRpYVVwbG9hZCIsImJvZHkiLCJtZWRpYUlEIiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJtZWRpYSIsInVybCIsImlkIiwib3BlbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztJQ0FRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBQ0FHLGlCLEdBQXNCRixFQUFFLENBQUNHLE0sQ0FBekJELGlCO2lCQVNKRixFQUFFLENBQUNJLE07SUFQTkMsUyxjQUFBQSxTO0lBQ0FDLFEsY0FBQUEsUTtJQUNBQyxpQixjQUFBQSxpQjtJQUNBQyxhLGNBQUFBLGE7SUFDQUMsTyxjQUFBQSxPO0lBQ0FDLFUsY0FBQUEsVTtJQUNBQyxxQixjQUFBQSxxQjtxQkFPR1gsRUFBRSxDQUFDWSxVO0lBSk5DLFMsa0JBQUFBLFM7SUFDQUMsUSxrQkFBQUEsUTtJQUNBQyxNLGtCQUFBQSxNO0lBQ0FDLFcsa0JB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R3BCOztBQUNBLFdBQU91QixDQUFQO0FBRUE7QUFoSytCLENBQWhCLENBQWpCLEMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImltcG9ydCAnLi9jYXJkL2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2J1dHRvbi5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuXG5cblxuLyoqXG4gKiBSZW5kZXIgdGhlIHNob3J0Y29kZVxuICovXG5mdW5jdGlvbiBidWlsZFNob3J0Q29kZSggYXJncyApIHtcblx0XHQvLyB1bmZvcnR1bmF0ZWx5LCBHdXRlbmJlcmcgY2FyZXMgYSBsb3QgYWJvdXQgdGhlIG9yZGVyIGluIHdoaWNoIGF0dHJpYnV0ZXMgYXBwZWFyLFxuXHRcdC8vIHNvIHRoaXMgcHJvY2VzcyBpcyBiZXN0IGRvbmUgbWFudWFsbHkuXG5cdFx0dmFyIHNob3J0Y29kZSA9ICdbY2wtYnV0dG9uICc7XG5cdFx0aWYgKGFyZ3MubGluaykge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgbGluaz1cIicgKyBhcmdzLmxpbmsgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy50ZXh0KSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyB0ZXh0PVwiJyArIGFyZ3MudGV4dCArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLnRvb2x0aXApIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHRvb2x0aXA9XCInICsgYXJncy50b29sdGlwICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3Muc3R5bGUpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHN0eWxlPVwiJyArIGFyZ3Muc3R5bGUgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5jbGFzc05hbWUpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIGNsYXNzPVwiJyArIGFyZ3MuY2xhc3NOYW1lICsgJ1wiJztcblx0XHR9XG5cblx0XHRzaG9ydGNvZGUgKz0gJ10nO1xuXG5cdFx0cmV0dXJuIHNob3J0Y29kZTtcblxufVxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2J1dHRvbicsIHsgICBcblxuICB0aXRsZTogX18oJ0J1dHRvbicpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0ZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cdFxuXHRzZXRCdXR0b25TdHlsZSggdiApIHtcblx0XHRjb25zb2xlLmxvZyh2KTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IHN0eWxlLCB2IH0gKTtcblx0XHR9O1xuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGV4dDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50ZXh0IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1ldGFcIj5cblx0XHRcdFx0XHRcdDxsYWJlbD5MaW5rcyB0bzo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGxpbms6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHQvLyBAdG9kbzogZG8gd2UgbmVlZCBhbGlnbm1lbnQvZmxvYXQgY29udHJvbHMgb24gYnV0dG9ucz9cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cdFx0XG5cdFx0Ly9jb25zdCBNeUJ1dHRvbkdyb3VwID0gKCkgPT4ge307XG5cdFx0XG5cdFx0Y29uc3Qgc2V0QnV0dG9uU3R5bGUgPSAodikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2codik7XG5cdFx0XHRjb25zb2xlLmxvZyhhdHRyaWJ1dGVzKTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5CdXR0b24gU3R5bGU6PC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ0ltYWdlIFNpemUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAncHJvbWluZW50JywgJ2Rpc2FibGVkJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09ICdkZWZhdWx0JykgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHN0eWxlOiBrZXkgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHQvL2NyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0dmFyIG8gPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoIHdwLmVsZW1lbnQuUmF3SFRNTCwgbnVsbCwgYnVpbGRTaG9ydENvZGUoIGF0dHJpYnV0ZXMgKSApO1xuXHRcdC8vIGNvbnNvbGUubG9nKG8pO1xuXHRcdHJldHVybiBvO1xuXHRcdFxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QnV0dG9uXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PHN2Z1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0PlxuXHRcdFx0PHBhdGggZD1cIk0yLDggTDIsMTYgTDE2LDE2IEwxNiw4IEwyLDggWiBNMiw3IEwxNiw3IEwxNiwyIEwyLDIgTDIsNyBaIE0xOCwxIEwxOCwxNyBDMTgsMTcgMTgsMTggMTgsMTggQzE4LDE4IDE3LDE4IDE3LDE4IEwxLDE4IEMxLDE4IDAsMTggMCwxOCBDMCwxOCAwLDE3IDAsMTcgTDAsMSBDMCwxIDAsMCAwLDAgQzAsMCAxLDAgMSwwIEwxNywwIEMxNywwIDE4LDAgMTgsMCBDMTgsMCAxOCwxIDE4LDEgWiBNMTUsMTUgTDMsMTUgTDMsMTIgTDE1LDEyIEwxNSwxNSBaXCIvPlxuXHRcdDwvc3ZnPlxuXHQpO1xufVxuXG5cbi8qKlxuICogUmVuZGVyIHRoZSBzaG9ydGNvZGVcbiAqL1xuZnVuY3Rpb24gYnVpbGRTaG9ydENvZGUoIGFyZ3MgKSB7XG5cdC8vIHZhciBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoYXJncykubWFwKGUgPT4gKGAke2V9PVwiJHthcmdzW2VdfVwiYCkpO1xuXHQvLyB2YXIgYXMgPSBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcblx0Ly8gcmV0dXJuICdbY2wtY2FyZCAnICsgYXMgKyAnXSc7XG5cdC8vIHVuZm9ydHVuYXRlbHksIEd1dGVuYmVyZyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgb3JkZXIgaW4gd2hpY2ggYXR0cmlidXRlcyBhcHBlYXIsXG5cdC8vIHNvIHRoaXMgcHJvY2VzcyBpcyBiZXN0IGRvbmUgbWFudWFsbHkuXG5cdHZhciBzaG9ydGNvZGUgPSAnW2NsLWNhcmQgJztcblx0aWYgKGFyZ3MudGl0bGUpIHtcblx0XHRzaG9ydGNvZGUgKz0gJyB0aXRsZT1cIicgKyBhcmdzLnRpdGxlICsgJ1wiJztcblx0fVxuXHRcblx0aWYgKGFyZ3MuYm9keSkge1xuXHRcdHNob3J0Y29kZSArPSAnIGJvZHk9XCInICsgYXJncy5ib2R5ICsgJ1wiJztcblx0XHQvL3Nob3J0Y29kZSArPSAnIGJvZHk9XCInICsgd3AuZWxlbWVudC5yZW5kZXJUb1N0cmluZyggYXJncy5ib2R5ICkgKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmxpbmspIHtcblx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdH1cblx0aWYgKGFyZ3MubWVkaWFJRCkge1xuXHRcdHNob3J0Y29kZSArPSAnIGltZz1cIicgKyBhcmdzLm1lZGlhSUQgKyAnXCInO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChhcmdzLmltZykge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgaW1nPVwiJyArIGFyZ3MuaW1nICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MuYWx0KSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBhbHQ9XCInICsgYXJncy5hbHQgKyAnXCInO1xuXHRcdH1cblx0fVxuXHRpZiAoYXJncy5idXR0b24pIHtcblx0XHRzaG9ydGNvZGUgKz0gJyBidXR0b249XCInICsgYXJncy5idXR0b24gKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdHNob3J0Y29kZSArPSAnIGNsYXNzPVwiJyArIGFyZ3MuY2xhc3NOYW1lICsgJ1wiJztcblx0fVxuXHRpZiAoYXJncy5hbGlnbm1lbnQgPT0gJ2xlZnQnIHx8IGFyZ3MuYWxpZ25tZW50ID09ICdyaWdodCcgKSB7XG5cdFx0c2hvcnRjb2RlICs9ICcgZmxvYXQ9XCInICsgYXJncy5hbGlnbm1lbnQgKyAnXCInO1xuXHR9XG5cblx0c2hvcnRjb2RlICs9ICddJztcblxuXHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvY2FyZCcsIHsgICBcblxuICB0aXRsZTogX18oJ0NhcmQnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblxuXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5pbWcpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRQaWNrIGFuIGltYWdlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZFwiPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImgyXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGluZ1wiXG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImRpdlwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWV0YVwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkxpbmtzIHRvOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgbGluazogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0VGhpcyB0ZXh0IHdpbGwgc2hvdyB3aGVuIHRoZSBib3ggaXMgc2VsZWN0ZWRcblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHQvLyBjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdHZhciBvID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCB3cC5lbGVtZW50LlJhd0hUTUwsIG51bGwsIGJ1aWxkU2hvcnRDb2RlKCBhdHRyaWJ1dGVzICkgKTtcblx0XHQvLyBjb25zb2xlLmxvZyhvKTtcblx0XHRyZXR1cm4gbztcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==