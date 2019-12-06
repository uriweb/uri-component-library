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
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero/block */ "./js/blocks/src/hero/block.js");
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hero_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metric/block */ "./js/blocks/src/metric/block.js");
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metric_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel/block */ "./js/blocks/src/panel/block.js");
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_panel_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote/block */ "./js/blocks/src/quote/block.js");
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_quote_block__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tab */ "./js/blocks/src/tabs/tab.js");
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tabs_tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/block */ "./js/blocks/src/tabs/block.js");
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tabs_block__WEBPACK_IMPORTED_MODULE_8__);




 // disable notices until we iron out their functionality
// import './notice/block'; 






/***/ }),

/***/ "./js/blocks/src/boxout/block.js":
/*!***************************************!*\
  !*** ./js/blocks/src/boxout/block.js ***!
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
    src: URI_CL_URL + 'i/boxout.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = "cl-boxout";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
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
    alignment: {
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
      var classes = classNames(attributes, isSelected);
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __("Title"),
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
    var classes = classNames(attributes);
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
    src: URI_CL_URL + 'i/button.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = "cl-button";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
  }

  if (!!attributes.style) {
    classes += " " + attributes.style;
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

    // generate editor view of the button itself
    var createContentEditForm = function createContentEditForm() {
      var meta;

      if (!!isSelected) {
        meta = wp.element.createElement("form", {
          className: "meta",
          onSubmit: function onSubmit(event) {
            return event.preventDefault();
          }
        }, wp.element.createElement("fieldset", {
          "class": "row link"
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
      } // set the classnames


      var classes = classNames(attributes, isSelected); // set the tooltip

      var title = "";

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-button-block-form"
      }, wp.element.createElement("span", {
        "class": classes,
        title: title
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
        var key = value === 'default' ? '' : value;
        var style = attributes.style == undefined ? '' : attributes.style;
        var isSelected = key === style;
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
    var classes = classNames(attributes);
    return wp.element.createElement("a", {
      "class": classes,
      href: attributes.link,
      title: attributes.tooltip
    }, attributes.text);
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
    URLInput = _wp$blockEditor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

var ALLOWED_MEDIA_TYPES = ['image'];

var customIcon = function customIcon() {
  return wp.element.createElement("svg", {
    width: "20",
    height: "20",
    className: "dashicon"
  }, wp.element.createElement("path", {
    d: "M2,8 L2,16 L16,16 L16,8 L2,8 Z M2,7 L16,7 L16,2 L2,2 L2,7 Z M18,1 L18,17 C18,17 18,18 18,18 C18,18 17,18 17,18 L1,18 C1,18 0,18 0,18 C0,18 0,17 0,17 L0,1 C0,1 0,0 0,0 C0,0 1,0 1,0 L17,0 C17,0 18,0 18,0 C18,0 18,1 18,1 Z M15,15 L3,15 L3,12 L15,12 L15,15 Z"
  }));
};

var classNames = function classNames(attributes, isSelected) {
  var classes = "cl-card";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
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
    tooltip: {
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
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
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
      }
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("form", {
        className: "meta",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, wp.element.createElement("fieldset", {
        "class": "row link"
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
    } // generate editor view of the card itself


    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes, isSelected); // set the tooltip

      var title = "";

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
        "class": "cl-card-text"
      }, wp.element.createElement("h3", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __("Your card title"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        tagname: "p",
        value: attributes.body,
        placeholder: __("Your card text"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("div", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            button: content
          });
        },
        value: attributes.button,
        placeholder: __("Your button text"),
        keepPlaceholderOnFocus: true,
        className: "cl-button"
      }), meta)));
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
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    // @todo: use the media ID to build a src set
    var classes = classNames(attributes);

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

/***/ }),

/***/ "./js/blocks/src/hero/block.js":
/*!*************************************!*\
  !*** ./js/blocks/src/hero/block.js ***!
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
    ButtonGroup = _wp$components.ButtonGroup;
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
    src: URI_CL_URL + 'i/hero.png',
    alt: "button"
  });
};

var randomID = function randomID() {
  // https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};

registerBlockType('uri-cl/hero', {
  title: __('Hero'),
  icon: customIcon,
  category: 'cl-blocks',
  // the mediaID is what goes into the shortcode for front-end display
  // the img and alt are for editor placeholders
  attributes: {
    title: {
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

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
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
      }
    };

    var meta;

    if (!!isSelected) {
      meta = wp.element.createElement("form", {
        className: "meta",
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        }
      }, wp.element.createElement("fieldset", {
        "class": "row link"
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
    } // generate editor view of the hero itself


    var createContentEditForm = function createContentEditForm() {
      if (!attributes.id) {
        attributes.id = randomID();
      }

      var classes = "cl-hero";

      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      }

      if (!!attributes.format) {
        classes += ' ' + attributes.format;
      }

      if (!!isSelected) {
        classes += ' selected';
      }

      if (!!attributes.img) {
        classes += ' has-image';
      } else {
        classes += ' no-image';
      } // set the tooltip


      var title = "";

      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }

      return wp.element.createElement("div", {
        className: "container cl-hero-block-form"
      }, wp.element.createElement("div", {
        className: classes,
        title: title
      }, wp.element.createElement("div", {
        "class": "poster"
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
        "class": "cl-hero-text overlay"
      }, wp.element.createElement("div", {
        "class": "block"
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __("Your hero title"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("p", {
        "class": "subhead"
      }, wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            subhead: content
          });
        },
        value: attributes.subhead,
        placeholder: __("Your hero subtitle"),
        keepPlaceholderOnFocus: true,
        className: "subhead"
      })), wp.element.createElement("span", {
        "class": "cl-button"
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            button: content
          });
        },
        value: attributes.button,
        placeholder: __("Your button text"),
        keepPlaceholderOnFocus: true
      })), meta))));
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
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __("Format")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Hero Format")
      }, ["default", "fullwidth", "super"].map(function (value) {
        // const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        // const key = (value === "default") ? '' : value;
        // const isSelected = key === attributes.format;
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === 'default' ? '' : value;
        var format = attributes.format == undefined ? '' : attributes.format;
        var isSelected = key === format;
        return wp.element.createElement(Button, {
          key: key,
          isDefault: true,
          isPrimary: isSelected,
          "aria-pressed": isSelected,
          onClick: function onClick(content) {
            return setAttributes({
              format: key
            });
          }
        }, capitalizedValue);
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Video URL",
        onChange: function onChange(content) {
          return setAttributes({
            vid: content
          });
        },
        value: attributes.vid,
        className: "meta-field vid",
        help: "For creating a video hero."
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
    }; // send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    // @todo: use the media ID to build a src set
    var classes = "cl-hero";

    if (!!attributes.className) {
      // @todo this gets automatically applied to wrapper... remove it?
      classes += " " + attributes.className;
    }

    if (!!attributes.format) {
      classes += " " + attributes.format;
    }

    var bg = "";

    if (!!attributes.img) {
      bg = "background-image:url(" + attributes.img + ")";
    }

    var still = "still";

    if (!!attributes.vid) {
      still = "poster";
    }

    var button = "";

    if (!!attributes.button && !!attributes.link) {
      button = wp.element.createElement("a", {
        "class": "cl-button",
        href: attributes.link
      }, attributes.button);
    } // @todo add still photo animations... e.g. "animation shift"


    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("div", {
      "class": "overlay"
    }, wp.element.createElement("div", {
      "class": "block"
    }, wp.element.createElement("h1", null, attributes.title), wp.element.createElement("p", null, attributes.subhead), button)), wp.element.createElement("div", {
      id: attributes.id,
      "data-id": attributes.vid,
      "class": still,
      style: bg
    }));
  }
});

/***/ }),

/***/ "./js/blocks/src/metric/block.js":
/*!***************************************!*\
  !*** ./js/blocks/src/metric/block.js ***!
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
    src: URI_CL_URL + 'i/metric.png',
    alt: "metric"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = "cl-metric";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  if (!!attributes.style) {
    classes += " " + attributes.style;
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
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
    alignment: {
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
      var classes = classNames(attributes, isSelected); // set the tooltip

      var title = "";

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
        placeholder: __("100%"),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("span", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            caption: content
          });
        },
        tagname: "p",
        value: attributes.caption,
        placeholder: __("metrics on this page"),
        keepPlaceholderOnFocus: true
      }))));
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
    // @todo: technically, you can have a clear and dark metric
    // 				our buttongroup only allows users to select one


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
        label: __("Metric Style")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Metric Style")
      }, ["standard", "clear", "dark", "overlay"].map(function (value) {
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
      }))))));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var classes = classNames(attributes);
    var title = "";

    if (!!attributes.tooltip) {
      title = attributes.tooltip;
    }

    return wp.element.createElement("div", {
      "class": classes,
      title: title
    }, wp.element.createElement("span", null, attributes.metric), wp.element.createElement("span", null, attributes.caption));
  }
});

/***/ }),

/***/ "./js/blocks/src/panel/block.js":
/*!**************************************!*\
  !*** ./js/blocks/src/panel/block.js ***!
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
    src: URI_CL_URL + 'i/panel.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = "cl-panel";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.reverse) {
    classes += " reverse";
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
    mediaID: {
      type: 'number'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
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
      }
    };

    var classes = classNames(attributes);

    var createContentEditForm = function createContentEditForm() {
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement("figure", {
        "class": "poster"
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
    }; // generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __("Panel Style")
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __("Panel Style")
      }, ["standard", "reverse"].map(function (value) {
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === "standard" ? 'false' : 'true';
        var r = attributes.reverse ? 'true' : 'false';
        var isSelected = key === r;
        return wp.element.createElement(Button, {
          key: key,
          isDefault: true,
          isPrimary: isSelected,
          "aria-pressed": isSelected,
          onClick: function onClick(content) {
            return setAttributes({
              reverse: key === 'true'
            });
          }
        }, capitalizedValue);
      }))))));
    }; // send the editor interfaces to the view


    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var classes = classNames(attributes);
    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("figure", null, wp.element.createElement("img", {
      src: attributes.img,
      alt: attributes.alt
    })), wp.element.createElement("article", null, wp.element.createElement(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./js/blocks/src/quote/block.js":
/*!**************************************!*\
  !*** ./js/blocks/src/quote/block.js ***!
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
    src: URI_CL_URL + 'i/quote.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = "cl-quote";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
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

    // generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID) {
        return wp.element.createElement("img", {
          src: attributes.img,
          alt: attributes.alt,
          className: "image"
        });
      } else {
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
      }
    };

    var classes = classNames(attributes, isSelected);

    var createContentEditForm = function createContentEditForm() {
      var imageClass = !!attributes.mediaID ? "cl-quote-image" : "";
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": classes
      }, wp.element.createElement("div", {
        "class": imageClass
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
      })), wp.element.createElement("blockquote", null, wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })), wp.element.createElement("cite", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            citation: content
          });
        },
        value: attributes.citation,
        placeholder: __("Anonymous"),
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
    }; // send the editor interfaces to the view


    return [createBlockControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var classes = classNames(attributes);
    var imageStyle = "background-image:url(" + attributes.img + ")";
    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("div", {
      "class": "cl-quote-image",
      style: imageStyle
    }), wp.element.createElement("blockquote", null, wp.element.createElement(InnerBlocks.Content, null)), wp.element.createElement("cite", null, attributes.citation));
  }
});

/***/ }),

