/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blocks/boxout/block.js":
/*!***************************************!*\
  !*** ./src/js/blocks/boxout/block.js ***!
  \***************************************/
/***/ (function() {

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
    src: URI_CL_URL + 'i/icons/boxout.svg',
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
  description: __('Use boxouts to contain text that is ancillary to the page’s content.'),
  example: {
    attributes: {
      title: __('Side note')
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: __('Boxout content supports the rest of the page’s message without being directly related.')
      }
    }, {
      name: 'uri-cl/button',
      attributes: {
        text: __('Learn More')
      }
    }]
  },
  attributes: {
    title: {
      type: 'string'
    },
    float: {
      type: 'string'
    },
    contentWrapper: {
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
      setAttributes({
        contentWrapper: ''
      });
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
    };

    // Generate block controls for alignment, etc
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
    };

    // Send the editor interfaces to the view
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
/***/ (function() {

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
    src: URI_CL_URL + 'i/icons/button.svg',
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
  description: __('Use buttons to attract attention to the primary call to action on a page.'),
  example: {
    attributes: {
      text: __('Explore')
    }
  },
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
      }

      // Set the classnames
      var classes = classNames(attributes, isSelected);

      // Set the tooltip
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
    };

    // Generate block controls for alignment, etc
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
    };

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
    return [createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/card/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/card/block.js ***!
  \*************************************/
/***/ (function() {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
  Dashicon = _wp$components.Dashicon,
  Button = _wp$components.Button,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  Toolbar = _wp$components.Toolbar,
  ToolbarButton = _wp$components.ToolbarButton,
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
    src: URI_CL_URL + 'i/icons/card.svg',
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
  description: __('Use cards to explain and link to a single idea.'),
  example: {
    attributes: {
      title: __('One idea'),
      body: __('Since the entire card must be a single link, it’s perfect for linking to broad topics where you need more words or a photo to describe the linked resource.'),
      mediaID: true,
      img: URI_CL_URL + 'i/example.jpg',
      button: __('Learn More')
    }
  },
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
    }

    // Generate editor view of the card itself
    var createContentEditForm = function createContentEditForm() {
      var classes = classNames(attributes, isSelected);

      // Set the tooltip
      var title = '';
      if (!!attributes.tooltip) {
        title = attributes.tooltip;
      }
      return wp.element.createElement("div", {
        className: "container cl-card-block-form"
      }, wp.element.createElement("div", {
        className: classes,
        title: title
      }, wp.element.createElement("div", {
        className: "cl-card-container media"
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
        className: "cl-card-container text"
      }, wp.element.createElement("div", {
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
      }))), wp.element.createElement("div", {
        className: "cl-card-container button"
      }, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            button: content
          });
        },
        value: attributes.button,
        placeholder: __('Your button text'),
        keepPlaceholderOnFocus: true
      }), meta)));
    };

    // Generate block controls for alignment, etc
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
      }), !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, {
        label: "Choose media"
      }, wp.element.createElement(MediaUpload, {
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
          return wp.element.createElement(ToolbarButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    };

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/date/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/date/block.js ***!
  \*************************************/
/***/ (function() {

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
    src: URI_CL_URL + 'i/icons/date.svg',
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
  description: __('Use dates to display a downloadable calendar event.'),
  example: {
    attributes: {
      date: __('July 28, 2061'),
      caption: __('Halley’s Comet reaches perihelion')
    }
  },
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
      }

      // Display a message on the admin screen if the notice is expired
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
    };

    // Generate block controls for alignment, etc
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
    };

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/hero/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/hero/block.js ***!
  \*************************************/
/***/ (function() {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
  Dashicon = _wp$components.Dashicon,
  Button = _wp$components.Button,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  Toolbar = _wp$components.Toolbar,
  ToolbarButton = _wp$components.ToolbarButton,
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
  URLInput = _wp$blockEditor.URLInput;

// @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

var ALLOWED_MEDIA_TYPES = ['image'];
var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/hero.svg',
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
  description: __('Use heroes to engage with the visitor and create the sense of desire.'),
  example: {
    attributes: {
      headline: __('Aspirational'),
      subhead: __('Heroes always are.'),
      button: __('Be one'),
      mediaID: true,
      img: URI_CL_URL + 'i/example.jpg',
      format: 'super'
    }
  },
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
    }

    // Generate editor view of the hero itself
    var createContentEditForm = function createContentEditForm() {
      if (!attributes.id) {
        attributes.id = randomID();
      }
      var classes = 'cl-hero';
      if (!!attributes.className) {
        classes += ' ' + attributes.className;
      }
      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      }
      if (!!attributes.format) {
        classes += ' ' + attributes.format;
      }
      if (!!attributes.link) {
        classes += ' has-link';
      } else {
        classes += ' no-link';
      }
      if (!!attributes.subhead) {
        classes += ' has-subhead';
      } else {
        classes += ' no-subhead';
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
      }

      // Set the tooltip
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
    };

    // Generate block controls for alignment, etc
    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, {
        label: "Choose media"
      }, wp.element.createElement(MediaUpload, {
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
          return wp.element.createElement(ToolbarButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    };

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/menu/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/menu/block.js ***!
  \*************************************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  ToggleControl = _wp$components.ToggleControl,
  SelectControl = _wp$components.SelectControl;
var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/menu.svg',
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
var menuNames = false;
var getMenuNames = function getMenuNames() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
      if (200 === xmlhttp.status) {
        var parsed = JSON.parse(xmlhttp.responseText);
        var list = [];
        var _iterator = _createForOfIteratorHelper(parsed),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var m = _step.value;
            list.push({
              label: m.name,
              value: m.name
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        menuNames = list;
      }
      return false;
    }
  };
  xmlhttp.open('GET', URI_CL_SITE_URL + '/wp-json/uri-component-library/v1/menus', true);
  xmlhttp.send();
};
getMenuNames();
registerBlockType('uri-cl/menu', {
  title: __('Menu'),
  icon: customIcon,
  category: 'cl-blocks',
  description: __('Use menus when the same collection of links must appear on multiple pages.'),
  example: {
    attributes: {
      name: 'menu1',
      title: __('Main Menu'),
      showtitle: true
    }
  },
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
      var title = '';
      if (!!attributes.name) {
        name = ': ' + attributes.name;
        title = attributes.name;
      }
      if (!!attributes.title) {
        title = attributes.title;
      }
      var titleMeta = '';
      if (attributes.showtitle) {
        titleMeta = wp.element.createElement("span", {
          className: "cl-menu-toggle"
        }, title);
      }
      return wp.element.createElement("div", {
        className: "container cl-menu-block-form"
      }, wp.element.createElement("div", {
        className: classes
      }, titleMeta, wp.element.createElement("div", {
        className: "cl-menu-placeholder"
      }, "Menu placeholder", name)));
    };
    var inspectorControls = wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement("div", {
      style: {
        paddingRight: '7px'
      }
    }, wp.element.createElement(Dashicon, {
      icon: "warning"
    })), wp.element.createElement("div", null, "This site has no menus.  Create one under the Appearance tab.")));
    if (!!menuNames) {
      inspectorControls = wp.element.createElement(PanelBody, null, wp.element.createElement(SelectControl, {
        label: __('Menu'),
        value: attributes.name,
        onChange: function onChange(name) {
          return setAttributes({
            name: name
          });
        },
        options: menuNames
      }), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: __('Title'),
        help: __('If no title is provided, the menu name will be used.'),
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        className: "meta-field"
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: __('Show title on desktop'),
        help: __('Titles are always shown on mobile.'),
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
      })));
    }

    // Generate sidebar inspector controls for other custom attributes
    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, inspectorControls);
    };

    // Send the editor interfaces to the view
    return [createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/metric/block.js":
/*!***************************************!*\
  !*** ./src/js/blocks/metric/block.js ***!
  \***************************************/
/***/ (function() {

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
    src: URI_CL_URL + 'i/icons/metric.svg',
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
  description: __('Use metrics to illustrate a fact that is concise and easy to consume.'),
  example: {
    attributes: {
      metric: __('40K'),
      caption: __('Leagues under the sea'),
      style: 'dark'
    }
  },
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
      var classes = classNames(attributes, isSelected);

      // Set the tooltip
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
    };

    // Generate block controls for alignment, etc
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
    };

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/notice/block.js":
/*!***************************************!*\
  !*** ./src/js/blocks/notice/block.js ***!
  \***************************************/
/***/ (function() {

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
    src: URI_CL_URL + 'i/icons/notice.svg',
    alt: "button"
  });
};
registerBlockType('uri-cl/notice', {
  title: __('Notice'),
  icon: customIcon,
  category: 'cl-blocks',
  description: __('Use notices to display content that is particularly urgent.'),
  example: {
    attributes: {
      title: __('Please Note')
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: __('Notices are meant to be temporary and timely and should only be used to communicate an exceptional condition.')
      }
    }]
  },
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
      type: 'bool',
      default: false
    },
    dismissible: {
      type: 'bool',
      default: true
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
        classes += ' ' + attributes.className;
      }
      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      }

      // Display a message on the admin screen if the notice is expired
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
    };

    // Send the editor interfaces to the view
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
/***/ (function() {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  Toolbar = _wp$components.Toolbar,
  ToolbarButton = _wp$components.ToolbarButton,
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
    src: URI_CL_URL + 'i/icons/panel.svg',
    alt: "button"
  });
};
var classNames = function classNames(attributes) {
  var classes = 'super' === attributes.format ? 'cl-panel-super' : 'cl-panel';
  if (!!attributes.className) {
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
  description: __('Use panels to provide a deep, visual context for a particular topic.'),
  example: {
    attributes: {
      title: __('A Bit More'),
      mediaID: true,
      img: URI_CL_URL + 'i/example.jpg',
      reverse: true
    },
    innerBlocks: [{
      name: 'core/heading',
      attributes: {
        level: 2,
        content: __('Options')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        content: __('A panel is different from a card in that a panel may include <a href="#">multiple links</a> or buttons.')
      }
    }, {
      name: 'uri-cl/button',
      attributes: {
        text: __('Learn More')
      }
    }]
  },
  attributes: {
    title: {
      type: 'string'
    },
    reverse: {
      type: 'boolean',
      default: false
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
    },
    contentWrapper: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
    // Generate the image or the add image section
    var getImageButton = function getImageButton(openEvent) {
      if (attributes.mediaID || attributes.img) {
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
    setAttributes({
      contentWrapper: ''
    });
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
      }, !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, {
        label: "Choose media"
      }, wp.element.createElement(MediaUpload, {
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
          return wp.element.createElement(ToolbarButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    };

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
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
/***/ (function() {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
  Dashicon = _wp$components.Dashicon,
  Button = _wp$components.Button,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  Toolbar = _wp$components.Toolbar,
  ToolbarButton = _wp$components.ToolbarButton,
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
  URLInput = _wp$blockEditor.URLInput;

// @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

var ALLOWED_MEDIA_TYPES = ['image'];
var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/promo.svg',
    alt: "button"
  });
};
registerBlockType('uri-cl/promo', {
  title: __('Promo'),
  icon: customIcon,
  category: 'cl-blocks',
  description: __('Use promos to showcase timely marketing information.'),
  example: {
    attributes: {
      title: __('Title'),
      body: __('Some body text'),
      mediaID: true,
      img: URI_CL_URL + 'i/example.jpg'
    }
  },
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
    }

    // Generate editor view of the promo itself
    var createContentEditForm = function createContentEditForm() {
      var classes = 'cl-promo';
      if (!!attributes.className) {
        classes += ' ' + attributes.className;
      }
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
    };

    // Generate block controls for alignment, etc
    var createBlockControls = function createBlockControls() {
      return wp.element.createElement(BlockControls, {
        key: "controls"
      }, !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, {
        label: "Choose media"
      }, wp.element.createElement(MediaUpload, {
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
          return wp.element.createElement(ToolbarButton, {
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
    }

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/quote/block.js":
/*!**************************************!*\
  !*** ./src/js/blocks/quote/block.js ***!
  \**************************************/
/***/ (function() {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  Toolbar = _wp$components.Toolbar,
  ToolbarButton = _wp$components.ToolbarButton,
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
    src: URI_CL_URL + 'i/icons/quote.svg',
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
  if (!!attributes.img) {
    classes += ' has-image';
  } else {
    classes += ' no-image';
  }
  return classes;
};
registerBlockType('uri-cl/quote', {
  title: __('Quote'),
  icon: customIcon,
  category: 'cl-blocks',
  description: __('Use quotes to create a blockquote element that stands out from the page.'),
  example: {
    attributes: {
      quote: __('Ocean, who is the source of all.'),
      citation: __('Homer'),
      mediaID: true,
      img: URI_CL_URL + 'i/example_square.jpg'
    }
  },
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
      }, !!attributes.img && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Toolbar, {
        label: "Choose media"
      }, wp.element.createElement(MediaUpload, {
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
          return wp.element.createElement(ToolbarButton, {
            className: "components-toolbar__control",
            label: __('Edit media'),
            icon: "edit",
            onClick: open
          });
        }
      }))));
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

/***/ "./src/js/blocks/tabs/block.js":
/*!*************************************!*\
  !*** ./src/js/blocks/tabs/block.js ***!
  \*************************************/
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    src: URI_CL_URL + 'i/icons/tabs.svg',
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
  description: __('Use tabs to display content that has a correlation but is not directly related.'),
  example: {
    attributes: {
      tabs: 2
    },
    innerBlocks: [{
      name: 'uri-cl/tab',
      attributes: {
        title: 'Apples'
      },
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          content: __('Each tab can contain paragraphs, links, and other components.')
        }
      }, {
        name: 'uri-cl/button',
        attributes: {
          text: __('More about fruit')
        }
      }]
    }, {
      name: 'uri-cl/tab',
      attributes: {
        title: 'Oranges'
      },
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          content: __('This tab will have different information than the first tab, but the information should correlate somehow.')
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          content: __('Only one tab will be visible at a time on the live page.')
        }
      }]
    }]
  },
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

    var classes = classNames(attributes);

    // Generate sidebar inspector controls for other custom attributes
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
    };

    // Send the editor interfaces to the view
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
/***/ (function() {

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
    src: URI_CL_URL + 'i/icons/tab.svg',
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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./src/js/blocks/blocks.js ***!
  \*********************************/
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
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/block */ "./src/js/blocks/menu/block.js");
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_menu_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metric/block */ "./src/js/blocks/metric/block.js");
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_metric_block__WEBPACK_IMPORTED_MODULE_6__);
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













}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1VDN0VIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndCO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYm94b3V0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYnV0dG9uL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvY2FyZC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2RhdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9oZXJvL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvbWVudS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL21ldHJpYy9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL25vdGljZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3BhbmVsL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvcHJvbW8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9xdW90ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3RhYnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy90YWJzL3RhYi5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcywgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJveG91dCBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2JveG91dC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtYm94b3V0Jztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2JveG91dCcsIHtcblxuXHR0aXRsZTogX18oICdCb3hvdXQnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGJveG91dHMgdG8gY29udGFpbiB0ZXh0IHRoYXQgaXMgYW5jaWxsYXJ5IHRvIHRoZSBwYWdl4oCZcyBjb250ZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ1NpZGUgbm90ZScgKSxcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbIHtcblx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnQm94b3V0IGNvbnRlbnQgc3VwcG9ydHMgdGhlIHJlc3Qgb2YgdGhlIHBhZ2XigJlzIG1lc3NhZ2Ugd2l0aG91dCBiZWluZyBkaXJlY3RseSByZWxhdGVkLicgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHRleHQ6IF9fKCAnTGVhcm4gTW9yZScgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50V3JhcHBlcjogJycgfSApO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnV0dG9uLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1idXR0b24nO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYnV0dG9uJywge1xuXG5cdHRpdGxlOiBfXyggJ0J1dHRvbicgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYnV0dG9ucyB0byBhdHRyYWN0IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBjYWxsIHRvIGFjdGlvbiBvbiBhIHBhZ2UuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGV4dDogX18oICdFeHBsb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IG1ldGE7XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWJ1dHRvbi1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWxpZ25tZW50OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJidXR0b24tc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3Byb21pbmVudCcsICdkaXNhYmxlZCcgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2NhcmQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWNhcmQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2NhcmQnLCB7XG5cblx0dGl0bGU6IF9fKCAnQ2FyZCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgY2FyZHMgdG8gZXhwbGFpbiBhbmQgbGluayB0byBhIHNpbmdsZSBpZGVhLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ09uZSBpZGVhJyApLFxuXHRcdFx0Ym9keTogX18oICdTaW5jZSB0aGUgZW50aXJlIGNhcmQgbXVzdCBiZSBhIHNpbmdsZSBsaW5rLCBpdOKAmXMgcGVyZmVjdCBmb3IgbGlua2luZyB0byBicm9hZCB0b3BpY3Mgd2hlcmUgeW91IG5lZWQgbW9yZSB3b3JkcyBvciBhIHBob3RvIHRvIGRlc2NyaWJlIHRoZSBsaW5rZWQgcmVzb3VyY2UuJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGJ1dHRvbjogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWNhcmQtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1jYXJkLWNvbnRhaW5lciBtZWRpYVwiPlxuXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIHRleHRcIj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYm9keTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgY2FyZCB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIGJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxuXHREYXRlUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9kYXRlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJkYXRlXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtZGF0ZSc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5jb2xvciApIHtcblx0XHRjbGFzc2VzICs9ICcgY2wtZGF0ZS0nICsgYXR0cmlidXRlcy5jb2xvcjtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvZGF0ZScsIHtcblxuXHR0aXRsZTogX18oICdEYXRlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBkYXRlcyB0byBkaXNwbGF5IGEgZG93bmxvYWRhYmxlIGNhbGVuZGFyIGV2ZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGRhdGU6IF9fKCAnSnVseSAyOCwgMjA2MScgKSxcblx0XHRcdGNhcHRpb246IF9fKCAnSGFsbGV54oCZcyBDb21ldCByZWFjaGVzIHBlcmloZWxpb24nICksXG5cdFx0fSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0ZGF0ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHNob3dfeWVhcjoge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5kYXRlICkge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGRhdGU6IG5ldyBEYXRlKCkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoIGF0dHJpYnV0ZXMuZGF0ZSApO1xuXG5cdFx0XHRsZXQgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCAnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9ICk7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc2hvd195ZWFyICkge1xuXHRcdFx0XHRtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoICdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JyB9ICkgKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgZXhwaXJhdGlvbk1lc3NhZ2UgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5kYXRlICYmIGRhdGUuZ2V0VGltZSgpIDw9IHRvZGF5LmdldFRpbWUoKSApIHtcblx0XHRcdFx0ZXhwaXJhdGlvbk1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImNsLWNvbXBvbmVudC1tZXNzYWdlXCI+VGhpcyBkYXRlIG1heSBubyBsb25nZXIgYmUgcmVsZXZhbnQuPC9kaXY+O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHsgZXhwaXJhdGlvbk1lc3NhZ2UgfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1tb250aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtb250aCB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWRheVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBkYXRlLmdldERhdGUoKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY2FwdGlvbi13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jYXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGRhdGUgY2FwdGlvbicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RhdGUgQ29sb3InICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiZGF0ZS1jb2xvclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnRGF0ZSBDb2xvcicgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdibHVlJywgJ3JlZCcsICdncmV5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdibHVlJyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuY29sb3IgKSA/ICcnIDogYXR0cmlidXRlcy5jb2xvcjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gY29sb3IgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY29sb3I6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZT17IGF0dHJpYnV0ZXMuZGF0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRhdGUgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgeWVhclwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd195ZWFyIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd195ZWFyOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9oZXJvLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCByYW5kb21JRCA9ICgpID0+IHtcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg2MDg1My9nZW5lcmF0ZS1yYW5kb20tc3RyaW5nLWZvci1kaXYtaWRcblx0Y29uc3QgUzQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICggKCAoIDEgKyBNYXRoLnJhbmRvbSgpICkgKiAweDEwMDAwICkgfCAwICkudG9TdHJpbmcoIDE2ICkuc3Vic3RyaW5nKCAxICk7XG5cdH07XG5cdHJldHVybiAoIFM0KCkgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArIFM0KCkgKyBTNCgpICk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9oZXJvJywge1xuXG5cdHRpdGxlOiBfXyggJ0hlcm8nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGhlcm9lcyB0byBlbmdhZ2Ugd2l0aCB0aGUgdmlzaXRvciBhbmQgY3JlYXRlIHRoZSBzZW5zZSBvZiBkZXNpcmUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aGVhZGxpbmU6IF9fKCAnQXNwaXJhdGlvbmFsJyApLFxuXHRcdFx0c3ViaGVhZDogX18oICdIZXJvZXMgYWx3YXlzIGFyZS4nICksXG5cdFx0XHRidXR0b246IF9fKCAnQmUgb25lJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGZvcm1hdDogJ3N1cGVyJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdGhlYWRsaW5lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN1YmhlYWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhV2lkdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dXNlX2NhcHRpb246IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y3JlZGl0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHBvc2l0aW9uWDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRwb3NpdGlvblk6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSGVpZ2h0OiBtZWRpYS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvblg6IDAuNSxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25ZOiAwLjUsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGhlcm8gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMuaWQgKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuaWQgPSByYW5kb21JRCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1oZXJvJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMubGluayApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIGhhcy1saW5rJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1saW5rJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdWJoZWFkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLXN1YmhlYWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLXN1YmhlYWQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHN0eWxlID0ge307XG5cdFx0XHRsZXQgcG9zdGVyID0gJ3Bvc3Rlcic7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0XHRcdFx0cG9zdGVyID0gJ3N0aWxsJztcblx0XHRcdFx0c3R5bGUgPSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgJHsgYXR0cmlidXRlcy5wb3NpdGlvblggKiAxMDAgfSUgJHsgYXR0cmlidXRlcy5wb3NpdGlvblkgKiAxMDAgfSVgLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgkeyBhdHRyaWJ1dGVzLmltZyB9KWAsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1oZXJvLXByb3BlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHBvc3RlciB9IHN0eWxlPXsgc3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tdGV4dCBvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGhlYWRsaW5lOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5oZWFkbGluZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGhlcm8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWJoZWFkXCI+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdWJoZWFkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJoZWFkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyBzdWJ0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3ViaGVhZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUhlaWdodDogbWVkaWEuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWTogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJoZXJvLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnSGVybyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdmdWxsd2lkdGgnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8Rm9jYWxQb2ludFBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdHVybD17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zPXsgeyB3aWR0aDogYXR0cmlidXRlcy5tZWRpYVdpZHRoLCBoZWlnaHQ6IGF0dHJpYnV0ZXMubWVkaWFIZWlnaHQgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB7IHg6IGF0dHJpYnV0ZXMucG9zaXRpb25YLCB5OiBhdHRyaWJ1dGVzLnBvc2l0aW9uWSB9IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZm9jYWxQb2ludCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcG9zaXRpb25YOiAoIGZvY2FsUG9pbnQueCAqIDEgKSwgcG9zaXRpb25ZOiAoIGZvY2FsUG9pbnQueSAqIDEgKSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZpZGVvIFVSTFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHZpZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52aWQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiRm9yIGNyZWF0aW5nIGEgdmlkZW8gaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIFdvcmRQcmVzcyBjYXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0dGluZyBhIGN1c3RvbSBjYXB0aW9uIGJlbG93IHdpbGwgb3ZlcnJpZGUgYW55IFdvcmRQcmVzcyBjYXB0aW9uLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMudXNlX2NhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB1c2VfY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgY2FwdGlvbiBmb3IgdGhlIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDcmVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjcmVkaXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY3JlZGl0IH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNwZWNpZnkgY3JlZGl0IGZvciB0aGUgaGVybyBtZWRpYS5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdFVSTElucHV0LFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL21lbnUuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLW1lbnUnO1xuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxubGV0IG1lbnVOYW1lcyA9IGZhbHNlO1xuXG5jb25zdCBnZXRNZW51TmFtZXMgPSAoKSA9PiB7XG5cdGNvbnN0IHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0eG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0aWYgKCB4bWxodHRwLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgKSB7XG5cdFx0XHRpZiAoIDIwMCA9PT0geG1saHR0cC5zdGF0dXMgKSB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoIHhtbGh0dHAucmVzcG9uc2VUZXh0ICk7XG5cdFx0XHRcdGNvbnN0IGxpc3QgPSBbXTtcblx0XHRcdFx0Zm9yICggY29uc3QgbSBvZiBwYXJzZWQgKSB7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogbS5uYW1lLFxuXHRcdFx0XHRcdFx0dmFsdWU6IG0ubmFtZSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWVudU5hbWVzID0gbGlzdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0eG1saHR0cC5vcGVuKCAnR0VUJywgVVJJX0NMX1NJVEVfVVJMICsgJy93cC1qc29uL3VyaS1jb21wb25lbnQtbGlicmFyeS92MS9tZW51cycsIHRydWUgKTtcblx0eG1saHR0cC5zZW5kKCk7XG59O1xuXG5nZXRNZW51TmFtZXMoKTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbWVudScsIHtcblxuXHR0aXRsZTogX18oICdNZW51JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBtZW51cyB3aGVuIHRoZSBzYW1lIGNvbGxlY3Rpb24gb2YgbGlua3MgbXVzdCBhcHBlYXIgb24gbXVsdGlwbGUgcGFnZXMuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bmFtZTogJ21lbnUxJyxcblx0XHRcdHRpdGxlOiBfXyggJ01haW4gTWVudScgKSxcblx0XHRcdHNob3d0aXRsZTogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bmFtZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRkZXB0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0c2hvd3RpdGxlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGJ1dHRvbiBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHQvLyBTZXQgdGhlIGNsYXNzbmFtZXNcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdGxldCBuYW1lID0gJyc7XG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5uYW1lICkge1xuXHRcdFx0XHRuYW1lID0gJzogJyArIGF0dHJpYnV0ZXMubmFtZTtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLm5hbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50aXRsZSApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRpdGxlO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGl0bGVNZXRhID0gJyc7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMuc2hvd3RpdGxlICkge1xuXHRcdFx0XHR0aXRsZU1ldGEgPSA8c3BhbiBjbGFzc05hbWU9XCJjbC1tZW51LXRvZ2dsZVwiPnsgdGl0bGUgfTwvc3Bhbj47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLW1lbnUtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0eyB0aXRsZU1ldGEgfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1tZW51LXBsYWNlaG9sZGVyXCI+TWVudSBwbGFjZWhvbGRlcnsgbmFtZSB9PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IGluc3BlY3RvckNvbnRyb2xzID0gKFxuXHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9eyB7IHBhZGRpbmdSaWdodDogJzdweCcgfSB9PjxEYXNoaWNvbiBpY29uPVwid2FybmluZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5UaGlzIHNpdGUgaGFzIG5vIG1lbnVzLiAgQ3JlYXRlIG9uZSB1bmRlciB0aGUgQXBwZWFyYW5jZSB0YWIuPC9kaXY+XG5cdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpO1xuXG5cdFx0aWYgKCAhISBtZW51TmFtZXMgKSB7XG5cdFx0XHRpbnNwZWN0b3JDb250cm9scyA9IChcblx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01lbnUnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5hbWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5hbWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBtZW51TmFtZXMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ0lmIG5vIHRpdGxlIGlzIHByb3ZpZGVkLCB0aGUgbWVudSBuYW1lIHdpbGwgYmUgdXNlZC4nICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgdGl0bGUgb24gZGVza3RvcCcgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RpdGxlcyBhcmUgYWx3YXlzIHNob3duIG9uIG1vYmlsZS4nICkgfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93dGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd3RpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGVwdGgnICkgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAyIH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkZXB0aCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGVwdGggfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlcHRoIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdHsgaW5zcGVjdG9yQ29udHJvbHMgfVxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbWV0cmljLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJtZXRyaWNcIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1tZXRyaWMnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9tZXRyaWMnLCB7XG5cblx0dGl0bGU6IF9fKCAnTWV0cmljJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBtZXRyaWNzIHRvIGlsbHVzdHJhdGUgYSBmYWN0IHRoYXQgaXMgY29uY2lzZSBhbmQgZWFzeSB0byBjb25zdW1lLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdG1ldHJpYzogX18oICc0MEsnICksXG5cdFx0XHRjYXB0aW9uOiBfXyggJ0xlYWd1ZXMgdW5kZXIgdGhlIHNlYScgKSxcblx0XHRcdHN0eWxlOiAnZGFyaycsXG5cdFx0fSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdG1ldHJpYzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLW1ldHJpYy1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbWV0cmljOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZXRyaWMgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnMTAwJScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ21ldHJpY3Mgb24gdGhpcyBwYWdlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Ly8gQHRvZG86IHRlY2huaWNhbGx5LCB5b3UgY2FuIGhhdmUgYSBjbGVhciBhbmQgZGFyayBtZXRyaWNcblx0XHQvLyBvdXIgYnV0dG9uZ3JvdXAgb25seSBhbGxvd3MgdXNlcnMgdG8gc2VsZWN0IG9uZVxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldHJpYyBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJtZXRyaWMtc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ01ldHJpYyBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdzdGFuZGFyZCcsICdjbGVhcicsICdkYXJrJywgJ292ZXJsYXknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuc3R5bGU7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdERhdGVQaWNrZXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXTtcblxuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgbm90aWNlIGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbm90aWNlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9ub3RpY2UnLCB7XG5cdHRpdGxlOiBfXyggJ05vdGljZScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2Ugbm90aWNlcyB0byBkaXNwbGF5IGNvbnRlbnQgdGhhdCBpcyBwYXJ0aWN1bGFybHkgdXJnZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ1BsZWFzZSBOb3RlJyApLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdOb3RpY2VzIGFyZSBtZWFudCB0byBiZSB0ZW1wb3JhcnkgYW5kIHRpbWVseSBhbmQgc2hvdWxkIG9ubHkgYmUgdXNlZCB0byBjb21tdW5pY2F0ZSBhbiBleGNlcHRpb25hbCBjb25kaXRpb24uJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRleHBpcmF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHNob3dfZXhwaXJlZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHRkaXNtaXNzaWJsZToge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHRcdGNvbnRlbnRXcmFwcGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSAnY2wtbm90aWNlJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEaXNwbGF5IGEgbWVzc2FnZSBvbiB0aGUgYWRtaW4gc2NyZWVuIGlmIHRoZSBub3RpY2UgaXMgZXhwaXJlZFxuXHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRjb25zdCBleHAgPSBuZXcgRGF0ZSggYXR0cmlidXRlcy5leHBpcmF0aW9uICk7XG5cdFx0XHRsZXQgZXhwaXJhdGlvbk1lc3NhZ2UgPSAnJztcblx0XHRcdGxldCBzeW50YXggPSAnYW5kIHdpbGwgbm90Jztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zaG93X2V4cGlyZWQgKSB7XG5cdFx0XHRcdHN5bnRheCA9ICdidXQgd2lsbCBzdGlsbCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuZXhwaXJhdGlvbiAmJiBleHAuZ2V0VGltZSgpIDw9IGRhdGUuZ2V0VGltZSgpICkge1xuXHRcdFx0XHRleHBpcmF0aW9uTWVzc2FnZSA9IDxkaXYgY2xhc3NOYW1lPVwiY2wtY29tcG9uZW50LW1lc3NhZ2VcIj5UaGlzIG5vdGljZSBoYXMgZXhwaXJlZCB7IHN5bnRheCB9IGJlIHZpc2libGUgd2hlbiBwdWJsaXNoZWQuPC9kaXY+O1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0eyBleHBpcmF0aW9uTWVzc2FnZSB9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgbm90aWNlIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTm90aWNlIFN0eWxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5vdGljZS1zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnTm90aWNlIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAndXJnZW50JywgJ2NvdmlkMTknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc3R5bGUgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBzdHlsZSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkFsbG93IHZpc2l0b3JzIHRvIGRpc21pc3MgdGhpcyBub3RpY2VcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmRpc21pc3NpYmxlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGlzbWlzc2libGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PERhdGVQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkV4cGlyYXRpb24gZGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudERhdGU9eyBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkYXRlICkgPT4gc2V0QXR0cmlidXRlcyggeyBleHBpcmF0aW9uOiBkYXRlIH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTaG93IGFmdGVyIGV4cGlyZWRcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnNob3dfZXhwaXJlZCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNob3dfZXhwaXJlZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHRCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvaGVhZGluZycsIHsgbGV2ZWw6IDEsIHBsYWNlaG9sZGVyOiAnTXkgUGFuZWwnIH0gXSxcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXHRbICd1cmktY2wvYnV0dG9uJywge30gXSxcbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9wYW5lbC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAoICdzdXBlcicgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnY2wtcGFuZWwtc3VwZXInIDogJ2NsLXBhbmVsJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5yZXZlcnNlICkge1xuXHRcdGNsYXNzZXMgKz0gJyByZXZlcnNlJztcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3BhbmVsJywge1xuXG5cdHRpdGxlOiBfXyggJ1BhbmVsJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBwYW5lbHMgdG8gcHJvdmlkZSBhIGRlZXAsIHZpc3VhbCBjb250ZXh0IGZvciBhIHBhcnRpY3VsYXIgdG9waWMuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnQSBCaXQgTW9yZScgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlLmpwZycsXG5cdFx0XHRyZXZlcnNlOiB0cnVlLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvaGVhZGluZycsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGxldmVsOiAyLFxuXHRcdFx0XHRjb250ZW50OiBfXyggJ09wdGlvbnMnICksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdBIHBhbmVsIGlzIGRpZmZlcmVudCBmcm9tIGEgY2FyZCBpbiB0aGF0IGEgcGFuZWwgbWF5IGluY2x1ZGUgPGEgaHJlZj1cIiNcIj5tdWx0aXBsZSBsaW5rczwvYT4gb3IgYnV0dG9ucy4nICksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHR0ZXh0OiBfXyggJ0xlYXJuIE1vcmUnICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHJldmVyc2U6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgfHwgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoICdzdXBlcicgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1ibHVyXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UsIHN1cGVyIHBhbmVsIHByZXZpZXdzIHdpbGwgYXBwZWFyIHNpbXBsaWZpZWQgaW4gdGhlIGVkaXRvciB3aW5kb3cuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cInBhbmVsLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUGFuZWwgRm9ybWF0JyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRmxpcCBwYW5lbCBsYXlvdXRcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnJldmVyc2UgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyByZXZlcnNlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3Byb21vLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9wcm9tbycsIHtcblxuXHR0aXRsZTogX18oICdQcm9tbycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgcHJvbW9zIHRvIHNob3djYXNlIHRpbWVseSBtYXJrZXRpbmcgaW5mb3JtYXRpb24uJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnVGl0bGUnICksXG5cdFx0XHRib2R5OiBfXyggJ1NvbWUgYm9keSB0ZXh0JyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rdGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgcHJvbW8gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSAnY2wtcHJvbW8nO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdtaWNybycgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbWljcm8nO1xuXG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtcHJvbW8tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tbWljcm8tY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tbWljcm8tdGV4dC1saW5rXCI+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbmt0ZXh0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGlua3RleHQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgbGluayB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPnsgbWV0YSB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgc3R5bGUgPSAnc3R5bGUtYmx1cic7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgJiYgJ2RlZmF1bHQnICE9PSBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRzdHlsZSA9ICdzdHlsZS0nICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdHN0eWxlID0gJ2NsLXByb21vLWJhY2tkcm9wICcgKyBzdHlsZTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtcHJvbW8tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1iYWNrZHJvcC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgc3R5bGUgfT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBwcm9tbyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxwPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBwcm9tbyB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD48c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby10ZXh0LWxpbmtcIj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGlua3RleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rdGV4dCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBsaW5rIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWltZ1wiPjxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLWltZy1saW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1ibG9jay1lZGl0b3ItbWV0YVwiPnsgbWV0YSB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBzdHlsZUNvbnRyb2w7XG5cdFx0aWYgKCAnbWljcm8nICE9PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdHN0eWxlQ29udHJvbCA9IChcblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N0eWxlJyApIH1cblx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RvIGluY3JlYXNlIHBlcmZvcm1hbmNlLCBwcm9tbyBwcmV2aWV3cyB3aWxsIGFwcGVhciBzaW1wbGlmaWVkIGluIHRoZSBlZGl0b3Igd2luZG93LicgKSB9XG5cdFx0XHRcdFx0XHRpZD1cInByb21vLXN0eWxlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUHJvbW8gU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ2JyYW5kJywgJ2NvbmZldHRpJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cInByb21vLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUHJvbW8gRm9ybWF0JyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnbWljcm8nIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0eyBzdHlsZUNvbnRyb2wgfVxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHRCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3F1b3RlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1xdW90ZSc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0fSBlbHNlIHtcblx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9xdW90ZScsIHtcblxuXHR0aXRsZTogX18oICdRdW90ZScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgcXVvdGVzIHRvIGNyZWF0ZSBhIGJsb2NrcXVvdGUgZWxlbWVudCB0aGF0IHN0YW5kcyBvdXQgZnJvbSB0aGUgcGFnZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRxdW90ZTogX18oICdPY2Vhbiwgd2hvIGlzIHRoZSBzb3VyY2Ugb2YgYWxsLicgKSxcblx0XHRcdGNpdGF0aW9uOiBfXyggJ0hvbWVyJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGVfc3F1YXJlLmpwZycsXG5cdFx0fSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0cXVvdGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2l0YXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBpbWFnZUNsYXNzID0gKCAhISBhdHRyaWJ1dGVzLm1lZGlhSUQgKSA/ICdjbC1xdW90ZS1pbWFnZScgOiAnJztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgaW1hZ2VDbGFzcyB9PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YmxvY2txdW90ZT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBxdW90ZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucXVvdGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGhlIHF1b3RlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2Jsb2NrcXVvdGU+XG5cdFx0XHRcdFx0XHQ8Y2l0ZT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjaXRhdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2l0YXRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnQW5vbnltb3VzJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2NpdGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0UmFuZ2VDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J3VyaS1jbC90YWInLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3RhYnMuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLXRhYnMnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbmNvbnN0IGdldFRhYnNUZW1wbGF0ZSA9ICggdGFicyApID0+IHtcblx0cmV0dXJuIFsgLi4uQXJyYXkoIHRhYnMgKSBdLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFsgJ3VyaS1jbC90YWInLCB7fSBdO1xuXHR9ICk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC90YWJzJywge1xuXG5cdHRpdGxlOiBfXyggJ1RhYnMnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHRhYnMgdG8gZGlzcGxheSBjb250ZW50IHRoYXQgaGFzIGEgY29ycmVsYXRpb24gYnV0IGlzIG5vdCBkaXJlY3RseSByZWxhdGVkLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRhYnM6IDIsXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAndXJpLWNsL3RhYicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHR0aXRsZTogJ0FwcGxlcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogX18oICdFYWNoIHRhYiBjYW4gY29udGFpbiBwYXJhZ3JhcGhzLCBsaW5rcywgYW5kIG90aGVyIGNvbXBvbmVudHMuJyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0dGV4dDogX18oICdNb3JlIGFib3V0IGZydWl0JyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ3VyaS1jbC90YWInLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0dGl0bGU6ICdPcmFuZ2VzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ1RoaXMgdGFiIHdpbGwgaGF2ZSBkaWZmZXJlbnQgaW5mb3JtYXRpb24gdGhhbiB0aGUgZmlyc3QgdGFiLCBidXQgdGhlIGluZm9ybWF0aW9uIHNob3VsZCBjb3JyZWxhdGUgc29tZWhvdy4nICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogX18oICdPbmx5IG9uZSB0YWIgd2lsbCBiZSB2aXNpYmxlIGF0IGEgdGltZSBvbiB0aGUgbGl2ZSBwYWdlLicgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGFiczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAyLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcyApO1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdUYWJzJyApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGFicyB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHRUYWJzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWJzOiBuZXh0VGFicyxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRtaW49eyAyIH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9eyA2IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgZ2V0VGFic1RlbXBsYXRlKCBhdHRyaWJ1dGVzLnRhYnMgKSB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlTG9jaz1cImFsbFwiXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXHQndXJpLWNsL2NhcmQnLFxuXHQndXJpLWNsL21ldHJpYycsXG5cdCd1cmktY2wvcXVvdGUnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIHRhYiBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3RhYi5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvdGFiJywge1xuXG5cdHRpdGxlOiBfXyggJ1RhYicgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0cGFyZW50OiBbICd1cmktY2wvdGFicycgXSxcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC10YWJcIj5cblx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUYWIgVGl0bGUnICkgfVxuXHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdHRlbXBsYXRlTG9jaz17IGZhbHNlIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9ib3hvdXQvYmxvY2snO1xuaW1wb3J0ICcuL2J1dHRvbi9ibG9jayc7XG5pbXBvcnQgJy4vY2FyZC9ibG9jayc7XG5pbXBvcnQgJy4vZGF0ZS9ibG9jayc7XG5pbXBvcnQgJy4vaGVyby9ibG9jayc7XG5pbXBvcnQgJy4vbWVudS9ibG9jayc7XG5pbXBvcnQgJy4vbWV0cmljL2Jsb2NrJztcbmltcG9ydCAnLi9ub3RpY2UvYmxvY2snO1xuaW1wb3J0ICcuL3BhbmVsL2Jsb2NrJztcbmltcG9ydCAnLi9wcm9tby9ibG9jayc7XG5pbXBvcnQgJy4vcXVvdGUvYmxvY2snO1xuaW1wb3J0ICcuL3RhYnMvdGFiJztcbmltcG9ydCAnLi90YWJzL2Jsb2NrJztcbiJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3dwJGJsb2NrRWRpdG9yIiwiYmxvY2tFZGl0b3IiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIk1lZGlhVXBsb2FkIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0NvbnRyb2xzIiwiVG9vbGJhciIsIkJ1dHRvbiIsIkJsb2NrQWxpZ25tZW50VG9vbGJhciIsIklubmVyQmxvY2tzIiwiQUxMT1dFRF9CTE9DS1MiLCJURU1QTEFURSIsInBsYWNlaG9sZGVyIiwiZHJvcENhcCIsImN1c3RvbUljb24iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3JjIiwiVVJJX0NMX1VSTCIsImFsdCIsImNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiaXNTZWxlY3RlZCIsImNsYXNzZXMiLCJmbG9hdCIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJleGFtcGxlIiwiaW5uZXJCbG9ja3MiLCJuYW1lIiwiY29udGVudCIsInRleHQiLCJ0eXBlIiwiY29udGVudFdyYXBwZXIiLCJlZGl0IiwiX3JlZiIsInNldEF0dHJpYnV0ZXMiLCJjcmVhdGVDb250ZW50RWRpdEZvcm0iLCJvbkNoYW5nZSIsInZhbHVlIiwia2VlcFBsYWNlaG9sZGVyT25Gb2N1cyIsImFsbG93ZWRCbG9ja3MiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUJsb2NrQ29udHJvbHMiLCJrZXkiLCJzYXZlIiwiX3JlZjIiLCJDb250ZW50IiwiVVJMSW5wdXQiLCJfd3AkY29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJEYXNoaWNvbiIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwiQmFzZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbkdyb3VwIiwiYWxpZ25tZW50Iiwic3R5bGUiLCJsaW5rIiwidG9vbHRpcCIsIm1ldGEiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsImxhYmVsIiwiaWQiLCJtYXAiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkIiwiaXNTZWNvbmRhcnkiLCJpc1ByaW1hcnkiLCJvbkNsaWNrIiwiVG9vbGJhckJ1dHRvbiIsIndpdGhOb3RpY2VzIiwiTWVkaWFQbGFjZWhvbGRlciIsIk1lZGlhVXBsb2FkQ2hlY2siLCJBbGlnbm1lbnRUb29sYmFyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsImltZyIsImJvZHkiLCJtZWRpYUlEIiwiYnV0dG9uIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJsYWJlbHMiLCJpbnN0cnVjdGlvbnMiLCJvblNlbGVjdCIsIm1lZGlhIiwidXJsIiwiYWNjZXB0IiwiYWxsb3dlZFR5cGVzIiwicmVuZGVyIiwib3BlbiIsInRhZ25hbWUiLCJfcmVmMyIsIlRvZ2dsZUNvbnRyb2wiLCJEYXRlUGlja2VyIiwiY29sb3IiLCJkYXRlIiwiY2FwdGlvbiIsInNob3dfeWVhciIsIkRhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImV4cGlyYXRpb25NZXNzYWdlIiwiZ2V0VGltZSIsImdldERhdGUiLCJjdXJyZW50RGF0ZSIsImNoZWNrZWQiLCJGb2NhbFBvaW50UGlja2VyIiwicmFuZG9tSUQiLCJTNCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImhlYWRsaW5lIiwic3ViaGVhZCIsImZvcm1hdCIsIm1lZGlhSGVpZ2h0IiwibWVkaWFXaWR0aCIsInZpZCIsInVzZV9jYXB0aW9uIiwiY3JlZGl0IiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiYW5pbWF0aW9uIiwicG9zdGVyIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiY29uY2F0IiwiYmFja2dyb3VuZEltYWdlIiwiZGltZW5zaW9ucyIsIngiLCJ5IiwiZm9jYWxQb2ludCIsImhlbHAiLCJSYW5nZUNvbnRyb2wiLCJTZWxlY3RDb250cm9sIiwibWVudU5hbWVzIiwiZ2V0TWVudU5hbWVzIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJsaXN0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm0iLCJwdXNoIiwiZXJyIiwiZSIsImYiLCJVUklfQ0xfU0lURV9VUkwiLCJzZW5kIiwic2hvd3RpdGxlIiwiZGVwdGgiLCJkZWZhdWx0IiwidGl0bGVNZXRhIiwiaW5zcGVjdG9yQ29udHJvbHMiLCJwYWRkaW5nUmlnaHQiLCJvcHRpb25zIiwibWF4IiwibWluIiwibWV0cmljIiwiZXhwaXJhdGlvbiIsInNob3dfZXhwaXJlZCIsImRpc21pc3NpYmxlIiwiZXhwIiwic3ludGF4IiwibGV2ZWwiLCJyZXZlcnNlIiwiX3JlZjQiLCJfcmVmNSIsImxpbmt0ZXh0Iiwic3R5bGVDb250cm9sIiwicXVvdGUiLCJjaXRhdGlvbiIsImltYWdlQ2xhc3MiLCJnZXRUYWJzVGVtcGxhdGUiLCJ0YWJzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJuZXh0VGFicyIsInRlbXBsYXRlTG9jayIsInBhcmVudCIsInN1cHBvcnRzIiwiaW5zZXJ0ZXIiLCJyZXVzYWJsZSIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9