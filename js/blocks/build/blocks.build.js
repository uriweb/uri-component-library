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

var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText;
var registerBlockType = wp.blocks.registerBlockType;
var Button = wp.components.Button;
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
  title: 'Card',
  icon: 'heart',
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
    }), wp.element.createElement(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          title: content
        });
      },
      value: attributes.title,
      placeholder: "Your card title",
      className: "heading"
    }), wp.element.createElement(RichText, {
      onChange: function onChange(content) {
        return setAttributes({
          body: content
        });
      },
      value: attributes.body,
      multiline: "p",
      placeholder: "Your card text"
    }), wp.element.createElement(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          button: content
        });
      },
      value: attributes.button,
      placeholder: "Your button text",
      className: "cl-button"
    })), wp.element.createElement(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          link: content
        });
      },
      value: attributes.link,
      placeholder: "Links To"
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIndwIiwiZWRpdG9yIiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIlBsYWluVGV4dCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiQnV0dG9uIiwiY29tcG9uZW50cyIsImJ1aWxkU2hvcnRDb2RlIiwiYXJncyIsInNob3J0Y29kZSIsInRpdGxlIiwiYm9keSIsImxpbmsiLCJtZWRpYUlEIiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiYWxpZ25tZW50IiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInR5cGUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJjb250ZW50Iiwic2F2ZSIsIm8iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJhd0hUTUwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FB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QVA7QUFFQTtBQTlHbUMsQ0FBcEIsQ0FBakIsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuIiwiY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVuZGVyIHRoZSBzaG9ydGNvZGVcbiAqL1xuZnVuY3Rpb24gYnVpbGRTaG9ydENvZGUoIGFyZ3MgKSB7XG5cdC8vIHZhciBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoYXJncykubWFwKGUgPT4gKGAke2V9PVwiJHthcmdzW2VdfVwiYCkpO1xuXHQvLyB2YXIgYXMgPSBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcblx0Ly8gcmV0dXJuICdbY2wtY2FyZCAnICsgYXMgKyAnXSc7XG5cdC8vIHVuZm9ydHVuYXRlbHksIEd1dGVuYmVyZyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgb3JkZXIgaW4gd2hpY2ggYXR0cmlidXRlcyBhcHBlYXIsXG5cdC8vIHNvIHRoaXMgcHJvY2VzcyBpcyBiZXN0IGRvbmUgbWFudWFsbHkuXG5cdHZhciBzaG9ydGNvZGUgPSAnW2NsLWNhcmQgJztcblx0aWYgKGFyZ3MudGl0bGUpIHtcblx0XHRzaG9ydGNvZGUgKz0gJyB0aXRsZT1cIicgKyBhcmdzLnRpdGxlICsgJ1wiJztcblx0fVxuXHRcblx0aWYgKGFyZ3MuYm9keSkge1xuXHRcdHNob3J0Y29kZSArPSAnIGJvZHk9XCInICsgYXJncy5ib2R5ICsgJ1wiJztcblx0XHQvL3Nob3J0Y29kZSArPSAnIGJvZHk9XCInICsgd3AuZWxlbWVudC5yZW5kZXJUb1N0cmluZyggYXJncy5ib2R5ICkgKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmxpbmspIHtcblx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdH1cblx0aWYgKGFyZ3MubWVkaWFJRCkge1xuXHRcdHNob3J0Y29kZSArPSAnIGltZz1cIicgKyBhcmdzLm1lZGlhSUQgKyAnXCInO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChhcmdzLmltZykge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgaW1nPVwiJyArIGFyZ3MuaW1nICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MuYWx0KSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBhbHQ9XCInICsgYXJncy5hbHQgKyAnXCInO1xuXHRcdH1cblx0fVxuXHRpZiAoYXJncy5idXR0b24pIHtcblx0XHRzaG9ydGNvZGUgKz0gJyBidXR0b249XCInICsgYXJncy5idXR0b24gKyAnXCInO1xuXHR9XG5cdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdHNob3J0Y29kZSArPSAnIGNsYXNzPVwiJyArIGFyZ3MuY2xhc3NOYW1lICsgJ1wiJztcblx0fVxuXHRpZiAoYXJncy5hbGlnbm1lbnQgPT0gJ2xlZnQnIHx8IGFyZ3MuYWxpZ25tZW50ID09ICdyaWdodCcgKSB7XG5cdFx0c2hvcnRjb2RlICs9ICcgZmxvYXQ9XCInICsgYXJncy5hbGlnbm1lbnQgKyAnXCInO1xuXHR9XG5cblx0c2hvcnRjb2RlICs9ICddJztcblxuXHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjYXJkLWJsb2NrL21haW4nLCB7ICAgXG5cbiAgdGl0bGU6ICdDYXJkJyxcbiAgaWNvbjogJ2hlYXJ0JyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLmltZykge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbkV2ZW50IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbkV2ZW50IH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFBpY2sgYW4gaW1hZ2Vcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cbiAgXHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmRcIj5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJZb3VyIGNhcmQgdGl0bGVcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGluZ1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0XHRtdWx0aWxpbmU9XCJwXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91ciBjYXJkIHRleHRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBidXR0b246IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIllvdXIgYnV0dG9uIHRleHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgbGluazogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGlua3MgVG9cIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG4gIFx0KTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdHZhciBvID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCB3cC5lbGVtZW50LlJhd0hUTUwsIG51bGwsIGJ1aWxkU2hvcnRDb2RlKCBhdHRyaWJ1dGVzICkgKTtcblx0XHQvLyBjb25zb2xlLmxvZyhvKTtcblx0XHRyZXR1cm4gbztcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==