/***/ "./js/blocks/src/tabs/block.js":
/*!*************************************!*\
  !*** ./js/blocks/src/tabs/block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl;
var _wp$blockEeditor = wp.blockEeditor,
    InspectorControls = _wp$blockEeditor.InspectorControls,
    InnerBlocks = _wp$blockEeditor.InnerBlocks;
var ALLOWED_BLOCKS = ['uri-cl/tab'];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/tabs.png',
    alt: "button"
  });
};

var classNames = function classNames(attributes) {
  var classes = "cl-tabs";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  return classes;
};

var getTabsTemplate = function getTabsTemplate(tabs) {
  return _toConsumableArray(Array(tabs)).map(function (x) {
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
    // generate the image or the add image section
    var classes = classNames(attributes); // generate sidebar inspector controls for other custom attributes

    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(RangeControl, {
        label: __("Tabs"),
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
        "class": classes
      }, wp.element.createElement(InnerBlocks, {
        template: getTabsTemplate(attributes.tabs),
        templateLock: "all",
        allowedBlocks: ALLOWED_BLOCKS
      })));
    }; // send the editor interfaces to the view


    return [createInspectorControls(), createContentEditForm()];
  },
  // end edit
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var classes = classNames(attributes);
    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./js/blocks/src/tabs/tab.js":
/*!***********************************!*\
  !*** ./js/blocks/src/tabs/tab.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/tab.png',
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
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    return wp.element.createElement("div", {
      "class": "cl-tab"
    }, wp.element.createElement(InnerBlocks, {
      templateLock: false
    }));
  },
  // end edit
  save: function save(_ref2) {
    _objectDestructuringEmpty(_ref2);

    return wp.element.createElement("div", {
      "class": "cl-tab"
    }, wp.element.createElement(InnerBlocks.Content, null));
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvaGVyby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL21ldHJpYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL3BhbmVsL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvcXVvdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy90YWJzL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvdGFicy90YWIuanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImJsb2NrRWRpdG9yIiwiUGxhaW5UZXh0IiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwicGxhY2Vob2xkZXIiLCJkcm9wQ2FwIiwiY3VzdG9tSWNvbiIsIlVSSV9DTF9VUkwiLCJjbGFzc05hbWVzIiwiYXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiYWxpZ25tZW50IiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJ0eXBlIiwiZWRpdCIsInNldEF0dHJpYnV0ZXMiLCJjcmVhdGVDb250ZW50RWRpdEZvcm0iLCJjb250ZW50IiwiY3JlYXRlQmxvY2tDb250cm9scyIsInNhdmUiLCJVUkxJbnB1dCIsImNvbXBvbmVudHMiLCJEYXNoaWNvbiIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwiQmFzZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwic3R5bGUiLCJsaW5rIiwidGV4dCIsInRvb2x0aXAiLCJtZXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUluc3BlY3RvckNvbnRyb2xzIiwibWFwIiwidmFsdWUiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImtleSIsInVuZGVmaW5lZCIsIndpdGhOb3RpY2VzIiwiTWVkaWFQbGFjZWhvbGRlciIsIk1lZGlhVXBsb2FkQ2hlY2siLCJBbGlnbm1lbnRUb29sYmFyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsImltZyIsImJvZHkiLCJtZWRpYUlEIiwiYWx0IiwiYnV0dG9uIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJpbnN0cnVjdGlvbnMiLCJtZWRpYSIsInVybCIsImlkIiwib3BlbiIsInJhbmRvbUlEIiwiUzQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJzdWJoZWFkIiwidmlkIiwiZm9ybWF0IiwiYW5pbWF0aW9uIiwiYmciLCJzdGlsbCIsIm1ldHJpYyIsImNhcHRpb24iLCJsZXZlbCIsInJldmVyc2UiLCJyIiwicXVvdGUiLCJjaXRhdGlvbiIsImltYWdlQ2xhc3MiLCJpbWFnZVN0eWxlIiwiUmFuZ2VDb250cm9sIiwiYmxvY2tFZWRpdG9yIiwiZ2V0VGFic1RlbXBsYXRlIiwidGFicyIsIkFycmF5IiwieCIsImRlZmF1bHQiLCJuZXh0VGFicyIsInBhcmVudCIsInN1cHBvcnRzIiwiaW5zZXJ0ZXIiLCJyZXVzYWJsZSIsImh0bWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7SUNUUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVQRyxpQixHQUNHRixFQUFFLENBQUNHLE0sQ0FETkQsaUI7c0JBWUdGLEVBQUUsQ0FBQ0ksVztJQVROQyxTLG1CQUFBQSxTO0lBQ0FDLFEsbUJBQUFBLFE7SUFDQUMsVyxtQkFBQUEsVztJQUNBQyxpQixtQkFBQUEsaUI7SUFDQUMsYSxtQkFBQUEsYTtJQUNBQyxPLG1CQUFBQSxPO0lBQ0FDLFUsbUJBQUFBLFU7SUFDQUMscUIsbUJBQUFBLHFCO0lBQ0FDLFcsbUJBQUFBLFc7QUFHRCxJQUFNQyxjQUFjLEdBQUcsQ0FDdEIsWUFEc0IsRUFFdEIsY0FGc0IsRUFHdEIsZ0JBSHNCLEVBSXRCLFdBSnNCLEVBS3RCLGVBTHNCLENBQXZCO0FBT0EsSUFBTUMsUUFBUSxHQUFHLENBQ2YsQ0FBQyxnQkFBRCxFQUFtQjtBQUFFQyxhQUFXLEVBQUUsd0JBQWY7QUFBeUNDLFNBQU8sRUFBRTtBQUFsRCxDQUFuQixDQURlLENBQWpCOztBQUtBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBR0MsVUFBVSxHQUFHLGNBSnBCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsVUFBRCxFQUFhQyxVQUFiLEVBQTRCO0FBQzlDLE1BQUlDLE9BQU8sR0FBRyxXQUFkOztBQUNBLE1BQUksQ0FBQyxDQUFFRixVQUFVLENBQUNHLFNBQWxCLEVBQThCO0FBQzdCO0FBQ0FELFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNHLFNBQTVCO0FBQ0E7O0FBQ0QsTUFBSSxDQUFDLENBQUVGLFVBQVAsRUFBb0I7QUFDbkJDLFdBQU8sSUFBSSxXQUFYO0FBQ0E7O0FBQ0QsTUFBSSxDQUFDLENBQUVGLFVBQVUsQ0FBQ0ksU0FBbEIsRUFBOEI7QUFDN0JGLFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNJLFNBQTVCO0FBQ0E7O0FBQ0QsU0FBT0YsT0FBUDtBQUNBLENBYkQ7O0FBZ0JBckIsaUJBQWlCLENBQUMsZUFBRCxFQUFrQjtBQUVqQ3dCLE9BQUssRUFBRTNCLEVBQUUsQ0FBQyxRQUFELENBRndCO0FBR2pDNEIsTUFBSSxFQUFFVCxVQUgyQjtBQUlqQ1UsVUFBUSxFQUFFLFdBSnVCO0FBTWxDUCxZQUFVLEVBQUU7QUFDWEssU0FBSyxFQUFFO0FBQ05HLFVBQUksRUFBRTtBQURBLEtBREk7QUFJWEosYUFBUyxFQUFFO0FBQ1ZJLFVBQUksRUFBRTtBQURJO0FBSkEsR0FOc0I7QUFnQmxDQyxNQWhCa0Msc0JBZ0J5QjtBQUFBLFFBQXBEVCxVQUFvRCxRQUFwREEsVUFBb0Q7QUFBQSxRQUF4Q0csU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsUUFBN0JPLGFBQTZCLFFBQTdCQSxhQUE2QjtBQUFBLFFBQWRULFVBQWMsUUFBZEEsVUFBYzs7QUFDMUQ7QUFDQSxRQUFNVSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbkMsVUFBSVQsT0FBTyxHQUFHSCxVQUFVLENBQUNDLFVBQUQsRUFBYUMsVUFBYixDQUF4QjtBQUNBLGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFPQztBQUFaLFNBQ0MscUNBQUkseUJBQUMsU0FBRDtBQUNILGdCQUFRLEVBQUcsa0JBQUFVLE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUVMLGlCQUFLLEVBQUVPO0FBQVQsV0FBRCxDQUFqQjtBQUFBLFNBRGY7QUFFSCxhQUFLLEVBQUdaLFVBQVUsQ0FBQ0ssS0FGaEI7QUFHSCxtQkFBVyxFQUFFM0IsRUFBRSxDQUFDLE9BQUQsQ0FIWjtBQUlILDhCQUFzQixFQUFFO0FBSnJCLFFBQUosQ0FERCxFQU9DLHlCQUFDLFdBQUQ7QUFDQyxxQkFBYSxFQUFHZSxjQURqQjtBQUVDLGdCQUFRLEVBQUVDO0FBRlgsUUFQRCxDQURELENBREQ7QUFnQkEsS0FsQkQsQ0FGMEQsQ0FzQjFEOzs7QUFDQSxRQUFNbUIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2pDLGFBQ0MseUJBQUMsYUFBRDtBQUFlLFdBQUcsRUFBQztBQUFuQixTQUNDLHlCQUFDLHFCQUFEO0FBQ0MsYUFBSyxFQUFHYixVQUFVLENBQUNJLFNBRHBCO0FBRUMsZ0JBQVEsRUFBRyxrQkFBQVEsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRU4scUJBQVMsRUFBRVE7QUFBYixXQUFELENBQWpCO0FBQUE7QUFGbkIsUUFERCxDQUREO0FBU0EsS0FWRCxDQXZCMEQsQ0FxQzFEOzs7QUFDQyxXQUFRLENBQ1JDLG1CQUFtQixFQURYLEVBRVJGLHFCQUFxQixFQUZiLENBQVI7QUFLRCxHQTNEaUM7QUEyRC9CO0FBRUhHLE1BN0RrQyx1QkE2RGI7QUFBQSxRQUFkZCxVQUFjLFNBQWRBLFVBQWM7QUFDcEIsUUFBSUUsT0FBTyxHQUFHSCxVQUFVLENBQUNDLFVBQUQsQ0FBeEI7QUFFQSxXQUNDLHNDQUNDO0FBQUssZUFBT0U7QUFBWixPQUNDLHFDQUFNRixVQUFVLENBQUNLLEtBQWpCLENBREQsRUFFQyx5QkFBQyxXQUFELENBQWEsT0FBYixPQUZELENBREQsQ0FERDtBQVFBO0FBeEVpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztJQ3hEUTNCLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFDQUcsaUIsR0FBc0JGLEVBQUUsQ0FBQ0csTSxDQUF6QkQsaUI7c0JBU0pGLEVBQUUsQ0FBQ0ksVztJQVBOQyxTLG1CQUFBQSxTO0lBQ0FDLFEsbUJBQUFBLFE7SUFDQThCLFEsbUJBQUFBLFE7SUFDQTVCLGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FDLE8sbUJBQUFBLE87SUFDQUUscUIsbUJBQUFBLHFCO3FCQVVHWixFQUFFLENBQUNxQyxVO0lBUE5DLFEsa0JBQUFBLFE7SUFDQUMsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBQyxNLGtCQUFBQSxNO0lBQ0FDLFcsa0JBQUFBLFc7O0FBSUQsSUFBTTFCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBR0MsVUFBVSxHQUFHLGNBSnBCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsVUFBRCxFQUFhQyxVQUFiLEVBQTRCO0FBQzlDLE1BQUlDLE9BQU8sR0FBRyxXQUFkOztBQUNBLE1BQUksQ0FBQyxDQUFFRixVQUFVLENBQUNHLFNBQWxCLEVBQThCO0FBQzdCO0FBQ0FELFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNHLFNBQTVCO0FBQ0E7O0FBQ0QsTUFBSyxDQUFDLENBQUVILFVBQVUsQ0FBQ0ksU0FBbkIsRUFBK0I7QUFDOUJGLFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNJLFNBQTVCO0FBQ0E7O0FBQ0QsTUFBSSxDQUFDLENBQUVKLFVBQVUsQ0FBQ3dCLEtBQWxCLEVBQTBCO0FBQ3pCdEIsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ3dCLEtBQTVCO0FBQ0E7O0FBQ0QsTUFBSSxDQUFDLENBQUV2QixVQUFQLEVBQW9CO0FBQ25CQyxXQUFPLElBQUksV0FBWDtBQUNBOztBQUVELFNBQU9BLE9BQVA7QUFDQSxDQWpCRDs7QUFxQkFyQixpQkFBaUIsQ0FBQyxlQUFELEVBQWtCO0FBRWpDd0IsT0FBSyxFQUFFM0IsRUFBRSxDQUFDLFFBQUQsQ0FGd0I7QUFHakM0QixNQUFJLEVBQUVULFVBSDJCO0FBSWpDVSxVQUFRLEVBQUUsV0FKdUI7QUFNbENQLFlBQVUsRUFBRTtBQUNYeUIsUUFBSSxFQUFFO0FBQ0xqQixVQUFJLEVBQUU7QUFERCxLQURLO0FBSVhrQixRQUFJLEVBQUU7QUFDTGxCLFVBQUksRUFBRTtBQURELEtBSks7QUFPWG1CLFdBQU8sRUFBRTtBQUNSbkIsVUFBSSxFQUFFO0FBREUsS0FQRTtBQVVYZ0IsU0FBSyxFQUFFO0FBQ05oQixVQUFJLEVBQUU7QUFEQTtBQVZJLEdBTnNCO0FBdUJsQ0MsTUF2QmtDLHNCQXVCeUI7QUFBQSxRQUFwRFQsVUFBb0QsUUFBcERBLFVBQW9EO0FBQUEsUUFBeENHLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLFFBQTdCTyxhQUE2QixRQUE3QkEsYUFBNkI7QUFBQSxRQUFkVCxVQUFjLFFBQWRBLFVBQWM7O0FBRTFEO0FBQ0EsUUFBTVUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBRW5DLFVBQUlpQixJQUFKOztBQUNBLFVBQUssQ0FBQyxDQUFFM0IsVUFBUixFQUFxQjtBQUNwQjJCLFlBQUksR0FDSDtBQUNDLG1CQUFTLEVBQUMsTUFEWDtBQUVDLGtCQUFRLEVBQUcsa0JBQUVDLEtBQUY7QUFBQSxtQkFBYUEsS0FBSyxDQUFDQyxjQUFOLEVBQWI7QUFBQTtBQUZaLFdBSUM7QUFBVSxtQkFBTTtBQUFoQixXQUNBO0FBQU8sZUFBSyxFQUFDO0FBQWIsV0FBeUIseUJBQUMsUUFBRDtBQUFVLGNBQUksRUFBQztBQUFmLFVBQXpCLENBREEsRUFFQSx5QkFBQyxRQUFEO0FBQ0MsZUFBSyxFQUFHOUIsVUFBVSxDQUFDeUIsSUFEcEI7QUFFQyxrQkFBUSxFQUFHLGtCQUFFYixPQUFGO0FBQUEsbUJBQWVGLGFBQWEsQ0FBRTtBQUFFZSxrQkFBSSxFQUFFYjtBQUFSLGFBQUYsQ0FBNUI7QUFBQSxXQUZaO0FBR0MscUJBQVcsRUFBQyxzQkFIYjtBQUlDLG1CQUFTLEVBQUM7QUFKWCxVQUZBLENBSkQsQ0FERDtBQWdCQSxPQXBCa0MsQ0FxQm5DOzs7QUFDQSxVQUFJVixPQUFPLEdBQUdILFVBQVUsQ0FBRUMsVUFBRixFQUFjQyxVQUFkLENBQXhCLENBdEJtQyxDQXVCbkM7O0FBQ0EsVUFBSUksS0FBSyxHQUFHLEVBQVo7O0FBQ0EsVUFBSSxDQUFDLENBQUVMLFVBQVUsQ0FBQzJCLE9BQWxCLEVBQTRCO0FBQzNCdEIsYUFBSyxHQUFHTCxVQUFVLENBQUMyQixPQUFuQjtBQUNBOztBQUNELGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFNLGlCQUFPekIsT0FBYjtBQUFzQixhQUFLLEVBQUVHO0FBQTdCLFNBQ0MseUJBQUMsU0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUFPLE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUVnQixnQkFBSSxFQUFFZDtBQUFSLFdBQUQsQ0FBakI7QUFBQSxTQURuQjtBQUVDLGFBQUssRUFBR1osVUFBVSxDQUFDMEIsSUFGcEI7QUFHQyxtQkFBVyxFQUFFaEQsRUFBRSxDQUFDLGtCQUFELENBSGhCO0FBSUMsOEJBQXNCLEVBQUUsSUFKekI7QUFLQyxpQkFBUyxFQUFDO0FBTFgsUUFERCxDQURELEVBVUdrRCxJQVZILENBREQ7QUFjQSxLQTFDRCxDQUgwRCxDQStDMUQ7QUFDQTs7O0FBQ0EsUUFBTWYsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2pDLGFBQ0MseUJBQUMsYUFBRDtBQUFlLFdBQUcsRUFBQztBQUFuQixTQUNDLHlCQUFDLHFCQUFEO0FBQ0MsYUFBSyxFQUFHYixVQUFVLENBQUNJLFNBRHBCO0FBRUMsZ0JBQVEsRUFBRyxrQkFBQVEsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRU4scUJBQVMsRUFBRVE7QUFBYixXQUFELENBQWpCO0FBQUE7QUFGbkIsUUFERCxDQUREO0FBU0EsS0FWRCxDQWpEMEQsQ0E4RDFEOzs7QUFDQSxRQUFNbUIsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUdyRCxFQUFFLENBQUUsY0FBRjtBQURYLFNBR0MseUJBQUMsV0FBRDtBQUFhLHNCQUFhQSxFQUFFLENBQUUsY0FBRjtBQUE1QixTQUNHLENBQUUsU0FBRixFQUFhLFdBQWIsRUFBMEIsVUFBMUIsRUFBdUNzRCxHQUF2QyxDQUE0QyxVQUFFQyxLQUFGLEVBQWE7QUFFMUQsWUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEtBQWdDSCxLQUFLLENBQUNJLEtBQU4sQ0FBWSxDQUFaLENBQXpEO0FBQ0EsWUFBTUMsR0FBRyxHQUFJTCxLQUFLLEtBQUssU0FBWCxHQUF3QixFQUF4QixHQUE2QkEsS0FBekM7QUFDQSxZQUFNVCxLQUFLLEdBQUl4QixVQUFVLENBQUN3QixLQUFYLElBQW9CZSxTQUFyQixHQUFrQyxFQUFsQyxHQUF1Q3ZDLFVBQVUsQ0FBQ3dCLEtBQWhFO0FBQ0EsWUFBTXZCLFVBQVUsR0FBSXFDLEdBQUcsS0FBS2QsS0FBNUI7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUdjLEdBRFA7QUFFQyxtQkFBUyxNQUZWO0FBR0MsbUJBQVMsRUFBR3JDLFVBSGI7QUFJQywwQkFBZUEsVUFKaEI7QUFLQyxpQkFBTyxFQUFHLGlCQUFBVyxPQUFPO0FBQUEsbUJBQUlGLGFBQWEsQ0FBQztBQUFFYyxtQkFBSyxFQUFFYztBQUFULGFBQUQsQ0FBakI7QUFBQTtBQUxsQixXQU9HSixnQkFQSCxDQUREO0FBV0EsT0FsQkMsQ0FESCxDQUhELENBREQsQ0FERCxFQTZCQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBQyxVQURQO0FBRUMsZ0JBQVEsRUFBRyxrQkFBQXRCLE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUVpQixtQkFBTyxFQUFFZjtBQUFYLFdBQUQsQ0FBakI7QUFBQSxTQUZuQjtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDMkIsT0FIcEI7QUFJQyxpQkFBUyxFQUFDO0FBSlgsUUFERCxDQTdCRCxDQURELENBREQ7QUEyQ0EsS0E1Q0QsQ0EvRDBELENBNkcxRDs7O0FBQ0MsV0FBUSxDQUNSO0FBQ0FJLDJCQUF1QixFQUZmLEVBR1JwQixxQkFBcUIsRUFIYixDQUFSO0FBTUQsR0EzSWlDO0FBMkkvQjtBQUVIRyxNQTdJa0MsdUJBNkliO0FBQUEsUUFBZGQsVUFBYyxTQUFkQSxVQUFjO0FBRXBCLFFBQUlFLE9BQU8sR0FBR0gsVUFBVSxDQUFDQyxVQUFELENBQXhCO0FBRUEsV0FDQztBQUFHLGVBQU9FLE9BQVY7QUFBbUIsVUFBSSxFQUFHRixVQUFVLENBQUN5QixJQUFyQztBQUE0QyxXQUFLLEVBQUd6QixVQUFVLENBQUMyQjtBQUEvRCxPQUNHM0IsVUFBVSxDQUFDMEIsSUFEZCxDQUREO0FBTUE7QUF2SmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0lDdkRRaEQsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUNBRyxpQixHQUFzQkYsRUFBRSxDQUFDRyxNLENBQXpCRCxpQjtxQkFXSkYsRUFBRSxDQUFDcUMsVTtJQVROQyxRLGtCQUFBQSxRO0lBQ0EzQixVLGtCQUFBQSxVO0lBQ0E0QixTLGtCQUFBQSxTO0lBQ0FDLFEsa0JBQUFBLFE7SUFDQTlCLE8sa0JBQUFBLE87SUFDQW1ELFcsa0JBQUFBLFc7SUFDQXBCLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBQyxNLGtCQUFBQSxNO3NCQWFHM0MsRUFBRSxDQUFDSSxXO0lBVk5LLGEsbUJBQUFBLGE7SUFDQUQsaUIsbUJBQUFBLGlCO0lBQ0FJLHFCLG1CQUFBQSxxQjtJQUNBa0QsZ0IsbUJBQUFBLGdCO0lBQ0F2RCxXLG1CQUFBQSxXO0lBQ0F3RCxnQixtQkFBQUEsZ0I7SUFDQUMsZ0IsbUJBQUFBLGdCO0lBQ0ExRCxRLG1CQUFBQSxRO0lBQ0FELFMsbUJBQUFBLFM7SUFDQStCLFEsbUJBQUFBLFEsRUFJRDs7QUFFQSxJQUFNNkIsbUJBQW1CLEdBQUcsQ0FBRSxPQUFGLENBQTVCOztBQUdBLElBQU0vQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLFNBQ0M7QUFDQyxTQUFLLEVBQUMsSUFEUDtBQUVDLFVBQU0sRUFBQyxJQUZSO0FBR0MsYUFBUyxFQUFDO0FBSFgsS0FLQztBQUFNLEtBQUMsRUFBQztBQUFSLElBTEQsQ0FERDtBQVNBLENBVkQ7O0FBWUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsVUFBRCxFQUFhQyxVQUFiLEVBQTRCO0FBQzlDLE1BQUlDLE9BQU8sR0FBRyxTQUFkOztBQUNBLE1BQUksQ0FBQyxDQUFFRixVQUFVLENBQUNHLFNBQWxCLEVBQThCO0FBQzdCO0FBQ0FELFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNHLFNBQTVCO0FBQ0E7O0FBQ0QsTUFBSSxDQUFDLENBQUVILFVBQVUsQ0FBQ0ksU0FBbEIsRUFBOEI7QUFDN0JGLFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNJLFNBQTVCO0FBQ0E7O0FBRUQsTUFBSSxDQUFDLENBQUVILFVBQVAsRUFBb0I7QUFDbkJDLFdBQU8sSUFBSSxXQUFYO0FBQ0E7O0FBRUQsTUFBSyxDQUFDLENBQUVGLFVBQVUsQ0FBQzZDLEdBQW5CLEVBQXlCO0FBQ3hCM0MsV0FBTyxJQUFJLFlBQVg7QUFDQSxHQUZELE1BRU87QUFDTkEsV0FBTyxJQUFJLFdBQVg7QUFDQTs7QUFHRCxTQUFPQSxPQUFQO0FBQ0EsQ0F0QkQ7O0FBeUJBckIsaUJBQWlCLENBQUMsYUFBRCxFQUFnQjtBQUUvQndCLE9BQUssRUFBRTNCLEVBQUUsQ0FBQyxNQUFELENBRnNCO0FBRy9CNEIsTUFBSSxFQUFFVCxVQUh5QjtBQUkvQlUsVUFBUSxFQUFFLFdBSnFCO0FBTWhDO0FBQ0E7QUFDQVAsWUFBVSxFQUFFO0FBQ1hLLFNBQUssRUFBRTtBQUNORyxVQUFJLEVBQUU7QUFEQSxLQURJO0FBSVhzQyxRQUFJLEVBQUU7QUFDTHRDLFVBQUksRUFBRTtBQURELEtBSks7QUFPWGlCLFFBQUksRUFBRTtBQUNMakIsVUFBSSxFQUFFO0FBREQsS0FQSztBQVVYdUMsV0FBTyxFQUFFO0FBQ1J2QyxVQUFJLEVBQUU7QUFERSxLQVZFO0FBYVhxQyxPQUFHLEVBQUU7QUFDSnJDLFVBQUksRUFBRTtBQURGLEtBYk07QUFnQlh3QyxPQUFHLEVBQUU7QUFDSnhDLFVBQUksRUFBRTtBQURGLEtBaEJNO0FBbUJYeUMsVUFBTSxFQUFFO0FBQ1B6QyxVQUFJLEVBQUU7QUFEQyxLQW5CRztBQXNCWG1CLFdBQU8sRUFBRTtBQUNSbkIsVUFBSSxFQUFFO0FBREUsS0F0QkU7QUF5QlhKLGFBQVMsRUFBRTtBQUNWSSxVQUFJLEVBQUU7QUFESTtBQXpCQSxHQVJvQjtBQXVDaENDLE1BdkNnQyxzQkF1QzJCO0FBQUEsUUFBcERULFVBQW9ELFFBQXBEQSxVQUFvRDtBQUFBLFFBQXhDRyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxRQUE3Qk8sYUFBNkIsUUFBN0JBLGFBQTZCO0FBQUEsUUFBZFQsVUFBYyxRQUFkQSxVQUFjOztBQUUxRDtBQUNBLFFBQU1pRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBZTtBQUNyQyxVQUFHbkQsVUFBVSxDQUFDK0MsT0FBZCxFQUF1QjtBQUN0QixlQUNDO0FBQ0MsYUFBRyxFQUFHL0MsVUFBVSxDQUFDNkMsR0FEbEI7QUFFQyxhQUFHLEVBQUc3QyxVQUFVLENBQUNnRCxHQUZsQjtBQUdDLG1CQUFTLEVBQUM7QUFIWCxVQUREO0FBT0EsT0FSRCxNQVFPO0FBQ04sZUFDQyx5QkFBQyxnQkFBRDtBQUNDLGNBQUksRUFBRyxjQURSO0FBRUMsbUJBQVMsRUFBRzdDLFNBRmI7QUFHQyxnQkFBTSxFQUFHO0FBQ1JFLGlCQUFLLEVBQUUsY0FEQztBQUVSK0Msd0JBQVksRUFBRTFFLEVBQUUsQ0FBRSxxRUFBRjtBQUZSLFdBSFY7QUFPQyxrQkFBUSxFQUFHLGtCQUFBMkUsS0FBSyxFQUFJO0FBQUUzQyx5QkFBYSxDQUFDO0FBQ25Dc0MsaUJBQUcsRUFBRUssS0FBSyxDQUFDTCxHQUR3QjtBQUVuQ0gsaUJBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZ3QjtBQUduQ1AscUJBQU8sRUFBRU0sS0FBSyxDQUFDRTtBQUhvQixhQUFELENBQWI7QUFJakIsV0FYTjtBQVlDLGdCQUFNLEVBQUMsU0FaUjtBQWFDLHNCQUFZLEVBQUdYO0FBYmhCLFVBREQ7QUFpQkE7QUFDRCxLQTVCRDs7QUE4QkEsUUFBSWhCLElBQUo7O0FBQ0EsUUFBSSxDQUFDLENBQUUzQixVQUFQLEVBQW9CO0FBQ2xCMkIsVUFBSSxHQUNIO0FBQ0MsaUJBQVMsRUFBQyxNQURYO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRUMsS0FBRjtBQUFBLGlCQUFhQSxLQUFLLENBQUNDLGNBQU4sRUFBYjtBQUFBO0FBRlosU0FJQztBQUFVLGlCQUFNO0FBQWhCLFNBQ0E7QUFBTyxhQUFLLEVBQUM7QUFBYixTQUF5Qix5QkFBQyxRQUFEO0FBQVUsWUFBSSxFQUFDO0FBQWYsUUFBekIsQ0FEQSxFQUVBLHlCQUFDLFFBQUQ7QUFDQyxhQUFLLEVBQUc5QixVQUFVLENBQUN5QixJQURwQjtBQUVDLGdCQUFRLEVBQUcsa0JBQUViLE9BQUY7QUFBQSxpQkFBZUYsYUFBYSxDQUFFO0FBQUVlLGdCQUFJLEVBQUViO0FBQVIsV0FBRixDQUE1QjtBQUFBLFNBRlo7QUFHQyxtQkFBVyxFQUFDLHNCQUhiO0FBSUMsaUJBQVMsRUFBQztBQUpYLFFBRkEsQ0FKRCxDQUREO0FBaUJELEtBcER5RCxDQXNEMUQ7OztBQUNBLFFBQU1ELHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNuQyxVQUFJVCxPQUFPLEdBQUdILFVBQVUsQ0FBRUMsVUFBRixFQUFjQyxVQUFkLENBQXhCLENBRG1DLENBR25DOztBQUNBLFVBQUlJLEtBQUssR0FBRyxFQUFaOztBQUNBLFVBQUksQ0FBQyxDQUFFTCxVQUFVLENBQUMyQixPQUFsQixFQUE0QjtBQUMzQnRCLGFBQUssR0FBR0wsVUFBVSxDQUFDMkIsT0FBbkI7QUFDQTs7QUFDRCxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBUyxFQUFFekIsT0FBaEI7QUFBeUIsYUFBSyxFQUFFRztBQUFoQyxTQUVDLHlCQUFDLFdBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFBZ0QsS0FBSyxFQUFJO0FBQUUzQyx1QkFBYSxDQUFDO0FBQ25Dc0MsZUFBRyxFQUFFSyxLQUFLLENBQUNMLEdBRHdCO0FBRW5DSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGd0I7QUFHbkNQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIb0IsV0FBRCxDQUFiO0FBSWpCLFNBTE47QUFNQyxZQUFJLEVBQUMsT0FOTjtBQU9DLGFBQUssRUFBR3ZELFVBQVUsQ0FBQytDLE9BUHBCO0FBUUMsY0FBTSxFQUFHO0FBQUEsY0FBR1MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsaUJBQWNOLGNBQWMsQ0FBQ00sSUFBRCxDQUE1QjtBQUFBO0FBUlYsUUFGRCxFQWFDO0FBQUssaUJBQU07QUFBWCxTQUNBLHFDQUFJLHlCQUFDLFNBQUQ7QUFDSCxnQkFBUSxFQUFHLGtCQUFBNUMsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRUwsaUJBQUssRUFBRU87QUFBVCxXQUFELENBQWpCO0FBQUEsU0FEZjtBQUVILGFBQUssRUFBR1osVUFBVSxDQUFDSyxLQUZoQjtBQUdILG1CQUFXLEVBQUUzQixFQUFFLENBQUMsaUJBQUQsQ0FIWjtBQUlILDhCQUFzQixFQUFFO0FBSnJCLFFBQUosQ0FEQSxFQU9BLHlCQUFDLFFBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFBa0MsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRW9DLGdCQUFJLEVBQUVsQztBQUFSLFdBQUQsQ0FBakI7QUFBQSxTQURuQjtBQUVDLGVBQU8sRUFBQyxHQUZUO0FBR0MsYUFBSyxFQUFHWixVQUFVLENBQUM4QyxJQUhwQjtBQUlDLG1CQUFXLEVBQUVwRSxFQUFFLENBQUMsZ0JBQUQsQ0FKaEI7QUFLQyw4QkFBc0IsRUFBRTtBQUx6QixRQVBBLENBYkQsRUE0QkMsc0NBQ0MseUJBQUMsU0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUFrQyxPQUFPO0FBQUEsaUJBQUlGLGFBQWEsQ0FBQztBQUFFdUMsa0JBQU0sRUFBRXJDO0FBQVYsV0FBRCxDQUFqQjtBQUFBLFNBRG5CO0FBRUMsYUFBSyxFQUFHWixVQUFVLENBQUNpRCxNQUZwQjtBQUdDLG1CQUFXLEVBQUV2RSxFQUFFLENBQUMsa0JBQUQsQ0FIaEI7QUFJQyw4QkFBc0IsRUFBRSxJQUp6QjtBQUtDLGlCQUFTLEVBQUM7QUFMWCxRQURELEVBUUdrRCxJQVJILENBNUJELENBREQsQ0FERDtBQTJDQSxLQW5ERCxDQXZEMEQsQ0E0RzFEOzs7QUFDQSxRQUFNZixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDakMsYUFDQyx5QkFBQyxhQUFEO0FBQWUsV0FBRyxFQUFDO0FBQW5CLFNBQ0MseUJBQUMscUJBQUQ7QUFDQyxhQUFLLEVBQUdiLFVBQVUsQ0FBQ0ksU0FEcEI7QUFFQyxnQkFBUSxFQUFHLGtCQUFBUSxPQUFPO0FBQUEsaUJBQUlGLGFBQWEsQ0FBQztBQUFFTixxQkFBUyxFQUFFUTtBQUFiLFdBQUQsQ0FBakI7QUFBQTtBQUZuQixRQURELEVBTUcsQ0FBQyxDQUFFWixVQUFVLENBQUM2QyxHQUFkLElBQ0YseUJBQUMsZ0JBQUQsUUFDQyx5QkFBQyxPQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUFRLEtBQUssRUFBSTtBQUFFM0MsdUJBQWEsQ0FBQztBQUNuQ3NDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQUR3QjtBQUVuQ0gsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRndCO0FBR25DUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSG9CLFdBQUQsQ0FBYjtBQUlqQixTQUxOO0FBTUMsb0JBQVksRUFBR1gsbUJBTmhCO0FBT0MsYUFBSyxFQUFHNUMsVUFBVSxDQUFDK0MsT0FQcEI7QUFRQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFDUix5QkFBQyxVQUFEO0FBQ0MscUJBQVMsRUFBQyw2QkFEWDtBQUVDLGlCQUFLLEVBQUc5RSxFQUFFLENBQUUsWUFBRixDQUZYO0FBR0MsZ0JBQUksRUFBQyxNQUhOO0FBSUMsbUJBQU8sRUFBRzhFO0FBSlgsWUFEUTtBQUFBO0FBUlYsUUFERCxDQURELENBUEQsQ0FERDtBQWtDQSxLQW5DRCxDQTdHMEQsQ0FrSjFEOzs7QUFDQSxRQUFNekIsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUMsVUFEUDtBQUVDLGdCQUFRLEVBQUcsa0JBQUFuQixPQUFPO0FBQUEsaUJBQUlGLGFBQWEsQ0FBQztBQUFFaUIsbUJBQU8sRUFBRWY7QUFBWCxXQUFELENBQWpCO0FBQUEsU0FGbkI7QUFHQyxhQUFLLEVBQUdaLFVBQVUsQ0FBQzJCLE9BSHBCO0FBSUMsaUJBQVMsRUFBQztBQUpYLFFBREQsQ0FERCxDQURELENBREQ7QUFjQSxLQWZELENBbkowRCxDQW9LMUQ7OztBQUNDLFdBQVEsQ0FDUmQsbUJBQW1CLEVBRFgsRUFFUmtCLHVCQUF1QixFQUZmLEVBR1JwQixxQkFBcUIsRUFIYixDQUFSO0FBTUQsR0FsTitCO0FBa043QjtBQUVIRyxNQXBOZ0MsdUJBb05YO0FBQUEsUUFBZGQsVUFBYyxTQUFkQSxVQUFjO0FBRXBCO0FBRUEsUUFBSUUsT0FBTyxHQUFHSCxVQUFVLENBQUNDLFVBQUQsQ0FBeEI7O0FBRUEsUUFBSyxDQUFDLENBQUVBLFVBQVUsQ0FBQ0ksU0FBbkIsRUFBK0I7QUFDOUJGLGFBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNJLFNBQTVCO0FBQ0E7O0FBQ0QsV0FDQyxzQ0FDQztBQUFHLGVBQU9GLE9BQVY7QUFBbUIsVUFBSSxFQUFHRixVQUFVLENBQUN5QjtBQUFyQyxPQUNDO0FBQUssU0FBRyxFQUFHekIsVUFBVSxDQUFDNkMsR0FBdEI7QUFBNEIsU0FBRyxFQUFHN0MsVUFBVSxDQUFDZ0Q7QUFBN0MsTUFERCxFQUVDO0FBQUssZUFBTTtBQUFYLE9BQ0MscUNBQU1oRCxVQUFVLENBQUNLLEtBQWpCLENBREQsRUFFQyx5QkFBQyxRQUFELENBQVUsT0FBVjtBQUNDLGFBQU8sRUFBQyxHQURUO0FBRUMsV0FBSyxFQUFHTCxVQUFVLENBQUM4QztBQUZwQixNQUZELENBRkQsRUFTQztBQUFLLGVBQU07QUFBWCxPQUF5QjlDLFVBQVUsQ0FBQ2lELE1BQXBDLENBVEQsQ0FERCxDQUREO0FBaUJBO0FBOU8rQixDQUFoQixDQUFqQixDOzs7Ozs7Ozs7OztJQ3JFUXZFLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFDQUcsaUIsR0FBc0JGLEVBQUUsQ0FBQ0csTSxDQUF6QkQsaUI7cUJBWUpGLEVBQUUsQ0FBQ3FDLFU7SUFWTkMsUSxrQkFBQUEsUTtJQUNBM0IsVSxrQkFBQUEsVTtJQUNBNEIsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0E5QixPLGtCQUFBQSxPO0lBQ0FtRCxXLGtCQUFBQSxXO0lBQ0FwQixXLGtCQUFBQSxXO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQUMsTSxrQkFBQUEsTTtJQUNBQyxXLGtCQUFBQSxXO3NCQWFHNUMsRUFBRSxDQUFDSSxXO0lBVk5LLGEsbUJBQUFBLGE7SUFDQUQsaUIsbUJBQUFBLGlCO0lBQ0FJLHFCLG1CQUFBQSxxQjtJQUNBa0QsZ0IsbUJBQUFBLGdCO0lBQ0F2RCxXLG1CQUFBQSxXO0lBQ0F3RCxnQixtQkFBQUEsZ0I7SUFDQUMsZ0IsbUJBQUFBLGdCO0lBQ0ExRCxRLG1CQUFBQSxRO0lBQ0FELFMsbUJBQUFBLFM7SUFDQStCLFEsbUJBQUFBLFEsRUFJRDs7QUFFQSxJQUFNNkIsbUJBQW1CLEdBQUcsQ0FBRSxPQUFGLENBQTVCOztBQUdBLElBQU0vQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLFNBQ0M7QUFDQyxTQUFLLEVBQUMsSUFEUDtBQUVDLFVBQU0sRUFBQyxJQUZSO0FBR0MsYUFBUyxFQUFDLFVBSFg7QUFJQyxPQUFHLEVBQUdDLFVBQVUsR0FBRyxZQUpwQjtBQUtDLE9BQUcsRUFBQztBQUxMLElBREQ7QUFTQSxDQVZEOztBQVlBLElBQU0yRCxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBTTtBQUNkLFdBQU8sQ0FBRSxDQUFDLElBQUVDLElBQUksQ0FBQ0MsTUFBTCxFQUFILElBQWtCLE9BQW5CLEdBQTRCLENBQTdCLEVBQWdDQyxRQUFoQyxDQUF5QyxFQUF6QyxFQUE2Q0MsU0FBN0MsQ0FBdUQsQ0FBdkQsQ0FBUDtBQUNBLEdBRkQ7O0FBR0EsU0FBUUosRUFBRSxLQUFHQSxFQUFFLEVBQVAsR0FBVSxHQUFWLEdBQWNBLEVBQUUsRUFBaEIsR0FBbUIsR0FBbkIsR0FBdUJBLEVBQUUsRUFBekIsR0FBNEIsR0FBNUIsR0FBZ0NBLEVBQUUsRUFBbEMsR0FBcUMsR0FBckMsR0FBeUNBLEVBQUUsRUFBM0MsR0FBOENBLEVBQUUsRUFBaEQsR0FBbURBLEVBQUUsRUFBN0Q7QUFDQSxDQU5EOztBQVNBN0UsaUJBQWlCLENBQUMsYUFBRCxFQUFnQjtBQUUvQndCLE9BQUssRUFBRTNCLEVBQUUsQ0FBQyxNQUFELENBRnNCO0FBRy9CNEIsTUFBSSxFQUFFVCxVQUh5QjtBQUkvQlUsVUFBUSxFQUFFLFdBSnFCO0FBTWhDO0FBQ0E7QUFDQVAsWUFBVSxFQUFFO0FBQ1hLLFNBQUssRUFBRTtBQUNORyxVQUFJLEVBQUU7QUFEQSxLQURJO0FBSVh1RCxXQUFPLEVBQUU7QUFDUnZELFVBQUksRUFBRTtBQURFLEtBSkU7QUFPWGlCLFFBQUksRUFBRTtBQUNMakIsVUFBSSxFQUFFO0FBREQsS0FQSztBQVVYdUMsV0FBTyxFQUFFO0FBQ1J2QyxVQUFJLEVBQUU7QUFERSxLQVZFO0FBYVgrQyxNQUFFLEVBQUU7QUFDSC9DLFVBQUksRUFBRTtBQURILEtBYk87QUFnQlh3RCxPQUFHLEVBQUU7QUFDSnhELFVBQUksRUFBRTtBQURGLEtBaEJNO0FBbUJYcUMsT0FBRyxFQUFFO0FBQ0pyQyxVQUFJLEVBQUU7QUFERixLQW5CTTtBQXNCWHdDLE9BQUcsRUFBRTtBQUNKeEMsVUFBSSxFQUFFO0FBREYsS0F0Qk07QUF5Qlh5QyxVQUFNLEVBQUU7QUFDUHpDLFVBQUksRUFBRTtBQURDLEtBekJHO0FBNEJYbUIsV0FBTyxFQUFFO0FBQ1JuQixVQUFJLEVBQUU7QUFERSxLQTVCRTtBQStCWHlELFVBQU0sRUFBRTtBQUNQekQsVUFBSSxFQUFFO0FBREMsS0EvQkc7QUFrQ1gwRCxhQUFTLEVBQUU7QUFDVjFELFVBQUksRUFBRTtBQURJO0FBbENBLEdBUm9CO0FBZ0RoQ0MsTUFoRGdDLHNCQWdEMkI7QUFBQSxRQUFwRFQsVUFBb0QsUUFBcERBLFVBQW9EO0FBQUEsUUFBeENHLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLFFBQTdCTyxhQUE2QixRQUE3QkEsYUFBNkI7QUFBQSxRQUFkVCxVQUFjLFFBQWRBLFVBQWM7O0FBRTFEO0FBQ0EsUUFBTWlELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsU0FBRCxFQUFlO0FBQ3JDLFVBQUduRCxVQUFVLENBQUMrQyxPQUFkLEVBQXVCO0FBQ3RCLGVBQ0M7QUFDQyxhQUFHLEVBQUcvQyxVQUFVLENBQUM2QyxHQURsQjtBQUVDLGFBQUcsRUFBRzdDLFVBQVUsQ0FBQ2dELEdBRmxCO0FBR0MsbUJBQVMsRUFBQztBQUhYLFVBREQ7QUFPQSxPQVJELE1BUU87QUFDTixlQUNDLHlCQUFDLGdCQUFEO0FBQ0MsY0FBSSxFQUFHLGNBRFI7QUFFQyxtQkFBUyxFQUFHN0MsU0FGYjtBQUdDLGdCQUFNLEVBQUc7QUFDUkUsaUJBQUssRUFBRSxjQURDO0FBRVIrQyx3QkFBWSxFQUFFMUUsRUFBRSxDQUFFLHFFQUFGO0FBRlIsV0FIVjtBQU9DLGtCQUFRLEVBQUcsa0JBQUEyRSxLQUFLLEVBQUk7QUFBRTNDLHlCQUFhLENBQUM7QUFDbkNzQyxpQkFBRyxFQUFFSyxLQUFLLENBQUNMLEdBRHdCO0FBRW5DSCxpQkFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRndCO0FBR25DUCxxQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSG9CLGFBQUQsQ0FBYjtBQUlqQixXQVhOO0FBWUMsZ0JBQU0sRUFBQyxTQVpSO0FBYUMsc0JBQVksRUFBR1g7QUFiaEIsVUFERDtBQWlCQTtBQUNELEtBNUJEOztBQThCQSxRQUFJaEIsSUFBSjs7QUFDQSxRQUFJLENBQUMsQ0FBRTNCLFVBQVAsRUFBb0I7QUFDbEIyQixVQUFJLEdBQ0g7QUFDQyxpQkFBUyxFQUFDLE1BRFg7QUFFQyxnQkFBUSxFQUFHLGtCQUFFQyxLQUFGO0FBQUEsaUJBQWFBLEtBQUssQ0FBQ0MsY0FBTixFQUFiO0FBQUE7QUFGWixTQUlDO0FBQVUsaUJBQU07QUFBaEIsU0FDQTtBQUFPLGFBQUssRUFBQztBQUFiLFNBQXlCLHlCQUFDLFFBQUQ7QUFBVSxZQUFJLEVBQUM7QUFBZixRQUF6QixDQURBLEVBRUEseUJBQUMsUUFBRDtBQUNDLGFBQUssRUFBRzlCLFVBQVUsQ0FBQ3lCLElBRHBCO0FBRUMsZ0JBQVEsRUFBRyxrQkFBRWIsT0FBRjtBQUFBLGlCQUFlRixhQUFhLENBQUU7QUFBRWUsZ0JBQUksRUFBRWI7QUFBUixXQUFGLENBQTVCO0FBQUEsU0FGWjtBQUdDLG1CQUFXLEVBQUMsc0JBSGI7QUFJQyxpQkFBUyxFQUFDO0FBSlgsUUFGQSxDQUpELENBREQ7QUFpQkQsS0FwRHlELENBc0QxRDs7O0FBQ0EsUUFBTUQscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBRW5DLFVBQUksQ0FBRVgsVUFBVSxDQUFDdUQsRUFBakIsRUFBc0I7QUFDckJ2RCxrQkFBVSxDQUFDdUQsRUFBWCxHQUFnQkUsUUFBUSxFQUF4QjtBQUNBOztBQUVELFVBQUl2RCxPQUFPLEdBQUcsU0FBZDs7QUFDQSxVQUFJLENBQUMsQ0FBRUYsVUFBVSxDQUFDd0IsS0FBbEIsRUFBMEI7QUFDekJ0QixlQUFPLElBQUksTUFBTUYsVUFBVSxDQUFDd0IsS0FBNUI7QUFDQTs7QUFDRCxVQUFJLENBQUMsQ0FBRXhCLFVBQVUsQ0FBQ2lFLE1BQWxCLEVBQTJCO0FBQzFCL0QsZUFBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ2lFLE1BQTVCO0FBQ0E7O0FBQ0QsVUFBSSxDQUFDLENBQUVoRSxVQUFQLEVBQW9CO0FBQ25CQyxlQUFPLElBQUksV0FBWDtBQUNBOztBQUNELFVBQUssQ0FBQyxDQUFFRixVQUFVLENBQUM2QyxHQUFuQixFQUF5QjtBQUN4QjNDLGVBQU8sSUFBSSxZQUFYO0FBQ0EsT0FGRCxNQUVPO0FBQ05BLGVBQU8sSUFBSSxXQUFYO0FBQ0EsT0FwQmtDLENBc0JuQzs7O0FBQ0EsVUFBSUcsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsVUFBSSxDQUFDLENBQUVMLFVBQVUsQ0FBQzJCLE9BQWxCLEVBQTRCO0FBQzNCdEIsYUFBSyxHQUFHTCxVQUFVLENBQUMyQixPQUFuQjtBQUNBOztBQUNELGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUV6QixPQUFoQjtBQUF5QixhQUFLLEVBQUVHO0FBQWhDLFNBRUM7QUFBSyxpQkFBTTtBQUFYLFNBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUFnRCxLQUFLLEVBQUk7QUFBRTNDLHVCQUFhLENBQUM7QUFDbkNzQyxlQUFHLEVBQUVLLEtBQUssQ0FBQ0wsR0FEd0I7QUFFbkNILGVBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZ3QjtBQUduQ1AsbUJBQU8sRUFBRU0sS0FBSyxDQUFDRTtBQUhvQixXQUFELENBQWI7QUFJakIsU0FMTjtBQU1DLFlBQUksRUFBQyxPQU5OO0FBT0MsYUFBSyxFQUFHdkQsVUFBVSxDQUFDK0MsT0FQcEI7QUFRQyxjQUFNLEVBQUc7QUFBQSxjQUFHUyxJQUFILFNBQUdBLElBQUg7QUFBQSxpQkFBY04sY0FBYyxDQUFDTSxJQUFELENBQTVCO0FBQUE7QUFSVixRQURELENBRkQsRUFjQztBQUFLLGlCQUFNO0FBQVgsU0FDQztBQUFLLGlCQUFNO0FBQVgsU0FDQyxxQ0FBSSx5QkFBQyxTQUFEO0FBQ0gsZ0JBQVEsRUFBRyxrQkFBQTVDLE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUVMLGlCQUFLLEVBQUVPO0FBQVQsV0FBRCxDQUFqQjtBQUFBLFNBRGY7QUFFSCxhQUFLLEVBQUdaLFVBQVUsQ0FBQ0ssS0FGaEI7QUFHSCxtQkFBVyxFQUFFM0IsRUFBRSxDQUFDLGlCQUFELENBSFo7QUFJSCw4QkFBc0IsRUFBRTtBQUpyQixRQUFKLENBREQsRUFPQztBQUFHLGlCQUFNO0FBQVQsU0FBbUIseUJBQUMsUUFBRDtBQUNsQixnQkFBUSxFQUFHLGtCQUFBa0MsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRXFELG1CQUFPLEVBQUVuRDtBQUFYLFdBQUQsQ0FBakI7QUFBQSxTQURBO0FBRWxCLGFBQUssRUFBR1osVUFBVSxDQUFDK0QsT0FGRDtBQUdsQixtQkFBVyxFQUFFckYsRUFBRSxDQUFDLG9CQUFELENBSEc7QUFJbEIsOEJBQXNCLEVBQUUsSUFKTjtBQUtsQixpQkFBUyxFQUFDO0FBTFEsUUFBbkIsQ0FQRCxFQWNDO0FBQU0saUJBQU07QUFBWixTQUNBLHlCQUFDLFNBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFBa0MsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRXVDLGtCQUFNLEVBQUVyQztBQUFWLFdBQUQsQ0FBakI7QUFBQSxTQURuQjtBQUVDLGFBQUssRUFBR1osVUFBVSxDQUFDaUQsTUFGcEI7QUFHQyxtQkFBVyxFQUFFdkUsRUFBRSxDQUFDLGtCQUFELENBSGhCO0FBSUMsOEJBQXNCLEVBQUU7QUFKekIsUUFEQSxDQWRELEVBcUJHa0QsSUFyQkgsQ0FERCxDQWRELENBREQsQ0FERDtBQStDQSxLQTFFRCxDQXZEMEQsQ0FtSTFEOzs7QUFDQSxRQUFNZixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDakMsYUFDQyx5QkFBQyxhQUFEO0FBQWUsV0FBRyxFQUFDO0FBQW5CLFNBQ0MseUJBQUMscUJBQUQ7QUFDQyxhQUFLLEVBQUdiLFVBQVUsQ0FBQ0ksU0FEcEI7QUFFQyxnQkFBUSxFQUFHLGtCQUFBUSxPQUFPO0FBQUEsaUJBQUlGLGFBQWEsQ0FBQztBQUFFTixxQkFBUyxFQUFFUTtBQUFiLFdBQUQsQ0FBakI7QUFBQTtBQUZuQixRQURELEVBTUcsQ0FBQyxDQUFFWixVQUFVLENBQUM2QyxHQUFkLElBQ0YseUJBQUMsZ0JBQUQsUUFDQyx5QkFBQyxPQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUFRLEtBQUssRUFBSTtBQUFFM0MsdUJBQWEsQ0FBQztBQUNuQ3NDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQUR3QjtBQUVuQ0gsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRndCO0FBR25DUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSG9CLFdBQUQsQ0FBYjtBQUlqQixTQUxOO0FBTUMsb0JBQVksRUFBR1gsbUJBTmhCO0FBT0MsYUFBSyxFQUFHNUMsVUFBVSxDQUFDK0MsT0FQcEI7QUFRQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFDUix5QkFBQyxVQUFEO0FBQ0MscUJBQVMsRUFBQyw2QkFEWDtBQUVDLGlCQUFLLEVBQUc5RSxFQUFFLENBQUUsWUFBRixDQUZYO0FBR0MsZ0JBQUksRUFBQyxNQUhOO0FBSUMsbUJBQU8sRUFBRzhFO0FBSlgsWUFEUTtBQUFBO0FBUlYsUUFERCxDQURELENBUEQsQ0FERDtBQWtDQSxLQW5DRCxDQXBJMEQsQ0F5SzFEOzs7QUFDQSxRQUFNekIsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3JDLGFBQ0MseUJBQUMsaUJBQUQsUUFDQyx5QkFBQyxTQUFELFFBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLFdBQUQ7QUFDQyxhQUFLLEVBQUdyRCxFQUFFLENBQUUsUUFBRjtBQURYLFNBR0MseUJBQUMsV0FBRDtBQUFhLHNCQUFhQSxFQUFFLENBQUUsYUFBRjtBQUE1QixTQUNHLENBQUUsU0FBRixFQUFhLFdBQWIsRUFBMEIsT0FBMUIsRUFBb0NzRCxHQUFwQyxDQUF5QyxVQUFFQyxLQUFGLEVBQWE7QUFFdkQ7QUFDQTtBQUNBO0FBRUEsWUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEtBQWdDSCxLQUFLLENBQUNJLEtBQU4sQ0FBWSxDQUFaLENBQXpEO0FBQ0EsWUFBTUMsR0FBRyxHQUFJTCxLQUFLLEtBQUssU0FBWCxHQUF3QixFQUF4QixHQUE2QkEsS0FBekM7QUFDQSxZQUFNZ0MsTUFBTSxHQUFJakUsVUFBVSxDQUFDaUUsTUFBWCxJQUFxQjFCLFNBQXRCLEdBQW1DLEVBQW5DLEdBQXdDdkMsVUFBVSxDQUFDaUUsTUFBbEU7QUFDQSxZQUFNaEUsVUFBVSxHQUFJcUMsR0FBRyxLQUFLMkIsTUFBNUI7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUczQixHQURQO0FBRUMsbUJBQVMsTUFGVjtBQUdDLG1CQUFTLEVBQUdyQyxVQUhiO0FBSUMsMEJBQWVBLFVBSmhCO0FBS0MsaUJBQU8sRUFBRyxpQkFBQVcsT0FBTztBQUFBLG1CQUFJRixhQUFhLENBQUM7QUFBRXVELG9CQUFNLEVBQUUzQjtBQUFWLGFBQUQsQ0FBakI7QUFBQTtBQUxsQixXQU9HSixnQkFQSCxDQUREO0FBV0EsT0F0QkMsQ0FESCxDQUhELENBREQsQ0FERCxFQWlDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBQyxXQURQO0FBRUMsZ0JBQVEsRUFBRyxrQkFBQXRCLE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUVzRCxlQUFHLEVBQUVwRDtBQUFQLFdBQUQsQ0FBakI7QUFBQSxTQUZuQjtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDZ0UsR0FIcEI7QUFJQyxpQkFBUyxFQUFDLGdCQUpYO0FBS0MsWUFBSSxFQUFDO0FBTE4sUUFERCxDQWpDRCxFQTJDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBQyxVQURQO0FBRUMsZ0JBQVEsRUFBRyxrQkFBQXBELE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUVpQixtQkFBTyxFQUFFZjtBQUFYLFdBQUQsQ0FBakI7QUFBQSxTQUZuQjtBQUdDLGFBQUssRUFBR1osVUFBVSxDQUFDMkIsT0FIcEI7QUFJQyxpQkFBUyxFQUFDO0FBSlgsUUFERCxDQTNDRCxDQURELENBREQ7QUF3REEsS0F6REQsQ0ExSzBELENBcU8xRDs7O0FBQ0MsV0FBUSxDQUNSZCxtQkFBbUIsRUFEWCxFQUVSa0IsdUJBQXVCLEVBRmYsRUFHUnBCLHFCQUFxQixFQUhiLENBQVI7QUFNRCxHQTVSK0I7QUE0UjdCO0FBRUhHLE1BOVJnQyx1QkE4Ulg7QUFBQSxRQUFkZCxVQUFjLFNBQWRBLFVBQWM7QUFFcEI7QUFFQSxRQUFJRSxPQUFPLEdBQUcsU0FBZDs7QUFDQSxRQUFLLENBQUMsQ0FBRUYsVUFBVSxDQUFDRyxTQUFuQixFQUErQjtBQUM5QjtBQUNBRCxhQUFPLElBQUksTUFBTUYsVUFBVSxDQUFDRyxTQUE1QjtBQUNBOztBQUNELFFBQUssQ0FBQyxDQUFFSCxVQUFVLENBQUNpRSxNQUFuQixFQUE0QjtBQUMzQi9ELGFBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNpRSxNQUE1QjtBQUNBOztBQUNELFFBQUlFLEVBQUUsR0FBRyxFQUFUOztBQUNBLFFBQUssQ0FBQyxDQUFFbkUsVUFBVSxDQUFDNkMsR0FBbkIsRUFBeUI7QUFDeEJzQixRQUFFLEdBQUcsMEJBQTBCbkUsVUFBVSxDQUFDNkMsR0FBckMsR0FBMkMsR0FBaEQ7QUFDQTs7QUFDRCxRQUFJdUIsS0FBSyxHQUFHLE9BQVo7O0FBQ0EsUUFBSyxDQUFDLENBQUVwRSxVQUFVLENBQUNnRSxHQUFuQixFQUF5QjtBQUN4QkksV0FBSyxHQUFHLFFBQVI7QUFDQTs7QUFDRCxRQUFJbkIsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsUUFBSSxDQUFDLENBQUVqRCxVQUFVLENBQUNpRCxNQUFkLElBQXdCLENBQUMsQ0FBRWpELFVBQVUsQ0FBQ3lCLElBQTFDLEVBQWlEO0FBQ2hEd0IsWUFBTSxHQUFLO0FBQUcsaUJBQU0sV0FBVDtBQUFxQixZQUFJLEVBQUdqRCxVQUFVLENBQUN5QjtBQUF2QyxTQUFnRHpCLFVBQVUsQ0FBQ2lELE1BQTNELENBQVg7QUFDQSxLQXZCbUIsQ0F3QnBCOzs7QUFFQSxXQUNDO0FBQUssZUFBTy9DO0FBQVosT0FDQztBQUFLLGVBQU07QUFBWCxPQUNDO0FBQUssZUFBTTtBQUFYLE9BQ0MscUNBQU1GLFVBQVUsQ0FBQ0ssS0FBakIsQ0FERCxFQUVDLG9DQUFLTCxVQUFVLENBQUMrRCxPQUFoQixDQUZELEVBR0VkLE1BSEYsQ0FERCxDQURELEVBUUM7QUFBSyxRQUFFLEVBQUVqRCxVQUFVLENBQUN1RCxFQUFwQjtBQUF3QixpQkFBU3ZELFVBQVUsQ0FBQ2dFLEdBQTVDO0FBQWlELGVBQU9JLEtBQXhEO0FBQStELFdBQUssRUFBRUQ7QUFBdEUsTUFSRCxDQUREO0FBYUE7QUFyVStCLENBQWhCLENBQWpCLEM7Ozs7Ozs7Ozs7O0lDdERRekYsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVQRyxpQixHQUNHRixFQUFFLENBQUNHLE0sQ0FETkQsaUI7cUJBV0dGLEVBQUUsQ0FBQ3FDLFU7SUFQTkUsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0FxQixXLGtCQUFBQSxXO0lBQ0FwQixXLGtCQUFBQSxXO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQUMsTSxrQkFBQUEsTTtJQUNBQyxXLGtCQUFBQSxXO3NCQWVHNUMsRUFBRSxDQUFDSSxXO0lBWE40RCxnQixtQkFBQUEsZ0I7SUFDQTNELFMsbUJBQUFBLFM7SUFDQUMsUSxtQkFBQUEsUTtJQUNBd0QsZ0IsbUJBQUFBLGdCO0lBQ0F2RCxXLG1CQUFBQSxXO0lBQ0F3RCxnQixtQkFBQUEsZ0I7SUFDQXZELGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FDLE8sbUJBQUFBLE87SUFDQUMsVSxtQkFBQUEsVTtJQUNBQyxxQixtQkFBQUEscUI7O0FBR0QsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFHQyxVQUFVLEdBQUcsY0FKcEI7QUFLQyxPQUFHLEVBQUM7QUFMTCxJQUREO0FBU0EsQ0FWRDs7QUFZQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxVQUFELEVBQWFDLFVBQWIsRUFBNEI7QUFDOUMsTUFBSUMsT0FBTyxHQUFHLFdBQWQ7O0FBQ0EsTUFBSSxDQUFDLENBQUVGLFVBQVUsQ0FBQ0csU0FBbEIsRUFBOEI7QUFDN0I7QUFDQUQsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0csU0FBNUI7QUFDQTs7QUFDRCxNQUFJLENBQUMsQ0FBRUYsVUFBUCxFQUFvQjtBQUNuQkMsV0FBTyxJQUFJLFdBQVg7QUFDQTs7QUFDRCxNQUFJLENBQUMsQ0FBRUYsVUFBVSxDQUFDd0IsS0FBbEIsRUFBMEI7QUFDekJ0QixXQUFPLElBQUksTUFBTUYsVUFBVSxDQUFDd0IsS0FBNUI7QUFDQTs7QUFDRCxNQUFJLENBQUMsQ0FBRXhCLFVBQVUsQ0FBQ0ksU0FBbEIsRUFBOEI7QUFDN0JGLFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNJLFNBQTVCO0FBQ0E7O0FBQ0QsU0FBT0YsT0FBUDtBQUNBLENBaEJEOztBQW1CQXJCLGlCQUFpQixDQUFDLGVBQUQsRUFBa0I7QUFFakN3QixPQUFLLEVBQUUzQixFQUFFLENBQUMsUUFBRCxDQUZ3QjtBQUdqQzRCLE1BQUksRUFBRVQsVUFIMkI7QUFJakNVLFVBQVEsRUFBRSxXQUp1QjtBQU1sQ1AsWUFBVSxFQUFFO0FBQ1hxRSxVQUFNLEVBQUU7QUFDUDdELFVBQUksRUFBRTtBQURDLEtBREc7QUFJWDhELFdBQU8sRUFBRTtBQUNSOUQsVUFBSSxFQUFFO0FBREUsS0FKRTtBQU9YZ0IsU0FBSyxFQUFFO0FBQ05oQixVQUFJLEVBQUU7QUFEQSxLQVBJO0FBVVhKLGFBQVMsRUFBRTtBQUNWSSxVQUFJLEVBQUU7QUFESTtBQVZBLEdBTnNCO0FBc0JsQ0MsTUF0QmtDLHNCQXNCeUI7QUFBQSxRQUFwRFQsVUFBb0QsUUFBcERBLFVBQW9EO0FBQUEsUUFBeENHLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLFFBQTdCTyxhQUE2QixRQUE3QkEsYUFBNkI7QUFBQSxRQUFkVCxVQUFjLFFBQWRBLFVBQWM7O0FBRTFEO0FBQ0EsUUFBTVUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLFVBQUlULE9BQU8sR0FBR0gsVUFBVSxDQUFDQyxVQUFELEVBQWFDLFVBQWIsQ0FBeEIsQ0FEbUMsQ0FHbkM7O0FBQ0EsVUFBSUksS0FBSyxHQUFHLEVBQVo7O0FBQ0EsVUFBSSxDQUFDLENBQUVMLFVBQVUsQ0FBQzJCLE9BQWxCLEVBQTRCO0FBQzNCdEIsYUFBSyxHQUFHTCxVQUFVLENBQUMyQixPQUFuQjtBQUNBOztBQUNELGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGlCQUFTLEVBQUV6QixPQUFoQjtBQUF5QixhQUFLLEVBQUVHO0FBQWhDLFNBQ0MsdUNBQU0seUJBQUMsU0FBRDtBQUNMLGdCQUFRLEVBQUcsa0JBQUFPLE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUUyRCxrQkFBTSxFQUFFekQ7QUFBVixXQUFELENBQWpCO0FBQUEsU0FEYjtBQUVMLGFBQUssRUFBR1osVUFBVSxDQUFDcUUsTUFGZDtBQUdMLG1CQUFXLEVBQUUzRixFQUFFLENBQUMsTUFBRCxDQUhWO0FBSUwsOEJBQXNCLEVBQUU7QUFKbkIsUUFBTixDQURELEVBT0MsdUNBQU0seUJBQUMsU0FBRDtBQUNMLGdCQUFRLEVBQUcsa0JBQUFrQyxPQUFPO0FBQUEsaUJBQUlGLGFBQWEsQ0FBQztBQUFFNEQsbUJBQU8sRUFBRTFEO0FBQVgsV0FBRCxDQUFqQjtBQUFBLFNBRGI7QUFFTCxlQUFPLEVBQUMsR0FGSDtBQUdMLGFBQUssRUFBR1osVUFBVSxDQUFDc0UsT0FIZDtBQUlMLG1CQUFXLEVBQUU1RixFQUFFLENBQUMsc0JBQUQsQ0FKVjtBQUtMLDhCQUFzQixFQUFFO0FBTG5CLFFBQU4sQ0FQRCxDQURELENBREQ7QUFvQkEsS0E1QkQsQ0FIMEQsQ0FpQzFEOzs7QUFDQSxRQUFNbUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2pDLGFBQ0MseUJBQUMsYUFBRDtBQUFlLFdBQUcsRUFBQztBQUFuQixTQUNDLHlCQUFDLHFCQUFEO0FBQ0MsYUFBSyxFQUFHYixVQUFVLENBQUNJLFNBRHBCO0FBRUMsZ0JBQVEsRUFBRyxrQkFBQVEsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRU4scUJBQVMsRUFBRVE7QUFBYixXQUFELENBQWpCO0FBQUE7QUFGbkIsUUFERCxDQUREO0FBVUEsS0FYRCxDQWxDMEQsQ0ErQzFEO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBTW1CLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNyQyxhQUNDLHlCQUFDLGlCQUFELFFBQ0MseUJBQUMsU0FBRCxRQUNDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsYUFBSyxFQUFDLFVBRFA7QUFFQyxnQkFBUSxFQUFHLGtCQUFBbkIsT0FBTztBQUFBLGlCQUFJRixhQUFhLENBQUM7QUFBRWlCLG1CQUFPLEVBQUVmO0FBQVgsV0FBRCxDQUFqQjtBQUFBLFNBRm5CO0FBR0MsYUFBSyxFQUFHWixVQUFVLENBQUMyQixPQUhwQjtBQUlDLGlCQUFTLEVBQUM7QUFKWCxRQURELENBREQsRUFTQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBR2pELEVBQUUsQ0FBRSxjQUFGO0FBRFgsU0FHQyx5QkFBQyxXQUFEO0FBQWEsc0JBQWFBLEVBQUUsQ0FBRSxjQUFGO0FBQTVCLFNBQ0csQ0FBRSxVQUFGLEVBQWMsT0FBZCxFQUF1QixNQUF2QixFQUErQixTQUEvQixFQUEyQ3NELEdBQTNDLENBQWdELFVBQUVDLEtBQUYsRUFBYTtBQUU5RCxZQUFNQyxnQkFBZ0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsS0FBZ0NILEtBQUssQ0FBQ0ksS0FBTixDQUFZLENBQVosQ0FBekQ7QUFDQSxZQUFNQyxHQUFHLEdBQUlMLEtBQUssS0FBSyxTQUFYLEdBQXdCLEVBQXhCLEdBQTZCQSxLQUF6QztBQUNBLFlBQU1oQyxVQUFVLEdBQUdxQyxHQUFHLEtBQUt0QyxVQUFVLENBQUN3QixLQUF0QztBQUVBLGVBQ0MseUJBQUMsTUFBRDtBQUNDLGFBQUcsRUFBR2MsR0FEUDtBQUVDLG1CQUFTLE1BRlY7QUFHQyxtQkFBUyxFQUFHckMsVUFIYjtBQUlDLDBCQUFlQSxVQUpoQjtBQUtDLGlCQUFPLEVBQUcsaUJBQUFXLE9BQU87QUFBQSxtQkFBSUYsYUFBYSxDQUFDO0FBQUVjLG1CQUFLLEVBQUVjO0FBQVQsYUFBRCxDQUFqQjtBQUFBO0FBTGxCLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWpCQyxDQURILENBSEQsQ0FERCxDQVRELENBREQsQ0FERDtBQTJDQSxLQTVDRCxDQWxEMEQsQ0FnRzFEOzs7QUFDQyxXQUFRLENBQ1JyQixtQkFBbUIsRUFEWCxFQUVSa0IsdUJBQXVCLEVBRmYsRUFHUnBCLHFCQUFxQixFQUhiLENBQVI7QUFNRCxHQTdIaUM7QUE2SC9CO0FBRUhHLE1BL0hrQyx1QkErSGI7QUFBQSxRQUFkZCxVQUFjLFNBQWRBLFVBQWM7QUFFcEIsUUFBSUUsT0FBTyxHQUFHSCxVQUFVLENBQUNDLFVBQUQsQ0FBeEI7QUFFQSxRQUFJSyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxRQUFJLENBQUMsQ0FBRUwsVUFBVSxDQUFDMkIsT0FBbEIsRUFBNEI7QUFDM0J0QixXQUFLLEdBQUdMLFVBQVUsQ0FBQzJCLE9BQW5CO0FBQ0E7O0FBRUQsV0FDQztBQUFLLGVBQU96QixPQUFaO0FBQXFCLFdBQUssRUFBRUc7QUFBNUIsT0FDQyx1Q0FBUUwsVUFBVSxDQUFDcUUsTUFBbkIsQ0FERCxFQUVDLHVDQUFRckUsVUFBVSxDQUFDc0UsT0FBbkIsQ0FGRCxDQUREO0FBUUE7QUFoSmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0lDNURRNUYsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVQRyxpQixHQUNHRixFQUFFLENBQUNHLE0sQ0FETkQsaUI7cUJBYUdGLEVBQUUsQ0FBQ3FDLFU7SUFUTkUsUyxrQkFBQUEsUztJQUNBQyxRLGtCQUFBQSxRO0lBQ0E5QixPLGtCQUFBQSxPO0lBQ0FDLFUsa0JBQUFBLFU7SUFDQWtELFcsa0JBQUFBLFc7SUFDQXBCLFcsa0JBQUFBLFc7SUFDQUMsVyxrQkFBQUEsVztJQUNBQyxNLGtCQUFBQSxNO0lBQ0FDLFcsa0JBQUFBLFc7c0JBY0c1QyxFQUFFLENBQUNJLFc7SUFWTjRELGdCLG1CQUFBQSxnQjtJQUNBM0QsUyxtQkFBQUEsUztJQUNBQyxRLG1CQUFBQSxRO0lBQ0F3RCxnQixtQkFBQUEsZ0I7SUFDQXZELFcsbUJBQUFBLFc7SUFDQXdELGdCLG1CQUFBQSxnQjtJQUNBdkQsaUIsbUJBQUFBLGlCO0lBQ0FDLGEsbUJBQUFBLGE7SUFDQUcscUIsbUJBQUFBLHFCO0lBQ0FDLFcsbUJBQUFBLFc7QUFJRCxJQUFNQyxjQUFjLEdBQUcsQ0FDdEIsY0FEc0IsRUFFdEIsZ0JBRnNCLEVBR3RCLFdBSHNCLEVBSXRCLGVBSnNCLENBQXZCO0FBTUEsSUFBTUMsUUFBUSxHQUFHLENBQ2YsQ0FBQyxjQUFELEVBQWlCO0FBQUU2RSxPQUFLLEVBQUUsQ0FBVDtBQUFZNUUsYUFBVyxFQUFFO0FBQXpCLENBQWpCLENBRGUsRUFFZixDQUFDLGdCQUFELEVBQW1CO0FBQUVBLGFBQVcsRUFBRSxFQUFmO0FBQW1CQyxTQUFPLEVBQUU7QUFBNUIsQ0FBbkIsQ0FGZSxFQUdmLENBQUMsZUFBRCxFQUFrQixFQUFsQixDQUhlLENBQWpCO0FBS0EsSUFBTWdELG1CQUFtQixHQUFHLENBQUUsT0FBRixDQUE1Qjs7QUFHQSxJQUFNL0MsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFHQyxVQUFVLEdBQUcsYUFKcEI7QUFLQyxPQUFHLEVBQUM7QUFMTCxJQUREO0FBU0EsQ0FWRDs7QUFZQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxVQUFELEVBQWdCO0FBQ2xDLE1BQUlFLE9BQU8sR0FBRyxVQUFkOztBQUNBLE1BQUksQ0FBQyxDQUFFRixVQUFVLENBQUNHLFNBQWxCLEVBQThCO0FBQzdCO0FBQ0FELFdBQU8sSUFBSSxNQUFNRixVQUFVLENBQUNHLFNBQTVCO0FBQ0E7O0FBQ0QsTUFBSSxDQUFDLENBQUVILFVBQVUsQ0FBQ3dFLE9BQWxCLEVBQTRCO0FBQzNCdEUsV0FBTyxJQUFJLFVBQVg7QUFDQTs7QUFDRCxTQUFPQSxPQUFQO0FBQ0EsQ0FWRDs7QUFjQXJCLGlCQUFpQixDQUFDLGNBQUQsRUFBaUI7QUFFaEN3QixPQUFLLEVBQUUzQixFQUFFLENBQUMsT0FBRCxDQUZ1QjtBQUdoQzRCLE1BQUksRUFBRVQsVUFIMEI7QUFJaENVLFVBQVEsRUFBRSxXQUpzQjtBQU1qQ1AsWUFBVSxFQUFFO0FBQ1hLLFNBQUssRUFBRTtBQUNORyxVQUFJLEVBQUU7QUFEQSxLQURJO0FBSVhnRSxXQUFPLEVBQUU7QUFDUmhFLFVBQUksRUFBRTtBQURFLEtBSkU7QUFPWHFDLE9BQUcsRUFBRTtBQUNKckMsVUFBSSxFQUFFO0FBREYsS0FQTTtBQVVYd0MsT0FBRyxFQUFFO0FBQ0p4QyxVQUFJLEVBQUU7QUFERixLQVZNO0FBYVh1QyxXQUFPLEVBQUU7QUFDUnZDLFVBQUksRUFBRTtBQURFO0FBYkUsR0FOcUI7QUEwQmpDQyxNQTFCaUMsc0JBMEJjO0FBQUEsUUFBeENULFVBQXdDLFFBQXhDQSxVQUF3QztBQUFBLFFBQTVCRyxTQUE0QixRQUE1QkEsU0FBNEI7QUFBQSxRQUFqQk8sYUFBaUIsUUFBakJBLGFBQWlCOztBQUU5QztBQUNBLFFBQU13QyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBZTtBQUNyQyxVQUFHbkQsVUFBVSxDQUFDK0MsT0FBZCxFQUF1QjtBQUN0QixlQUNDO0FBQ0MsYUFBRyxFQUFHL0MsVUFBVSxDQUFDNkMsR0FEbEI7QUFFQyxhQUFHLEVBQUc3QyxVQUFVLENBQUNnRCxHQUZsQjtBQUdDLG1CQUFTLEVBQUM7QUFIWCxVQUREO0FBT0EsT0FSRCxNQVFPO0FBQ04sZUFDQyx5QkFBQyxnQkFBRDtBQUNDLGNBQUksRUFBRyxjQURSO0FBRUMsbUJBQVMsRUFBRzdDLFNBRmI7QUFHQyxnQkFBTSxFQUFHO0FBQ1JFLGlCQUFLLEVBQUUsY0FEQztBQUVSK0Msd0JBQVksRUFBRTFFLEVBQUUsQ0FBRSxxRUFBRjtBQUZSLFdBSFY7QUFPQyxrQkFBUSxFQUFHLGtCQUFBMkUsS0FBSyxFQUFJO0FBQUUzQyx5QkFBYSxDQUFDO0FBQ25Dc0MsaUJBQUcsRUFBRUssS0FBSyxDQUFDTCxHQUR3QjtBQUVuQ0gsaUJBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZ3QjtBQUduQ1AscUJBQU8sRUFBRU0sS0FBSyxDQUFDRTtBQUhvQixhQUFELENBQWI7QUFJakIsV0FYTjtBQVlDLGdCQUFNLEVBQUMsU0FaUjtBQWFDLHNCQUFZLEVBQUdYO0FBYmhCLFVBREQ7QUFpQkE7QUFDRCxLQTVCRDs7QUE4QkEsUUFBSTFDLE9BQU8sR0FBR0gsVUFBVSxDQUFDQyxVQUFELENBQXhCOztBQUVBLFFBQU1XLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNuQyxhQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBT1Q7QUFBWixTQUNDO0FBQVEsaUJBQU07QUFBZCxTQUNDLHlCQUFDLFdBQUQ7QUFDQyxnQkFBUSxFQUFHLGtCQUFBbUQsS0FBSyxFQUFJO0FBQUUzQyx1QkFBYSxDQUFDO0FBQ25Dc0MsZUFBRyxFQUFFSyxLQUFLLENBQUNMLEdBRHdCO0FBRW5DSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGd0I7QUFHbkNQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIb0IsV0FBRCxDQUFiO0FBSWpCLFNBTE47QUFNQyxZQUFJLEVBQUMsT0FOTjtBQU9DLGFBQUssRUFBR3ZELFVBQVUsQ0FBQytDLE9BUHBCO0FBUUMsY0FBTSxFQUFHO0FBQUEsY0FBR1MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsaUJBQWNOLGNBQWMsQ0FBQ00sSUFBRCxDQUE1QjtBQUFBO0FBUlYsUUFERCxDQURELEVBYUMsMENBQ0MseUJBQUMsV0FBRDtBQUNDLHFCQUFhLEVBQUcvRCxjQURqQjtBQUVDLGdCQUFRLEVBQUVDO0FBRlgsUUFERCxDQWJELENBREQsQ0FERDtBQXdCQSxLQXpCRDs7QUEyQkEsUUFBTW1CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNqQyxhQUNDLHlCQUFDLGFBQUQ7QUFBZSxXQUFHLEVBQUM7QUFBbkIsU0FDRyxDQUFDLENBQUViLFVBQVUsQ0FBQzZDLEdBQWQsSUFDRix5QkFBQyxnQkFBRCxRQUNDLHlCQUFDLE9BQUQsUUFDQyx5QkFBQyxXQUFEO0FBQ0MsZ0JBQVEsRUFBRyxrQkFBQVEsS0FBSyxFQUFJO0FBQUUzQyx1QkFBYSxDQUFDO0FBQ25Dc0MsZUFBRyxFQUFFSyxLQUFLLENBQUNMLEdBRHdCO0FBRW5DSCxlQUFHLEVBQUVRLEtBQUssQ0FBQ0MsR0FGd0I7QUFHbkNQLG1CQUFPLEVBQUVNLEtBQUssQ0FBQ0U7QUFIb0IsV0FBRCxDQUFiO0FBSWpCLFNBTE47QUFNQyxvQkFBWSxFQUFHWCxtQkFOaEI7QUFPQyxhQUFLLEVBQUc1QyxVQUFVLENBQUMrQyxPQVBwQjtBQVFDLGNBQU0sRUFBRztBQUFBLGNBQUlTLElBQUosU0FBSUEsSUFBSjtBQUFBLGlCQUNSLHlCQUFDLFVBQUQ7QUFDQyxxQkFBUyxFQUFDLDZCQURYO0FBRUMsaUJBQUssRUFBRzlFLEVBQUUsQ0FBRSxZQUFGLENBRlg7QUFHQyxnQkFBSSxFQUFDLE1BSE47QUFJQyxtQkFBTyxFQUFHOEU7QUFKWCxZQURRO0FBQUE7QUFSVixRQURELENBREQsQ0FGRCxDQUREO0FBNkJBLEtBOUJELENBOUQ4QyxDQThGOUM7OztBQUNBLFFBQU16Qix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDckMsYUFDQyx5QkFBQyxpQkFBRCxRQUNDLHlCQUFDLFNBQUQsUUFDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBR3JELEVBQUUsQ0FBRSxhQUFGO0FBRFgsU0FHQyx5QkFBQyxXQUFEO0FBQWEsc0JBQWFBLEVBQUUsQ0FBRSxhQUFGO0FBQTVCLFNBQ0csQ0FBRSxVQUFGLEVBQWMsU0FBZCxFQUEwQnNELEdBQTFCLENBQStCLFVBQUVDLEtBQUYsRUFBYTtBQUU3QyxZQUFNQyxnQkFBZ0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsS0FBZ0NILEtBQUssQ0FBQ0ksS0FBTixDQUFZLENBQVosQ0FBekQ7QUFDQSxZQUFNQyxHQUFHLEdBQUlMLEtBQUssS0FBSyxVQUFYLEdBQXlCLE9BQXpCLEdBQW1DLE1BQS9DO0FBQ0EsWUFBTXdDLENBQUMsR0FBSXpFLFVBQVUsQ0FBQ3dFLE9BQVosR0FBdUIsTUFBdkIsR0FBZ0MsT0FBMUM7QUFDQSxZQUFNdkUsVUFBVSxHQUFLcUMsR0FBRyxLQUFLbUMsQ0FBN0I7QUFFQSxlQUNDLHlCQUFDLE1BQUQ7QUFDQyxhQUFHLEVBQUduQyxHQURQO0FBRUMsbUJBQVMsTUFGVjtBQUdDLG1CQUFTLEVBQUdyQyxVQUhiO0FBSUMsMEJBQWVBLFVBSmhCO0FBS0MsaUJBQU8sRUFBRyxpQkFBQVcsT0FBTztBQUFBLG1CQUFJRixhQUFhLENBQUM7QUFBRThELHFCQUFPLEVBQUdsQyxHQUFHLEtBQUc7QUFBbEIsYUFBRCxDQUFqQjtBQUFBO0FBTGxCLFdBT0dKLGdCQVBILENBREQ7QUFXQSxPQWxCQyxDQURILENBSEQsQ0FERCxDQURELENBREQsQ0FERDtBQW9DQSxLQXJDRCxDQS9GOEMsQ0F1STlDOzs7QUFDQyxXQUFRLENBQ1ByQixtQkFBbUIsRUFEWixFQUVSa0IsdUJBQXVCLEVBRmYsRUFHUnBCLHFCQUFxQixFQUhiLENBQVI7QUFNRCxHQXhLZ0M7QUF3SzlCO0FBRUhHLE1BMUtpQyx1QkEwS1o7QUFBQSxRQUFkZCxVQUFjLFNBQWRBLFVBQWM7QUFFcEIsUUFBSUUsT0FBTyxHQUFHSCxVQUFVLENBQUNDLFVBQUQsQ0FBeEI7QUFFQSxXQUVDO0FBQUssZUFBT0U7QUFBWixPQUNDLHlDQUNDO0FBQUssU0FBRyxFQUFFRixVQUFVLENBQUM2QyxHQUFyQjtBQUEwQixTQUFHLEVBQUU3QyxVQUFVLENBQUNnRDtBQUExQyxNQURELENBREQsRUFJQywwQ0FDQyx5QkFBQyxXQUFELENBQWEsT0FBYixPQURELENBSkQsQ0FGRDtBQVlBO0FBMUxnQyxDQUFqQixDQUFqQixDOzs7Ozs7Ozs7OztJQ3ZFUXRFLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFFUEcsaUIsR0FDR0YsRUFBRSxDQUFDRyxNLENBRE5ELGlCO3FCQWFHRixFQUFFLENBQUNxQyxVO0lBVE5FLFMsa0JBQUFBLFM7SUFDQUMsUSxrQkFBQUEsUTtJQUNBOUIsTyxrQkFBQUEsTztJQUNBQyxVLGtCQUFBQSxVO0lBQ0FrRCxXLGtCQUFBQSxXO0lBQ0FwQixXLGtCQUFBQSxXO0lBQ0FDLFcsa0JBQUFBLFc7SUFDQUMsTSxrQkFBQUEsTTtJQUNBQyxXLGtCQUFBQSxXO3NCQWNHNUMsRUFBRSxDQUFDSSxXO0lBVk40RCxnQixtQkFBQUEsZ0I7SUFDQTNELFMsbUJBQUFBLFM7SUFDQUMsUSxtQkFBQUEsUTtJQUNBd0QsZ0IsbUJBQUFBLGdCO0lBQ0F2RCxXLG1CQUFBQSxXO0lBQ0F3RCxnQixtQkFBQUEsZ0I7SUFDQXZELGlCLG1CQUFBQSxpQjtJQUNBQyxhLG1CQUFBQSxhO0lBQ0FHLHFCLG1CQUFBQSxxQjtJQUNBQyxXLG1CQUFBQSxXO0FBSUQsSUFBTUMsY0FBYyxHQUFHLENBQ3RCLGdCQURzQixDQUF2QjtBQUdBLElBQU1DLFFBQVEsR0FBRyxDQUNmLENBQUMsZ0JBQUQsRUFBbUI7QUFBRUMsYUFBVyxFQUFFLEVBQWY7QUFBbUJDLFNBQU8sRUFBRTtBQUE1QixDQUFuQixDQURlLENBQWpCO0FBR0EsSUFBTWdELG1CQUFtQixHQUFHLENBQUUsT0FBRixDQUE1Qjs7QUFHQSxJQUFNL0MsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQ0MsU0FBSyxFQUFDLElBRFA7QUFFQyxVQUFNLEVBQUMsSUFGUjtBQUdDLGFBQVMsRUFBQyxVQUhYO0FBSUMsT0FBRyxFQUFHQyxVQUFVLEdBQUcsYUFKcEI7QUFLQyxPQUFHLEVBQUM7QUFMTCxJQUREO0FBU0EsQ0FWRDs7QUFZQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxVQUFELEVBQWFDLFVBQWIsRUFBNEI7QUFDOUMsTUFBSUMsT0FBTyxHQUFHLFVBQWQ7O0FBQ0EsTUFBSSxDQUFDLENBQUVGLFVBQVUsQ0FBQ0csU0FBbEIsRUFBOEI7QUFDN0I7QUFDQUQsV0FBTyxJQUFJLE1BQU1GLFVBQVUsQ0FBQ0csU0FBNUI7QUFDQTs7QUFDRCxNQUFJLENBQUMsQ0FBRUYsVUFBUCxFQUFvQjtBQUNuQkMsV0FBTyxJQUFJLFdBQVg7QUFDQTs7QUFDRCxTQUFPQSxPQUFQO0FBQ0EsQ0FWRDs7QUFjQXJCLGlCQUFpQixDQUFDLGNBQUQsRUFBaUI7QUFFaEN3QixPQUFLLEVBQUUzQixFQUFFLENBQUMsT0FBRCxDQUZ1QjtBQUdoQzRCLE1BQUksRUFBRVQsVUFIMEI7QUFJaENVLFVBQVEsRUFBRSxXQUpzQjtBQU1qQ1AsWUFBVSxFQUFFO0FBQ1gwRSxTQUFLLEVBQUU7QUFDTmxFLFVBQUksRUFBRTtBQURBLEtBREk7QUFJWG1FLFlBQVEsRUFBRTtBQUNUbkUsVUFBSSxFQUFFO0FBREcsS0FKQztBQU9YcUMsT0FBRyxFQUFFO0FBQ0pyQyxVQUFJLEVBQUU7QUFERixLQVBNO0FBVVh3QyxPQUFHLEVBQUU7QUFDSnhDLFVBQUksRUFBRTtBQURGLEtBVk07QUFhWHVDLFdBQU8sRUFBRTtBQUNSdkMsVUFBSSxFQUFFO0FBREU7QUFiRSxHQU5xQjtBQTBCakNDLE1BMUJpQyxzQkEwQjBCO0FBQUEsUUFBcERULFVBQW9ELFFBQXBEQSxVQUFvRDtBQUFBLFFBQXhDRyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxRQUE3Qk8sYUFBNkIsUUFBN0JBLGFBQTZCO0FBQUEsUUFBZFQsVUFBYyxRQUFkQSxVQUFjOztBQUUxRDtBQUNBLFFBQU1pRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBZTtBQUNyQyxVQUFHbkQsVUFBVSxDQUFDK0MsT0FBZCxFQUF1QjtBQUN0QixlQUNDO0FBQ0MsYUFBRyxFQUFHL0MsVUFBVSxDQUFDNkMsR0FEbEI7QUFFQyxhQUFHLEVBQUc3QyxVQUFVLENBQUNnRCxHQUZsQjtBQUdDLG1CQUFTLEVBQUM7QUFIWCxVQUREO0FBT0EsT0FSRCxNQVFPO0FBQ04sZUFDQyx5QkFBQyxnQkFBRDtBQUNDLGNBQUksRUFBRyxjQURSO0FBRUMsbUJBQVMsRUFBRzdDLFNBRmI7QUFHQyxnQkFBTSxFQUFHO0FBQ1JFLGlCQUFLLEVBQUUsY0FEQztBQUVSK0Msd0JBQVksRUFBRTFFLEVBQUUsQ0FBRSxxRUFBRjtBQUZSLFdBSFY7QUFPQyxrQkFBUSxFQUFHLGtCQUFBMkUsS0FBSyxFQUFJO0FBQUUzQyx5QkFBYSxDQUFDO0FBQ25Dc0MsaUJBQUcsRUFBRUssS0FBSyxDQUFDTCxHQUR3QjtBQUVuQ0gsaUJBQUcsRUFBRVEsS0FBSyxDQUFDQyxHQUZ3QjtBQUduQ1AscUJBQU8sRUFBRU0sS0FBSyxDQUFDRTtBQUhvQixhQUFELENBQWI7QUFJakIsV0FYTjtBQVlDLGdCQUFNLEVBQUMsU0FaUjtBQWFDLHNCQUFZLEVBQUdYO0FBYmhCLFVBREQ7QUFpQkE7QUFDRCxLQTVCRDs7QUE4QkEsUUFBSTFDLE9BQU8sR0FBR0gsVUFBVSxDQUFDQyxVQUFELEVBQWFDLFVBQWIsQ0FBeEI7O0FBRUEsUUFBTVUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLFVBQUlpRSxVQUFVLEdBQUssQ0FBQyxDQUFFNUUsVUFBVSxDQUFDK0MsT0FBaEIsR0FBNEIsZ0JBQTVCLEdBQStDLEVBQWhFO0FBQ0EsYUFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVDO0FBQUssaUJBQU83QztBQUFaLFNBQ0M7QUFBSyxpQkFBTzBFO0FBQVosU0FDQyx5QkFBQyxXQUFEO0FBQ0MsZ0JBQVEsRUFBRyxrQkFBQXZCLEtBQUssRUFBSTtBQUFFM0MsdUJBQWEsQ0FBQztBQUNuQ3NDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQUR3QjtBQUVuQ0gsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRndCO0FBR25DUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSG9CLFdBQUQsQ0FBYjtBQUlqQixTQUxOO0FBTUMsWUFBSSxFQUFDLE9BTk47QUFPQyxhQUFLLEVBQUd2RCxVQUFVLENBQUMrQyxPQVBwQjtBQVFDLGNBQU0sRUFBRztBQUFBLGNBQUdTLElBQUgsU0FBR0EsSUFBSDtBQUFBLGlCQUFjTixjQUFjLENBQUNNLElBQUQsQ0FBNUI7QUFBQTtBQVJWLFFBREQsQ0FERCxFQWFDLDZDQUNDLHlCQUFDLFdBQUQ7QUFDQyxxQkFBYSxFQUFHL0QsY0FEakI7QUFFQyxnQkFBUSxFQUFFQztBQUZYLFFBREQsQ0FiRCxFQW1CQyx1Q0FBTSx5QkFBQyxTQUFEO0FBQ0wsZ0JBQVEsRUFBRyxrQkFBQWtCLE9BQU87QUFBQSxpQkFBSUYsYUFBYSxDQUFDO0FBQUVpRSxvQkFBUSxFQUFFL0Q7QUFBWixXQUFELENBQWpCO0FBQUEsU0FEYjtBQUVMLGFBQUssRUFBR1osVUFBVSxDQUFDMkUsUUFGZDtBQUdMLG1CQUFXLEVBQUVqRyxFQUFFLENBQUMsV0FBRCxDQUhWO0FBSUwsOEJBQXNCLEVBQUU7QUFKbkIsUUFBTixDQW5CRCxDQUZELENBREQ7QUFnQ0EsS0FsQ0Q7O0FBb0NBLFFBQU1tQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDakMsYUFDQyx5QkFBQyxhQUFEO0FBQWUsV0FBRyxFQUFDO0FBQW5CLFNBQ0csQ0FBQyxDQUFFYixVQUFVLENBQUM2QyxHQUFkLElBQ0YseUJBQUMsZ0JBQUQsUUFDQyx5QkFBQyxPQUFELFFBQ0MseUJBQUMsV0FBRDtBQUNDLGdCQUFRLEVBQUcsa0JBQUFRLEtBQUssRUFBSTtBQUFFM0MsdUJBQWEsQ0FBQztBQUNuQ3NDLGVBQUcsRUFBRUssS0FBSyxDQUFDTCxHQUR3QjtBQUVuQ0gsZUFBRyxFQUFFUSxLQUFLLENBQUNDLEdBRndCO0FBR25DUCxtQkFBTyxFQUFFTSxLQUFLLENBQUNFO0FBSG9CLFdBQUQsQ0FBYjtBQUlqQixTQUxOO0FBTUMsb0JBQVksRUFBR1gsbUJBTmhCO0FBT0MsYUFBSyxFQUFHNUMsVUFBVSxDQUFDK0MsT0FQcEI7QUFRQyxjQUFNLEVBQUc7QUFBQSxjQUFJUyxJQUFKLFNBQUlBLElBQUo7QUFBQSxpQkFDUix5QkFBQyxVQUFEO0FBQ0MscUJBQVMsRUFBQyw2QkFEWDtBQUVDLGlCQUFLLEVBQUc5RSxFQUFFLENBQUUsWUFBRixDQUZYO0FBR0MsZ0JBQUksRUFBQyxNQUhOO0FBSUMsbUJBQU8sRUFBRzhFO0FBSlgsWUFEUTtBQUFBO0FBUlYsUUFERCxDQURELENBRkQsQ0FERDtBQTZCQSxLQTlCRCxDQXZFMEQsQ0F3RzFEOzs7QUFDQyxXQUFRLENBQ1AzQyxtQkFBbUIsRUFEWixFQUVSRixxQkFBcUIsRUFGYixDQUFSO0FBS0QsR0F4SWdDO0FBd0k5QjtBQUVIRyxNQTFJaUMsdUJBMElaO0FBQUEsUUFBZGQsVUFBYyxTQUFkQSxVQUFjO0FBRXBCLFFBQUlFLE9BQU8sR0FBR0gsVUFBVSxDQUFDQyxVQUFELENBQXhCO0FBRUEsUUFBSTZFLFVBQVUsR0FBRywwQkFBMEI3RSxVQUFVLENBQUM2QyxHQUFyQyxHQUEyQyxHQUE1RDtBQUVBLFdBRUc7QUFBSyxlQUFPM0M7QUFBWixPQUNDO0FBQUssZUFBTSxnQkFBWDtBQUE0QixXQUFLLEVBQUUyRTtBQUFuQyxNQURELEVBRUMsNkNBQ0MseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERCxDQUZELEVBS0MsdUNBQU83RSxVQUFVLENBQUMyRSxRQUFsQixDQUxELENBRkg7QUFXQTtBQTNKZ0MsQ0FBakIsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xFUWpHLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFFUEcsaUIsR0FDR0YsRUFBRSxDQUFDRyxNLENBRE5ELGlCO3FCQU9HRixFQUFFLENBQUNxQyxVO0lBSE5FLFMsa0JBQUFBLFM7SUFDQUMsUSxrQkFBQUEsUTtJQUNBMkQsWSxrQkFBQUEsWTt1QkFNR25HLEVBQUUsQ0FBQ29HLFk7SUFGTjVGLGlCLG9CQUFBQSxpQjtJQUNBSyxXLG9CQUFBQSxXO0FBSUQsSUFBTUMsY0FBYyxHQUFHLENBQ3RCLFlBRHNCLENBQXZCOztBQUtBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBR0MsVUFBVSxHQUFHLFlBSnBCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBWUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNsQyxNQUFJRSxPQUFPLEdBQUcsU0FBZDs7QUFDQSxNQUFJLENBQUMsQ0FBRUYsVUFBVSxDQUFDRyxTQUFsQixFQUE4QjtBQUM3QjtBQUNBRCxXQUFPLElBQUksTUFBTUYsVUFBVSxDQUFDRyxTQUE1QjtBQUNBOztBQUNELFNBQU9ELE9BQVA7QUFDQSxDQVBEOztBQVNBLElBQU04RSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUVDLElBQUYsRUFBWTtBQUVuQyxTQUFPLG1CQUFJQyxLQUFLLENBQUNELElBQUQsQ0FBVCxFQUFpQmpELEdBQWpCLENBQXFCLFVBQVNtRCxDQUFULEVBQVc7QUFDdEMsV0FBTyxDQUFDLFlBQUQsRUFBZSxFQUFmLENBQVA7QUFDQSxHQUZNLENBQVA7QUFJQSxDQU5EOztBQVVBdEcsaUJBQWlCLENBQUMsYUFBRCxFQUFnQjtBQUUvQndCLE9BQUssRUFBRTNCLEVBQUUsQ0FBQyxNQUFELENBRnNCO0FBRy9CNEIsTUFBSSxFQUFFVCxVQUh5QjtBQUkvQlUsVUFBUSxFQUFFLFdBSnFCO0FBTWhDUCxZQUFVLEVBQUU7QUFDWGlGLFFBQUksRUFBRTtBQUNMekUsVUFBSSxFQUFFLFFBREQ7QUFFTDRFLGFBQU8sRUFBRTtBQUZKO0FBREssR0FOb0I7QUFjaEMzRSxNQWRnQyxzQkFjZTtBQUFBLFFBQXhDVCxVQUF3QyxRQUF4Q0EsVUFBd0M7QUFBQSxRQUE1QkcsU0FBNEIsUUFBNUJBLFNBQTRCO0FBQUEsUUFBakJPLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUU5QztBQUVBLFFBQUlSLE9BQU8sR0FBR0gsVUFBVSxDQUFDQyxVQUFELENBQXhCLENBSjhDLENBTTlDOztBQUNBLFFBQU0rQix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDckMsYUFDQyx5QkFBQyxpQkFBRCxRQUNDLHlCQUFDLFNBQUQsUUFDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsWUFBRDtBQUNDLGFBQUssRUFBR3JELEVBQUUsQ0FBRSxNQUFGLENBRFg7QUFFQyxhQUFLLEVBQUdzQixVQUFVLENBQUNpRixJQUZwQjtBQUdDLGdCQUFRLEVBQUcsa0JBQUVJLFFBQUYsRUFBZ0I7QUFDMUIzRSx1QkFBYSxDQUFFO0FBQ2R1RSxnQkFBSSxFQUFFSTtBQURRLFdBQUYsQ0FBYjtBQUdBLFNBUEY7QUFRQyxXQUFHLEVBQUcsQ0FSUDtBQVNDLFdBQUcsRUFBRztBQVRQLFFBREQsQ0FERCxDQURELENBREQ7QUFtQkEsS0FwQkQ7O0FBdUJBLFFBQU0xRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbkMsYUFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDO0FBQUssaUJBQU9UO0FBQVosU0FDRSx5QkFBQyxXQUFEO0FBQ0MsZ0JBQVEsRUFBRzhFLGVBQWUsQ0FBRWhGLFVBQVUsQ0FBQ2lGLElBQWIsQ0FEM0I7QUFFQyxvQkFBWSxFQUFDLEtBRmQ7QUFHQyxxQkFBYSxFQUFHeEY7QUFIakIsUUFERixDQURELENBREQ7QUFVQSxLQVhELENBOUI4QyxDQTJDOUM7OztBQUNDLFdBQVEsQ0FDUHNDLHVCQUF1QixFQURoQixFQUVScEIscUJBQXFCLEVBRmIsQ0FBUjtBQUtELEdBL0QrQjtBQStEN0I7QUFFSEcsTUFqRWdDLHVCQWlFWDtBQUFBLFFBQWRkLFVBQWMsU0FBZEEsVUFBYztBQUVwQixRQUFJRSxPQUFPLEdBQUdILFVBQVUsQ0FBQ0MsVUFBRCxDQUF4QjtBQUVBLFdBQ0M7QUFBSyxlQUFPRTtBQUFaLE9BQ0MseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERCxDQUREO0FBS0E7QUExRStCLENBQWhCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7SUNyRFF4QixFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0lBRVBHLGlCLEdBQ0dGLEVBQUUsQ0FBQ0csTSxDQURORCxpQjtJQUdBVyxXLEdBQ0diLEVBQUUsQ0FBQ0ksVyxDQUROUyxXOztBQUdELElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsU0FDQztBQUNDLFNBQUssRUFBQyxJQURQO0FBRUMsVUFBTSxFQUFDLElBRlI7QUFHQyxhQUFTLEVBQUMsVUFIWDtBQUlDLE9BQUcsRUFBR0MsVUFBVSxHQUFHLFdBSnBCO0FBS0MsT0FBRyxFQUFDO0FBTEwsSUFERDtBQVNBLENBVkQ7O0FBYUFqQixpQkFBaUIsQ0FBQyxZQUFELEVBQWU7QUFFOUJ3QixPQUFLLEVBQUUzQixFQUFFLENBQUMsS0FBRCxDQUZxQjtBQUc5QjRCLE1BQUksRUFBRVQsVUFId0I7QUFJOUJ5RixRQUFNLEVBQUUsQ0FBRSxhQUFGLENBSnNCO0FBSzlCL0UsVUFBUSxFQUFFLFdBTG9CO0FBTy9CZ0YsVUFBUSxFQUFFO0FBQ1RDLFlBQVEsRUFBRSxLQUREO0FBRVRDLFlBQVEsRUFBRSxLQUZEO0FBR1RDLFFBQUksRUFBRTtBQUhHLEdBUHFCO0FBYy9CakYsTUFkK0Isc0JBY0M7QUFBQSxRQUF6QlQsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsUUFBYkcsU0FBYSxRQUFiQSxTQUFhO0FBQy9CLFdBQ0M7QUFBSyxlQUFNO0FBQVgsT0FDQyx5QkFBQyxXQUFEO0FBQWEsa0JBQVksRUFBRztBQUE1QixNQURELENBREQ7QUFLQSxHQXBCOEI7QUFvQjVCO0FBRUhXLE1BdEIrQix1QkFzQnJCO0FBQUE7O0FBQ1QsV0FDQztBQUFLLGVBQU07QUFBWCxPQUNDLHlCQUFDLFdBQUQsQ0FBYSxPQUFiLE9BREQsQ0FERDtBQUtBO0FBNUI4QixDQUFmLENBQWpCLEMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImltcG9ydCAnLi9ib3hvdXQvYmxvY2snO1xuaW1wb3J0ICcuL2J1dHRvbi9ibG9jayc7XG5pbXBvcnQgJy4vY2FyZC9ibG9jayc7XG5pbXBvcnQgJy4vaGVyby9ibG9jayc7XG5pbXBvcnQgJy4vbWV0cmljL2Jsb2NrJztcbi8vIGRpc2FibGUgbm90aWNlcyB1bnRpbCB3ZSBpcm9uIG91dCB0aGVpciBmdW5jdGlvbmFsaXR5XG4vLyBpbXBvcnQgJy4vbm90aWNlL2Jsb2NrJzsgXG5pbXBvcnQgJy4vcGFuZWwvYmxvY2snO1xuaW1wb3J0ICcuL3F1b3RlL2Jsb2NrJztcbmltcG9ydCAnLi90YWJzL3RhYic7XG5pbXBvcnQgJy4vdGFicy9ibG9jayc7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbidcbl07XG5jb25zdCBURU1QTEFURSA9IFtcbiAgWydjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJveG91dCBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfV0sXG5dO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9ib3hvdXQucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoYXR0cmlidXRlcywgaXNTZWxlY3RlZCkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFwiY2wtYm94b3V0XCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYm94b3V0JywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQm94b3V0JyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkKTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiVGl0bGVcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdDxoMT57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDE+XG5cdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhclxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYnV0dG9uLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLWJ1dHRvblwiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLnN0eWxlXG5cdH1cblx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9idXR0b24nLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdCdXR0b24nKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXHRcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYnV0dG9uIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblxuXHRcdFx0bGV0IG1ldGE7XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdC8vIHNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XHQvLyBzZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9IFwiXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWJ1dHRvbi1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGV4dDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50ZXh0IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHQvLyBAdG9kbzogZG8gd2UgbmVlZCBhbGlnbm1lbnQvZmxvYXQgY29udHJvbHMgb24gYnV0dG9ucz9cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cdFx0XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiQnV0dG9uIFN0eWxlXCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIkJ1dHRvbiBTdHlsZVwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcImRlZmF1bHRcIiwgXCJwcm9taW5lbnRcIiwgXCJkaXNhYmxlZFwiIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09ICdkZWZhdWx0JykgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9IChhdHRyaWJ1dGVzLnN0eWxlID09IHVuZGVmaW5lZCkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0gKGtleSA9PT0gc3R5bGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdHlsZToga2V5IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdC8vY3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGEgY2xhc3M9e2NsYXNzZXN9IGhyZWY9eyBhdHRyaWJ1dGVzLmxpbmsgfSB0aXRsZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9PlxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMudGV4dCB9XG5cdFx0XHQ8L2E+XG5cdFx0KTtcblxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8c3ZnXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHQ+XG5cdFx0XHQ8cGF0aCBkPVwiTTIsOCBMMiwxNiBMMTYsMTYgTDE2LDggTDIsOCBaIE0yLDcgTDE2LDcgTDE2LDIgTDIsMiBMMiw3IFogTTE4LDEgTDE4LDE3IEMxOCwxNyAxOCwxOCAxOCwxOCBDMTgsMTggMTcsMTggMTcsMTggTDEsMTggQzEsMTggMCwxOCAwLDE4IEMwLDE4IDAsMTcgMCwxNyBMMCwxIEMwLDEgMCwwIDAsMCBDMCwwIDEsMCAxLDAgTDE3LDAgQzE3LDAgMTgsMCAxOCwwIEMxOCwwIDE4LDEgMTgsMSBaIE0xNSwxNSBMMywxNSBMMywxMiBMMTUsMTIgTDE1LDE1IFpcIi8+XG5cdFx0PC9zdmc+XG5cdCk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoYXR0cmlidXRlcywgaXNTZWxlY3RlZCkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFwiY2wtY2FyZFwiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiggISEgYXR0cmlidXRlcy5hbGlnbm1lbnQgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdH1cblxuXHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0fSBlbHNlIHtcblx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHR9XG5cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2NhcmQnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdDYXJkJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9XG5cdH0sXG5cdFxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLm1lZGlhSUQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRcblx0XHRsZXQgbWV0YTtcblx0XHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3M9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KVxuXG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XG5cdFx0XHQvLyBzZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9IFwiXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWNhcmQtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSB0aXRsZT17dGl0bGV9PlxuXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1jYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdDxoMz48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGNhcmQgdGl0bGVcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBib2R5OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgY2FyZCB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdG9vbHRpcDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXHRcblx0XHQvLyBAdG9kbzogdXNlIHRoZSBtZWRpYSBJRCB0byBidWlsZCBhIHNyYyBzZXRcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdGlmICggISEgYXR0cmlidXRlcy5hbGlnbm1lbnQgKSB7XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5hbGlnbm1lbnRcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxhIGNsYXNzPXtjbGFzc2VzfSBocmVmPXsgYXR0cmlidXRlcy5saW5rIH0+XG5cdFx0XHRcdFx0PGltZyBzcmM9eyBhdHRyaWJ1dGVzLmltZyB9IGFsdD17IGF0dHJpYnV0ZXMuYWx0IH0gLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZC10ZXh0XCI+XG5cdFx0XHRcdFx0XHQ8aDM+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gzPlxuXHRcdFx0XHRcdFx0PFJpY2hUZXh0LkNvbnRlbnRcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1idXR0b25cIj57IGF0dHJpYnV0ZXMuYnV0dG9uIH08L2Rpdj5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEljb25CdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2hlcm8ucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IHJhbmRvbUlEID0gKCkgPT4ge1xuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82ODYwODUzL2dlbmVyYXRlLXJhbmRvbS1zdHJpbmctZm9yLWRpdi1pZFxuXHRsZXQgUzQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICgoKDErTWF0aC5yYW5kb20oKSkqMHgxMDAwMCl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblx0fTtcblx0cmV0dXJuIChTNCgpK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStTNCgpK1M0KCkpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvaGVybycsIHsgICBcblxuICB0aXRsZTogX18oJ0hlcm8nKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0Ly8gdGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3ViaGVhZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdClcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBoZXJvIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblxuXHRcdFx0aWYoICEgYXR0cmlidXRlcy5pZCApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5pZCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR9XHRcdFx0XG5cblx0XHRcdGxldCBjbGFzc2VzID0gXCJjbC1oZXJvXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0fVxuXHRcdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtaGVyby10ZXh0IG92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgaGVybyB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwic3ViaGVhZFwiPjxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBzdWJoZWFkOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJoZWFkIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgaGVybyBzdWJ0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzdWJoZWFkXCJcblx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYnV0dG9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiRm9ybWF0XCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIkhlcm8gRm9ybWF0XCIgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbIFwiZGVmYXVsdFwiLCBcImZ1bGx3aWR0aFwiLCBcInN1cGVyXCIgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gXCJkZWZhdWx0XCIpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5mb3JtYXQ7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gJ2RlZmF1bHQnKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9IChhdHRyaWJ1dGVzLmZvcm1hdCA9PSB1bmRlZmluZWQpID8gJycgOiBhdHRyaWJ1dGVzLmZvcm1hdDsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSAoa2V5ID09PSBmb3JtYXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBmb3JtYXQ6IGtleSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJWaWRlbyBVUkxcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdmlkOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmlkIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIkZvciBjcmVhdGluZyBhIHZpZGVvIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFxuXHRcdC8vIEB0b2RvOiB1c2UgdGhlIG1lZGlhIElEIHRvIGJ1aWxkIGEgc3JjIHNldFxuXG5cdFx0bGV0IGNsYXNzZXMgPSBcImNsLWhlcm9cIjtcblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHRcdH1cblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuZm9ybWF0XG5cdFx0fVxuXHRcdGxldCBiZyA9IFwiXCI7XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdGJnID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIGF0dHJpYnV0ZXMuaW1nICsgXCIpXCI7XG5cdFx0fVxuXHRcdGxldCBzdGlsbCA9IFwic3RpbGxcIjtcblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudmlkICkge1xuXHRcdFx0c3RpbGwgPSBcInBvc3RlclwiO1xuXHRcdH1cblx0XHRsZXQgYnV0dG9uID0gXCJcIjtcblx0XHRpZiggISEgYXR0cmlidXRlcy5idXR0b24gJiYgISEgYXR0cmlidXRlcy5saW5rICkge1xuXHRcdFx0YnV0dG9uID0gKCA8YSBjbGFzcz1cImNsLWJ1dHRvblwiIGhyZWY9eyBhdHRyaWJ1dGVzLmxpbmsgfT57IGF0dHJpYnV0ZXMuYnV0dG9uIH08L2E+ICk7XG5cdFx0fVxuXHRcdC8vIEB0b2RvIGFkZCBzdGlsbCBwaG90byBhbmltYXRpb25zLi4uIGUuZy4gXCJhbmltYXRpb24gc2hpZnRcIlxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0PGgxPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMT5cblx0XHRcdFx0XHRcdDxwPnsgYXR0cmlidXRlcy5zdWJoZWFkIH08L3A+XG5cdFx0XHRcdFx0XHR7YnV0dG9ufVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD17YXR0cmlidXRlcy5pZH0gZGF0YS1pZD17YXR0cmlidXRlcy52aWR9IGNsYXNzPXtzdGlsbH0gc3R5bGU9e2JnfT48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvbWV0cmljLnBuZycpfVxuXHRcdFx0YWx0PVwibWV0cmljXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLW1ldHJpY1wiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLnN0eWxlXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvbWV0cmljJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnTWV0cmljJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRtZXRyaWM6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH1cblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcywgaXNTZWxlY3RlZCk7XG5cdFx0XHRcblx0XHRcdC8vIHNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWV0cmljLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBtZXRyaWM6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWV0cmljIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiMTAwJVwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGNhcHRpb246IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwibWV0cmljcyBvbiB0aGlzIHBhZ2VcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHQvLyBAdG9kbzogdGVjaG5pY2FsbHksIHlvdSBjYW4gaGF2ZSBhIGNsZWFyIGFuZCBkYXJrIG1ldHJpY1xuXHRcdC8vIFx0XHRcdFx0b3VyIGJ1dHRvbmdyb3VwIG9ubHkgYWxsb3dzIHVzZXJzIHRvIHNlbGVjdCBvbmVcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdG9vbHRpcDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJNZXRyaWMgU3R5bGVcIiApIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oIFwiTWV0cmljIFN0eWxlXCIgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbIFwic3RhbmRhcmRcIiwgXCJjbGVhclwiLCBcImRhcmtcIiwgXCJvdmVybGF5XCIgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICh2YWx1ZSA9PT0gXCJkZWZhdWx0XCIpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IGtleSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdGxldCB0aXRsZSA9IFwiXCI7XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHQ8c3Bhbj57IGF0dHJpYnV0ZXMubWV0cmljIH08L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnsgYXR0cmlidXRlcy5jYXB0aW9uIH08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0SWNvbkJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9oZWFkaW5nJywgeyBsZXZlbDogMSwgcGxhY2Vob2xkZXI6ICdNeSBQYW5lbCcgfV0sXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfV0sXG4gIFsndXJpLWNsL2J1dHRvbicsIHt9XVxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvcGFuZWwucG5nJyl9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoYXR0cmlidXRlcykgPT4ge1xuXHRsZXQgY2xhc3NlcyA9IFwiY2wtcGFuZWxcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMucmV2ZXJzZSApIHtcblx0XHRjbGFzc2VzICs9IFwiIHJldmVyc2VcIlxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9wYW5lbCcsIHsgICBcblxuICB0aXRsZTogX18oJ1BhbmVsJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRyZXZlcnNlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLm1lZGlhSUQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzPVwicG9zdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJQYW5lbCBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJQYW5lbCBTdHlsZVwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcInN0YW5kYXJkXCIsIFwicmV2ZXJzZVwiIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09IFwic3RhbmRhcmRcIikgPyAnZmFsc2UnIDogJ3RydWUnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCByID0gKGF0dHJpYnV0ZXMucmV2ZXJzZSkgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0gKCBrZXkgPT09IHIgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyByZXZlcnNlOiAoa2V5PT09J3RydWUnKSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXG5cdFx0XHQpO1xuXHRcdH1cbiAgXHRcblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG4gIFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9Plx0XG5cdFx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2F0dHJpYnV0ZXMuaW1nfSBhbHQ9e2F0dHJpYnV0ZXMuYWx0fS8+XG5cdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9wYXJhZ3JhcGgnXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfV1cbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL3F1b3RlLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLXF1b3RlXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL3F1b3RlJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnUXVvdGUnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHF1b3RlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNpdGF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmKGF0dHJpYnV0ZXMubWVkaWFJRCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQpO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGltYWdlQ2xhc3MgPSAoICEhIGF0dHJpYnV0ZXMubWVkaWFJRCApID8gXCJjbC1xdW90ZS1pbWFnZVwiIDogXCJcIjtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9e2ltYWdlQ2xhc3N9PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdDxjaXRlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBjaXRhdGlvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jaXRhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIkFub255bW91c1wiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9jaXRlPlxuXHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG4gIFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXHRcdFxuXHRcdGxldCBpbWFnZVN0eWxlID0gXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIGF0dHJpYnV0ZXMuaW1nICsgXCIpXCI7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtcXVvdGUtaW1hZ2VcIiBzdHlsZT17aW1hZ2VTdHlsZX0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdFx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdDxjaXRlPnthdHRyaWJ1dGVzLmNpdGF0aW9ufTwvY2l0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFxuXG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGVcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0UmFuZ2VDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VlZGl0b3I7XG5cblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCd1cmktY2wvdGFiJ1xuXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvdGFicy5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC10YWJzXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5jb25zdCBnZXRUYWJzVGVtcGxhdGUgPSAoIHRhYnMgKSA9PiB7XG5cblx0cmV0dXJuIFsuLi5BcnJheSh0YWJzKV0ubWFwKGZ1bmN0aW9uKHgpe1xuXHRcdHJldHVybiBbJ3VyaS1jbC90YWInLCB7fV07XG5cdH0pO1xuXHRcbn1cblxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvdGFicycsIHsgICBcblxuICB0aXRsZTogX18oJ1RhYnMnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHRhYnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMixcblx0XHR9LFxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiVGFic1wiICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50YWJzIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dFRhYnMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhYnM6IG5leHRUYWJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17IDYgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuICBcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgZ2V0VGFic1RlbXBsYXRlKCBhdHRyaWJ1dGVzLnRhYnMgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPVwiYWxsXCJcblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcbiAgXHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9Plx0XG5cdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL3RhYi5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL3RhYicsIHsgICBcblxuICB0aXRsZTogX18oJ1RhYicpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBwYXJlbnQ6IFsgJ3VyaS1jbC90YWJzJyBdLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRzdXBwb3J0czoge1xuXHRcdGluc2VydGVyOiBmYWxzZSxcblx0XHRyZXVzYWJsZTogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtdGFiXCI+XG5cdFx0XHRcdDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgfSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtdGFiXCI+XG5cdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0XG5cdFxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=