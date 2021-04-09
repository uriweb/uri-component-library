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

/***/ "./src/js/blocks/breakout/block.js":
/*!*****************************************!*\
  !*** ./src/js/blocks/breakout/block.js ***!
  \*****************************************/
/***/ (function() {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl;
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
var ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'core/list', 'core/columns', 'uri-cl/button', 'uri-cl/boxout', 'uri-cl/card', 'uri-cl/date', 'uri-cl/hero', 'uri-cl/metric', 'uri-cl/quote'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Your breakout content...',
  dropCap: false
}]];

var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/breakout.svg',
    alt: "button"
  });
};

var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-breakout';

  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }

  if (!!attributes.use_content_width) {
    classes += ' use-content-width';
  }

  if (!!isSelected) {
    classes += ' selected';
  }

  return classes;
};

registerBlockType('uri-cl/breakout', {
  title: __('Breakout'),
  icon: customIcon,
  category: 'cl-blocks',
  description: __('Use breakouts to create visually distinct sections or full-width layouts.'),
  example: {
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: __('Breakouts content can be the same width as the rest of the page content, or it can expand beyond it.')
      }
    }, {
      name: 'uri-cl/button',
      attributes: {
        text: __('Learn More')
      }
    }]
  },
  attributes: {
    use_content_width: {
      type: 'boolean',
      default: true
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;
    var classes = classNames(attributes, isSelected);
    setAttributes({
      contentWrapper: ''
    }); // Generate editor view of the card itself

    var createContentEditForm = function createContentEditForm() {
      if (true === attributes.use_content_width) {
        return wp.element.createElement("div", {
          className: "container"
        }, wp.element.createElement("div", {
          className: classes
        }, wp.element.createElement("div", {
          className: "content-width"
        }, wp.element.createElement(InnerBlocks, {
          allowedBlocks: ALLOWED_BLOCKS,
          template: TEMPLATE
        }))));
      }

      return wp.element.createElement("div", {
        className: "container"
      }, wp.element.createElement("div", {
        className: classes
      }, wp.element.createElement(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE
      })));
    }; // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Use content width",
        checked: attributes.use_content_width,
        onChange: function onChange(content) {
          return setAttributes({
            use_content_width: content
          });
        }
      }))));
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
    URLInput = _wp$blockEditor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

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
    } // Generate editor view of the hero itself


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
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    } // Generate sidebar inspector controls for other custom attributes


    var createInspectorControls = function createInspectorControls() {
      return wp.element.createElement(InspectorControls, null, inspectorControls);
    }; // Send the editor interfaces to the view


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
    URLInput = _wp$blockEditor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

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
    } // Generate editor view of the promo itself


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
    }; // Generate block controls for alignment, etc


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
    }; // Send the editor interfaces to the view


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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/* harmony import */ var _breakout_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakout/block */ "./src/js/blocks/breakout/block.js");
/* harmony import */ var _breakout_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_breakout_block__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/block */ "./src/js/blocks/button/block.js");
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_block__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/block */ "./src/js/blocks/card/block.js");
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _date_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date/block */ "./src/js/blocks/date/block.js");
/* harmony import */ var _date_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_date_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero/block */ "./src/js/blocks/hero/block.js");
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hero_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/block */ "./src/js/blocks/menu/block.js");
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_menu_block__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metric/block */ "./src/js/blocks/metric/block.js");
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_metric_block__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notice/block */ "./src/js/blocks/notice/block.js");
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_notice_block__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel/block */ "./src/js/blocks/panel/block.js");
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_panel_block__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _promo_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./promo/block */ "./src/js/blocks/promo/block.js");
/* harmony import */ var _promo_block__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_promo_block__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quote/block */ "./src/js/blocks/quote/block.js");
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_quote_block__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs/tab */ "./src/js/blocks/tabs/tab.js");
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_tabs_tab__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/block */ "./src/js/blocks/tabs/block.js");
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tabs_block__WEBPACK_IMPORTED_MODULE_13__);














}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2JveG91dC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2JyZWFrb3V0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYnV0dG9uL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvY2FyZC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2RhdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9oZXJvL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvbWVudS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL21ldHJpYy9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL25vdGljZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3BhbmVsL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvcHJvbW8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9xdW90ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3RhYnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy90YWJzL3RhYi5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImJsb2NrRWRpdG9yIiwiUGxhaW5UZXh0IiwiUmljaFRleHQiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIlRvb2xiYXIiLCJCdXR0b24iLCJCbG9ja0FsaWdubWVudFRvb2xiYXIiLCJJbm5lckJsb2NrcyIsIkFMTE9XRURfQkxPQ0tTIiwiVEVNUExBVEUiLCJwbGFjZWhvbGRlciIsImRyb3BDYXAiLCJjdXN0b21JY29uIiwiVVJJX0NMX1VSTCIsImNsYXNzTmFtZXMiLCJhdHRyaWJ1dGVzIiwiaXNTZWxlY3RlZCIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJmbG9hdCIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJleGFtcGxlIiwiaW5uZXJCbG9ja3MiLCJuYW1lIiwiY29udGVudCIsInRleHQiLCJ0eXBlIiwiY29udGVudFdyYXBwZXIiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNyZWF0ZUJsb2NrQ29udHJvbHMiLCJzYXZlIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwiVG9nZ2xlQ29udHJvbCIsInVzZV9jb250ZW50X3dpZHRoIiwiZGVmYXVsdCIsImNyZWF0ZUluc3BlY3RvckNvbnRyb2xzIiwiVVJMSW5wdXQiLCJEYXNoaWNvbiIsIkJhc2VDb250cm9sIiwiVGV4dENvbnRyb2wiLCJCdXR0b25Hcm91cCIsImFsaWdubWVudCIsInN0eWxlIiwibGluayIsInRvb2x0aXAiLCJtZXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsInZhbHVlIiwiY2FwaXRhbGl6ZWRWYWx1ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZCIsIlRvb2xiYXJCdXR0b24iLCJ3aXRoTm90aWNlcyIsIk1lZGlhUGxhY2Vob2xkZXIiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJpbWciLCJib2R5IiwibWVkaWFJRCIsImJ1dHRvbiIsImFsdCIsImdldEltYWdlQnV0dG9uIiwib3BlbkV2ZW50IiwiaW5zdHJ1Y3Rpb25zIiwibWVkaWEiLCJ1cmwiLCJpZCIsIm9wZW4iLCJEYXRlUGlja2VyIiwiY29sb3IiLCJkYXRlIiwiY2FwdGlvbiIsInNob3dfeWVhciIsIkRhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImV4cGlyYXRpb25NZXNzYWdlIiwiZ2V0VGltZSIsImdldERhdGUiLCJGb2NhbFBvaW50UGlja2VyIiwicmFuZG9tSUQiLCJTNCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImhlYWRsaW5lIiwic3ViaGVhZCIsImZvcm1hdCIsIm1lZGlhSGVpZ2h0IiwibWVkaWFXaWR0aCIsInZpZCIsInVzZV9jYXB0aW9uIiwiY3JlZGl0IiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiYW5pbWF0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3N0ZXIiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ4IiwieSIsImZvY2FsUG9pbnQiLCJSYW5nZUNvbnRyb2wiLCJTZWxlY3RDb250cm9sIiwibWVudU5hbWVzIiwiZ2V0TWVudU5hbWVzIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJsaXN0IiwibSIsInB1c2giLCJsYWJlbCIsIlVSSV9DTF9TSVRFX1VSTCIsInNlbmQiLCJzaG93dGl0bGUiLCJkZXB0aCIsInRpdGxlTWV0YSIsImluc3BlY3RvckNvbnRyb2xzIiwicGFkZGluZ1JpZ2h0IiwibWV0cmljIiwiZXhwaXJhdGlvbiIsInNob3dfZXhwaXJlZCIsImRpc21pc3NpYmxlIiwiZXhwIiwic3ludGF4IiwibGV2ZWwiLCJyZXZlcnNlIiwibGlua3RleHQiLCJzdHlsZUNvbnRyb2wiLCJxdW90ZSIsImNpdGF0aW9uIiwiaW1hZ2VDbGFzcyIsImdldFRhYnNUZW1wbGF0ZSIsInRhYnMiLCJBcnJheSIsIm5leHRUYWJzIiwicGFyZW50Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBQVFBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFFUEcsaUIsR0FDR0YsRUFBRSxDQUFDRyxNLENBRE5ELGlCO3NCQVlHRixFQUFFLENBQUNJLFc7SUFUTkMsUyxtQkFBQUEsUztJQUNBQyxRLG1CQUFBQSxRO0lBQ0FDLFcsbUJBQUFBLFc7SUFDQUMsaUIsbUJBQUFBLGlCO0lBQ0FDLGEsbUJBQUFBLGE7SUFDQUMsTyxtQkFBQUEsTztJ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REQ7QUFlQSxHQW5DK0I7QUFtQzdCO0FBRUgwQixNQXJDZ0MsdUJBcUNUO0FBQUEsUUFBZnBCLFVBQWUsU0FBZkEsVUFBZTtBQUN0QixXQUNDLHlCQUFDLFdBQUQsQ0FBYSxPQUFiLE9BREQ7QUFHQTtBQXpDK0IsQ0FBaEIsQ0FBakIsQzs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLDBCQUEwQixFQUFFO1dBQzFDLGNBQWMsZUFBZTtXQUM3QixnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJibG9ja3MuYnVpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLCAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYm94b3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYm94b3V0LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1ib3hvdXQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYm94b3V0Jywge1xuXG5cdHRpdGxlOiBfXyggJ0JveG91dCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYm94b3V0cyB0byBjb250YWluIHRleHQgdGhhdCBpcyBhbmNpbGxhcnkgdG8gdGhlIHBhZ2XigJlzIGNvbnRlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnU2lkZSBub3RlJyApLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdCb3hvdXQgY29udGVudCBzdXBwb3J0cyB0aGUgcmVzdCBvZiB0aGUgcGFnZeKAmXMgbWVzc2FnZSB3aXRob3V0IGJlaW5nIGRpcmVjdGx5IHJlbGF0ZWQuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcywgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J2NvcmUvY29sdW1ucycsXG5cdCd1cmktY2wvYnV0dG9uJyxcblx0J3VyaS1jbC9ib3hvdXQnLFxuXHQndXJpLWNsL2NhcmQnLFxuXHQndXJpLWNsL2RhdGUnLFxuXHQndXJpLWNsL2hlcm8nLFxuXHQndXJpLWNsL21ldHJpYycsXG5cdCd1cmktY2wvcXVvdGUnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJyZWFrb3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnJlYWtvdXQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJyZWFrb3V0Jztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnVzZV9jb250ZW50X3dpZHRoICkge1xuXHRcdGNsYXNzZXMgKz0gJyB1c2UtY29udGVudC13aWR0aCc7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9icmVha291dCcsIHtcblxuXHR0aXRsZTogX18oICdCcmVha291dCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYnJlYWtvdXRzIHRvIGNyZWF0ZSB2aXN1YWxseSBkaXN0aW5jdCBzZWN0aW9ucyBvciBmdWxsLXdpZHRoIGxheW91dHMuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdCcmVha291dHMgY29udGVudCBjYW4gYmUgdGhlIHNhbWUgd2lkdGggYXMgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgY29udGVudCwgb3IgaXQgY2FuIGV4cGFuZCBiZXlvbmQgaXQuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR1c2VfY29udGVudF93aWR0aDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoIHRydWUgPT09IGF0dHJpYnV0ZXMudXNlX2NvbnRlbnRfd2lkdGggKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIGNvbnRlbnQgd2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnVzZV9jb250ZW50X3dpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdXNlX2NvbnRlbnRfd2lkdGg6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnV0dG9uLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1idXR0b24nO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYnV0dG9uJywge1xuXG5cdHRpdGxlOiBfXyggJ0J1dHRvbicgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYnV0dG9ucyB0byBhdHRyYWN0IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBjYWxsIHRvIGFjdGlvbiBvbiBhIHBhZ2UuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGV4dDogX18oICdFeHBsb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IG1ldGE7XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWJ1dHRvbi1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWxpZ25tZW50OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJidXR0b24tc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3Byb21pbmVudCcsICdkaXNhYmxlZCcgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2NhcmQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWNhcmQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2NhcmQnLCB7XG5cblx0dGl0bGU6IF9fKCAnQ2FyZCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgY2FyZHMgdG8gZXhwbGFpbiBhbmQgbGluayB0byBhIHNpbmdsZSBpZGVhLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ09uZSBpZGVhJyApLFxuXHRcdFx0Ym9keTogX18oICdTaW5jZSB0aGUgZW50aXJlIGNhcmQgbXVzdCBiZSBhIHNpbmdsZSBsaW5rLCBpdOKAmXMgcGVyZmVjdCBmb3IgbGlua2luZyB0byBicm9hZCB0b3BpY3Mgd2hlcmUgeW91IG5lZWQgbW9yZSB3b3JkcyBvciBhIHBob3RvIHRvIGRlc2NyaWJlIHRoZSBsaW5rZWQgcmVzb3VyY2UuJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGJ1dHRvbjogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWNhcmQtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1jYXJkLWNvbnRhaW5lciBtZWRpYVwiPlxuXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIHRleHRcIj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYm9keTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgY2FyZCB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIGJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxuXHREYXRlUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9kYXRlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJkYXRlXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtZGF0ZSc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5jb2xvciApIHtcblx0XHRjbGFzc2VzICs9ICcgY2wtZGF0ZS0nICsgYXR0cmlidXRlcy5jb2xvcjtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvZGF0ZScsIHtcblxuXHR0aXRsZTogX18oICdEYXRlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBkYXRlcyB0byBkaXNwbGF5IGEgZG93bmxvYWRhYmxlIGNhbGVuZGFyIGV2ZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGRhdGU6IF9fKCAnSnVseSAyOCwgMjA2MScgKSxcblx0XHRcdGNhcHRpb246IF9fKCAnSGFsbGV54oCZcyBDb21ldCByZWFjaGVzIHBlcmloZWxpb24nICksXG5cdFx0fSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0ZGF0ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHNob3dfeWVhcjoge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5kYXRlICkge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGRhdGU6IG5ldyBEYXRlKCkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoIGF0dHJpYnV0ZXMuZGF0ZSApO1xuXG5cdFx0XHRsZXQgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCAnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9ICk7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc2hvd195ZWFyICkge1xuXHRcdFx0XHRtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoICdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JyB9ICkgKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgZXhwaXJhdGlvbk1lc3NhZ2UgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5kYXRlICYmIGRhdGUuZ2V0VGltZSgpIDw9IHRvZGF5LmdldFRpbWUoKSApIHtcblx0XHRcdFx0ZXhwaXJhdGlvbk1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImNsLWNvbXBvbmVudC1tZXNzYWdlXCI+VGhpcyBkYXRlIG1heSBubyBsb25nZXIgYmUgcmVsZXZhbnQuPC9kaXY+O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHsgZXhwaXJhdGlvbk1lc3NhZ2UgfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1tb250aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtb250aCB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWRheVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBkYXRlLmdldERhdGUoKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY2FwdGlvbi13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jYXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGRhdGUgY2FwdGlvbicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RhdGUgQ29sb3InICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiZGF0ZS1jb2xvclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnRGF0ZSBDb2xvcicgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdibHVlJywgJ3JlZCcsICdncmV5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdibHVlJyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuY29sb3IgKSA/ICcnIDogYXR0cmlidXRlcy5jb2xvcjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gY29sb3IgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY29sb3I6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZT17IGF0dHJpYnV0ZXMuZGF0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRhdGUgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgeWVhclwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd195ZWFyIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd195ZWFyOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9oZXJvLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCByYW5kb21JRCA9ICgpID0+IHtcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg2MDg1My9nZW5lcmF0ZS1yYW5kb20tc3RyaW5nLWZvci1kaXYtaWRcblx0Y29uc3QgUzQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICggKCAoIDEgKyBNYXRoLnJhbmRvbSgpICkgKiAweDEwMDAwICkgfCAwICkudG9TdHJpbmcoIDE2ICkuc3Vic3RyaW5nKCAxICk7XG5cdH07XG5cdHJldHVybiAoIFM0KCkgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArIFM0KCkgKyBTNCgpICk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9oZXJvJywge1xuXG5cdHRpdGxlOiBfXyggJ0hlcm8nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGhlcm9lcyB0byBlbmdhZ2Ugd2l0aCB0aGUgdmlzaXRvciBhbmQgY3JlYXRlIHRoZSBzZW5zZSBvZiBkZXNpcmUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aGVhZGxpbmU6IF9fKCAnQXNwaXJhdGlvbmFsJyApLFxuXHRcdFx0c3ViaGVhZDogX18oICdIZXJvZXMgYWx3YXlzIGFyZS4nICksXG5cdFx0XHRidXR0b246IF9fKCAnQmUgb25lJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGZvcm1hdDogJ3N1cGVyJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdGhlYWRsaW5lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN1YmhlYWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhV2lkdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dXNlX2NhcHRpb246IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y3JlZGl0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHBvc2l0aW9uWDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRwb3NpdGlvblk6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSGVpZ2h0OiBtZWRpYS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvblg6IDAuNSxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25ZOiAwLjUsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGhlcm8gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMuaWQgKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuaWQgPSByYW5kb21JRCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1oZXJvJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMubGluayApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIGhhcy1saW5rJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1saW5rJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdWJoZWFkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLXN1YmhlYWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLXN1YmhlYWQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHN0eWxlID0ge307XG5cdFx0XHRsZXQgcG9zdGVyID0gJ3Bvc3Rlcic7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0XHRcdFx0cG9zdGVyID0gJ3N0aWxsJztcblx0XHRcdFx0c3R5bGUgPSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgJHsgYXR0cmlidXRlcy5wb3NpdGlvblggKiAxMDAgfSUgJHsgYXR0cmlidXRlcy5wb3NpdGlvblkgKiAxMDAgfSVgLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgkeyBhdHRyaWJ1dGVzLmltZyB9KWAsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1oZXJvLXByb3BlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHBvc3RlciB9IHN0eWxlPXsgc3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tdGV4dCBvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGhlYWRsaW5lOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5oZWFkbGluZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGhlcm8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWJoZWFkXCI+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdWJoZWFkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJoZWFkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyBzdWJ0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3ViaGVhZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUhlaWdodDogbWVkaWEuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWTogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJoZXJvLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnSGVybyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdmdWxsd2lkdGgnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8Rm9jYWxQb2ludFBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdHVybD17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zPXsgeyB3aWR0aDogYXR0cmlidXRlcy5tZWRpYVdpZHRoLCBoZWlnaHQ6IGF0dHJpYnV0ZXMubWVkaWFIZWlnaHQgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB7IHg6IGF0dHJpYnV0ZXMucG9zaXRpb25YLCB5OiBhdHRyaWJ1dGVzLnBvc2l0aW9uWSB9IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZm9jYWxQb2ludCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcG9zaXRpb25YOiAoIGZvY2FsUG9pbnQueCAqIDEgKSwgcG9zaXRpb25ZOiAoIGZvY2FsUG9pbnQueSAqIDEgKSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZpZGVvIFVSTFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHZpZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52aWQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiRm9yIGNyZWF0aW5nIGEgdmlkZW8gaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIFdvcmRQcmVzcyBjYXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0dGluZyBhIGN1c3RvbSBjYXB0aW9uIGJlbG93IHdpbGwgb3ZlcnJpZGUgYW55IFdvcmRQcmVzcyBjYXB0aW9uLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMudXNlX2NhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB1c2VfY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgY2FwdGlvbiBmb3IgdGhlIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDcmVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjcmVkaXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY3JlZGl0IH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNwZWNpZnkgY3JlZGl0IGZvciB0aGUgaGVybyBtZWRpYS5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdFVSTElucHV0LFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL21lbnUuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLW1lbnUnO1xuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxubGV0IG1lbnVOYW1lcyA9IGZhbHNlO1xuXG5jb25zdCBnZXRNZW51TmFtZXMgPSAoKSA9PiB7XG5cdGNvbnN0IHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0eG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0aWYgKCB4bWxodHRwLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgKSB7XG5cdFx0XHRpZiAoIDIwMCA9PT0geG1saHR0cC5zdGF0dXMgKSB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoIHhtbGh0dHAucmVzcG9uc2VUZXh0ICk7XG5cdFx0XHRcdGNvbnN0IGxpc3QgPSBbXTtcblx0XHRcdFx0Zm9yICggY29uc3QgbSBvZiBwYXJzZWQgKSB7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogbS5uYW1lLFxuXHRcdFx0XHRcdFx0dmFsdWU6IG0ubmFtZSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWVudU5hbWVzID0gbGlzdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0eG1saHR0cC5vcGVuKCAnR0VUJywgVVJJX0NMX1NJVEVfVVJMICsgJy93cC1qc29uL3VyaS1jb21wb25lbnQtbGlicmFyeS92MS9tZW51cycsIHRydWUgKTtcblx0eG1saHR0cC5zZW5kKCk7XG59O1xuXG5nZXRNZW51TmFtZXMoKTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbWVudScsIHtcblxuXHR0aXRsZTogX18oICdNZW51JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBtZW51cyB3aGVuIHRoZSBzYW1lIGNvbGxlY3Rpb24gb2YgbGlua3MgbXVzdCBhcHBlYXIgb24gbXVsdGlwbGUgcGFnZXMuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bmFtZTogJ21lbnUxJyxcblx0XHRcdHRpdGxlOiBfXyggJ01haW4gTWVudScgKSxcblx0XHRcdHNob3d0aXRsZTogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bmFtZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRkZXB0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0c2hvd3RpdGxlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGJ1dHRvbiBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHQvLyBTZXQgdGhlIGNsYXNzbmFtZXNcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdGxldCBuYW1lID0gJyc7XG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5uYW1lICkge1xuXHRcdFx0XHRuYW1lID0gJzogJyArIGF0dHJpYnV0ZXMubmFtZTtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLm5hbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50aXRsZSApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRpdGxlO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGl0bGVNZXRhID0gJyc7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMuc2hvd3RpdGxlICkge1xuXHRcdFx0XHR0aXRsZU1ldGEgPSA8c3BhbiBjbGFzc05hbWU9XCJjbC1tZW51LXRvZ2dsZVwiPnsgdGl0bGUgfTwvc3Bhbj47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLW1lbnUtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0eyB0aXRsZU1ldGEgfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1tZW51LXBsYWNlaG9sZGVyXCI+TWVudSBwbGFjZWhvbGRlcnsgbmFtZSB9PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IGluc3BlY3RvckNvbnRyb2xzID0gKFxuXHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9eyB7IHBhZGRpbmdSaWdodDogJzdweCcgfSB9PjxEYXNoaWNvbiBpY29uPVwid2FybmluZ1wiIC8+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5UaGlzIHNpdGUgaGFzIG5vIG1lbnVzLiAgQ3JlYXRlIG9uZSB1bmRlciB0aGUgQXBwZWFyYW5jZSB0YWIuPC9kaXY+XG5cdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpO1xuXG5cdFx0aWYgKCAhISBtZW51TmFtZXMgKSB7XG5cdFx0XHRpbnNwZWN0b3JDb250cm9scyA9IChcblx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01lbnUnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5hbWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5hbWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBtZW51TmFtZXMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ0lmIG5vIHRpdGxlIGlzIHByb3ZpZGVkLCB0aGUgbWVudSBuYW1lIHdpbGwgYmUgdXNlZC4nICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgdGl0bGUgb24gZGVza3RvcCcgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RpdGxlcyBhcmUgYWx3YXlzIHNob3duIG9uIG1vYmlsZS4nICkgfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93dGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd3RpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGVwdGgnICkgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAyIH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkZXB0aCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGVwdGggfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlcHRoIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdHsgaW5zcGVjdG9yQ29udHJvbHMgfVxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbWV0cmljLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJtZXRyaWNcIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1tZXRyaWMnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9tZXRyaWMnLCB7XG5cblx0dGl0bGU6IF9fKCAnTWV0cmljJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBtZXRyaWNzIHRvIGlsbHVzdHJhdGUgYSBmYWN0IHRoYXQgaXMgY29uY2lzZSBhbmQgZWFzeSB0byBjb25zdW1lLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdG1ldHJpYzogX18oICc0MEsnICksXG5cdFx0XHRjYXB0aW9uOiBfXyggJ0xlYWd1ZXMgdW5kZXIgdGhlIHNlYScgKSxcblx0XHRcdHN0eWxlOiAnZGFyaycsXG5cdFx0fSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdG1ldHJpYzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLW1ldHJpYy1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbWV0cmljOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZXRyaWMgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnMTAwJScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ21ldHJpY3Mgb24gdGhpcyBwYWdlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Ly8gQHRvZG86IHRlY2huaWNhbGx5LCB5b3UgY2FuIGhhdmUgYSBjbGVhciBhbmQgZGFyayBtZXRyaWNcblx0XHQvLyBvdXIgYnV0dG9uZ3JvdXAgb25seSBhbGxvd3MgdXNlcnMgdG8gc2VsZWN0IG9uZVxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldHJpYyBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJtZXRyaWMtc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ01ldHJpYyBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdzdGFuZGFyZCcsICdjbGVhcicsICdkYXJrJywgJ292ZXJsYXknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBrZXkgPT09IGF0dHJpYnV0ZXMuc3R5bGU7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdERhdGVQaWNrZXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXTtcblxuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgbm90aWNlIGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbm90aWNlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9ub3RpY2UnLCB7XG5cdHRpdGxlOiBfXyggJ05vdGljZScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2Ugbm90aWNlcyB0byBkaXNwbGF5IGNvbnRlbnQgdGhhdCBpcyBwYXJ0aWN1bGFybHkgdXJnZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ1BsZWFzZSBOb3RlJyApLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdOb3RpY2VzIGFyZSBtZWFudCB0byBiZSB0ZW1wb3JhcnkgYW5kIHRpbWVseSBhbmQgc2hvdWxkIG9ubHkgYmUgdXNlZCB0byBjb21tdW5pY2F0ZSBhbiBleGNlcHRpb25hbCBjb25kaXRpb24uJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRleHBpcmF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHNob3dfZXhwaXJlZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHRkaXNtaXNzaWJsZToge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHRcdGNvbnRlbnRXcmFwcGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSAnY2wtbm90aWNlJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEaXNwbGF5IGEgbWVzc2FnZSBvbiB0aGUgYWRtaW4gc2NyZWVuIGlmIHRoZSBub3RpY2UgaXMgZXhwaXJlZFxuXHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRjb25zdCBleHAgPSBuZXcgRGF0ZSggYXR0cmlidXRlcy5leHBpcmF0aW9uICk7XG5cdFx0XHRsZXQgZXhwaXJhdGlvbk1lc3NhZ2UgPSAnJztcblx0XHRcdGxldCBzeW50YXggPSAnYW5kIHdpbGwgbm90Jztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zaG93X2V4cGlyZWQgKSB7XG5cdFx0XHRcdHN5bnRheCA9ICdidXQgd2lsbCBzdGlsbCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuZXhwaXJhdGlvbiAmJiBleHAuZ2V0VGltZSgpIDw9IGRhdGUuZ2V0VGltZSgpICkge1xuXHRcdFx0XHRleHBpcmF0aW9uTWVzc2FnZSA9IDxkaXYgY2xhc3NOYW1lPVwiY2wtY29tcG9uZW50LW1lc3NhZ2VcIj5UaGlzIG5vdGljZSBoYXMgZXhwaXJlZCB7IHN5bnRheCB9IGJlIHZpc2libGUgd2hlbiBwdWJsaXNoZWQuPC9kaXY+O1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0eyBleHBpcmF0aW9uTWVzc2FnZSB9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgbm90aWNlIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTm90aWNlIFN0eWxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5vdGljZS1zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnTm90aWNlIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAndXJnZW50JywgJ2NvdmlkMTknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc3R5bGUgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBzdHlsZSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkFsbG93IHZpc2l0b3JzIHRvIGRpc21pc3MgdGhpcyBub3RpY2VcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmRpc21pc3NpYmxlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGlzbWlzc2libGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PERhdGVQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkV4cGlyYXRpb24gZGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudERhdGU9eyBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkYXRlICkgPT4gc2V0QXR0cmlidXRlcyggeyBleHBpcmF0aW9uOiBkYXRlIH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTaG93IGFmdGVyIGV4cGlyZWRcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnNob3dfZXhwaXJlZCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNob3dfZXhwaXJlZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHRCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvaGVhZGluZycsIHsgbGV2ZWw6IDEsIHBsYWNlaG9sZGVyOiAnTXkgUGFuZWwnIH0gXSxcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXHRbICd1cmktY2wvYnV0dG9uJywge30gXSxcbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9wYW5lbC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAoICdzdXBlcicgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnY2wtcGFuZWwtc3VwZXInIDogJ2NsLXBhbmVsJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5yZXZlcnNlICkge1xuXHRcdGNsYXNzZXMgKz0gJyByZXZlcnNlJztcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3BhbmVsJywge1xuXG5cdHRpdGxlOiBfXyggJ1BhbmVsJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBwYW5lbHMgdG8gcHJvdmlkZSBhIGRlZXAsIHZpc3VhbCBjb250ZXh0IGZvciBhIHBhcnRpY3VsYXIgdG9waWMuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnQSBCaXQgTW9yZScgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlLmpwZycsXG5cdFx0XHRyZXZlcnNlOiB0cnVlLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvaGVhZGluZycsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGxldmVsOiAyLFxuXHRcdFx0XHRjb250ZW50OiBfXyggJ09wdGlvbnMnICksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdBIHBhbmVsIGlzIGRpZmZlcmVudCBmcm9tIGEgY2FyZCBpbiB0aGF0IGEgcGFuZWwgbWF5IGluY2x1ZGUgPGEgaHJlZj1cIiNcIj5tdWx0aXBsZSBsaW5rczwvYT4gb3IgYnV0dG9ucy4nICksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHR0ZXh0OiBfXyggJ0xlYXJuIE1vcmUnICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHJldmVyc2U6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgfHwgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoICdzdXBlcicgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1ibHVyXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJwb3N0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UsIHN1cGVyIHBhbmVsIHByZXZpZXdzIHdpbGwgYXBwZWFyIHNpbXBsaWZpZWQgaW4gdGhlIGVkaXRvciB3aW5kb3cuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cInBhbmVsLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUGFuZWwgRm9ybWF0JyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRmxpcCBwYW5lbCBsYXlvdXRcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnJldmVyc2UgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyByZXZlcnNlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3Byb21vLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9wcm9tbycsIHtcblxuXHR0aXRsZTogX18oICdQcm9tbycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgcHJvbW9zIHRvIHNob3djYXNlIHRpbWVseSBtYXJrZXRpbmcgaW5mb3JtYXRpb24uJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnVGl0bGUnICksXG5cdFx0XHRib2R5OiBfXyggJ1NvbWUgYm9keSB0ZXh0JyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rdGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgcHJvbW8gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSAnY2wtcHJvbW8nO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdtaWNybycgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbWljcm8nO1xuXG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtcHJvbW8tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tbWljcm8tY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tbWljcm8tdGV4dC1saW5rXCI+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbmt0ZXh0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGlua3RleHQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgbGluayB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPnsgbWV0YSB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgc3R5bGUgPSAnc3R5bGUtYmx1cic7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgJiYgJ2RlZmF1bHQnICE9PSBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRzdHlsZSA9ICdzdHlsZS0nICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdHN0eWxlID0gJ2NsLXByb21vLWJhY2tkcm9wICcgKyBzdHlsZTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtcHJvbW8tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1iYWNrZHJvcC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgc3R5bGUgfT48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBwcm9tbyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxwPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBwcm9tbyB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD48c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby10ZXh0LWxpbmtcIj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGlua3RleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rdGV4dCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBsaW5rIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWltZ1wiPjxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLWltZy1saW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1ibG9jay1lZGl0b3ItbWV0YVwiPnsgbWV0YSB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBzdHlsZUNvbnRyb2w7XG5cdFx0aWYgKCAnbWljcm8nICE9PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdHN0eWxlQ29udHJvbCA9IChcblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N0eWxlJyApIH1cblx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RvIGluY3JlYXNlIHBlcmZvcm1hbmNlLCBwcm9tbyBwcmV2aWV3cyB3aWxsIGFwcGVhciBzaW1wbGlmaWVkIGluIHRoZSBlZGl0b3Igd2luZG93LicgKSB9XG5cdFx0XHRcdFx0XHRpZD1cInByb21vLXN0eWxlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUHJvbW8gU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ2JyYW5kJywgJ2NvbmZldHRpJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cInByb21vLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnUHJvbW8gRm9ybWF0JyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnbWljcm8nIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0eyBzdHlsZUNvbnRyb2wgfVxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHRCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3F1b3RlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1xdW90ZSc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0fSBlbHNlIHtcblx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9xdW90ZScsIHtcblxuXHR0aXRsZTogX18oICdRdW90ZScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgcXVvdGVzIHRvIGNyZWF0ZSBhIGJsb2NrcXVvdGUgZWxlbWVudCB0aGF0IHN0YW5kcyBvdXQgZnJvbSB0aGUgcGFnZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRxdW90ZTogX18oICdPY2Vhbiwgd2hvIGlzIHRoZSBzb3VyY2Ugb2YgYWxsLicgKSxcblx0XHRcdGNpdGF0aW9uOiBfXyggJ0hvbWVyJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGVfc3F1YXJlLmpwZycsXG5cdFx0fSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0cXVvdGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2l0YXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBpbWFnZUNsYXNzID0gKCAhISBhdHRyaWJ1dGVzLm1lZGlhSUQgKSA/ICdjbC1xdW90ZS1pbWFnZScgOiAnJztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgaW1hZ2VDbGFzcyB9PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YmxvY2txdW90ZT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBxdW90ZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucXVvdGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGhlIHF1b3RlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2Jsb2NrcXVvdGU+XG5cdFx0XHRcdFx0XHQ8Y2l0ZT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjaXRhdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2l0YXRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnQW5vbnltb3VzJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2NpdGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0UmFuZ2VDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J3VyaS1jbC90YWInLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3RhYnMuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLXRhYnMnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbmNvbnN0IGdldFRhYnNUZW1wbGF0ZSA9ICggdGFicyApID0+IHtcblx0cmV0dXJuIFsgLi4uQXJyYXkoIHRhYnMgKSBdLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFsgJ3VyaS1jbC90YWInLCB7fSBdO1xuXHR9ICk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC90YWJzJywge1xuXG5cdHRpdGxlOiBfXyggJ1RhYnMnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHRhYnMgdG8gZGlzcGxheSBjb250ZW50IHRoYXQgaGFzIGEgY29ycmVsYXRpb24gYnV0IGlzIG5vdCBkaXJlY3RseSByZWxhdGVkLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRhYnM6IDIsXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAndXJpLWNsL3RhYicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHR0aXRsZTogJ0FwcGxlcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogX18oICdFYWNoIHRhYiBjYW4gY29udGFpbiBwYXJhZ3JhcGhzLCBsaW5rcywgYW5kIG90aGVyIGNvbXBvbmVudHMuJyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0dGV4dDogX18oICdNb3JlIGFib3V0IGZydWl0JyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ3VyaS1jbC90YWInLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0dGl0bGU6ICdPcmFuZ2VzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ1RoaXMgdGFiIHdpbGwgaGF2ZSBkaWZmZXJlbnQgaW5mb3JtYXRpb24gdGhhbiB0aGUgZmlyc3QgdGFiLCBidXQgdGhlIGluZm9ybWF0aW9uIHNob3VsZCBjb3JyZWxhdGUgc29tZWhvdy4nICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogX18oICdPbmx5IG9uZSB0YWIgd2lsbCBiZSB2aXNpYmxlIGF0IGEgdGltZSBvbiB0aGUgbGl2ZSBwYWdlLicgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGFiczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAyLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcyApO1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdUYWJzJyApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGFicyB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHRUYWJzICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWJzOiBuZXh0VGFicyxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRtaW49eyAyIH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9eyA2IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgZ2V0VGFic1RlbXBsYXRlKCBhdHRyaWJ1dGVzLnRhYnMgKSB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlTG9jaz1cImFsbFwiXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXHQndXJpLWNsL2NhcmQnLFxuXHQndXJpLWNsL21ldHJpYycsXG5cdCd1cmktY2wvcXVvdGUnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIHRhYiBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3RhYi5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvdGFiJywge1xuXG5cdHRpdGxlOiBfXyggJ1RhYicgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0cGFyZW50OiBbICd1cmktY2wvdGFicycgXSxcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC10YWJcIj5cblx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUYWIgVGl0bGUnICkgfVxuXHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdHRlbXBsYXRlTG9jaz17IGZhbHNlIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYm94b3V0L2Jsb2NrJztcbmltcG9ydCAnLi9icmVha291dC9ibG9jayc7XG5pbXBvcnQgJy4vYnV0dG9uL2Jsb2NrJztcbmltcG9ydCAnLi9jYXJkL2Jsb2NrJztcbmltcG9ydCAnLi9kYXRlL2Jsb2NrJztcbmltcG9ydCAnLi9oZXJvL2Jsb2NrJztcbmltcG9ydCAnLi9tZW51L2Jsb2NrJztcbmltcG9ydCAnLi9tZXRyaWMvYmxvY2snO1xuaW1wb3J0ICcuL25vdGljZS9ibG9jayc7XG5pbXBvcnQgJy4vcGFuZWwvYmxvY2snO1xuaW1wb3J0ICcuL3Byb21vL2Jsb2NrJztcbmltcG9ydCAnLi9xdW90ZS9ibG9jayc7XG5pbXBvcnQgJy4vdGFicy90YWInO1xuaW1wb3J0ICcuL3RhYnMvYmxvY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==