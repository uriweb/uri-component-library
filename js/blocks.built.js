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
      }, wp.element.createElement("h2", null, wp.element.createElement(PlainText, {
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

    //Generate doc link in sidebar
    var createSidebarTips = function createSidebarTips() {
      return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: "Documentation"
      }, wp.element.createElement(PanelRow, null, wp.element.createElement(ExternalLink, {
        href: "https://www.uri.edu/wordpress/components/cards/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Tips for Using Cards"))));
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
    return [createSidebarTips(), createBlockControls(), createInspectorControls(), createContentEditForm()];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNGO0FBQ0U7QUFDRjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNEO0FBQ0E7QUFDQTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9hYnN0cmFjdC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2JveG91dC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2JyZWFrb3V0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYnV0dG9uL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvY2FyZC9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2RhdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9oZXJvL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvbWVudS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL21ldHJpYy9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL25vdGljZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3BhbmVsL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvcHJvbW8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9xdW90ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3RhYnMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy90YWJzL3RhYi5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9ibG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdENvbG9yUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9hYnN0cmFjdC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYWJzdHJhY3QnLCB7XG5cblx0dGl0bGU6IF9fKCAnQWJzdHJhY3QnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGFic3RyYWN0cyB0byBpbnRyb2R1Y2UgY29udGVudCBpbiBhIHZpc3VhbCBtYW5ub3IsIGVzcGVjaWFsbHkgd2hlbiBzdWl0YWJsZSBwaG90b2dyYXBoeSBpcyBub3QgYXZhaWxhYmxlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiBfXyggJ0EgZ3JhbmQgdmlzaW9uJyApLFxuXHRcdFx0Ym9keTogX18oICdTZXQgdGhlIGdyb3VuZHdvcmsgZm9yIHRoZSBzdG9yeSwgYW5kIGVudGljZSByZWFkZXJzIHRvIGV4cGxvcmUgZnVsbHkuJyApLFxuXHRcdFx0YnV0dG9uOiBfXyggJ0NvbnRpbnVlJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bGluazoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRhbHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJyMwMDIxNDcnLFxuXHRcdH0sXG5cdFx0Ymdjb2xvcnBpY2tlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnIzFiNWRhOScsXG5cdFx0fSxcblx0XHRiZ2Nzczoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnYmFycycsXG5cdFx0fSxcblx0XHRpbnZlcnRfYTExeToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBhYnN0cmFjdCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1hYnN0cmFjdCc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMuYmFja2dyb3VuZCA9IGF0dHJpYnV0ZXMuYmdjb2xvcnBpY2tlcjtcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5iZ2NzcyApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5iYWNrZ3JvdW5kID0gYXR0cmlidXRlcy5iZ2Nzcztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtYWJzdHJhY3QtYmxvY2stZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHN0eWxlPXsgeyBiYWNrZ3JvdW5kOiBhdHRyaWJ1dGVzLmJhY2tncm91bmQgfSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1iYWNrZHJvcC1wcmV2aWV3XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWFic3RyYWN0LXByb3BlciBoYXMtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1pbWdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYWJzdHJhY3QgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD48UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBhYnN0cmFjdCB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1idXR0b25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBidXR0b246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYnV0dG9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgYWJzdHJhY3QgcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiYWJzdHJhY3QtZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdBYnN0cmFjdCBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnYmFycycsICdkaXNjcycsICdsYXR0aWNlJywgJ2hvbmV5Y29tYicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5zdHlsZSApID8gJycgOiBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdCYWNrZ3JvdW5kIENvbG9yJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImFic3RyYWN0LWJhY2tncm91bmRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PENvbG9yUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj17IGF0dHJpYnV0ZXMuYmdjb2xvcnBpY2tlciB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZUNvbXBsZXRlPXsgKCB2YWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgYmdjb2xvcnBpY2tlcjogdmFsdWUuaGV4IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlQWxwaGFcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkN1c3RvbSBCYWNrZ3JvdW5kIENTU1wiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJnY3NzOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJnY3NzIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgQ1NTIHZhbHVlIGZvciB0aGUgYmFja2dyb3VuZCBjb2xvciAob3ZlcnJpZGVzIHRoZSBjb2xvciBwaWNrZXIgc2V0dGluZykuXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkludmVydCBhY2Nlc3NpYmlsaXR5IGNvbnRyb2xzXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiVXNlIHdoaXRlIGZvcmVncm91bmQgb24gZGFyayBiYWNrZ3JvdW5kLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaW52ZXJ0X2ExMXkgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBpbnZlcnRfYTExeTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLCAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYm94b3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYm94b3V0LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1ib3hvdXQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYm94b3V0Jywge1xuXG5cdHRpdGxlOiBfXyggJ0JveG91dCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYm94b3V0cyB0byBjb250YWluIHRleHQgdGhhdCBpcyBhbmNpbGxhcnkgdG8gdGhlIHBhZ2XigJlzIGNvbnRlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnU2lkZSBub3RlJyApLFxuXHRcdH0sXG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdCb3hvdXQgY29udGVudCBzdXBwb3J0cyB0aGUgcmVzdCBvZiB0aGUgcGFnZeKAmXMgbWVzc2FnZSB3aXRob3V0IGJlaW5nIGRpcmVjdGx5IHJlbGF0ZWQuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmbG9hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjb250ZW50V3JhcHBlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGgyPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdC8+PC9oMj5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJ1dHRvbixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2NrcywgLy8gQHRvZG86IGFsbG93IG5lc3RlZCBibG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9pbWFnZScsXG5cdCdjb3JlL2hlYWRpbmcnLFxuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXHQnY29yZS9saXN0Jyxcblx0J2NvcmUvY29sdW1ucycsXG5cdCd1cmktY2wvYnV0dG9uJyxcblx0J3VyaS1jbC9ib3hvdXQnLFxuXHQndXJpLWNsL2NhcmQnLFxuXHQndXJpLWNsL2RhdGUnLFxuXHQndXJpLWNsL2hlcm8nLFxuXHQndXJpLWNsL21ldHJpYycsXG5cdCd1cmktY2wvcXVvdGUnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICdZb3VyIGJyZWFrb3V0IGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnJlYWtvdXQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJyZWFrb3V0Jztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnVzZV9jb250ZW50X3dpZHRoICkge1xuXHRcdGNsYXNzZXMgKz0gJyB1c2UtY29udGVudC13aWR0aCc7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9icmVha291dCcsIHtcblxuXHR0aXRsZTogX18oICdCcmVha291dCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYnJlYWtvdXRzIHRvIGNyZWF0ZSB2aXN1YWxseSBkaXN0aW5jdCBzZWN0aW9ucyBvciBmdWxsLXdpZHRoIGxheW91dHMuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0aW5uZXJCbG9ja3M6IFsge1xuXHRcdFx0bmFtZTogJ2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudDogX18oICdCcmVha291dHMgY29udGVudCBjYW4gYmUgdGhlIHNhbWUgd2lkdGggYXMgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgY29udGVudCwgb3IgaXQgY2FuIGV4cGFuZCBiZXlvbmQgaXQuJyApLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICd1cmktY2wvYnV0dG9uJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0dGV4dDogX18oICdMZWFybiBNb3JlJyApLFxuXHRcdFx0fSxcblx0XHR9IF0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR1c2VfY29udGVudF93aWR0aDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXcmFwcGVyOiAnJyB9ICk7XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoIHRydWUgPT09IGF0dHJpYnV0ZXMudXNlX2NvbnRlbnRfd2lkdGggKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IFRFTVBMQVRFIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIGNvbnRlbnQgd2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnVzZV9jb250ZW50X3dpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdXNlX2NvbnRlbnRfd2lkdGg6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRVUkxJbnB1dCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvYnV0dG9uLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1idXR0b24nO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuYWxpZ25tZW50ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvYnV0dG9uJywge1xuXG5cdHRpdGxlOiBfXyggJ0J1dHRvbicgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYnV0dG9ucyB0byBhdHRyYWN0IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBjYWxsIHRvIGFjdGlvbiBvbiBhIHBhZ2UuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGV4dDogX18oICdFeHBsb3JlJyApLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBidXR0b24gaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IG1ldGE7XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdG1ldGEgPSAoXG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyAoIGV2ZW50ICkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCB0aXRsZT1cIkxpbmtzIHRvOlwiPjxEYXNoaWNvbiBpY29uPVwiYWRtaW4tbGlua3NcIiAvPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGluazogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0b29sdGlwXG5cdFx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy50b29sdGlwICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudG9vbHRpcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWJ1dHRvbi1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cblx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBidXR0b24gdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2wtYnV0dG9uXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdHsgbWV0YSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Ly8gQHRvZG86IGRvIHdlIG5lZWQgYWxpZ25tZW50L2Zsb2F0IGNvbnRyb2xzIG9uIGJ1dHRvbnM/XG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYWxpZ25tZW50OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJidXR0b24tc3R5bGVcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGFyaWEtbGFiZWw9eyBfXyggJ0J1dHRvbiBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ3Byb21pbmVudCcsICdkaXNhYmxlZCcgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHRUZXh0LFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvY2FyZC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtY2FyZCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NlcyArPSAnIG5vLWltYWdlJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvY2FyZCcsIHtcblxuXHR0aXRsZTogX18oICdDYXJkJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBjYXJkcyB0byBleHBsYWluIGFuZCBsaW5rIHRvIGEgc2luZ2xlIGlkZWEuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnT25lIGlkZWEnICksXG5cdFx0XHRib2R5OiBfXyggJ1NpbmNlIHRoZSBlbnRpcmUgY2FyZCBtdXN0IGJlIGEgc2luZ2xlIGxpbmssIGl04oCZcyBwZXJmZWN0IGZvciBsaW5raW5nIHRvIGJyb2FkIHRvcGljcyB3aGVyZSB5b3UgbmVlZCBtb3JlIHdvcmRzIG9yIGEgcGhvdG8gdG8gZGVzY3JpYmUgdGhlIGxpbmtlZCByZXNvdXJjZS4nICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdFx0YnV0dG9uOiBfXyggJ0xlYXJuIE1vcmUnICksXG5cdFx0fSxcblx0fSxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtY2FyZC1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIG1lZGlhXCI+XG5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC1jb250YWluZXIgdGV4dFwiPlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGNhcmQgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC1jb250YWluZXIgYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYnV0dG9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vR2VuZXJhdGUgZG9jIGxpbmsgaW4gc2lkZWJhclxuXHRcdGNvbnN0IGNyZWF0ZVNpZGViYXJUaXBzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9XCJEb2N1bWVudGF0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LnVyaS5lZHUvd29yZHByZXNzL2NvbXBvbmVudHMvY2FyZHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFRpcHMgZm9yIFVzaW5nIENhcmRzXG5cdFx0XHRcdFx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlU2lkZWJhclRpcHMoKSxcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRUb2dnbGVDb250cm9sLFxuXHREYXRlUGlja2VyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9kYXRlLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJkYXRlXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtZGF0ZSc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5jb2xvciApIHtcblx0XHRjbGFzc2VzICs9ICcgY2wtZGF0ZS0nICsgYXR0cmlidXRlcy5jb2xvcjtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuZmxvYXQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZsb2F0O1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvZGF0ZScsIHtcblxuXHR0aXRsZTogX18oICdEYXRlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBkYXRlcyB0byBkaXNwbGF5IGEgZG93bmxvYWRhYmxlIGNhbGVuZGFyIGV2ZW50LicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGRhdGU6IF9fKCAnSnVseSAyOCwgMjA2MScgKSxcblx0XHRcdGNhcHRpb246IF9fKCAnSGFsbGV54oCZcyBDb21ldCByZWFjaGVzIHBlcmloZWxpb24nICksXG5cdFx0fSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0ZGF0ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHNob3dfeWVhcjoge1xuXHRcdFx0dHlwZTogJ2Jvb2wnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5kYXRlICkge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGRhdGU6IG5ldyBEYXRlKCkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoIGF0dHJpYnV0ZXMuZGF0ZSApO1xuXG5cdFx0XHRsZXQgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCAnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9ICk7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc2hvd195ZWFyICkge1xuXHRcdFx0XHRtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoICdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JyB9ICkgKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgZXhwaXJhdGlvbk1lc3NhZ2UgPSAnJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5kYXRlICYmIGRhdGUuZ2V0VGltZSgpIDw9IHRvZGF5LmdldFRpbWUoKSApIHtcblx0XHRcdFx0ZXhwaXJhdGlvbk1lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImNsLWNvbXBvbmVudC1tZXNzYWdlXCI+VGhpcyBkYXRlIG1heSBubyBsb25nZXIgYmUgcmVsZXZhbnQuPC9kaXY+O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHsgZXhwaXJhdGlvbk1lc3NhZ2UgfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1tb250aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtb250aCB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWRheVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBkYXRlLmdldERhdGUoKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY2FwdGlvbi13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jYXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGRhdGUgY2FwdGlvbicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RhdGUgQ29sb3InICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiZGF0ZS1jb2xvclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnRGF0ZSBDb2xvcicgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdibHVlJywgJ3JlZCcsICdncmV5JyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdibHVlJyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuY29sb3IgKSA/ICcnIDogYXR0cmlidXRlcy5jb2xvcjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gY29sb3IgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY29sb3I6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZT17IGF0dHJpYnV0ZXMuZGF0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRhdGUgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgeWVhclwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd195ZWFyIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd195ZWFyOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRCdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbkdyb3VwLFxuXHRGb2NhbFBvaW50UGlja2VyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9jay1saWJyYXJ5L3NyY1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9oZXJvLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCByYW5kb21JRCA9ICgpID0+IHtcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg2MDg1My9nZW5lcmF0ZS1yYW5kb20tc3RyaW5nLWZvci1kaXYtaWRcblx0Y29uc3QgUzQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICggKCAoIDEgKyBNYXRoLnJhbmRvbSgpICkgKiAweDEwMDAwICkgfCAwICkudG9TdHJpbmcoIDE2ICkuc3Vic3RyaW5nKCAxICk7XG5cdH07XG5cdHJldHVybiAoIFM0KCkgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArIFM0KCkgKyBTNCgpICk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9oZXJvJywge1xuXG5cdHRpdGxlOiBfXyggJ0hlcm8nICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGhlcm9lcyB0byBlbmdhZ2Ugd2l0aCB0aGUgdmlzaXRvciBhbmQgY3JlYXRlIHRoZSBzZW5zZSBvZiBkZXNpcmUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aGVhZGxpbmU6IF9fKCAnQXNwaXJhdGlvbmFsJyApLFxuXHRcdFx0c3ViaGVhZDogX18oICdIZXJvZXMgYWx3YXlzIGFyZS4nICksXG5cdFx0XHRidXR0b246IF9fKCAnQmUgb25lJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdGZvcm1hdDogJ3N1cGVyJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIFRoZSBtZWRpYUlEIGlzIHdoYXQgZ29lcyBpbnRvIHRoZSBzaG9ydGNvZGUgZm9yIGZyb250LWVuZCBkaXNwbGF5XG5cdC8vIHRoZSBpbWcgYW5kIGFsdCBhcmUgZm9yIGVkaXRvciBwbGFjZWhvbGRlcnNcblx0Ly8gdGhlIG1lZGlhSGVpZ2h0IGFuZCBtZWRpYVdpZHRoIGFyZSBmb3IgdGhlIGZvY2FsIHBvaW50IHBpY2tlciBjb21wb25lbnRcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aGVhZGxpbmU6IHsgLy8gRGVwcmljYXRlZCBpbiB2NS4xLCB1c2UgXCJ0aXRsZVwiIGluc3RlYWRcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3ViaGVhZDogeyAvLyBEZXByaWNhdGVkIGluIHY1LjEsIHVzZSBcImJvZHlcIiBpbnN0ZWFkXG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRtZWRpYUhlaWdodDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRtZWRpYVdpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHZpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHVzZV9jYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0fSxcblx0XHRjYXB0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNyZWRpdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRwb3NpdGlvblg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0cG9zaXRpb25ZOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGludmVydF9hMTF5OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0bWVkaWFIZWlnaHQ6IG1lZGlhLmhlaWdodCxcblx0XHRcdFx0XHRcdFx0bWVkaWFXaWR0aDogbWVkaWEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvblk6IDAuNSxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgaGVybyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5pZCApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5pZCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBhdHRyaWJ1dGVzLnRpdGxlICYmICEhIGF0dHJpYnV0ZXMuaGVhZGxpbmUgKSB7IC8vIFwiaGVhZGxpbmVcIiBkZXByaWNhdGVkIGluIHY1LjEsIHVzZSBcInRpdGxlXCIgaW5zdGVhZFxuXHRcdFx0XHRhdHRyaWJ1dGVzLnRpdGxlID0gYXR0cmlidXRlcy5oZWFkbGluZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMuYm9keSAmJiAhISBhdHRyaWJ1dGVzLnN1YmhlYWQgKSB7IC8vIFwic3ViaGVhZFwiIGRlcHJpY2F0ZWQgaW4gdjUuMSwgdXNlIFwiYm9keVwiIGluc3RlYWRcblx0XHRcdFx0YXR0cmlidXRlcy5ib2R5ID0gYXR0cmlidXRlcy5zdWJoZWFkO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1oZXJvJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMubGluayApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIGhhcy1saW5rJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1saW5rJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5ib2R5IHx8ICEhIGF0dHJpYnV0ZXMuc3ViaGVhZCApIHsgLy8gXCJzdWJoZWFkXCIgZGVwcmljYXRlZCBpbiB2NS4xLCB1c2UgXCJib2R5XCIgaW5zdGVhZFxuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLXN1YmhlYWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLXN1YmhlYWQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHN0eWxlID0ge307XG5cdFx0XHRsZXQgcG9zdGVyID0gJ3Bvc3Rlcic7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWltYWdlJztcblx0XHRcdFx0cG9zdGVyID0gJ3N0aWxsJztcblx0XHRcdFx0c3R5bGUgPSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBgJHsgYXR0cmlidXRlcy5wb3NpdGlvblggKiAxMDAgfSUgJHsgYXR0cmlidXRlcy5wb3NpdGlvblkgKiAxMDAgfSVgLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgkeyBhdHRyaWJ1dGVzLmltZyB9KWAsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8taW1hZ2UnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtaGVyby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1oZXJvLXByb3BlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IHBvc3RlciB9IHN0eWxlPXsgc3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tdGV4dCBvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGhlcm8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWJoZWFkXCI+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyBzdWJ0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3ViaGVhZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLWJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ1dHRvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5idXR0b24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUhlaWdodDogbWVkaWEuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhV2lkdGg6IG1lZGlhLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uWTogMC41LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJoZXJvLWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnSGVybyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdmdWxsd2lkdGgnLCAnc3VwZXInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkgPyAnJyA6IGF0dHJpYnV0ZXMuZm9ybWF0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZm9ybWF0OiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8Rm9jYWxQb2ludFBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdHVybD17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zPXsgeyB3aWR0aDogYXR0cmlidXRlcy5tZWRpYVdpZHRoLCBoZWlnaHQ6IGF0dHJpYnV0ZXMubWVkaWFIZWlnaHQgfSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB7IHg6IGF0dHJpYnV0ZXMucG9zaXRpb25YLCB5OiBhdHRyaWJ1dGVzLnBvc2l0aW9uWSB9IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZm9jYWxQb2ludCApID0+IHNldEF0dHJpYnV0ZXMoIHsgcG9zaXRpb25YOiAoIGZvY2FsUG9pbnQueCAqIDEgKSwgcG9zaXRpb25ZOiAoIGZvY2FsUG9pbnQueSAqIDEgKSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZpZGVvIFVSTFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHZpZDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52aWQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiRm9yIGNyZWF0aW5nIGEgdmlkZW8gaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXNlIFdvcmRQcmVzcyBjYXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0dGluZyBhIGN1c3RvbSBjYXB0aW9uIGJlbG93IHdpbGwgb3ZlcnJpZGUgYW55IFdvcmRQcmVzcyBjYXB0aW9uLlwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMudXNlX2NhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB1c2VfY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU2V0IGEgY2FwdGlvbiBmb3IgdGhlIGhlcm8uXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDcmVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjcmVkaXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY3JlZGl0IH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkIHZpZFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNwZWNpZnkgY3JlZGl0IGZvciB0aGUgaGVybyBtZWRpYS5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2wgdGlwXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdG9vbHRpcDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50b29sdGlwIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFJhbmdlQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbWVudS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtbWVudSc7XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5sZXQgbWVudU5hbWVzID0gZmFsc2U7XG5cbmNvbnN0IGdldE1lbnVOYW1lcyA9ICgpID0+IHtcblx0Y29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcblx0XHRpZiAoIHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSApIHtcblx0XHRcdGlmICggMjAwID09PSB4bWxodHRwLnN0YXR1cyApIHtcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSggeG1saHR0cC5yZXNwb25zZVRleHQgKTtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IFtdO1xuXHRcdFx0XHRmb3IgKCBjb25zdCBtIG9mIHBhcnNlZCApIHtcblx0XHRcdFx0XHRsaXN0LnB1c2goIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBtLm5hbWUsXG5cdFx0XHRcdFx0XHR2YWx1ZTogbS5uYW1lLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtZW51TmFtZXMgPSBsaXN0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHR4bWxodHRwLm9wZW4oICdHRVQnLCBVUklfQ0xfU0lURV9VUkwgKyAnL3dwLWpzb24vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3YxL21lbnVzJywgdHJ1ZSApO1xuXHR4bWxodHRwLnNlbmQoKTtcbn07XG5cbmdldE1lbnVOYW1lcygpO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9tZW51Jywge1xuXG5cdHRpdGxlOiBfXyggJ01lbnUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG1lbnVzIHdoZW4gdGhlIHNhbWUgY29sbGVjdGlvbiBvZiBsaW5rcyBtdXN0IGFwcGVhciBvbiBtdWx0aXBsZSBwYWdlcy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRuYW1lOiAnbWVudTEnLFxuXHRcdFx0dGl0bGU6IF9fKCAnTWFpbiBNZW51JyApLFxuXHRcdFx0c2hvd3RpdGxlOiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGRlcHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0XHRzaG93dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYnV0dG9uIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0bGV0IG5hbWUgPSAnJztcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLm5hbWUgKSB7XG5cdFx0XHRcdG5hbWUgPSAnOiAnICsgYXR0cmlidXRlcy5uYW1lO1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMubmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRpdGxlICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0aXRsZU1ldGEgPSAnJztcblx0XHRcdGlmICggYXR0cmlidXRlcy5zaG93dGl0bGUgKSB7XG5cdFx0XHRcdHRpdGxlTWV0YSA9IDxzcGFuIGNsYXNzTmFtZT1cImNsLW1lbnUtdG9nZ2xlXCI+eyB0aXRsZSB9PC9zcGFuPjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWVudS1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHR7IHRpdGxlTWV0YSB9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLW1lbnUtcGxhY2Vob2xkZXJcIj5NZW51IHBsYWNlaG9sZGVyeyBuYW1lIH08L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgaW5zcGVjdG9yQ29udHJvbHMgPSAoXG5cdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17IHsgcGFkZGluZ1JpZ2h0OiAnN3B4JyB9IH0+PERhc2hpY29uIGljb249XCJ3YXJuaW5nXCIgLz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlRoaXMgc2l0ZSBoYXMgbm8gbWVudXMuICBDcmVhdGUgb25lIHVuZGVyIHRoZSBBcHBlYXJhbmNlIHRhYi48L2Rpdj5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdCk7XG5cblx0XHRpZiAoICEhIG1lbnVOYW1lcyApIHtcblx0XHRcdGluc3BlY3RvckNvbnRyb2xzID0gKFxuXHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWVudScgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmFtZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgbmFtZSB9ICkgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1lbnVOYW1lcyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnSWYgbm8gdGl0bGUgaXMgcHJvdmlkZWQsIHRoZSBtZW51IG5hbWUgd2lsbCBiZSB1c2VkLicgKSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyB0aXRsZSBvbiBkZXNrdG9wJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVGl0bGVzIGFyZSBhbHdheXMgc2hvd24gb24gbW9iaWxlLicgKSB9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnNob3d0aXRsZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93dGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdEZXB0aCcgKSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDIgfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRlcHRoICkgPT4gc2V0QXR0cmlidXRlcyggeyBkZXB0aCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVwdGggfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0eyBpbnNwZWN0b3JDb250cm9scyB9XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9tZXRyaWMuc3ZnJyApIH1cblx0XHRcdGFsdD1cIm1ldHJpY1wiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLW1ldHJpYyc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL21ldHJpYycsIHtcblxuXHR0aXRsZTogX18oICdNZXRyaWMnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG1ldHJpY3MgdG8gaWxsdXN0cmF0ZSBhIGZhY3QgdGhhdCBpcyBjb25jaXNlIGFuZCBlYXN5IHRvIGNvbnN1bWUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bWV0cmljOiBfXyggJzQwSycgKSxcblx0XHRcdGNhcHRpb246IF9fKCAnTGVhZ3VlcyB1bmRlciB0aGUgc2VhJyApLFxuXHRcdFx0c3R5bGU6ICdkYXJrJyxcblx0XHR9LFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bWV0cmljOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWV0cmljLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBtZXRyaWM6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1ldHJpYyB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICcxMDAlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHRhZ25hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnbWV0cmljcyBvbiB0aGlzIHBhZ2UnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHQvLyBAdG9kbzogdGVjaG5pY2FsbHksIHlvdSBjYW4gaGF2ZSBhIGNsZWFyIGFuZCBkYXJrIG1ldHJpY1xuXHRcdC8vIG91ciBidXR0b25ncm91cCBvbmx5IGFsbG93cyB1c2VycyB0byBzZWxlY3Qgb25lXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0cmljIFN0eWxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cIm1ldHJpYy1zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnTWV0cmljIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ3N0YW5kYXJkJywgJ2NsZWFyJywgJ2RhcmsnLCAnb3ZlcmxheScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcblx0RGF0ZVBpY2tlcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5dO1xuXG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBub3RpY2UgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9ub3RpY2Uuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL25vdGljZScsIHtcblx0dGl0bGU6IF9fKCAnTm90aWNlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBub3RpY2VzIHRvIGRpc3BsYXkgY29udGVudCB0aGF0IGlzIHBhcnRpY3VsYXJseSB1cmdlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnUGxlYXNlIE5vdGUnICksXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ05vdGljZXMgYXJlIG1lYW50IHRvIGJlIHRlbXBvcmFyeSBhbmQgdGltZWx5IGFuZCBzaG91bGQgb25seSBiZSB1c2VkIHRvIGNvbW11bmljYXRlIGFuIGV4Y2VwdGlvbmFsIGNvbmRpdGlvbi4nICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdGV4cGlyYXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c2hvd19leHBpcmVkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdGRpc21pc3NpYmxlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1ub3RpY2UnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IGV4cCA9IG5ldyBEYXRlKCBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gKTtcblx0XHRcdGxldCBleHBpcmF0aW9uTWVzc2FnZSA9ICcnO1xuXHRcdFx0bGV0IHN5bnRheCA9ICdhbmQgd2lsbCBub3QnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnNob3dfZXhwaXJlZCApIHtcblx0XHRcdFx0c3ludGF4ID0gJ2J1dCB3aWxsIHN0aWxsJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5leHBpcmF0aW9uICYmIGV4cC5nZXRUaW1lKCkgPD0gZGF0ZS5nZXRUaW1lKCkgKSB7XG5cdFx0XHRcdGV4cGlyYXRpb25NZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJjbC1jb21wb25lbnQtbWVzc2FnZVwiPlRoaXMgbm90aWNlIGhhcyBleHBpcmVkIHsgc3ludGF4IH0gYmUgdmlzaWJsZSB3aGVuIHB1Ymxpc2hlZC48L2Rpdj47XG5cdFx0XHR9XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHR7IGV4cGlyYXRpb25NZXNzYWdlIH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBub3RpY2UgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibm90aWNlLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICd1cmdlbnQnLCAnY292aWQxOScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQWxsb3cgdmlzaXRvcnMgdG8gZGlzbWlzcyB0aGlzIG5vdGljZVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuZGlzbWlzc2libGUgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBkaXNtaXNzaWJsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8RGF0ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRXhwaXJhdGlvbiBkYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZT17IGF0dHJpYnV0ZXMuZXhwaXJhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGV4cGlyYXRpb246IGRhdGUgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgYWZ0ZXIgZXhwaXJlZFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd19leHBpcmVkIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd19leHBpcmVkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdEJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9oZWFkaW5nJywgeyBsZXZlbDogMSwgcGxhY2Vob2xkZXI6ICdNeSBQYW5lbCcgfSBdLFxuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5cdFsgJ3VyaS1jbC9idXR0b24nLCB7fSBdLFxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3BhbmVsLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICggJ3N1cGVyJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICdjbC1wYW5lbC1zdXBlcicgOiAnY2wtcGFuZWwnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnJldmVyc2UgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHJldmVyc2UnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcGFuZWwnLCB7XG5cblx0dGl0bGU6IF9fKCAnUGFuZWwnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHBhbmVscyB0byBwcm92aWRlIGEgZGVlcCwgdmlzdWFsIGNvbnRleHQgZm9yIGEgcGFydGljdWxhciB0b3BpYy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdBIEJpdCBNb3JlJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdHJldmVyc2U6IHRydWUsXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9oZWFkaW5nJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0bGV2ZWw6IDIsXG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnT3B0aW9ucycgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ0EgcGFuZWwgaXMgZGlmZmVyZW50IGZyb20gYSBjYXJkIGluIHRoYXQgYSBwYW5lbCBtYXkgaW5jbHVkZSA8YSBocmVmPVwiI1wiPm11bHRpcGxlIGxpbmtzPC9hPiBvciBidXR0b25zLicgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHRleHQ6IF9fKCAnTGVhcm4gTW9yZScgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cmV2ZXJzZToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGNvbnRlbnRXcmFwcGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCB8fCBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMgKTtcblxuXHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGlmICggJ3N1cGVyJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWJsdXJcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1pbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvc3RlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgc3VwZXIgcGFuZWwgcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicGFuZWwtZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQYW5lbCBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdzdXBlcicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGbGlwIHBhbmVsIGxheW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMucmV2ZXJzZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHJldmVyc2U6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0QnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0Rm9jYWxQb2ludFBpY2tlcixcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcHJvbW8uc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3Byb21vJywge1xuXG5cdHRpdGxlOiBfXyggJ1Byb21vJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBwcm9tb3MgdG8gc2hvd2Nhc2UgdGltZWx5IG1hcmtldGluZyBpbmZvcm1hdGlvbi4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdUaXRsZScgKSxcblx0XHRcdGJvZHk6IF9fKCAnU29tZSBib2R5IHRleHQnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbmt0ZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBwcm9tbyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1wcm9tbyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ21pY3JvJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBtaWNybyc7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1wcm9tby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1taWNyby1jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1taWNyby10ZXh0LWxpbmtcIj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGlua3RleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rdGV4dCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBsaW5rIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+eyBtZXRhIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzdHlsZSA9ICdzdHlsZS1ibHVyJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSAmJiAnZGVmYXVsdCcgIT09IGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdHN0eWxlID0gJ3N0eWxlLScgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGUgPSAnY2wtcHJvbW8tYmFja2Ryb3AgJyArIHN0eWxlO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1wcm9tby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWJhY2tkcm9wLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBzdHlsZSB9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PHA+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLXRleHQtbGlua1wiPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmt0ZXh0IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGxpbmsgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWctd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nXCI+PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nLWxpbmtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLWJsb2NrLWVkaXRvci1tZXRhXCI+eyBtZXRhIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IHN0eWxlQ29udHJvbDtcblx0XHRpZiAoICdtaWNybycgIT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0c3R5bGVDb250cm9sID0gKFxuXHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UsIHByb21vIHByZXZpZXdzIHdpbGwgYXBwZWFyIHNpbXBsaWZpZWQgaW4gdGhlIGVkaXRvciB3aW5kb3cuJyApIH1cblx0XHRcdFx0XHRcdGlkPVwicHJvbW8tc3R5bGVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQcm9tbyBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnYnJhbmQnLCAnY29uZmV0dGknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdGb3JtYXQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvbW8tZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQcm9tbyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdtaWNybycgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHR7IHN0eWxlQ29udHJvbCB9XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdEJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcXVvdGUuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLXF1b3RlJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3F1b3RlJywge1xuXG5cdHRpdGxlOiBfXyggJ1F1b3RlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBxdW90ZXMgdG8gY3JlYXRlIGEgYmxvY2txdW90ZSBlbGVtZW50IHRoYXQgc3RhbmRzIG91dCBmcm9tIHRoZSBwYWdlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHF1b3RlOiBfXyggJ09jZWFuLCB3aG8gaXMgdGhlIHNvdXJjZSBvZiBhbGwuJyApLFxuXHRcdFx0Y2l0YXRpb246IF9fKCAnSG9tZXInICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZV9zcXVhcmUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRxdW90ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjaXRhdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGltYWdlQ2xhc3MgPSAoICEhIGF0dHJpYnV0ZXMubWVkaWFJRCApID8gJ2NsLXF1b3RlLWltYWdlJyA6ICcnO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBpbWFnZUNsYXNzIH0+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxibG9ja3F1b3RlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHF1b3RlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5xdW90ZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaGUgcXVvdGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvYmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdDxjaXRlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNpdGF0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jaXRhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdBbm9ueW1vdXMnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvY2l0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQndXJpLWNsL3RhYicsXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFicy5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtdGFicyc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxuY29uc3QgZ2V0VGFic1RlbXBsYXRlID0gKCB0YWJzICkgPT4ge1xuXHRyZXR1cm4gWyAuLi5BcnJheSggdGFicyApIF0ubWFwKCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gWyAndXJpLWNsL3RhYicsIHt9IF07XG5cdH0gKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3RhYnMnLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFicycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgdGFicyB0byBkaXNwbGF5IGNvbnRlbnQgdGhhdCBoYXMgYSBjb3JyZWxhdGlvbiBidXQgaXMgbm90IGRpcmVjdGx5IHJlbGF0ZWQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGFiczogMixcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICd1cmktY2wvdGFiJyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdHRpdGxlOiAnQXBwbGVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ0VhY2ggdGFiIGNhbiBjb250YWluIHBhcmFncmFwaHMsIGxpbmtzLCBhbmQgb3RoZXIgY29tcG9uZW50cy4nICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBfXyggJ01vcmUgYWJvdXQgZnJ1aXQnICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAndXJpLWNsL3RhYicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHR0aXRsZTogJ09yYW5nZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF9fKCAnVGhpcyB0YWIgd2lsbCBoYXZlIGRpZmZlcmVudCBpbmZvcm1hdGlvbiB0aGFuIHRoZSBmaXJzdCB0YWIsIGJ1dCB0aGUgaW5mb3JtYXRpb24gc2hvdWxkIGNvcnJlbGF0ZSBzb21laG93LicgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ09ubHkgb25lIHRhYiB3aWxsIGJlIHZpc2libGUgYXQgYSB0aW1lIG9uIHRoZSBsaXZlIHBhZ2UuJyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0YWJzOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDIsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RhYnMnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50YWJzIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dFRhYnMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhYnM6IG5leHRUYWJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17IDYgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBnZXRUYWJzVGVtcGxhdGUoIGF0dHJpYnV0ZXMudGFicyApIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPVwiYWxsXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5cdCd1cmktY2wvY2FyZCcsXG5cdCd1cmktY2wvbWV0cmljJyxcblx0J3VyaS1jbC9xdW90ZScsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgdGFiIGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFiLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC90YWInLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFiJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRwYXJlbnQ6IFsgJ3VyaS1jbC90YWJzJyBdLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRpbnNlcnRlcjogZmFsc2UsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXRhYlwiPlxuXHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RhYiBUaXRsZScgKSB9XG5cdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0dGVtcGxhdGVMb2NrPXsgZmFsc2UgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Fic3RyYWN0L2Jsb2NrJztcbmltcG9ydCAnLi9ib3hvdXQvYmxvY2snO1xuaW1wb3J0ICcuL2JyZWFrb3V0L2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuaW1wb3J0ICcuL2RhdGUvYmxvY2snO1xuaW1wb3J0ICcuL2hlcm8vYmxvY2snO1xuaW1wb3J0ICcuL21lbnUvYmxvY2snO1xuaW1wb3J0ICcuL21ldHJpYy9ibG9jayc7XG5pbXBvcnQgJy4vbm90aWNlL2Jsb2NrJztcbmltcG9ydCAnLi9wYW5lbC9ibG9jayc7XG5pbXBvcnQgJy4vcHJvbW8vYmxvY2snO1xuaW1wb3J0ICcuL3F1b3RlL2Jsb2NrJztcbmltcG9ydCAnLi90YWJzL3RhYic7XG5pbXBvcnQgJy4vdGFicy9ibG9jayc7XG4iXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIl93cCRjb21wb25lbnRzIiwiY29tcG9uZW50cyIsIkRhc2hpY29uIiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJUb29sYmFyIiwiVG9vbGJhckJ1dHRvbiIsIndpdGhOb3RpY2VzIiwiQmFzZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbkdyb3VwIiwiRm9jYWxQb2ludFBpY2tlciIsIlRvZ2dsZUNvbnRyb2wiLCJDb2xvclBpY2tlciIsIl93cCRibG9ja0VkaXRvciIsImJsb2NrRWRpdG9yIiwiQmxvY2tDb250cm9scyIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiTWVkaWFQbGFjZWhvbGRlciIsIk1lZGlhVXBsb2FkIiwiTWVkaWFVcGxvYWRDaGVjayIsIkFsaWdubWVudFRvb2xiYXIiLCJSaWNoVGV4dCIsIlBsYWluVGV4dCIsIlVSTElucHV0IiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsImN1c3RvbUljb24iLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3JjIiwiVVJJX0NMX1VSTCIsImFsdCIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJleGFtcGxlIiwiYXR0cmlidXRlcyIsImJvZHkiLCJidXR0b24iLCJtZWRpYUlEIiwiaW1nIiwidHlwZSIsImxpbmsiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsImJnY29sb3JwaWNrZXIiLCJiZ2NzcyIsInN0eWxlIiwiaW52ZXJ0X2ExMXkiLCJlZGl0IiwiX3JlZiIsInNldEF0dHJpYnV0ZXMiLCJpc1NlbGVjdGVkIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJsYWJlbHMiLCJpbnN0cnVjdGlvbnMiLCJvblNlbGVjdCIsIm1lZGlhIiwidXJsIiwiaWQiLCJhY2NlcHQiLCJhbGxvd2VkVHlwZXMiLCJtZXRhIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJvbkNoYW5nZSIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSIsImNsYXNzZXMiLCJyZW5kZXIiLCJfcmVmMiIsIm9wZW4iLCJrZWVwUGxhY2Vob2xkZXJPbkZvY3VzIiwiY3JlYXRlQmxvY2tDb250cm9scyIsImtleSIsImxhYmVsIiwiX3JlZjMiLCJvbkNsaWNrIiwiY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMiLCJoZWxwIiwibWFwIiwiY2FwaXRhbGl6ZWRWYWx1ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmb3JtYXQiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZCIsImlzU2Vjb25kYXJ5IiwiaXNQcmltYXJ5IiwiY29sb3IiLCJvbkNoYW5nZUNvbXBsZXRlIiwiaGV4IiwiZGlzYWJsZUFscGhhIiwiY2hlY2tlZCIsIklubmVyQmxvY2tzIiwiQUxMT1dFRF9CTE9DS1MiLCJURU1QTEFURSIsImRyb3BDYXAiLCJjbGFzc05hbWVzIiwiZmxvYXQiLCJpbm5lckJsb2NrcyIsIm5hbWUiLCJ0ZXh0IiwiY29udGVudFdyYXBwZXIiLCJhbGxvd2VkQmxvY2tzIiwidGVtcGxhdGUiLCJzYXZlIiwiQ29udGVudCIsInVzZV9jb250ZW50X3dpZHRoIiwiYWxpZ25tZW50IiwidG9vbHRpcCIsIkV4dGVybmFsTGluayIsIlRleHQiLCJ0YWduYW1lIiwiY3JlYXRlU2lkZWJhclRpcHMiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiRGF0ZVBpY2tlciIsImRhdGUiLCJjYXB0aW9uIiwic2hvd195ZWFyIiwiRGF0ZSIsIm1vbnRoIiwidG9Mb2NhbGVTdHJpbmciLCJnZXRGdWxsWWVhciIsInRvZGF5IiwiZXhwaXJhdGlvbk1lc3NhZ2UiLCJnZXRUaW1lIiwiZ2V0RGF0ZSIsImN1cnJlbnREYXRlIiwicmFuZG9tSUQiLCJTNCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImhlYWRsaW5lIiwic3ViaGVhZCIsIm1lZGlhSGVpZ2h0IiwibWVkaWFXaWR0aCIsInZpZCIsInVzZV9jYXB0aW9uIiwiY3JlZGl0IiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwicG9zdGVyIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiY29uY2F0IiwiYmFja2dyb3VuZEltYWdlIiwiZGltZW5zaW9ucyIsIngiLCJ5IiwiZm9jYWxQb2ludCIsIlJhbmdlQ29udHJvbCIsIlNlbGVjdENvbnRyb2wiLCJtZW51TmFtZXMiLCJnZXRNZW51TmFtZXMiLCJ4bWxodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImxpc3QiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwibSIsInB1c2giLCJlcnIiLCJlIiwiZiIsIlVSSV9DTF9TSVRFX1VSTCIsInNlbmQiLCJzaG93dGl0bGUiLCJkZXB0aCIsInRpdGxlTWV0YSIsImluc3BlY3RvckNvbnRyb2xzIiwicGFkZGluZ1JpZ2h0Iiwib3B0aW9ucyIsIm1heCIsIm1pbiIsIm1ldHJpYyIsImV4cGlyYXRpb24iLCJzaG93X2V4cGlyZWQiLCJkaXNtaXNzaWJsZSIsImV4cCIsInN5bnRheCIsImxldmVsIiwicmV2ZXJzZSIsIl9yZWY0IiwiX3JlZjUiLCJsaW5rdGV4dCIsInN0eWxlQ29udHJvbCIsInF1b3RlIiwiY2l0YXRpb24iLCJpbWFnZUNsYXNzIiwiZ2V0VGFic1RlbXBsYXRlIiwidGFicyIsIl90b0NvbnN1bWFibGVBcnJheSIsIkFycmF5IiwibmV4dFRhYnMiLCJ0ZW1wbGF0ZUxvY2siLCJwYXJlbnQiLCJzdXBwb3J0cyIsImluc2VydGVyIiwicmV1c2FibGUiLCJodG1sIl0sInNvdXJjZVJvb3QiOiIifQ==