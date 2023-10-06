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
      })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
        label: "Invert accessibility controls",
        help: "Use white foreground on dark background. Only applies to video heroes.",
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















}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDRjtBQUNFO0FBQ0Y7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYWJzdHJhY3QvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9ib3hvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9icmVha291dC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2J1dHRvbi9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2NhcmQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9kYXRlL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvaGVyby9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL21lbnUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9tZXRyaWMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9ub3RpY2UvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9wYW5lbC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3Byb21vL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvcXVvdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy90YWJzL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvdGFicy90YWIuanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYmxvY2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxuXHRDb2xvclBpY2tlcixcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYWJzdHJhY3Quc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2Fic3RyYWN0Jywge1xuXG5cdHRpdGxlOiBfXyggJ0Fic3RyYWN0JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBhYnN0cmFjdHMgdG8gaW50cm9kdWNlIGNvbnRlbnQgaW4gYSB2aXN1YWwgbWFubm9yLCBlc3BlY2lhbGx5IHdoZW4gc3VpdGFibGUgcGhvdG9ncmFwaHkgaXMgbm90IGF2YWlsYWJsZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdBIGdyYW5kIHZpc2lvbicgKSxcblx0XHRcdGJvZHk6IF9fKCAnU2V0IHRoZSBncm91bmR3b3JrIGZvciB0aGUgc3RvcnksIGFuZCBlbnRpY2UgcmVhZGVycyB0byBleHBsb3JlIGZ1bGx5LicgKSxcblx0XHRcdGJ1dHRvbjogX18oICdDb250aW51ZScgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlLmpwZycsXG5cdFx0fSxcblx0fSxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdC8vIHRoZSBtZWRpYUhlaWdodCBhbmQgbWVkaWFXaWR0aCBhcmUgZm9yIHRoZSBmb2NhbCBwb2ludCBwaWNrZXIgY29tcG9uZW50XG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICcjMDAyMTQ3Jyxcblx0XHR9LFxuXHRcdGJnY29sb3JwaWNrZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJyMxYjVkYTknLFxuXHRcdH0sXG5cdFx0Ymdjc3M6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ2JhcnMnLFxuXHRcdH0sXG5cdFx0aW52ZXJ0X2ExMXk6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYWJzdHJhY3QgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSAnY2wtYWJzdHJhY3QnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXG5cdFx0XHRhdHRyaWJ1dGVzLmJhY2tncm91bmQgPSBhdHRyaWJ1dGVzLmJnY29sb3JwaWNrZXI7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuYmdjc3MgKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuYmFja2dyb3VuZCA9IGF0dHJpYnV0ZXMuYmdjc3M7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWFic3RyYWN0LWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSBzdHlsZT17IHsgYmFja2dyb3VuZDogYXR0cmlidXRlcy5iYWNrZ3JvdW5kIH0gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtYmFja2Ryb3AtcHJldmlld1wiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1wcm9wZXIgaGFzLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWFic3RyYWN0LWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGFic3RyYWN0IHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYWJzdHJhY3QgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYnV0dG9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UsIGFic3RyYWN0IHByZXZpZXdzIHdpbGwgYXBwZWFyIHNpbXBsaWZpZWQgaW4gdGhlIGVkaXRvciB3aW5kb3cuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImFic3RyYWN0LWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnQWJzdHJhY3QgRm9ybWF0JyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2JhcnMnLCAnZGlzY3MnLCAnbGF0dGljZScsICdob25leWNvbWInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQmFja2dyb3VuZCBDb2xvcicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJhYnN0cmFjdC1iYWNrZ3JvdW5kXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9eyBhdHRyaWJ1dGVzLmJnY29sb3JwaWNrZXIgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VDb21wbGV0ZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJnY29sb3JwaWNrZXI6IHZhbHVlLmhleCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZUFscGhhXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDdXN0b20gQmFja2dyb3VuZCBDU1NcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBiZ2NzczogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5iZ2NzcyB9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNldCBhIENTUyB2YWx1ZSBmb3IgdGhlIGJhY2tncm91bmQgY29sb3IgKG92ZXJyaWRlcyB0aGUgY29sb3IgcGlja2VyIHNldHRpbmcpLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJJbnZlcnQgYWNjZXNzaWJpbGl0eSBjb250cm9sc1wiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlVzZSB3aGl0ZSBmb3JlZ3JvdW5kIG9uIGRhcmsgYmFja2dyb3VuZC5cIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmludmVydF9hMTF5IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgaW52ZXJ0X2ExMXk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcywgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJveG91dCBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2JveG91dC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtYm94b3V0Jztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2JveG91dCcsIHtcblxuXHR0aXRsZTogX18oICdCb3hvdXQnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGJveG91dHMgdG8gY29udGFpbiB0ZXh0IHRoYXQgaXMgYW5jaWxsYXJ5IHRvIHRoZSBwYWdl4oCZcyBjb250ZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ1NpZGUgbm90ZScgKSxcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbIHtcblx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnQm94b3V0IGNvbnRlbnQgc3VwcG9ydHMgdGhlIHJlc3Qgb2YgdGhlIHBhZ2XigJlzIG1lc3NhZ2Ugd2l0aG91dCBiZWluZyBkaXJlY3RseSByZWxhdGVkLicgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHRleHQ6IF9fKCAnTGVhcm4gTW9yZScgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50V3JhcHBlcjogJycgfSApO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFVcGxvYWQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaW1hZ2UnLFxuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCdjb3JlL2NvbHVtbnMnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5cdCd1cmktY2wvYm94b3V0Jyxcblx0J3VyaS1jbC9jYXJkJyxcblx0J3VyaS1jbC9kYXRlJyxcblx0J3VyaS1jbC9oZXJvJyxcblx0J3VyaS1jbC9tZXRyaWMnLFxuXHQndXJpLWNsL3F1b3RlJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBicmVha291dCBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2JyZWFrb3V0LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1icmVha291dCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy51c2VfY29udGVudF93aWR0aCApIHtcblx0XHRjbGFzc2VzICs9ICcgdXNlLWNvbnRlbnQtd2lkdGgnO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYnJlYWtvdXQnLCB7XG5cblx0dGl0bGU6IF9fKCAnQnJlYWtvdXQnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGJyZWFrb3V0cyB0byBjcmVhdGUgdmlzdWFsbHkgZGlzdGluY3Qgc2VjdGlvbnMgb3IgZnVsbC13aWR0aCBsYXlvdXRzLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGlubmVyQmxvY2tzOiBbIHtcblx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnQnJlYWtvdXRzIGNvbnRlbnQgY2FuIGJlIHRoZSBzYW1lIHdpZHRoIGFzIHRoZSByZXN0IG9mIHRoZSBwYWdlIGNvbnRlbnQsIG9yIGl0IGNhbiBleHBhbmQgYmV5b25kIGl0LicgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHRleHQ6IF9fKCAnTGVhcm4gTW9yZScgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dXNlX2NvbnRlbnRfd2lkdGg6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50V3JhcHBlcjogJycgfSApO1xuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0aWYgKCB0cnVlID09PSBhdHRyaWJ1dGVzLnVzZV9jb250ZW50X3dpZHRoICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlVzZSBjb250ZW50IHdpZHRoXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy51c2VfY29udGVudF93aWR0aCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHVzZV9jb250ZW50X3dpZHRoOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2J1dHRvbi5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtYnV0dG9uJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmFsaWdubWVudCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuYWxpZ25tZW50O1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2J1dHRvbicsIHtcblxuXHR0aXRsZTogX18oICdCdXR0b24nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGJ1dHRvbnMgdG8gYXR0cmFjdCBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgY2FsbCB0byBhY3Rpb24gb24gYSBwYWdlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRleHQ6IF9fKCAnRXhwbG9yZScgKSxcblx0XHR9LFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0ZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYnV0dG9uIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBtZXRhO1xuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRtZXRhID0gKFxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIGNsYXNzbmFtZXNcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1idXR0b24tYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0ZXh0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50ZXh0IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdC8vIEB0b2RvOiBkbyB3ZSBuZWVkIGFsaWdubWVudC9mbG9hdCBjb250cm9scyBvbiBidXR0b25zP1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGFsaWdubWVudDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdCdXR0b24gU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiYnV0dG9uLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdCdXR0b24gU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdwcm9taW5lbnQnLCAnZGlzYWJsZWQnIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc3R5bGUgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBzdHlsZSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9jYXJkLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1jYXJkJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0fSBlbHNlIHtcblx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9jYXJkJywge1xuXG5cdHRpdGxlOiBfXyggJ0NhcmQnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGNhcmRzIHRvIGV4cGxhaW4gYW5kIGxpbmsgdG8gYSBzaW5nbGUgaWRlYS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdPbmUgaWRlYScgKSxcblx0XHRcdGJvZHk6IF9fKCAnU2luY2UgdGhlIGVudGlyZSBjYXJkIG11c3QgYmUgYSBzaW5nbGUgbGluaywgaXTigJlzIHBlcmZlY3QgZm9yIGxpbmtpbmcgdG8gYnJvYWQgdG9waWNzIHdoZXJlIHlvdSBuZWVkIG1vcmUgd29yZHMgb3IgYSBwaG90byB0byBkZXNjcmliZSB0aGUgbGlua2VkIHJlc291cmNlLicgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlLmpwZycsXG5cdFx0XHRidXR0b246IF9fKCAnTGVhcm4gTW9yZScgKSxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1jYXJkLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC1jb250YWluZXIgbWVkaWFcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1jYXJkLWNvbnRhaW5lciB0ZXh0XCI+XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1jYXJkLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgY2FyZCB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHRhZ25hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGNhcmQgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1jYXJkLWNvbnRhaW5lciBidXR0b25cIj5cblx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBidXR0b246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcblx0RGF0ZVBpY2tlcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvZGF0ZS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiZGF0ZVwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWRhdGUnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY29sb3IgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGNsLWRhdGUtJyArIGF0dHJpYnV0ZXMuY29sb3I7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2RhdGUnLCB7XG5cblx0dGl0bGU6IF9fKCAnRGF0ZScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgZGF0ZXMgdG8gZGlzcGxheSBhIGRvd25sb2FkYWJsZSBjYWxlbmRhciBldmVudC4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRkYXRlOiBfXyggJ0p1bHkgMjgsIDIwNjEnICksXG5cdFx0XHRjYXB0aW9uOiBfXyggJ0hhbGxleeKAmXMgQ29tZXQgcmVhY2hlcyBwZXJpaGVsaW9uJyApLFxuXHRcdH0sXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGRhdGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzaG93X3llYXI6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMuZGF0ZSApIHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBkYXRlOiBuZXcgRGF0ZSgpIH0gKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCBhdHRyaWJ1dGVzLmRhdGUgKTtcblxuXHRcdFx0bGV0IG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyggJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSApO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnNob3dfeWVhciApIHtcblx0XHRcdFx0bW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCAnZGVmYXVsdCcsIHsgbW9udGg6ICdzaG9ydCcgfSApICsgJyAnICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEaXNwbGF5IGEgbWVzc2FnZSBvbiB0aGUgYWRtaW4gc2NyZWVuIGlmIHRoZSBub3RpY2UgaXMgZXhwaXJlZFxuXHRcdFx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0bGV0IGV4cGlyYXRpb25NZXNzYWdlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuZGF0ZSAmJiBkYXRlLmdldFRpbWUoKSA8PSB0b2RheS5nZXRUaW1lKCkgKSB7XG5cdFx0XHRcdGV4cGlyYXRpb25NZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJjbC1jb21wb25lbnQtbWVzc2FnZVwiPlRoaXMgZGF0ZSBtYXkgbm8gbG9uZ2VyIGJlIHJlbGV2YW50LjwvZGl2Pjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHR7IGV4cGlyYXRpb25NZXNzYWdlIH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtbW9udGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHsgbW9udGggfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1kYXlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHsgZGF0ZS5nZXREYXRlKCkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNhcHRpb24td3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY2FwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBkYXRlIGNhcHRpb24nICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdEYXRlIENvbG9yJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImRhdGUtY29sb3JcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ0RhdGUgQ29sb3InICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnYmx1ZScsICdyZWQnLCAnZ3JleScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnYmx1ZScgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjb2xvciA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmNvbG9yICkgPyAnJyA6IGF0dHJpYnV0ZXMuY29sb3I7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGNvbG9yICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbG9yOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8RGF0ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudERhdGU9eyBhdHRyaWJ1dGVzLmRhdGUgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkYXRlICkgPT4gc2V0QXR0cmlidXRlcyggeyBkYXRlIH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTaG93IHllYXJcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnNob3dfeWVhciB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNob3dfeWVhcjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0QnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0Rm9jYWxQb2ludFBpY2tlcixcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvaGVyby5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgcmFuZG9tSUQgPSAoKSA9PiB7XG5cdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY4NjA4NTMvZ2VuZXJhdGUtcmFuZG9tLXN0cmluZy1mb3ItZGl2LWlkXG5cdGNvbnN0IFM0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAoICggKCAxICsgTWF0aC5yYW5kb20oKSApICogMHgxMDAwMCApIHwgMCApLnRvU3RyaW5nKCAxNiApLnN1YnN0cmluZyggMSApO1xuXHR9O1xuXHRyZXR1cm4gKCBTNCgpICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyBTNCgpICsgUzQoKSApO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvaGVybycsIHtcblxuXHR0aXRsZTogX18oICdIZXJvJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBoZXJvZXMgdG8gZW5nYWdlIHdpdGggdGhlIHZpc2l0b3IgYW5kIGNyZWF0ZSB0aGUgc2Vuc2Ugb2YgZGVzaXJlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGhlYWRsaW5lOiBfXyggJ0FzcGlyYXRpb25hbCcgKSxcblx0XHRcdHN1YmhlYWQ6IF9fKCAnSGVyb2VzIGFsd2F5cyBhcmUuJyApLFxuXHRcdFx0YnV0dG9uOiBfXyggJ0JlIG9uZScgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlLmpwZycsXG5cdFx0XHRmb3JtYXQ6ICdzdXBlcicsXG5cdFx0fSxcblx0fSxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdC8vIHRoZSBtZWRpYUhlaWdodCBhbmQgbWVkaWFXaWR0aCBhcmUgZm9yIHRoZSBmb2NhbCBwb2ludCBwaWNrZXIgY29tcG9uZW50XG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGhlYWRsaW5lOiB7IC8vIERlcHJpY2F0ZWQgaW4gdjUuMSwgdXNlIFwidGl0bGVcIiBpbnN0ZWFkXG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN1YmhlYWQ6IHsgLy8gRGVwcmljYXRlZCBpbiB2NS4xLCB1c2UgXCJib2R5XCIgaW5zdGVhZFxuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0bWVkaWFIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0bWVkaWFXaWR0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR2aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR1c2VfY2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjcmVkaXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cG9zaXRpb25YOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdHBvc2l0aW9uWToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbnZlcnRfYTExeToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbmltYXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUhlaWdodDogbWVkaWEuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRtZWRpYVdpZHRoOiBtZWRpYS53aWR0aCxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25YOiAwLjUsXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uWTogMC41LFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBoZXJvIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGlmICggISBhdHRyaWJ1dGVzLmlkICkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmlkID0gcmFuZG9tSUQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMudGl0bGUgJiYgISEgYXR0cmlidXRlcy5oZWFkbGluZSApIHsgLy8gXCJoZWFkbGluZVwiIGRlcHJpY2F0ZWQgaW4gdjUuMSwgdXNlIFwidGl0bGVcIiBpbnN0ZWFkXG5cdFx0XHRcdGF0dHJpYnV0ZXMudGl0bGUgPSBhdHRyaWJ1dGVzLmhlYWRsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5ib2R5ICYmICEhIGF0dHJpYnV0ZXMuc3ViaGVhZCApIHsgLy8gXCJzdWJoZWFkXCIgZGVwcmljYXRlZCBpbiB2NS4xLCB1c2UgXCJib2R5XCIgaW5zdGVhZFxuXHRcdFx0XHRhdHRyaWJ1dGVzLmJvZHkgPSBhdHRyaWJ1dGVzLnN1YmhlYWQ7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLWhlcm8nO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5saW5rICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWxpbmsnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLWxpbmsnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmJvZHkgfHwgISEgYXR0cmlidXRlcy5zdWJoZWFkICkgeyAvLyBcInN1YmhlYWRcIiBkZXByaWNhdGVkIGluIHY1LjEsIHVzZSBcImJvZHlcIiBpbnN0ZWFkXG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBoYXMtc3ViaGVhZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8tc3ViaGVhZCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgc3R5bGUgPSB7fTtcblx0XHRcdGxldCBwb3N0ZXIgPSAncG9zdGVyJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHRcdFx0XHRwb3N0ZXIgPSAnc3RpbGwnO1xuXHRcdFx0XHRzdHlsZSA9IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IGAkeyBhdHRyaWJ1dGVzLnBvc2l0aW9uWCAqIDEwMCB9JSAkeyBhdHRyaWJ1dGVzLnBvc2l0aW9uWSAqIDEwMCB9JWAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7IGF0dHJpYnV0ZXMuaW1nIH0pYCxcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1oZXJvLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tcHJvcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgcG9zdGVyIH0gc3R5bGU9eyBzdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtaGVyby10ZXh0IG92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1YmhlYWRcIj48UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBoZXJvIHN1YnRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzdWJoZWFkXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYnV0dG9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSGVpZ2h0OiBtZWRpYS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFXaWR0aDogbWVkaWEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25YOiAwLjUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25ZOiAwLjUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImhlcm8tZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdIZXJvIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ2Z1bGx3aWR0aCcsICdzdXBlcicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxGb2NhbFBvaW50UGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0dXJsPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0XHRcdGRpbWVuc2lvbnM9eyB7IHdpZHRoOiBhdHRyaWJ1dGVzLm1lZGlhV2lkdGgsIGhlaWdodDogYXR0cmlidXRlcy5tZWRpYUhlaWdodCB9IH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHsgeDogYXR0cmlidXRlcy5wb3NpdGlvblgsIHk6IGF0dHJpYnV0ZXMucG9zaXRpb25ZIH0gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBmb2NhbFBvaW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBwb3NpdGlvblg6ICggZm9jYWxQb2ludC54ICogMSApLCBwb3NpdGlvblk6ICggZm9jYWxQb2ludC55ICogMSApIH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVmlkZW8gVVJMXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdmlkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZpZCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJGb3IgY3JlYXRpbmcgYSB2aWRlbyBoZXJvLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJVc2UgV29yZFByZXNzIGNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJTZXR0aW5nIGEgY3VzdG9tIGNhcHRpb24gYmVsb3cgd2lsbCBvdmVycmlkZSBhbnkgV29yZFByZXNzIGNhcHRpb24uXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy51c2VfY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHVzZV9jYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2FwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJTZXQgYSBjYXB0aW9uIGZvciB0aGUgaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNyZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNyZWRpdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jcmVkaXQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU3BlY2lmeSBjcmVkaXQgZm9yIHRoZSBoZXJvIG1lZGlhLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiSW52ZXJ0IGFjY2Vzc2liaWxpdHkgY29udHJvbHNcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJVc2Ugd2hpdGUgZm9yZWdyb3VuZCBvbiBkYXJrIGJhY2tncm91bmQuIE9ubHkgYXBwbGllcyB0byB2aWRlbyBoZXJvZXMuXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5pbnZlcnRfYTExeSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGludmVydF9hMTF5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0UmFuZ2VDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9tZW51LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1tZW51Jztcblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbmxldCBtZW51TmFtZXMgPSBmYWxzZTtcblxuY29uc3QgZ2V0TWVudU5hbWVzID0gKCkgPT4ge1xuXHRjb25zdCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdGlmICggeG1saHR0cC5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICkge1xuXHRcdFx0aWYgKCAyMDAgPT09IHhtbGh0dHAuc3RhdHVzICkge1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKCB4bWxodHRwLnJlc3BvbnNlVGV4dCApO1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gW107XG5cdFx0XHRcdGZvciAoIGNvbnN0IG0gb2YgcGFyc2VkICkge1xuXHRcdFx0XHRcdGxpc3QucHVzaCgge1xuXHRcdFx0XHRcdFx0bGFiZWw6IG0ubmFtZSxcblx0XHRcdFx0XHRcdHZhbHVlOiBtLm5hbWUsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1lbnVOYW1lcyA9IGxpc3Q7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdHhtbGh0dHAub3BlbiggJ0dFVCcsIFVSSV9DTF9TSVRFX1VSTCArICcvd3AtanNvbi91cmktY29tcG9uZW50LWxpYnJhcnkvdjEvbWVudXMnLCB0cnVlICk7XG5cdHhtbGh0dHAuc2VuZCgpO1xufTtcblxuZ2V0TWVudU5hbWVzKCk7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL21lbnUnLCB7XG5cblx0dGl0bGU6IF9fKCAnTWVudScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgbWVudXMgd2hlbiB0aGUgc2FtZSBjb2xsZWN0aW9uIG9mIGxpbmtzIG11c3QgYXBwZWFyIG9uIG11bHRpcGxlIHBhZ2VzLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdG5hbWU6ICdtZW51MScsXG5cdFx0XHR0aXRsZTogX18oICdNYWluIE1lbnUnICksXG5cdFx0XHRzaG93dGl0bGU6IHRydWUsXG5cdFx0fSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZGVwdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMSxcblx0XHR9LFxuXHRcdHNob3d0aXRsZToge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Ly8gU2V0IHRoZSBjbGFzc25hbWVzXG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHRsZXQgbmFtZSA9ICcnO1xuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMubmFtZSApIHtcblx0XHRcdFx0bmFtZSA9ICc6ICcgKyBhdHRyaWJ1dGVzLm5hbWU7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy5uYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudGl0bGUgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50aXRsZTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHRpdGxlTWV0YSA9ICcnO1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLnNob3d0aXRsZSApIHtcblx0XHRcdFx0dGl0bGVNZXRhID0gPHNwYW4gY2xhc3NOYW1lPVwiY2wtbWVudS10b2dnbGVcIj57IHRpdGxlIH08L3NwYW4+O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1tZW51LWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdHsgdGl0bGVNZXRhIH1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtbWVudS1wbGFjZWhvbGRlclwiPk1lbnUgcGxhY2Vob2xkZXJ7IG5hbWUgfTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBpbnNwZWN0b3JDb250cm9scyA9IChcblx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXsgeyBwYWRkaW5nUmlnaHQ6ICc3cHgnIH0gfT48RGFzaGljb24gaWNvbj1cIndhcm5pbmdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+VGhpcyBzaXRlIGhhcyBubyBtZW51cy4gIENyZWF0ZSBvbmUgdW5kZXIgdGhlIEFwcGVhcmFuY2UgdGFiLjwvZGl2PlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0KTtcblxuXHRcdGlmICggISEgbWVudU5hbWVzICkge1xuXHRcdFx0aW5zcGVjdG9yQ29udHJvbHMgPSAoXG5cdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZW51JyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uYW1lIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuYW1lICkgPT4gc2V0QXR0cmlidXRlcyggeyBuYW1lIH0gKSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbWVudU5hbWVzIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdJZiBubyB0aXRsZSBpcyBwcm92aWRlZCwgdGhlIG1lbnUgbmFtZSB3aWxsIGJlIHVzZWQuJyApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTaG93IHRpdGxlIG9uIGRlc2t0b3AnICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUaXRsZXMgYXJlIGFsd2F5cyBzaG93biBvbiBtb2JpbGUuJyApIH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd3RpdGxlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNob3d0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RlcHRoJyApIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMiB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGVwdGggKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRlcHRoIH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZXB0aCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHR7IGluc3BlY3RvckNvbnRyb2xzIH1cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL21ldHJpYy5zdmcnICkgfVxuXHRcdFx0YWx0PVwibWV0cmljXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtbWV0cmljJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbWV0cmljJywge1xuXG5cdHRpdGxlOiBfXyggJ01ldHJpYycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgbWV0cmljcyB0byBpbGx1c3RyYXRlIGEgZmFjdCB0aGF0IGlzIGNvbmNpc2UgYW5kIGVhc3kgdG8gY29uc3VtZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRtZXRyaWM6IF9fKCAnNDBLJyApLFxuXHRcdFx0Y2FwdGlvbjogX18oICdMZWFndWVzIHVuZGVyIHRoZSBzZWEnICksXG5cdFx0XHRzdHlsZTogJ2RhcmsnLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRtZXRyaWM6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1tZXRyaWMtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG1ldHJpYzogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWV0cmljIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJzEwMCUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdtZXRyaWNzIG9uIHRoaXMgcGFnZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdC8vIEB0b2RvOiB0ZWNobmljYWxseSwgeW91IGNhbiBoYXZlIGEgY2xlYXIgYW5kIGRhcmsgbWV0cmljXG5cdFx0Ly8gb3VyIGJ1dHRvbmdyb3VwIG9ubHkgYWxsb3dzIHVzZXJzIHRvIHNlbGVjdCBvbmVcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRyaWMgU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibWV0cmljLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdNZXRyaWMgU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnc3RhbmRhcmQnLCAnY2xlYXInLCAnZGFyaycsICdvdmVybGF5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxuXHREYXRlUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJyxcbl07XG5cbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIG5vdGljZSBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL25vdGljZS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbm90aWNlJywge1xuXHR0aXRsZTogX18oICdOb3RpY2UnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG5vdGljZXMgdG8gZGlzcGxheSBjb250ZW50IHRoYXQgaXMgcGFydGljdWxhcmx5IHVyZ2VudC4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdQbGVhc2UgTm90ZScgKSxcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbIHtcblx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnTm90aWNlcyBhcmUgbWVhbnQgdG8gYmUgdGVtcG9yYXJ5IGFuZCB0aW1lbHkgYW5kIHNob3VsZCBvbmx5IGJlIHVzZWQgdG8gY29tbXVuaWNhdGUgYW4gZXhjZXB0aW9uYWwgY29uZGl0aW9uLicgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0ZXhwaXJhdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzaG93X2V4cGlyZWQ6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0ZGlzbWlzc2libGU6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLW5vdGljZSc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGlzcGxheSBhIG1lc3NhZ2Ugb24gdGhlIGFkbWluIHNjcmVlbiBpZiB0aGUgbm90aWNlIGlzIGV4cGlyZWRcblx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0Y29uc3QgZXhwID0gbmV3IERhdGUoIGF0dHJpYnV0ZXMuZXhwaXJhdGlvbiApO1xuXHRcdFx0bGV0IGV4cGlyYXRpb25NZXNzYWdlID0gJyc7XG5cdFx0XHRsZXQgc3ludGF4ID0gJ2FuZCB3aWxsIG5vdCc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc2hvd19leHBpcmVkICkge1xuXHRcdFx0XHRzeW50YXggPSAnYnV0IHdpbGwgc3RpbGwnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gJiYgZXhwLmdldFRpbWUoKSA8PSBkYXRlLmdldFRpbWUoKSApIHtcblx0XHRcdFx0ZXhwaXJhdGlvbk1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImNsLWNvbXBvbmVudC1tZXNzYWdlXCI+VGhpcyBub3RpY2UgaGFzIGV4cGlyZWQgeyBzeW50YXggfSBiZSB2aXNpYmxlIHdoZW4gcHVibGlzaGVkLjwvZGl2Pjtcblx0XHRcdH1cblxuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50V3JhcHBlcjogJycgfSApO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHsgZXhwaXJhdGlvbk1lc3NhZ2UgfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIG5vdGljZSB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ05vdGljZSBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJub3RpY2Utc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ05vdGljZSBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3VyZ2VudCcsICdjb3ZpZDE5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gc3R5bGUgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJBbGxvdyB2aXNpdG9ycyB0byBkaXNtaXNzIHRoaXMgbm90aWNlXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5kaXNtaXNzaWJsZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRpc21pc3NpYmxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJFeHBpcmF0aW9uIGRhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnREYXRlPXsgYXR0cmlidXRlcy5leHBpcmF0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGF0ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZXhwaXJhdGlvbjogZGF0ZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyBhZnRlciBleHBpcmVkXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93X2V4cGlyZWQgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93X2V4cGlyZWQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0QnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL2hlYWRpbmcnLCB7IGxldmVsOiAxLCBwbGFjZWhvbGRlcjogJ015IFBhbmVsJyB9IF0sXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH0gXSxcblx0WyAndXJpLWNsL2J1dHRvbicsIHt9IF0sXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcGFuZWwuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gKCAnc3VwZXInID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJ2NsLXBhbmVsLXN1cGVyJyA6ICdjbC1wYW5lbCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMucmV2ZXJzZSApIHtcblx0XHRjbGFzc2VzICs9ICcgcmV2ZXJzZSc7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9wYW5lbCcsIHtcblxuXHR0aXRsZTogX18oICdQYW5lbCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgcGFuZWxzIHRvIHByb3ZpZGUgYSBkZWVwLCB2aXN1YWwgY29udGV4dCBmb3IgYSBwYXJ0aWN1bGFyIHRvcGljLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ0EgQml0IE1vcmUnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdFx0cmV2ZXJzZTogdHJ1ZSxcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbIHtcblx0XHRcdG5hbWU6ICdjb3JlL2hlYWRpbmcnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRsZXZlbDogMixcblx0XHRcdFx0Y29udGVudDogX18oICdPcHRpb25zJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnQSBwYW5lbCBpcyBkaWZmZXJlbnQgZnJvbSBhIGNhcmQgaW4gdGhhdCBhIHBhbmVsIG1heSBpbmNsdWRlIDxhIGhyZWY9XCIjXCI+bXVsdGlwbGUgbGlua3M8L2E+IG9yIGJ1dHRvbnMuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRyZXZlcnNlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEIHx8IGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcyApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50V3JhcHBlcjogJycgfSApO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0aWYgKCAnc3VwZXInID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItYmx1clwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWltYWdlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9zdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdGb3JtYXQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RvIGluY3JlYXNlIHBlcmZvcm1hbmNlLCBzdXBlciBwYW5lbCBwcmV2aWV3cyB3aWxsIGFwcGVhciBzaW1wbGlmaWVkIGluIHRoZSBlZGl0b3Igd2luZG93LicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYW5lbC1mb3JtYXRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1BhbmVsIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3N1cGVyJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJycgOiBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZvcm1hdDoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZsaXAgcGFuZWwgbGF5b3V0XCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5yZXZlcnNlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcmV2ZXJzZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9wcm9tby5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcHJvbW8nLCB7XG5cblx0dGl0bGU6IF9fKCAnUHJvbW8nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHByb21vcyB0byBzaG93Y2FzZSB0aW1lbHkgbWFya2V0aW5nIGluZm9ybWF0aW9uLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ1RpdGxlJyApLFxuXHRcdFx0Ym9keTogX18oICdTb21lIGJvZHkgdGV4dCcgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlLmpwZycsXG5cdFx0fSxcblx0fSxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGlua3RleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIHByb21vIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLXByb21vJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnbWljcm8nID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG1pY3JvJztcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLXByb21vLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLW1pY3JvLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBwcm9tbyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLW1pY3JvLXRleHQtbGlua1wiPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmt0ZXh0IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGxpbmsgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz57IG1ldGEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHN0eWxlID0gJ3N0eWxlLWJsdXInO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICYmICdkZWZhdWx0JyAhPT0gYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0c3R5bGUgPSAnc3R5bGUtJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZSA9ICdjbC1wcm9tby1iYWNrZHJvcCAnICsgc3R5bGU7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLXByb21vLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tYmFja2Ryb3Atd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHN0eWxlIH0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8cD48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYm9keTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tdGV4dC1saW5rXCI+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbmt0ZXh0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGlua3RleHQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgbGluayB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWltZy13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWdcIj48c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWctbGlua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tYmxvY2stZWRpdG9yLW1ldGFcIj57IG1ldGEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgc3R5bGVDb250cm9sO1xuXHRcdGlmICggJ21pY3JvJyAhPT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRzdHlsZUNvbnRyb2wgPSAoXG5cdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgcHJvbW8gcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0aWQ9XCJwcm9tby1zdHlsZVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1Byb21vIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdicmFuZCcsICdjb25mZXR0aScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwcm9tby1mb3JtYXRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1Byb21vIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ21pY3JvJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJycgOiBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZvcm1hdDoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdHsgc3R5bGVDb250cm9sIH1cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0QnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9xdW90ZS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtcXVvdGUnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NlcyArPSAnIG5vLWltYWdlJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcXVvdGUnLCB7XG5cblx0dGl0bGU6IF9fKCAnUXVvdGUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHF1b3RlcyB0byBjcmVhdGUgYSBibG9ja3F1b3RlIGVsZW1lbnQgdGhhdCBzdGFuZHMgb3V0IGZyb20gdGhlIHBhZ2UuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0cXVvdGU6IF9fKCAnT2NlYW4sIHdobyBpcyB0aGUgc291cmNlIG9mIGFsbC4nICksXG5cdFx0XHRjaXRhdGlvbjogX18oICdIb21lcicgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlX3NxdWFyZS5qcGcnLFxuXHRcdH0sXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHF1b3RlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNpdGF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgaW1hZ2VDbGFzcyA9ICggISEgYXR0cmlidXRlcy5tZWRpYUlEICkgPyAnY2wtcXVvdGUtaW1hZ2UnIDogJyc7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGltYWdlQ2xhc3MgfT5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGJsb2NrcXVvdGU+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcXVvdGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnF1b3RlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RoZSBxdW90ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9ibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0PGNpdGU+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2l0YXRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNpdGF0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ0Fub255bW91cycgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9jaXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFJhbmdlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCd1cmktY2wvdGFiJyxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy90YWJzLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC10YWJzJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5jb25zdCBnZXRUYWJzVGVtcGxhdGUgPSAoIHRhYnMgKSA9PiB7XG5cdHJldHVybiBbIC4uLkFycmF5KCB0YWJzICkgXS5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBbICd1cmktY2wvdGFiJywge30gXTtcblx0fSApO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvdGFicycsIHtcblxuXHR0aXRsZTogX18oICdUYWJzJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSB0YWJzIHRvIGRpc3BsYXkgY29udGVudCB0aGF0IGhhcyBhIGNvcnJlbGF0aW9uIGJ1dCBpcyBub3QgZGlyZWN0bHkgcmVsYXRlZC4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0YWJzOiAyLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ3VyaS1jbC90YWInLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0dGl0bGU6ICdBcHBsZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF9fKCAnRWFjaCB0YWIgY2FuIGNvbnRhaW4gcGFyYWdyYXBocywgbGlua3MsIGFuZCBvdGhlciBjb21wb25lbnRzLicgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IF9fKCAnTW9yZSBhYm91dCBmcnVpdCcgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICd1cmktY2wvdGFiJyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdHRpdGxlOiAnT3JhbmdlcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogX18oICdUaGlzIHRhYiB3aWxsIGhhdmUgZGlmZmVyZW50IGluZm9ybWF0aW9uIHRoYW4gdGhlIGZpcnN0IHRhYiwgYnV0IHRoZSBpbmZvcm1hdGlvbiBzaG91bGQgY29ycmVsYXRlIHNvbWVob3cuJyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF9fKCAnT25seSBvbmUgdGFiIHdpbGwgYmUgdmlzaWJsZSBhdCBhIHRpbWUgb24gdGhlIGxpdmUgcGFnZS4nICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRhYnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMixcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMgKTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGFicycgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRhYnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0VGFicyApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFiczogbmV4dFRhYnMsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsgMiB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXsgNiB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IGdldFRhYnNUZW1wbGF0ZSggYXR0cmlidXRlcy50YWJzICkgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9XCJhbGxcIlxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaW1hZ2UnLFxuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJyxcblx0J3VyaS1jbC9jYXJkJyxcblx0J3VyaS1jbC9tZXRyaWMnLFxuXHQndXJpLWNsL3F1b3RlJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciB0YWIgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy90YWIuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3RhYicsIHtcblxuXHR0aXRsZTogX18oICdUYWInICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdHBhcmVudDogWyAndXJpLWNsL3RhYnMnIF0sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblxuXHRzdXBwb3J0czoge1xuXHRcdGluc2VydGVyOiBmYWxzZSxcblx0XHRyZXVzYWJsZTogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtdGFiXCI+XG5cdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGFiIFRpdGxlJyApIH1cblx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYWJzdHJhY3QvYmxvY2snO1xuaW1wb3J0ICcuL2JveG91dC9ibG9jayc7XG5pbXBvcnQgJy4vYnJlYWtvdXQvYmxvY2snO1xuaW1wb3J0ICcuL2J1dHRvbi9ibG9jayc7XG5pbXBvcnQgJy4vY2FyZC9ibG9jayc7XG5pbXBvcnQgJy4vZGF0ZS9ibG9jayc7XG5pbXBvcnQgJy4vaGVyby9ibG9jayc7XG5pbXBvcnQgJy4vbWVudS9ibG9jayc7XG5pbXBvcnQgJy4vbWV0cmljL2Jsb2NrJztcbmltcG9ydCAnLi9ub3RpY2UvYmxvY2snO1xuaW1wb3J0ICcuL3BhbmVsL2Jsb2NrJztcbmltcG9ydCAnLi9wcm9tby9ibG9jayc7XG5pbXBvcnQgJy4vcXVvdGUvYmxvY2snO1xuaW1wb3J0ICcuL3RhYnMvdGFiJztcbmltcG9ydCAnLi90YWJzL2Jsb2NrJztcbiJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3dwJGNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiRGFzaGljb24iLCJCdXR0b24iLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsIlRvb2xiYXIiLCJUb29sYmFyQnV0dG9uIiwid2l0aE5vdGljZXMiLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uR3JvdXAiLCJGb2NhbFBvaW50UGlja2VyIiwiVG9nZ2xlQ29udHJvbCIsIkNvbG9yUGlja2VyIiwiX3dwJGJsb2NrRWRpdG9yIiwiYmxvY2tFZGl0b3IiLCJCbG9ja0NvbnRyb2xzIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0FsaWdubWVudFRvb2xiYXIiLCJNZWRpYVBsYWNlaG9sZGVyIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIlJpY2hUZXh0IiwiUGxhaW5UZXh0IiwiVVJMSW5wdXQiLCJBTExPV0VEX01FRElBX1RZUEVTIiwiY3VzdG9tSWNvbiIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJzcmMiLCJVUklfQ0xfVVJMIiwiYWx0IiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGUiLCJhdHRyaWJ1dGVzIiwiYm9keSIsImJ1dHRvbiIsIm1lZGlhSUQiLCJpbWciLCJ0eXBlIiwibGluayIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmdjb2xvcnBpY2tlciIsImJnY3NzIiwic3R5bGUiLCJpbnZlcnRfYTExeSIsImVkaXQiLCJfcmVmIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsImxhYmVscyIsImluc3RydWN0aW9ucyIsIm9uU2VsZWN0IiwibWVkaWEiLCJ1cmwiLCJpZCIsImFjY2VwdCIsImFsbG93ZWRUeXBlcyIsIm1ldGEiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY29udGVudCIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29udGVudEVkaXRGb3JtIiwiY2xhc3NlcyIsInJlbmRlciIsIl9yZWYyIiwib3BlbiIsImtlZXBQbGFjZWhvbGRlck9uRm9jdXMiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwia2V5IiwibGFiZWwiLCJfcmVmMyIsIm9uQ2xpY2siLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsImhlbHAiLCJtYXAiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImZvcm1hdCIsInVuZGVmaW5lZCIsInNlbGVjdGVkIiwiaXNTZWNvbmRhcnkiLCJpc1ByaW1hcnkiLCJjb2xvciIsIm9uQ2hhbmdlQ29tcGxldGUiLCJoZXgiLCJkaXNhYmxlQWxwaGEiLCJjaGVja2VkIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwiZHJvcENhcCIsImNsYXNzTmFtZXMiLCJmbG9hdCIsImlubmVyQmxvY2tzIiwibmFtZSIsInRleHQiLCJjb250ZW50V3JhcHBlciIsImFsbG93ZWRCbG9ja3MiLCJ0ZW1wbGF0ZSIsInNhdmUiLCJDb250ZW50IiwidXNlX2NvbnRlbnRfd2lkdGgiLCJhbGlnbm1lbnQiLCJ0b29sdGlwIiwidGFnbmFtZSIsIkRhdGVQaWNrZXIiLCJkYXRlIiwiY2FwdGlvbiIsInNob3dfeWVhciIsIkRhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImV4cGlyYXRpb25NZXNzYWdlIiwiZ2V0VGltZSIsImdldERhdGUiLCJjdXJyZW50RGF0ZSIsInJhbmRvbUlEIiwiUzQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJoZWFkbGluZSIsInN1YmhlYWQiLCJtZWRpYUhlaWdodCIsIm1lZGlhV2lkdGgiLCJ2aWQiLCJ1c2VfY2FwdGlvbiIsImNyZWRpdCIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImFuaW1hdGlvbiIsInBvc3RlciIsImJhY2tncm91bmRQb3NpdGlvbiIsImNvbmNhdCIsImJhY2tncm91bmRJbWFnZSIsImRpbWVuc2lvbnMiLCJ4IiwieSIsImZvY2FsUG9pbnQiLCJSYW5nZUNvbnRyb2wiLCJTZWxlY3RDb250cm9sIiwibWVudU5hbWVzIiwiZ2V0TWVudU5hbWVzIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJsaXN0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm0iLCJwdXNoIiwiZXJyIiwiZSIsImYiLCJVUklfQ0xfU0lURV9VUkwiLCJzZW5kIiwic2hvd3RpdGxlIiwiZGVwdGgiLCJ0aXRsZU1ldGEiLCJpbnNwZWN0b3JDb250cm9scyIsInBhZGRpbmdSaWdodCIsIm9wdGlvbnMiLCJtYXgiLCJtaW4iLCJtZXRyaWMiLCJleHBpcmF0aW9uIiwic2hvd19leHBpcmVkIiwiZGlzbWlzc2libGUiLCJleHAiLCJzeW50YXgiLCJsZXZlbCIsInJldmVyc2UiLCJfcmVmNCIsIl9yZWY1IiwibGlua3RleHQiLCJzdHlsZUNvbnRyb2wiLCJxdW90ZSIsImNpdGF0aW9uIiwiaW1hZ2VDbGFzcyIsImdldFRhYnNUZW1wbGF0ZSIsInRhYnMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm5leHRUYWJzIiwidGVtcGxhdGVMb2NrIiwicGFyZW50Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=