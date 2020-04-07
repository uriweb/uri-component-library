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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/blocks/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/blocks.js":
/*!*********************************!*\
  !*** ./src/js/blocks/blocks.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boxout_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxout/block */ "./src/js/blocks/boxout/block.js");
/* harmony import */ var _boxout_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boxout_block__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/block */ "./src/js/blocks/button/block.js");
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_block__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/block */ "./src/js/blocks/card/block.js");
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_block__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _date_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date/block */ "./src/js/blocks/date/block.js");
/* harmony import */ var _date_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_date_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero/block */ "./src/js/blocks/hero/block.js");
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hero_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metric/block */ "./src/js/blocks/metric/block.js");
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metric_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/block */ "./src/js/blocks/menu/block.js");
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_menu_block__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notice/block */ "./src/js/blocks/notice/block.js");
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_notice_block__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel/block */ "./src/js/blocks/panel/block.js");
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_panel_block__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _promo_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./promo/block */ "./src/js/blocks/promo/block.js");
/* harmony import */ var _promo_block__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_promo_block__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quote/block */ "./src/js/blocks/quote/block.js");
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_quote_block__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabs/tab */ "./src/js/blocks/tabs/tab.js");
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tabs_tab__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs/block */ "./src/js/blocks/tabs/block.js");
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_tabs_block__WEBPACK_IMPORTED_MODULE_12__);














/***/ }),

/***/ "./src/js/blocks/boxout/block.js":
/*!***************************************!*\
  !*** ./src/js/blocks/boxout/block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    Toolbar = _wp$blockEditor.Toolbar,
    Button = _wp$blockEditor.Button,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'core/list', 'uri-cl/button'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Your boxout content...',
  dropCap: false
}]];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/boxout.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-boxout';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  if (!!attributes.float) {
    classes += ' ' + attributes.float;
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
    float: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // Generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes, isSelected);
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        className: classes
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __('Title'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })));
    }; // Generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.float,
        onChange: function onChange(content) {
          return setAttributes({
            float: content
          });
        }
      }));
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createContentEditForm()];
  },
  // End edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return wp.element.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/button/block.js":
/*!***************************************!*\
  !*** ./src/js/blocks/button/block.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    Toolbar = _wp$blockEditor.Toolbar,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar;
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
    src: URI_CL_URL + 'i/icons/button.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-button';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!attributes.alignment) {
    classes += ' ' + attributes.alignment;
  }

  if (!!attributes.style) {
    classes += ' ' + attributes.style;
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  return classes;
};

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

    // Generate editor view of the button itself
    var createContentEditForm = function createContentEditForm() {
      var meta;

      if (!!isSelected) {
        meta = wp.element.createElement("form", {
          className: "meta",
          onSubmit: function onSubmit(event) {
            return event.preventDefault();
          }
        }, wp.element.createElement("fieldset", {
          className: "row link"
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
      } // Set the classnames


      var classes = classNames(attributes, isSelected); // Set the tooltip

      var title = '';

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-button-block-form"
      }, wp.element.createElement("span", {
        className: classes,
        title: title
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            text: content
          });
        },
        value: attributes.text,
        placeholder: __('Your button text'),
        keepPlaceholderOnFocus: true,
        className: "cl-button"
      })), meta);
    }; // Generate block controls for alignment, etc
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
    }; // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Button Style'),
        id: "button-style"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Button Style')
      }, ['default', 'prominent', 'disabled'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'default' === value ? '' : value;
        var style = undefined === attributes.style ? '' : attributes.style;
        var selected = key === style;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
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
    }; // Send the editor interfaces to the view


    return [createInspectorControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/card/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/card/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText,
    URLInput = _wp$blockEditor.URLInput;
var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/card.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-card';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!attributes.float) {
    classes += ' ' + attributes.float;
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  if (!!attributes.img) {
    classes += ' has-image';
  } else {
    classes += ' no-image';
  }

  return classes;
};

registerBlockType('uri-cl/card', {
  title: __('Card'),
  icon: customIcon,
  category: 'cl-blocks',
  // The mediaID is what goes into the shortcode for front-end display
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
    float: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // Generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      }

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
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("form", {
        className: "meta",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, wp.element.createElement("fieldset", {
        className: "row link"
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
    } // Generate editor view of the card itself


    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes, isSelected); // Set the tooltip

      var title = '';

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
        className: "cl-card-text"
      }, wp.element.createElement("h3", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __('Your card title'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        tagname: "p",
        value: attributes.body,
        placeholder: __('Your card text'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("div", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            button: content
          });
        },
        value: attributes.button,
        placeholder: __('Your button text'),
        keepPlaceholderOnFocus: true,
        className: "cl-button"
      }), meta)));
    }; // Generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.float,
        onChange: function onChange(content) {
          return setAttributes({
            float: content
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
          return wp.element.createElement(Button, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // Generate sidebar inspector controls for other custom attributes


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
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/date/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/date/block.js ***!
  \*************************************/
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
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl,
    DatePicker = _wp$components.DatePicker;
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    Toolbar = _wp$blockEditor.Toolbar,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar;

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/date.png',
    alt: "date"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-date';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  if (!!attributes.color) {
    classes += ' cl-date-' + attributes.color;
  }

  if (!!attributes.float) {
    classes += ' ' + attributes.float;
  }

  return classes;
};

registerBlockType('uri-cl/date', {
  title: __('Date'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    date: {
      type: 'string'
    },
    caption: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    float: {
      type: 'string'
    },
    show_year: {
      type: 'bool'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // Generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes, isSelected);

      if (!attributes.date) {
        setAttributes({
          date: new Date()
        });
      }

      var date = new Date(attributes.date);
      var month = date.toLocaleString('default', {
        month: 'long'
      });

      if (!!attributes.show_year) {
        month = date.toLocaleString('default', {
          month: 'short'
        }) + ' ' + date.getFullYear();
      } // Display a message on the admin screen if the notice is expired


      var today = new Date();
      var expirationMessage = '';

      if (!!attributes.date && date.getTime() <= today.getTime()) {
        expirationMessage = wp.element.createElement("div", {
          className: "cl-component-message"
        }, "This date may no longer be relevant.");
      }

      return wp.element.createElement("div", {
        className: "container"
      }, expirationMessage, wp.element.createElement("div", {
        className: classes
      }, wp.element.createElement("div", {
        className: "cl-date-content-wrapper"
      }, wp.element.createElement("div", {
        className: "cl-date-content"
      }, wp.element.createElement("div", {
        className: "cl-date-month"
      }, month), wp.element.createElement("div", {
        className: "cl-date-day"
      }, date.getDate()))), wp.element.createElement("div", {
        className: "cl-date-caption-wrapper"
      }, wp.element.createElement("div", {
        className: "cl-date-caption"
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            caption: content
          });
        },
        value: attributes.caption,
        placeholder: __('Your date caption'),
        keepPlaceholderOnFocus: true
      })))));
    }; // Generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.float,
        onChange: function onChange(content) {
          return setAttributes({
            float: content
          });
        }
      }));
    }; // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Date Color'),
        id: "date-color"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Date Color')
      }, ['blue', 'red', 'grey'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'blue' === value ? '' : value;
        var color = undefined === attributes.color ? '' : attributes.color;
        var selected = key === color;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
          onClick: function onClick(content) {
            return setAttributes({
              color: key
            });
          }
        }, capitalizedValue);
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(DatePicker, {
        label: "Date",
        currentDate: attributes.date,
        onChange: function onChange(date) {
          return setAttributes({
            date: date
          });
        }
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Show year",
        checked: attributes.show_year,
        onChange: function onChange(content) {
          return setAttributes({
            show_year: content
          });
        }
      }))));
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/hero/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/hero/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    ButtonGroup = _wp$components.ButtonGroup,
    FocalPointPicker = _wp$components.FocalPointPicker,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText,
    URLInput = _wp$blockEditor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/hero.png',
    alt: "button"
  });
};

var randomID = function randomID() {
  // https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

registerBlockType('uri-cl/hero', {
  title: __('Hero'),
  icon: customIcon,
  category: 'cl-blocks',
  // The mediaID is what goes into the shortcode for front-end display
  // the img and alt are for editor placeholders
  // the mediaHeight and mediaWidth are for the focal point picker component
  attributes: {
    headline: {
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
    mediaHeight: {
      type: 'number'
    },
    mediaWidth: {
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
    use_caption: {
      type: 'boolean'
    },
    caption: {
      type: 'string'
    },
    credit: {
      type: 'string'
    },
    positionX: {
      type: 'number'
    },
    positionY: {
      type: 'number'
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

    // Generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      }

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
            mediaID: media.id,
            mediaHeight: media.height,
            mediaWidth: media.width,
            positionX: 0.5,
            positionY: 0.5
          });
        },
        accept: "image/*",
        allowedTypes: ALLOWED_MEDIA_TYPES
      });
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("form", {
        className: "meta",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, wp.element.createElement("fieldset", {
        className: "row link"
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
    } // Generate editor view of the hero itself


    var createContentEditForm = function createContentEditForm() {
      if (!attributes.id) {
        attributes.id = randomID();
      }

      var classes = 'cl-hero';

      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      }

      if (!!attributes.format) {
        classes += ' ' + attributes.format;
      }

      if (!!isSelected) {
        classes += ' selected';
      }

      var style = {};
      var poster = 'poster';

      if (!!attributes.img) {
        classes += ' has-image';
        poster = 'still';
        style = {
          backgroundPosition: "".concat(attributes.positionX * 100, "% ").concat(attributes.positionY * 100, "%"),
          backgroundImage: "url(".concat(attributes.img, ")")
        };
      } else {
        classes += ' no-image';
      } // Set the tooltip


      var title = '';

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-hero-block-form"
      }, wp.element.createElement("div", {
        className: classes,
        title: title
      }, wp.element.createElement("div", {
        className: "cl-hero-proper"
      }, wp.element.createElement("div", {
        className: poster,
        style: style
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
        className: "cl-hero-text overlay"
      }, wp.element.createElement("div", {
        className: "block"
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            headline: content
          });
        },
        value: attributes.headline,
        placeholder: __('Your hero title'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("p", {
        className: "subhead"
      }, wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            subhead: content
          });
        },
        value: attributes.subhead,
        placeholder: __('Your hero subtitle'),
        keepPlaceholderOnFocus: true,
        className: "subhead"
      })), wp.element.createElement("span", {
        className: "cl-button"
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            button: content
          });
        },
        value: attributes.button,
        placeholder: __('Your button text'),
        keepPlaceholderOnFocus: true
      })), meta)))));
    }; // Generate block controls for alignment, etc


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
            mediaID: media.id,
            mediaHeight: media.height,
            mediaWidth: media.width,
            positionX: 0.5,
            positionY: 0.5
          });
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: attributes.mediaID,
        render: function render(_ref3) {
          var open = _ref3.open;
          return wp.element.createElement(Button, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Format'),
        id: "hero-format"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Hero Format')
      }, ['default', 'fullwidth', 'super'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'default' === value ? '' : value;
        var format = undefined === attributes.format ? '' : attributes.format;
        var selected = key === format;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
          onClick: function onClick(content) {
            return setAttributes({
              format: key
            });
          }
        }, capitalizedValue);
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(FocalPointPicker, {
        url: attributes.img,
        dimensions: {
          width: attributes.mediaWidth,
          height: attributes.mediaHeight
        },
        value: {
          x: attributes.positionX,
          y: attributes.positionY
        },
        onChange: function onChange(focalPoint) {
          return setAttributes({
            positionX: focalPoint.x * 1,
            positionY: focalPoint.y * 1
          });
        }
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Video URL",
        onChange: function onChange(content) {
          return setAttributes({
            vid: content
          });
        },
        value: attributes.vid,
        className: "meta-field vid",
        help: "For creating a video hero."
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Use WordPress caption",
        help: "Setting a custom caption below will override any WordPress caption.",
        checked: attributes.use_caption,
        onChange: function onChange(content) {
          return setAttributes({
            use_caption: content
          });
        }
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Caption",
        onChange: function onChange(content) {
          return setAttributes({
            caption: content
          });
        },
        value: attributes.caption,
        className: "meta-field vid",
        help: "Set a caption for the hero."
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Credit",
        onChange: function onChange(content) {
          return setAttributes({
            credit: content
          });
        },
        value: attributes.credit,
        className: "meta-field vid",
        help: "Specify credit for the hero media."
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
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/menu/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/menu/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    Toolbar = _wp$blockEditor.Toolbar,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl;

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/menu.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-menu';

  if (!!isSelected) {
    classes += ' selected';
  }

  return classes;
};

registerBlockType('uri-cl/menu', {
  title: __('Menu'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    name: {
      type: 'string'
    },
    depth: {
      type: 'number',
      default: 1
    },
    showtitle: {
      type: 'bool',
      default: false
    },
    title: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // Generate editor view of the button itself
    var createContentEditForm = function createContentEditForm() {
      // Set the classnames
      var classes = classNames(attributes, isSelected);
      var name = '';

      if (!!attributes.name) {
        name = ': ' + attributes.name;
      }

      var title = '';

      if (!!attributes.title && attributes.showtitle) {
        title = wp.element.createElement("span", {
          className: "cl-menu-toggle"
        }, " ", attributes.title, " ");
      }

      return wp.element.createElement("div", {
        className: "container cl-menu-block-form"
      }, wp.element.createElement("div", {
        className: classes
      }, title, wp.element.createElement("div", {
        className: "cl-menu-placeholder"
      }, "Menu placeholder", name)));
    }; // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: __('Menu name'),
        onChange: function onChange(content) {
          return setAttributes({
            name: content
          });
        },
        value: attributes.name,
        className: "meta-field"
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: __('Title'),
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        className: "meta-field"
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: __('Show title on desktop'),
        help: __('Titles are always shown on mobile'),
        checked: attributes.showtitle,
        onChange: function onChange(content) {
          return setAttributes({
            showtitle: content
          });
        }
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(RangeControl, {
        label: __('Depth'),
        max: 2,
        min: 1,
        onChange: function onChange(depth) {
          return setAttributes({
            depth: depth
          });
        },
        value: attributes.depth
      }))));
    }; // Send the editor interfaces to the view


    return [createInspectorControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/metric/block.js":
/*!***************************************!*\
  !*** ./src/js/blocks/metric/block.js ***!
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
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    Toolbar = _wp$blockEditor.Toolbar,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar;

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/metric.png',
    alt: "metric"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-metric';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  if (!!attributes.style) {
    classes += ' ' + attributes.style;
  }

  if (!!attributes.float) {
    classes += ' ' + attributes.float;
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
    float: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // Generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes, isSelected); // Set the tooltip

      var title = '';

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
        placeholder: __('100%'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("span", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            caption: content
          });
        },
        tagname: "p",
        value: attributes.caption,
        placeholder: __('metrics on this page'),
        keepPlaceholderOnFocus: true
      }))));
    }; // Generate block controls for alignment, etc


    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, wp.element.createElement(BlockAlignmentToolbar, {
        value: attributes.float,
        onChange: function onChange(content) {
          return setAttributes({
            float: content
          });
        }
      }));
    }; // Generate sidebar inspector controls for other custom attributes
    // @todo: technically, you can have a clear and dark metric
    // our buttongroup only allows users to select one


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
        label: __('Metric Style'),
        id: "metric-style"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Metric Style')
      }, ['standard', 'clear', 'dark', 'overlay'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'default' === value ? '' : value;
        var selected = key === attributes.style;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
          onClick: function onClick(content) {
            return setAttributes({
              style: key
            });
          }
        }, capitalizedValue);
      }))))));
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/notice/block.js":
/*!***************************************!*\
  !*** ./src/js/blocks/notice/block.js ***!
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
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl,
    DatePicker = _wp$components.DatePicker;
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    Toolbar = _wp$blockEditor.Toolbar,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/paragraph'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Your notice content...',
  dropCap: false
}]];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/notice.png',
    alt: "button"
  });
};

registerBlockType('uri-cl/notice', {
  title: __('Notice'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    expiration: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    show_expired: {
      type: 'bool'
    },
    dismissible: {
      type: 'bool'
    },
    contentWrapper: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    var createContentEditForm = function createContentEditForm() {
      var classes = 'cl-notice';

      if (!!attributes.className) {
        // @todo this gets automatically applied to wrapper... remove it?
        classes += ' ' + attributes.className;
      }

      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      }

      if (undefined === attributes.dismissible) {
        attributes.dismissible = true;
      } // Display a message on the admin screen if the notice is expired


      var date = new Date();
      var exp = new Date(attributes.expiration);
      var expirationMessage = '';
      var syntax = 'and will not';

      if (!!attributes.show_expired) {
        syntax = 'but will still';
      }

      if (!!attributes.expiration && exp.getTime() <= date.getTime()) {
        expirationMessage = wp.element.createElement("div", {
          className: "cl-component-message"
        }, "This notice has expired ", syntax, " be visible when published.");
      }

      setAttributes({
        contentWrapper: ''
      });
      return wp.element.createElement("div", {
        className: "container"
      }, expirationMessage, wp.element.createElement("div", {
        className: classes
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __('Your notice title'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })));
    };

    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Notice Style'),
        id: "notice-style"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Notice Style')
      }, ['default', 'urgent', 'covid19'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'default' === value ? '' : value;
        var style = undefined === attributes.style ? '' : attributes.style;
        var selected = key === style;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
          onClick: function onClick(content) {
            return setAttributes({
              style: key
            });
          }
        }, capitalizedValue);
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Allow visitors to dismiss this notice",
        checked: attributes.dismissible,
        onChange: function onChange(content) {
          return setAttributes({
            dismissible: content
          });
        }
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(DatePicker, {
        label: "Expiration date",
        currentDate: attributes.expiration,
        onChange: function onChange(date) {
          return setAttributes({
            expiration: date
          });
        }
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Show after expired",
        checked: attributes.show_expired,
        onChange: function onChange(content) {
          return setAttributes({
            show_expired: content
          });
        }
      }))));
    }; // Send the editor interfaces to the view


    return [createContentEditForm(), createInspectorControls()];
  },
  // End edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return wp.element.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/panel/block.js":
/*!**************************************!*\
  !*** ./src/js/blocks/panel/block.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/list', 'uri-cl/button'];
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
    src: URI_CL_URL + 'i/icons/panel.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = 'super' === attributes.format ? 'cl-panel-super' : 'cl-panel';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!attributes.reverse) {
    classes += ' reverse';
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
    format: {
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

    // Generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      }

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
    };

    var classes = classNames(attributes);

    var createContentEditForm = function createContentEditForm() {
      if ('super' === attributes.format) {
        return wp.element.createElement("div", {
          className: "container"
        }, wp.element.createElement("div", {
          className: classes
        }, wp.element.createElement("div", {
          className: "cl-panel-super-blur"
        }), wp.element.createElement("div", {
          className: "cl-panel-super-content"
        }, wp.element.createElement("div", {
          className: "cl-panel-super-image"
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
          className: "cl-panel-super-text"
        }, wp.element.createElement(InnerBlocks, {
          allowedBlocks: ALLOWED_BLOCKS,
          template: TEMPLATE
        })))));
      }

      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        className: classes
      }, wp.element.createElement("figure", {
        className: "poster"
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
        render: function render(_ref3) {
          var open = _ref3.open;
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
        render: function render(_ref4) {
          var open = _ref4.open;
          return wp.element.createElement(Button, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Format'),
        help: __('To increase performance, super panel previews will appear simplified in the editor window.'),
        id: "panel-format"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Panel Format')
      }, ['default', 'super'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'default' === value ? '' : value;
        var format = undefined === attributes.format ? '' : attributes.format;
        var selected = key === format;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
          onClick: function onClick(content) {
            return setAttributes({
              format: key
            });
          }
        }, capitalizedValue);
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Flip panel layout",
        checked: attributes.reverse,
        onChange: function onChange(content) {
          return setAttributes({
            reverse: content
          });
        }
      }))));
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // End edit
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    return wp.element.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/promo/block.js":
/*!**************************************!*\
  !*** ./src/js/blocks/promo/block.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    ButtonGroup = _wp$components.ButtonGroup,
    FocalPointPicker = _wp$components.FocalPointPicker,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    RichText = _wp$blockEditor.RichText,
    PlainText = _wp$blockEditor.PlainText,
    URLInput = _wp$blockEditor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/promo.png',
    alt: "button"
  });
};

registerBlockType('uri-cl/promo', {
  title: __('Promo'),
  icon: customIcon,
  category: 'cl-blocks',
  // The mediaID is what goes into the shortcode for front-end display
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
    linktext: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    mediaID: {
      type: 'number'
    },
    alt: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    format: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // Generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      }

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
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("form", {
        className: "meta",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, wp.element.createElement("fieldset", {
        className: "row link"
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
    } // Generate editor view of the promo itself


    var createContentEditForm = function createContentEditForm() {
      var classes = 'cl-promo';

      if (!!isSelected) {
        classes += ' selected';
      }

      if ('micro' === attributes.format) {
        classes += ' micro';
        return wp.element.createElement("div", {
          className: "container cl-promo-block-form"
        }, wp.element.createElement("div", {
          className: classes
        }, wp.element.createElement("div", {
          className: "cl-promo-micro-content-wrapper"
        }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
          onChange: function onChange(content) {
            return setAttributes({
              title: content
            });
          },
          value: attributes.title,
          placeholder: __('Your promo title'),
          keepPlaceholderOnFocus: true
        })), wp.element.createElement("span", {
          className: "cl-promo-micro-text-link"
        }, wp.element.createElement(PlainText, {
          onChange: function onChange(content) {
            return setAttributes({
              linktext: content
            });
          },
          value: attributes.linktext,
          placeholder: __('Your link text'),
          keepPlaceholderOnFocus: true
        }), meta))));
      }

      var style = 'style-blur';

      if (!!attributes.style && 'default' !== attributes.style) {
        style = 'style-' + attributes.style;
      }

      style = 'cl-promo-backdrop ' + style;
      return wp.element.createElement("div", {
        className: "container cl-promo-block-form"
      }, wp.element.createElement("div", {
        className: classes
      }, wp.element.createElement("div", {
        className: "cl-promo-backdrop-wrapper"
      }, wp.element.createElement("div", {
        className: style
      })), wp.element.createElement("div", {
        className: "cl-promo-content"
      }, wp.element.createElement("div", {
        className: "cl-promo-text"
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __('Your promo title'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("p", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        value: attributes.body,
        placeholder: __('Your promo text'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("p", null, wp.element.createElement("span", {
        className: "cl-promo-text-link"
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            linktext: content
          });
        },
        value: attributes.linktext,
        placeholder: __('Your link text'),
        keepPlaceholderOnFocus: true
      })))), wp.element.createElement("div", {
        className: "cl-promo-img-wrapper"
      }, wp.element.createElement("div", {
        className: "cl-promo-img"
      }, wp.element.createElement("span", {
        className: "cl-promo-img-link"
      }, wp.element.createElement("span", {
        className: "cl-promo-block-editor-meta"
      }, meta), wp.element.createElement(MediaUpload, {
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
      })))))));
    }; // Generate block controls for alignment, etc


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
          return wp.element.createElement(Button, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    };

    var styleControl;

    if ('micro' !== attributes.format) {
      styleControl = wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Style'),
        help: __('To increase performance, promo previews will appear simplified in the editor window.'),
        id: "promo-style"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Promo Style')
      }, ['default', 'brand', 'confetti'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'default' === value ? '' : value;
        var format = undefined === attributes.style ? '' : attributes.style;
        var selected = key === format;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
          onClick: function onClick(content) {
            return setAttributes({
              style: key
            });
          }
        }, capitalizedValue);
      }))));
    } // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Format'),
        id: "promo-format"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Promo Format')
      }, ['default', 'micro'].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = 'default' === value ? '' : value;
        var format = undefined === attributes.format ? '' : attributes.format;
        var selected = key === format;
        return wp.element.createElement(Button, {
          key: key,
          isSecondary: true,
          isPrimary: selected,
          "aria-pressed": selected,
          onClick: function onClick(content) {
            return setAttributes({
              format: key
            });
          }
        }, capitalizedValue);
      })))), styleControl));
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/quote/block.js":
/*!**************************************!*\
  !*** ./src/js/blocks/quote/block.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    PlainText = _wp$blockEditor.PlainText,
    RichText = _wp$blockEditor.RichText,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
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
    src: URI_CL_URL + 'i/icons/quote.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-quote';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!isSelected) {
    classes += ' selected';
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
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;

    // Generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      }

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
    };

    var classes = classNames(attributes, isSelected);

    var createContentEditForm = function createContentEditForm() {
      var imageClass = !!attributes.mediaID ? 'cl-quote-image' : '';
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        className: classes
      }, wp.element.createElement("div", {
        className: imageClass
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
      })), wp.element.createElement("blockquote", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            quote: content
          });
        },
        value: attributes.quote,
        placeholder: __('The quote'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("cite", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            citation: content
          });
        },
        value: attributes.citation,
        placeholder: __('Anonymous'),
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
          return wp.element.createElement(Button, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    }; // Send the editor interfaces to the view


    return [createBlockControls(), createContentEditForm()];
  } // End edit

});

/***/ }),

