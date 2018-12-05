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


/***/ }),

/***/ "./js/blocks/src/card/block.js":
/*!*************************************!*\
  !*** ./js/blocks/src/card/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Button = _wp$components.Button; // @todo: internationalize

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

registerBlockType('card-block/main', {
  title: __('Card'),
  icon: customIcon,
  category: 'common',
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
      }, wp.element.createElement(AlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(content) {
          return setAttributes({
            alignment: content
          });
        }
      })); // 					<Toolbar>
      // 						<IconButton 
      // 							className='pin'
      // 							icon={customIcon}
      // 							onClick={() => setAttributes({ isPinned: !isPinned })}
      // 							tooltip={isPinned ? __('Unpin', 'example') : __('Pin This', 'example')}
      // 						/>
      // 					</Toolbar>
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, "This text will show when the box is selected"), wp.element.createElement(PanelRow, null, "ditto")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwiZWRpdG9yIiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIlBsYWluVGV4dCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiQWxpZ25tZW50VG9vbGJhciIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwiQnV0dG9uIiwiY3VzdG9tSWNvbiIsImJ1aWxkU2hvcnRDb2RlIiwiYXJncyIsInNob3J0Y29kZSIsInRpdGxlIiwiYm9keSIsImxpbmsiLCJtZWRpYUlEIiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiYWxpZ25tZW50IiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInR5cGUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwiY3JlYXRlQ29udGVudEVkaXRGb3JtIiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJjb250ZW50IiwiY3JlYXRlQmxvY2tDb250cm9scyIsImNyZWF0ZUluc3BlY3RvckNvbnRyb2xzIiwic2F2ZSIsIm8iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJhd0hUTUwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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bkIsUUFERCxDQURELENBRGlDLENBVXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxLQWxCRCxDQWxGOEMsQ0FzRzlDOzs7QUFDQSxRQUFNRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDckMsYUFDQyx5QkFBQyxpQkFBRCxRQUNDLHlCQUFDLFNBQUQsUUFDQyx5QkFBQyxRQUFELHVEQURELEVBSUMseUJBQUMsUUFBRCxnQkFKRCxDQURELENBREQ7QUFXQSxLQVpELENBdkc4QyxDQXFIOUM7OztBQUNDLFdBQVEsQ0FDUkQsbUJBQW1CLEVBRFgsRUFFUkMsdUJBQXVCLEVBRmYsRUFHUlAscUJBQXFCLEVBSGIsQ0FBUjtBQU1ELEdBbEttQztBQWtLakM7QUFFSFEsTUFwS29DLHVCQW9LZjtBQUFBLFFBQWRkLFVBQWMsU0FBZEEsVUFBYztBQUVwQixRQUFJZSxDQUFDLEdBQUcvQyxFQUFFLENBQUNnRCxPQUFILENBQVdDLGFBQVgsQ0FBMEJqRCxFQUFFLENBQUNnRCxPQUFILENBQVdFLE9BQXJDLEVBQThDLElBQTlDLEVBQW9EaEMsY0FBYyxDQUFFYyxVQUFGLENBQWxFLENBQVIsQ0FGb0IsQ0FHcEI7O0FBQ0EsV0FBT2UsQ0FBUDtBQUVBO0FBMUttQyxDQUFwQixDQUFqQixDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vY2FyZC9ibG9jayc7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgSW5zcGVjdG9yQ29udHJvbHMsIEJsb2NrQ29udHJvbHMsIFRvb2xiYXIsIEljb25CdXR0b24sIEFsaWdubWVudFRvb2xiYXIgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgUGFuZWxCb2R5LCBQYW5lbFJvdywgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBAdG9kbzogaW50ZXJuYXRpb25hbGl6ZVxuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8c3ZnXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHQ+XG5cdFx0XHQ8cGF0aCBkPVwiTTIsOCBMMiwxNiBMMTYsMTYgTDE2LDggTDIsOCBaIE0yLDcgTDE2LDcgTDE2LDIgTDIsMiBMMiw3IFogTTE4LDEgTDE4LDE3IEMxOCwxNyAxOCwxOCAxOCwxOCBDMTgsMTggMTcsMTggMTcsMTggTDEsMTggQzEsMTggMCwxOCAwLDE4IEMwLDE4IDAsMTcgMCwxNyBMMCwxIEMwLDEgMCwwIDAsMCBDMCwwIDEsMCAxLDAgTDE3LDAgQzE3LDAgMTgsMCAxOCwwIEMxOCwwIDE4LDEgMTgsMSBaIE0xNSwxNSBMMywxNSBMMywxMiBMMTUsMTIgTDE1LDE1IFpcIi8+XG5cdFx0PC9zdmc+XG5cdCk7XG59XG5cblxuLyoqXG4gKiBSZW5kZXIgdGhlIHNob3J0Y29kZVxuICovXG5mdW5jdGlvbiBidWlsZFNob3J0Q29kZSggYXJncyApIHtcblx0Ly8gdmFyIGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhhcmdzKS5tYXAoZSA9PiAoYCR7ZX09XCIke2FyZ3NbZV19XCJgKSk7XG5cdC8vIHZhciBhcyA9IGF0dHJpYnV0ZXMuam9pbignICcpO1xuXHQvLyByZXR1cm4gJ1tjbC1jYXJkICcgKyBhcyArICddJztcblx0Ly8gdW5mb3J0dW5hdGVseSwgR3V0ZW5iZXJnIGNhcmVzIGEgbG90IGFib3V0IHRoZSBvcmRlciBpbiB3aGljaCBhdHRyaWJ1dGVzIGFwcGVhcixcblx0Ly8gc28gdGhpcyBwcm9jZXNzIGlzIGJlc3QgZG9uZSBtYW51YWxseS5cblx0dmFyIHNob3J0Y29kZSA9ICdbY2wtY2FyZCAnO1xuXHRpZiAoYXJncy50aXRsZSkge1xuXHRcdHNob3J0Y29kZSArPSAnIHRpdGxlPVwiJyArIGFyZ3MudGl0bGUgKyAnXCInO1xuXHR9XG5cdFxuXHRpZiAoYXJncy5ib2R5KSB7XG5cdFx0c2hvcnRjb2RlICs9ICcgYm9keT1cIicgKyBhcmdzLmJvZHkgKyAnXCInO1xuXHRcdC8vc2hvcnRjb2RlICs9ICcgYm9keT1cIicgKyB3cC5lbGVtZW50LnJlbmRlclRvU3RyaW5nKCBhcmdzLmJvZHkgKSArICdcIic7XG5cdH1cblx0aWYgKGFyZ3MubGluaykge1xuXHRcdHNob3J0Y29kZSArPSAnIGxpbms9XCInICsgYXJncy5saW5rICsgJ1wiJztcblx0fVxuXHRpZiAoYXJncy5tZWRpYUlEKSB7XG5cdFx0c2hvcnRjb2RlICs9ICcgaW1nPVwiJyArIGFyZ3MubWVkaWFJRCArICdcIic7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGFyZ3MuaW1nKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBpbWc9XCInICsgYXJncy5pbWcgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5hbHQpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIGFsdD1cIicgKyBhcmdzLmFsdCArICdcIic7XG5cdFx0fVxuXHR9XG5cdGlmIChhcmdzLmJ1dHRvbikge1xuXHRcdHNob3J0Y29kZSArPSAnIGJ1dHRvbj1cIicgKyBhcmdzLmJ1dHRvbiArICdcIic7XG5cdH1cblx0aWYgKGFyZ3MuY2xhc3NOYW1lKSB7XG5cdFx0c2hvcnRjb2RlICs9ICcgY2xhc3M9XCInICsgYXJncy5jbGFzc05hbWUgKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmFsaWdubWVudCA9PSAnbGVmdCcgfHwgYXJncy5hbGlnbm1lbnQgPT0gJ3JpZ2h0JyApIHtcblx0XHRzaG9ydGNvZGUgKz0gJyBmbG9hdD1cIicgKyBhcmdzLmFsaWdubWVudCArICdcIic7XG5cdH1cblxuXHRzaG9ydGNvZGUgKz0gJ10nO1xuXG5cdHJldHVybiBzaG9ydGNvZGU7XG5cbn1cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NhcmQtYmxvY2svbWFpbicsIHsgICBcblxuICB0aXRsZTogX18oJ0NhcmQnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICBcblxuXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5pbWcpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRQaWNrIGFuIGltYWdlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZFwiPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImgyXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGluZ1wiXG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImRpdlwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWV0YVwiPlxuXHRcdFx0XHRcdDxsYWJlbD5MaW5rcyB0bzo8L2xhYmVsPlxuXHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgbGluazogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG4vLyBcdFx0XHRcdFx0PFRvb2xiYXI+XG4vLyBcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBcbi8vIFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwaW4nXG4vLyBcdFx0XHRcdFx0XHRcdGljb249e2N1c3RvbUljb259XG4vLyBcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEF0dHJpYnV0ZXMoeyBpc1Bpbm5lZDogIWlzUGlubmVkIH0pfVxuLy8gXHRcdFx0XHRcdFx0XHR0b29sdGlwPXtpc1Bpbm5lZCA/IF9fKCdVbnBpbicsICdleGFtcGxlJykgOiBfXygnUGluIFRoaXMnLCAnZXhhbXBsZScpfVxuLy8gXHRcdFx0XHRcdFx0Lz5cbi8vIFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHRUaGlzIHRleHQgd2lsbCBzaG93IHdoZW4gdGhlIGJveCBpcyBzZWxlY3RlZFxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0ZGl0dG9cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHR2YXIgbyA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCggd3AuZWxlbWVudC5SYXdIVE1MLCBudWxsLCBidWlsZFNob3J0Q29kZSggYXR0cmlidXRlcyApICk7XG5cdFx0Ly8gY29uc29sZS5sb2cobyk7XG5cdFx0cmV0dXJuIG87XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=