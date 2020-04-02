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
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero/block */ "./src/js/blocks/hero/block.js");
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hero_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metric/block */ "./src/js/blocks/metric/block.js");
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metric_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel/block */ "./src/js/blocks/panel/block.js");
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_panel_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote/block */ "./src/js/blocks/quote/block.js");
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_quote_block__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tab */ "./src/js/blocks/tabs/tab.js");
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tabs_tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/block */ "./src/js/blocks/tabs/block.js");
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tabs_block__WEBPACK_IMPORTED_MODULE_8__);




 // Disable notices until we iron out their functionality
// import './notice/block';






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
    IconButton = _wp$blockEditor.IconButton,
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
          isDefault: true,
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
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;
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
          return wp.element.createElement(IconButton, {
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
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
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
          return wp.element.createElement(IconButton, {
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
          isDefault: true,
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
    IconButton = _wp$blockEditor.IconButton,
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
          isDefault: true,
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
    IconButton = _wp$components.IconButton,
    withNotices = _wp$components.withNotices,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
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
          return wp.element.createElement(IconButton, {
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
          isDefault: true,
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
    IconButton = _wp$components.IconButton,
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
          return wp.element.createElement(IconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvaGVyby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvY2tzL21ldHJpYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvY2tzL3BhbmVsL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvcXVvdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jsb2Nrcy90YWJzL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9ja3MvdGFicy90YWIuanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImJsb2NrRWRpdG9yIiwiUGxhaW5UZXh0IiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwicGxhY2Vob2xkZXIiLCJkcm9wQ2FwIiwiY3VzdG9tSWNvbiIsIlVSSV9DTF9VUkwiLCJjbGFzc05hbWVzIiwiYXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiZmxvYXQiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsInR5cGUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNvbnRlbnQiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwic2F2ZSIsIlVSTElucHV0IiwiY29tcG9uZW50cyIsIkRhc2hpY29uIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJhbGlnbm1lbnQiLCJzdHlsZSIsImxpbmsiLCJ0ZXh0IiwidG9vbHRpcCIsIm1ldGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMiLCJtYXAiLCJ2YWx1ZSIsImNhcGl0YWxpemVkVmFsdWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwia2V5IiwidW5kZWZpbmVkIiwic2VsZWN0ZWQiLCJ3aXRoTm90aWNlcyIsIk1lZGlhUGxhY2Vob2xkZXIiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJpbWciLCJib2R5IiwibWVkaWFJRCIsImFsdCIsImJ1dHRvbiIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwiaW5zdHJ1Y3Rpb25zIiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJGb2NhbFBvaW50UGlja2VyIiwiVG9nZ2xlQ29udHJvbCIsInJhbmRvbUlEIiwiUzQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJoZWFkbGluZSIsInN1YmhlYWQiLCJtZWRpYUhlaWdodCIsIm1lZGlhV2lkdGgiLCJ2aWQiLCJ1c2VfY2FwdGlvbiIsImNhcHRpb24iLCJjcmVkaXQiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJmb3JtYXQiLCJhbmltYXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsInBvc3RlciIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsIngiLCJ5IiwiZm9jYWxQb2ludCIsIm1ldHJpYyIsImxldmVsIiwicmV2ZXJzZSIsInF1b3RlIiwiY2l0YXRpb24iLCJpbWFnZUNsYXNzIiwiUmFuZ2VDb250cm9sIiwiZ2V0VGFic1RlbXBsYXRlIiwidGFicyIsIkFycmF5IiwiZGVmYXVsdCIsIm5leHRUYWJzIiwicGFyZW50Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztJQ1ZRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBRVBHLGlCLEdBQ0dGLEVBQUUsQ0FBQ0csTSxDQURORCxpQjtzQkFZR0YsRUFBRSxDQUFDSSxXO0lBVE5D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Q0MseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERDtBQUdBO0FBekMrQixDQUFoQixDQUFqQixDIiwiZmlsZSI6ImJsb2Nrcy5idWlsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vYm94b3V0L2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuaW1wb3J0ICcuL2hlcm8vYmxvY2snO1xuaW1wb3J0ICcuL21ldHJpYy9ibG9jayc7XG5cbi8vIERpc2FibGUgbm90aWNlcyB1bnRpbCB3ZSBpcm9uIG91dCB0aGVpciBmdW5jdGlvbmFsaXR5XG4vLyBpbXBvcnQgJy4vbm90aWNlL2Jsb2NrJztcbmltcG9ydCAnLi9wYW5lbC9ibG9jayc7XG5pbXBvcnQgJy4vcXVvdGUvYmxvY2snO1xuaW1wb3J0ICcuL3RhYnMvdGFiJztcbmltcG9ydCAnLi90YWJzL2Jsb2NrJztcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaW1hZ2UnLFxuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBib3hvdXQgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9ib3hvdXQucG5nJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJveG91dCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9ib3hvdXQnLCB7XG5cblx0dGl0bGU6IF9fKCAnQm94b3V0JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdFVSTElucHV0LFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9idXR0b24ucG5nJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJ1dHRvbic7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5hbGlnbm1lbnQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmFsaWdubWVudDtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9idXR0b24nLCB7XG5cblx0dGl0bGU6IF9fKCAnQnV0dG9uJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IG1ldGE7XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWJ1dHRvbi1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWxpZ25tZW50OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJidXR0b24tc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3Byb21pbmVudCcsICdkaXNhYmxlZCcgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRJY29uQnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9jYXJkLnBuZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1jYXJkJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0fSBlbHNlIHtcblx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9jYXJkJywge1xuXG5cdHRpdGxlOiBfXyggJ0NhcmQnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtY2FyZC1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdDxoMz48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdC8+PC9oMz5cblx0XHRcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGNhcmQgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0Rm9jYWxQb2ludFBpY2tlcixcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvaGVyby5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgcmFuZG9tSUQgPSAoKSA9PiB7XG5cdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY4NjA4NTMvZ2VuZXJhdGUtcmFuZG9tLXN0cmluZy1mb3ItZGl2LWlkXG5cdGNvbnN0IFM0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAoICggKCAxICsgTWF0aC5yYW5kb20oKSApICogMHgxMDAwMCApIHwgMCApLnRvU3RyaW5nKCAxNiApLnN1YnN0cmluZyggMSApO1xuXHR9O1xuXHRyZXR1cm4gKCBTNCgpICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyBTNCgpICsgUzQoKSApO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvaGVybycsIHtcblxuXHR0aXRsZTogX18oICdIZXJvJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHQvLyB0aGUgbWVkaWFIZWlnaHQgYW5kIG1lZGlhV2lkdGggYXJlIGZvciB0aGUgZm9jYWwgcG9pbnQgcGlja2VyIGNvbXBvbmVudFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aGVhZGxpbmU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3ViaGVhZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0bWVkaWFIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0bWVkaWFXaWR0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR2aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR1c2VfY2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjcmVkaXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cG9zaXRpb25YOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdHBvc2l0aW9uWToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0bWVkaWFIZWlnaHQ6IG1lZGlhLmhlaWdodCxcblx0XHRcdFx0XHRcdFx0bWVkaWFXaWR0aDogbWVkaWEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvblk6IDAuNSxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgaGVybyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5pZCApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5pZCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLWhlcm8nO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHN0eWxlID0ge307XG5cdFx0XHRsZXQgcG9zdGVyID0gJ3Bvc3Rlcic7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0XHRcdFx0cG9zdGVyID0gJ3N0aWxsJztcblx0XHRcdFx0c3R5bGUgPSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgJHsgYXR0cmlidXRlcy5wb3NpdGlvblggKiAxMDAgfSUgJHsgYXR0cmlidXRlcy5wb3NpdGlvblkgKiAxMDAgfSVgLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgkeyBhdHRyaWJ1dGVzLmltZyB9KWAsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1oZXJvLXByb3BlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHBvc3RlciB9IHN0eWxlPXsgc3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tdGV4dCBvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGhlYWRsaW5lOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5oZWFkbGluZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGhlcm8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWJoZWFkXCI+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdWJoZWFkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJoZWFkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyBzdWJ0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3ViaGVhZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUhlaWdodDogbWVkaWEuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWTogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJoZXJvLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnSGVybyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdmdWxsd2lkdGgnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZvcm1hdDoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEZvY2FsUG9pbnRQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHR1cmw9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRcdFx0ZGltZW5zaW9ucz17IHsgd2lkdGg6IGF0dHJpYnV0ZXMubWVkaWFXaWR0aCwgaGVpZ2h0OiBhdHRyaWJ1dGVzLm1lZGlhSGVpZ2h0IH0gfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgeyB4OiBhdHRyaWJ1dGVzLnBvc2l0aW9uWCwgeTogYXR0cmlidXRlcy5wb3NpdGlvblkgfSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGZvY2FsUG9pbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHBvc2l0aW9uWDogKCBmb2NhbFBvaW50LnggKiAxICksIHBvc2l0aW9uWTogKCBmb2NhbFBvaW50LnkgKiAxICkgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJWaWRlbyBVUkxcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB2aWQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmlkIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIkZvciBjcmVhdGluZyBhIHZpZGVvIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlVzZSBXb3JkUHJlc3MgY2FwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNldHRpbmcgYSBjdXN0b20gY2FwdGlvbiBiZWxvdyB3aWxsIG92ZXJyaWRlIGFueSBXb3JkUHJlc3MgY2FwdGlvbi5cIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnVzZV9jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdXNlX2NhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDYXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNldCBhIGNhcHRpb24gZm9yIHRoZSBoZXJvLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ3JlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY3JlZGl0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNyZWRpdCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJTcGVjaWZ5IGNyZWRpdCBmb3IgdGhlIGhlcm8gbWVkaWEuXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbWV0cmljLnBuZycgKSB9XG5cdFx0XHRhbHQ9XCJtZXRyaWNcIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1tZXRyaWMnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9tZXRyaWMnLCB7XG5cblx0dGl0bGU6IF9fKCAnTWV0cmljJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdG1ldHJpYzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLW1ldHJpYy1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbWV0cmljOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZXRyaWMgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnMTAwJScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ21ldHJpY3Mgb24gdGhpcyBwYWdlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Ly8gQHRvZG86IHRlY2huaWNhbGx5LCB5b3UgY2FuIGhhdmUgYSBjbGVhciBhbmQgZGFyayBtZXRyaWNcblx0XHQvLyBvdXIgYnV0dG9uZ3JvdXAgb25seSBhbGxvd3MgdXNlcnMgdG8gc2VsZWN0IG9uZVxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldHJpYyBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJtZXRyaWMtc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ01ldHJpYyBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdzdGFuZGFyZCcsICdjbGVhcicsICdkYXJrJywgJ292ZXJsYXknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuc3R5bGU7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRJY29uQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvaGVhZGluZycsIHsgbGV2ZWw6IDEsIHBsYWNlaG9sZGVyOiAnTXkgUGFuZWwnIH0gXSxcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXHRbICd1cmktY2wvYnV0dG9uJywge30gXSxcbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9wYW5lbC5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAoICdzdXBlcicgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnY2wtcGFuZWwtc3VwZXInIDogJ2NsLXBhbmVsJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnJldmVyc2UgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHJldmVyc2UnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcGFuZWwnLCB7XG5cblx0dGl0bGU6IF9fKCAnUGFuZWwnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cmV2ZXJzZToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoICdzdXBlcicgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1ibHVyXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdGb3JtYXQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RvIGluY3JlYXNlIHBlcmZvcm1hbmNlLCBzdXBlciBwYW5lbCBwcmV2aWV3cyB3aWxsIGFwcGVhciBzaW1wbGlmaWVkIGluIHRoZSBlZGl0b3Igd2luZG93LicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYW5lbC1mb3JtYXRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1BhbmVsIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3N1cGVyJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJycgOiBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGbGlwIHBhbmVsIGxheW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMucmV2ZXJzZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHJldmVyc2U6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9xdW90ZS5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtcXVvdGUnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3F1b3RlJywge1xuXG5cdHRpdGxlOiBfXyggJ1F1b3RlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHF1b3RlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNpdGF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgaW1hZ2VDbGFzcyA9ICggISEgYXR0cmlidXRlcy5tZWRpYUlEICkgPyAnY2wtcXVvdGUtaW1hZ2UnIDogJyc7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGltYWdlQ2xhc3MgfT5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGJsb2NrcXVvdGU+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcXVvdGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnF1b3RlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RoZSBxdW90ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9ibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0PGNpdGU+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2l0YXRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNpdGF0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ0Fub255bW91cycgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9jaXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQndXJpLWNsL3RhYicsXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFicy5wbmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtdGFicyc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxuY29uc3QgZ2V0VGFic1RlbXBsYXRlID0gKCB0YWJzICkgPT4ge1xuXHRyZXR1cm4gWyAuLi5BcnJheSggdGFicyApIF0ubWFwKCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gWyAndXJpLWNsL3RhYicsIHt9IF07XG5cdH0gKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3RhYnMnLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFicycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0YWJzOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDIsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RhYnMnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50YWJzIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dFRhYnMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhYnM6IG5leHRUYWJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17IDYgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBnZXRUYWJzVGVtcGxhdGUoIGF0dHJpYnV0ZXMudGFicyApIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPVwiYWxsXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5cdCd1cmktY2wvY2FyZCcsXG5cdCd1cmktY2wvbWV0cmljJyxcblx0J3VyaS1jbC9xdW90ZScsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgdGFiIGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFiLnBuZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC90YWInLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFiJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRwYXJlbnQ6IFsgJ3VyaS1jbC90YWJzJyBdLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRpbnNlcnRlcjogZmFsc2UsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXRhYlwiPlxuXHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RhYiBUaXRsZScgKSB9XG5cdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0dGVtcGxhdGVMb2NrPXsgZmFsc2UgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iXSwic291cmNlUm9vdCI6IiJ9