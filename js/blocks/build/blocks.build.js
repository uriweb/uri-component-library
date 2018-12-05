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

  console.log(args);

  if (args.body) {
    shortcode += ' body="' + wp.element.renderToString(args.body) + '"';
  }

  if (args.link) {
    shortcode += ' link="' + args.link + '"';
  }

  if (args.mediaID) {
    shortcode += ' mediaID="' + args.mediaID + '"';
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
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    var getImageButton = function getImageButton(openEvent) {
      if (attributes.imageUrl) {
        return wp.element.createElement("img", {
          src: attributes.imageUrl,
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
          imageAlt: media.alt,
          imageUrl: media.url,
          mediaID: media.id
        });
      },
      type: "image",
      value: attributes.imageID,
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
    var o = wp.element.createElement(wp.element.RawHTML, null, buildShortCode(attributes));
    console.log(o);
    return o;

    var cardImage = function cardImage(src, alt) {
      if (!src) return null;

      if (alt) {
        return wp.element.createElement("img", {
          className: "card__image",
          src: src,
          alt: alt
        });
      } // No alt set, so let's hide it from screen readers


      return wp.element.createElement("img", {
        className: "card__image",
        src: src,
        alt: "",
        "aria-hidden": "true"
      });
    };

    return wp.element.createElement("div", {
      className: "card"
    }, cardImage(attributes.imageUrl, attributes.imageAlt), wp.element.createElement("div", {
      className: "card__content"
    }, wp.element.createElement("h3", {
      className: "card__title"
    }, attributes.title), wp.element.createElement("div", {
      className: "card__body"
    }, attributes.body)));
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIndwIiwiZWRpdG9yIiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIlBsYWluVGV4dCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiQnV0dG9uIiwiY29tcG9uZW50cyIsImJ1aWxkU2hvcnRDb2RlIiwiYXJncyIsInNob3J0Y29kZSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJlbGVtZW50IiwicmVuZGVyVG9TdHJpbmciLCJsaW5rIiwibWVkaWFJRCIsImltZyIsImFsdCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImFsaWdubWVudCIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzb3VyY2UiLCJzZWxlY3RvciIsInR5cGUiLCJpbWFnZUFsdCIsImF0dHJpYnV0ZSIsImltYWdlVXJsIiwiZWRpdCIsInNldEF0dHJpYnV0ZXMiLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsIm1lZGlhIiwidXJsIiwiaWQiLCJpbWFnZUlEIiwib3BlbiIsImNvbnRlbnQiLCJzYXZlIiwibyIsImNyZWF0ZUVsZW1lbnQiLCJSYXdIVE1MIiwiY2FyZEltYWdlIiwic3JjIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFj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QixhQUFYLENBQTBCOUMsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXK0IsT0FBckMsRUFBOEMsSUFBOUMsRUFBb0R0QyxjQUFjLENBQUVrQixVQUFGLENBQWxFLENBQVI7QUFDQWQsV0FBTyxDQUFDQyxHQUFSLENBQVkrQixDQUFaO0FBQ0EsV0FBT0EsQ0FBUDs7QUFFQSxRQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQU01QixHQUFOLEVBQWM7QUFDL0IsVUFBRyxDQUFDNEIsR0FBSixFQUFTLE9BQU8sSUFBUDs7QUFFVCxVQUFHNUIsR0FBSCxFQUFRO0FBQ1AsZUFDQztBQUNDLG1CQUFTLEVBQUMsYUFEWDtBQUVDLGFBQUcsRUFBRzRCLEdBRlA7QUFHQyxhQUFHLEVBQUc1QjtBQUhQLFVBREQ7QUFPQSxPQVg4QixDQWEvQjs7O0FBQ0EsYUFDQztBQUNDLGlCQUFTLEVBQUMsYUFEWDtBQUVDLFdBQUcsRUFBRzRCLEdBRlA7QUFHQyxXQUFHLEVBQUMsRUFITDtBQUlDLHVCQUFZO0FBSmIsUUFERDtBQVFBLEtBdEJEOztBQXdCQSxXQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDR0QsU0FBUyxDQUFDckIsVUFBVSxDQUFDTSxRQUFaLEVBQXNCTixVQUFVLENBQUNJLFFBQWpDLENBRFosRUFFQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUE4QkosVUFBVSxDQUFDZixLQUF6QyxDQURELEVBRUM7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNHZSxVQUFVLENBQUNaLElBRGQsQ0FGRCxDQUZELENBREQ7QUFXQTtBQXZJbUMsQ0FBcEIsQ0FBakIsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuIiwiY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XG5cblx0LyoqXG5cdCAqIFJlbmRlciB0aGUgc2hvcnRjb2RlXG5cdCAqL1xuXHRmdW5jdGlvbiBidWlsZFNob3J0Q29kZSggYXJncyApIHtcblx0XHQvLyB2YXIgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChlID0+IChgJHtlfT1cIiR7YXJnc1tlXX1cImApKTtcblx0XHQvLyB2YXIgYXMgPSBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcblx0XHQvLyByZXR1cm4gJ1tjbC1jYXJkICcgKyBhcyArICddJztcblx0XHQvLyB1bmZvcnR1bmF0ZWx5LCBHdXRlbmJlcmcgY2FyZXMgYSBsb3QgYWJvdXQgdGhlIG9yZGVyIGluIHdoaWNoIGF0dHJpYnV0ZXMgYXBwZWFyLFxuXHRcdC8vIHNvIHRoaXMgcHJvY2VzcyBpcyBiZXN0IGRvbmUgbWFudWFsbHkuXG5cdFx0dmFyIHNob3J0Y29kZSA9ICdbY2wtY2FyZCAnO1xuXHRcdGlmIChhcmdzLnRpdGxlKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyB0aXRsZT1cIicgKyBhcmdzLnRpdGxlICsgJ1wiJztcblx0XHR9XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coYXJncyk7XG5cdFx0XHRcdFxuXHRcdGlmIChhcmdzLmJvZHkpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIGJvZHk9XCInICsgd3AuZWxlbWVudC5yZW5kZXJUb1N0cmluZyggYXJncy5ib2R5ICkgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5saW5rKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLm1lZGlhSUQpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIG1lZGlhSUQ9XCInICsgYXJncy5tZWRpYUlEICsgJ1wiJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGFyZ3MuaW1nKSB7XG5cdFx0XHRcdHNob3J0Y29kZSArPSAnIGltZz1cIicgKyBhcmdzLmltZyArICdcIic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy5hbHQpIHtcblx0XHRcdFx0c2hvcnRjb2RlICs9ICcgYWx0PVwiJyArIGFyZ3MuYWx0ICsgJ1wiJztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGFyZ3MuYnV0dG9uKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBidXR0b249XCInICsgYXJncy5idXR0b24gKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5jbGFzc05hbWUpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIGNsYXNzPVwiJyArIGFyZ3MuY2xhc3NOYW1lICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MuYWxpZ25tZW50ID09ICdsZWZ0JyB8fCBhcmdzLmFsaWdubWVudCA9PSAncmlnaHQnICkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgZmxvYXQ9XCInICsgYXJncy5hbGlnbm1lbnQgKyAnXCInO1xuXHRcdH1cblxuXHRcdHNob3J0Y29kZSArPSAnXSc7XG5cblx0XHRyZXR1cm4gc2hvcnRjb2RlO1xuXG5cdH1cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NhcmQtYmxvY2svbWFpbicsIHsgICBcblxuICB0aXRsZTogJ0NhcmQnLFxuICBpY29uOiAnaGVhcnQnLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX3RpdGxlJ1xuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX2JvZHknXG5cdFx0fSxcblx0XHRpbWFnZUFsdDoge1xuXHRcdFx0YXR0cmlidXRlOiAnYWx0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX2ltYWdlJ1xuXHRcdH0sXG5cdFx0aW1hZ2VVcmw6IHtcblx0XHRcdGF0dHJpYnV0ZTogJ3NyYycsXG5cdFx0XHRzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcblx0XHR9XG5cdH0sXG5cdFxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWFnZVVybCB9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbkV2ZW50IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbkV2ZW50IH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFBpY2sgYW4gaW1hZ2Vcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cbiAgXHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmRcIj5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0aW1hZ2VBbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1hZ2VVcmw6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaW1hZ2VJRCB9XG5cdFx0XHRcdFx0XHRyZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91ciBjYXJkIHRpdGxlXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImhlYWRpbmdcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIllvdXIgY2FyZCB0ZXh0XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJZb3VyIGJ1dHRvbiB0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGxpbms6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxpbmtzIFRvXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuICBcdCk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFx0dmFyIG8gPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoIHdwLmVsZW1lbnQuUmF3SFRNTCwgbnVsbCwgYnVpbGRTaG9ydENvZGUoIGF0dHJpYnV0ZXMgKSApO1xuXHRcdGNvbnNvbGUubG9nKG8pO1xuXHRcdHJldHVybiBvO1xuXHRcdFxuXHRcdGNvbnN0IGNhcmRJbWFnZSA9IChzcmMsIGFsdCkgPT4ge1xuXHRcdFx0aWYoIXNyYykgcmV0dXJuIG51bGw7XG5cblx0XHRcdGlmKGFsdCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19pbWFnZVwiIFxuXHRcdFx0XHRcdFx0c3JjPXsgc3JjIH1cblx0XHRcdFx0XHRcdGFsdD17IGFsdCB9XG5cdFx0XHRcdFx0Lz4gXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHQvLyBObyBhbHQgc2V0LCBzbyBsZXQncyBoaWRlIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZF9faW1hZ2VcIiBcblx0XHRcdFx0XHRzcmM9eyBzcmMgfVxuXHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdFx0Lz4gXG5cdFx0XHQpO1xuXHRcdH07XG5cdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0eyBjYXJkSW1hZ2UoYXR0cmlidXRlcy5pbWFnZVVybCwgYXR0cmlidXRlcy5pbWFnZUFsdCkgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDM+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19ib2R5XCI+XG5cdFx0XHRcdFx0XHR7IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==