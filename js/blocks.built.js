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
var ALLOWED_BLOCKS = ['core/image', 'core/heading', 'core/paragraph', 'core/list', 'uri-cl/button', 'uri-cl/boxout', 'uri-cl/card', 'uri-cl/date', 'uri-cl/hero', 'uri-cl/metric', 'uri-cl/quote'];
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
  InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
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
    },
    arialabel: {
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

    //create aria label field
    var createAriaLabelField = function createAriaLabelField() {
      return wp.element.createElement(InspectorAdvancedControls, null, wp.element.createElement(TextControl, {
        label: "Aria-label",
        onChange: function onChange(content) {
          return setAttributes({
            arialabel: content
          });
        },
        value: attributes.arialabel,
        help: "Warning: This will override the link text for screenreader users. Use aria-label only as a last resort."
      }));
    };

    // Send the editor interfaces to the view
    return [createInspectorControls(), createAriaLabelField(), createContentEditForm()];
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
  TextControl = _wp$components.TextControl,
  ExternalLink = _wp$components.ExternalLink,
  Text = _wp$components.Text;
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

    //Generate doc link in sidebar
    var createSidebarTips = function createSidebarTips() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: "Documentation"
      }, wp.element.createElement(PanelRow, null, wp.element.createElement("div", null, "Tip: If using cards in columns, make sure the images have the same aspect ratio.")), wp.element.createElement(PanelRow, null, wp.element.createElement(ExternalLink, {
        href: "https://www.uri.edu/wordpress/components/cards/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "View Documentation"))));
    };

    // Send the editor interfaces to the view
    return [createBlockControls(), createInspectorControls(), createSidebarTips(), createContentEditForm()];
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
      default: false
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
        __nextHasNoMarginBottom: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ04wQjtBQUNGO0FBQ0U7QUFDRjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNEO0FBQ0E7QUFDQTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9hYnN0cmFjdC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2JveG91dC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2JyZWFrb3V0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYnV0dG9uL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvY2FyZC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2RhdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9oZXJvL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvbWVudS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL21ldHJpYy9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL25vdGljZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3BhbmVsL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvcHJvbW8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9xdW90ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3RhYnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy90YWJzL3RhYi5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdENvbG9yUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9hYnN0cmFjdC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYWJzdHJhY3QnLCB7XG5cblx0dGl0bGU6IF9fKCAnQWJzdHJhY3QnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGFic3RyYWN0cyB0byBpbnRyb2R1Y2UgY29udGVudCBpbiBhIHZpc3VhbCBtYW5ub3IsIGVzcGVjaWFsbHkgd2hlbiBzdWl0YWJsZSBwaG90b2dyYXBoeSBpcyBub3QgYXZhaWxhYmxlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ0EgZ3JhbmQgdmlzaW9uJyApLFxuXHRcdFx0Ym9keTogX18oICdTZXQgdGhlIGdyb3VuZHdvcmsgZm9yIHRoZSBzdG9yeSwgYW5kIGVudGljZSByZWFkZXJzIHRvIGV4cGxvcmUgZnVsbHkuJyApLFxuXHRcdFx0YnV0dG9uOiBfXyggJ0NvbnRpbnVlJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJyMwMDIxNDcnLFxuXHRcdH0sXG5cdFx0Ymdjb2xvcnBpY2tlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnIzFiNWRhOScsXG5cdFx0fSxcblx0XHRiZ2Nzczoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnYmFycycsXG5cdFx0fSxcblx0XHRpbnZlcnRfYTExeToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBhYnN0cmFjdCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1hYnN0cmFjdCc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMuYmFja2dyb3VuZCA9IGF0dHJpYnV0ZXMuYmdjb2xvcnBpY2tlcjtcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5iZ2NzcyApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5iYWNrZ3JvdW5kID0gYXR0cmlidXRlcy5iZ2Nzcztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtYWJzdHJhY3QtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHN0eWxlPXsgeyBiYWNrZ3JvdW5kOiBhdHRyaWJ1dGVzLmJhY2tncm91bmQgfSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1iYWNrZHJvcC1wcmV2aWV3XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWFic3RyYWN0LXByb3BlciBoYXMtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYWJzdHJhY3QgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD48UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBhYnN0cmFjdCB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1idXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBidXR0b246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgYWJzdHJhY3QgcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiYWJzdHJhY3QtZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdBYnN0cmFjdCBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnYmFycycsICdkaXNjcycsICdsYXR0aWNlJywgJ2hvbmV5Y29tYicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdCYWNrZ3JvdW5kIENvbG9yJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImFic3RyYWN0LWJhY2tncm91bmRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PENvbG9yUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj17IGF0dHJpYnV0ZXMuYmdjb2xvcnBpY2tlciB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZUNvbXBsZXRlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgYmdjb2xvcnBpY2tlcjogdmFsdWUuaGV4IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlQWxwaGFcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkN1c3RvbSBCYWNrZ3JvdW5kIENTU1wiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJnY3NzOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJnY3NzIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgQ1NTIHZhbHVlIGZvciB0aGUgYmFja2dyb3VuZCBjb2xvciAob3ZlcnJpZGVzIHRoZSBjb2xvciBwaWNrZXIgc2V0dGluZykuXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkludmVydCBhY2Nlc3NpYmlsaXR5IGNvbnRyb2xzXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiVXNlIHdoaXRlIGZvcmVncm91bmQgb24gZGFyayBiYWNrZ3JvdW5kLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaW52ZXJ0X2ExMXkgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBpbnZlcnRfYTExeTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLCAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYm94b3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYm94b3V0LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1ib3hvdXQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYm94b3V0Jywge1xuXG5cdHRpdGxlOiBfXyggJ0JveG91dCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYm94b3V0cyB0byBjb250YWluIHRleHQgdGhhdCBpcyBhbmNpbGxhcnkgdG8gdGhlIHBhZ2XigJlzIGNvbnRlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnU2lkZSBub3RlJyApLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdCb3hvdXQgY29udGVudCBzdXBwb3J0cyB0aGUgcmVzdCBvZiB0aGUgcGFnZeKAmXMgbWVzc2FnZSB3aXRob3V0IGJlaW5nIGRpcmVjdGx5IHJlbGF0ZWQuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcywgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXHQndXJpLWNsL2JveG91dCcsXG5cdCd1cmktY2wvY2FyZCcsXG5cdCd1cmktY2wvZGF0ZScsXG5cdCd1cmktY2wvaGVybycsXG5cdCd1cmktY2wvbWV0cmljJyxcblx0J3VyaS1jbC9xdW90ZScsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYnJlYWtvdXQgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9icmVha291dC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtYnJlYWtvdXQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMudXNlX2NvbnRlbnRfd2lkdGggKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHVzZS1jb250ZW50LXdpZHRoJztcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2JyZWFrb3V0Jywge1xuXG5cdHRpdGxlOiBfXyggJ0JyZWFrb3V0JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBicmVha291dHMgdG8gY3JlYXRlIHZpc3VhbGx5IGRpc3RpbmN0IHNlY3Rpb25zIG9yIGZ1bGwtd2lkdGggbGF5b3V0cy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ0JyZWFrb3V0cyBjb250ZW50IGNhbiBiZSB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgcmVzdCBvZiB0aGUgcGFnZSBjb250ZW50LCBvciBpdCBjYW4gZXhwYW5kIGJleW9uZCBpdC4nICksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHR0ZXh0OiBfXyggJ0xlYXJuIE1vcmUnICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdHVzZV9jb250ZW50X3dpZHRoOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGlmICggdHJ1ZSA9PT0gYXR0cmlidXRlcy51c2VfY29udGVudF93aWR0aCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJVc2UgY29udGVudCB3aWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMudXNlX2NvbnRlbnRfd2lkdGggfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB1c2VfY29udGVudF93aWR0aDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdFVSTElucHV0LFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyhVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnV0dG9uLnN2ZycpfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9IChhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJ1dHRvbic7XG5cdGlmICghIWF0dHJpYnV0ZXMuY2xhc3NOYW1lKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICghIWF0dHJpYnV0ZXMuYWxpZ25tZW50KSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmFsaWdubWVudDtcblx0fVxuXHRpZiAoISFhdHRyaWJ1dGVzLnN0eWxlKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHR9XG5cdGlmICghIWlzU2VsZWN0ZWQpIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgndXJpLWNsL2J1dHRvbicsIHtcblxuXHR0aXRsZTogX18oJ0J1dHRvbicpLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXygnVXNlIGJ1dHRvbnMgdG8gYXR0cmFjdCBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgY2FsbCB0byBhY3Rpb24gb24gYSBwYWdlLicpLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGV4dDogX18oJ0V4cGxvcmUnKSxcblx0XHR9LFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0ZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YXJpYWxhYmVsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9XG5cdH0sXG5cblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9KSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGJ1dHRvbiBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgbWV0YTtcblx0XHRcdGlmICghIWlzU2VsZWN0ZWQpIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YXR0cmlidXRlcy5saW5rfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoY29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7IGxpbms6IGNvbnRlbnQgfSl9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBjbGFzc25hbWVzXG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICghIWF0dHJpYnV0ZXMudG9vbHRpcCkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtYnV0dG9uLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXN9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoY29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7IHRleHQ6IGNvbnRlbnQgfSl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLnRleHR9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnWW91ciBidXR0b24gdGV4dCcpfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0e21ldGF9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9e2F0dHJpYnV0ZXMuYWxpZ25tZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhjb250ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBjb250ZW50IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQnV0dG9uIFN0eWxlJyl9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJidXR0b24tc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9e19fKCdCdXR0b24gU3R5bGUnKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7WydkZWZhdWx0JywgJ3Byb21pbmVudCcsICdkaXNhYmxlZCddLm1hcCgodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICgnZGVmYXVsdCcgPT09IHZhbHVlKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlID0gKHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKGtleSA9PT0gc3R5bGUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXtzZWxlY3RlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoY29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7IHN0eWxlOiBrZXkgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhcGl0YWxpemVkVmFsdWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGNvbnRlbnQpID0+IHNldEF0dHJpYnV0ZXMoeyB0b29sdGlwOiBjb250ZW50IH0pfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLnRvb2x0aXB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvL2NyZWF0ZSBhcmlhIGxhYmVsIGZpZWxkXG5cdFx0Y29uc3QgY3JlYXRlQXJpYUxhYmVsRmllbGQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQWR2YW5jZWRDb250cm9scz5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiQXJpYS1sYWJlbFwiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGNvbnRlbnQpID0+IHNldEF0dHJpYnV0ZXMoeyBhcmlhbGFiZWw6IGNvbnRlbnQgfSl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17YXR0cmlidXRlcy5hcmlhbGFiZWx9XG5cdFx0XHRcdFx0XHRoZWxwPVwiV2FybmluZzogVGhpcyB3aWxsIG92ZXJyaWRlIHRoZSBsaW5rIHRleHQgZm9yIHNjcmVlbnJlYWRlciB1c2Vycy4gVXNlIGFyaWEtbGFiZWwgb25seSBhcyBhIGxhc3QgcmVzb3J0LlwiXG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8L0luc3BlY3RvckFkdmFuY2VkQ29udHJvbHM+XG5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuIChbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQXJpYUxhYmVsRmllbGQoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0pO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59KTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEV4dGVybmFsTGluayxcblx0VGV4dCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2NhcmQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWNhcmQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2NhcmQnLCB7XG5cblx0dGl0bGU6IF9fKCAnQ2FyZCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgY2FyZHMgdG8gZXhwbGFpbiBhbmQgbGluayB0byBhIHNpbmdsZSBpZGVhLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ09uZSBpZGVhJyApLFxuXHRcdFx0Ym9keTogX18oICdTaW5jZSB0aGUgZW50aXJlIGNhcmQgbXVzdCBiZSBhIHNpbmdsZSBsaW5rLCBpdOKAmXMgcGVyZmVjdCBmb3IgbGlua2luZyB0byBicm9hZCB0b3BpY3Mgd2hlcmUgeW91IG5lZWQgbW9yZSB3b3JkcyBvciBhIHBob3RvIHRvIGRlc2NyaWJlIHRoZSBsaW5rZWQgcmVzb3VyY2UuJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGJ1dHRvbjogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWNhcmQtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1jYXJkLWNvbnRhaW5lciBtZWRpYVwiPlxuXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIHRleHRcIj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYm9keTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgY2FyZCB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIGJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvL0dlbmVyYXRlIGRvYyBsaW5rIGluIHNpZGViYXJcblx0XHRjb25zdCBjcmVhdGVTaWRlYmFyVGlwcyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPVwiRG9jdW1lbnRhdGlvblwiPlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlRpcDogSWYgdXNpbmcgY2FyZHMgaW4gY29sdW1ucywgbWFrZSBzdXJlIHRoZSBpbWFnZXMgaGF2ZSB0aGUgc2FtZSBhc3BlY3QgcmF0aW8uPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL3d3dy51cmkuZWR1L3dvcmRwcmVzcy9jb21wb25lbnRzL2NhcmRzL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRWaWV3IERvY3VtZW50YXRpb25cblx0XHRcdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlU2lkZWJhclRpcHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdERhdGVQaWNrZXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2RhdGUuc3ZnJyApIH1cblx0XHRcdGFsdD1cImRhdGVcIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1kYXRlJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNvbG9yICkge1xuXHRcdGNsYXNzZXMgKz0gJyBjbC1kYXRlLScgKyBhdHRyaWJ1dGVzLmNvbG9yO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9kYXRlJywge1xuXG5cdHRpdGxlOiBfXyggJ0RhdGUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGRhdGVzIHRvIGRpc3BsYXkgYSBkb3dubG9hZGFibGUgY2FsZW5kYXIgZXZlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0ZGF0ZTogX18oICdKdWx5IDI4LCAyMDYxJyApLFxuXHRcdFx0Y2FwdGlvbjogX18oICdIYWxsZXnigJlzIENvbWV0IHJlYWNoZXMgcGVyaWhlbGlvbicgKSxcblx0XHR9LFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRkYXRlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c2hvd195ZWFyOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdGlmICggISBhdHRyaWJ1dGVzLmRhdGUgKSB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZGF0ZTogbmV3IERhdGUoKSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggYXR0cmlidXRlcy5kYXRlICk7XG5cblx0XHRcdGxldCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoICdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0gKTtcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zaG93X3llYXIgKSB7XG5cdFx0XHRcdG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyggJ2RlZmF1bHQnLCB7IG1vbnRoOiAnc2hvcnQnIH0gKSArICcgJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGlzcGxheSBhIG1lc3NhZ2Ugb24gdGhlIGFkbWluIHNjcmVlbiBpZiB0aGUgbm90aWNlIGlzIGV4cGlyZWRcblx0XHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBleHBpcmF0aW9uTWVzc2FnZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmRhdGUgJiYgZGF0ZS5nZXRUaW1lKCkgPD0gdG9kYXkuZ2V0VGltZSgpICkge1xuXHRcdFx0XHRleHBpcmF0aW9uTWVzc2FnZSA9IDxkaXYgY2xhc3NOYW1lPVwiY2wtY29tcG9uZW50LW1lc3NhZ2VcIj5UaGlzIGRhdGUgbWF5IG5vIGxvbmdlciBiZSByZWxldmFudC48L2Rpdj47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0eyBleHBpcmF0aW9uTWVzc2FnZSB9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLW1vbnRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1vbnRoIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtZGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IGRhdGUuZ2V0RGF0ZSgpIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jYXB0aW9uLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNhcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgZGF0ZSBjYXB0aW9uJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGF0ZSBDb2xvcicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJkYXRlLWNvbG9yXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdEYXRlIENvbG9yJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2JsdWUnLCAncmVkJywgJ2dyZXknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2JsdWUnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY29sb3IgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5jb2xvciApID8gJycgOiBhdHRyaWJ1dGVzLmNvbG9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBjb2xvciApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjb2xvcjoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PERhdGVQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnREYXRlPXsgYXR0cmlidXRlcy5kYXRlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGF0ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGF0ZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyB5ZWFyXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93X3llYXIgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93X3llYXI6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2hlcm8uc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IHJhbmRvbUlEID0gKCkgPT4ge1xuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82ODYwODUzL2dlbmVyYXRlLXJhbmRvbS1zdHJpbmctZm9yLWRpdi1pZFxuXHRjb25zdCBTNCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKCAoICggMSArIE1hdGgucmFuZG9tKCkgKSAqIDB4MTAwMDAgKSB8IDAgKS50b1N0cmluZyggMTYgKS5zdWJzdHJpbmcoIDEgKTtcblx0fTtcblx0cmV0dXJuICggUzQoKSArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgUzQoKSArIFM0KCkgKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2hlcm8nLCB7XG5cblx0dGl0bGU6IF9fKCAnSGVybycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgaGVyb2VzIHRvIGVuZ2FnZSB3aXRoIHRoZSB2aXNpdG9yIGFuZCBjcmVhdGUgdGhlIHNlbnNlIG9mIGRlc2lyZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRoZWFkbGluZTogX18oICdBc3BpcmF0aW9uYWwnICksXG5cdFx0XHRzdWJoZWFkOiBfXyggJ0hlcm9lcyBhbHdheXMgYXJlLicgKSxcblx0XHRcdGJ1dHRvbjogX18oICdCZSBvbmUnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdFx0Zm9ybWF0OiAnc3VwZXInLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHQvLyB0aGUgbWVkaWFIZWlnaHQgYW5kIG1lZGlhV2lkdGggYXJlIGZvciB0aGUgZm9jYWwgcG9pbnQgcGlja2VyIGNvbXBvbmVudFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRoZWFkbGluZTogeyAvLyBEZXByaWNhdGVkIGluIHY1LjEsIHVzZSBcInRpdGxlXCIgaW5zdGVhZFxuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdWJoZWFkOiB7IC8vIERlcHJpY2F0ZWQgaW4gdjUuMSwgdXNlIFwiYm9keVwiIGluc3RlYWRcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdG1lZGlhV2lkdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dmlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dXNlX2NhcHRpb246IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y3JlZGl0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHBvc2l0aW9uWDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRwb3NpdGlvblk6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW52ZXJ0X2ExMXk6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUhlaWdodDogbWVkaWEuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRtZWRpYVdpZHRoOiBtZWRpYS53aWR0aCxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25YOiAwLjUsXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uWTogMC41LFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBoZXJvIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGlmICggISBhdHRyaWJ1dGVzLmlkICkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmlkID0gcmFuZG9tSUQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMudGl0bGUgJiYgISEgYXR0cmlidXRlcy5oZWFkbGluZSApIHsgLy8gXCJoZWFkbGluZVwiIGRlcHJpY2F0ZWQgaW4gdjUuMSwgdXNlIFwidGl0bGVcIiBpbnN0ZWFkXG5cdFx0XHRcdGF0dHJpYnV0ZXMudGl0bGUgPSBhdHRyaWJ1dGVzLmhlYWRsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5ib2R5ICYmICEhIGF0dHJpYnV0ZXMuc3ViaGVhZCApIHsgLy8gXCJzdWJoZWFkXCIgZGVwcmljYXRlZCBpbiB2NS4xLCB1c2UgXCJib2R5XCIgaW5zdGVhZFxuXHRcdFx0XHRhdHRyaWJ1dGVzLmJvZHkgPSBhdHRyaWJ1dGVzLnN1YmhlYWQ7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLWhlcm8nO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5saW5rICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWxpbmsnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLWxpbmsnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmJvZHkgfHwgISEgYXR0cmlidXRlcy5zdWJoZWFkICkgeyAvLyBcInN1YmhlYWRcIiBkZXByaWNhdGVkIGluIHY1LjEsIHVzZSBcImJvZHlcIiBpbnN0ZWFkXG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBoYXMtc3ViaGVhZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8tc3ViaGVhZCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgc3R5bGUgPSB7fTtcblx0XHRcdGxldCBwb3N0ZXIgPSAncG9zdGVyJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHRcdFx0XHRwb3N0ZXIgPSAnc3RpbGwnO1xuXHRcdFx0XHRzdHlsZSA9IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IGAkeyBhdHRyaWJ1dGVzLnBvc2l0aW9uWCAqIDEwMCB9JSAkeyBhdHRyaWJ1dGVzLnBvc2l0aW9uWSAqIDEwMCB9JWAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7IGF0dHJpYnV0ZXMuaW1nIH0pYCxcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1oZXJvLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tcHJvcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgcG9zdGVyIH0gc3R5bGU9eyBzdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtaGVyby10ZXh0IG92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1YmhlYWRcIj48UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBoZXJvIHN1YnRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzdWJoZWFkXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYnV0dG9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSGVpZ2h0OiBtZWRpYS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFXaWR0aDogbWVkaWEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25YOiAwLjUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25ZOiAwLjUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImhlcm8tZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdIZXJvIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ2Z1bGx3aWR0aCcsICdzdXBlcicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxGb2NhbFBvaW50UGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0dXJsPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0XHRcdGRpbWVuc2lvbnM9eyB7IHdpZHRoOiBhdHRyaWJ1dGVzLm1lZGlhV2lkdGgsIGhlaWdodDogYXR0cmlidXRlcy5tZWRpYUhlaWdodCB9IH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHsgeDogYXR0cmlidXRlcy5wb3NpdGlvblgsIHk6IGF0dHJpYnV0ZXMucG9zaXRpb25ZIH0gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBmb2NhbFBvaW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBwb3NpdGlvblg6ICggZm9jYWxQb2ludC54ICogMSApLCBwb3NpdGlvblk6ICggZm9jYWxQb2ludC55ICogMSApIH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVmlkZW8gVVJMXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdmlkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZpZCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJGb3IgY3JlYXRpbmcgYSB2aWRlbyBoZXJvLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJVc2UgV29yZFByZXNzIGNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJTZXR0aW5nIGEgY3VzdG9tIGNhcHRpb24gYmVsb3cgd2lsbCBvdmVycmlkZSBhbnkgV29yZFByZXNzIGNhcHRpb24uXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy51c2VfY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHVzZV9jYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2FwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJTZXQgYSBjYXB0aW9uIGZvciB0aGUgaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNyZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNyZWRpdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jcmVkaXQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU3BlY2lmeSBjcmVkaXQgZm9yIHRoZSBoZXJvIG1lZGlhLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0UmFuZ2VDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9tZW51LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1tZW51Jztcblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbmxldCBtZW51TmFtZXMgPSBmYWxzZTtcblxuY29uc3QgZ2V0TWVudU5hbWVzID0gKCkgPT4ge1xuXHRjb25zdCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdGlmICggeG1saHR0cC5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICkge1xuXHRcdFx0aWYgKCAyMDAgPT09IHhtbGh0dHAuc3RhdHVzICkge1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKCB4bWxodHRwLnJlc3BvbnNlVGV4dCApO1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gW107XG5cdFx0XHRcdGZvciAoIGNvbnN0IG0gb2YgcGFyc2VkICkge1xuXHRcdFx0XHRcdGxpc3QucHVzaCgge1xuXHRcdFx0XHRcdFx0bGFiZWw6IG0ubmFtZSxcblx0XHRcdFx0XHRcdHZhbHVlOiBtLm5hbWUsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1lbnVOYW1lcyA9IGxpc3Q7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdHhtbGh0dHAub3BlbiggJ0dFVCcsIFVSSV9DTF9TSVRFX1VSTCArICcvd3AtanNvbi91cmktY29tcG9uZW50LWxpYnJhcnkvdjEvbWVudXMnLCB0cnVlICk7XG5cdHhtbGh0dHAuc2VuZCgpO1xufTtcblxuZ2V0TWVudU5hbWVzKCk7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL21lbnUnLCB7XG5cblx0dGl0bGU6IF9fKCAnTWVudScgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgbWVudXMgd2hlbiB0aGUgc2FtZSBjb2xsZWN0aW9uIG9mIGxpbmtzIG11c3QgYXBwZWFyIG9uIG11bHRpcGxlIHBhZ2VzLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdG5hbWU6ICdtZW51MScsXG5cdFx0XHR0aXRsZTogX18oICdNYWluIE1lbnUnICksXG5cdFx0XHRzaG93dGl0bGU6IHRydWUsXG5cdFx0fSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZGVwdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMSxcblx0XHR9LFxuXHRcdHNob3d0aXRsZToge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Ly8gU2V0IHRoZSBjbGFzc25hbWVzXG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHRsZXQgbmFtZSA9ICcnO1xuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMubmFtZSApIHtcblx0XHRcdFx0bmFtZSA9ICc6ICcgKyBhdHRyaWJ1dGVzLm5hbWU7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy5uYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudGl0bGUgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50aXRsZTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHRpdGxlTWV0YSA9ICcnO1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLnNob3d0aXRsZSApIHtcblx0XHRcdFx0dGl0bGVNZXRhID0gPHNwYW4gY2xhc3NOYW1lPVwiY2wtbWVudS10b2dnbGVcIj57IHRpdGxlIH08L3NwYW4+O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1tZW51LWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdHsgdGl0bGVNZXRhIH1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtbWVudS1wbGFjZWhvbGRlclwiPk1lbnUgcGxhY2Vob2xkZXJ7IG5hbWUgfTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBpbnNwZWN0b3JDb250cm9scyA9IChcblx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXsgeyBwYWRkaW5nUmlnaHQ6ICc3cHgnIH0gfT48RGFzaGljb24gaWNvbj1cIndhcm5pbmdcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+VGhpcyBzaXRlIGhhcyBubyBtZW51cy4gIENyZWF0ZSBvbmUgdW5kZXIgdGhlIEFwcGVhcmFuY2UgdGFiLjwvZGl2PlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0KTtcblxuXHRcdGlmICggISEgbWVudU5hbWVzICkge1xuXHRcdFx0aW5zcGVjdG9yQ29udHJvbHMgPSAoXG5cdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZW51JyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uYW1lIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuYW1lICkgPT4gc2V0QXR0cmlidXRlcyggeyBuYW1lIH0gKSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbWVudU5hbWVzIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdJZiBubyB0aXRsZSBpcyBwcm92aWRlZCwgdGhlIG1lbnUgbmFtZSB3aWxsIGJlIHVzZWQuJyApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTaG93IHRpdGxlIG9uIGRlc2t0b3AnICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUaXRsZXMgYXJlIGFsd2F5cyBzaG93biBvbiBtb2JpbGUuJyApIH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd3RpdGxlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNob3d0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RlcHRoJyApIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMiB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGVwdGggKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRlcHRoIH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZXB0aCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHR7IGluc3BlY3RvckNvbnRyb2xzIH1cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL21ldHJpYy5zdmcnICkgfVxuXHRcdFx0YWx0PVwibWV0cmljXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtbWV0cmljJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbWV0cmljJywge1xuXG5cdHRpdGxlOiBfXyggJ01ldHJpYycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgbWV0cmljcyB0byBpbGx1c3RyYXRlIGEgZmFjdCB0aGF0IGlzIGNvbmNpc2UgYW5kIGVhc3kgdG8gY29uc3VtZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRtZXRyaWM6IF9fKCAnNDBLJyApLFxuXHRcdFx0Y2FwdGlvbjogX18oICdMZWFndWVzIHVuZGVyIHRoZSBzZWEnICksXG5cdFx0XHRzdHlsZTogJ2RhcmsnLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRtZXRyaWM6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1tZXRyaWMtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG1ldHJpYzogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWV0cmljIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJzEwMCUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dGFnbmFtZT1cInBcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdtZXRyaWNzIG9uIHRoaXMgcGFnZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdC8vIEB0b2RvOiB0ZWNobmljYWxseSwgeW91IGNhbiBoYXZlIGEgY2xlYXIgYW5kIGRhcmsgbWV0cmljXG5cdFx0Ly8gb3VyIGJ1dHRvbmdyb3VwIG9ubHkgYWxsb3dzIHVzZXJzIHRvIHNlbGVjdCBvbmVcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRyaWMgU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibWV0cmljLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdNZXRyaWMgU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnc3RhbmRhcmQnLCAnY2xlYXInLCAnZGFyaycsICdvdmVybGF5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0ga2V5ID09PSBhdHRyaWJ1dGVzLnN0eWxlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxuXHREYXRlUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvcGFyYWdyYXBoJyxcbl07XG5cbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIG5vdGljZSBjb250ZW50Li4uJywgZHJvcENhcDogZmFsc2UgfSBdLFxuXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL25vdGljZS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvbm90aWNlJywge1xuXHR0aXRsZTogX18oICdOb3RpY2UnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG5vdGljZXMgdG8gZGlzcGxheSBjb250ZW50IHRoYXQgaXMgcGFydGljdWxhcmx5IHVyZ2VudC4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdQbGVhc2UgTm90ZScgKSxcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbIHtcblx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnTm90aWNlcyBhcmUgbWVhbnQgdG8gYmUgdGVtcG9yYXJ5IGFuZCB0aW1lbHkgYW5kIHNob3VsZCBvbmx5IGJlIHVzZWQgdG8gY29tbXVuaWNhdGUgYW4gZXhjZXB0aW9uYWwgY29uZGl0aW9uLicgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0ZXhwaXJhdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzaG93X2V4cGlyZWQ6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0ZGlzbWlzc2libGU6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1ub3RpY2UnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IGV4cCA9IG5ldyBEYXRlKCBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gKTtcblx0XHRcdGxldCBleHBpcmF0aW9uTWVzc2FnZSA9ICcnO1xuXHRcdFx0bGV0IHN5bnRheCA9ICdhbmQgd2lsbCBub3QnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnNob3dfZXhwaXJlZCApIHtcblx0XHRcdFx0c3ludGF4ID0gJ2J1dCB3aWxsIHN0aWxsJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5leHBpcmF0aW9uICYmIGV4cC5nZXRUaW1lKCkgPD0gZGF0ZS5nZXRUaW1lKCkgKSB7XG5cdFx0XHRcdGV4cGlyYXRpb25NZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJjbC1jb21wb25lbnQtbWVzc2FnZVwiPlRoaXMgbm90aWNlIGhhcyBleHBpcmVkIHsgc3ludGF4IH0gYmUgdmlzaWJsZSB3aGVuIHB1Ymxpc2hlZC48L2Rpdj47XG5cdFx0XHR9XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHR7IGV4cGlyYXRpb25NZXNzYWdlIH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBub3RpY2UgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibm90aWNlLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICd1cmdlbnQnLCAnY292aWQxOScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJBbGxvdyB2aXNpdG9ycyB0byBkaXNtaXNzIHRoaXMgbm90aWNlXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5kaXNtaXNzaWJsZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRpc21pc3NpYmxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJFeHBpcmF0aW9uIGRhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnREYXRlPXsgYXR0cmlidXRlcy5leHBpcmF0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGF0ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZXhwaXJhdGlvbjogZGF0ZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyBhZnRlciBleHBpcmVkXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93X2V4cGlyZWQgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93X2V4cGlyZWQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0QnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J3VyaS1jbC9idXR0b24nLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL2hlYWRpbmcnLCB7IGxldmVsOiAxLCBwbGFjZWhvbGRlcjogJ015IFBhbmVsJyB9IF0sXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH0gXSxcblx0WyAndXJpLWNsL2J1dHRvbicsIHt9IF0sXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcGFuZWwuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gKCAnc3VwZXInID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJ2NsLXBhbmVsLXN1cGVyJyA6ICdjbC1wYW5lbCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMucmV2ZXJzZSApIHtcblx0XHRjbGFzc2VzICs9ICcgcmV2ZXJzZSc7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9wYW5lbCcsIHtcblxuXHR0aXRsZTogX18oICdQYW5lbCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgcGFuZWxzIHRvIHByb3ZpZGUgYSBkZWVwLCB2aXN1YWwgY29udGV4dCBmb3IgYSBwYXJ0aWN1bGFyIHRvcGljLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ0EgQml0IE1vcmUnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdFx0cmV2ZXJzZTogdHJ1ZSxcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbIHtcblx0XHRcdG5hbWU6ICdjb3JlL2hlYWRpbmcnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRsZXZlbDogMixcblx0XHRcdFx0Y29udGVudDogX18oICdPcHRpb25zJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnQSBwYW5lbCBpcyBkaWZmZXJlbnQgZnJvbSBhIGNhcmQgaW4gdGhhdCBhIHBhbmVsIG1heSBpbmNsdWRlIDxhIGhyZWY9XCIjXCI+bXVsdGlwbGUgbGlua3M8L2E+IG9yIGJ1dHRvbnMuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRyZXZlcnNlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEIHx8IGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcyApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50V3JhcHBlcjogJycgfSApO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0aWYgKCAnc3VwZXInID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItYmx1clwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWltYWdlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwicG9zdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdGb3JtYXQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RvIGluY3JlYXNlIHBlcmZvcm1hbmNlLCBzdXBlciBwYW5lbCBwcmV2aWV3cyB3aWxsIGFwcGVhciBzaW1wbGlmaWVkIGluIHRoZSBlZGl0b3Igd2luZG93LicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYW5lbC1mb3JtYXRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1BhbmVsIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3N1cGVyJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJycgOiBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZvcm1hdDoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZsaXAgcGFuZWwgbGF5b3V0XCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5yZXZlcnNlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcmV2ZXJzZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9wcm9tby5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcHJvbW8nLCB7XG5cblx0dGl0bGU6IF9fKCAnUHJvbW8nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHByb21vcyB0byBzaG93Y2FzZSB0aW1lbHkgbWFya2V0aW5nIGluZm9ybWF0aW9uLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ1RpdGxlJyApLFxuXHRcdFx0Ym9keTogX18oICdTb21lIGJvZHkgdGV4dCcgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlLmpwZycsXG5cdFx0fSxcblx0fSxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGlua3RleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGxldCBtZXRhO1xuXHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIHByb21vIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLXByb21vJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnbWljcm8nID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG1pY3JvJztcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLXByb21vLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLW1pY3JvLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBwcm9tbyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLW1pY3JvLXRleHQtbGlua1wiPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmt0ZXh0IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGxpbmsgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz57IG1ldGEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHN0eWxlID0gJ3N0eWxlLWJsdXInO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICYmICdkZWZhdWx0JyAhPT0gYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0c3R5bGUgPSAnc3R5bGUtJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZSA9ICdjbC1wcm9tby1iYWNrZHJvcCAnICsgc3R5bGU7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLXByb21vLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tYmFja2Ryb3Atd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHN0eWxlIH0+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8tY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8cD48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYm9keTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tdGV4dC1saW5rXCI+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbmt0ZXh0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGlua3RleHQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgbGluayB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWltZy13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWdcIj48c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWctbGlua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8tYmxvY2stZWRpdG9yLW1ldGFcIj57IG1ldGEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgc3R5bGVDb250cm9sO1xuXHRcdGlmICggJ21pY3JvJyAhPT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRzdHlsZUNvbnRyb2wgPSAoXG5cdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgcHJvbW8gcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0aWQ9XCJwcm9tby1zdHlsZVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1Byb21vIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdicmFuZCcsICdjb25mZXR0aScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwcm9tby1mb3JtYXRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ1Byb21vIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ21pY3JvJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGZvcm1hdCA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLmZvcm1hdCApID8gJycgOiBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZvcm1hdDoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdHsgc3R5bGVDb250cm9sIH1cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0QnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJycsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9xdW90ZS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtcXVvdGUnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NlcyArPSAnIG5vLWltYWdlJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcXVvdGUnLCB7XG5cblx0dGl0bGU6IF9fKCAnUXVvdGUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHF1b3RlcyB0byBjcmVhdGUgYSBibG9ja3F1b3RlIGVsZW1lbnQgdGhhdCBzdGFuZHMgb3V0IGZyb20gdGhlIHBhZ2UuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0cXVvdGU6IF9fKCAnT2NlYW4sIHdobyBpcyB0aGUgc291cmNlIG9mIGFsbC4nICksXG5cdFx0XHRjaXRhdGlvbjogX18oICdIb21lcicgKSxcblx0XHRcdG1lZGlhSUQ6IHRydWUsXG5cdFx0XHRpbWc6IFVSSV9DTF9VUkwgKyAnaS9leGFtcGxlX3NxdWFyZS5qcGcnLFxuXHRcdH0sXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHF1b3RlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNpdGF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblx0XHRjb25zdCBnZXRJbWFnZUJ1dHRvbiA9ICggb3BlbkV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzLm1lZGlhSUQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0YWx0PXsgYXR0cmlidXRlcy5hbHQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdGljb249eyAnZm9ybWF0LWltYWdlJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0XHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0FkZCBhbiBpbWFnZScsXG5cdFx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBhbiBpbWFnZSwgdXBsb2FkIGEgbmV3IG9uZSBvciBzZWxlY3QgYSBmaWxlIGZyb20geW91ciBsaWJyYXJ5LicgKSxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgaW1hZ2VDbGFzcyA9ICggISEgYXR0cmlidXRlcy5tZWRpYUlEICkgPyAnY2wtcXVvdGUtaW1hZ2UnIDogJyc7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGltYWdlQ2xhc3MgfT5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGJsb2NrcXVvdGU+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcXVvdGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnF1b3RlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RoZSBxdW90ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9ibG9ja3F1b3RlPlxuXHRcdFx0XHRcdFx0PGNpdGU+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2l0YXRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNpdGF0aW9uIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ0Fub255bW91cycgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9jaXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFJhbmdlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCd1cmktY2wvdGFiJyxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy90YWJzLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC10YWJzJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5jb25zdCBnZXRUYWJzVGVtcGxhdGUgPSAoIHRhYnMgKSA9PiB7XG5cdHJldHVybiBbIC4uLkFycmF5KCB0YWJzICkgXS5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBbICd1cmktY2wvdGFiJywge30gXTtcblx0fSApO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvdGFicycsIHtcblxuXHR0aXRsZTogX18oICdUYWJzJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSB0YWJzIHRvIGRpc3BsYXkgY29udGVudCB0aGF0IGhhcyBhIGNvcnJlbGF0aW9uIGJ1dCBpcyBub3QgZGlyZWN0bHkgcmVsYXRlZC4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0YWJzOiAyLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ3VyaS1jbC90YWInLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0dGl0bGU6ICdBcHBsZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF9fKCAnRWFjaCB0YWIgY2FuIGNvbnRhaW4gcGFyYWdyYXBocywgbGlua3MsIGFuZCBvdGhlciBjb21wb25lbnRzLicgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IF9fKCAnTW9yZSBhYm91dCBmcnVpdCcgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICd1cmktY2wvdGFiJyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdHRpdGxlOiAnT3JhbmdlcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogX18oICdUaGlzIHRhYiB3aWxsIGhhdmUgZGlmZmVyZW50IGluZm9ybWF0aW9uIHRoYW4gdGhlIGZpcnN0IHRhYiwgYnV0IHRoZSBpbmZvcm1hdGlvbiBzaG91bGQgY29ycmVsYXRlIHNvbWVob3cuJyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF9fKCAnT25seSBvbmUgdGFiIHdpbGwgYmUgdmlzaWJsZSBhdCBhIHRpbWUgb24gdGhlIGxpdmUgcGFnZS4nICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRhYnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMixcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMgKTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGFicycgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRhYnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0VGFicyApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFiczogbmV4dFRhYnMsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsgMiB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXsgNiB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IGdldFRhYnNUZW1wbGF0ZSggYXR0cmlidXRlcy50YWJzICkgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9XCJhbGxcIlxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaW1hZ2UnLFxuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJyxcblx0J3VyaS1jbC9jYXJkJyxcblx0J3VyaS1jbC9tZXRyaWMnLFxuXHQndXJpLWNsL3F1b3RlJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciB0YWIgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy90YWIuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3RhYicsIHtcblxuXHR0aXRsZTogX18oICdUYWInICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdHBhcmVudDogWyAndXJpLWNsL3RhYnMnIF0sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblxuXHRzdXBwb3J0czoge1xuXHRcdGluc2VydGVyOiBmYWxzZSxcblx0XHRyZXVzYWJsZTogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtdGFiXCI+XG5cdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnVGFiIFRpdGxlJyApIH1cblx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYWJzdHJhY3QvYmxvY2snO1xuaW1wb3J0ICcuL2JveG91dC9ibG9jayc7XG5pbXBvcnQgJy4vYnJlYWtvdXQvYmxvY2snO1xuaW1wb3J0ICcuL2J1dHRvbi9ibG9jayc7XG5pbXBvcnQgJy4vY2FyZC9ibG9jayc7XG5pbXBvcnQgJy4vZGF0ZS9ibG9jayc7XG5pbXBvcnQgJy4vaGVyby9ibG9jayc7XG5pbXBvcnQgJy4vbWVudS9ibG9jayc7XG5pbXBvcnQgJy4vbWV0cmljL2Jsb2NrJztcbmltcG9ydCAnLi9ub3RpY2UvYmxvY2snO1xuaW1wb3J0ICcuL3BhbmVsL2Jsb2NrJztcbmltcG9ydCAnLi9wcm9tby9ibG9jayc7XG5pbXBvcnQgJy4vcXVvdGUvYmxvY2snO1xuaW1wb3J0ICcuL3RhYnMvdGFiJztcbmltcG9ydCAnLi90YWJzL2Jsb2NrJztcbiJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3dwJGNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiRGFzaGljb24iLCJCdXR0b24iLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsIlRvb2xiYXIiLCJUb29sYmFyQnV0dG9uIiwid2l0aE5vdGljZXMiLCJCYXNlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uR3JvdXAiLCJGb2NhbFBvaW50UGlja2VyIiwiVG9nZ2xlQ29udHJvbCIsIkNvbG9yUGlja2VyIiwiX3dwJGJsb2NrRWRpdG9yIiwiYmxvY2tFZGl0b3IiLCJCbG9ja0NvbnRyb2xzIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0FsaWdubWVudFRvb2xiYXIiLCJNZWRpYVBsYWNlaG9sZGVyIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVVwbG9hZENoZWNrIiwiQWxpZ25tZW50VG9vbGJhciIsIlJpY2hUZXh0IiwiUGxhaW5UZXh0IiwiVVJMSW5wdXQiLCJBTExPV0VEX01FRElBX1RZUEVTIiwiY3VzdG9tSWNvbiIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJzcmMiLCJVUklfQ0xfVVJMIiwiYWx0IiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGUiLCJhdHRyaWJ1dGVzIiwiYm9keSIsImJ1dHRvbiIsIm1lZGlhSUQiLCJpbWciLCJ0eXBlIiwibGluayIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmdjb2xvcnBpY2tlciIsImJnY3NzIiwic3R5bGUiLCJpbnZlcnRfYTExeSIsImVkaXQiLCJfcmVmIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsImxhYmVscyIsImluc3RydWN0aW9ucyIsIm9uU2VsZWN0IiwibWVkaWEiLCJ1cmwiLCJpZCIsImFjY2VwdCIsImFsbG93ZWRUeXBlcyIsIm1ldGEiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY29udGVudCIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29udGVudEVkaXRGb3JtIiwiY2xhc3NlcyIsInJlbmRlciIsIl9yZWYyIiwib3BlbiIsImtlZXBQbGFjZWhvbGRlck9uRm9jdXMiLCJjcmVhdGVCbG9ja0NvbnRyb2xzIiwia2V5IiwibGFiZWwiLCJfcmVmMyIsIm9uQ2xpY2siLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsImhlbHAiLCJtYXAiLCJjYXBpdGFsaXplZFZhbHVlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImZvcm1hdCIsInVuZGVmaW5lZCIsInNlbGVjdGVkIiwiaXNTZWNvbmRhcnkiLCJpc1ByaW1hcnkiLCJjb2xvciIsIm9uQ2hhbmdlQ29tcGxldGUiLCJoZXgiLCJkaXNhYmxlQWxwaGEiLCJjaGVja2VkIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwiZHJvcENhcCIsImNsYXNzTmFtZXMiLCJmbG9hdCIsImlubmVyQmxvY2tzIiwibmFtZSIsInRleHQiLCJjb250ZW50V3JhcHBlciIsImFsbG93ZWRCbG9ja3MiLCJ0ZW1wbGF0ZSIsInNhdmUiLCJDb250ZW50IiwidXNlX2NvbnRlbnRfd2lkdGgiLCJJbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzIiwiYWxpZ25tZW50IiwidG9vbHRpcCIsImFyaWFsYWJlbCIsImNyZWF0ZUFyaWFMYWJlbEZpZWxkIiwiRXh0ZXJuYWxMaW5rIiwiVGV4dCIsInRhZ25hbWUiLCJjcmVhdGVTaWRlYmFyVGlwcyIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJEYXRlUGlja2VyIiwiZGF0ZSIsImNhcHRpb24iLCJzaG93X3llYXIiLCJEYXRlIiwibW9udGgiLCJ0b0xvY2FsZVN0cmluZyIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJleHBpcmF0aW9uTWVzc2FnZSIsImdldFRpbWUiLCJnZXREYXRlIiwiY3VycmVudERhdGUiLCJyYW5kb21JRCIsIlM0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaGVhZGxpbmUiLCJzdWJoZWFkIiwibWVkaWFIZWlnaHQiLCJtZWRpYVdpZHRoIiwidmlkIiwidXNlX2NhcHRpb24iLCJjcmVkaXQiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJwb3N0ZXIiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJjb25jYXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaW1lbnNpb25zIiwieCIsInkiLCJmb2NhbFBvaW50IiwiUmFuZ2VDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIm1lbnVOYW1lcyIsImdldE1lbnVOYW1lcyIsInhtbGh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwibGlzdCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJtIiwicHVzaCIsImVyciIsImUiLCJmIiwiVVJJX0NMX1NJVEVfVVJMIiwic2VuZCIsInNob3d0aXRsZSIsImRlcHRoIiwidGl0bGVNZXRhIiwiaW5zcGVjdG9yQ29udHJvbHMiLCJwYWRkaW5nUmlnaHQiLCJvcHRpb25zIiwibWF4IiwibWluIiwibWV0cmljIiwiZXhwaXJhdGlvbiIsInNob3dfZXhwaXJlZCIsImRpc21pc3NpYmxlIiwiZXhwIiwic3ludGF4IiwiX19uZXh0SGFzTm9NYXJnaW5Cb3R0b20iLCJsZXZlbCIsInJldmVyc2UiLCJfcmVmNCIsIl9yZWY1IiwibGlua3RleHQiLCJzdHlsZUNvbnRyb2wiLCJxdW90ZSIsImNpdGF0aW9uIiwiaW1hZ2VDbGFzcyIsImdldFRhYnNUZW1wbGF0ZSIsInRhYnMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm5leHRUYWJzIiwidGVtcGxhdGVMb2NrIiwicGFyZW50Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=