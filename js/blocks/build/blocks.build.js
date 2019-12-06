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
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
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
    var attributes = _ref2.attributes;
    return wp.element.createElement("div", {
      "class": "cl-tab"
    }, wp.element.createElement(InnerBlocks.Content, null));
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvaGVyby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL21ldHJpYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL3BhbmVsL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvcXVvdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy90YWJzL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvdGFicy90YWIuanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImJsb2NrRWRpdG9yIiwiUGxhaW5UZXh0IiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwicGxhY2Vob2xkZXIiLCJkcm9wQ2FwIiwiY3VzdG9tSWNvbiIsIlVSSV9DTF9VUkwiLCJjbGFzc05hbWVzIiwiYXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiYWxpZ25tZW50IiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJ0eXBlIiwiZWRpdCIsInNldEF0dHJpYnV0ZXMiLCJjcmVhdGVDb250ZW50RWRpdEZvcm0iLCJjb250ZW50IiwiY3JlYXRlQmxvY2tDb250cm9scyIsInNhdmUiLCJVUkxJbnB1dCIsImNvbXBvbmVudHMiLCJEYXNoaWNvbiIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwiQmFzZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwic3R5bGUiLCJsaW5rIiwidGV4dCIsInRvb2x0aXAiLCJtZXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUluc3BlY3RvckNvbnRyb2xzIiwibWFwIiwidmFsdWUiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImtleSIsInVuZGVmaW5lZCIsIndpdGhOb3RpY2VzIiwiTWVkaWFQbGFjZWhvbGRlciIsIk1lZGlhVXBsb2FkQ2hlY2siLCJBbGlnbm1lbnRUb29sYmFyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsImltZyIsImJvZHkiLCJtZWRpYUlEIiwiYWx0IiwiYnV0dG9uIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJpbnN0cnVjdGlvbnMiLCJtZWRpYSIsInVybCIsImlkIiwib3BlbiIsInJhbmRvbUlEIiwiUzQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJzdWJoZWFkIiwidmlkIiwiZm9ybWF0IiwiYW5pbWF0aW9uIiwiYmciLCJzdGlsbCIsIm1ldHJpYyIsImNhcHRpb24iLCJsZXZlbCIsInJldmVyc2UiLCJyIiwicXVvdGUiLCJjaXRhdGlvbiIsImltYWdlQ2xhc3MiLCJpbWFnZVN0eWxlIiwiUmFuZ2VDb250cm9sIiwiZ2V0VGFic1RlbXBsYXRlIiwidGFicyIsIkFycmF5IiwiZGVmYXVsdCIsIm5leHRUYWJzIiwicGFyZW50Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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LFVBQU0sRUFBQyxJQUZSO0FBR0MsYUFBUyxFQUFDLFVBSFg7QUFJQyxPQUFHLEVBQUdDLFVBQVUsR0FBRyxXQUpwQjtBQUtDLE9BQUcsRUFBQztBQUxMLElBREQ7QUFTQSxDQVZEOztBQWFBakIsaUJBQWlCLENBQUMsWUFBRCxFQUFlO0FBRTlCd0IsT0FBSyxFQUFFM0IsRUFBRSxDQUFDLEtBQUQsQ0FGcUI7QUFHOUI0QixNQUFJLEVBQUVULFVBSHdCO0FBSTlCdUYsUUFBTSxFQUFFLENBQUUsYUFBRixDQUpzQjtBQUs5QjdFLFVBQVEsRUFBRSxXQUxvQjtBQU8vQjhFLFVBQVEsRUFBRTtBQUNUQyxZQUFRLEVBQUUsS0FERDtBQUVUQyxZQUFRLEVBQUUsS0FGRDtBQUdUQyxRQUFJLEVBQUU7QUFIRyxHQVBxQjtBQWMvQi9FLE1BZCtCLHNCQWNDO0FBQUEsUUFBekJULFVBQXlCLFFBQXpCQSxVQUF5QjtBQUFBLFFBQWJHLFNBQWEsUUFBYkEsU0FBYTtBQUMvQixXQUNDO0FBQUssZUFBTTtBQUFYLE9BQ0MseUJBQUMsV0FBRDtBQUFhLGtCQUFZLEVBQUc7QUFBNUIsTUFERCxDQUREO0FBS0EsR0FwQjhCO0FBb0I1QjtBQUVIVyxNQXRCK0IsdUJBc0JWO0FBQUEsUUFBZGQsVUFBYyxTQUFkQSxVQUFjO0FBQ3BCLFdBQ0M7QUFBSyxlQUFNO0FBQVgsT0FDQyx5QkFBQyxXQUFELENBQWEsT0FBYixPQURELENBREQ7QUFLQTtBQTVCOEIsQ0FBZixDQUFqQixDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgJy4vYm94b3V0L2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuaW1wb3J0ICcuL2hlcm8vYmxvY2snO1xuaW1wb3J0ICcuL21ldHJpYy9ibG9jayc7XG4vLyBkaXNhYmxlIG5vdGljZXMgdW50aWwgd2UgaXJvbiBvdXQgdGhlaXIgZnVuY3Rpb25hbGl0eVxuLy8gaW1wb3J0ICcuL25vdGljZS9ibG9jayc7IFxuaW1wb3J0ICcuL3BhbmVsL2Jsb2NrJztcbmltcG9ydCAnLi9xdW90ZS9ibG9jayc7XG5pbXBvcnQgJy4vdGFicy90YWInO1xuaW1wb3J0ICcuL3RhYnMvYmxvY2snO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFVcGxvYWQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRJY29uQnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBib3hvdXQgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH1dLFxuXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYm94b3V0LnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLWJveG91dFwiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5hbGlnbm1lbnRcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2JveG91dCcsIHsgICBcblxuICB0aXRsZTogX18oJ0JveG91dCcpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0pIHtcblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcywgaXNTZWxlY3RlZCk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIlRpdGxlXCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHQ8aDE+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gxPlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXJcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL2J1dHRvbi5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC1idXR0b25cIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5hbGlnbm1lbnRcblx0fVxuXHRpZiggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5zdHlsZVxuXHR9XG5cdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYnV0dG9uJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQnV0dG9uJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblx0XG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGJ1dHRvbiBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cblx0XHRcdGxldCBtZXRhO1xuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRtZXRhID0gKFxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHQvLyBzZXQgdGhlIGNsYXNzbmFtZXNcblx0XHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXHRcdFx0Ly8gc2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSBcIlwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1idXR0b24tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPXtjbGFzc2VzfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRleHQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGV4dCB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgYnV0dG9uIHRleHRcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIkJ1dHRvbiBTdHlsZVwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJCdXR0b24gU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJkZWZhdWx0XCIsIFwicHJvbWluZW50XCIsIFwiZGlzYWJsZWRcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSAnZGVmYXVsdCcpID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc3R5bGUgPSAoYXR0cmlidXRlcy5zdHlsZSA9PSB1bmRlZmluZWQpID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlOyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IChrZXkgPT09IHN0eWxlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgc3R5bGU6IGtleSB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHQvL2NyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxhIGNsYXNzPXtjbGFzc2VzfSBocmVmPXsgYXR0cmlidXRlcy5saW5rIH0gdGl0bGU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfT5cblx0XHRcdFx0eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEljb25CdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvblxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PHN2Z1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0PlxuXHRcdFx0PHBhdGggZD1cIk0yLDggTDIsMTYgTDE2LDE2IEwxNiw4IEwyLDggWiBNMiw3IEwxNiw3IEwxNiwyIEwyLDIgTDIsNyBaIE0xOCwxIEwxOCwxNyBDMTgsMTcgMTgsMTggMTgsMTggQzE4LDE4IDE3LDE4IDE3LDE4IEwxLDE4IEMxLDE4IDAsMTggMCwxOCBDMCwxOCAwLDE3IDAsMTcgTDAsMSBDMCwxIDAsMCAwLDAgQzAsMCAxLDAgMSwwIEwxNywwIEMxNywwIDE4LDAgMTgsMCBDMTgsMCAxOCwxIDE4LDEgWiBNMTUsMTUgTDMsMTUgTDMsMTIgTDE1LDEyIEwxNSwxNSBaXCIvPlxuXHRcdDwvc3ZnPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLWNhcmRcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmFsaWdubWVudFxuXHR9XG5cblx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NlcyArPSAnIG5vLWltYWdlJztcblx0fVxuXG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9jYXJkJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQ2FyZCcpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHQvLyB0aGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdClcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXHRcdFxuXHRcdFx0Ly8gc2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSBcIlwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1jYXJkLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gdGl0bGU9e3RpdGxlfT5cblxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZC10ZXh0XCI+XG5cdFx0XHRcdFx0XHQ8aDM+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBjYXJkIHRpdGxlXCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L2gzPlxuXHRcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHRhZ25hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGNhcmQgdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XG5cdFx0Ly8gQHRvZG86IHVzZSB0aGUgbWVkaWEgSUQgdG8gYnVpbGQgYSBzcmMgc2V0XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8YSBjbGFzcz17Y2xhc3Nlc30gaHJlZj17IGF0dHJpYnV0ZXMubGluayB9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXsgYXR0cmlidXRlcy5pbWcgfSBhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9IC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMz5cblx0XHRcdFx0XHRcdDxSaWNoVGV4dC5Db250ZW50XG5cdFx0XHRcdFx0XHRcdHRhZ05hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtYnV0dG9uXCI+eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9PC9kaXY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRJY29uQnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9oZXJvLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCByYW5kb21JRCA9ICgpID0+IHtcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg2MDg1My9nZW5lcmF0ZS1yYW5kb20tc3RyaW5nLWZvci1kaXYtaWRcblx0bGV0IFM0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG5cdH07XG5cdHJldHVybiAoUzQoKStTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrUzQoKStTNCgpKTtcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2hlcm8nLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdIZXJvJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN1YmhlYWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHZpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbmltYXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH1cblx0fSxcblx0XG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmKGF0dHJpYnV0ZXMubWVkaWFJRCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdFxuXHRcdGxldCBtZXRhO1xuXHRcdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRtZXRhID0gKFxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpXG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgaGVybyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cblx0XHRcdGlmKCAhIGF0dHJpYnV0ZXMuaWQgKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuaWQgPSByYW5kb21JRCgpO1xuXHRcdFx0fVx0XHRcdFxuXG5cdFx0XHRsZXQgY2xhc3NlcyA9IFwiY2wtaGVyb1wiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdH1cblx0XHRcdGlmKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBzZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9IFwiXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWhlcm8tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSB0aXRsZT17dGl0bGV9PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWhlcm8tdGV4dCBvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGhlcm8gdGl0bGVcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInN1YmhlYWRcIj48UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgc3ViaGVhZDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3ViaGVhZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGhlcm8gc3VidGl0bGVcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3ViaGVhZFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjbC1idXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIllvdXIgYnV0dG9uIHRleHRcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIkZvcm1hdFwiICkgfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggXCJIZXJvIEZvcm1hdFwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcImRlZmF1bHRcIiwgXCJmdWxsd2lkdGhcIiwgXCJzdXBlclwiIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zdCBrZXkgPSAodmFsdWUgPT09IFwiZGVmYXVsdFwiKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnN0IGlzU2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09ICdkZWZhdWx0JykgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoYXR0cmlidXRlcy5mb3JtYXQgPT0gdW5kZWZpbmVkKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0gKGtleSA9PT0gZm9ybWF0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgZm9ybWF0OiBrZXkgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVmlkZW8gVVJMXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHZpZDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZpZCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJGb3IgY3JlYXRpbmcgYSB2aWRlbyBoZXJvLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93Plx0XHRcdFx0XHRcdFxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdG9vbHRpcDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXHRcblx0XHQvLyBAdG9kbzogdXNlIHRoZSBtZWRpYSBJRCB0byBidWlsZCBhIHNyYyBzZXRcblxuXHRcdGxldCBjbGFzc2VzID0gXCJjbC1oZXJvXCI7XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0XHR9XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmZvcm1hdFxuXHRcdH1cblx0XHRsZXQgYmcgPSBcIlwiO1xuXHRcdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0XHRiZyA9IFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBhdHRyaWJ1dGVzLmltZyArIFwiKVwiO1xuXHRcdH1cblx0XHRsZXQgc3RpbGwgPSBcInN0aWxsXCI7XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnZpZCApIHtcblx0XHRcdHN0aWxsID0gXCJwb3N0ZXJcIjtcblx0XHR9XG5cdFx0bGV0IGJ1dHRvbiA9IFwiXCI7XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMuYnV0dG9uICYmICEhIGF0dHJpYnV0ZXMubGluayApIHtcblx0XHRcdGJ1dHRvbiA9ICggPGEgY2xhc3M9XCJjbC1idXR0b25cIiBocmVmPXsgYXR0cmlidXRlcy5saW5rIH0+eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9PC9hPiApO1xuXHRcdH1cblx0XHQvLyBAdG9kbyBhZGQgc3RpbGwgcGhvdG8gYW5pbWF0aW9ucy4uLiBlLmcuIFwiYW5pbWF0aW9uIHNoaWZ0XCJcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cblx0XHRcdFx0XHRcdDxoMT57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDE+XG5cdFx0XHRcdFx0XHQ8cD57IGF0dHJpYnV0ZXMuc3ViaGVhZCB9PC9wPlxuXHRcdFx0XHRcdFx0e2J1dHRvbn1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9e2F0dHJpYnV0ZXMuaWR9IGRhdGEtaWQ9e2F0dHJpYnV0ZXMudmlkfSBjbGFzcz17c3RpbGx9IHN0eWxlPXtiZ30+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdFxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL21ldHJpYy5wbmcnKX1cblx0XHRcdGFsdD1cIm1ldHJpY1wiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC1tZXRyaWNcIjtcblx0aWYoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lXG5cdH1cblx0aWYoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5zdHlsZVxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5hbGlnbm1lbnRcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL21ldHJpYycsIHsgICBcblxuICB0aXRsZTogX18oJ01ldHJpYycpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bWV0cmljOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9XG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQpO1xuXHRcdFx0XG5cdFx0XHQvLyBzZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9IFwiXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLW1ldHJpYy1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgbWV0cmljOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1ldHJpYyB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIjEwMCVcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBjYXB0aW9uOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXyhcIm1ldHJpY3Mgb24gdGhpcyBwYWdlXCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Ly8gQHRvZG86IHRlY2huaWNhbGx5LCB5b3UgY2FuIGhhdmUgYSBjbGVhciBhbmQgZGFyayBtZXRyaWNcblx0XHQvLyBcdFx0XHRcdG91ciBidXR0b25ncm91cCBvbmx5IGFsbG93cyB1c2VycyB0byBzZWxlY3Qgb25lXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiTWV0cmljIFN0eWxlXCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIk1ldHJpYyBTdHlsZVwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcInN0YW5kYXJkXCIsIFwiY2xlYXJcIiwgXCJkYXJrXCIsIFwib3ZlcmxheVwiIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09IFwiZGVmYXVsdFwiKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHN0eWxlOiBrZXkgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cblxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRsZXQgdGl0bGUgPSBcIlwiO1xuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0PHNwYW4+eyBhdHRyaWJ1dGVzLm1ldHJpYyB9PC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj57IGF0dHJpYnV0ZXMuY2FwdGlvbiB9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblxuXG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvaGVhZGluZycsIHsgbGV2ZWw6IDEsIHBsYWNlaG9sZGVyOiAnTXkgUGFuZWwnIH1dLFxuICBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH1dLFxuICBbJ3VyaS1jbC9idXR0b24nLCB7fV1cbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsoVVJJX0NMX1VSTCArICdpL3BhbmVsLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLXBhbmVsXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLnJldmVyc2UgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiByZXZlcnNlXCJcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvcGFuZWwnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdQYW5lbCcpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cmV2ZXJzZToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuXHRcdFx0aWYoYXR0cmlidXRlcy5tZWRpYUlEKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZyBcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzcz1cInBvc3RlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXtURU1QTEFURX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiUGFuZWwgU3R5bGVcIiApIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oIFwiUGFuZWwgU3R5bGVcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJzdGFuZGFyZFwiLCBcInJldmVyc2VcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcInN0YW5kYXJkXCIpID8gJ2ZhbHNlJyA6ICd0cnVlJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgciA9IChhdHRyaWJ1dGVzLnJldmVyc2UpID8gJ3RydWUnIDogJ2ZhbHNlJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9ICgga2V5ID09PSByICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgcmV2ZXJzZTogKGtleT09PSd0cnVlJykgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cblxuXHRcdFx0KTtcblx0XHR9XG4gIFx0XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuICBcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cdFxuXHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXthdHRyaWJ1dGVzLmltZ30gYWx0PXthdHRyaWJ1dGVzLmFsdH0vPlxuXHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpO1xuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRJY29uQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJ1xuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuICBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH1dXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9xdW90ZS5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC1xdW90ZVwiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9xdW90ZScsIHsgICBcblxuICB0aXRsZTogX18oJ1F1b3RlJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRxdW90ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjaXRhdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLm1lZGlhSUQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBpbWFnZUNsYXNzID0gKCAhISBhdHRyaWJ1dGVzLm1lZGlhSUQgKSA/IFwiY2wtcXVvdGUtaW1hZ2VcIiA6IFwiXCI7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtpbWFnZUNsYXNzfT5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0XHRcdFx0XHQ8Y2l0ZT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgY2l0YXRpb246IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2l0YXRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJBbm9ueW1vdXNcIil9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0XHQvPjwvY2l0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuICBcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblx0XHRcblx0XHRsZXQgaW1hZ2VTdHlsZSA9IFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBhdHRyaWJ1dGVzLmltZyArIFwiKVwiO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLXF1b3RlLWltYWdlXCIgc3R5bGU9e2ltYWdlU3R5bGV9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PGJsb2NrcXVvdGU+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHRcdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0XHRcdFx0XHQ8Y2l0ZT57YXR0cmlidXRlcy5jaXRhdGlvbn08L2NpdGU+XG5cdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcblxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFJhbmdlQ29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCd1cmktY2wvdGFiJ1xuXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvdGFicy5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC10YWJzXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5jb25zdCBnZXRUYWJzVGVtcGxhdGUgPSAoIHRhYnMgKSA9PiB7XG5cblx0cmV0dXJuIFsuLi5BcnJheSh0YWJzKV0ubWFwKGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIFsndXJpLWNsL3RhYicsIHt9XTtcblx0fSk7XG5cdFxufVxuXG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC90YWJzJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnVGFicycpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGFiczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAyLFxuXHRcdH0sXG5cdH0sXG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXG5cdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJUYWJzXCIgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRhYnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0VGFicyApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFiczogbmV4dFRhYnMsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsgMiB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXsgNiB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG4gIFxuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBnZXRUYWJzVGVtcGxhdGUoIGF0dHJpYnV0ZXMudGFicyApIH1cblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9XCJhbGxcIlxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuICBcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpXG4gIFx0XSk7XG4gIFx0XG5cdH0sIC8vIGVuZCBlZGl0XG5cdFxuXHRzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XHRcblx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvdGFiLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvdGFiJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnVGFiJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIHBhcmVudDogWyAndXJpLWNsL3RhYnMnIF0sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdHN1cHBvcnRzOiB7XG5cdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJjbC10YWJcIj5cblx0XHRcdFx0PElubmVyQmxvY2tzIHRlbXBsYXRlTG9jaz17IGZhbHNlIH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cImNsLXRhYlwiPlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9