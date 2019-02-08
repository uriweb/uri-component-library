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
/* harmony import */ var _hero2_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero2/block */ "./js/blocks/src/hero2/block.js");
/* harmony import */ var _hero2_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hero2_block__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./js/blocks/src/boxout/block.js":
/*!***************************************!*\
  !*** ./js/blocks/src/boxout/block.js ***!
  \***************************************/
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
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'uri-cl/button'];
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

var classNames = function classNames(attributes) {
  var classes = "cl-boxout";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
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
        setAttributes = _ref.setAttributes;

    // generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes);
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
        placeholder: __("Your boxout title"),
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
var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    URLInput = _wp$editor.URLInput,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;
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


      var classes = "cl-button";

      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      } // set the tooltip


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
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    PlainText = _wp$editor.PlainText,
    URLInput = _wp$editor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

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

var classNames = function classNames(attributes) {
  var classes = "cl-card";

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += " " + attributes.className;
  }

  if (!!attributes.alignment) {
    classes += " " + attributes.alignment;
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
      }));
    } // generate editor view of the card itself


    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes); // set the tooltip

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
      })), meta);
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
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    PlainText = _wp$editor.PlainText,
    URLInput = _wp$editor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

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
      })), wp.element.createElement("fieldset", null, wp.element.createElement(PlainText, {
        className: "vid",
        onChange: function onChange(content) {
          return setAttributes({
            vid: content,
            id: content
          });
        },
        value: attributes.vid,
        placeholder: __("Youtube ID"),
        keepPlaceholderOnFocus: true
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
      })))), meta));
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
        var capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        var key = value === "default" ? '' : value;
        var isSelected = key === attributes.format;
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

/***/ "./js/blocks/src/hero2/block.js":
/*!**************************************!*\
  !*** ./js/blocks/src/hero2/block.js ***!
  \**************************************/
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
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    Toolbar = _wp$editor.Toolbar,
    IconButton = _wp$editor.IconButton,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'uri-cl/button'];
var TEMPLATE = [['core/heading', {
  level: 1,
  placeholder: 'My Hero'
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
    src: URI_CL_URL + 'i/hero.png',
    alt: "button"
  });
};