/***/ "./src/js/blocks/tabs/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/tabs/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var ALLOWED_BLOCKS = ['uri-cl/tab'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/tabs.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = 'cl-tabs';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  return classes;
};

var getTabsTemplate = function getTabsTemplate(tabs) {
  return _toConsumableArray(Array(tabs)).map(function () {
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
    // Generate the image or the add image section
    var classes = classNames(attributes); // Generate sidebar inspector controls for other custom attributes

    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(RangeControl, {
        label: __('Tabs'),
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
        className: classes
      }, wp.element.createElement(InnerBlocks, {
        template: getTabsTemplate(attributes.tabs),
        templateLock: "all",
        allowedBlocks: ALLOWED_BLOCKS
      })));
    }; // Send the editor interfaces to the view


    return [createInspectorControls(), createContentEditForm()];
  },
  // End edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return wp.element.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/tabs/tab.js":
/*!***********************************!*\
  !*** ./src/js/blocks/tabs/tab.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    PlainText = _wp$blockEditor.PlainText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'core/list', 'uri-cl/button', 'uri-cl/card', 'uri-cl/metric', 'uri-cl/quote'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Your tab content...',
  dropCap: false
}]];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/tab.png',
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
  attributes: {
    title: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    return wp.element.createElement("div", {
      className: "cl-tab"
    }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          title: content
        });
      },
      value: attributes.title,
      placeholder: __('Tab Title'),
      keepPlaceholderOnFocus: true
    })), wp.element.createElement(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE,
      templateLock: false
    }));
  },
  // End edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return wp.element.createElement(InnerBlocks.Content, null);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvZGF0ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvY2tzL2hlcm8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9tZW51L2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvbWV0cmljL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3Mvbm90aWNlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvcGFuZWwvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9wcm9tby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvY2tzL3F1b3RlL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvdGFicy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvY2tzL3RhYnMvdGFiLmpzIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJibG9ja0VkaXRvciIsIlBsYWluVGV4dCIsIlJpY2hUZXh0IiwiTWVkaWFVcGxvYWQiLCJJbnNwZWN0b3JDb250cm9scyIsIkJsb2NrQ29udHJvbHMiLCJUb29sYmFyIiwiQnV0dG9uIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwicGxhY2Vob2xkZXIiLCJkcm9wQ2FwIiwiY3VzdG9tSWNvbiIsIlVSSV9DTF9VUkwiLCJjbGFzc05hbWVzIiwiYXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiZmxvYXQiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsInR5cGUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNvbnRlbnQiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwic2F2ZSIsIlVSTElucHV0IiwiY29tcG9uZW50cyIsIkRhc2hpY29uIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uR3JvdXAiLCJhbGlnbm1lbnQiLCJzdHlsZSIsImxpbmsiLCJ0ZXh0IiwidG9vbHRpcCIsIm1ldGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMiLCJtYXAiLCJ2YWx1ZSIsImNhcGl0YWxpemVkVmFsdWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwia2V5IiwidW5kZWZpbmVkIiwic2VsZWN0ZWQiLCJ3aXRoTm90aWNlcyIsIk1lZGlhUGxhY2Vob2xkZXIiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJpbWciLCJib2R5IiwibWVkaWFJRCIsImFsdCIsImJ1dHRvbiIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwiaW5zdHJ1Y3Rpb25zIiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJUb2dnbGVDb250cm9sIiwiRGF0ZVBpY2tlciIsImNvbG9yIiwiZGF0ZSIsImNhcHRpb24iLCJzaG93X3llYXIiLCJEYXRlIiwibW9udGgiLCJ0b0xvY2FsZVN0cmluZyIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJleHBpcmF0aW9uTWVzc2FnZSIsImdldFRpbWUiLCJnZXREYXRlIiwiRm9jYWxQb2ludFBpY2tlciIsInJhbmRvbUlEIiwiUzQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJoZWFkbGluZSIsInN1YmhlYWQiLCJtZWRpYUhlaWdodCIsIm1lZGlhV2lkdGgiLCJ2aWQiLCJ1c2VfY2FwdGlvbiIsImNyZWRpdCIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImZvcm1hdCIsImFuaW1hdGlvbiIsImhlaWdodCIsIndpZHRoIiwicG9zdGVyIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwieCIsInkiLCJmb2NhbFBvaW50IiwiUmFuZ2VDb250cm9sIiwibmFtZSIsImRlcHRoIiwiZGVmYXVsdCIsInNob3d0aXRsZSIsIm1ldHJpYyIsImV4cGlyYXRpb24iLCJzaG93X2V4cGlyZWQiLCJkaXNtaXNzaWJsZSIsImNvbnRlbnRXcmFwcGVyIiwiZXhwIiwic3ludGF4IiwibGV2ZWwiLCJyZXZlcnNlIiwibGlua3RleHQiLCJzdHlsZUNvbnRyb2wiLCJxdW90ZSIsImNpdGF0aW9uIiwiaW1hZ2VDbGFzcyIsImdldFRhYnNUZW1wbGF0ZSIsInRhYnMiLCJBcnJheSIsIm5leHRUYWJzIiwicGFyZW50Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztJQ1hRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBRVBHLGlCLEdBQ0dGLEVBQUUsQ0FBQ0csTSxDQURORCxpQjtzQkFZR0YsRUFBRSxDQUFDSSxXO0lBVE5DLFMsbUJBQUFBLFM7SUFDQUMsUSxtQkFBQUEsUTtJQUNBQyxXLG1CQUFBQSxXO0lBQ0FDLGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FDLE8sbUJBQUFBLE87SUFDQUMsTSxtQkFBQUEsTTtJQUNBQyxxQixtQkFBQUEscUI7SUFDQUMsVyxtQkFBQUEsVztBQUVELElBQU1DLGNBQWMsR0FBRyxDQUN0QixZQURzQixFQUV0QixjQUZzQixFQUd0QixnQkFIc0IsRUFJdEIsV0FKc0IsRUFLdEIsZUFMc0IsQ0FBdkI7QUFPQSxJQUFNQyxRQUFRLEdBQUcsQ0FDaEIsQ0FBRSxnQkFBRixFQUFvQjtBQUFFQyxhQUFXLEVBQUUsd0JBQWY7QUFBeUNDLFNBQU8sRUFBRTtBQUFsRCxDQUFwQixDQURnQixDQUFqQjs7QUFJQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLFNBQ0M7QUFDQyxTQUFLLEVBQUMsSUFEUDtBQUVDLFVBQU0sRUFBQyxJQUZSO0FBR0MsYUFBUyxFQUFDLFVBSFg7QUFJQyxPQUFHLEVBQUtDLFVBQVUsR0FBRyxvQkFKdEI7QUFLQyxPQUFHLEVBQUM7QUFMTCxJQUREO0FBU0EsQ0FWRDs7QUFZQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFFQyxVQUFGLEVBQWNDLFVBQWQsRUFBOEI7QUFDaEQsTUFBSUMsT0FBTyxHQUFHLFdBQWQ7O0FBQ0EsTUFBSyxDQUFDLENBQUVGLFVBQVUsQ0FBQ0csU0FBbkIsRUFBK0I7QUFDOUI7QUFDQUQsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0csU0FBNUI7QUFDQTs7QUFDRCxNQUFLLENBQUMsQ0FBRUYsVUFBUixFQUFxQjtBQUNwQkMsV0FBTyxJQUFJLFdBQVg7QUFDQTs7QUFDRCxNQUFLLENBQUMsQ0FBRUYsVUFBVSxDQUFDSSxLQUFuQixFQUEyQjtBQUMxQkYsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0ksS0FBNUI7QUFDQTs7QUFDRCxTQUFPRixPQUFQO0FBQ0EsQ0FiRDs7QUFlQXJCLGlCQUFpQixDQUFFLGVBQUYsRUFBbUI7QUFFbkN3QixPQUFLLEVBQUUzQixFQUFFLENBQUUsUUFBRixDQUYwQjtBQUduQzRCLE1BQUksRUFBRVQsVUFINkI7QUFJbkNVLFVBQVEsRUFBRSxXQUp5QjtBQUtuQ1AsWUFBVSxFQUFFO0FBQ1hLLFNBQUssRUFBRTtBQUNORyxVQUFJLEVBQUU7QUFEQSxLQURJO0FBSVhKLFNBQUssRUFBRTtBQUNOSSxVQUFJLEVBQUU7QUFEQTtBQUpJLEdBTHVCO0FBY25DQyxNQWRtQyxzQkFjMEI7QUFBQSxRQUFyRFQsVUFBcUQsUUFBckRBLFVBQXFEO0FBQUEsUUFBekNHLFNBQXlDLFFBQXpDQSxTQUF5QztBQUFBLFFBQTlCTyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxRQUFmVCxVQUFlLFFBQWZBLFVBQWU7O0FBQzVEO0FBQ0EsUUFBTVUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLFVBQU1ULE9BQU8sR0FBR0gsVUFBVSxDQUFFQyxVQUFGLEVBQWNDLFVBQWQsQ0FBMUI7QUFDQSxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBUyxFQUFHQztBQUFqQixTQUNDLHFDQUFJLHlCQUFDLFNBQUQ7QUFDSCxnQkFBUSxFQUFHLGtCQUFFVSxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFTCxpQkFBSyxFQUFFTztBQUFULFdBQUYsQ0FBNUI7QUFBQSxTQURSO0FBRUgsYUFBSyxFQUFHWixVQUFVLENBQUNLLEtBRmhCO0FBR0gsbUJBQVcsRUFBRzNCLEVBQUUsQ0FBRSxPQUFGLENBSGI7QUFJSCw4QkFBc0IsRUFBRztBQUp0QixRQUFKLENBREQsRUFPQyx5QkFBQyxXQUFEO0FBQ0MscUJBQWEsRUFBR2UsY0FEakI7QUFFQyxnQkFBUSxFQUFHQztBQUZaLFFBUEQsQ0FERCxDQUREO0FBZ0JBLEtBbEJELENBRjRELENBc0I1RDs7O0FBQ0EsUUFBTW1CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNqQyxhQUNDLHlCQUFDLGFBQUQ7QUFBZSxXQUFHLEVBQUM7QUFBbkIsU0FDQyx5QkFBQyxxQkFBRDtBQUNDLGFBQUssRUFBR2IsVUFBVSxDQUFDSSxLQURwQjtBQUVDLGdCQUFRLEVBQUcsa0JBQUVRLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVOLGlCQUFLLEVBQUVRO0FBQVQsV0FBRixDQUE1QjtBQUFBO0FBRlosUUFERCxDQUREO0FBUUEsS0FURCxDQXZCNEQsQ0FrQzVEOzs7QUFDQSxXQUFTLENBQ1JDLG1CQUFtQixFQURYLEVBRVJGLHFCQUFxQixFQUZiLENBQVQ7QUFJQSxHQXJEa0M7QUFxRGhDO0FBRUhHLE1BdkRtQyx1QkF1RFo7QUFBQSxRQUFmZCxVQUFlLFNBQWZBLFVBQWU7QUFDdEIsV0FDQyx5QkFBQyxXQUFELENBQWEsT0FBYixPQUREO0FBR0E7QUEzRGtDLENBQW5CLENBQWpCLEM7Ozs7Ozs7Ozs7O0lDckRRdEIsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUNBRyxpQixHQUFzQkYsRUFBRSxDQUFDRyxNLENBQXpCRCxpQjtzQkFTSkYsRUFBRSxDQUFDSSxXO0lBUE5DLFMsbUJBQUFBLFM7SUFDQUMsUSxtQkFBQUEsUTtJQUNBOEIsUSxtQkFBQUEsUTtJQUNBNUIsaUIsbUJBQUFBLGlCO0lBQ0FDLGEsbUJBQUFBLGE7SUFDQUMsTyxtQkFBQUEsTztJQUNBRSxxQixtQkFBQUEscUI7cUJBVUdaLEVBQUUsQ0FBQ3FDLFU7SUFQTkMsUSxrQkFBQUEsUTtJQUNBQyxTLGtCQUFBQSxTO0lBQ0FDLFEsa0JBQUFBLFE7SUFDQUMsVyxrQkFBQUEsVztJQUNBQyxXLGtCQUFBQSxXO0lBQ0EvQixNLGtCQUFBQSxNO0lBQ0FnQyxXLGtCQUFBQSxXOztBQUdELElBQU16QixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLFNBQ0M7QUFDQyxTQUFLLEVBQUMsSUFEUDtBQUVDLFVBQU0sRUFBQyxJQUZSO0FBR0MsYUFBUyxFQUFDLFVBSFg7QUFJQyxPQUFHLEVBQUtDLFVBQVUsR0FBRyxvQkFKdEI7QUFLQyxPQUFHLEVBQUM7QUFMTCxJQUREO0FBU0EsQ0FWRDs7QUFZQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFFQyxVQUFGLEVBQWNDLFVBQWQsRUFBOEI7QUFDaEQsTUFBSUMsT0FBTyxHQUFHLFdBQWQ7O0FBQ0EsTUFBSyxDQUFDLENBQUVGLFVBQVUsQ0FBQ0csU0FBbkIsRUFBK0I7QUFDOUI7QUFDQUQsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0csU0FBNUI7QUFDQTs7QUFDRCxNQUFLLENBQUMsQ0FBRUgsVUFBVSxDQUFDdUIsU0FBbkIsRUFBK0I7QUFDOUJyQixXQUFPLElBQUksTUFBTUYsVUFBVSxDQUFDdUIsU0FBNUI7QUFDQTs7QUFDRCxNQUFLLENBQUMsQ0FBRXZCLFVBQVUsQ0FBQ3dCLEtBQW5CLEVBQTJCO0FBQzFCdEIsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ3dCLEtBQTVCO0FBQ0E7O0FBQ0QsTUFBSyxDQUFDLENBQUV2QixVQUFSLEVBQXFCO0FBQ3BCQyxXQUFPLElBQUksV0FBWDtBQUNBOztBQUVELFNBQU9BLE9BQVA7QUFDQSxDQWpCRDs7QUFtQkFyQixpQkFBaUIsQ0FBRSxlQUFGLEVBQW1CO0FBRW5Dd0IsT0FBSyxFQUFFM0IsRUFBRSxDQUFFLFFBQUYsQ0FGMEI7QUFHbkM0QixNQUFJLEVBQUVULFVBSDZCO0FBSW5DVSxVQUFRLEVBQUUsV0FKeUI7QUFLbkNQLFlBQVUsRUFBRTtBQUNYeUIsUUFBSSxFQUFFO0FBQ0xqQixVQUFJLEVBQUU7QUFERCxLQURLO0FBSVhrQixRQUFJLEVBQUU7QUFDTGxCLFVBQUksRUFBRTtBQURELEtBSks7QUFPWG1CLFdBQU8sRUFBRTtBQUNSbkIsVUFBSSxFQUFFO0FBREUsS0FQRTtBQVVYZ0IsU0FBSyxFQUFFO0FBQ05oQixVQUFJLEVBQUU7QUFEQTtBQVZJLEdBTHVCO0FBb0JuQ0MsTUFwQm1DLHNCQW9CMEI7QUFBQSxRQUFyRFQsVUFBcUQsUUFBckRBLFVBQXFEO0FBQUEsUUFBekNHLFNBQXlDLFFBQXpDQSxTQUF5QztBQUFBLFFBQTlCTyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxRQUFmVCxVQUFlLFFBQWZBLFVBQWU7O0FBQzVEO0FBQ0EsUUFBTVUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLFVBQUlpQixJQUFKOztBQUNBLFVBQUssQ0FBQyxDQUFFM0IsVUFBUixFQUFxQjtBQUNwQjJCLFlBQUksR0FDSDtBQUNDLG1CQUFTLEVBQUMsTUFEWDtBQUVDLGtCQUFRLEVBQUcsa0JBQUVDLEtBQUY7QUFBQSxtQkFBYUEsS0FBSyxDQUFDQyxjQUFOLEVBQWI7QUFBQTtBQUZaLFdBSUM7QUFBVSxtQkFBUyxFQUFDO0FBQXBCLFdBQ0M7QUFBTyxlQUFLLEVBQUM7QUFBYixXQUF5Qix5QkFBQyxRQUFEO0FBQVUsY0FBSSxFQUFDO0FBQWYsVUFBekIsQ0FERCxFQUVDLHlCQUFDLFFBQUQ7QUFDQyxlQUFLLEVBQUc5QixVQUFVLENBQUN5QixJQURwQjtBQUVDLGtCQUFRLEVBQUcsa0JBQUViLE9BQUY7QUFBQSxtQkFBZUYsYUFBYSxDQUFFO0FBQUVlLGtCQUFJLEVBQUViO0FBQVIsYUFBRixDQUE1QjtBQUFBLFdBRlo7QUFHQyxxQkFBVyxFQUFDLHNCQUhiO0FBSUMsbUJBQVMsRUFBQztBQUpYLFVBRkQsQ0FKRCxDQUREO0FBZ0JBLE9BbkJrQyxDQXFCbkM7OztBQUNBLFVBQU1WLE9BQU8sR0FBR0gsVUFBVSxDQUFFQyxVQUFGLEVBQWNDLFVBQWQsQ0FBMUIsQ0F0Qm1DLENBd0JuQzs7QUFDQSxVQUFJSSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxVQUFLLENBQUMsQ0FBRUwsVUFBVSxDQUFDMkIsT0FBbkIsRUFBNkI7QUFDNUJ0QixhQUFLLEdBQUdMLFVBQVUsQ0FBQzJCLE9BQW5CO0FBQ0E7O0FBQ0QsYUFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDO0FBQU0saUJBQVMsRUFBR3pCLE9BQWxCO0FBQTRCLGFBQUssRUFBR0c7QUFBcEMsU0FDQyx5QkFBQyxTQUFEO0FBQ0MsZ0JBQVEsRUFBRyxrQkFBRU8sT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRWdCLGdCQUFJLEVBQUVkO0FBQVIsV0FBRixDQUE1QjtBQUFBLFNBRFo7QUFFQyxhQUFLLEVBQUdaLFVBQVUsQ0FBQzBCLElBRnBCO0FBR0MsbUJBQVcsRUFBR2hELEVBQUUsQ0FBRSxrQkFBRixDQUhqQjtBQUlDLDhCQUFzQixFQUFHLElBSjFCO0FBS0MsaUJBQVMsRUFBQztBQUxYLFFBREQsQ0FERCxFQVVHa0QsSUFWSCxDQUREO0FBY0EsS0EzQ0QsQ0FGNEQsQ0ErQzVEO0FBQ0E7OztBQUNBLFFBQU1mLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNqQyxhQUNDLHlCQUFDLGFBQUQ7QUFBZSxXQUFHLEVBQUM7QUFBbkIsU0FDQyx5QkFBQyxxQkFBRDtBQUNDLGFBQUssRUFBR2IsVUFBVSxDQUFDdUIsU0FEcEI7QUFFQyxnQkFBUSxFQUFHLGtCQUFFWCxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFYSxxQkFBUyxFQUFFWDtBQUFiLFdBQUYsQ0FBNUI7QUFBQTtBQUZaLFFBREQsQ0FERDtBQVFBLEtBVEQsQ0FqRDRELENBNEQ1RDs7O0FBQ0EsUUFBTW1CLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNyQyxhQUNDLHlCQUFDLGlCQUFELFFBQ0MseUJBQUMsU0FBRCxRQUNDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsYUFBSyxFQUFHckQsRUFBRSxDQUFFLGNBQUYsQ0FEWDtBQUVDLFVBQUUsRUFBQztBQUZKLFNBSUMseUJBQUMsV0FBRDtBQUFhLHNCQUFhQSxFQUFFLENBQUUsY0FBRjtBQUE1QixTQUNHLENBQUUsU0FBRixFQUFhLFdBQWIsRUFBMEIsVUFBMUIsRUFBdUNzRCxHQUF2QyxDQUE0QyxVQUFFQyxLQUFGLEVBQWE7QUFDMUQsWUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFjLENBQWQsRUFBa0JDLFdBQWxCLEtBQWtDSCxLQUFLLENBQUNJLEtBQU4sQ0FBYSxDQUFiLENBQTNEO0FBQ0EsWUFBTUMsR0FBRyxHQUFLLGNBQWNMLEtBQWhCLEdBQTBCLEVBQTFCLEdBQStCQSxLQUEzQztBQUNBLFlBQU1ULEtBQUssR0FBS2UsU0FBUyxLQUFLdkMsVUFBVSxDQUFDd0IsS0FBM0IsR0FBcUMsRUFBckMsR0FBMEN4QixVQUFVLENBQUN3QixLQUFuRTtBQUNBLFlBQU1nQixRQUFRLEdBQUtGLEdBQUcsS0FBS2QsS0FBM0I7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUdjLEdBRFA7QUFFQyxxQkFBVyxNQUZaO0FBR0MsbUJBQVMsRUFBR0UsUUFIYjtBQUlDLDBCQUFlQSxRQUpoQjtBQUtDLGlCQUFPLEVBQUcsaUJBQUU1QixPQUFGO0FBQUEsbUJBQWVGLGFBQWEsQ0FBRTtBQUFFYyxtQkFBSyxFQUFFYztBQUFULGFBQUYsQ0FBNUI7QUFBQTtBQUxYLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWpCQyxDQURILENBSkQsQ0FERCxDQURELEVBNkJDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsYUFBSyxFQUFDLFVBRFA7QUFFQyxnQkFBUSxFQUFHLGtCQUFFdEIsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRWlCLG1CQUFPLEVBQUVmO0FBQVgsV0FBRixDQUE1QjtBQUFBLFNBRlo7QUFHQyxhQUFLLEVBQUdaLFVBQVUsQ0FBQzJCLE9BSHBCO0FBSUMsaUJBQVMsRUFBQztBQUpYLFFBREQsQ0E3QkQsQ0FERCxDQUREO0FBMkNBLEtBNUNELENBN0Q0RCxDQTJHNUQ7OztBQUNBLFdBQVMsQ0FDUkksdUJBQXVCLEVBRGYsRUFFUnBCLHFCQUFxQixFQUZiLENBQVQ7QUFJQSxHQXBJa0MsQ0FvSWhDOztBQXBJZ0MsQ0FBbkIsQ0FBakIsQzs7Ozs7Ozs7Ozs7SUNwRFFqQyxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBQ0FHLGlCLEdBQXNCRixFQUFFLENBQUNHLE0sQ0FBekJELGlCO3FCQVVKRixFQUFFLENBQUNxQyxVO0lBUk5DLFEsa0JBQUFBLFE7SUFDQTNCLE0sa0JBQUFBLE07SUFDQTRCLFMsa0JBQUFBLFM7SUFDQUMsUSxrQkFBQUEsUTtJQUNBOUIsTyxrQkFBQUEsTztJQUNBb0QsVyxrQkFBQUEsVztJQUNBckIsVyxrQkFBQUEsVztJQUNBQyxXLGtCQUFBQSxXO3NCQWFHMUMsRUFBRSxDQUFDSSxXO0lBVk5LLGEsbUJBQUFBLGE7SUFDQUQsaUIsbUJBQUFBLGlCO0lBQ0FJLHFCLG1CQUFBQSxxQjtJQUNBbUQsZ0IsbUJBQUFBLGdCO0lBQ0F4RCxXLG1CQUFBQSxXO0lBQ0F5RCxnQixtQkFBQUEsZ0I7SUFDQUMsZ0IsbUJBQUFBLGdCO0lBQ0EzRCxRLG1CQUFBQSxRO0lBQ0FELFMsbUJBQUFBLFM7SUFDQStCLFEsbUJBQUFBLFE7QUFHRCxJQUFNOEIsbUJBQW1CLEdBQUcsQ0FBRSxPQUFGLENBQTVCOztBQUVBLElBQU1oRCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLFNBQ0M7QUFDQyxTQUFLLEVBQUMsSUFEUDtBQUVDLFVBQU0sRUFBQyxJQUZSO0FBR0MsYUFBUyxFQUFDLFVBSFg7QUFJQyxPQUFHLEVBQUtDLFVBQVUsR0FBRyxrQkFKdEI7QUFLQyxPQUFHLEVBQUM7QUFMTCxJQUREO0FBU0EsQ0FWRDs7QUFZQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFFQyxVQUFGLEVBQWNDLFVBQWQsRUFBOEI7QUFDaEQsTUFBSUMsT0FBTyxHQUFHLFNBQWQ7O0FBQ0EsTUFBSyxDQUFDLENBQUVGLFVBQVUsQ0FBQ0csU0FBbkIsRUFBK0I7QUFDOUI7QUFDQUQsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0csU0FBNUI7QUFDQTs7QUFDRCxNQUFLLENBQUMsQ0FBRUgsVUFBVSxDQUFDSSxLQUFuQixFQUEyQjtBQUMxQkYsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0ksS0FBNUI7QUFDQTs7QUFFRCxNQUFLLENBQUMsQ0FBRUgsVUFBUixFQUFxQjtBQUNwQkMsV0FBTyxJQUFJLFdBQVg7QUFDQTs7QUFFRCxNQUFLLENBQUMsQ0FBRUYsVUFBVSxDQUFDOEMsR0FBbkIsRUFBeUI7QUFDeEI1QyxXQUFPLElBQUksWUFBWDtBQUNBLEdBRkQsTUFFTztBQUNOQSxXQUFPLElBQUksV0FBWDtBQUNBOztBQUVELFNBQU9BLE9BQVA7QUFDQSxDQXJCRDs7QUF1QkFyQixpQkFBaUIsQ0FBRSxhQUFGLEVBQWlCO0FBRWpDd0IsT0FBSyxFQUFFM0IsRUFBRSxDQUFFLE1BQUYsQ0FGd0I7QUFHakM0QixNQUFJLEVBQUVULFVBSDJCO0FBSWpDVSxVQUFRLEVBQUUsV0FKdUI7QUFNakM7QUFDQTtBQUNBUCxZQUFVLEVBQUU7QUFDWEssU0FBSyxFQUFFO0FBQ05HLFVBQUksRUFBRTtBQURBLEtBREk7QUFJWHVDLFFBQUksRUFBRTtBQUNMdkMsVUFBSSxFQUFFO0FBREQsS0FKSztBQU9YaUIsUUFBSSxFQUFFO0FBQ0xqQixVQUFJLEVBQUU7QUFERCxLQVBLO0FBVVh3QyxXQUFPLEVBQUU7QUFDUnhDLFVBQUksRUFBRTtBQURFLEtBVkU7QUFhWHNDLE9BQUcsRUFBRTtBQUNKdEMsVUFBSSxFQUFFO0FBREYsS0FiTTtBQWdCWHlDLE9BQUcsRUFBRTtBQUNKekMsVUFBSSxFQUFFO0FBREYsS0FoQk07QUFtQlgwQyxVQUFNLEVBQUU7QUFDUDFDLFVBQUksRUFBRTtBQURDLEtBbkJHO0FBc0JYbUIsV0FBTyxFQUFFO0FBQ1JuQixVQUFJLEVBQUU7QUFERSxLQXRCRTtBQXlCWEosU0FBSyxFQUFFO0FBQ05JLFVBQUksRUFBRTtBQURBO0FBekJJLEdBUnFCO0FBc0NqQ0MsTUF0Q2lDLHNCQXNDNEI7QUFBQSxRQUFyRFQsVUFBcUQsUUFBckRBLFVBQXFEO0FBQUEsUUFBekNHLFNBQXlDLFFBQXpDQSxTQUF5QztBQUFBLFFBQTlCTyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxRQUFmVCxVQUFlLFFBQWZBLFVBQWU7O0FBQzVEO0FBQ0EsUUFBTWtELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBRUMsU0FBRixFQUFpQjtBQUN2QyxVQUFLcEQsVUFBVSxDQUFDZ0QsT0FBaEIsRUFBMEI7QUFDekIsZUFDQztBQUNDLGFBQUcsRUFBR2hELFVBQVUsQ0FBQzhDLEdBRGxCO0FBRUMsYUFBRyxFQUFHOUMsVUFBVSxDQUFDaUQsR0FGbEI7QUFHQyxtQkFBUyxFQUFDO0FBSFgsVUFERDtBQU9BOztBQUNELGFBQ0MseUJBQUMsZ0JBQUQ7QUFDQyxZQUFJLEVBQUcsY0FEUjtBQUVDLGlCQUFTLEVBQUc5QyxTQUZiO0FBR0MsY0FBTSxFQUFHO0FBQ1JFLGVBQUssRUFBRSxjQURDO0FBRVJnRCxzQkFBWSxFQUFFM0UsRUFBRSxDQUFFLHFFQUFGO0FBRlIsU0FIVjtBQU9DLGdCQUFRLEVBQUcsa0JBQUU0RSxLQUFGLEVBQWE7QUFDdkI1Qyx1QkFBYSxDQUFFO0FBQ2R1QyxlQUFHLEVBQUVLLEtBQUssQ0FBQ0wsR0FERztBQUVkSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGRztBQUdkUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSEQsV0FBRixDQUFiO0FBS0EsU0FiRjtBQWVDLGNBQU0sRUFBQyxTQWZSO0FBZ0JDLG9CQUFZLEVBQUdYO0FBaEJoQixRQUREO0FBb0JBLEtBOUJEOztBQWdDQSxRQUFJakIsSUFBSjs7QUFDQSxRQUFLLENBQUMsQ0FBRTNCLFVBQVIsRUFBcUI7QUFDcEIyQixVQUFJLEdBQ0g7QUFDQyxpQkFBUyxFQUFDLE1BRFg7QUFFQyxnQkFBUSxFQUFHLGtCQUFFQyxLQUFGO0FBQUEsaUJBQWFBLEtBQUssQ0FBQ0MsY0FBTixFQUFiO0FBQUE7QUFGWixTQUlDO0FBQVUsaUJBQVMsRUFBQztBQUFwQixTQUNDO0FBQU8sYUFBSyxFQUFDO0FBQWIsU0FBeUIseUJBQUMsUUFBRDtBQUFVLFlBQUksRUFBQztBQUFmLFFBQXpCLENBREQsRUFFQyx5QkFBQyxRQUFEO0FBQ0MsYUFBSyxFQUFHOUIsVUFBVSxDQUFDeUIsSUFEcEI7QUFFQyxnQkFBUSxFQUFHLGtCQUFFYixPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFZSxnQkFBSSxFQUFFYjtBQUFSLFdBQUYsQ0FBNUI7QUFBQSxTQUZaO0FBR0MsbUJBQVcsRUFBQyxzQkFIYjtBQUlDLGlCQUFTLEVBQUM7QUFKWCxRQUZELENBSkQsQ0FERDtBQWdCQSxLQXBEMkQsQ0FzRDVEOzs7QUFDQSxRQUFNRCxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbkMsVUFBTVQsT0FBTyxHQUFHSCxVQUFVLENBQUVDLFVBQUYsRUFBY0MsVUFBZCxDQUExQixDQURtQyxDQUduQzs7QUFDQSxVQUFJSSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxVQUFLLENBQUMsQ0FBRUwsVUFBVSxDQUFDMkIsT0FBbkIsRUFBNkI7QUFDNUJ0QixhQUFLLEdBQUdMLFVBQVUsQ0FBQzJCLE9BQW5CO0FBQ0E7O0FBQ0QsYUFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDO0FBQUssaUJBQVMsRUFBR3pCLE9BQWpCO0FBQTJCLGFBQUssRUFBR0c7QUFBbkMsU0FFQyx5QkFBQyxXQUFEO0FBQ0MsZ0JBQVEsRUFBRyxrQkFBRWlELEtBQUYsRUFBYTtBQUN2QjVDLHVCQUFhLENBQUU7QUFDZHVDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQURHO0FBRWRILGVBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZHO0FBR2RQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIRCxXQUFGLENBQWI7QUFLQSxTQVBGO0FBU0MsWUFBSSxFQUFDLE9BVE47QUFVQyxhQUFLLEVBQUd4RCxVQUFVLENBQUNnRCxPQVZwQjtBQVdDLGNBQU0sRUFBRztBQUFBLGNBQUlTLElBQUosU0FBSUEsSUFBSjtBQUFBLGlCQUFnQk4sY0FBYyxDQUFFTSxJQUFGLENBQTlCO0FBQUE7QUFYVixRQUZELEVBZ0JDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0MscUNBQUkseUJBQUMsU0FBRDtBQUNILGdCQUFRLEVBQUcsa0JBQUU3QyxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFTCxpQkFBSyxFQUFFTztBQUFULFdBQUYsQ0FBNUI7QUFBQSxTQURSO0FBRUgsYUFBSyxFQUFHWixVQUFVLENBQUNLLEtBRmhCO0FBR0gsbUJBQVcsRUFBRzNCLEVBQUUsQ0FBRSxpQkFBRixDQUhiO0FBSUgsOEJBQXNCLEVBQUc7QUFKdEIsUUFBSixDQURELEVBT0MseUJBQUMsUUFBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUVrQyxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFcUMsZ0JBQUksRUFBRW5DO0FBQVIsV0FBRixDQUE1QjtBQUFBLFNBRFo7QUFFQyxlQUFPLEVBQUMsR0FGVDtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDK0MsSUFIcEI7QUFJQyxtQkFBVyxFQUFHckUsRUFBRSxDQUFFLGdCQUFGLENBSmpCO0FBS0MsOEJBQXNCLEVBQUc7QUFMMUIsUUFQRCxDQWhCRCxFQStCQyxzQ0FDQyx5QkFBQyxTQUFEO0FBQ0MsZ0JBQVEsRUFBRyxrQkFBRWtDLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUV3QyxrQkFBTSxFQUFFdEM7QUFBVixXQUFGLENBQTVCO0FBQUEsU0FEWjtBQUVDLGFBQUssRUFBR1osVUFBVSxDQUFDa0QsTUFGcEI7QUFHQyxtQkFBVyxFQUFHeEUsRUFBRSxDQUFFLGtCQUFGLENBSGpCO0FBSUMsOEJBQXNCLEVBQUcsSUFKMUI7QUFLQyxpQkFBUyxFQUFDO0FBTFgsUUFERCxFQVFHa0QsSUFSSCxDQS9CRCxDQURELENBREQ7QUE4Q0EsS0F0REQsQ0F2RDRELENBK0c1RDs7O0FBQ0EsUUFBTWYsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2pDLGFBQ0MseUJBQUMsYUFBRDtBQUFlLFdBQUcsRUFBQztBQUFuQixTQUNDLHlCQUFDLHFCQUFEO0FBQ0MsYUFBSyxFQUFHYixVQUFVLENBQUNJLEtBRHBCO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRVEsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRU4saUJBQUssRUFBRVE7QUFBVCxXQUFGLENBQTVCO0FBQUE7QUFGWixRQURELEVBTUcsQ0FBQyxDQUFFWixVQUFVLENBQUM4QyxHQUFkLElBQ0QseUJBQUMsZ0JBQUQsUUFDQyx5QkFBQyxPQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUVRLEtBQUYsRUFBYTtBQUN2QjVDLHVCQUFhLENBQUU7QUFDZHVDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQURHO0FBRWRILGVBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZHO0FBR2RQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIRCxXQUFGLENBQWI7QUFLQSxTQVBGO0FBU0Msb0JBQVksRUFBR1gsbUJBVGhCO0FBVUMsYUFBSyxFQUFHN0MsVUFBVSxDQUFDZ0QsT0FWcEI7QUFXQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFDUix5QkFBQyxNQUFEO0FBQ0MscUJBQVMsRUFBQyw2QkFEWDtBQUVDLGlCQUFLLEVBQUcvRSxFQUFFLENBQUUsWUFBRixDQUZYO0FBR0MsZ0JBQUksRUFBQyxNQUhOO0FBSUMsbUJBQU8sRUFBRytFO0FBSlgsWUFEUTtBQUFBO0FBWFYsUUFERCxDQURELENBUEYsQ0FERDtBQW9DQSxLQXJDRCxDQWhINEQsQ0F1SjVEOzs7QUFDQSxRQUFNMUIsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUMsVUFEUDtBQUVDLGdCQUFRLEVBQUcsa0JBQUVuQixPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFaUIsbUJBQU8sRUFBRWY7QUFBWCxXQUFGLENBQTVCO0FBQUEsU0FGWjtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDMkIsT0FIcEI7QUFJQyxpQkFBUyxFQUFDO0FBSlgsUUFERCxDQURELENBREQsQ0FERDtBQWNBLEtBZkQsQ0F4SjRELENBeUs1RDs7O0FBQ0EsV0FBUyxDQUNSZCxtQkFBbUIsRUFEWCxFQUVSa0IsdUJBQXVCLEVBRmYsRUFHUnBCLHFCQUFxQixFQUhiLENBQVQ7QUFLQSxHQXJOZ0MsQ0FxTjlCOztBQXJOOEIsQ0FBakIsQ0FBakIsQzs7Ozs7Ozs7Ozs7SUM5RFFqQyxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBRVBHLGlCLEdBQ0dGLEVBQUUsQ0FBQ0csTSxDQURORCxpQjtxQkFhR0YsRUFBRSxDQUFDcUMsVTtJQVRORSxTLGtCQUFBQSxTO0lBQ0FDLFEsa0JBQUFBLFE7SUFDQXNCLFcsa0JBQUFBLFc7SUFDQXJCLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBL0IsTSxrQkFBQUEsTTtJQUNBZ0MsVyxrQkFBQUEsVztJQUNBb0MsYSxrQkFBQUEsYTtJQUNBQyxVLGtCQUFBQSxVO3NCQWNHaEYsRUFBRSxDQUFDSSxXO0lBVk42RCxnQixtQkFBQUEsZ0I7SUFDQTVELFMsbUJBQUFBLFM7SUFDQUMsUSxtQkFBQUEsUTtJQUNBeUQsZ0IsbUJBQUFBLGdCO0lBQ0F4RCxXLG1CQUFBQSxXO0lBQ0F5RCxnQixtQkFBQUEsZ0I7SUFDQXhELGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FDLE8sbUJBQUFBLE87SUFDQUUscUIsbUJBQUFBLHFCOztBQUdELElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBS0MsVUFBVSxHQUFHLGtCQUp0QjtBQUtDLE9BQUcsRUFBQztBQUxMLElBREQ7QUFTQSxDQVZEOztBQVlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUVDLFVBQUYsRUFBY0MsVUFBZCxFQUE4QjtBQUNoRCxNQUFJQyxPQUFPLEdBQUcsU0FBZDs7QUFDQSxNQUFLLENBQUMsQ0FBRUYsVUFBVSxDQUFDRyxTQUFuQixFQUErQjtBQUM5QjtBQUNBRCxXQUFPLElBQUksTUFBTUYsVUFBVSxDQUFDRyxTQUE1QjtBQUNBOztBQUNELE1BQUssQ0FBQyxDQUFFRixVQUFSLEVBQXFCO0FBQ3BCQyxXQUFPLElBQUksV0FBWDtBQUNBOztBQUNELE1BQUssQ0FBQyxDQUFFRixVQUFVLENBQUM0RCxLQUFuQixFQUEyQjtBQUMxQjFELFdBQU8sSUFBSSxjQUFjRixVQUFVLENBQUM0RCxLQUFwQztBQUNBOztBQUNELE1BQUssQ0FBQyxDQUFFNUQsVUFBVSxDQUFDSSxLQUFuQixFQUEyQjtBQUMxQkYsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0ksS0FBNUI7QUFDQTs7QUFDRCxTQUFPRixPQUFQO0FBQ0EsQ0FoQkQ7O0FBa0JBckIsaUJBQWlCLENBQUUsYUFBRixFQUFpQjtBQUVqQ3dCLE9BQUssRUFBRTNCLEVBQUUsQ0FBRSxNQUFGLENBRndCO0FBR2pDNEIsTUFBSSxFQUFFVCxVQUgyQjtBQUlqQ1UsVUFBUSxFQUFFLFdBSnVCO0FBTWpDUCxZQUFVLEVBQUU7QUFDWDZELFFBQUksRUFBRTtBQUNMckQsVUFBSSxFQUFFO0FBREQsS0FESztBQUlYc0QsV0FBTyxFQUFFO0FBQ1J0RCxVQUFJLEVBQUU7QUFERSxLQUpFO0FBT1hvRCxTQUFLLEVBQUU7QUFDTnBELFVBQUksRUFBRTtBQURBLEtBUEk7QUFVWEosU0FBSyxFQUFFO0FBQ05JLFVBQUksRUFBRTtBQURBLEtBVkk7QUFhWHVELGFBQVMsRUFBRTtBQUNWdkQsVUFBSSxFQUFFO0FBREk7QUFiQSxHQU5xQjtBQXdCakNDLE1BeEJpQyxzQkF3QjRCO0FBQUEsUUFBckRULFVBQXFELFFBQXJEQSxVQUFxRDtBQUFBLFFBQXpDRyxTQUF5QyxRQUF6Q0EsU0FBeUM7QUFBQSxRQUE5Qk8sYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsUUFBZlQsVUFBZSxRQUFmQSxVQUFlOztBQUM1RDtBQUNBLFFBQU1VLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNuQyxVQUFNVCxPQUFPLEdBQUdILFVBQVUsQ0FBRUMsVUFBRixFQUFjQyxVQUFkLENBQTFCOztBQUVBLFVBQUssQ0FBRUQsVUFBVSxDQUFDNkQsSUFBbEIsRUFBeUI7QUFDeEJuRCxxQkFBYSxDQUFFO0FBQUVtRCxjQUFJLEVBQUUsSUFBSUcsSUFBSjtBQUFSLFNBQUYsQ0FBYjtBQUNBOztBQUVELFVBQU1ILElBQUksR0FBRyxJQUFJRyxJQUFKLENBQVVoRSxVQUFVLENBQUM2RCxJQUFyQixDQUFiO0FBRUEsVUFBSUksS0FBSyxHQUFHSixJQUFJLENBQUNLLGNBQUwsQ0FBcUIsU0FBckIsRUFBZ0M7QUFBRUQsYUFBSyxFQUFFO0FBQVQsT0FBaEMsQ0FBWjs7QUFDQSxVQUFLLENBQUMsQ0FBRWpFLFVBQVUsQ0FBQytELFNBQW5CLEVBQStCO0FBQzlCRSxhQUFLLEdBQUdKLElBQUksQ0FBQ0ssY0FBTCxDQUFxQixTQUFyQixFQUFnQztBQUFFRCxlQUFLLEVBQUU7QUFBVCxTQUFoQyxJQUF1RCxHQUF2RCxHQUE2REosSUFBSSxDQUFDTSxXQUFMLEVBQXJFO0FBQ0EsT0Faa0MsQ0FjbkM7OztBQUNBLFVBQU1DLEtBQUssR0FBRyxJQUFJSixJQUFKLEVBQWQ7QUFDQSxVQUFJSyxpQkFBaUIsR0FBRyxFQUF4Qjs7QUFDQSxVQUFLLENBQUMsQ0FBRXJFLFVBQVUsQ0FBQzZELElBQWQsSUFBc0JBLElBQUksQ0FBQ1MsT0FBTCxNQUFrQkYsS0FBSyxDQUFDRSxPQUFOLEVBQTdDLEVBQStEO0FBQzlERCx5QkFBaUIsR0FBRztBQUFLLG1CQUFTLEVBQUM7QUFBZixrREFBcEI7QUFDQTs7QUFFRCxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0dBLGlCQURILEVBRUM7QUFBSyxpQkFBUyxFQUFHbkU7QUFBakIsU0FDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRytELEtBREgsQ0FERCxFQUlDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0dKLElBQUksQ0FBQ1UsT0FBTCxFQURILENBSkQsQ0FERCxDQURELEVBV0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDLHlCQUFDLFNBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFFM0QsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRW9ELG1CQUFPLEVBQUVsRDtBQUFYLFdBQUYsQ0FBNUI7QUFBQSxTQURaO0FBRUMsYUFBSyxFQUFHWixVQUFVLENBQUM4RCxPQUZwQjtBQUdDLG1CQUFXLEVBQUdwRixFQUFFLENBQUUsbUJBQUYsQ0FIakI7QUFJQyw4QkFBc0IsRUFBRztBQUoxQixRQURELENBREQsQ0FYRCxDQUZELENBREQ7QUEyQkEsS0FoREQsQ0FGNEQsQ0FvRDVEOzs7QUFDQSxRQUFNbUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2pDLGFBQ0MseUJBQUMsYUFBRDtBQUFlLFdBQUcsRUFBQztBQUFuQixTQUNDLHlCQUFDLHFCQUFEO0FBQ0MsYUFBSyxFQUFHYixVQUFVLENBQUNJLEtBRHBCO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRVEsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRU4saUJBQUssRUFBRVE7QUFBVCxXQUFGLENBQTVCO0FBQUE7QUFGWixRQURELENBREQ7QUFRQSxLQVRELENBckQ0RCxDQWdFNUQ7OztBQUNBLFFBQU1tQix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDckMsYUFDQyx5QkFBQyxpQkFBRCxRQUNDLHlCQUFDLFNBQUQsUUFDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBR3JELEVBQUUsQ0FBRSxZQUFGLENBRFg7QUFFQyxVQUFFLEVBQUM7QUFGSixTQUlDLHlCQUFDLFdBQUQ7QUFBYSxzQkFBYUEsRUFBRSxDQUFFLFlBQUY7QUFBNUIsU0FDRyxDQUFFLE1BQUYsRUFBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQTBCc0QsR0FBMUIsQ0FBK0IsVUFBRUMsS0FBRixFQUFhO0FBQzdDLFlBQU1DLGdCQUFnQixHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYyxDQUFkLEVBQWtCQyxXQUFsQixLQUFrQ0gsS0FBSyxDQUFDSSxLQUFOLENBQWEsQ0FBYixDQUEzRDtBQUNBLFlBQU1DLEdBQUcsR0FBSyxXQUFXTCxLQUFiLEdBQXVCLEVBQXZCLEdBQTRCQSxLQUF4QztBQUNBLFlBQU0yQixLQUFLLEdBQUtyQixTQUFTLEtBQUt2QyxVQUFVLENBQUM0RCxLQUEzQixHQUFxQyxFQUFyQyxHQUEwQzVELFVBQVUsQ0FBQzRELEtBQW5FO0FBQ0EsWUFBTXBCLFFBQVEsR0FBS0YsR0FBRyxLQUFLc0IsS0FBM0I7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUd0QixHQURQO0FBRUMscUJBQVcsTUFGWjtBQUdDLG1CQUFTLEVBQUdFLFFBSGI7QUFJQywwQkFBZUEsUUFKaEI7QUFLQyxpQkFBTyxFQUFHLGlCQUFFNUIsT0FBRjtBQUFBLG1CQUFlRixhQUFhLENBQUU7QUFBRWtELG1CQUFLLEVBQUV0QjtBQUFULGFBQUYsQ0FBNUI7QUFBQTtBQUxYLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWpCQyxDQURILENBSkQsQ0FERCxDQURELEVBNkJDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxVQUFEO0FBQ0MsYUFBSyxFQUFDLE1BRFA7QUFFQyxtQkFBVyxFQUFHbEMsVUFBVSxDQUFDNkQsSUFGMUI7QUFHQyxnQkFBUSxFQUFHLGtCQUFFQSxJQUFGO0FBQUEsaUJBQVluRCxhQUFhLENBQUU7QUFBRW1ELGdCQUFJLEVBQUpBO0FBQUYsV0FBRixDQUF6QjtBQUFBO0FBSFosUUFERCxDQTdCRCxFQXFDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsYUFBRDtBQUNDLGFBQUssRUFBQyxXQURQO0FBRUMsZUFBTyxFQUFHN0QsVUFBVSxDQUFDK0QsU0FGdEI7QUFHQyxnQkFBUSxFQUFHLGtCQUFFbkQsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRXFELHFCQUFTLEVBQUVuRDtBQUFiLFdBQUYsQ0FBNUI7QUFBQTtBQUhaLFFBREQsQ0FyQ0QsQ0FERCxDQUREO0FBa0RBLEtBbkRELENBakU0RCxDQXNINUQ7OztBQUNBLFdBQVMsQ0FDUkMsbUJBQW1CLEVBRFgsRUFFUmtCLHVCQUF1QixFQUZmLEVBR1JwQixxQkFBcUIsRUFIYixDQUFUO0FBS0EsR0FwSmdDLENBb0o5Qjs7QUFwSjhCLENBQWpCLENBQWpCLEM7Ozs7Ozs7Ozs7O0lDNURRakMsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUNBRyxpQixHQUFzQkYsRUFBRSxDQUFDRyxNLENBQXpCRCxpQjtxQkFhSkYsRUFBRSxDQUFDcUMsVTtJQVhOQyxRLGtCQUFBQSxRO0lBQ0EzQixNLGtCQUFBQSxNO0lBQ0E0QixTLGtCQUFBQSxTO0lBQ0FDLFEsa0JBQUFBLFE7SUFDQTlCLE8sa0JBQUFBLE87SUFDQW9ELFcsa0JBQUFBLFc7SUFDQXJCLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBQyxXLGtCQUFBQSxXO0lBQ0FrRCxnQixrQkFBQUEsZ0I7SUFDQWQsYSxrQkFBQUEsYTtzQkFhRy9FLEVBQUUsQ0FBQ0ksVztJQVZOSyxhLG1CQUFBQSxhO0lBQ0FELGlCLG1CQUFBQSxpQjtJQUNBSSxxQixtQkFBQUEscUI7SUFDQW1ELGdCLG1CQUFBQSxnQjtJQUNBeEQsVyxtQkFBQUEsVztJQUNBeUQsZ0IsbUJBQUFBLGdCO0lBQ0FDLGdCLG1CQUFBQSxnQjtJQUNBM0QsUSxtQkFBQUEsUTtJQUNBRCxTLG1CQUFBQSxTO0lBQ0ErQixRLG1CQUFBQSxRLEVBR0Q7O0FBRUEsSUFBTThCLG1CQUFtQixHQUFHLENBQUUsT0FBRixDQUE1Qjs7QUFFQSxJQUFNaEQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFLQyxVQUFVLEdBQUcsa0JBSnRCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUEsSUFBTTJFLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDdEI7QUFDQSxNQUFNQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFNO0FBQ2hCLFdBQU8sQ0FBSSxDQUFFLElBQUlDLElBQUksQ0FBQ0MsTUFBTCxFQUFOLElBQXdCLE9BQTFCLEdBQXNDLENBQXhDLEVBQTRDQyxRQUE1QyxDQUFzRCxFQUF0RCxFQUEyREMsU0FBM0QsQ0FBc0UsQ0FBdEUsQ0FBUDtBQUNBLEdBRkQ7O0FBR0EsU0FBU0osRUFBRSxLQUFLQSxFQUFFLEVBQVQsR0FBYyxHQUFkLEdBQW9CQSxFQUFFLEVBQXRCLEdBQTJCLEdBQTNCLEdBQWlDQSxFQUFFLEVBQW5DLEdBQXdDLEdBQXhDLEdBQThDQSxFQUFFLEVBQWhELEdBQXFELEdBQXJELEdBQTJEQSxFQUFFLEVBQTdELEdBQWtFQSxFQUFFLEVBQXBFLEdBQXlFQSxFQUFFLEVBQXBGO0FBQ0EsQ0FORDs7QUFRQTdGLGlCQUFpQixDQUFFLGFBQUYsRUFBaUI7QUFFakN3QixPQUFLLEVBQUUzQixFQUFFLENBQUUsTUFBRixDQUZ3QjtBQUdqQzRCLE1BQUksRUFBRVQsVUFIMkI7QUFJakNVLFVBQVEsRUFBRSxXQUp1QjtBQU1qQztBQUNBO0FBQ0E7QUFDQVAsWUFBVSxFQUFFO0FBQ1grRSxZQUFRLEVBQUU7QUFDVHZFLFVBQUksRUFBRTtBQURHLEtBREM7QUFJWHdFLFdBQU8sRUFBRTtBQUNSeEUsVUFBSSxFQUFFO0FBREUsS0FKRTtBQU9YaUIsUUFBSSxFQUFFO0FBQ0xqQixVQUFJLEVBQUU7QUFERCxLQVBLO0FBVVh3QyxXQUFPLEVBQUU7QUFDUnhDLFVBQUksRUFBRTtBQURFLEtBVkU7QUFhWHlFLGVBQVcsRUFBRTtBQUNaekUsVUFBSSxFQUFFO0FBRE0sS0FiRjtBQWdCWDBFLGNBQVUsRUFBRTtBQUNYMUUsVUFBSSxFQUFFO0FBREssS0FoQkQ7QUFtQlhnRCxNQUFFLEVBQUU7QUFDSGhELFVBQUksRUFBRTtBQURILEtBbkJPO0FBc0JYMkUsT0FBRyxFQUFFO0FBQ0ozRSxVQUFJLEVBQUU7QUFERixLQXRCTTtBQXlCWHNDLE9BQUcsRUFBRTtBQUNKdEMsVUFBSSxFQUFFO0FBREYsS0F6Qk07QUE0Qlh5QyxPQUFHLEVBQUU7QUFDSnpDLFVBQUksRUFBRTtBQURGLEtBNUJNO0FBK0JYMEMsVUFBTSxFQUFFO0FBQ1AxQyxVQUFJLEVBQUU7QUFEQyxLQS9CRztBQWtDWG1CLFdBQU8sRUFBRTtBQUNSbkIsVUFBSSxFQUFFO0FBREUsS0FsQ0U7QUFxQ1g0RSxlQUFXLEVBQUU7QUFDWjVFLFVBQUksRUFBRTtBQURNLEtBckNGO0FBd0NYc0QsV0FBTyxFQUFFO0FBQ1J0RCxVQUFJLEVBQUU7QUFERSxLQXhDRTtBQTJDWDZFLFVBQU0sRUFBRTtBQUNQN0UsVUFBSSxFQUFFO0FBREMsS0EzQ0c7QUE4Q1g4RSxhQUFTLEVBQUU7QUFDVjlFLFVBQUksRUFBRTtBQURJLEtBOUNBO0FBaURYK0UsYUFBUyxFQUFFO0FBQ1YvRSxVQUFJLEVBQUU7QUFESSxLQWpEQTtBQW9EWGdGLFVBQU0sRUFBRTtBQUNQaEYsVUFBSSxFQUFFO0FBREMsS0FwREc7QUF1RFhpRixhQUFTLEVBQUU7QUFDVmpGLFVBQUksRUFBRTtBQURJO0FBdkRBLEdBVHFCO0FBcUVqQ0MsTUFyRWlDLHNCQXFFNEI7QUFBQSxRQUFyRFQsVUFBcUQsUUFBckRBLFVBQXFEO0FBQUEsUUFBekNHLFNBQXlDLFFBQXpDQSxTQUF5QztBQUFBLFFBQTlCTyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxRQUFmVCxVQUFlLFFBQWZBLFVBQWU7O0FBQzVEO0FBQ0EsUUFBTWtELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBRUMsU0FBRixFQUFpQjtBQUN2QyxVQUFLcEQsVUFBVSxDQUFDZ0QsT0FBaEIsRUFBMEI7QUFDekIsZUFDQztBQUNDLGFBQUcsRUFBR2hELFVBQVUsQ0FBQzhDLEdBRGxCO0FBRUMsYUFBRyxFQUFHOUMsVUFBVSxDQUFDaUQsR0FGbEI7QUFHQyxtQkFBUyxFQUFDO0FBSFgsVUFERDtBQU9BOztBQUNELGFBQ0MseUJBQUMsZ0JBQUQ7QUFDQyxZQUFJLEVBQUcsY0FEUjtBQUVDLGlCQUFTLEVBQUc5QyxTQUZiO0FBR0MsY0FBTSxFQUFHO0FBQ1JFLGVBQUssRUFBRSxjQURDO0FBRVJnRCxzQkFBWSxFQUFFM0UsRUFBRSxDQUFFLHFFQUFGO0FBRlIsU0FIVjtBQU9DLGdCQUFRLEVBQUcsa0JBQUU0RSxLQUFGLEVBQWE7QUFDdkI1Qyx1QkFBYSxDQUFFO0FBQ2R1QyxlQUFHLEVBQUVLLEtBQUssQ0FBQ0wsR0FERztBQUVkSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGRztBQUdkUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFLEVBSEQ7QUFJZHlCLHVCQUFXLEVBQUUzQixLQUFLLENBQUNvQyxNQUpMO0FBS2RSLHNCQUFVLEVBQUU1QixLQUFLLENBQUNxQyxLQUxKO0FBTWRMLHFCQUFTLEVBQUUsR0FORztBQU9kQyxxQkFBUyxFQUFFO0FBUEcsV0FBRixDQUFiO0FBU0EsU0FqQkY7QUFtQkMsY0FBTSxFQUFDLFNBbkJSO0FBb0JDLG9CQUFZLEVBQUcxQztBQXBCaEIsUUFERDtBQXdCQSxLQWxDRDs7QUFvQ0EsUUFBSWpCLElBQUo7O0FBQ0EsUUFBSyxDQUFDLENBQUUzQixVQUFSLEVBQXFCO0FBQ3BCMkIsVUFBSSxHQUNIO0FBQ0MsaUJBQVMsRUFBQyxNQURYO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRUMsS0FBRjtBQUFBLGlCQUFhQSxLQUFLLENBQUNDLGNBQU4sRUFBYjtBQUFBO0FBRlosU0FJQztBQUFVLGlCQUFTLEVBQUM7QUFBcEIsU0FDQztBQUFPLGFBQUssRUFBQztBQUFiLFNBQXlCLHlCQUFDLFFBQUQ7QUFBVSxZQUFJLEVBQUM7QUFBZixRQUF6QixDQURELEVBRUMseUJBQUMsUUFBRDtBQUNDLGFBQUssRUFBRzlCLFVBQVUsQ0FBQ3lCLElBRHBCO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRWIsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRWUsZ0JBQUksRUFBRWI7QUFBUixXQUFGLENBQTVCO0FBQUEsU0FGWjtBQUdDLG1CQUFXLEVBQUMsc0JBSGI7QUFJQyxpQkFBUyxFQUFDO0FBSlgsUUFGRCxDQUpELENBREQ7QUFnQkEsS0F4RDJELENBMEQ1RDs7O0FBQ0EsUUFBTUQscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLFVBQUssQ0FBRVgsVUFBVSxDQUFDd0QsRUFBbEIsRUFBdUI7QUFDdEJ4RCxrQkFBVSxDQUFDd0QsRUFBWCxHQUFnQmlCLFFBQVEsRUFBeEI7QUFDQTs7QUFFRCxVQUFJdkUsT0FBTyxHQUFHLFNBQWQ7O0FBQ0EsVUFBSyxDQUFDLENBQUVGLFVBQVUsQ0FBQ3dCLEtBQW5CLEVBQTJCO0FBQzFCdEIsZUFBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ3dCLEtBQTVCO0FBQ0E7O0FBQ0QsVUFBSyxDQUFDLENBQUV4QixVQUFVLENBQUN3RixNQUFuQixFQUE0QjtBQUMzQnRGLGVBQU8sSUFBSSxNQUFNRixVQUFVLENBQUN3RixNQUE1QjtBQUNBOztBQUNELFVBQUssQ0FBQyxDQUFFdkYsVUFBUixFQUFxQjtBQUNwQkMsZUFBTyxJQUFJLFdBQVg7QUFDQTs7QUFDRCxVQUFJc0IsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJb0UsTUFBTSxHQUFHLFFBQWI7O0FBQ0EsVUFBSyxDQUFDLENBQUU1RixVQUFVLENBQUM4QyxHQUFuQixFQUF5QjtBQUN4QjVDLGVBQU8sSUFBSSxZQUFYO0FBQ0EwRixjQUFNLEdBQUcsT0FBVDtBQUNBcEUsYUFBSyxHQUFHO0FBQ1BxRSw0QkFBa0IsWUFBTTdGLFVBQVUsQ0FBQ3NGLFNBQVgsR0FBdUIsR0FBN0IsZUFBdUN0RixVQUFVLENBQUN1RixTQUFYLEdBQXVCLEdBQTlELE1BRFg7QUFFUE8seUJBQWUsZ0JBQVU5RixVQUFVLENBQUM4QyxHQUFyQjtBQUZSLFNBQVI7QUFJQSxPQVBELE1BT087QUFDTjVDLGVBQU8sSUFBSSxXQUFYO0FBQ0EsT0ExQmtDLENBNEJuQzs7O0FBQ0EsVUFBSUcsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsVUFBSyxDQUFDLENBQUVMLFVBQVUsQ0FBQzJCLE9BQW5CLEVBQTZCO0FBQzVCdEIsYUFBSyxHQUFHTCxVQUFVLENBQUMyQixPQUFuQjtBQUNBOztBQUNELGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUd6QixPQUFqQjtBQUEyQixhQUFLLEVBQUdHO0FBQW5DLFNBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUd1RixNQUFqQjtBQUEwQixhQUFLLEVBQUdwRTtBQUFsQyxTQUNDLHlCQUFDLFdBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFFOEIsS0FBRixFQUFhO0FBQ3ZCNUMsdUJBQWEsQ0FBRTtBQUNkdUMsZUFBRyxFQUFFSyxLQUFLLENBQUNMLEdBREc7QUFFZEgsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRkc7QUFHZFAsbUJBQU8sRUFBRU0sS0FBSyxDQUFDRTtBQUhELFdBQUYsQ0FBYjtBQUtBLFNBUEY7QUFTQyxZQUFJLEVBQUMsT0FUTjtBQVVDLGFBQUssRUFBR3hELFVBQVUsQ0FBQ2dELE9BVnBCO0FBV0MsY0FBTSxFQUFHO0FBQUEsY0FBSVMsSUFBSixTQUFJQSxJQUFKO0FBQUEsaUJBQWdCTixjQUFjLENBQUVNLElBQUYsQ0FBOUI7QUFBQTtBQVhWLFFBREQsQ0FERCxFQWdCQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0MscUNBQUkseUJBQUMsU0FBRDtBQUNILGdCQUFRLEVBQUcsa0JBQUU3QyxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFcUUsb0JBQVEsRUFBRW5FO0FBQVosV0FBRixDQUE1QjtBQUFBLFNBRFI7QUFFSCxhQUFLLEVBQUdaLFVBQVUsQ0FBQytFLFFBRmhCO0FBR0gsbUJBQVcsRUFBR3JHLEVBQUUsQ0FBRSxpQkFBRixDQUhiO0FBSUgsOEJBQXNCLEVBQUc7QUFKdEIsUUFBSixDQURELEVBT0M7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FBdUIseUJBQUMsUUFBRDtBQUN0QixnQkFBUSxFQUFHLGtCQUFFa0MsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRXNFLG1CQUFPLEVBQUVwRTtBQUFYLFdBQUYsQ0FBNUI7QUFBQSxTQURXO0FBRXRCLGFBQUssRUFBR1osVUFBVSxDQUFDZ0YsT0FGRztBQUd0QixtQkFBVyxFQUFHdEcsRUFBRSxDQUFFLG9CQUFGLENBSE07QUFJdEIsOEJBQXNCLEVBQUcsSUFKSDtBQUt0QixpQkFBUyxFQUFDO0FBTFksUUFBdkIsQ0FQRCxFQWNDO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUNDLHlCQUFDLFNBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFFa0MsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRXdDLGtCQUFNLEVBQUV0QztBQUFWLFdBQUYsQ0FBNUI7QUFBQSxTQURaO0FBRUMsYUFBSyxFQUFHWixVQUFVLENBQUNrRCxNQUZwQjtBQUdDLG1CQUFXLEVBQUd4RSxFQUFFLENBQUUsa0JBQUYsQ0FIakI7QUFJQyw4QkFBc0IsRUFBRztBQUoxQixRQURELENBZEQsRUFxQkdrRCxJQXJCSCxDQURELENBaEJELENBREQsQ0FERCxDQUREO0FBZ0RBLEtBakZELENBM0Q0RCxDQThJNUQ7OztBQUNBLFFBQU1mLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNqQyxhQUNDLHlCQUFDLGFBQUQ7QUFBZSxXQUFHLEVBQUM7QUFBbkIsU0FDQyx5QkFBQyxxQkFBRDtBQUNDLGFBQUssRUFBR2IsVUFBVSxDQUFDdUIsU0FEcEI7QUFFQyxnQkFBUSxFQUFHLGtCQUFFWCxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFYSxxQkFBUyxFQUFFWDtBQUFiLFdBQUYsQ0FBNUI7QUFBQTtBQUZaLFFBREQsRUFNRyxDQUFDLENBQUVaLFVBQVUsQ0FBQzhDLEdBQWQsSUFDRCx5QkFBQyxnQkFBRCxRQUNDLHlCQUFDLE9BQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsZ0JBQVEsRUFBRyxrQkFBRVEsS0FBRixFQUFhO0FBQ3ZCNUMsdUJBQWEsQ0FBRTtBQUNkdUMsZUFBRyxFQUFFSyxLQUFLLENBQUNMLEdBREc7QUFFZEgsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRkc7QUFHZFAsbUJBQU8sRUFBRU0sS0FBSyxDQUFDRSxFQUhEO0FBSWR5Qix1QkFBVyxFQUFFM0IsS0FBSyxDQUFDb0MsTUFKTDtBQUtkUixzQkFBVSxFQUFFNUIsS0FBSyxDQUFDcUMsS0FMSjtBQU1kTCxxQkFBUyxFQUFFLEdBTkc7QUFPZEMscUJBQVMsRUFBRTtBQVBHLFdBQUYsQ0FBYjtBQVNBLFNBWEY7QUFhQyxvQkFBWSxFQUFHMUMsbUJBYmhCO0FBY0MsYUFBSyxFQUFHN0MsVUFBVSxDQUFDZ0QsT0FkcEI7QUFlQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFDUix5QkFBQyxNQUFEO0FBQ0MscUJBQVMsRUFBQyw2QkFEWDtBQUVDLGlCQUFLLEVBQUcvRSxFQUFFLENBQUUsWUFBRixDQUZYO0FBR0MsZ0JBQUksRUFBQyxNQUhOO0FBSUMsbUJBQU8sRUFBRytFO0FBSlgsWUFEUTtBQUFBO0FBZlYsUUFERCxDQURELENBUEYsQ0FERDtBQXVDQSxLQXhDRCxDQS9JNEQsQ0F5TDVEOzs7QUFDQSxRQUFNMUIsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUdyRCxFQUFFLENBQUUsUUFBRixDQURYO0FBRUMsVUFBRSxFQUFDO0FBRkosU0FJQyx5QkFBQyxXQUFEO0FBQWEsc0JBQWFBLEVBQUUsQ0FBRSxhQUFGO0FBQTVCLFNBQ0csQ0FBRSxTQUFGLEVBQWEsV0FBYixFQUEwQixPQUExQixFQUFvQ3NELEdBQXBDLENBQXlDLFVBQUVDLEtBQUYsRUFBYTtBQUN2RCxZQUFNQyxnQkFBZ0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWMsQ0FBZCxFQUFrQkMsV0FBbEIsS0FBa0NILEtBQUssQ0FBQ0ksS0FBTixDQUFhLENBQWIsQ0FBM0Q7QUFDQSxZQUFNQyxHQUFHLEdBQUssY0FBY0wsS0FBaEIsR0FBMEIsRUFBMUIsR0FBK0JBLEtBQTNDO0FBQ0EsWUFBTXVELE1BQU0sR0FBS2pELFNBQVMsS0FBS3ZDLFVBQVUsQ0FBQ3dGLE1BQTNCLEdBQXNDLEVBQXRDLEdBQTJDeEYsVUFBVSxDQUFDd0YsTUFBckU7QUFDQSxZQUFNaEQsUUFBUSxHQUFLRixHQUFHLEtBQUtrRCxNQUEzQjtBQUVBLGVBQ0MseUJBQUMsTUFBRDtBQUNDLGFBQUcsRUFBR2xELEdBRFA7QUFFQyxxQkFBVyxNQUZaO0FBR0MsbUJBQVMsRUFBR0UsUUFIYjtBQUlDLDBCQUFlQSxRQUpoQjtBQUtDLGlCQUFPLEVBQUcsaUJBQUU1QixPQUFGO0FBQUEsbUJBQWVGLGFBQWEsQ0FBRTtBQUFFOEUsb0JBQU0sRUFBRWxEO0FBQVYsYUFBRixDQUE1QjtBQUFBO0FBTFgsV0FPR0osZ0JBUEgsQ0FERDtBQVdBLE9BakJDLENBREgsQ0FKRCxDQURELENBREQsRUE2QkMseUJBQUMsUUFBRCxRQUNDLHlCQUFDLGdCQUFEO0FBQ0MsV0FBRyxFQUFHbEMsVUFBVSxDQUFDOEMsR0FEbEI7QUFFQyxrQkFBVSxFQUFHO0FBQUU2QyxlQUFLLEVBQUUzRixVQUFVLENBQUNrRixVQUFwQjtBQUFnQ1EsZ0JBQU0sRUFBRTFGLFVBQVUsQ0FBQ2lGO0FBQW5ELFNBRmQ7QUFHQyxhQUFLLEVBQUc7QUFBRWMsV0FBQyxFQUFFL0YsVUFBVSxDQUFDc0YsU0FBaEI7QUFBMkJVLFdBQUMsRUFBRWhHLFVBQVUsQ0FBQ3VGO0FBQXpDLFNBSFQ7QUFJQyxnQkFBUSxFQUFHLGtCQUFFVSxVQUFGO0FBQUEsaUJBQWtCdkYsYUFBYSxDQUFFO0FBQUU0RSxxQkFBUyxFQUFJVyxVQUFVLENBQUNGLENBQVgsR0FBZSxDQUE5QjtBQUFtQ1IscUJBQVMsRUFBSVUsVUFBVSxDQUFDRCxDQUFYLEdBQWU7QUFBL0QsV0FBRixDQUEvQjtBQUFBO0FBSlosUUFERCxDQTdCRCxFQXNDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBQyxXQURQO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRXBGLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUV5RSxlQUFHLEVBQUV2RTtBQUFQLFdBQUYsQ0FBNUI7QUFBQSxTQUZaO0FBR0MsYUFBSyxFQUFHWixVQUFVLENBQUNtRixHQUhwQjtBQUlDLGlCQUFTLEVBQUMsZ0JBSlg7QUFLQyxZQUFJLEVBQUM7QUFMTixRQURELENBdENELEVBZ0RDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxhQUFEO0FBQ0MsYUFBSyxFQUFDLHVCQURQO0FBRUMsWUFBSSxFQUFDLHFFQUZOO0FBR0MsZUFBTyxFQUFHbkYsVUFBVSxDQUFDb0YsV0FIdEI7QUFJQyxnQkFBUSxFQUFHLGtCQUFFeEUsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRTBFLHVCQUFXLEVBQUV4RTtBQUFmLFdBQUYsQ0FBNUI7QUFBQTtBQUpaLFFBREQsQ0FoREQsRUF5REMseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUMsU0FEUDtBQUVDLGdCQUFRLEVBQUcsa0JBQUVBLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVvRCxtQkFBTyxFQUFFbEQ7QUFBWCxXQUFGLENBQTVCO0FBQUEsU0FGWjtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDOEQsT0FIcEI7QUFJQyxpQkFBUyxFQUFDLGdCQUpYO0FBS0MsWUFBSSxFQUFDO0FBTE4sUUFERCxDQXpERCxFQW1FQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBQyxRQURQO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRWxELE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUUyRSxrQkFBTSxFQUFFekU7QUFBVixXQUFGLENBQTVCO0FBQUEsU0FGWjtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDcUYsTUFIcEI7QUFJQyxpQkFBUyxFQUFDLGdCQUpYO0FBS0MsWUFBSSxFQUFDO0FBTE4sUUFERCxDQW5FRCxFQTZFQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBQyxVQURQO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRXpFLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVpQixtQkFBTyxFQUFFZjtBQUFYLFdBQUYsQ0FBNUI7QUFBQSxTQUZaO0FBR0MsYUFBSyxFQUFHWixVQUFVLENBQUMyQixPQUhwQjtBQUlDLGlCQUFTLEVBQUM7QUFKWCxRQURELENBN0VELENBREQsQ0FERDtBQTBGQSxLQTNGRCxDQTFMNEQsQ0F1UjVEOzs7QUFDQSxXQUFTLENBQ1JkLG1CQUFtQixFQURYLEVBRVJrQix1QkFBdUIsRUFGZixFQUdScEIscUJBQXFCLEVBSGIsQ0FBVDtBQUtBLEdBbFdnQyxDQWtXOUI7O0FBbFc4QixDQUFqQixDQUFqQixDOzs7Ozs7Ozs7OztJQ3BEUWpDLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFDQUcsaUIsR0FBc0JGLEVBQUUsQ0FBQ0csTSxDQUF6QkQsaUI7c0JBU0pGLEVBQUUsQ0FBQ0ksVztJQVBOQyxTLG1CQUFBQSxTO0lBQ0FDLFEsbUJBQUFBLFE7SUFDQThCLFEsbUJBQUFBLFE7SUFDQTVCLGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FDLE8sbUJBQUFBLE87SUFDQUUscUIsbUJBQUFBLHFCO3FCQVlHWixFQUFFLENBQUNxQyxVO0lBVE5DLFEsa0JBQUFBLFE7SUFDQUMsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBL0IsTSxrQkFBQUEsTTtJQUNBZ0MsVyxrQkFBQUEsVztJQUNBNEUsWSxrQkFBQUEsWTtJQUNBeEMsYSxrQkFBQUEsYTs7QUFHRCxJQUFNN0QsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFLQyxVQUFVLEdBQUcsa0JBSnRCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBRUMsVUFBRixFQUFjQyxVQUFkLEVBQThCO0FBQ2hELE1BQUlDLE9BQU8sR0FBRyxTQUFkOztBQUNBLE1BQUssQ0FBQyxDQUFFRCxVQUFSLEVBQXFCO0FBQ3BCQyxXQUFPLElBQUksV0FBWDtBQUNBOztBQUVELFNBQU9BLE9BQVA7QUFDQSxDQVBEOztBQVNBckIsaUJBQWlCLENBQUUsYUFBRixFQUFpQjtBQUVqQ3dCLE9BQUssRUFBRTNCLEVBQUUsQ0FBRSxNQUFGLENBRndCO0FBR2pDNEIsTUFBSSxFQUFFVCxVQUgyQjtBQUlqQ1UsVUFBUSxFQUFFLFdBSnVCO0FBS2pDUCxZQUFVLEVBQUU7QUFDWG1HLFFBQUksRUFBRTtBQUNMM0YsVUFBSSxFQUFFO0FBREQsS0FESztBQUlYNEYsU0FBSyxFQUFFO0FBQ041RixVQUFJLEVBQUUsUUFEQTtBQUVONkYsYUFBTyxFQUFFO0FBRkgsS0FKSTtBQVFYQyxhQUFTLEVBQUU7QUFDVjlGLFVBQUksRUFBRSxNQURJO0FBRVY2RixhQUFPLEVBQUU7QUFGQyxLQVJBO0FBWVhoRyxTQUFLLEVBQUU7QUFDTkcsVUFBSSxFQUFFO0FBREE7QUFaSSxHQUxxQjtBQXNCakNDLE1BdEJpQyxzQkFzQjRCO0FBQUEsUUFBckRULFVBQXFELFFBQXJEQSxVQUFxRDtBQUFBLFFBQXpDRyxTQUF5QyxRQUF6Q0EsU0FBeUM7QUFBQSxRQUE5Qk8sYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsUUFBZlQsVUFBZSxRQUFmQSxVQUFlOztBQUM1RDtBQUNBLFFBQU1VLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNuQztBQUNBLFVBQU1ULE9BQU8sR0FBR0gsVUFBVSxDQUFFQyxVQUFGLEVBQWNDLFVBQWQsQ0FBMUI7QUFFQSxVQUFJa0csSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFBSyxDQUFDLENBQUVuRyxVQUFVLENBQUNtRyxJQUFuQixFQUEwQjtBQUN6QkEsWUFBSSxHQUFHLE9BQU9uRyxVQUFVLENBQUNtRyxJQUF6QjtBQUNBOztBQUVELFVBQUk5RixLQUFLLEdBQUcsRUFBWjs7QUFDQSxVQUFLLENBQUMsQ0FBRUwsVUFBVSxDQUFDSyxLQUFkLElBQXVCTCxVQUFVLENBQUNzRyxTQUF2QyxFQUFtRDtBQUNsRGpHLGFBQUssR0FBRztBQUFNLG1CQUFTLEVBQUM7QUFBaEIsZ0JBQW9DTCxVQUFVLENBQUNLLEtBQS9DLE1BQVI7QUFDQTs7QUFFRCxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBUyxFQUFHSDtBQUFqQixTQUNHRyxLQURILEVBRUM7QUFBSyxpQkFBUyxFQUFDO0FBQWYsNkJBQXVEOEYsSUFBdkQsQ0FGRCxDQURELENBREQ7QUFRQSxLQXRCRCxDQUY0RCxDQTBCNUQ7OztBQUNBLFFBQU1wRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDckMsYUFDQyx5QkFBQyxpQkFBRCxRQUNDLHlCQUFDLFNBQUQsUUFFQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBR3JELEVBQUUsQ0FBRSxXQUFGLENBRFg7QUFFQyxnQkFBUSxFQUFHLGtCQUFFa0MsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRXlGLGdCQUFJLEVBQUV2RjtBQUFSLFdBQUYsQ0FBNUI7QUFBQSxTQUZaO0FBR0MsYUFBSyxFQUFHWixVQUFVLENBQUNtRyxJQUhwQjtBQUlDLGlCQUFTLEVBQUM7QUFKWCxRQURELENBRkQsRUFXQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBR3pILEVBQUUsQ0FBRSxPQUFGLENBRFg7QUFFQyxnQkFBUSxFQUFHLGtCQUFFa0MsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRUwsaUJBQUssRUFBRU87QUFBVCxXQUFGLENBQTVCO0FBQUEsU0FGWjtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDSyxLQUhwQjtBQUlDLGlCQUFTLEVBQUM7QUFKWCxRQURELENBWEQsRUFvQkMseUJBQUMsUUFBRCxRQUNDLHlCQUFDLGFBQUQ7QUFDQyxhQUFLLEVBQUczQixFQUFFLENBQUUsdUJBQUYsQ0FEWDtBQUVDLFlBQUksRUFBR0EsRUFBRSxDQUFFLG1DQUFGLENBRlY7QUFHQyxlQUFPLEVBQUdzQixVQUFVLENBQUNzRyxTQUh0QjtBQUlDLGdCQUFRLEVBQUcsa0JBQUUxRixPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFNEYscUJBQVMsRUFBRTFGO0FBQWIsV0FBRixDQUE1QjtBQUFBO0FBSlosUUFERCxDQXBCRCxFQTZCQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsWUFBRDtBQUNDLGFBQUssRUFBR2xDLEVBQUUsQ0FBRSxPQUFGLENBRFg7QUFFQyxXQUFHLEVBQUcsQ0FGUDtBQUdDLFdBQUcsRUFBRyxDQUhQO0FBSUMsZ0JBQVEsRUFBRyxrQkFBRTBILEtBQUY7QUFBQSxpQkFBYTFGLGFBQWEsQ0FBRTtBQUFFMEYsaUJBQUssRUFBTEE7QUFBRixXQUFGLENBQTFCO0FBQUEsU0FKWjtBQUtDLGFBQUssRUFBR3BHLFVBQVUsQ0FBQ29HO0FBTHBCLFFBREQsQ0E3QkQsQ0FERCxDQUREO0FBNENBLEtBN0NELENBM0I0RCxDQTBFNUQ7OztBQUNBLFdBQVMsQ0FDUnJFLHVCQUF1QixFQURmLEVBRVJwQixxQkFBcUIsRUFGYixDQUFUO0FBSUEsR0FyR2dDLENBcUc5Qjs7QUFyRzhCLENBQWpCLENBQWpCLEM7Ozs7Ozs7Ozs7O0lDNUNRakMsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVQRyxpQixHQUNHRixFQUFFLENBQUNHLE0sQ0FETkQsaUI7cUJBV0dGLEVBQUUsQ0FBQ3FDLFU7SUFQTkUsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0FzQixXLGtCQUFBQSxXO0lBQ0FyQixXLGtCQUFBQSxXO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQS9CLE0sa0JBQUFBLE07SUFDQWdDLFcsa0JBQUFBLFc7c0JBY0czQyxFQUFFLENBQUNJLFc7SUFWTjZELGdCLG1CQUFBQSxnQjtJQUNBNUQsUyxtQkFBQUEsUztJQUNBQyxRLG1CQUFBQSxRO0lBQ0F5RCxnQixtQkFBQUEsZ0I7SUFDQXhELFcsbUJBQUFBLFc7SUFDQXlELGdCLG1CQUFBQSxnQjtJQUNBeEQsaUIsbUJBQUFBLGlCO0lBQ0FDLGEsbUJBQUFBLGE7SUFDQUMsTyxtQkFBQUEsTztJQUNBRSxxQixtQkFBQUEscUI7O0FBR0QsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFLQyxVQUFVLEdBQUcsb0JBSnRCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBRUMsVUFBRixFQUFjQyxVQUFkLEVBQThCO0FBQ2hELE1BQUlDLE9BQU8sR0FBRyxXQUFkOztBQUNBLE1BQUssQ0FBQyxDQUFFRixVQUFVLENBQUNHLFNBQW5CLEVBQStCO0FBQzlCO0FBQ0FELFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNHLFNBQTVCO0FBQ0E7O0FBQ0QsTUFBSyxDQUFDLENBQUVGLFVBQVIsRUFBcUI7QUFDcEJDLFdBQU8sSUFBSSxXQUFYO0FBQ0E7O0FBQ0QsTUFBSyxDQUFDLENBQUVGLFVBQVUsQ0FBQ3dCLEtBQW5CLEVBQTJCO0FBQzFCdEIsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ3dCLEtBQTVCO0FBQ0E7O0FBQ0QsTUFBSyxDQUFDLENBQUV4QixVQUFVLENBQUNJLEtBQW5CLEVBQTJCO0FBQzFCRixXQUFPLElBQUksTUFBTUYsVUFBVSxDQUFDSSxLQUE1QjtBQUNBOztBQUNELFNBQU9GLE9BQVA7QUFDQSxDQWhCRDs7QUFrQkFyQixpQkFBaUIsQ0FBRSxlQUFGLEVBQW1CO0FBRW5Dd0IsT0FBSyxFQUFFM0IsRUFBRSxDQUFFLFFBQUYsQ0FGMEI7QUFHbkM0QixNQUFJLEVBQUVULFVBSDZCO0FBSW5DVSxVQUFRLEVBQUUsV0FKeUI7QUFNbkNQLFlBQVUsRUFBRTtBQUNYdUcsVUFBTSxFQUFFO0FBQ1AvRixVQUFJLEVBQUU7QUFEQyxLQURHO0FBSVhzRCxXQUFPLEVBQUU7QUFDUnRELFVBQUksRUFBRTtBQURFLEtBSkU7QUFPWGdCLFNBQUssRUFBRTtBQUNOaEIsVUFBSSxFQUFFO0FBREEsS0FQSTtBQVVYSixTQUFLLEVBQUU7QUFDTkksVUFBSSxFQUFFO0FBREE7QUFWSSxHQU51QjtBQXFCbkNDLE1BckJtQyxzQkFxQjBCO0FBQUEsUUFBckRULFVBQXFELFFBQXJEQSxVQUFxRDtBQUFBLFFBQXpDRyxTQUF5QyxRQUF6Q0EsU0FBeUM7QUFBQSxRQUE5Qk8sYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsUUFBZlQsVUFBZSxRQUFmQSxVQUFlOztBQUM1RDtBQUNBLFFBQU1VLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNuQyxVQUFNVCxPQUFPLEdBQUdILFVBQVUsQ0FBRUMsVUFBRixFQUFjQyxVQUFkLENBQTFCLENBRG1DLENBR25DOztBQUNBLFVBQUlJLEtBQUssR0FBRyxFQUFaOztBQUNBLFVBQUssQ0FBQyxDQUFFTCxVQUFVLENBQUMyQixPQUFuQixFQUE2QjtBQUM1QnRCLGFBQUssR0FBR0wsVUFBVSxDQUFDMkIsT0FBbkI7QUFDQTs7QUFDRCxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBUyxFQUFHekIsT0FBakI7QUFBMkIsYUFBSyxFQUFHRztBQUFuQyxTQUNDLHVDQUFNLHlCQUFDLFNBQUQ7QUFDTCxnQkFBUSxFQUFHLGtCQUFFTyxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFNkYsa0JBQU0sRUFBRTNGO0FBQVYsV0FBRixDQUE1QjtBQUFBLFNBRE47QUFFTCxhQUFLLEVBQUdaLFVBQVUsQ0FBQ3VHLE1BRmQ7QUFHTCxtQkFBVyxFQUFHN0gsRUFBRSxDQUFFLE1BQUYsQ0FIWDtBQUlMLDhCQUFzQixFQUFHO0FBSnBCLFFBQU4sQ0FERCxFQU9DLHVDQUFNLHlCQUFDLFNBQUQ7QUFDTCxnQkFBUSxFQUFHLGtCQUFFa0MsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRW9ELG1CQUFPLEVBQUVsRDtBQUFYLFdBQUYsQ0FBNUI7QUFBQSxTQUROO0FBRUwsZUFBTyxFQUFDLEdBRkg7QUFHTCxhQUFLLEVBQUdaLFVBQVUsQ0FBQzhELE9BSGQ7QUFJTCxtQkFBVyxFQUFHcEYsRUFBRSxDQUFFLHNCQUFGLENBSlg7QUFLTCw4QkFBc0IsRUFBRztBQUxwQixRQUFOLENBUEQsQ0FERCxDQUREO0FBb0JBLEtBNUJELENBRjRELENBZ0M1RDs7O0FBQ0EsUUFBTW1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNqQyxhQUNDLHlCQUFDLGFBQUQ7QUFBZSxXQUFHLEVBQUM7QUFBbkIsU0FDQyx5QkFBQyxxQkFBRDtBQUNDLGFBQUssRUFBR2IsVUFBVSxDQUFDSSxLQURwQjtBQUVDLGdCQUFRLEVBQUcsa0JBQUVRLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVOLGlCQUFLLEVBQUVRO0FBQVQsV0FBRixDQUE1QjtBQUFBO0FBRlosUUFERCxDQUREO0FBUUEsS0FURCxDQWpDNEQsQ0E0QzVEO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBTW1CLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNyQyxhQUNDLHlCQUFDLGlCQUFELFFBQ0MseUJBQUMsU0FBRCxRQUNDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsYUFBSyxFQUFDLFVBRFA7QUFFQyxnQkFBUSxFQUFHLGtCQUFFbkIsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRWlCLG1CQUFPLEVBQUVmO0FBQVgsV0FBRixDQUE1QjtBQUFBLFNBRlo7QUFHQyxhQUFLLEVBQUdaLFVBQVUsQ0FBQzJCLE9BSHBCO0FBSUMsaUJBQVMsRUFBQztBQUpYLFFBREQsQ0FERCxFQVNDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsYUFBSyxFQUFHakQsRUFBRSxDQUFFLGNBQUYsQ0FEWDtBQUVDLFVBQUUsRUFBQztBQUZKLFNBSUMseUJBQUMsV0FBRDtBQUFhLHNCQUFhQSxFQUFFLENBQUUsY0FBRjtBQUE1QixTQUNHLENBQUUsVUFBRixFQUFjLE9BQWQsRUFBdUIsTUFBdkIsRUFBK0IsU0FBL0IsRUFBMkNzRCxHQUEzQyxDQUFnRCxVQUFFQyxLQUFGLEVBQWE7QUFDOUQsWUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFjLENBQWQsRUFBa0JDLFdBQWxCLEtBQWtDSCxLQUFLLENBQUNJLEtBQU4sQ0FBYSxDQUFiLENBQTNEO0FBQ0EsWUFBTUMsR0FBRyxHQUFLLGNBQWNMLEtBQWhCLEdBQTBCLEVBQTFCLEdBQStCQSxLQUEzQztBQUNBLFlBQU1PLFFBQVEsR0FBR0YsR0FBRyxLQUFLdEMsVUFBVSxDQUFDd0IsS0FBcEM7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUdjLEdBRFA7QUFFQyxxQkFBVyxNQUZaO0FBR0MsbUJBQVMsRUFBR0UsUUFIYjtBQUlDLDBCQUFlQSxRQUpoQjtBQUtDLGlCQUFPLEVBQUcsaUJBQUU1QixPQUFGO0FBQUEsbUJBQWVGLGFBQWEsQ0FBRTtBQUFFYyxtQkFBSyxFQUFFYztBQUFULGFBQUYsQ0FBNUI7QUFBQTtBQUxYLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWhCQyxDQURILENBSkQsQ0FERCxDQVRELENBREQsQ0FERDtBQXdDQSxLQXpDRCxDQS9DNEQsQ0EwRjVEOzs7QUFDQSxXQUFTLENBQ1JyQixtQkFBbUIsRUFEWCxFQUVSa0IsdUJBQXVCLEVBRmYsRUFHUnBCLHFCQUFxQixFQUhiLENBQVQ7QUFLQSxHQXJIa0MsQ0FxSGhDOztBQXJIZ0MsQ0FBbkIsQ0FBakIsQzs7Ozs7Ozs7Ozs7SUMxRFFqQyxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBRVBHLGlCLEdBQ0dGLEVBQUUsQ0FBQ0csTSxDQURORCxpQjtxQkFhR0YsRUFBRSxDQUFDcUMsVTtJQVRORSxTLGtCQUFBQSxTO0lBQ0FDLFEsa0JBQUFBLFE7SUFDQXNCLFcsa0JBQUFBLFc7SUFDQXJCLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBL0IsTSxrQkFBQUEsTTtJQUNBZ0MsVyxrQkFBQUEsVztJQUNBb0MsYSxrQkFBQUEsYTtJQUNBQyxVLGtCQUFBQSxVO3NCQWVHaEYsRUFBRSxDQUFDSSxXO0lBWE42RCxnQixtQkFBQUEsZ0I7SUFDQTVELFMsbUJBQUFBLFM7SUFDQUMsUSxtQkFBQUEsUTtJQUNBeUQsZ0IsbUJBQUFBLGdCO0lBQ0F4RCxXLG1CQUFBQSxXO0lBQ0F5RCxnQixtQkFBQUEsZ0I7SUFDQXhELGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FDLE8sbUJBQUFBLE87SUFDQUUscUIsbUJBQUFBLHFCO0lBQ0FDLFcsbUJBQUFBLFc7QUFHRCxJQUFNQyxjQUFjLEdBQUcsQ0FDdEIsZ0JBRHNCLENBQXZCO0FBSUEsSUFBTUMsUUFBUSxHQUFHLENBQ2hCLENBQUUsZ0JBQUYsRUFBb0I7QUFBRUMsYUFBVyxFQUFFLHdCQUFmO0FBQXlDQyxTQUFPLEVBQUU7QUFBbEQsQ0FBcEIsQ0FEZ0IsQ0FBakI7O0FBSUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFLQyxVQUFVLEdBQUcsb0JBSnRCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUFqQixpQkFBaUIsQ0FBRSxlQUFGLEVBQW1CO0FBQ25Dd0IsT0FBSyxFQUFFM0IsRUFBRSxDQUFFLFFBQUYsQ0FEMEI7QUFFbkM0QixNQUFJLEVBQUVULFVBRjZCO0FBR25DVSxVQUFRLEVBQUUsV0FIeUI7QUFJbkNQLFlBQVUsRUFBRTtBQUNYd0csY0FBVSxFQUFFO0FBQ1hoRyxVQUFJLEVBQUU7QUFESyxLQUREO0FBSVhILFNBQUssRUFBRTtBQUNORyxVQUFJLEVBQUU7QUFEQSxLQUpJO0FBT1hnQixTQUFLLEVBQUU7QUFDTmhCLFVBQUksRUFBRTtBQURBLEtBUEk7QUFVWGlHLGdCQUFZLEVBQUU7QUFDYmpHLFVBQUksRUFBRTtBQURPLEtBVkg7QUFhWGtHLGVBQVcsRUFBRTtBQUNabEcsVUFBSSxFQUFFO0FBRE0sS0FiRjtBQWdCWG1HLGtCQUFjLEVBQUU7QUFDZm5HLFVBQUksRUFBRTtBQURTO0FBaEJMLEdBSnVCO0FBeUJuQ0MsTUF6Qm1DLHNCQXlCYztBQUFBLFFBQXpDVCxVQUF5QyxRQUF6Q0EsVUFBeUM7QUFBQSxRQUE3QkcsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsUUFBbEJPLGFBQWtCLFFBQWxCQSxhQUFrQjs7QUFDaEQsUUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLFVBQUlULE9BQU8sR0FBRyxXQUFkOztBQUNBLFVBQUssQ0FBQyxDQUFFRixVQUFVLENBQUNHLFNBQW5CLEVBQStCO0FBQzlCO0FBQ0FELGVBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNHLFNBQTVCO0FBQ0E7O0FBRUQsVUFBSyxDQUFDLENBQUVILFVBQVUsQ0FBQ3dCLEtBQW5CLEVBQTJCO0FBQzFCdEIsZUFBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ3dCLEtBQTVCO0FBQ0E7O0FBRUQsVUFBS2UsU0FBUyxLQUFLdkMsVUFBVSxDQUFDMEcsV0FBOUIsRUFBNEM7QUFDM0MxRyxrQkFBVSxDQUFDMEcsV0FBWCxHQUF5QixJQUF6QjtBQUNBLE9BYmtDLENBZW5DOzs7QUFDQSxVQUFNN0MsSUFBSSxHQUFHLElBQUlHLElBQUosRUFBYjtBQUNBLFVBQU00QyxHQUFHLEdBQUcsSUFBSTVDLElBQUosQ0FBVWhFLFVBQVUsQ0FBQ3dHLFVBQXJCLENBQVo7QUFDQSxVQUFJbkMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxVQUFJd0MsTUFBTSxHQUFHLGNBQWI7O0FBQ0EsVUFBSyxDQUFDLENBQUU3RyxVQUFVLENBQUN5RyxZQUFuQixFQUFrQztBQUNqQ0ksY0FBTSxHQUFHLGdCQUFUO0FBQ0E7O0FBQ0QsVUFBSyxDQUFDLENBQUU3RyxVQUFVLENBQUN3RyxVQUFkLElBQTRCSSxHQUFHLENBQUN0QyxPQUFKLE1BQWlCVCxJQUFJLENBQUNTLE9BQUwsRUFBbEQsRUFBbUU7QUFDbEVELHlCQUFpQixHQUFHO0FBQUssbUJBQVMsRUFBQztBQUFmLHVDQUFnRXdDLE1BQWhFLGdDQUFwQjtBQUNBOztBQUVEbkcsbUJBQWEsQ0FBRTtBQUFFaUcsc0JBQWMsRUFBRTtBQUFsQixPQUFGLENBQWI7QUFFQSxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0d0QyxpQkFESCxFQUVDO0FBQUssaUJBQVMsRUFBR25FO0FBQWpCLFNBQ0MscUNBQUkseUJBQUMsU0FBRDtBQUNILGdCQUFRLEVBQUcsa0JBQUVVLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVMLGlCQUFLLEVBQUVPO0FBQVQsV0FBRixDQUE1QjtBQUFBLFNBRFI7QUFFSCxhQUFLLEVBQUdaLFVBQVUsQ0FBQ0ssS0FGaEI7QUFHSCxtQkFBVyxFQUFHM0IsRUFBRSxDQUFFLG1CQUFGLENBSGI7QUFJSCw4QkFBc0IsRUFBRztBQUp0QixRQUFKLENBREQsRUFPQyx5QkFBQyxXQUFEO0FBQ0MscUJBQWEsRUFBR2UsY0FEakI7QUFFQyxnQkFBUSxFQUFHQztBQUZaLFFBUEQsQ0FGRCxDQUREO0FBaUJBLEtBOUNEOztBQWdEQSxRQUFNcUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUdyRCxFQUFFLENBQUUsY0FBRixDQURYO0FBRUMsVUFBRSxFQUFDO0FBRkosU0FJQyx5QkFBQyxXQUFEO0FBQWEsc0JBQWFBLEVBQUUsQ0FBRSxjQUFGO0FBQTVCLFNBQ0csQ0FBRSxTQUFGLEVBQWEsUUFBYixFQUF1QixTQUF2QixFQUFtQ3NELEdBQW5DLENBQXdDLFVBQUVDLEtBQUYsRUFBYTtBQUN0RCxZQUFNQyxnQkFBZ0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWMsQ0FBZCxFQUFrQkMsV0FBbEIsS0FBa0NILEtBQUssQ0FBQ0ksS0FBTixDQUFhLENBQWIsQ0FBM0Q7QUFDQSxZQUFNQyxHQUFHLEdBQUssY0FBY0wsS0FBaEIsR0FBMEIsRUFBMUIsR0FBK0JBLEtBQTNDO0FBQ0EsWUFBTVQsS0FBSyxHQUFLZSxTQUFTLEtBQUt2QyxVQUFVLENBQUN3QixLQUEzQixHQUFxQyxFQUFyQyxHQUEwQ3hCLFVBQVUsQ0FBQ3dCLEtBQW5FO0FBQ0EsWUFBTWdCLFFBQVEsR0FBS0YsR0FBRyxLQUFLZCxLQUEzQjtBQUVBLGVBQ0MseUJBQUMsTUFBRDtBQUNDLGFBQUcsRUFBR2MsR0FEUDtBQUVDLHFCQUFXLE1BRlo7QUFHQyxtQkFBUyxFQUFHRSxRQUhiO0FBSUMsMEJBQWVBLFFBSmhCO0FBS0MsaUJBQU8sRUFBRyxpQkFBRTVCLE9BQUY7QUFBQSxtQkFBZUYsYUFBYSxDQUFFO0FBQUVjLG1CQUFLLEVBQUVjO0FBQVQsYUFBRixDQUE1QjtBQUFBO0FBTFgsV0FPR0osZ0JBUEgsQ0FERDtBQVdBLE9BakJDLENBREgsQ0FKRCxDQURELENBREQsRUE2QkMseUJBQUMsUUFBRCxRQUNDLHlCQUFDLGFBQUQ7QUFDQyxhQUFLLEVBQUMsdUNBRFA7QUFFQyxlQUFPLEVBQUdsQyxVQUFVLENBQUMwRyxXQUZ0QjtBQUdDLGdCQUFRLEVBQUcsa0JBQUU5RixPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFZ0csdUJBQVcsRUFBRTlGO0FBQWYsV0FBRixDQUE1QjtBQUFBO0FBSFosUUFERCxDQTdCRCxFQXFDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsVUFBRDtBQUNDLGFBQUssRUFBQyxpQkFEUDtBQUVDLG1CQUFXLEVBQUdaLFVBQVUsQ0FBQ3dHLFVBRjFCO0FBR0MsZ0JBQVEsRUFBRyxrQkFBRTNDLElBQUY7QUFBQSxpQkFBWW5ELGFBQWEsQ0FBRTtBQUFFOEYsc0JBQVUsRUFBRTNDO0FBQWQsV0FBRixDQUF6QjtBQUFBO0FBSFosUUFERCxDQXJDRCxFQTZDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsYUFBRDtBQUNDLGFBQUssRUFBQyxvQkFEUDtBQUVDLGVBQU8sRUFBRzdELFVBQVUsQ0FBQ3lHLFlBRnRCO0FBR0MsZ0JBQVEsRUFBRyxrQkFBRTdGLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUUrRix3QkFBWSxFQUFFN0Y7QUFBaEIsV0FBRixDQUE1QjtBQUFBO0FBSFosUUFERCxDQTdDRCxDQURELENBREQ7QUEwREEsS0EzREQsQ0FqRGdELENBOEdoRDs7O0FBQ0EsV0FBUyxDQUNSRCxxQkFBcUIsRUFEYixFQUVSb0IsdUJBQXVCLEVBRmYsQ0FBVDtBQUlBLEdBNUlrQztBQTRJaEM7QUFFSGpCLE1BOUltQyx1QkE4SVo7QUFBQSxRQUFmZCxVQUFlLFNBQWZBLFVBQWU7QUFDdEIsV0FDQyx5QkFBQyxXQUFELENBQWEsT0FBYixPQUREO0FBR0E7QUFsSmtDLENBQW5CLENBQWpCLEM7Ozs7Ozs7Ozs7O0lDbkRRdEIsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVQRyxpQixHQUNHRixFQUFFLENBQUNHLE0sQ0FETkQsaUI7cUJBYUdGLEVBQUUsQ0FBQ3FDLFU7SUFUTkUsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0E5QixPLGtCQUFBQSxPO0lBQ0FDLE0sa0JBQUFBLE07SUFDQW1ELFcsa0JBQUFBLFc7SUFDQXJCLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBQyxXLGtCQUFBQSxXO0lBQ0FvQyxhLGtCQUFBQSxhO3NCQWNHL0UsRUFBRSxDQUFDSSxXO0lBVk42RCxnQixtQkFBQUEsZ0I7SUFDQTVELFMsbUJBQUFBLFM7SUFDQUMsUSxtQkFBQUEsUTtJQUNBeUQsZ0IsbUJBQUFBLGdCO0lBQ0F4RCxXLG1CQUFBQSxXO0lBQ0F5RCxnQixtQkFBQUEsZ0I7SUFDQXhELGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FHLHFCLG1CQUFBQSxxQjtJQUNBQyxXLG1CQUFBQSxXO0FBR0QsSUFBTUMsY0FBYyxHQUFHLENBQ3RCLGNBRHNCLEVBRXRCLGdCQUZzQixFQUd0QixXQUhzQixFQUl0QixlQUpzQixDQUF2QjtBQU1BLElBQU1DLFFBQVEsR0FBRyxDQUNoQixDQUFFLGNBQUYsRUFBa0I7QUFBRW9ILE9BQUssRUFBRSxDQUFUO0FBQVluSCxhQUFXLEVBQUU7QUFBekIsQ0FBbEIsQ0FEZ0IsRUFFaEIsQ0FBRSxnQkFBRixFQUFvQjtBQUFFQSxhQUFXLEVBQUUsRUFBZjtBQUFtQkMsU0FBTyxFQUFFO0FBQTVCLENBQXBCLENBRmdCLEVBR2hCLENBQUUsZUFBRixFQUFtQixFQUFuQixDQUhnQixDQUFqQjtBQUtBLElBQU1pRCxtQkFBbUIsR0FBRyxDQUFFLE9BQUYsQ0FBNUI7O0FBRUEsSUFBTWhELFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBS0MsVUFBVSxHQUFHLG1CQUp0QjtBQUtDLE9BQUcsRUFBQztBQUxMLElBREQ7QUFTQSxDQVZEOztBQVlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUVDLFVBQUYsRUFBa0I7QUFDcEMsTUFBSUUsT0FBTyxHQUFLLFlBQVlGLFVBQVUsQ0FBQ3dGLE1BQXpCLEdBQW9DLGdCQUFwQyxHQUF1RCxVQUFyRTs7QUFDQSxNQUFLLENBQUMsQ0FBRXhGLFVBQVUsQ0FBQ0csU0FBbkIsRUFBK0I7QUFDOUI7QUFDQUQsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0csU0FBNUI7QUFDQTs7QUFDRCxNQUFLLENBQUMsQ0FBRUgsVUFBVSxDQUFDK0csT0FBbkIsRUFBNkI7QUFDNUI3RyxXQUFPLElBQUksVUFBWDtBQUNBOztBQUNELFNBQU9BLE9BQVA7QUFDQSxDQVZEOztBQVlBckIsaUJBQWlCLENBQUUsY0FBRixFQUFrQjtBQUVsQ3dCLE9BQUssRUFBRTNCLEVBQUUsQ0FBRSxPQUFGLENBRnlCO0FBR2xDNEIsTUFBSSxFQUFFVCxVQUg0QjtBQUlsQ1UsVUFBUSxFQUFFLFdBSndCO0FBTWxDUCxZQUFVLEVBQUU7QUFDWEssU0FBSyxFQUFFO0FBQ05HLFVBQUksRUFBRTtBQURBLEtBREk7QUFJWHVHLFdBQU8sRUFBRTtBQUNSdkcsVUFBSSxFQUFFO0FBREUsS0FKRTtBQU9Yc0MsT0FBRyxFQUFFO0FBQ0p0QyxVQUFJLEVBQUU7QUFERixLQVBNO0FBVVh5QyxPQUFHLEVBQUU7QUFDSnpDLFVBQUksRUFBRTtBQURGLEtBVk07QUFhWGdGLFVBQU0sRUFBRTtBQUNQaEYsVUFBSSxFQUFFO0FBREMsS0FiRztBQWdCWHdDLFdBQU8sRUFBRTtBQUNSeEMsVUFBSSxFQUFFO0FBREU7QUFoQkUsR0FOc0I7QUEyQmxDQyxNQTNCa0Msc0JBMkJlO0FBQUEsUUFBekNULFVBQXlDLFFBQXpDQSxVQUF5QztBQUFBLFFBQTdCRyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxRQUFsQk8sYUFBa0IsUUFBbEJBLGFBQWtCOztBQUNoRDtBQUNBLFFBQU15QyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUVDLFNBQUYsRUFBaUI7QUFDdkMsVUFBS3BELFVBQVUsQ0FBQ2dELE9BQWhCLEVBQTBCO0FBQ3pCLGVBQ0M7QUFDQyxhQUFHLEVBQUdoRCxVQUFVLENBQUM4QyxHQURsQjtBQUVDLGFBQUcsRUFBRzlDLFVBQVUsQ0FBQ2lELEdBRmxCO0FBR0MsbUJBQVMsRUFBQztBQUhYLFVBREQ7QUFPQTs7QUFDRCxhQUNDLHlCQUFDLGdCQUFEO0FBQ0MsWUFBSSxFQUFHLGNBRFI7QUFFQyxpQkFBUyxFQUFHOUMsU0FGYjtBQUdDLGNBQU0sRUFBRztBQUNSRSxlQUFLLEVBQUUsY0FEQztBQUVSZ0Qsc0JBQVksRUFBRTNFLEVBQUUsQ0FBRSxxRUFBRjtBQUZSLFNBSFY7QUFPQyxnQkFBUSxFQUFHLGtCQUFFNEUsS0FBRixFQUFhO0FBQ3ZCNUMsdUJBQWEsQ0FBRTtBQUNkdUMsZUFBRyxFQUFFSyxLQUFLLENBQUNMLEdBREc7QUFFZEgsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRkc7QUFHZFAsbUJBQU8sRUFBRU0sS0FBSyxDQUFDRTtBQUhELFdBQUYsQ0FBYjtBQUtBLFNBYkY7QUFlQyxjQUFNLEVBQUMsU0FmUjtBQWdCQyxvQkFBWSxFQUFHWDtBQWhCaEIsUUFERDtBQW9CQSxLQTlCRDs7QUFnQ0EsUUFBTTNDLE9BQU8sR0FBR0gsVUFBVSxDQUFFQyxVQUFGLENBQTFCOztBQUVBLFFBQU1XLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNuQyxVQUFLLFlBQVlYLFVBQVUsQ0FBQ3dGLE1BQTVCLEVBQXFDO0FBQ3BDLGVBQ0M7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDQztBQUFLLG1CQUFTLEVBQUd0RjtBQUFqQixXQUNDO0FBQUssbUJBQVMsRUFBQztBQUFmLFVBREQsRUFFQztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNDO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0MseUJBQUMsV0FBRDtBQUNDLGtCQUFRLEVBQUcsa0JBQUVvRCxLQUFGLEVBQWE7QUFDdkI1Qyx5QkFBYSxDQUFFO0FBQ2R1QyxpQkFBRyxFQUFFSyxLQUFLLENBQUNMLEdBREc7QUFFZEgsaUJBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZHO0FBR2RQLHFCQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIRCxhQUFGLENBQWI7QUFLQSxXQVBGO0FBU0MsY0FBSSxFQUFDLE9BVE47QUFVQyxlQUFLLEVBQUd4RCxVQUFVLENBQUNnRCxPQVZwQjtBQVdDLGdCQUFNLEVBQUc7QUFBQSxnQkFBSVMsSUFBSixTQUFJQSxJQUFKO0FBQUEsbUJBQWdCTixjQUFjLENBQUVNLElBQUYsQ0FBOUI7QUFBQTtBQVhWLFVBREQsQ0FERCxFQWdCQztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNDLHlCQUFDLFdBQUQ7QUFDQyx1QkFBYSxFQUFHaEUsY0FEakI7QUFFQyxrQkFBUSxFQUFHQztBQUZaLFVBREQsQ0FoQkQsQ0FGRCxDQURELENBREQ7QUE4QkE7O0FBQ0QsYUFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDO0FBQUssaUJBQVMsRUFBR1E7QUFBakIsU0FDQztBQUFRLGlCQUFTLEVBQUM7QUFBbEIsU0FDQyx5QkFBQyxXQUFEO0FBQ0MsZ0JBQVEsRUFBRyxrQkFBRW9ELEtBQUYsRUFBYTtBQUN2QjVDLHVCQUFhLENBQUU7QUFDZHVDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQURHO0FBRWRILGVBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZHO0FBR2RQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIRCxXQUFGLENBQWI7QUFLQSxTQVBGO0FBU0MsWUFBSSxFQUFDLE9BVE47QUFVQyxhQUFLLEVBQUd4RCxVQUFVLENBQUNnRCxPQVZwQjtBQVdDLGNBQU0sRUFBRztBQUFBLGNBQUlTLElBQUosU0FBSUEsSUFBSjtBQUFBLGlCQUFnQk4sY0FBYyxDQUFFTSxJQUFGLENBQTlCO0FBQUE7QUFYVixRQURELENBREQsRUFnQkMsMENBQ0MseUJBQUMsV0FBRDtBQUNDLHFCQUFhLEVBQUdoRSxjQURqQjtBQUVDLGdCQUFRLEVBQUdDO0FBRlosUUFERCxDQWhCRCxDQURELENBREQ7QUEyQkEsS0E1REQ7O0FBOERBLFFBQU1tQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDakMsYUFDQyx5QkFBQyxhQUFEO0FBQWUsV0FBRyxFQUFDO0FBQW5CLFNBQ0csQ0FBQyxDQUFFYixVQUFVLENBQUM4QyxHQUFkLElBQ0QseUJBQUMsZ0JBQUQsUUFDQyx5QkFBQyxPQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUVRLEtBQUYsRUFBYTtBQUN2QjVDLHVCQUFhLENBQUU7QUFDZHVDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQURHO0FBRWRILGVBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZHO0FBR2RQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIRCxXQUFGLENBQWI7QUFLQSxTQVBGO0FBU0Msb0JBQVksRUFBR1gsbUJBVGhCO0FBVUMsYUFBSyxFQUFHN0MsVUFBVSxDQUFDZ0QsT0FWcEI7QUFXQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFDUix5QkFBQyxNQUFEO0FBQ0MscUJBQVMsRUFBQyw2QkFEWDtBQUVDLGlCQUFLLEVBQUcvRSxFQUFFLENBQUUsWUFBRixDQUZYO0FBR0MsZ0JBQUksRUFBQyxNQUhOO0FBSUMsbUJBQU8sRUFBRytFO0FBSlgsWUFEUTtBQUFBO0FBWFYsUUFERCxDQURELENBRkYsQ0FERDtBQStCQSxLQWhDRCxDQWxHZ0QsQ0FvSWhEOzs7QUFDQSxRQUFNMUIsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBRUMseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUdyRCxFQUFFLENBQUUsUUFBRixDQURYO0FBRUMsWUFBSSxFQUFHQSxFQUFFLENBQUUsNEZBQUYsQ0FGVjtBQUdDLFVBQUUsRUFBQztBQUhKLFNBS0MseUJBQUMsV0FBRDtBQUFhLHNCQUFhQSxFQUFFLENBQUUsY0FBRjtBQUE1QixTQUNHLENBQUUsU0FBRixFQUFhLE9BQWIsRUFBdUJzRCxHQUF2QixDQUE0QixVQUFFQyxLQUFGLEVBQWE7QUFDMUMsWUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFjLENBQWQsRUFBa0JDLFdBQWxCLEtBQWtDSCxLQUFLLENBQUNJLEtBQU4sQ0FBYSxDQUFiLENBQTNEO0FBQ0EsWUFBTUMsR0FBRyxHQUFLLGNBQWNMLEtBQWhCLEdBQTBCLEVBQTFCLEdBQStCQSxLQUEzQztBQUNBLFlBQU11RCxNQUFNLEdBQUtqRCxTQUFTLEtBQUt2QyxVQUFVLENBQUN3RixNQUEzQixHQUFzQyxFQUF0QyxHQUEyQ3hGLFVBQVUsQ0FBQ3dGLE1BQXJFO0FBQ0EsWUFBTWhELFFBQVEsR0FBS0YsR0FBRyxLQUFLa0QsTUFBM0I7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUdsRCxHQURQO0FBRUMscUJBQVcsTUFGWjtBQUdDLG1CQUFTLEVBQUdFLFFBSGI7QUFJQywwQkFBZUEsUUFKaEI7QUFLQyxpQkFBTyxFQUFHLGlCQUFFNUIsT0FBRjtBQUFBLG1CQUFlRixhQUFhLENBQUU7QUFBRThFLG9CQUFNLEVBQUVsRDtBQUFWLGFBQUYsQ0FBNUI7QUFBQTtBQUxYLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWpCQyxDQURILENBTEQsQ0FERCxDQUZELEVBK0JDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxhQUFEO0FBQ0MsYUFBSyxFQUFDLG1CQURQO0FBRUMsZUFBTyxFQUFHbEMsVUFBVSxDQUFDK0csT0FGdEI7QUFHQyxnQkFBUSxFQUFHLGtCQUFFbkcsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRXFHLG1CQUFPLEVBQUVuRztBQUFYLFdBQUYsQ0FBNUI7QUFBQTtBQUhaLFFBREQsQ0EvQkQsQ0FERCxDQUREO0FBNENBLEtBN0NELENBcklnRCxDQW9MaEQ7OztBQUNBLFdBQVMsQ0FDUkMsbUJBQW1CLEVBRFgsRUFFUmtCLHVCQUF1QixFQUZmLEVBR1JwQixxQkFBcUIsRUFIYixDQUFUO0FBS0EsR0FyTmlDO0FBcU4vQjtBQUVIRyxNQXZOa0MsdUJBdU5YO0FBQUEsUUFBZmQsVUFBZSxTQUFmQSxVQUFlO0FBQ3RCLFdBQ0MseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERDtBQUdBO0FBM05pQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztJQ25FUXRCLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFDQUcsaUIsR0FBc0JGLEVBQUUsQ0FBQ0csTSxDQUF6QkQsaUI7cUJBYUpGLEVBQUUsQ0FBQ3FDLFU7SUFYTkMsUSxrQkFBQUEsUTtJQUNBM0IsTSxrQkFBQUEsTTtJQUNBNEIsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0E5QixPLGtCQUFBQSxPO0lBQ0FvRCxXLGtCQUFBQSxXO0lBQ0FyQixXLGtCQUFBQSxXO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBa0QsZ0Isa0JBQUFBLGdCO0lBQ0FkLGEsa0JBQUFBLGE7c0JBYUcvRSxFQUFFLENBQUNJLFc7SUFWTkssYSxtQkFBQUEsYTtJQUNBRCxpQixtQkFBQUEsaUI7SUFDQUkscUIsbUJBQUFBLHFCO0lBQ0FtRCxnQixtQkFBQUEsZ0I7SUFDQXhELFcsbUJBQUFBLFc7SUFDQXlELGdCLG1CQUFBQSxnQjtJQUNBQyxnQixtQkFBQUEsZ0I7SUFDQTNELFEsbUJBQUFBLFE7SUFDQUQsUyxtQkFBQUEsUztJQUNBK0IsUSxtQkFBQUEsUSxFQUdEOztBQUVBLElBQU04QixtQkFBbUIsR0FBRyxDQUFFLE9BQUYsQ0FBNUI7O0FBRUEsSUFBTWhELFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBS0MsVUFBVSxHQUFHLG1CQUp0QjtBQUtDLE9BQUcsRUFBQztBQUxMLElBREQ7QUFTQSxDQVZEOztBQVlBakIsaUJBQWlCLENBQUUsY0FBRixFQUFrQjtBQUVsQ3dCLE9BQUssRUFBRTNCLEVBQUUsQ0FBRSxPQUFGLENBRnlCO0FBR2xDNEIsTUFBSSxFQUFFVCxVQUg0QjtBQUlsQ1UsVUFBUSxFQUFFLFdBSndCO0FBTWxDO0FBQ0E7QUFDQVAsWUFBVSxFQUFFO0FBQ1hLLFNBQUssRUFBRTtBQUNORyxVQUFJLEVBQUU7QUFEQSxLQURJO0FBSVh1QyxRQUFJLEVBQUU7QUFDTHZDLFVBQUksRUFBRTtBQURELEtBSks7QUFPWGlCLFFBQUksRUFBRTtBQUNMakIsVUFBSSxFQUFFO0FBREQsS0FQSztBQVVYd0csWUFBUSxFQUFFO0FBQ1R4RyxVQUFJLEVBQUU7QUFERyxLQVZDO0FBYVhzQyxPQUFHLEVBQUU7QUFDSnRDLFVBQUksRUFBRTtBQURGLEtBYk07QUFnQlh3QyxXQUFPLEVBQUU7QUFDUnhDLFVBQUksRUFBRTtBQURFLEtBaEJFO0FBbUJYeUMsT0FBRyxFQUFFO0FBQ0p6QyxVQUFJLEVBQUU7QUFERixLQW5CTTtBQXNCWGdCLFNBQUssRUFBRTtBQUNOaEIsVUFBSSxFQUFFO0FBREEsS0F0Qkk7QUF5QlhnRixVQUFNLEVBQUU7QUFDUGhGLFVBQUksRUFBRTtBQURDO0FBekJHLEdBUnNCO0FBc0NsQ0MsTUF0Q2tDLHNCQXNDMkI7QUFBQSxRQUFyRFQsVUFBcUQsUUFBckRBLFVBQXFEO0FBQUEsUUFBekNHLFNBQXlDLFFBQXpDQSxTQUF5QztBQUFBLFFBQTlCTyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxRQUFmVCxVQUFlLFFBQWZBLFVBQWU7O0FBQzVEO0FBQ0EsUUFBTWtELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBRUMsU0FBRixFQUFpQjtBQUN2QyxVQUFLcEQsVUFBVSxDQUFDZ0QsT0FBaEIsRUFBMEI7QUFDekIsZUFDQztBQUNDLGFBQUcsRUFBR2hELFVBQVUsQ0FBQzhDLEdBRGxCO0FBRUMsYUFBRyxFQUFHOUMsVUFBVSxDQUFDaUQsR0FGbEI7QUFHQyxtQkFBUyxFQUFDO0FBSFgsVUFERDtBQU9BOztBQUNELGFBQ0MseUJBQUMsZ0JBQUQ7QUFDQyxZQUFJLEVBQUcsY0FEUjtBQUVDLGlCQUFTLEVBQUc5QyxTQUZiO0FBR0MsY0FBTSxFQUFHO0FBQ1JFLGVBQUssRUFBRSxjQURDO0FBRVJnRCxzQkFBWSxFQUFFM0UsRUFBRSxDQUFFLHFFQUFGO0FBRlIsU0FIVjtBQU9DLGdCQUFRLEVBQUcsa0JBQUU0RSxLQUFGLEVBQWE7QUFDdkI1Qyx1QkFBYSxDQUFFO0FBQ2R1QyxlQUFHLEVBQUVLLEtBQUssQ0FBQ0wsR0FERztBQUVkSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGRztBQUdkUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSEQsV0FBRixDQUFiO0FBS0EsU0FiRjtBQWVDLGNBQU0sRUFBQyxTQWZSO0FBZ0JDLG9CQUFZLEVBQUdYO0FBaEJoQixRQUREO0FBb0JBLEtBOUJEOztBQWdDQSxRQUFJakIsSUFBSjs7QUFDQSxRQUFLLENBQUMsQ0FBRTNCLFVBQVIsRUFBcUI7QUFDcEIyQixVQUFJLEdBQ0g7QUFDQyxpQkFBUyxFQUFDLE1BRFg7QUFFQyxnQkFBUSxFQUFHLGtCQUFFQyxLQUFGO0FBQUEsaUJBQWFBLEtBQUssQ0FBQ0MsY0FBTixFQUFiO0FBQUE7QUFGWixTQUlDO0FBQVUsaUJBQVMsRUFBQztBQUFwQixTQUNDO0FBQU8sYUFBSyxFQUFDO0FBQWIsU0FBeUIseUJBQUMsUUFBRDtBQUFVLFlBQUksRUFBQztBQUFmLFFBQXpCLENBREQsRUFFQyx5QkFBQyxRQUFEO0FBQ0MsYUFBSyxFQUFHOUIsVUFBVSxDQUFDeUIsSUFEcEI7QUFFQyxnQkFBUSxFQUFHLGtCQUFFYixPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFZSxnQkFBSSxFQUFFYjtBQUFSLFdBQUYsQ0FBNUI7QUFBQSxTQUZaO0FBR0MsbUJBQVcsRUFBQyxzQkFIYjtBQUlDLGlCQUFTLEVBQUM7QUFKWCxRQUZELENBSkQsQ0FERDtBQWdCQSxLQXBEMkQsQ0FzRDVEOzs7QUFDQSxRQUFNRCxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbkMsVUFBSVQsT0FBTyxHQUFHLFVBQWQ7O0FBQ0EsVUFBSyxDQUFDLENBQUVELFVBQVIsRUFBcUI7QUFDcEJDLGVBQU8sSUFBSSxXQUFYO0FBQ0E7O0FBRUQsVUFBSyxZQUFZRixVQUFVLENBQUN3RixNQUE1QixFQUFxQztBQUNwQ3RGLGVBQU8sSUFBSSxRQUFYO0FBRUEsZUFDQztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNDO0FBQUssbUJBQVMsRUFBR0E7QUFBakIsV0FDQztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNDLHFDQUFJLHlCQUFDLFNBQUQ7QUFDSCxrQkFBUSxFQUFHLGtCQUFFVSxPQUFGO0FBQUEsbUJBQWVGLGFBQWEsQ0FBRTtBQUFFTCxtQkFBSyxFQUFFTztBQUFULGFBQUYsQ0FBNUI7QUFBQSxXQURSO0FBRUgsZUFBSyxFQUFHWixVQUFVLENBQUNLLEtBRmhCO0FBR0gscUJBQVcsRUFBRzNCLEVBQUUsQ0FBRSxrQkFBRixDQUhiO0FBSUgsZ0NBQXNCLEVBQUc7QUFKdEIsVUFBSixDQURELEVBT0M7QUFBTSxtQkFBUyxFQUFDO0FBQWhCLFdBQTJDLHlCQUFDLFNBQUQ7QUFDMUMsa0JBQVEsRUFBRyxrQkFBRWtDLE9BQUY7QUFBQSxtQkFBZUYsYUFBYSxDQUFFO0FBQUVzRyxzQkFBUSxFQUFFcEc7QUFBWixhQUFGLENBQTVCO0FBQUEsV0FEK0I7QUFFMUMsZUFBSyxFQUFHWixVQUFVLENBQUNnSCxRQUZ1QjtBQUcxQyxxQkFBVyxFQUFHdEksRUFBRSxDQUFFLGdCQUFGLENBSDBCO0FBSTFDLGdDQUFzQixFQUFHO0FBSmlCLFVBQTNDLEVBS0lrRCxJQUxKLENBUEQsQ0FERCxDQURELENBREQ7QUFvQkE7O0FBRUQsVUFBSUosS0FBSyxHQUFHLFlBQVo7O0FBQ0EsVUFBSyxDQUFDLENBQUV4QixVQUFVLENBQUN3QixLQUFkLElBQXVCLGNBQWN4QixVQUFVLENBQUN3QixLQUFyRCxFQUE2RDtBQUM1REEsYUFBSyxHQUFHLFdBQVd4QixVQUFVLENBQUN3QixLQUE5QjtBQUNBOztBQUNEQSxXQUFLLEdBQUcsdUJBQXVCQSxLQUEvQjtBQUVBLGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUd0QjtBQUFqQixTQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBUyxFQUFHc0I7QUFBakIsUUFERCxDQURELEVBSUM7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDLHFDQUFJLHlCQUFDLFNBQUQ7QUFDSCxnQkFBUSxFQUFHLGtCQUFFWixPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFTCxpQkFBSyxFQUFFTztBQUFULFdBQUYsQ0FBNUI7QUFBQSxTQURSO0FBRUgsYUFBSyxFQUFHWixVQUFVLENBQUNLLEtBRmhCO0FBR0gsbUJBQVcsRUFBRzNCLEVBQUUsQ0FBRSxrQkFBRixDQUhiO0FBSUgsOEJBQXNCLEVBQUc7QUFKdEIsUUFBSixDQURELEVBT0Msb0NBQUcseUJBQUMsU0FBRDtBQUNGLGdCQUFRLEVBQUcsa0JBQUVrQyxPQUFGO0FBQUEsaUJBQWVGLGFBQWEsQ0FBRTtBQUFFcUMsZ0JBQUksRUFBRW5DO0FBQVIsV0FBRixDQUE1QjtBQUFBLFNBRFQ7QUFFRixhQUFLLEVBQUdaLFVBQVUsQ0FBQytDLElBRmpCO0FBR0YsbUJBQVcsRUFBR3JFLEVBQUUsQ0FBRSxpQkFBRixDQUhkO0FBSUYsOEJBQXNCLEVBQUc7QUFKdkIsUUFBSCxDQVBELEVBYUMsb0NBQUc7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQXFDLHlCQUFDLFNBQUQ7QUFDdkMsZ0JBQVEsRUFBRyxrQkFBRWtDLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVzRyxvQkFBUSxFQUFFcEc7QUFBWixXQUFGLENBQTVCO0FBQUEsU0FENEI7QUFFdkMsYUFBSyxFQUFHWixVQUFVLENBQUNnSCxRQUZvQjtBQUd2QyxtQkFBVyxFQUFHdEksRUFBRSxDQUFFLGdCQUFGLENBSHVCO0FBSXZDLDhCQUFzQixFQUFHO0FBSmMsUUFBckMsQ0FBSCxDQWJELENBREQsRUFxQkM7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QjtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FDN0I7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQStDa0QsSUFBL0MsQ0FENkIsRUFFN0IseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUUwQixLQUFGLEVBQWE7QUFDdkI1Qyx1QkFBYSxDQUFFO0FBQ2R1QyxlQUFHLEVBQUVLLEtBQUssQ0FBQ0wsR0FERztBQUVkSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGRztBQUdkUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSEQsV0FBRixDQUFiO0FBS0EsU0FQRjtBQVNDLFlBQUksRUFBQyxPQVROO0FBVUMsYUFBSyxFQUFHeEQsVUFBVSxDQUFDZ0QsT0FWcEI7QUFXQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFBZ0JOLGNBQWMsQ0FBRU0sSUFBRixDQUE5QjtBQUFBO0FBWFYsUUFGNkIsQ0FBOUIsQ0FERCxDQXJCRCxDQUpELENBREQsQ0FERDtBQWlEQSxLQXRGRCxDQXZENEQsQ0ErSTVEOzs7QUFDQSxRQUFNNUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2pDLGFBQ0MseUJBQUMsYUFBRDtBQUFlLFdBQUcsRUFBQztBQUFuQixTQUNDLHlCQUFDLHFCQUFEO0FBQ0MsYUFBSyxFQUFHYixVQUFVLENBQUN1QixTQURwQjtBQUVDLGdCQUFRLEVBQUcsa0JBQUVYLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVhLHFCQUFTLEVBQUVYO0FBQWIsV0FBRixDQUE1QjtBQUFBO0FBRlosUUFERCxFQU1HLENBQUMsQ0FBRVosVUFBVSxDQUFDOEMsR0FBZCxJQUNELHlCQUFDLGdCQUFELFFBQ0MseUJBQUMsT0FBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFFUSxLQUFGLEVBQWE7QUFDdkI1Qyx1QkFBYSxDQUFFO0FBQ2R1QyxlQUFHLEVBQUVLLEtBQUssQ0FBQ0wsR0FERztBQUVkSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGRztBQUdkUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSEQsV0FBRixDQUFiO0FBS0EsU0FQRjtBQVNDLG9CQUFZLEVBQUdYLG1CQVRoQjtBQVVDLGFBQUssRUFBRzdDLFVBQVUsQ0FBQ2dELE9BVnBCO0FBV0MsY0FBTSxFQUFHO0FBQUEsY0FBSVMsSUFBSixTQUFJQSxJQUFKO0FBQUEsaUJBQ1IseUJBQUMsTUFBRDtBQUNDLHFCQUFTLEVBQUMsNkJBRFg7QUFFQyxpQkFBSyxFQUFHL0UsRUFBRSxDQUFFLFlBQUYsQ0FGWDtBQUdDLGdCQUFJLEVBQUMsTUFITjtBQUlDLG1CQUFPLEVBQUcrRTtBQUpYLFlBRFE7QUFBQTtBQVhWLFFBREQsQ0FERCxDQVBGLENBREQ7QUFtQ0EsS0FwQ0Q7O0FBc0NBLFFBQUl3RCxZQUFKOztBQUNBLFFBQUssWUFBWWpILFVBQVUsQ0FBQ3dGLE1BQTVCLEVBQXFDO0FBQ3BDeUIsa0JBQVksR0FDWCx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBR3ZJLEVBQUUsQ0FBRSxPQUFGLENBRFg7QUFFQyxZQUFJLEVBQUdBLEVBQUUsQ0FBRSxzRkFBRixDQUZWO0FBR0MsVUFBRSxFQUFDO0FBSEosU0FLQyx5QkFBQyxXQUFEO0FBQWEsc0JBQWFBLEVBQUUsQ0FBRSxhQUFGO0FBQTVCLFNBQ0csQ0FBRSxTQUFGLEVBQWEsT0FBYixFQUFzQixVQUF0QixFQUFtQ3NELEdBQW5DLENBQXdDLFVBQUVDLEtBQUYsRUFBYTtBQUN0RCxZQUFNQyxnQkFBZ0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWMsQ0FBZCxFQUFrQkMsV0FBbEIsS0FBa0NILEtBQUssQ0FBQ0ksS0FBTixDQUFhLENBQWIsQ0FBM0Q7QUFDQSxZQUFNQyxHQUFHLEdBQUssY0FBY0wsS0FBaEIsR0FBMEIsRUFBMUIsR0FBK0JBLEtBQTNDO0FBQ0EsWUFBTXVELE1BQU0sR0FBS2pELFNBQVMsS0FBS3ZDLFVBQVUsQ0FBQ3dCLEtBQTNCLEdBQXFDLEVBQXJDLEdBQTBDeEIsVUFBVSxDQUFDd0IsS0FBcEU7QUFDQSxZQUFNZ0IsUUFBUSxHQUFLRixHQUFHLEtBQUtrRCxNQUEzQjtBQUVBLGVBQ0MseUJBQUMsTUFBRDtBQUNDLGFBQUcsRUFBR2xELEdBRFA7QUFFQyxxQkFBVyxNQUZaO0FBR0MsbUJBQVMsRUFBR0UsUUFIYjtBQUlDLDBCQUFlQSxRQUpoQjtBQUtDLGlCQUFPLEVBQUcsaUJBQUU1QixPQUFGO0FBQUEsbUJBQWVGLGFBQWEsQ0FBRTtBQUFFYyxtQkFBSyxFQUFFYztBQUFULGFBQUYsQ0FBNUI7QUFBQTtBQUxYLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWpCQyxDQURILENBTEQsQ0FERCxDQUREO0FBOEJBLEtBdE4yRCxDQXdONUQ7OztBQUNBLFFBQU1ILHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNyQyxhQUNDLHlCQUFDLGlCQUFELFFBQ0MseUJBQUMsU0FBRCxRQUVDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsYUFBSyxFQUFHckQsRUFBRSxDQUFFLFFBQUYsQ0FEWDtBQUVDLFVBQUUsRUFBQztBQUZKLFNBSUMseUJBQUMsV0FBRDtBQUFhLHNCQUFhQSxFQUFFLENBQUUsY0FBRjtBQUE1QixTQUNHLENBQUUsU0FBRixFQUFhLE9BQWIsRUFBdUJzRCxHQUF2QixDQUE0QixVQUFFQyxLQUFGLEVBQWE7QUFDMUMsWUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFjLENBQWQsRUFBa0JDLFdBQWxCLEtBQWtDSCxLQUFLLENBQUNJLEtBQU4sQ0FBYSxDQUFiLENBQTNEO0FBQ0EsWUFBTUMsR0FBRyxHQUFLLGNBQWNMLEtBQWhCLEdBQTBCLEVBQTFCLEdBQStCQSxLQUEzQztBQUNBLFlBQU11RCxNQUFNLEdBQUtqRCxTQUFTLEtBQUt2QyxVQUFVLENBQUN3RixNQUEzQixHQUFzQyxFQUF0QyxHQUEyQ3hGLFVBQVUsQ0FBQ3dGLE1BQXJFO0FBQ0EsWUFBTWhELFFBQVEsR0FBS0YsR0FBRyxLQUFLa0QsTUFBM0I7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUdsRCxHQURQO0FBRUMscUJBQVcsTUFGWjtBQUdDLG1CQUFTLEVBQUdFLFFBSGI7QUFJQywwQkFBZUEsUUFKaEI7QUFLQyxpQkFBTyxFQUFHLGlCQUFFNUIsT0FBRjtBQUFBLG1CQUFlRixhQUFhLENBQUU7QUFBRThFLG9CQUFNLEVBQUVsRDtBQUFWLGFBQUYsQ0FBNUI7QUFBQTtBQUxYLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWpCQyxDQURILENBSkQsQ0FERCxDQUZELEVBOEJHK0UsWUE5QkgsQ0FERCxDQUREO0FBcUNBLEtBdENELENBek40RCxDQWlRNUQ7OztBQUNBLFdBQVMsQ0FDUnBHLG1CQUFtQixFQURYLEVBRVJrQix1QkFBdUIsRUFGZixFQUdScEIscUJBQXFCLEVBSGIsQ0FBVDtBQUtBLEdBN1NpQyxDQTZTL0I7O0FBN1MrQixDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztJQzVDUWpDLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFFUEcsaUIsR0FDR0YsRUFBRSxDQUFDRyxNLENBRE5ELGlCO3FCQVlHRixFQUFFLENBQUNxQyxVO0lBUk5FLFMsa0JBQUFBLFM7SUFDQUMsUSxrQkFBQUEsUTtJQUNBOUIsTyxrQkFBQUEsTztJQUNBQyxNLGtCQUFBQSxNO0lBQ0FtRCxXLGtCQUFBQSxXO0lBQ0FyQixXLGtCQUFBQSxXO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztzQkFjRzNDLEVBQUUsQ0FBQ0ksVztJQVZONkQsZ0IsbUJBQUFBLGdCO0lBQ0E1RCxTLG1CQUFBQSxTO0lBQ0FDLFEsbUJBQUFBLFE7SUFDQXlELGdCLG1CQUFBQSxnQjtJQUNBeEQsVyxtQkFBQUEsVztJQUNBeUQsZ0IsbUJBQUFBLGdCO0lBQ0F4RCxpQixtQkFBQUEsaUI7SUFDQUMsYSxtQkFBQUEsYTtJQUNBRyxxQixtQkFBQUEscUI7SUFDQUMsVyxtQkFBQUEsVztBQUdELElBQU1DLGNBQWMsR0FBRyxDQUN0QixnQkFEc0IsQ0FBdkI7QUFHQSxJQUFNQyxRQUFRLEdBQUcsQ0FDaEIsQ0FBRSxnQkFBRixFQUFvQjtBQUFFQyxhQUFXLEVBQUUsRUFBZjtBQUFtQkMsU0FBTyxFQUFFO0FBQTVCLENBQXBCLENBRGdCLENBQWpCO0FBR0EsSUFBTWlELG1CQUFtQixHQUFHLENBQUUsT0FBRixDQUE1Qjs7QUFFQSxJQUFNaEQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFLQyxVQUFVLEdBQUcsbUJBSnRCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBRUMsVUFBRixFQUFjQyxVQUFkLEVBQThCO0FBQ2hELE1BQUlDLE9BQU8sR0FBRyxVQUFkOztBQUNBLE1BQUssQ0FBQyxDQUFFRixVQUFVLENBQUNHLFNBQW5CLEVBQStCO0FBQzlCO0FBQ0FELFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNHLFNBQTVCO0FBQ0E7O0FBQ0QsTUFBSyxDQUFDLENBQUVGLFVBQVIsRUFBcUI7QUFDcEJDLFdBQU8sSUFBSSxXQUFYO0FBQ0E7O0FBQ0QsU0FBT0EsT0FBUDtBQUNBLENBVkQ7O0FBWUFyQixpQkFBaUIsQ0FBRSxjQUFGLEVBQWtCO0FBRWxDd0IsT0FBSyxFQUFFM0IsRUFBRSxDQUFFLE9BQUYsQ0FGeUI7QUFHbEM0QixNQUFJLEVBQUVULFVBSDRCO0FBSWxDVSxVQUFRLEVBQUUsV0FKd0I7QUFNbENQLFlBQVUsRUFBRTtBQUNYa0gsU0FBSyxFQUFFO0FBQ04xRyxVQUFJLEVBQUU7QUFEQSxLQURJO0FBSVgyRyxZQUFRLEVBQUU7QUFDVDNHLFVBQUksRUFBRTtBQURHLEtBSkM7QUFPWHNDLE9BQUcsRUFBRTtBQUNKdEMsVUFBSSxFQUFFO0FBREYsS0FQTTtBQVVYeUMsT0FBRyxFQUFFO0FBQ0p6QyxVQUFJLEVBQUU7QUFERixLQVZNO0FBYVh3QyxXQUFPLEVBQUU7QUFDUnhDLFVBQUksRUFBRTtBQURFO0FBYkUsR0FOc0I7QUF3QmxDQyxNQXhCa0Msc0JBd0IyQjtBQUFBLFFBQXJEVCxVQUFxRCxRQUFyREEsVUFBcUQ7QUFBQSxRQUF6Q0csU0FBeUMsUUFBekNBLFNBQXlDO0FBQUEsUUFBOUJPLGFBQThCLFFBQTlCQSxhQUE4QjtBQUFBLFFBQWZULFVBQWUsUUFBZkEsVUFBZTs7QUFDNUQ7QUFDQSxRQUFNa0QsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFFQyxTQUFGLEVBQWlCO0FBQ3ZDLFVBQUtwRCxVQUFVLENBQUNnRCxPQUFoQixFQUEwQjtBQUN6QixlQUNDO0FBQ0MsYUFBRyxFQUFHaEQsVUFBVSxDQUFDOEMsR0FEbEI7QUFFQyxhQUFHLEVBQUc5QyxVQUFVLENBQUNpRCxHQUZsQjtBQUdDLG1CQUFTLEVBQUM7QUFIWCxVQUREO0FBT0E7O0FBQ0QsYUFDQyx5QkFBQyxnQkFBRDtBQUNDLFlBQUksRUFBRyxjQURSO0FBRUMsaUJBQVMsRUFBRzlDLFNBRmI7QUFHQyxjQUFNLEVBQUc7QUFDUkUsZUFBSyxFQUFFLGNBREM7QUFFUmdELHNCQUFZLEVBQUUzRSxFQUFFLENBQUUscUVBQUY7QUFGUixTQUhWO0FBT0MsZ0JBQVEsRUFBRyxrQkFBRTRFLEtBQUYsRUFBYTtBQUN2QjVDLHVCQUFhLENBQUU7QUFDZHVDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQURHO0FBRWRILGVBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZHO0FBR2RQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIRCxXQUFGLENBQWI7QUFLQSxTQWJGO0FBY0MsY0FBTSxFQUFDLFNBZFI7QUFlQyxvQkFBWSxFQUFHWDtBQWZoQixRQUREO0FBbUJBLEtBN0JEOztBQStCQSxRQUFNM0MsT0FBTyxHQUFHSCxVQUFVLENBQUVDLFVBQUYsRUFBY0MsVUFBZCxDQUExQjs7QUFFQSxRQUFNVSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbkMsVUFBTXlHLFVBQVUsR0FBSyxDQUFDLENBQUVwSCxVQUFVLENBQUNnRCxPQUFoQixHQUE0QixnQkFBNUIsR0FBK0MsRUFBbEU7QUFDQSxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRUM7QUFBSyxpQkFBUyxFQUFHOUM7QUFBakIsU0FDQztBQUFLLGlCQUFTLEVBQUdrSDtBQUFqQixTQUNDLHlCQUFDLFdBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFFOUQsS0FBRixFQUFhO0FBQ3ZCNUMsdUJBQWEsQ0FBRTtBQUNkdUMsZUFBRyxFQUFFSyxLQUFLLENBQUNMLEdBREc7QUFFZEgsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRkc7QUFHZFAsbUJBQU8sRUFBRU0sS0FBSyxDQUFDRTtBQUhELFdBQUYsQ0FBYjtBQUtBLFNBUEY7QUFRQyxZQUFJLEVBQUMsT0FSTjtBQVNDLGFBQUssRUFBR3hELFVBQVUsQ0FBQ2dELE9BVHBCO0FBVUMsY0FBTSxFQUFHO0FBQUEsY0FBSVMsSUFBSixTQUFJQSxJQUFKO0FBQUEsaUJBQWdCTixjQUFjLENBQUVNLElBQUYsQ0FBOUI7QUFBQTtBQVZWLFFBREQsQ0FERCxFQWVDLDZDQUFZLHlCQUFDLFNBQUQ7QUFDWCxnQkFBUSxFQUFHLGtCQUFFN0MsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRXdHLGlCQUFLLEVBQUV0RztBQUFULFdBQUYsQ0FBNUI7QUFBQSxTQURBO0FBRVgsYUFBSyxFQUFHWixVQUFVLENBQUNrSCxLQUZSO0FBR1gsbUJBQVcsRUFBR3hJLEVBQUUsQ0FBRSxXQUFGLENBSEw7QUFJWCw4QkFBc0IsRUFBRztBQUpkLFFBQVosQ0FmRCxFQXFCQyx1Q0FBTSx5QkFBQyxTQUFEO0FBQ0wsZ0JBQVEsRUFBRyxrQkFBRWtDLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUV5RyxvQkFBUSxFQUFFdkc7QUFBWixXQUFGLENBQTVCO0FBQUEsU0FETjtBQUVMLGFBQUssRUFBR1osVUFBVSxDQUFDbUgsUUFGZDtBQUdMLG1CQUFXLEVBQUd6SSxFQUFFLENBQUUsV0FBRixDQUhYO0FBSUwsOEJBQXNCLEVBQUc7QUFKcEIsUUFBTixDQXJCRCxDQUZELENBREQ7QUFrQ0EsS0FwQ0Q7O0FBc0NBLFFBQU1tQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDakMsYUFDQyx5QkFBQyxhQUFEO0FBQWUsV0FBRyxFQUFDO0FBQW5CLFNBQ0csQ0FBQyxDQUFFYixVQUFVLENBQUM4QyxHQUFkLElBQ0QseUJBQUMsZ0JBQUQsUUFDQyx5QkFBQyxPQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUVRLEtBQUYsRUFBYTtBQUN2QjVDLHVCQUFhLENBQUU7QUFDZHVDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQURHO0FBRWRILGVBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZHO0FBR2RQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIRCxXQUFGLENBQWI7QUFLQSxTQVBGO0FBUUMsb0JBQVksRUFBR1gsbUJBUmhCO0FBU0MsYUFBSyxFQUFHN0MsVUFBVSxDQUFDZ0QsT0FUcEI7QUFVQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFDUix5QkFBQyxNQUFEO0FBQ0MscUJBQVMsRUFBQyw2QkFEWDtBQUVDLGlCQUFLLEVBQUcvRSxFQUFFLENBQUUsWUFBRixDQUZYO0FBR0MsZ0JBQUksRUFBQyxNQUhOO0FBSUMsbUJBQU8sRUFBRytFO0FBSlgsWUFEUTtBQUFBO0FBVlYsUUFERCxDQURELENBRkYsQ0FERDtBQTZCQSxLQTlCRCxDQXpFNEQsQ0F5RzVEOzs7QUFDQSxXQUFTLENBQ1I1QyxtQkFBbUIsRUFEWCxFQUVSRixxQkFBcUIsRUFGYixDQUFUO0FBSUEsR0F0SWlDLENBc0kvQjs7QUF0SStCLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0RRakMsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVQRyxpQixHQUNHRixFQUFFLENBQUNHLE0sQ0FETkQsaUI7cUJBT0dGLEVBQUUsQ0FBQ3FDLFU7SUFITkUsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0ErRSxZLGtCQUFBQSxZO3NCQU1HdkgsRUFBRSxDQUFDSSxXO0lBRk5JLGlCLG1CQUFBQSxpQjtJQUNBSyxXLG1CQUFBQSxXO0FBR0QsSUFBTUMsY0FBYyxHQUFHLENBQ3RCLFlBRHNCLENBQXZCOztBQUlBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBS0MsVUFBVSxHQUFHLGtCQUp0QjtBQUtDLE9BQUcsRUFBQztBQUxMLElBREQ7QUFTQSxDQVZEOztBQVlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUVDLFVBQUYsRUFBa0I7QUFDcEMsTUFBSUUsT0FBTyxHQUFHLFNBQWQ7O0FBQ0EsTUFBSyxDQUFDLENBQUVGLFVBQVUsQ0FBQ0csU0FBbkIsRUFBK0I7QUFDOUI7QUFDQUQsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0csU0FBNUI7QUFDQTs7QUFDRCxTQUFPRCxPQUFQO0FBQ0EsQ0FQRDs7QUFTQSxJQUFNbUgsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFFQyxJQUFGLEVBQVk7QUFDbkMsU0FBTyxtQkFBS0MsS0FBSyxDQUFFRCxJQUFGLENBQVYsRUFBcUJ0RixHQUFyQixDQUEwQixZQUFXO0FBQzNDLFdBQU8sQ0FBRSxZQUFGLEVBQWdCLEVBQWhCLENBQVA7QUFDQSxHQUZNLENBQVA7QUFHQSxDQUpEOztBQU1BbkQsaUJBQWlCLENBQUUsYUFBRixFQUFpQjtBQUVqQ3dCLE9BQUssRUFBRTNCLEVBQUUsQ0FBRSxNQUFGLENBRndCO0FBR2pDNEIsTUFBSSxFQUFFVCxVQUgyQjtBQUlqQ1UsVUFBUSxFQUFFLFdBSnVCO0FBTWpDUCxZQUFVLEVBQUU7QUFDWHNILFFBQUksRUFBRTtBQUNMOUcsVUFBSSxFQUFFLFFBREQ7QUFFTDZGLGFBQU8sRUFBRTtBQUZKO0FBREssR0FOcUI7QUFhakM1RixNQWJpQyxzQkFhZ0I7QUFBQSxRQUF6Q1QsVUFBeUMsUUFBekNBLFVBQXlDO0FBQUEsUUFBN0JHLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLFFBQWxCTyxhQUFrQixRQUFsQkEsYUFBa0I7QUFDaEQ7QUFFQSxRQUFNUixPQUFPLEdBQUdILFVBQVUsQ0FBRUMsVUFBRixDQUExQixDQUhnRCxDQUtoRDs7QUFDQSxRQUFNK0IsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFlBQUQ7QUFDQyxhQUFLLEVBQUdyRCxFQUFFLENBQUUsTUFBRixDQURYO0FBRUMsYUFBSyxFQUFHc0IsVUFBVSxDQUFDc0gsSUFGcEI7QUFHQyxnQkFBUSxFQUFHLGtCQUFFRSxRQUFGLEVBQWdCO0FBQzFCOUcsdUJBQWEsQ0FBRTtBQUNkNEcsZ0JBQUksRUFBRUU7QUFEUSxXQUFGLENBQWI7QUFHQSxTQVBGO0FBUUMsV0FBRyxFQUFHLENBUlA7QUFTQyxXQUFHLEVBQUc7QUFUUCxRQURELENBREQsQ0FERCxDQUREO0FBbUJBLEtBcEJEOztBQXNCQSxRQUFNN0cscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUdUO0FBQWpCLFNBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUdtSCxlQUFlLENBQUVySCxVQUFVLENBQUNzSCxJQUFiLENBRDNCO0FBRUMsb0JBQVksRUFBQyxLQUZkO0FBR0MscUJBQWEsRUFBRzdIO0FBSGpCLFFBREQsQ0FERCxDQUREO0FBVUEsS0FYRCxDQTVCZ0QsQ0F5Q2hEOzs7QUFDQSxXQUFTLENBQ1JzQyx1QkFBdUIsRUFEZixFQUVScEIscUJBQXFCLEVBRmIsQ0FBVDtBQUlBLEdBM0RnQztBQTJEOUI7QUFFSEcsTUE3RGlDLHVCQTZEVjtBQUFBLFFBQWZkLFVBQWUsU0FBZkEsVUFBZTtBQUN0QixXQUNDLHlCQUFDLFdBQUQsQ0FBYSxPQUFiLE9BREQ7QUFHQTtBQWpFZ0MsQ0FBakIsQ0FBakIsQzs7Ozs7Ozs7Ozs7SUMvQ1F0QixFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBRVBHLGlCLEdBQ0dGLEVBQUUsQ0FBQ0csTSxDQURORCxpQjtzQkFLR0YsRUFBRSxDQUFDSSxXO0lBRk5DLFMsbUJBQUFBLFM7SUFDQVEsVyxtQkFBQUEsVztBQUVELElBQU1DLGNBQWMsR0FBRyxDQUN0QixZQURzQixFQUV0QixjQUZzQixFQUd0QixnQkFIc0IsRUFJdEIsV0FKc0IsRUFLdEIsZUFMc0IsRUFNdEIsYUFOc0IsRUFPdEIsZUFQc0IsRUFRdEIsY0FSc0IsQ0FBdkI7QUFVQSxJQUFNQyxRQUFRLEdBQUcsQ0FDaEIsQ0FBRSxnQkFBRixFQUFvQjtBQUFFQyxhQUFXLEVBQUUscUJBQWY7QUFBc0NDLFNBQU8sRUFBRTtBQUEvQyxDQUFwQixDQURnQixDQUFqQjs7QUFJQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLFNBQ0M7QUFDQyxTQUFLLEVBQUMsSUFEUDtBQUVDLFVBQU0sRUFBQyxJQUZSO0FBR0MsYUFBUyxFQUFDLFVBSFg7QUFJQyxPQUFHLEVBQUtDLFVBQVUsR0FBRyxpQkFKdEI7QUFLQyxPQUFHLEVBQUM7QUFMTCxJQUREO0FBU0EsQ0FWRDs7QUFZQWpCLGlCQUFpQixDQUFFLFlBQUYsRUFBZ0I7QUFFaEN3QixPQUFLLEVBQUUzQixFQUFFLENBQUUsS0FBRixDQUZ1QjtBQUdoQzRCLE1BQUksRUFBRVQsVUFIMEI7QUFJaEM0SCxRQUFNLEVBQUUsQ0FBRSxhQUFGLENBSndCO0FBS2hDbEgsVUFBUSxFQUFFLFdBTHNCO0FBT2hDbUgsVUFBUSxFQUFFO0FBQ1RDLFlBQVEsRUFBRSxLQUREO0FBRVRDLFlBQVEsRUFBRSxLQUZEO0FBR1RDLFFBQUksRUFBRTtBQUhHLEdBUHNCO0FBYWhDN0gsWUFBVSxFQUFFO0FBQ1hLLFNBQUssRUFBRTtBQUNORyxVQUFJLEVBQUU7QUFEQTtBQURJLEdBYm9CO0FBbUJoQ0MsTUFuQmdDLHNCQW1CaUI7QUFBQSxRQUF6Q1QsVUFBeUMsUUFBekNBLFVBQXlDO0FBQUEsUUFBN0JHLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLFFBQWxCTyxhQUFrQixRQUFsQkEsYUFBa0I7QUFDaEQsV0FDQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0MscUNBQUkseUJBQUMsU0FBRDtBQUNILGNBQVEsRUFBRyxrQkFBRUUsT0FBRjtBQUFBLGVBQWVGLGFBQWEsQ0FBRTtBQUFFTCxlQUFLLEVBQUVPO0FBQVQsU0FBRixDQUE1QjtBQUFBLE9BRFI7QUFFSCxXQUFLLEVBQUdaLFVBQVUsQ0FBQ0ssS0FGaEI7QUFHSCxpQkFBVyxFQUFHM0IsRUFBRSxDQUFFLFdBQUYsQ0FIYjtBQUlILDRCQUFzQixFQUFHO0FBSnRCLE1BQUosQ0FERCxFQU9DLHlCQUFDLFdBQUQ7QUFDQyxtQkFBYSxFQUFHZSxjQURqQjtBQUVDLGNBQVEsRUFBR0MsUUFGWjtBQUdDLGtCQUFZLEVBQUc7QUFIaEIsTUFQRCxDQUREO0FBZUEsR0FuQytCO0FBbUM3QjtBQUVIb0IsTUFyQ2dDLHVCQXFDVDtBQUFBLFFBQWZkLFVBQWUsU0FBZkEsVUFBZTtBQUN0QixXQUNDLHlCQUFDLFdBQUQsQ0FBYSxPQUFiLE9BREQ7QUFHQTtBQXpDK0IsQ0FBaEIsQ0FBakIsQyIsImZpbGUiOiJibG9ja3MuYnVpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9ibG9ja3MvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2JveG91dC9ibG9jayc7XG5pbXBvcnQgJy4vYnV0dG9uL2Jsb2NrJztcbmltcG9ydCAnLi9jYXJkL2Jsb2NrJztcbmltcG9ydCAnLi9kYXRlL2Jsb2NrJztcbmltcG9ydCAnLi9oZXJvL2Jsb2NrJztcbmltcG9ydCAnLi9tZXRyaWMvYmxvY2snO1xuaW1wb3J0ICcuL21lbnUvYmxvY2snO1xuaW1wb3J0ICcuL25vdGljZS9ibG9jayc7XG5pbXBvcnQgJy4vcGFuZWwvYmxvY2snO1xuaW1wb3J0ICcuL3Byb21vL2Jsb2NrJztcbmltcG9ydCAnLi9xdW90ZS9ibG9jayc7XG5pbXBvcnQgJy4vdGFicy90YWInO1xuaW1wb3J0ICcuL3RhYnMvYmxvY2snO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcywgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJveG91dCBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2JveG91dC5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtYm94b3V0Jztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2JveG91dCcsIHtcblxuXHR0aXRsZTogX18oICdCb3hvdXQnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2J1dHRvbi5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtYnV0dG9uJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuYWxpZ25tZW50O1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2J1dHRvbicsIHtcblxuXHR0aXRsZTogX18oICdCdXR0b24nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGJ1dHRvbiBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgbWV0YTtcblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBjbGFzc25hbWVzXG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtYnV0dG9uLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGV4dCB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHQvLyBAdG9kbzogZG8gd2UgbmVlZCBhbGlnbm1lbnQvZmxvYXQgY29udHJvbHMgb24gYnV0dG9ucz9cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQnV0dG9uIFN0eWxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImJ1dHRvbi1zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnQnV0dG9uIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAncHJvbWluZW50JywgJ2Rpc2FibGVkJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gc3R5bGUgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0QnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvY2FyZC5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtY2FyZCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NlcyArPSAnIG5vLWltYWdlJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvY2FyZCcsIHtcblxuXHR0aXRsZTogX18oICdDYXJkJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWNhcmQtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDM+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgY2FyZCB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBidXR0b246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcblx0RGF0ZVBpY2tlcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvZGF0ZS5wbmcnICkgfVxuXHRcdFx0YWx0PVwiZGF0ZVwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWRhdGUnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY29sb3IgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGNsLWRhdGUtJyArIGF0dHJpYnV0ZXMuY29sb3I7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2RhdGUnLCB7XG5cblx0dGl0bGU6IF9fKCAnRGF0ZScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRkYXRlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c2hvd195ZWFyOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdGlmICggISBhdHRyaWJ1dGVzLmRhdGUgKSB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZGF0ZTogbmV3IERhdGUoKSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggYXR0cmlidXRlcy5kYXRlICk7XG5cblx0XHRcdGxldCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoICdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0gKTtcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zaG93X3llYXIgKSB7XG5cdFx0XHRcdG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyggJ2RlZmF1bHQnLCB7IG1vbnRoOiAnc2hvcnQnIH0gKSArICcgJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGlzcGxheSBhIG1lc3NhZ2Ugb24gdGhlIGFkbWluIHNjcmVlbiBpZiB0aGUgbm90aWNlIGlzIGV4cGlyZWRcblx0XHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBleHBpcmF0aW9uTWVzc2FnZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmRhdGUgJiYgZGF0ZS5nZXRUaW1lKCkgPD0gdG9kYXkuZ2V0VGltZSgpICkge1xuXHRcdFx0XHRleHBpcmF0aW9uTWVzc2FnZSA9IDxkaXYgY2xhc3NOYW1lPVwiY2wtY29tcG9uZW50LW1lc3NhZ2VcIj5UaGlzIGRhdGUgbWF5IG5vIGxvbmdlciBiZSByZWxldmFudC48L2Rpdj47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0eyBleHBpcmF0aW9uTWVzc2FnZSB9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLW1vbnRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1vbnRoIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtZGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IGRhdGUuZ2V0RGF0ZSgpIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jYXB0aW9uLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNhcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgZGF0ZSBjYXB0aW9uJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGF0ZSBDb2xvcicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJkYXRlLWNvbG9yXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdEYXRlIENvbG9yJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2JsdWUnLCAncmVkJywgJ2dyZXknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2JsdWUnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY29sb3IgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5jb2xvciApID8gJycgOiBhdHRyaWJ1dGVzLmNvbG9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBjb2xvciApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjb2xvcjoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PERhdGVQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnREYXRlPXsgYXR0cmlidXRlcy5kYXRlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGF0ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGF0ZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyB5ZWFyXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93X3llYXIgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93X3llYXI6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2hlcm8ucG5nJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IHJhbmRvbUlEID0gKCkgPT4ge1xuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82ODYwODUzL2dlbmVyYXRlLXJhbmRvbS1zdHJpbmctZm9yLWRpdi1pZFxuXHRjb25zdCBTNCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKCAoICggMSArIE1hdGgucmFuZG9tKCkgKSAqIDB4MTAwMDAgKSB8IDAgKS50b1N0cmluZyggMTYgKS5zdWJzdHJpbmcoIDEgKTtcblx0fTtcblx0cmV0dXJuICggUzQoKSArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgUzQoKSArIFM0KCkgKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2hlcm8nLCB7XG5cblx0dGl0bGU6IF9fKCAnSGVybycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdGhlYWRsaW5lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN1YmhlYWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhV2lkdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dXNlX2NhcHRpb246IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y3JlZGl0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHBvc2l0aW9uWDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRwb3NpdGlvblk6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSGVpZ2h0OiBtZWRpYS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvblg6IDAuNSxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25ZOiAwLjUsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGhlcm8gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMuaWQgKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuaWQgPSByYW5kb21JRCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1oZXJvJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdH1cblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0XHRcdH1cblx0XHRcdGxldCBzdHlsZSA9IHt9O1xuXHRcdFx0bGV0IHBvc3RlciA9ICdwb3N0ZXInO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdFx0XHRcdHBvc3RlciA9ICdzdGlsbCc7XG5cdFx0XHRcdHN0eWxlID0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogYCR7IGF0dHJpYnV0ZXMucG9zaXRpb25YICogMTAwIH0lICR7IGF0dHJpYnV0ZXMucG9zaXRpb25ZICogMTAwIH0lYCxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsgYXR0cmlidXRlcy5pbWcgfSlgLFxuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLWltYWdlJztcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWhlcm8tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtaGVyby1wcm9wZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBwb3N0ZXIgfSBzdHlsZT17IHN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1oZXJvLXRleHQgb3ZlcmxheVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBoZWFkbGluZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaGVhZGxpbmUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBoZXJvIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3ViaGVhZFwiPjxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3ViaGVhZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3ViaGVhZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGhlcm8gc3VidGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInN1YmhlYWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1idXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBidXR0b246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWxpZ25tZW50OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFIZWlnaHQ6IG1lZGlhLmhlaWdodCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYVdpZHRoOiBtZWRpYS53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvblg6IDAuNSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvblk6IDAuNSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJoZXJvLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnSGVybyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdmdWxsd2lkdGgnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8Rm9jYWxQb2ludFBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdHVybD17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zPXsgeyB3aWR0aDogYXR0cmlidXRlcy5tZWRpYVdpZHRoLCBoZWlnaHQ6IGF0dHJpYnV0ZXMubWVkaWFIZWlnaHQgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB7IHg6IGF0dHJpYnV0ZXMucG9zaXRpb25YLCB5OiBhdHRyaWJ1dGVzLnBvc2l0aW9uWSB9IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZm9jYWxQb2ludCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcG9zaXRpb25YOiAoIGZvY2FsUG9pbnQueCAqIDEgKSwgcG9zaXRpb25ZOiAoIGZvY2FsUG9pbnQueSAqIDEgKSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZpZGVvIFVSTFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHZpZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52aWQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiRm9yIGNyZWF0aW5nIGEgdmlkZW8gaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIFdvcmRQcmVzcyBjYXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0dGluZyBhIGN1c3RvbSBjYXB0aW9uIGJlbG93IHdpbGwgb3ZlcnJpZGUgYW55IFdvcmRQcmVzcyBjYXB0aW9uLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMudXNlX2NhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB1c2VfY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgY2FwdGlvbiBmb3IgdGhlIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDcmVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjcmVkaXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY3JlZGl0IH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNwZWNpZnkgY3JlZGl0IGZvciB0aGUgaGVybyBtZWRpYS5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdFVSTElucHV0LFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL21lbnUucG5nJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLW1lbnUnO1xuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbWVudScsIHtcblxuXHR0aXRsZTogX18oICdNZW51JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGRlcHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0XHRzaG93dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYnV0dG9uIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0bGV0IG5hbWUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5uYW1lICkge1xuXHRcdFx0XHRuYW1lID0gJzogJyArIGF0dHJpYnV0ZXMubmFtZTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudGl0bGUgJiYgYXR0cmlidXRlcy5zaG93dGl0bGUgKSB7XG5cdFx0XHRcdHRpdGxlID0gPHNwYW4gY2xhc3NOYW1lPVwiY2wtbWVudS10b2dnbGVcIj4geyBhdHRyaWJ1dGVzLnRpdGxlIH0gPC9zcGFuPjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWVudS1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHR7IHRpdGxlIH1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtbWVudS1wbGFjZWhvbGRlclwiPk1lbnUgcGxhY2Vob2xkZXJ7IG5hbWUgfTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01lbnUgbmFtZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyB0aXRsZSBvbiBkZXNrdG9wJyApIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUaXRsZXMgYXJlIGFsd2F5cyBzaG93biBvbiBtb2JpbGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnNob3d0aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNob3d0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RlcHRoJyApIH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9eyAyIH1cblx0XHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGVwdGggKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRlcHRoIH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlcHRoIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL21ldHJpYy5wbmcnICkgfVxuXHRcdFx0YWx0PVwibWV0cmljXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtbWV0cmljJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbWV0cmljJywge1xuXG5cdHRpdGxlOiBfXyggJ01ldHJpYycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRtZXRyaWM6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1tZXRyaWMtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG1ldHJpYzogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWV0cmljIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJzEwMCUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdtZXRyaWNzIG9uIHRoaXMgcGFnZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdC8vIEB0b2RvOiB0ZWNobmljYWxseSwgeW91IGNhbiBoYXZlIGEgY2xlYXIgYW5kIGRhcmsgbWV0cmljXG5cdFx0Ly8gb3VyIGJ1dHRvbmdyb3VwIG9ubHkgYWxsb3dzIHVzZXJzIHRvIHNlbGVjdCBvbmVcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRyaWMgU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibWV0cmljLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdNZXRyaWMgU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnc3RhbmRhcmQnLCAnY2xlYXInLCAnZGFyaycsICdvdmVybGF5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxuXHREYXRlUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJyxcbl07XG5cbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIG5vdGljZSBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL25vdGljZS5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbm90aWNlJywge1xuXHR0aXRsZTogX18oICdOb3RpY2UnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGV4cGlyYXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c2hvd19leHBpcmVkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0fSxcblx0XHRkaXNtaXNzaWJsZToge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1ub3RpY2UnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmRpc21pc3NpYmxlICkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmRpc21pc3NpYmxlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGlzcGxheSBhIG1lc3NhZ2Ugb24gdGhlIGFkbWluIHNjcmVlbiBpZiB0aGUgbm90aWNlIGlzIGV4cGlyZWRcblx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0Y29uc3QgZXhwID0gbmV3IERhdGUoIGF0dHJpYnV0ZXMuZXhwaXJhdGlvbiApO1xuXHRcdFx0bGV0IGV4cGlyYXRpb25NZXNzYWdlID0gJyc7XG5cdFx0XHRsZXQgc3ludGF4ID0gJ2FuZCB3aWxsIG5vdCc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc2hvd19leHBpcmVkICkge1xuXHRcdFx0XHRzeW50YXggPSAnYnV0IHdpbGwgc3RpbGwnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gJiYgZXhwLmdldFRpbWUoKSA8PSBkYXRlLmdldFRpbWUoKSApIHtcblx0XHRcdFx0ZXhwaXJhdGlvbk1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImNsLWNvbXBvbmVudC1tZXNzYWdlXCI+VGhpcyBub3RpY2UgaGFzIGV4cGlyZWQgeyBzeW50YXggfSBiZSB2aXNpYmxlIHdoZW4gcHVibGlzaGVkLjwvZGl2Pjtcblx0XHRcdH1cblxuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50V3JhcHBlcjogJycgfSApO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHsgZXhwaXJhdGlvbk1lc3NhZ2UgfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIG5vdGljZSB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ05vdGljZSBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJub3RpY2Utc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ05vdGljZSBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3VyZ2VudCcsICdjb3ZpZDE5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gc3R5bGUgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJBbGxvdyB2aXNpdG9ycyB0byBkaXNtaXNzIHRoaXMgbm90aWNlXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5kaXNtaXNzaWJsZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRpc21pc3NpYmxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJFeHBpcmF0aW9uIGRhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnREYXRlPXsgYXR0cmlidXRlcy5leHBpcmF0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGF0ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZXhwaXJhdGlvbjogZGF0ZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyBhZnRlciBleHBpcmVkXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93X2V4cGlyZWQgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93X2V4cGlyZWQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL2hlYWRpbmcnLCB7IGxldmVsOiAxLCBwbGFjZWhvbGRlcjogJ015IFBhbmVsJyB9IF0sXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH0gXSxcblx0WyAndXJpLWNsL2J1dHRvbicsIHt9IF0sXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcGFuZWwucG5nJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gKCAnc3VwZXInID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJ2NsLXBhbmVsLXN1cGVyJyA6ICdjbC1wYW5lbCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5yZXZlcnNlICkge1xuXHRcdGNsYXNzZXMgKz0gJyByZXZlcnNlJztcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3BhbmVsJywge1xuXG5cdHRpdGxlOiBfXyggJ1BhbmVsJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHJldmVyc2U6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcyApO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0aWYgKCAnc3VwZXInID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItYmx1clwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWltYWdlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9zdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdGb3JtYXQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RvIGluY3JlYXNlIHBlcmZvcm1hbmNlLCBzdXBlciBwYW5lbCBwcmV2aWV3cyB3aWxsIGFwcGVhciBzaW1wbGlmaWVkIGluIHRoZSBlZGl0b3Igd2luZG93LicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYW5lbC1mb3JtYXRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1BhbmVsIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3N1cGVyJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJycgOiBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZvcm1hdDoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZsaXAgcGFuZWwgbGF5b3V0XCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5yZXZlcnNlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcmV2ZXJzZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9wcm9tby5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcHJvbW8nLCB7XG5cblx0dGl0bGU6IF9fKCAnUHJvbW8nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGlua3RleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIHByb21vIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLXByb21vJztcblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnbWljcm8nID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG1pY3JvJztcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLXByb21vLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLW1pY3JvLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBwcm9tbyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLW1pY3JvLXRleHQtbGlua1wiPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmt0ZXh0IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGxpbmsgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz57IG1ldGEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHN0eWxlID0gJ3N0eWxlLWJsdXInO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICYmICdkZWZhdWx0JyAhPT0gYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0c3R5bGUgPSAnc3R5bGUtJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZSA9ICdjbC1wcm9tby1iYWNrZHJvcCAnICsgc3R5bGU7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLXByb21vLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tYmFja2Ryb3Atd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHN0eWxlIH0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8cD48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYm9keTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tdGV4dC1saW5rXCI+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbmt0ZXh0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGlua3RleHQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgbGluayB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWltZy13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWdcIj48c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWctbGlua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tYmxvY2stZWRpdG9yLW1ldGFcIj57IG1ldGEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWxpZ25tZW50OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBzdHlsZUNvbnRyb2w7XG5cdFx0aWYgKCAnbWljcm8nICE9PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdHN0eWxlQ29udHJvbCA9IChcblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N0eWxlJyApIH1cblx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RvIGluY3JlYXNlIHBlcmZvcm1hbmNlLCBwcm9tbyBwcmV2aWV3cyB3aWxsIGFwcGVhciBzaW1wbGlmaWVkIGluIHRoZSBlZGl0b3Igd2luZG93LicgKSB9XG5cdFx0XHRcdFx0XHRpZD1cInByb21vLXN0eWxlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUHJvbW8gU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ2JyYW5kJywgJ2NvbmZldHRpJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cInByb21vLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUHJvbW8gRm9ybWF0JyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnbWljcm8nIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0eyBzdHlsZUNvbnRyb2wgfVxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3F1b3RlLnBuZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1xdW90ZSc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcXVvdGUnLCB7XG5cblx0dGl0bGU6IF9fKCAnUXVvdGUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0cXVvdGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2l0YXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBpbWFnZUNsYXNzID0gKCAhISBhdHRyaWJ1dGVzLm1lZGlhSUQgKSA/ICdjbC1xdW90ZS1pbWFnZScgOiAnJztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgaW1hZ2VDbGFzcyB9PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YmxvY2txdW90ZT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBxdW90ZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucXVvdGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGhlIHF1b3RlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2Jsb2NrcXVvdGU+XG5cdFx0XHRcdFx0XHQ8Y2l0ZT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjaXRhdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2l0YXRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnQW5vbnltb3VzJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2NpdGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0UmFuZ2VDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J3VyaS1jbC90YWInLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3RhYnMucG5nJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLXRhYnMnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbmNvbnN0IGdldFRhYnNUZW1wbGF0ZSA9ICggdGFicyApID0+IHtcblx0cmV0dXJuIFsgLi4uQXJyYXkoIHRhYnMgKSBdLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFsgJ3VyaS1jbC90YWInLCB7fSBdO1xuXHR9ICk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC90YWJzJywge1xuXG5cdHRpdGxlOiBfXyggJ1RhYnMnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGFiczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAyLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcyApO1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdUYWJzJyApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGFicyB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHRUYWJzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWJzOiBuZXh0VGFicyxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRtaW49eyAyIH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9eyA2IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgZ2V0VGFic1RlbXBsYXRlKCBhdHRyaWJ1dGVzLnRhYnMgKSB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlTG9jaz1cImFsbFwiXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXHQndXJpLWNsL2NhcmQnLFxuXHQndXJpLWNsL21ldHJpYycsXG5cdCd1cmktY2wvcXVvdGUnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIHRhYiBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3RhYi5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvdGFiJywge1xuXG5cdHRpdGxlOiBfXyggJ1RhYicgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0cGFyZW50OiBbICd1cmktY2wvdGFicycgXSxcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC10YWJcIj5cblx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUYWIgVGl0bGUnICkgfVxuXHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdHRlbXBsYXRlTG9jaz17IGZhbHNlIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==