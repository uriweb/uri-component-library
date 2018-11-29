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
    }, wp.element.createElement(MediaUpload, {
      onSelect: function onSelect(media) {
        setAttributes({
          imageAlt: media.alt,
          imageUrl: media.url
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
    }));
  },
  // end edit
  save: function save(_ref3) {
    var attributes = _ref3.attributes;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIndwIiwiZWRpdG9yIiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIlBsYWluVGV4dCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiQnV0dG9uIiwiY29tcG9uZW50cyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNvdXJjZSIsInNlbGVjdG9yIiwiYm9keSIsInR5cGUiLCJpbWFnZUFsdCIsImF0dHJpYnV0ZSIsImltYWdlVXJsIiwiZWRpdCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZXMiLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsIm1lZGlhIiwiYWx0IiwidXJsIiwiaW1hZ2VJRCIsIm9wZW4iLCJjb250ZW50Iiwic2F2ZSIsImNhcmRJbWFnZSIsInNyYyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7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Q0FEQTtBQXVCRCxHQTVFbUM7QUE0RWpDO0FBRUhnQixNQTlFb0MsdUJBOEVmO0FBQUEsUUFBZG5CLFVBQWMsU0FBZEEsVUFBYzs7QUFFcEIsUUFBTW9CLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBTVAsR0FBTixFQUFjO0FBQy9CLFVBQUcsQ0FBQ08sR0FBSixFQUFTLE9BQU8sSUFBUDs7QUFFVCxVQUFHUCxHQUFILEVBQVE7QUFDUCxlQUNDO0FBQ0MsbUJBQVMsRUFBQyxhQURYO0FBRUMsYUFBRyxFQUFHTyxHQUZQO0FBR0MsYUFBRyxFQUFHUDtBQUhQLFVBREQ7QUFPQSxPQVg4QixDQWEvQjs7O0FBQ0EsYUFDQztBQUNDLGlCQUFTLEVBQUMsYUFEWDtBQUVDLFdBQUcsRUFBR08sR0FGUDtBQUdDLFdBQUcsRUFBQyxFQUhMO0FBSUMsdUJBQVk7QUFKYixRQUREO0FBUUEsS0F0QkQ7O0FBd0JBLFdBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNHRCxTQUFTLENBQUNwQixVQUFVLENBQUNPLFFBQVosRUFBc0JQLFVBQVUsQ0FBQ0ssUUFBakMsQ0FEWixFQUVDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQztBQUFJLGVBQVMsRUFBQztBQUFkLE9BQThCTCxVQUFVLENBQUNILEtBQXpDLENBREQsRUFFQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0dHLFVBQVUsQ0FBQ0csSUFEZCxDQUZELENBRkQsQ0FERDtBQVdBO0FBbkhtQyxDQUFwQixDQUFqQixDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vY2FyZC9ibG9jayc7IiwiY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjYXJkLWJsb2NrL21haW4nLCB7ICAgXG5cbiAgdGl0bGU6ICdDYXJkJyxcbiAgaWNvbjogJ2hlYXJ0JyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0c291cmNlOiAndGV4dCcsXG5cdFx0XHRzZWxlY3RvcjogJy5jYXJkX190aXRsZSdcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy5jYXJkX19ib2R5J1xuXHRcdH0sXG5cdFx0aW1hZ2VBbHQ6IHtcblx0XHRcdGF0dHJpYnV0ZTogJ2FsdCcsXG5cdFx0XHRzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcblx0XHR9LFxuXHRcdGltYWdlVXJsOiB7XG5cdFx0XHRhdHRyaWJ1dGU6ICdzcmMnLFxuXHRcdFx0c2VsZWN0b3I6ICcuY2FyZF9faW1hZ2UnXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLmltYWdlVXJsKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1hZ2VVcmwgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW5FdmVudCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRQaWNrIGFuIGltYWdlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG4gIFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VBbHQ6IG1lZGlhLmFsdCwgaW1hZ2VVcmw6IG1lZGlhLnVybCB9KTsgfSB9XG5cdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaW1hZ2VJRCB9XG5cdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91ciBjYXJkIHRpdGxlXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJoZWFkaW5nXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBib2R5OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0bXVsdGlsaW5lPVwicFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJZb3VyIGNhcmQgdGV4dFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cbiAgXHQpO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Y29uc3QgY2FyZEltYWdlID0gKHNyYywgYWx0KSA9PiB7XG5cdFx0XHRpZighc3JjKSByZXR1cm4gbnVsbDtcblxuXHRcdFx0aWYoYWx0KSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlXCIgXG5cdFx0XHRcdFx0XHRzcmM9eyBzcmMgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYWx0IH1cblx0XHRcdFx0XHQvPiBcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcblx0XHRcdC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19pbWFnZVwiIFxuXHRcdFx0XHRcdHNyYz17IHNyYyB9XG5cdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHQvPiBcblx0XHRcdCk7XG5cdFx0fTtcblx0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHR7IGNhcmRJbWFnZShhdHRyaWJ1dGVzLmltYWdlVXJsLCBhdHRyaWJ1dGVzLmltYWdlQWx0KSB9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fY29udGVudFwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cblx0XHRcdFx0XHRcdHsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdFxuXHRcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9