registerBlockType('uri-cl/hero2', {
  title: __('hero2'),
  icon: customIcon,
  category: 'cl-blocks',
  attributes: {
    title: {
      type: 'string'
    },
    alignment: {
      type: 'string'
    },
    mediaID: {
      type: 'number'
    },
    vid: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    alt: {
      type: 'string'
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

    var createContentEditForm = function createContentEditForm() {
      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        "class": "cl-hero2"
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
      })), wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
        templateLock: "all"
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
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var classes = "cl-hero";

    if (!!attributes.className) {
      // @todo this gets automatically applied to wrapper... remove it?
      classes += " " + attributes.className;
    }

    if (!!attributes.alignment) {
      classes += " " + attributes.alignment;
    }

    if (!!attributes.format) {
      classes += " " + attributes.format;
    }

    var bg = "";

    if (!!attributes.img) {
      bg = "background-image:url(" + attributes.img + ")";
    }

    return wp.element.createElement("div", {
      "class": classes
    }, wp.element.createElement("div", {
      "class": "overlay"
    }, wp.element.createElement("div", {
      "class": "block"
    }, wp.element.createElement("h1", null, attributes.title), wp.element.createElement(InnerBlocks.Content, null))), wp.element.createElement("div", {
      id: "hero1",
      "data-id": attributes.vid,
      "class": "poster",
      style: bg
    }));
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmxvY2tzL3NyYy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2pzL2Jsb2Nrcy9zcmMvaGVyby9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy9ibG9ja3Mvc3JjL2hlcm8yL2Jsb2NrLmpzIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJlZGl0b3IiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIk1lZGlhVXBsb2FkIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0NvbnRyb2xzIiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJCbG9ja0FsaWdubWVudFRvb2xiYXIiLCJJbm5lckJsb2NrcyIsIkFMTE9XRURfQkxPQ0tTIiwiVEVNUExBVEUiLCJwbGFjZWhvbGRlciIsImRyb3BDYXAiLCJjdXN0b21JY29uIiwiVVJJX0NMX1VSTCIsImNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImFsaWdubWVudCIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwidHlwZSIsImVkaXQiLCJzZXRBdHRyaWJ1dGVzIiwiY3JlYXRlQ29udGVudEVkaXRGb3JtIiwiY29udGVudCIsImNyZWF0ZUJsb2NrQ29udHJvbHMiLCJzYXZlIiwiVVJMSW5wdXQiLCJjb21wb25lbnRzIiwiRGFzaGljb24iLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsIkJhc2VDb250cm9sIiwiVGV4dENvbnRyb2wiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsImJ1aWxkU2hvcnRDb2RlIiwiYXJncyIsInNob3J0Y29kZSIsImxpbmsiLCJ0ZXh0IiwidG9vbHRpcCIsInN0eWxlIiwiaXNTZWxlY3RlZCIsIm1ldGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMiLCJtYXAiLCJ2YWx1ZSIsImNhcGl0YWxpemVkVmFsdWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwia2V5IiwibyIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUmF3SFRNTCIsIndpdGhOb3RpY2VzIiwiTWVkaWFQbGFjZWhvbGRlciIsIk1lZGlhVXBsb2FkQ2hlY2siLCJBbGlnbm1lbnRUb29sYmFyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsImJvZHkiLCJtZWRpYUlEIiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJpbnN0cnVjdGlvbnMiLCJtZWRpYSIsInVybCIsImlkIiwib3BlbiIsInJhbmRvbUlEIiwiUzQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJzdWJoZWFkIiwidmlkIiwiZm9ybWF0IiwiYW5pbWF0aW9uIiwiYmciLCJzdGlsbCIsImxldmVsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtB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QUFNO0FBQVgsT0FDQztBQUFLLGVBQU07QUFBWCxPQUNDLHFDQUFNRCxVQUFVLENBQUNJLEtBQWpCLENBREQsRUFFQyx5QkFBQyxXQUFELENBQWEsT0FBYixPQUZELENBREQsQ0FERCxFQU9DO0FBQUssUUFBRSxFQUFDLE9BQVI7QUFBZ0IsaUJBQVNKLFVBQVUsQ0FBQ3NFLEdBQXBDO0FBQXlDLGVBQU0sUUFBL0M7QUFBd0QsV0FBSyxFQUFFRztBQUEvRCxNQVBELENBRkQ7QUFhQTtBQTdJZ0MsQ0FBakIsQ0FBakIsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2JveG91dC9ibG9jayc7XG5pbXBvcnQgJy4vYnV0dG9uL2Jsb2NrJztcbmltcG9ydCAnLi9jYXJkL2Jsb2NrJztcbmltcG9ydCAnLi9oZXJvL2Jsb2NrJztcbmltcG9ydCAnLi9oZXJvMi9ibG9jayc7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFVcGxvYWQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRJY29uQnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuZWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaW1hZ2UnLFxuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J3VyaS1jbC9idXR0b24nXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBib3hvdXQgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH1dLFxuXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYm94b3V0LnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBjbGFzc05hbWVzID0gKGF0dHJpYnV0ZXMpID0+IHtcblx0bGV0IGNsYXNzZXMgPSBcImNsLWJveG91dFwiO1xuXHRpZiggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0fVxuXHRpZiggISEgYXR0cmlidXRlcy5hbGlnbm1lbnQgKSB7XG5cdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9ib3hvdXQnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdCb3hvdXQnKSxcbiAgaWNvbjogY3VzdG9tSWNvbixcbiAgY2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuICBcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKGF0dHJpYnV0ZXMpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJveG91dCB0aXRsZVwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0PGgxPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMT5cblx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdFVSTElucHV0LFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyXG59ID0gd3AuZWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvYnV0dG9uLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cblxuXG4vKipcbiAqIFJlbmRlciB0aGUgc2hvcnRjb2RlXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkU2hvcnRDb2RlKCBhcmdzICkge1xuXHRcdC8vIHVuZm9ydHVuYXRlbHksIEd1dGVuYmVyZyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgb3JkZXIgaW4gd2hpY2ggYXR0cmlidXRlcyBhcHBlYXIsXG5cdFx0Ly8gc28gdGhpcyBwcm9jZXNzIGlzIGJlc3QgZG9uZSBtYW51YWxseS5cblx0XHR2YXIgc2hvcnRjb2RlID0gJ1tjbC1idXR0b24gJztcblx0XHRpZiAoYXJncy5saW5rKSB7XG5cdFx0XHRzaG9ydGNvZGUgKz0gJyBsaW5rPVwiJyArIGFyZ3MubGluayArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLnRleHQpIHtcblx0XHRcdHNob3J0Y29kZSArPSAnIHRleHQ9XCInICsgYXJncy50ZXh0ICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKGFyZ3MudG9vbHRpcCkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgdG9vbHRpcD1cIicgKyBhcmdzLnRvb2x0aXAgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAoYXJncy5zdHlsZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgc3R5bGU9XCInICsgYXJncy5zdHlsZSArICdcIic7XG5cdFx0fVxuXHRcdGlmIChhcmdzLmNsYXNzTmFtZSkge1xuXHRcdFx0c2hvcnRjb2RlICs9ICcgY2xhc3M9XCInICsgYXJncy5jbGFzc05hbWUgKyAnXCInO1xuXHRcdH1cblxuXHRcdHNob3J0Y29kZSArPSAnXSc7XG5cblx0XHRyZXR1cm4gc2hvcnRjb2RlO1xuXG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvYnV0dG9uJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnQnV0dG9uJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblx0XG5cblx0XG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSkge1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGJ1dHRvbiBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cblx0XHRcdGxldCBtZXRhO1xuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRtZXRhID0gKFxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHQvLyBzZXQgdGhlIGNsYXNzbmFtZXNcblx0XHRcdGxldCBjbGFzc2VzID0gXCJjbC1idXR0b25cIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHQvLyBzZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9IFwiXCI7XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWJ1dHRvbi1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGV4dDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50ZXh0IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHQvLyBAdG9kbzogZG8gd2UgbmVlZCBhbGlnbm1lbnQvZmxvYXQgY29udHJvbHMgb24gYnV0dG9ucz9cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cblx0XHR9XG5cdFx0XG5cblx0XHQvLyBnZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiQnV0dG9uIFN0eWxlXCIgKSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCBcIkJ1dHRvbiBTdHlsZVwiICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyBcImRlZmF1bHRcIiwgXCJwcm9taW5lbnRcIiwgXCJkaXNhYmxlZFwiIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAodmFsdWUgPT09IFwiZGVmYXVsdFwiKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBpc1NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHN0eWxlOiBrZXkgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdG9vbHRpcDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Ly9jcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuXHRcdHZhciBvID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCB3cC5lbGVtZW50LlJhd0hUTUwsIG51bGwsIGJ1aWxkU2hvcnRDb2RlKCBhdHRyaWJ1dGVzICkgKTtcblx0XHQvLyBjb25zb2xlLmxvZyhvKTtcblx0XHRyZXR1cm4gbztcblx0XHRcblx0fVxuXHRcblx0XG59KTtcblxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEljb25CdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvblxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5lZGl0b3I7XG5cblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuKFxuXHRcdDxzdmdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdD5cblx0XHRcdDxwYXRoIGQ9XCJNMiw4IEwyLDE2IEwxNiwxNiBMMTYsOCBMMiw4IFogTTIsNyBMMTYsNyBMMTYsMiBMMiwyIEwyLDcgWiBNMTgsMSBMMTgsMTcgQzE4LDE3IDE4LDE4IDE4LDE4IEMxOCwxOCAxNywxOCAxNywxOCBMMSwxOCBDMSwxOCAwLDE4IDAsMTggQzAsMTggMCwxNyAwLDE3IEwwLDEgQzAsMSAwLDAgMCwwIEMwLDAgMSwwIDEsMCBMMTcsMCBDMTcsMCAxOCwwIDE4LDAgQzE4LDAgMTgsMSAxOCwxIFogTTE1LDE1IEwzLDE1IEwzLDEyIEwxNSwxMiBMMTUsMTUgWlwiLz5cblx0XHQ8L3N2Zz5cblx0KTtcbn1cblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gXCJjbC1jYXJkXCI7XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZVxuXHR9XG5cdGlmKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5hbGlnbm1lbnRcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2NhcmQnLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdDYXJkJyksXG4gIGljb246IGN1c3RvbUljb24sXG4gIGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcbiAgXG5cdC8vIHRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9XG5cdH0sXG5cdFxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLm1lZGlhSUQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRcblx0XHRsZXQgbWV0YTtcblx0XHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdClcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzKTtcblxuXHRcdFx0Ly8gc2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSBcIlwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1jYXJkLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gdGl0bGU9e3RpdGxlfT5cblxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtY2FyZC10ZXh0XCI+XG5cdFx0XHRcdFx0XHQ8aDM+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBjYXJkIHRpdGxlXCIpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz48L2gzPlxuXHRcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdHRhZ25hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGNhcmQgdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBidXR0b246IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBidXR0b24gdGV4dFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZFxuXHRcdFx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRvb2x0aXA6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG4gIFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XG5cdFx0Ly8gQHRvZG86IHVzZSB0aGUgbWVkaWEgSUQgdG8gYnVpbGQgYSBzcmMgc2V0XG5cblx0XHRsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoYXR0cmlidXRlcyk7XG5cblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8YSBjbGFzcz17Y2xhc3Nlc30gaHJlZj17IGF0dHJpYnV0ZXMubGluayB9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXsgYXR0cmlidXRlcy5pbWcgfSBhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9IC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0PGgzPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMz5cblx0XHRcdFx0XHRcdDxSaWNoVGV4dC5Db250ZW50XG5cdFx0XHRcdFx0XHRcdHRhZ05hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtYnV0dG9uXCI+eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9PC9kaXY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0XG5cdFx0XG5cdH1cblx0XG5cdFxufSk7XG5cbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRJY29uQnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmVkaXRvcjtcblxuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvaGVyby5wbmcnKX1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgcmFuZG9tSUQgPSAoKSA9PiB7XG5cdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY4NjA4NTMvZ2VuZXJhdGUtcmFuZG9tLXN0cmluZy1mb3ItZGl2LWlkXG5cdGxldCBTNCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKCgoMStNYXRoLnJhbmRvbSgpKSoweDEwMDAwKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuXHR9O1xuXHRyZXR1cm4gKFM0KCkrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1M0KCkrUzQoKSk7XG59XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VyaS1jbC9oZXJvJywgeyAgIFxuXG4gIHRpdGxlOiBfXygnSGVybycpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHQvLyB0aGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdWJoZWFkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR2aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9XG5cdH0sXG5cdFxuXHRcblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cblx0XHQvLyBnZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAob3BlbkV2ZW50KSA9PiB7XG5cdFx0XHRpZihhdHRyaWJ1dGVzLm1lZGlhSUQpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nIFxuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRcblx0XHRsZXQgbWV0YTtcblx0XHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3M9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ2aWRcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHZpZDogY29udGVudCwgaWQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmlkIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91dHViZSBJRFwiKX1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KVxuXG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGhlcm8gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXG5cdFx0XHRpZiggISBhdHRyaWJ1dGVzLmlkICkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmlkID0gcmFuZG9tSUQoKTtcblx0XHRcdH1cdFx0XHRcblxuXHRcdFx0bGV0IGNsYXNzZXMgPSBcImNsLWhlcm9cIjtcblx0XHRcdGlmKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRpZiggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHR9XG5cdFx0XHRpZiggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0XHRcdH1cblxuXHRcdFx0Ly8gc2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSBcIlwiO1xuXHRcdFx0aWYoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1oZXJvLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gdGl0bGU9e3RpdGxlfT5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBvc3RlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjbC1oZXJvLXRleHQgb3ZlcmxheVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBoZXJvIHRpdGxlXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJzdWJoZWFkXCI+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHN1YmhlYWQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnN1YmhlYWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKFwiWW91ciBoZXJvIHN1YnRpdGxlXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInN1YmhlYWRcIlxuXHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBidXR0b246IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXCJZb3VyIGJ1dHRvbiB0ZXh0XCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0eyBtZXRhIH1cblxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBnZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSkgfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdFx0XHR9KTsgfSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJGb3JtYXRcIiApIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oIFwiSGVybyBGb3JtYXRcIiApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgXCJkZWZhdWx0XCIsIFwiZnVsbHdpZHRoXCIsIFwic3VwZXJcIiBdLm1hcCggKCB2YWx1ZSApID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKHZhbHVlID09PSBcImRlZmF1bHRcIikgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgZm9ybWF0OiBrZXkgfSkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdG9vbHRpcDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcbiAgXHRyZXR1cm4gKFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKVxuICBcdF0pO1xuICBcdFxuXHR9LCAvLyBlbmQgZWRpdFxuXHRcblx0c2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXHRcblx0XHQvLyBAdG9kbzogdXNlIHRoZSBtZWRpYSBJRCB0byBidWlsZCBhIHNyYyBzZXRcblxuXHRcdGxldCBjbGFzc2VzID0gXCJjbC1oZXJvXCI7XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0XHR9XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBhdHRyaWJ1dGVzLmZvcm1hdFxuXHRcdH1cblx0XHRsZXQgYmcgPSBcIlwiO1xuXHRcdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0XHRiZyA9IFwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBhdHRyaWJ1dGVzLmltZyArIFwiKVwiO1xuXHRcdH1cblx0XHRsZXQgc3RpbGwgPSBcInN0aWxsXCI7XG5cdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnZpZCApIHtcblx0XHRcdHN0aWxsID0gXCJwb3N0ZXJcIjtcblx0XHR9XG5cdFx0bGV0IGJ1dHRvbiA9IFwiXCI7XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMuYnV0dG9uICYmICEhIGF0dHJpYnV0ZXMubGluayApIHtcblx0XHRcdGJ1dHRvbiA9ICggPGEgY2xhc3M9XCJjbC1idXR0b25cIiBocmVmPXsgYXR0cmlidXRlcy5saW5rIH0+eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9PC9hPiApO1xuXHRcdH1cblx0XHQvLyBAdG9kbyBhZGQgc3RpbGwgcGhvdG8gYW5pbWF0aW9ucy4uLiBlLmcuIFwiYW5pbWF0aW9uIHNoaWZ0XCJcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cblx0XHRcdFx0XHRcdDxoMT57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDE+XG5cdFx0XHRcdFx0XHQ8cD57IGF0dHJpYnV0ZXMuc3ViaGVhZCB9PC9wPlxuXHRcdFx0XHRcdFx0e2J1dHRvbn1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9e2F0dHJpYnV0ZXMuaWR9IGRhdGEtaWQ9e2F0dHJpYnV0ZXMudmlkfSBjbGFzcz17c3RpbGx9IHN0eWxlPXtiZ30+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdFxuXHR9XG5cdFxuXHRcbn0pO1xuXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZVxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEljb25CdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5lZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J3VyaS1jbC9idXR0b24nXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG4gIFsnY29yZS9oZWFkaW5nJywgeyBsZXZlbDogMSwgcGxhY2Vob2xkZXI6ICdNeSBIZXJvJyB9XSxcbiAgWydjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9XSxcbiAgWyd1cmktY2wvYnV0dG9uJywge31dXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybihcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17KFVSSV9DTF9VUkwgKyAnaS9oZXJvLnBuZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufVxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd1cmktY2wvaGVybzInLCB7ICAgXG5cbiAgdGl0bGU6IF9fKCdoZXJvMicpLFxuICBpY29uOiBjdXN0b21JY29uLFxuICBjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG4gIFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHR2aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblxuXHR9LFxuXG5cdFxuXHRlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuXHRcdC8vIGdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcblx0XHRcdGlmKGF0dHJpYnV0ZXMubWVkaWFJRCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWcgXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWRcblx0XHRcdFx0XHRcdH0pOyB9IH1cblx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2wtaGVybzJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiB7IHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7IH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9XCJhbGxcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogY29udGVudCB9KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblxuXHRcdH1cblxuXG5cblx0XHQvLyBzZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuICBcdHJldHVybiAoW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKClcbiAgXHRdKTtcbiAgXHRcblx0fSwgLy8gZW5kIGVkaXRcblx0XG5cdHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblx0XHRsZXQgY2xhc3NlcyA9IFwiY2wtaGVyb1wiO1xuXHRcdGlmKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5jbGFzc05hbWVcblx0XHR9XG5cdFx0aWYoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdFx0Y2xhc3NlcyArPSBcIiBcIiArIGF0dHJpYnV0ZXMuYWxpZ25tZW50XG5cdFx0fVxuXHRcdGlmICggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgYXR0cmlidXRlcy5mb3JtYXRcblx0XHR9XG5cdFx0bGV0IGJnID0gXCJcIjtcblx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0YmcgPSBcImJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgYXR0cmlidXRlcy5pbWcgKyBcIilcIjtcblx0XHR9XG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBjbGFzcz17Y2xhc3Nlc30+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHQ8aDE+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJoZXJvMVwiIGRhdGEtaWQ9e2F0dHJpYnV0ZXMudmlkfSBjbGFzcz1cInBvc3RlclwiIHN0eWxlPXtiZ30+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdCk7XG5cdH1cblx0XG5cdFxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=