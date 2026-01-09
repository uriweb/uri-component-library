/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blocks/abstract/block.js":
/*!*****************************************!*\
  !*** ./src/js/blocks/abstract/block.js ***!
  \*****************************************/
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
  ToggleControl = _wp$components.ToggleControl,
  ColorPicker = _wp$components.ColorPicker;
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
    src: URI_CL_URL + 'i/icons/abstract.svg',
    alt: "button"
  });
};
registerBlockType('uri-cl/abstract', {
  title: __('Abstract'),
  icon: customIcon,
  category: 'cl-blocks',
  description: __('Use abstracts to introduce content in a visual mannor, especially when suitable photography is not available.'),
  example: {
    attributes: {
      title: __('A grand vision'),
      body: __('Set the groundwork for the story, and entice readers to explore fully.'),
      button: __('Continue'),
      mediaID: true,
      img: URI_CL_URL + 'i/example.jpg'
    }
  },
  // The mediaID is what goes into the shortcode for front-end display
  // the img and alt are for editor placeholders
  // the mediaHeight and mediaWidth are for the focal point picker component
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
    background: {
      type: 'string',
      default: '#002147'
    },
    bgcolorpicker: {
      type: 'string',
      default: '#1b5da9'
    },
    bgcss: {
      type: 'string'
    },
    style: {
      type: 'string',
      default: 'bars'
    },
    invert_a11y: {
      type: 'boolean'
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

    // Generate editor view of the abstract itself
    var createContentEditForm = function createContentEditForm() {
      var classes = 'cl-abstract';
      if (!!attributes.className) {
        classes += ' ' + attributes.className;
      }
      if (!!attributes.style) {
        classes += ' ' + attributes.style;
      }
      if (!!isSelected) {
        classes += ' selected';
      }
      attributes.background = attributes.bgcolorpicker;
      if (!!attributes.bgcss) {
        attributes.background = attributes.bgcss;
      }
      return wp.element.createElement("div", {
        className: "container cl-abstract-block-form"
      }, wp.element.createElement("div", {
        className: classes,
        style: {
          background: attributes.background
        }
      }, wp.element.createElement("div", {
        className: "cl-abstract-backdrop-preview"
      }), wp.element.createElement("div", {
        className: "cl-abstract-proper has-img"
      }, wp.element.createElement("div", {
        className: "cl-abstract-content-wrapper"
      }, wp.element.createElement("div", {
        className: "cl-abstract-img"
      }, wp.element.createElement("div", {
        className: "img-wrapper"
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
      }))), wp.element.createElement("div", {
        className: "cl-abstract-text"
      }, wp.element.createElement("h1", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __('Your abstract title'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("p", null, wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        value: attributes.body,
        placeholder: __('Your abstract text'),
        keepPlaceholderOnFocus: true
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
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, null, wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Format'),
        help: __('To increase performance, abstract previews will appear simplified in the editor window.'),
        id: "abstract-format"
      }, wp.element.createElement(ButtonGroup, {
        "aria-label": __('Abstract Format')
      }, ['bars', 'discs', 'lattice', 'honeycomb'].map(function (value) {
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
      })))), wp.element.createElement(PanelRow, null, wp.element.createElement(BaseControl, {
        label: __('Background Color'),
        id: "abstract-background"
      }, wp.element.createElement(ColorPicker, {
        color: attributes.bgcolorpicker,
        onChangeComplete: function onChangeComplete(value) {
          return setAttributes({
            bgcolorpicker: value.hex
          });
        },
        disableAlpha: true
      }))), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
        label: "Custom Background CSS",
        onChange: function onChange(content) {
          return setAttributes({
            bgcss: content
          });
        },
        value: attributes.bgcss,
        help: "Set a CSS value for the background color (overrides the color picker setting)."
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Invert accessibility controls",
        help: "Use white foreground on dark background.",
        checked: attributes.invert_a11y,
        onChange: function onChange(content) {
          return setAttributes({
            invert_a11y: content
          });
        }
      }))));
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createInspectorControls(), createContentEditForm()];
  } // End edit
});

/***/ }),

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
    });

    // Generate editor view of the card itself
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
    };

    // Generate sidebar inspector controls for other custom attributes
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
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    },
    headline: {
      // Depricated in v5.1, use "title" instead
      type: 'string'
    },
    subhead: {
      // Depricated in v5.1, use "body" instead
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
    invert_a11y: {
      type: 'boolean',
      default: true
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
      if (!attributes.title && !!attributes.headline) {
        // "headline" depricated in v5.1, use "title" instead
        attributes.title = attributes.headline;
      }
      if (!attributes.body && !!attributes.subhead) {
        // "subhead" depricated in v5.1, use "body" instead
        attributes.body = attributes.subhead;
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
      if (!!attributes.body || !!attributes.subhead) {
        // "subhead" depricated in v5.1, use "body" instead
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
            title: content
          });
        },
        value: attributes.title,
        placeholder: __('Your hero title'),
        keepPlaceholderOnFocus: true
      })), wp.element.createElement("p", {
        className: "subhead"
      }, wp.element.createElement(RichText, {
        onChange: function onChange(content) {
          return setAttributes({
            body: content
          });
        },
        value: attributes.body,
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

/***/ }),

/***/ "./src/js/blocks/tooltip/block.js":
/*!****************************************!*\
  !*** ./src/js/blocks/tooltip/block.js ***!
  \****************************************/
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
var ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/list'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Your tooltip content...',
  dropCap: false
}]];
var customIcon = function customIcon() {
  return wp.element.createElement("img", {
    width: "20",
    height: "20",
    className: "dashicon",
    src: URI_CL_URL + 'i/icons/tooltip.svg',
    alt: "button"
  });
};
var classNames = function classNames(attributes, isSelected) {
  var classes = 'cl-tooltip';
  if (!!attributes.className) {
    // @todo this gets automatically applied to wrapper... remove it?
    classes += ' ' + attributes.className;
  }
  if (!!isSelected) {
    classes += ' selected';
  }
  return classes;
};
registerBlockType('uri-cl/tooltip', {
  title: __('Tooltip'),
  icon: customIcon,
  category: 'cl-blocks',
  description: __('Use tooltips to provide notes and direction while building a site.'),
  example: {
    attributes: {
      title: __('Tooltip')
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: __('Tooltips provide helpful direction.')
      }
    }]
  },
  attributes: {
    title: {
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
      }, wp.element.createElement("h2", null, wp.element.createElement(PlainText, {
        onChange: function onChange(content) {
          return setAttributes({
            title: content
          });
        },
        value: attributes.title,
        placeholder: __('Tip:'),
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
      });
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
/* harmony import */ var _abstract_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/block */ "./src/js/blocks/abstract/block.js");
/* harmony import */ var _abstract_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_abstract_block__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boxout_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxout/block */ "./src/js/blocks/boxout/block.js");
/* harmony import */ var _boxout_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boxout_block__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breakout_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakout/block */ "./src/js/blocks/breakout/block.js");
/* harmony import */ var _breakout_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_breakout_block__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/block */ "./src/js/blocks/button/block.js");
/* harmony import */ var _button_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/block */ "./src/js/blocks/card/block.js");
/* harmony import */ var _card_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _date_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date/block */ "./src/js/blocks/date/block.js");
/* harmony import */ var _date_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_date_block__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero/block */ "./src/js/blocks/hero/block.js");
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_hero_block__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/block */ "./src/js/blocks/menu/block.js");
/* harmony import */ var _menu_block__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_menu_block__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metric/block */ "./src/js/blocks/metric/block.js");
/* harmony import */ var _metric_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_metric_block__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notice/block */ "./src/js/blocks/notice/block.js");
/* harmony import */ var _notice_block__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_notice_block__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel/block */ "./src/js/blocks/panel/block.js");
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_panel_block__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _promo_block__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promo/block */ "./src/js/blocks/promo/block.js");
/* harmony import */ var _promo_block__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_promo_block__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quote/block */ "./src/js/blocks/quote/block.js");
/* harmony import */ var _quote_block__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_quote_block__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/tab */ "./src/js/blocks/tabs/tab.js");
/* harmony import */ var _tabs_tab__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tabs_tab__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tabs/block */ "./src/js/blocks/tabs/block.js");
/* harmony import */ var _tabs_block__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_tabs_block__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _tooltip_block__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tooltip/block */ "./src/js/blocks/tooltip/block.js");
/* harmony import */ var _tooltip_block__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_tooltip_block__WEBPACK_IMPORTED_MODULE_15__);
















}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNGO0FBQ0U7QUFDRjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNEO0FBQ0E7QUFDQTtBQUNIO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2Fic3RyYWN0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYm94b3V0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYnJlYWtvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvZGF0ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2hlcm8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9tZW51L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvbWV0cmljL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3Mvbm90aWNlL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvcGFuZWwvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9wcm9tby9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3F1b3RlL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvdGFicy9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3RhYnMvdGFiLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvdG9vbHRpcC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdENvbG9yUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9hYnN0cmFjdC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYWJzdHJhY3QnLCB7XG5cblx0dGl0bGU6IF9fKCAnQWJzdHJhY3QnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGFic3RyYWN0cyB0byBpbnRyb2R1Y2UgY29udGVudCBpbiBhIHZpc3VhbCBtYW5ub3IsIGVzcGVjaWFsbHkgd2hlbiBzdWl0YWJsZSBwaG90b2dyYXBoeSBpcyBub3QgYXZhaWxhYmxlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ0EgZ3JhbmQgdmlzaW9uJyApLFxuXHRcdFx0Ym9keTogX18oICdTZXQgdGhlIGdyb3VuZHdvcmsgZm9yIHRoZSBzdG9yeSwgYW5kIGVudGljZSByZWFkZXJzIHRvIGV4cGxvcmUgZnVsbHkuJyApLFxuXHRcdFx0YnV0dG9uOiBfXyggJ0NvbnRpbnVlJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJyMwMDIxNDcnLFxuXHRcdH0sXG5cdFx0Ymdjb2xvcnBpY2tlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnIzFiNWRhOScsXG5cdFx0fSxcblx0XHRiZ2Nzczoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnYmFycycsXG5cdFx0fSxcblx0XHRpbnZlcnRfYTExeToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBhYnN0cmFjdCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1hYnN0cmFjdCc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMuYmFja2dyb3VuZCA9IGF0dHJpYnV0ZXMuYmdjb2xvcnBpY2tlcjtcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5iZ2NzcyApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5iYWNrZ3JvdW5kID0gYXR0cmlidXRlcy5iZ2Nzcztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtYWJzdHJhY3QtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHN0eWxlPXsgeyBiYWNrZ3JvdW5kOiBhdHRyaWJ1dGVzLmJhY2tncm91bmQgfSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1iYWNrZHJvcC1wcmV2aWV3XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWFic3RyYWN0LXByb3BlciBoYXMtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYWJzdHJhY3QgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD48UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBhYnN0cmFjdCB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1idXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBidXR0b246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgYWJzdHJhY3QgcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiYWJzdHJhY3QtZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdBYnN0cmFjdCBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnYmFycycsICdkaXNjcycsICdsYXR0aWNlJywgJ2hvbmV5Y29tYicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdCYWNrZ3JvdW5kIENvbG9yJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImFic3RyYWN0LWJhY2tncm91bmRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PENvbG9yUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj17IGF0dHJpYnV0ZXMuYmdjb2xvcnBpY2tlciB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZUNvbXBsZXRlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgYmdjb2xvcnBpY2tlcjogdmFsdWUuaGV4IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlQWxwaGFcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkN1c3RvbSBCYWNrZ3JvdW5kIENTU1wiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJnY3NzOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJnY3NzIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgQ1NTIHZhbHVlIGZvciB0aGUgYmFja2dyb3VuZCBjb2xvciAob3ZlcnJpZGVzIHRoZSBjb2xvciBwaWNrZXIgc2V0dGluZykuXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkludmVydCBhY2Nlc3NpYmlsaXR5IGNvbnRyb2xzXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiVXNlIHdoaXRlIGZvcmVncm91bmQgb24gZGFyayBiYWNrZ3JvdW5kLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaW52ZXJ0X2ExMXkgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBpbnZlcnRfYTExeTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLCAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYm94b3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYm94b3V0LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1ib3hvdXQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYm94b3V0Jywge1xuXG5cdHRpdGxlOiBfXyggJ0JveG91dCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYm94b3V0cyB0byBjb250YWluIHRleHQgdGhhdCBpcyBhbmNpbGxhcnkgdG8gdGhlIHBhZ2XigJlzIGNvbnRlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnU2lkZSBub3RlJyApLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdCb3hvdXQgY29udGVudCBzdXBwb3J0cyB0aGUgcmVzdCBvZiB0aGUgcGFnZeKAmXMgbWVzc2FnZSB3aXRob3V0IGJlaW5nIGRpcmVjdGx5IHJlbGF0ZWQuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcywgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J2NvcmUvY29sdW1ucycsXG5cdCd1cmktY2wvYnV0dG9uJyxcblx0J3VyaS1jbC9ib3hvdXQnLFxuXHQndXJpLWNsL2NhcmQnLFxuXHQndXJpLWNsL2RhdGUnLFxuXHQndXJpLWNsL2hlcm8nLFxuXHQndXJpLWNsL21ldHJpYycsXG5cdCd1cmktY2wvcXVvdGUnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJyZWFrb3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnJlYWtvdXQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJyZWFrb3V0Jztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnVzZV9jb250ZW50X3dpZHRoICkge1xuXHRcdGNsYXNzZXMgKz0gJyB1c2UtY29udGVudC13aWR0aCc7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9icmVha291dCcsIHtcblxuXHR0aXRsZTogX18oICdCcmVha291dCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYnJlYWtvdXRzIHRvIGNyZWF0ZSB2aXN1YWxseSBkaXN0aW5jdCBzZWN0aW9ucyBvciBmdWxsLXdpZHRoIGxheW91dHMuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdCcmVha291dHMgY29udGVudCBjYW4gYmUgdGhlIHNhbWUgd2lkdGggYXMgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgY29udGVudCwgb3IgaXQgY2FuIGV4cGFuZCBiZXlvbmQgaXQuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR1c2VfY29udGVudF93aWR0aDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoIHRydWUgPT09IGF0dHJpYnV0ZXMudXNlX2NvbnRlbnRfd2lkdGggKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIGNvbnRlbnQgd2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnVzZV9jb250ZW50X3dpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdXNlX2NvbnRlbnRfd2lkdGg6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnV0dG9uLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1idXR0b24nO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYnV0dG9uJywge1xuXG5cdHRpdGxlOiBfXyggJ0J1dHRvbicgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYnV0dG9ucyB0byBhdHRyYWN0IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBjYWxsIHRvIGFjdGlvbiBvbiBhIHBhZ2UuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGV4dDogX18oICdFeHBsb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IG1ldGE7XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWJ1dHRvbi1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWxpZ25tZW50OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJidXR0b24tc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3Byb21pbmVudCcsICdkaXNhYmxlZCcgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2NhcmQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWNhcmQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2NhcmQnLCB7XG5cblx0dGl0bGU6IF9fKCAnQ2FyZCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgY2FyZHMgdG8gZXhwbGFpbiBhbmQgbGluayB0byBhIHNpbmdsZSBpZGVhLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ09uZSBpZGVhJyApLFxuXHRcdFx0Ym9keTogX18oICdTaW5jZSB0aGUgZW50aXJlIGNhcmQgbXVzdCBiZSBhIHNpbmdsZSBsaW5rLCBpdOKAmXMgcGVyZmVjdCBmb3IgbGlua2luZyB0byBicm9hZCB0b3BpY3Mgd2hlcmUgeW91IG5lZWQgbW9yZSB3b3JkcyBvciBhIHBob3RvIHRvIGRlc2NyaWJlIHRoZSBsaW5rZWQgcmVzb3VyY2UuJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGJ1dHRvbjogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWNhcmQtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1jYXJkLWNvbnRhaW5lciBtZWRpYVwiPlxuXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIHRleHRcIj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYm9keTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgY2FyZCB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIGJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxuXHREYXRlUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9kYXRlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJkYXRlXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtZGF0ZSc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5jb2xvciApIHtcblx0XHRjbGFzc2VzICs9ICcgY2wtZGF0ZS0nICsgYXR0cmlidXRlcy5jb2xvcjtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvZGF0ZScsIHtcblxuXHR0aXRsZTogX18oICdEYXRlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBkYXRlcyB0byBkaXNwbGF5IGEgZG93bmxvYWRhYmxlIGNhbGVuZGFyIGV2ZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGRhdGU6IF9fKCAnSnVseSAyOCwgMjA2MScgKSxcblx0XHRcdGNhcHRpb246IF9fKCAnSGFsbGV54oCZcyBDb21ldCByZWFjaGVzIHBlcmloZWxpb24nICksXG5cdFx0fSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0ZGF0ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHNob3dfeWVhcjoge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5kYXRlICkge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGRhdGU6IG5ldyBEYXRlKCkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoIGF0dHJpYnV0ZXMuZGF0ZSApO1xuXG5cdFx0XHRsZXQgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCAnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9ICk7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc2hvd195ZWFyICkge1xuXHRcdFx0XHRtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoICdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JyB9ICkgKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgZXhwaXJhdGlvbk1lc3NhZ2UgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5kYXRlICYmIGRhdGUuZ2V0VGltZSgpIDw9IHRvZGF5LmdldFRpbWUoKSApIHtcblx0XHRcdFx0ZXhwaXJhdGlvbk1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImNsLWNvbXBvbmVudC1tZXNzYWdlXCI+VGhpcyBkYXRlIG1heSBubyBsb25nZXIgYmUgcmVsZXZhbnQuPC9kaXY+O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHsgZXhwaXJhdGlvbk1lc3NhZ2UgfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1tb250aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtb250aCB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWRheVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBkYXRlLmdldERhdGUoKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY2FwdGlvbi13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jYXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGRhdGUgY2FwdGlvbicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RhdGUgQ29sb3InICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiZGF0ZS1jb2xvclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnRGF0ZSBDb2xvcicgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdibHVlJywgJ3JlZCcsICdncmV5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdibHVlJyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuY29sb3IgKSA/ICcnIDogYXR0cmlidXRlcy5jb2xvcjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gY29sb3IgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY29sb3I6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZT17IGF0dHJpYnV0ZXMuZGF0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRhdGUgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgeWVhclwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd195ZWFyIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd195ZWFyOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9oZXJvLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCByYW5kb21JRCA9ICgpID0+IHtcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg2MDg1My9nZW5lcmF0ZS1yYW5kb20tc3RyaW5nLWZvci1kaXYtaWRcblx0Y29uc3QgUzQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICggKCAoIDEgKyBNYXRoLnJhbmRvbSgpICkgKiAweDEwMDAwICkgfCAwICkudG9TdHJpbmcoIDE2ICkuc3Vic3RyaW5nKCAxICk7XG5cdH07XG5cdHJldHVybiAoIFM0KCkgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArIFM0KCkgKyBTNCgpICk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9oZXJvJywge1xuXG5cdHRpdGxlOiBfXyggJ0hlcm8nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGhlcm9lcyB0byBlbmdhZ2Ugd2l0aCB0aGUgdmlzaXRvciBhbmQgY3JlYXRlIHRoZSBzZW5zZSBvZiBkZXNpcmUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aGVhZGxpbmU6IF9fKCAnQXNwaXJhdGlvbmFsJyApLFxuXHRcdFx0c3ViaGVhZDogX18oICdIZXJvZXMgYWx3YXlzIGFyZS4nICksXG5cdFx0XHRidXR0b246IF9fKCAnQmUgb25lJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGZvcm1hdDogJ3N1cGVyJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aGVhZGxpbmU6IHsgLy8gRGVwcmljYXRlZCBpbiB2NS4xLCB1c2UgXCJ0aXRsZVwiIGluc3RlYWRcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3ViaGVhZDogeyAvLyBEZXByaWNhdGVkIGluIHY1LjEsIHVzZSBcImJvZHlcIiBpbnN0ZWFkXG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRtZWRpYUhlaWdodDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRtZWRpYVdpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHZpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHVzZV9jYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNyZWRpdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRwb3NpdGlvblg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0cG9zaXRpb25ZOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGludmVydF9hMTF5OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0bWVkaWFIZWlnaHQ6IG1lZGlhLmhlaWdodCxcblx0XHRcdFx0XHRcdFx0bWVkaWFXaWR0aDogbWVkaWEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvblk6IDAuNSxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgaGVybyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5pZCApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5pZCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBhdHRyaWJ1dGVzLnRpdGxlICYmICEhIGF0dHJpYnV0ZXMuaGVhZGxpbmUgKSB7IC8vIFwiaGVhZGxpbmVcIiBkZXByaWNhdGVkIGluIHY1LjEsIHVzZSBcInRpdGxlXCIgaW5zdGVhZFxuXHRcdFx0XHRhdHRyaWJ1dGVzLnRpdGxlID0gYXR0cmlidXRlcy5oZWFkbGluZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMuYm9keSAmJiAhISBhdHRyaWJ1dGVzLnN1YmhlYWQgKSB7IC8vIFwic3ViaGVhZFwiIGRlcHJpY2F0ZWQgaW4gdjUuMSwgdXNlIFwiYm9keVwiIGluc3RlYWRcblx0XHRcdFx0YXR0cmlidXRlcy5ib2R5ID0gYXR0cmlidXRlcy5zdWJoZWFkO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1oZXJvJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMubGluayApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIGhhcy1saW5rJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1saW5rJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5ib2R5IHx8ICEhIGF0dHJpYnV0ZXMuc3ViaGVhZCApIHsgLy8gXCJzdWJoZWFkXCIgZGVwcmljYXRlZCBpbiB2NS4xLCB1c2UgXCJib2R5XCIgaW5zdGVhZFxuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLXN1YmhlYWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLXN1YmhlYWQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHN0eWxlID0ge307XG5cdFx0XHRsZXQgcG9zdGVyID0gJ3Bvc3Rlcic7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0XHRcdFx0cG9zdGVyID0gJ3N0aWxsJztcblx0XHRcdFx0c3R5bGUgPSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgJHsgYXR0cmlidXRlcy5wb3NpdGlvblggKiAxMDAgfSUgJHsgYXR0cmlidXRlcy5wb3NpdGlvblkgKiAxMDAgfSVgLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgkeyBhdHRyaWJ1dGVzLmltZyB9KWAsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1oZXJvLXByb3BlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHBvc3RlciB9IHN0eWxlPXsgc3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tdGV4dCBvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGhlcm8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWJoZWFkXCI+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyBzdWJ0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3ViaGVhZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUhlaWdodDogbWVkaWEuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWTogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJoZXJvLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnSGVybyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdmdWxsd2lkdGgnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8Rm9jYWxQb2ludFBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdHVybD17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zPXsgeyB3aWR0aDogYXR0cmlidXRlcy5tZWRpYVdpZHRoLCBoZWlnaHQ6IGF0dHJpYnV0ZXMubWVkaWFIZWlnaHQgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB7IHg6IGF0dHJpYnV0ZXMucG9zaXRpb25YLCB5OiBhdHRyaWJ1dGVzLnBvc2l0aW9uWSB9IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZm9jYWxQb2ludCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcG9zaXRpb25YOiAoIGZvY2FsUG9pbnQueCAqIDEgKSwgcG9zaXRpb25ZOiAoIGZvY2FsUG9pbnQueSAqIDEgKSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZpZGVvIFVSTFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHZpZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52aWQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiRm9yIGNyZWF0aW5nIGEgdmlkZW8gaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIFdvcmRQcmVzcyBjYXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0dGluZyBhIGN1c3RvbSBjYXB0aW9uIGJlbG93IHdpbGwgb3ZlcnJpZGUgYW55IFdvcmRQcmVzcyBjYXB0aW9uLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMudXNlX2NhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB1c2VfY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgY2FwdGlvbiBmb3IgdGhlIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDcmVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjcmVkaXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY3JlZGl0IH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNwZWNpZnkgY3JlZGl0IGZvciB0aGUgaGVybyBtZWRpYS5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFJhbmdlQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbWVudS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtbWVudSc7XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5sZXQgbWVudU5hbWVzID0gZmFsc2U7XG5cbmNvbnN0IGdldE1lbnVOYW1lcyA9ICgpID0+IHtcblx0Y29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcblx0XHRpZiAoIHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSApIHtcblx0XHRcdGlmICggMjAwID09PSB4bWxodHRwLnN0YXR1cyApIHtcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSggeG1saHR0cC5yZXNwb25zZVRleHQgKTtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IFtdO1xuXHRcdFx0XHRmb3IgKCBjb25zdCBtIG9mIHBhcnNlZCApIHtcblx0XHRcdFx0XHRsaXN0LnB1c2goIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBtLm5hbWUsXG5cdFx0XHRcdFx0XHR2YWx1ZTogbS5uYW1lLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtZW51TmFtZXMgPSBsaXN0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHR4bWxodHRwLm9wZW4oICdHRVQnLCBVUklfQ0xfU0lURV9VUkwgKyAnL3dwLWpzb24vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3YxL21lbnVzJywgdHJ1ZSApO1xuXHR4bWxodHRwLnNlbmQoKTtcbn07XG5cbmdldE1lbnVOYW1lcygpO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9tZW51Jywge1xuXG5cdHRpdGxlOiBfXyggJ01lbnUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG1lbnVzIHdoZW4gdGhlIHNhbWUgY29sbGVjdGlvbiBvZiBsaW5rcyBtdXN0IGFwcGVhciBvbiBtdWx0aXBsZSBwYWdlcy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRuYW1lOiAnbWVudTEnLFxuXHRcdFx0dGl0bGU6IF9fKCAnTWFpbiBNZW51JyApLFxuXHRcdFx0c2hvd3RpdGxlOiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGRlcHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0XHRzaG93dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYnV0dG9uIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0bGV0IG5hbWUgPSAnJztcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLm5hbWUgKSB7XG5cdFx0XHRcdG5hbWUgPSAnOiAnICsgYXR0cmlidXRlcy5uYW1lO1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMubmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRpdGxlICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0aXRsZU1ldGEgPSAnJztcblx0XHRcdGlmICggYXR0cmlidXRlcy5zaG93dGl0bGUgKSB7XG5cdFx0XHRcdHRpdGxlTWV0YSA9IDxzcGFuIGNsYXNzTmFtZT1cImNsLW1lbnUtdG9nZ2xlXCI+eyB0aXRsZSB9PC9zcGFuPjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWVudS1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHR7IHRpdGxlTWV0YSB9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLW1lbnUtcGxhY2Vob2xkZXJcIj5NZW51IHBsYWNlaG9sZGVyeyBuYW1lIH08L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgaW5zcGVjdG9yQ29udHJvbHMgPSAoXG5cdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17IHsgcGFkZGluZ1JpZ2h0OiAnN3B4JyB9IH0+PERhc2hpY29uIGljb249XCJ3YXJuaW5nXCIgLz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlRoaXMgc2l0ZSBoYXMgbm8gbWVudXMuICBDcmVhdGUgb25lIHVuZGVyIHRoZSBBcHBlYXJhbmNlIHRhYi48L2Rpdj5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdCk7XG5cblx0XHRpZiAoICEhIG1lbnVOYW1lcyApIHtcblx0XHRcdGluc3BlY3RvckNvbnRyb2xzID0gKFxuXHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWVudScgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmFtZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgbmFtZSB9ICkgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1lbnVOYW1lcyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnSWYgbm8gdGl0bGUgaXMgcHJvdmlkZWQsIHRoZSBtZW51IG5hbWUgd2lsbCBiZSB1c2VkLicgKSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyB0aXRsZSBvbiBkZXNrdG9wJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVGl0bGVzIGFyZSBhbHdheXMgc2hvd24gb24gbW9iaWxlLicgKSB9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnNob3d0aXRsZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93dGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdEZXB0aCcgKSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDIgfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRlcHRoICkgPT4gc2V0QXR0cmlidXRlcyggeyBkZXB0aCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVwdGggfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0eyBpbnNwZWN0b3JDb250cm9scyB9XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9tZXRyaWMuc3ZnJyApIH1cblx0XHRcdGFsdD1cIm1ldHJpY1wiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLW1ldHJpYyc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL21ldHJpYycsIHtcblxuXHR0aXRsZTogX18oICdNZXRyaWMnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG1ldHJpY3MgdG8gaWxsdXN0cmF0ZSBhIGZhY3QgdGhhdCBpcyBjb25jaXNlIGFuZCBlYXN5IHRvIGNvbnN1bWUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bWV0cmljOiBfXyggJzQwSycgKSxcblx0XHRcdGNhcHRpb246IF9fKCAnTGVhZ3VlcyB1bmRlciB0aGUgc2VhJyApLFxuXHRcdFx0c3R5bGU6ICdkYXJrJyxcblx0XHR9LFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bWV0cmljOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWV0cmljLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBtZXRyaWM6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1ldHJpYyB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICcxMDAlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHRhZ25hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnbWV0cmljcyBvbiB0aGlzIHBhZ2UnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHQvLyBAdG9kbzogdGVjaG5pY2FsbHksIHlvdSBjYW4gaGF2ZSBhIGNsZWFyIGFuZCBkYXJrIG1ldHJpY1xuXHRcdC8vIG91ciBidXR0b25ncm91cCBvbmx5IGFsbG93cyB1c2VycyB0byBzZWxlY3Qgb25lXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0cmljIFN0eWxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cIm1ldHJpYy1zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnTWV0cmljIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ3N0YW5kYXJkJywgJ2NsZWFyJywgJ2RhcmsnLCAnb3ZlcmxheScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcblx0RGF0ZVBpY2tlcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5dO1xuXG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBub3RpY2UgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9ub3RpY2Uuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL25vdGljZScsIHtcblx0dGl0bGU6IF9fKCAnTm90aWNlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBub3RpY2VzIHRvIGRpc3BsYXkgY29udGVudCB0aGF0IGlzIHBhcnRpY3VsYXJseSB1cmdlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnUGxlYXNlIE5vdGUnICksXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ05vdGljZXMgYXJlIG1lYW50IHRvIGJlIHRlbXBvcmFyeSBhbmQgdGltZWx5IGFuZCBzaG91bGQgb25seSBiZSB1c2VkIHRvIGNvbW11bmljYXRlIGFuIGV4Y2VwdGlvbmFsIGNvbmRpdGlvbi4nICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdGV4cGlyYXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c2hvd19leHBpcmVkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdGRpc21pc3NpYmxlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1ub3RpY2UnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IGV4cCA9IG5ldyBEYXRlKCBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gKTtcblx0XHRcdGxldCBleHBpcmF0aW9uTWVzc2FnZSA9ICcnO1xuXHRcdFx0bGV0IHN5bnRheCA9ICdhbmQgd2lsbCBub3QnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnNob3dfZXhwaXJlZCApIHtcblx0XHRcdFx0c3ludGF4ID0gJ2J1dCB3aWxsIHN0aWxsJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5leHBpcmF0aW9uICYmIGV4cC5nZXRUaW1lKCkgPD0gZGF0ZS5nZXRUaW1lKCkgKSB7XG5cdFx0XHRcdGV4cGlyYXRpb25NZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJjbC1jb21wb25lbnQtbWVzc2FnZVwiPlRoaXMgbm90aWNlIGhhcyBleHBpcmVkIHsgc3ludGF4IH0gYmUgdmlzaWJsZSB3aGVuIHB1Ymxpc2hlZC48L2Rpdj47XG5cdFx0XHR9XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHR7IGV4cGlyYXRpb25NZXNzYWdlIH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBub3RpY2UgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibm90aWNlLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICd1cmdlbnQnLCAnY292aWQxOScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQWxsb3cgdmlzaXRvcnMgdG8gZGlzbWlzcyB0aGlzIG5vdGljZVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuZGlzbWlzc2libGUgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBkaXNtaXNzaWJsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8RGF0ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRXhwaXJhdGlvbiBkYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZT17IGF0dHJpYnV0ZXMuZXhwaXJhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGV4cGlyYXRpb246IGRhdGUgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgYWZ0ZXIgZXhwaXJlZFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd19leHBpcmVkIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd19leHBpcmVkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdEJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9oZWFkaW5nJywgeyBsZXZlbDogMSwgcGxhY2Vob2xkZXI6ICdNeSBQYW5lbCcgfSBdLFxuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5cdFsgJ3VyaS1jbC9idXR0b24nLCB7fSBdLFxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3BhbmVsLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICggJ3N1cGVyJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICdjbC1wYW5lbC1zdXBlcicgOiAnY2wtcGFuZWwnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnJldmVyc2UgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHJldmVyc2UnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcGFuZWwnLCB7XG5cblx0dGl0bGU6IF9fKCAnUGFuZWwnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHBhbmVscyB0byBwcm92aWRlIGEgZGVlcCwgdmlzdWFsIGNvbnRleHQgZm9yIGEgcGFydGljdWxhciB0b3BpYy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdBIEJpdCBNb3JlJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdHJldmVyc2U6IHRydWUsXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9oZWFkaW5nJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0bGV2ZWw6IDIsXG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnT3B0aW9ucycgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ0EgcGFuZWwgaXMgZGlmZmVyZW50IGZyb20gYSBjYXJkIGluIHRoYXQgYSBwYW5lbCBtYXkgaW5jbHVkZSA8YSBocmVmPVwiI1wiPm11bHRpcGxlIGxpbmtzPC9hPiBvciBidXR0b25zLicgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHRleHQ6IF9fKCAnTGVhcm4gTW9yZScgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cmV2ZXJzZToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGNvbnRlbnRXcmFwcGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCB8fCBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMgKTtcblxuXHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGlmICggJ3N1cGVyJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWJsdXJcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1pbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvc3RlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgc3VwZXIgcGFuZWwgcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicGFuZWwtZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQYW5lbCBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdzdXBlcicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGbGlwIHBhbmVsIGxheW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMucmV2ZXJzZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHJldmVyc2U6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0QnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0Rm9jYWxQb2ludFBpY2tlcixcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcHJvbW8uc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3Byb21vJywge1xuXG5cdHRpdGxlOiBfXyggJ1Byb21vJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBwcm9tb3MgdG8gc2hvd2Nhc2UgdGltZWx5IG1hcmtldGluZyBpbmZvcm1hdGlvbi4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdUaXRsZScgKSxcblx0XHRcdGJvZHk6IF9fKCAnU29tZSBib2R5IHRleHQnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbmt0ZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBwcm9tbyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1wcm9tbyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ21pY3JvJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBtaWNybyc7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1wcm9tby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1taWNyby1jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1taWNyby10ZXh0LWxpbmtcIj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGlua3RleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rdGV4dCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBsaW5rIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+eyBtZXRhIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzdHlsZSA9ICdzdHlsZS1ibHVyJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSAmJiAnZGVmYXVsdCcgIT09IGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdHN0eWxlID0gJ3N0eWxlLScgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGUgPSAnY2wtcHJvbW8tYmFja2Ryb3AgJyArIHN0eWxlO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1wcm9tby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWJhY2tkcm9wLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBzdHlsZSB9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PHA+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLXRleHQtbGlua1wiPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmt0ZXh0IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGxpbmsgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWctd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nXCI+PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nLWxpbmtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLWJsb2NrLWVkaXRvci1tZXRhXCI+eyBtZXRhIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IHN0eWxlQ29udHJvbDtcblx0XHRpZiAoICdtaWNybycgIT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0c3R5bGVDb250cm9sID0gKFxuXHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UsIHByb21vIHByZXZpZXdzIHdpbGwgYXBwZWFyIHNpbXBsaWZpZWQgaW4gdGhlIGVkaXRvciB3aW5kb3cuJyApIH1cblx0XHRcdFx0XHRcdGlkPVwicHJvbW8tc3R5bGVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQcm9tbyBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnYnJhbmQnLCAnY29uZmV0dGknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdGb3JtYXQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvbW8tZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQcm9tbyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdtaWNybycgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHR7IHN0eWxlQ29udHJvbCB9XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdEJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcXVvdGUuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLXF1b3RlJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3F1b3RlJywge1xuXG5cdHRpdGxlOiBfXyggJ1F1b3RlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBxdW90ZXMgdG8gY3JlYXRlIGEgYmxvY2txdW90ZSBlbGVtZW50IHRoYXQgc3RhbmRzIG91dCBmcm9tIHRoZSBwYWdlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHF1b3RlOiBfXyggJ09jZWFuLCB3aG8gaXMgdGhlIHNvdXJjZSBvZiBhbGwuJyApLFxuXHRcdFx0Y2l0YXRpb246IF9fKCAnSG9tZXInICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZV9zcXVhcmUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRxdW90ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjaXRhdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGltYWdlQ2xhc3MgPSAoICEhIGF0dHJpYnV0ZXMubWVkaWFJRCApID8gJ2NsLXF1b3RlLWltYWdlJyA6ICcnO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBpbWFnZUNsYXNzIH0+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxibG9ja3F1b3RlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHF1b3RlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5xdW90ZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaGUgcXVvdGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvYmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdDxjaXRlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNpdGF0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jaXRhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdBbm9ueW1vdXMnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvY2l0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQndXJpLWNsL3RhYicsXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFicy5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtdGFicyc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxuY29uc3QgZ2V0VGFic1RlbXBsYXRlID0gKCB0YWJzICkgPT4ge1xuXHRyZXR1cm4gWyAuLi5BcnJheSggdGFicyApIF0ubWFwKCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gWyAndXJpLWNsL3RhYicsIHt9IF07XG5cdH0gKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3RhYnMnLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFicycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgdGFicyB0byBkaXNwbGF5IGNvbnRlbnQgdGhhdCBoYXMgYSBjb3JyZWxhdGlvbiBidXQgaXMgbm90IGRpcmVjdGx5IHJlbGF0ZWQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGFiczogMixcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICd1cmktY2wvdGFiJyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdHRpdGxlOiAnQXBwbGVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ0VhY2ggdGFiIGNhbiBjb250YWluIHBhcmFncmFwaHMsIGxpbmtzLCBhbmQgb3RoZXIgY29tcG9uZW50cy4nICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBfXyggJ01vcmUgYWJvdXQgZnJ1aXQnICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAndXJpLWNsL3RhYicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHR0aXRsZTogJ09yYW5nZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF9fKCAnVGhpcyB0YWIgd2lsbCBoYXZlIGRpZmZlcmVudCBpbmZvcm1hdGlvbiB0aGFuIHRoZSBmaXJzdCB0YWIsIGJ1dCB0aGUgaW5mb3JtYXRpb24gc2hvdWxkIGNvcnJlbGF0ZSBzb21laG93LicgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ09ubHkgb25lIHRhYiB3aWxsIGJlIHZpc2libGUgYXQgYSB0aW1lIG9uIHRoZSBsaXZlIHBhZ2UuJyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0YWJzOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDIsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RhYnMnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50YWJzIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dFRhYnMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhYnM6IG5leHRUYWJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17IDYgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBnZXRUYWJzVGVtcGxhdGUoIGF0dHJpYnV0ZXMudGFicyApIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPVwiYWxsXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5cdCd1cmktY2wvY2FyZCcsXG5cdCd1cmktY2wvbWV0cmljJyxcblx0J3VyaS1jbC9xdW90ZScsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgdGFiIGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFiLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC90YWInLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFiJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRwYXJlbnQ6IFsgJ3VyaS1jbC90YWJzJyBdLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRpbnNlcnRlcjogZmFsc2UsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXRhYlwiPlxuXHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RhYiBUaXRsZScgKSB9XG5cdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0dGVtcGxhdGVMb2NrPXsgZmFsc2UgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLCAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciB0b29sdGlwIGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdG9vbHRpcC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtdG9vbHRpcCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvdG9vbHRpcCcsIHtcblxuXHR0aXRsZTogX18oICdUb29sdGlwJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSB0b29sdGlwcyB0byBwcm92aWRlIG5vdGVzIGFuZCBkaXJlY3Rpb24gd2hpbGUgYnVpbGRpbmcgYSBzaXRlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ1Rvb2x0aXAnICksXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ1Rvb2x0aXBzIHByb3ZpZGUgaGVscGZ1bCBkaXJlY3Rpb24uJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgyPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaXA6JyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2gyPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hYnN0cmFjdC9ibG9jayc7XG5pbXBvcnQgJy4vYm94b3V0L2Jsb2NrJztcbmltcG9ydCAnLi9icmVha291dC9ibG9jayc7XG5pbXBvcnQgJy4vYnV0dG9uL2Jsb2NrJztcbmltcG9ydCAnLi9jYXJkL2Jsb2NrJztcbmltcG9ydCAnLi9kYXRlL2Jsb2NrJztcbmltcG9ydCAnLi9oZXJvL2Jsb2NrJztcbmltcG9ydCAnLi9tZW51L2Jsb2NrJztcbmltcG9ydCAnLi9tZXRyaWMvYmxvY2snO1xuaW1wb3J0ICcuL25vdGljZS9ibG9jayc7XG5pbXBvcnQgJy4vcGFuZWwvYmxvY2snO1xuaW1wb3J0ICcuL3Byb21vL2Jsb2NrJztcbmltcG9ydCAnLi9xdW90ZS9ibG9jayc7XG5pbXBvcnQgJy4vdGFicy90YWInO1xuaW1wb3J0ICcuL3RhYnMvYmxvY2snO1xuaW1wb3J0ICcuL3Rvb2x0aXAvYmxvY2snOyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3dwJGNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiRGFzaGljb24iLCJCdXR0b24iLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsIlRvb2xiYXIiLCJUb29sYmFyQnV0dG9uIiwid2l0aE5vdGljZXMiLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uR3JvdXAiLCJGb2NhbFBvaW50UGlja2VyIiwiVG9nZ2xlQ29udHJvbCIsIkNvbG9yUGlja2VyIiwiX3dwJGJsb2NrRWRpdG9yIiwiYmxvY2tFZGl0b3IiLCJCbG9ja0NvbnRyb2xzIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0FsaWdubWVudFRvb2xiYXIiLCJNZWRpYVBsYWNlaG9sZGVyIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIlJpY2hUZXh0IiwiUGxhaW5UZXh0IiwiVVJMSW5wdXQiLCJBTExPV0VEX01FRElBX1RZUEVTIiwiY3VzdG9tSWNvbiIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJzcmMiLCJVUklfQ0xfVVJMIiwiYWx0IiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGUiLCJhdHRyaWJ1dGVzIiwiYm9keSIsImJ1dHRvbiIsIm1lZGlhSUQiLCJpbWciLCJ0eXBlIiwibGluayIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmdjb2xvcnBpY2tlciIsImJnY3NzIiwic3R5bGUiLCJpbnZlcnRfYTExeSIsImVkaXQiLCJfcmVmIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsImxhYmVscyIsImluc3RydWN0aW9ucyIsIm9uU2VsZWN0IiwibWVkaWEiLCJ1cmwiLCJpZCIsImFjY2VwdCIsImFsbG93ZWRUeXBlcyIsIm1ldGEiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY29udGVudCIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29udGVudEVkaXRGb3JtIiwiY2xhc3NlcyIsInJlbmRlciIsIl9yZWYyIiwib3BlbiIsImtlZXBQbGFjZWhvbGRlck9uRm9jdXMiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwia2V5IiwibGFiZWwiLCJfcmVmMyIsIm9uQ2xpY2siLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsImhlbHAiLCJtYXAiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImZvcm1hdCIsInVuZGVmaW5lZCIsInNlbGVjdGVkIiwiaXNTZWNvbmRhcnkiLCJpc1ByaW1hcnkiLCJjb2xvciIsIm9uQ2hhbmdlQ29tcGxldGUiLCJoZXgiLCJkaXNhYmxlQWxwaGEiLCJjaGVja2VkIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwiZHJvcENhcCIsImNsYXNzTmFtZXMiLCJmbG9hdCIsImlubmVyQmxvY2tzIiwibmFtZSIsInRleHQiLCJjb250ZW50V3JhcHBlciIsImFsbG93ZWRCbG9ja3MiLCJ0ZW1wbGF0ZSIsInNhdmUiLCJDb250ZW50IiwidXNlX2NvbnRlbnRfd2lkdGgiLCJhbGlnbm1lbnQiLCJ0b29sdGlwIiwidGFnbmFtZSIsIkRhdGVQaWNrZXIiLCJkYXRlIiwiY2FwdGlvbiIsInNob3dfeWVhciIsIkRhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImV4cGlyYXRpb25NZXNzYWdlIiwiZ2V0VGltZSIsImdldERhdGUiLCJjdXJyZW50RGF0ZSIsInJhbmRvbUlEIiwiUzQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJoZWFkbGluZSIsInN1YmhlYWQiLCJtZWRpYUhlaWdodCIsIm1lZGlhV2lkdGgiLCJ2aWQiLCJ1c2VfY2FwdGlvbiIsImNyZWRpdCIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInBvc3RlciIsImJhY2tncm91bmRQb3NpdGlvbiIsImNvbmNhdCIsImJhY2tncm91bmRJbWFnZSIsImRpbWVuc2lvbnMiLCJ4IiwieSIsImZvY2FsUG9pbnQiLCJSYW5nZUNvbnRyb2wiLCJTZWxlY3RDb250cm9sIiwibWVudU5hbWVzIiwiZ2V0TWVudU5hbWVzIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJsaXN0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm0iLCJwdXNoIiwiZXJyIiwiZSIsImYiLCJVUklfQ0xfU0lURV9VUkwiLCJzZW5kIiwic2hvd3RpdGxlIiwiZGVwdGgiLCJ0aXRsZU1ldGEiLCJpbnNwZWN0b3JDb250cm9scyIsInBhZGRpbmdSaWdodCIsIm9wdGlvbnMiLCJtYXgiLCJtaW4iLCJtZXRyaWMiLCJleHBpcmF0aW9uIiwic2hvd19leHBpcmVkIiwiZGlzbWlzc2libGUiLCJleHAiLCJzeW50YXgiLCJsZXZlbCIsInJldmVyc2UiLCJfcmVmNCIsIl9yZWY1IiwibGlua3RleHQiLCJzdHlsZUNvbnRyb2wiLCJxdW90ZSIsImNpdGF0aW9uIiwiaW1hZ2VDbGFzcyIsImdldFRhYnNUZW1wbGF0ZSIsInRhYnMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm5leHRUYWJzIiwidGVtcGxhdGVMb2NrIiwicGFyZW50Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=