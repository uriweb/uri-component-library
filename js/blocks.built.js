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
    URLInput = _wp$blockEditor.URLInput; // @see https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src

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
    } // Generate editor view of the abstract itself


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
    }; // Generate sidebar inspector controls for other custom attributes


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
      }))));
    }; // Send the editor interfaces to the view


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2Fic3RyYWN0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYm94b3V0L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvYnJlYWtvdXQvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9idXR0b24vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9jYXJkL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvZGF0ZS9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2hlcm8vYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9tZW51L2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvbWV0cmljL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3Mvbm90aWNlL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvcGFuZWwvYmxvY2suanMiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5Ly4vc3JjL2pzL2Jsb2Nrcy9wcm9tby9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3F1b3RlL2Jsb2NrLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS8uL3NyYy9qcy9ibG9ja3MvdGFicy9ibG9jay5qcyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL3RhYnMvdGFiLmpzIiwid2VicGFjazovL3VyaS1jb21wb25lbnQtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91cmktY29tcG9uZW50LWxpYnJhcnkvLi9zcmMvanMvYmxvY2tzL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiY29tcG9uZW50cyIsIkRhc2hpY29uIiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJUb29sYmFyIiwiVG9vbGJhckJ1dHRvbiIsIndpdGhOb3RpY2VzIiwiQmFzZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbkdyb3VwIiwiRm9jYWxQb2ludFBpY2tlciIsIlRvZ2dsZUNvbnRyb2wiLCJDb2xvclBpY2tlciIsImJsb2NrRWRpdG9yIiwiQmxvY2tDb250cm9scyIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tBbGlnbm1lbnRUb29sYmFyIiwiTWVkaWFQbGFjZWhvbGRlciIsIk1lZGlhVXBsb2FkIiwiTWVkaWFVcGxvYWRDaGVjayIsIkFsaWdubWVudFRvb2xiYXIiLCJSaWNoVGV4dCIsIlBsYWluVGV4dCIsIlVSTElucHV0IiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsImN1c3RvbUljb24iLCJVUklfQ0xfVVJMIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGUiLCJhdHRyaWJ1dGVzIiwiYm9keSIsImJ1dHRvbiIsIm1lZGlhSUQiLCJpbWciLCJ0eXBlIiwibGluayIsImFsdCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYmdjb2xvcnBpY2tlciIsImJnY3NzIiwic3R5bGUiLCJlZGl0IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsImluc3RydWN0aW9ucyIsIm1lZGlhIiwidXJsIiwiaWQiLCJtZXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJjcmVhdGVDb250ZW50RWRpdEZvcm0iLCJjbGFzc2VzIiwib3BlbiIsImNyZWF0ZUJsb2NrQ29udHJvbHMiLCJjcmVhdGVJbnNwZWN0b3JDb250cm9scyIsIm1hcCIsInZhbHVlIiwiY2FwaXRhbGl6ZWRWYWx1ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJrZXkiLCJmb3JtYXQiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZCIsImhleCIsIklubmVyQmxvY2tzIiwiQUxMT1dFRF9CTE9DS1MiLCJURU1QTEFURSIsInBsYWNlaG9sZGVyIiwiZHJvcENhcCIsImNsYXNzTmFtZXMiLCJmbG9hdCIsImlubmVyQmxvY2tzIiwibmFtZSIsInRleHQiLCJjb250ZW50V3JhcHBlciIsInNhdmUiLCJ1c2VfY29udGVudF93aWR0aCIsImFsaWdubWVudCIsInRvb2x0aXAiLCJEYXRlUGlja2VyIiwiY29sb3IiLCJkYXRlIiwiY2FwdGlvbiIsInNob3dfeWVhciIsIkRhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsImV4cGlyYXRpb25NZXNzYWdlIiwiZ2V0VGltZSIsImdldERhdGUiLCJyYW5kb21JRCIsIlM0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaGVhZGxpbmUiLCJzdWJoZWFkIiwibWVkaWFIZWlnaHQiLCJtZWRpYVdpZHRoIiwidmlkIiwidXNlX2NhcHRpb24iLCJjcmVkaXQiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJhbmltYXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsInBvc3RlciIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsIngiLCJ5IiwiZm9jYWxQb2ludCIsIlJhbmdlQ29udHJvbCIsIlNlbGVjdENvbnRyb2wiLCJtZW51TmFtZXMiLCJnZXRNZW51TmFtZXMiLCJ4bWxodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImxpc3QiLCJtIiwicHVzaCIsImxhYmVsIiwiVVJJX0NMX1NJVEVfVVJMIiwic2VuZCIsInNob3d0aXRsZSIsImRlcHRoIiwidGl0bGVNZXRhIiwiaW5zcGVjdG9yQ29udHJvbHMiLCJwYWRkaW5nUmlnaHQiLCJtZXRyaWMiLCJleHBpcmF0aW9uIiwic2hvd19leHBpcmVkIiwiZGlzbWlzc2libGUiLCJleHAiLCJzeW50YXgiLCJsZXZlbCIsInJldmVyc2UiLCJsaW5rdGV4dCIsInN0eWxlQ29udHJvbCIsInF1b3RlIiwiY2l0YXRpb24iLCJpbWFnZUNsYXNzIiwiZ2V0VGFic1RlbXBsYXRlIiwidGFicyIsIkFycmF5IiwibmV4dFRhYnMiLCJwYXJlbnQiLCJzdXBwb3J0cyIsImluc2VydGVyIiwicmV1c2FibGUiLCJodG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFBUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUNBRyxpQixHQUFzQkYsRUFBRSxDQUFDRyxNLENBQXpCRCxp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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsMEJBQTBCLEVBQUU7V0FDMUMsY0FBYyxlQUFlO1dBQzdCLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJibG9ja3MuYnVpbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0QnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0Rm9jYWxQb2ludFBpY2tlcixcblx0VG9nZ2xlQ29udHJvbCxcblx0Q29sb3JQaWNrZXIsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2Fic3RyYWN0LnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9hYnN0cmFjdCcsIHtcblxuXHR0aXRsZTogX18oICdBYnN0cmFjdCcgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgYWJzdHJhY3RzIHRvIGludHJvZHVjZSBjb250ZW50IGluIGEgdmlzdWFsIG1hbm5vciwgZXNwZWNpYWxseSB3aGVuIHN1aXRhYmxlIHBob3RvZ3JhcGh5IGlzIG5vdCBhdmFpbGFibGUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnQSBncmFuZCB2aXNpb24nICksXG5cdFx0XHRib2R5OiBfXyggJ1NldCB0aGUgZ3JvdW5kd29yayBmb3IgdGhlIHN0b3J5LCBhbmQgZW50aWNlIHJlYWRlcnMgdG8gZXhwbG9yZSBmdWxseS4nICksXG5cdFx0XHRidXR0b246IF9fKCAnQ29udGludWUnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHQvLyB0aGUgbWVkaWFIZWlnaHQgYW5kIG1lZGlhV2lkdGggYXJlIGZvciB0aGUgZm9jYWwgcG9pbnQgcGlja2VyIGNvbXBvbmVudFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnIzAwMjE0NycsXG5cdFx0fSxcblx0XHRiZ2NvbG9ycGlja2VyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICcjMWI1ZGE5Jyxcblx0XHR9LFxuXHRcdGJnY3NzOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdiYXJzJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYWJzdHJhY3QgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzZXMgPSAnY2wtYWJzdHJhY3QnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHRcdFx0fVxuXG5cdFx0XHRhdHRyaWJ1dGVzLmJhY2tncm91bmQgPSBhdHRyaWJ1dGVzLmJnY29sb3JwaWNrZXI7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuYmdjc3MgKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuYmFja2dyb3VuZCA9IGF0dHJpYnV0ZXMuYmdjc3M7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsLWFic3RyYWN0LWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSBzdHlsZT17IHsgYmFja2dyb3VuZDogYXR0cmlidXRlcy5iYWNrZ3JvdW5kIH0gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtYmFja2Ryb3AtcHJldmlld1wiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1hYnN0cmFjdC1wcm9wZXIgaGFzLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWFic3RyYWN0LWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtYWJzdHJhY3QtdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGFic3RyYWN0IHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYWJzdHJhY3QgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYnV0dG9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Zvcm1hdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UsIGFic3RyYWN0IHByZXZpZXdzIHdpbGwgYXBwZWFyIHNpbXBsaWZpZWQgaW4gdGhlIGVkaXRvciB3aW5kb3cuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImFic3RyYWN0LWZvcm1hdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnQWJzdHJhY3QgRm9ybWF0JyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2JhcnMnLCAnZGlzY3MnLCAnbGF0dGljZScsICdob25leWNvbWInIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2RlZmF1bHQnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gZm9ybWF0ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQmFja2dyb3VuZCBDb2xvcicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJhYnN0cmFjdC1iYWNrZ3JvdW5kXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9eyBhdHRyaWJ1dGVzLmJnY29sb3JwaWNrZXIgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VDb21wbGV0ZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJnY29sb3JwaWNrZXI6IHZhbHVlLmhleCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZUFscGhhXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDdXN0b20gQmFja2dyb3VuZCBDU1NcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBiZ2NzczogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5iZ2NzcyB9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIlNldCBhIENTUyB2YWx1ZSBmb3IgdGhlIGJhY2tncm91bmQgY29sb3IgKG92ZXJyaWRlcyB0aGUgY29sb3IgcGlja2VyIHNldHRpbmcpLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUJsb2NrQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFVcGxvYWQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCdXR0b24sXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsIC8vIEB0b2RvOiBhbGxvdyBuZXN0ZWQgYmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFtcblx0J2NvcmUvaW1hZ2UnLFxuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBib3hvdXQgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9ib3hvdXQuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJveG91dCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9ib3hvdXQnLCB7XG5cblx0dGl0bGU6IF9fKCAnQm94b3V0JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBib3hvdXRzIHRvIGNvbnRhaW4gdGV4dCB0aGF0IGlzIGFuY2lsbGFyeSB0byB0aGUgcGFnZeKAmXMgY29udGVudC4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdTaWRlIG5vdGUnICksXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ0JveG91dCBjb250ZW50IHN1cHBvcnRzIHRoZSByZXN0IG9mIHRoZSBwYWdl4oCZcyBtZXNzYWdlIHdpdGhvdXQgYmVpbmcgZGlyZWN0bHkgcmVsYXRlZC4nICksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHR0ZXh0OiBfXyggJ0xlYXJuIE1vcmUnICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNvbnRlbnRXcmFwcGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGNhcmQgaXRzZWxmXG5cdFx0Y29uc3QgY3JlYXRlQ29udGVudEVkaXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L2gxPlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmxvYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGZsb2F0OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QnV0dG9uLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdElubmVyQmxvY2tzLCAvLyBAdG9kbzogYWxsb3cgbmVzdGVkIGJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQnY29yZS9jb2x1bW5zJyxcblx0J3VyaS1jbC9idXR0b24nLFxuXHQndXJpLWNsL2JveG91dCcsXG5cdCd1cmktY2wvY2FyZCcsXG5cdCd1cmktY2wvZGF0ZScsXG5cdCd1cmktY2wvaGVybycsXG5cdCd1cmktY2wvbWV0cmljJyxcblx0J3VyaS1jbC9xdW90ZScsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgYnJlYWtvdXQgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9icmVha291dC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtYnJlYWtvdXQnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdC8vIEB0b2RvIHRoaXMgZ2V0cyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gd3JhcHBlci4uLiByZW1vdmUgaXQ/XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMudXNlX2NvbnRlbnRfd2lkdGggKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHVzZS1jb250ZW50LXdpZHRoJztcblx0fVxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2JyZWFrb3V0Jywge1xuXG5cdHRpdGxlOiBfXyggJ0JyZWFrb3V0JyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBicmVha291dHMgdG8gY3JlYXRlIHZpc3VhbGx5IGRpc3RpbmN0IHNlY3Rpb25zIG9yIGZ1bGwtd2lkdGggbGF5b3V0cy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ0JyZWFrb3V0cyBjb250ZW50IGNhbiBiZSB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgcmVzdCBvZiB0aGUgcGFnZSBjb250ZW50LCBvciBpdCBjYW4gZXhwYW5kIGJleW9uZCBpdC4nICksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHR0ZXh0OiBfXyggJ0xlYXJuIE1vcmUnICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdHVzZV9jb250ZW50X3dpZHRoOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGlmICggdHJ1ZSA9PT0gYXR0cmlidXRlcy51c2VfY29udGVudF93aWR0aCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJVc2UgY29udGVudCB3aWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMudXNlX2NvbnRlbnRfd2lkdGggfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB1c2VfY29udGVudF93aWR0aDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG5cdHNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdCk7XG5cdH0sXG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdFVSTElucHV0LFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9idXR0b24uc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLWJ1dHRvbic7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5hbGlnbm1lbnQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmFsaWdubWVudDtcblx0fVxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9idXR0b24nLCB7XG5cblx0dGl0bGU6IF9fKCAnQnV0dG9uJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBidXR0b25zIHRvIGF0dHJhY3QgYXR0ZW50aW9uIHRvIHRoZSBwcmltYXJ5IGNhbGwgdG8gYWN0aW9uIG9uIGEgcGFnZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0ZXh0OiBfXyggJ0V4cGxvcmUnICksXG5cdFx0fSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgZWRpdG9yIHZpZXcgb2YgdGhlIGJ1dHRvbiBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgbWV0YTtcblx0XHRcdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRcdFx0bWV0YSA9IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwicm93IGxpbmtcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmsgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBjbGFzc25hbWVzXG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtYnV0dG9uLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXHRcdFx0XHRcdFx0PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGV4dCB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGJ1dHRvbiB0ZXh0JyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBibG9jayBjb250cm9scyBmb3IgYWxpZ25tZW50LCBldGNcblx0XHQvLyBAdG9kbzogZG8gd2UgbmVlZCBhbGlnbm1lbnQvZmxvYXQgY29udHJvbHMgb24gYnV0dG9ucz9cblx0XHRjb25zdCBjcmVhdGVCbG9ja0NvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMga2V5PVwiY29udHJvbHNcIj5cblx0XHRcdFx0XHQ8QmxvY2tBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBhbGlnbm1lbnQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQnV0dG9uIFN0eWxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImJ1dHRvbi1zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnQnV0dG9uIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAncHJvbWluZW50JywgJ2Rpc2FibGVkJyBdLm1hcCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FwaXRhbGl6ZWRWYWx1ZSA9IHZhbHVlLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSggMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSAoIGtleSA9PT0gc3R5bGUgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0QnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRSaWNoVGV4dCxcblx0UGxhaW5UZXh0LFxuXHRVUkxJbnB1dCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvY2FyZC5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtY2FyZCc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblxuXHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHNlbGVjdGVkJztcblx0fVxuXG5cdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIGhhcy1pbWFnZSc7XG5cdH0gZWxzZSB7XG5cdFx0Y2xhc3NlcyArPSAnIG5vLWltYWdlJztcblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvY2FyZCcsIHtcblxuXHR0aXRsZTogX18oICdDYXJkJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBjYXJkcyB0byBleHBsYWluIGFuZCBsaW5rIHRvIGEgc2luZ2xlIGlkZWEuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnT25lIGlkZWEnICksXG5cdFx0XHRib2R5OiBfXyggJ1NpbmNlIHRoZSBlbnRpcmUgY2FyZCBtdXN0IGJlIGEgc2luZ2xlIGxpbmssIGl04oCZcyBwZXJmZWN0IGZvciBsaW5raW5nIHRvIGJyb2FkIHRvcGljcyB3aGVyZSB5b3UgbmVlZCBtb3JlIHdvcmRzIG9yIGEgcGhvdG8gdG8gZGVzY3JpYmUgdGhlIGxpbmtlZCByZXNvdXJjZS4nICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdFx0YnV0dG9uOiBfXyggJ0xlYXJuIE1vcmUnICksXG5cdFx0fSxcblx0fSxcblxuXHQvLyBUaGUgbWVkaWFJRCBpcyB3aGF0IGdvZXMgaW50byB0aGUgc2hvcnRjb2RlIGZvciBmcm9udC1lbmQgZGlzcGxheVxuXHQvLyB0aGUgaW1nIGFuZCBhbHQgYXJlIGZvciBlZGl0b3IgcGxhY2Vob2xkZXJzXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbms6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0bWVkaWFJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJ1dHRvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZsb2F0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtY2FyZC1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWNhcmQtY29udGFpbmVyIG1lZGlhXCI+XG5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IGdldEltYWdlQnV0dG9uKCBvcGVuICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC1jb250YWluZXIgdGV4dFwiPlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGNhcmQgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBib2R5OiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR0YWduYW1lPVwicFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBjYXJkIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtY2FyZC1jb250YWluZXIgYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYnV0dG9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyBtZXRhIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgYmxvY2sgY29udHJvbHMgZm9yIGFsaWdubWVudCwgZXRjXG5cdFx0Y29uc3QgY3JlYXRlQmxvY2tDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGtleT1cImNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PEJsb2NrQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZsb2F0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmbG9hdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHR7ICEhIGF0dHJpYnV0ZXMuaW1nICYmIChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhciBsYWJlbD1cIkNob29zZSBtZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIHNpZGViYXIgaW5zcGVjdG9yIGNvbnRyb2xzIGZvciBvdGhlciBjdXN0b20gYXR0cmlidXRlc1xuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdHdpdGhOb3RpY2VzLFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdERhdGVQaWNrZXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFRvb2xiYXIsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2RhdGUuc3ZnJyApIH1cblx0XHRcdGFsdD1cImRhdGVcIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICdjbC1kYXRlJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNvbG9yICkge1xuXHRcdGNsYXNzZXMgKz0gJyBjbC1kYXRlLScgKyBhdHRyaWJ1dGVzLmNvbG9yO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5mbG9hdCApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuZmxvYXQ7XG5cdH1cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9kYXRlJywge1xuXG5cdHRpdGxlOiBfXyggJ0RhdGUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIGRhdGVzIHRvIGRpc3BsYXkgYSBkb3dubG9hZGFibGUgY2FsZW5kYXIgZXZlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0ZGF0ZTogX18oICdKdWx5IDI4LCAyMDYxJyApLFxuXHRcdFx0Y2FwdGlvbjogX18oICdIYWxsZXnigJlzIENvbWV0IHJlYWNoZXMgcGVyaWhlbGlvbicgKSxcblx0XHR9LFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRkYXRlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c2hvd195ZWFyOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBjYXJkIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzLCBpc1NlbGVjdGVkICk7XG5cblx0XHRcdGlmICggISBhdHRyaWJ1dGVzLmRhdGUgKSB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZGF0ZTogbmV3IERhdGUoKSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggYXR0cmlidXRlcy5kYXRlICk7XG5cblx0XHRcdGxldCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoICdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0gKTtcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zaG93X3llYXIgKSB7XG5cdFx0XHRcdG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyggJ2RlZmF1bHQnLCB7IG1vbnRoOiAnc2hvcnQnIH0gKSArICcgJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGlzcGxheSBhIG1lc3NhZ2Ugb24gdGhlIGFkbWluIHNjcmVlbiBpZiB0aGUgbm90aWNlIGlzIGV4cGlyZWRcblx0XHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBleHBpcmF0aW9uTWVzc2FnZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmRhdGUgJiYgZGF0ZS5nZXRUaW1lKCkgPD0gdG9kYXkuZ2V0VGltZSgpICkge1xuXHRcdFx0XHRleHBpcmF0aW9uTWVzc2FnZSA9IDxkaXYgY2xhc3NOYW1lPVwiY2wtY29tcG9uZW50LW1lc3NhZ2VcIj5UaGlzIGRhdGUgbWF5IG5vIGxvbmdlciBiZSByZWxldmFudC48L2Rpdj47XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0eyBleHBpcmF0aW9uTWVzc2FnZSB9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLW1vbnRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1vbnRoIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWRhdGUtZGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IGRhdGUuZ2V0RGF0ZSgpIH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtZGF0ZS1jYXB0aW9uLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1kYXRlLWNhcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgY2FwdGlvbjogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgZGF0ZSBjYXB0aW9uJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGF0ZSBDb2xvcicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJkYXRlLWNvbG9yXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdEYXRlIENvbG9yJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ2JsdWUnLCAncmVkJywgJ2dyZXknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXBpdGFsaXplZFZhbHVlID0gdmFsdWUuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKCAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGtleSA9ICggJ2JsdWUnID09PSB2YWx1ZSApID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY29sb3IgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5jb2xvciApID8gJycgOiBhdHRyaWJ1dGVzLmNvbG9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBjb2xvciApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjb2xvcjoga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjYXBpdGFsaXplZFZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PERhdGVQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnREYXRlPXsgYXR0cmlidXRlcy5kYXRlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggZGF0ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGF0ZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyB5ZWFyXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93X3llYXIgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93X3llYXI6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0RGFzaGljb24sXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcblx0VG9vbGJhckJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdEZvY2FsUG9pbnRQaWNrZXIsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFJpY2hUZXh0LFxuXHRQbGFpblRleHQsXG5cdFVSTElucHV0LFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL2hlcm8uc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IHJhbmRvbUlEID0gKCkgPT4ge1xuXHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82ODYwODUzL2dlbmVyYXRlLXJhbmRvbS1zdHJpbmctZm9yLWRpdi1pZFxuXHRjb25zdCBTNCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKCAoICggMSArIE1hdGgucmFuZG9tKCkgKSAqIDB4MTAwMDAgKSB8IDAgKS50b1N0cmluZyggMTYgKS5zdWJzdHJpbmcoIDEgKTtcblx0fTtcblx0cmV0dXJuICggUzQoKSArIFM0KCkgKyAnLScgKyBTNCgpICsgJy0nICsgUzQoKSArICctJyArIFM0KCkgKyAnLScgKyBTNCgpICsgUzQoKSArIFM0KCkgKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL2hlcm8nLCB7XG5cblx0dGl0bGU6IF9fKCAnSGVybycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgaGVyb2VzIHRvIGVuZ2FnZSB3aXRoIHRoZSB2aXNpdG9yIGFuZCBjcmVhdGUgdGhlIHNlbnNlIG9mIGRlc2lyZS4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRoZWFkbGluZTogX18oICdBc3BpcmF0aW9uYWwnICksXG5cdFx0XHRzdWJoZWFkOiBfXyggJ0hlcm9lcyBhbHdheXMgYXJlLicgKSxcblx0XHRcdGJ1dHRvbjogX18oICdCZSBvbmUnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdFx0Zm9ybWF0OiAnc3VwZXInLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHQvLyB0aGUgbWVkaWFIZWlnaHQgYW5kIG1lZGlhV2lkdGggYXJlIGZvciB0aGUgZm9jYWwgcG9pbnQgcGlja2VyIGNvbXBvbmVudFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aGVhZGxpbmU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3ViaGVhZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0bWVkaWFIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0bWVkaWFXaWR0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR2aWQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRidXR0b246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHR1c2VfY2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdH0sXG5cdFx0Y2FwdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjcmVkaXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cG9zaXRpb25YOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdHBvc2l0aW9uWToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0bWVkaWFIZWlnaHQ6IG1lZGlhLmhlaWdodCxcblx0XHRcdFx0XHRcdFx0bWVkaWFXaWR0aDogbWVkaWEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uWDogMC41LFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvblk6IDAuNSxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IG1ldGE7XG5cdFx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdFx0bWV0YSA9IChcblx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhXCJcblx0XHRcdFx0XHRvblN1Ym1pdD17ICggZXZlbnQgKSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJyb3cgbGlua1wiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIHRpdGxlPVwiTGlua3MgdG86XCI+PERhc2hpY29uIGljb249XCJhZG1pbi1saW5rc1wiIC8+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGluayB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudXJpLmVkdS9cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgaGVybyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRpZiAoICEgYXR0cmlidXRlcy5pZCApIHtcblx0XHRcdFx0YXR0cmlidXRlcy5pZCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBjbGFzc2VzID0gJ2NsLWhlcm8nO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmZvcm1hdCApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmZvcm1hdDtcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5saW5rICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgaGFzLWxpbmsnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnIG5vLWxpbmsnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN1YmhlYWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBoYXMtc3ViaGVhZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgbm8tc3ViaGVhZCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgc3R5bGUgPSB7fTtcblx0XHRcdGxldCBwb3N0ZXIgPSAncG9zdGVyJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5pbWcgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHRcdFx0XHRwb3N0ZXIgPSAnc3RpbGwnO1xuXHRcdFx0XHRzdHlsZSA9IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IGAkeyBhdHRyaWJ1dGVzLnBvc2l0aW9uWCAqIDEwMCB9JSAkeyBhdHRyaWJ1dGVzLnBvc2l0aW9uWSAqIDEwMCB9JWAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7IGF0dHJpYnV0ZXMuaW1nIH0pYCxcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgdG9vbHRpcFxuXHRcdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMudG9vbHRpcCApIHtcblx0XHRcdFx0dGl0bGUgPSBhdHRyaWJ1dGVzLnRvb2x0aXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1oZXJvLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLWhlcm8tcHJvcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgcG9zdGVyIH0gc3R5bGU9eyBzdHlsZSB9PlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtaGVyby10ZXh0IG92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgaGVhZGxpbmU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmhlYWRsaW5lIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgaGVybyB0aXRsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1YmhlYWRcIj48UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN1YmhlYWQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnN1YmhlYWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBoZXJvIHN1YnRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzdWJoZWFkXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2wtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgYnV0dG9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmJ1dHRvbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgYnV0dG9uIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IG1ldGEgfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSGVpZ2h0OiBtZWRpYS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFXaWR0aDogbWVkaWEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25YOiAwLjUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25ZOiAwLjUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IG1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImhlcm8tZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdIZXJvIEZvcm1hdCcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBbICdkZWZhdWx0JywgJ2Z1bGx3aWR0aCcsICdzdXBlcicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxGb2NhbFBvaW50UGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0dXJsPXsgYXR0cmlidXRlcy5pbWcgfVxuXHRcdFx0XHRcdFx0XHRcdGRpbWVuc2lvbnM9eyB7IHdpZHRoOiBhdHRyaWJ1dGVzLm1lZGlhV2lkdGgsIGhlaWdodDogYXR0cmlidXRlcy5tZWRpYUhlaWdodCB9IH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHsgeDogYXR0cmlidXRlcy5wb3NpdGlvblgsIHk6IGF0dHJpYnV0ZXMucG9zaXRpb25ZIH0gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBmb2NhbFBvaW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBwb3NpdGlvblg6ICggZm9jYWxQb2ludC54ICogMSApLCBwb3NpdGlvblk6ICggZm9jYWxQb2ludC55ICogMSApIH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVmlkZW8gVVJMXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdmlkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZpZCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJGb3IgY3JlYXRpbmcgYSB2aWRlbyBoZXJvLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJVc2UgV29yZFByZXNzIGNhcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJTZXR0aW5nIGEgY3VzdG9tIGNhcHRpb24gYmVsb3cgd2lsbCBvdmVycmlkZSBhbnkgV29yZFByZXNzIGNhcHRpb24uXCJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy51c2VfY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHVzZV9jYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2FwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNhcHRpb246IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZCB2aWRcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9XCJTZXQgYSBjYXB0aW9uIGZvciB0aGUgaGVyby5cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNyZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNyZWRpdDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jcmVkaXQgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGQgdmlkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiU3BlY2lmeSBjcmVkaXQgZm9yIHRoZSBoZXJvIG1lZGlhLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbCB0aXBcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0b29sdGlwOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRvb2x0aXAgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7XG5cdERhc2hpY29uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFJhbmdlQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvbWVudS5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtbWVudSc7XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5sZXQgbWVudU5hbWVzID0gZmFsc2U7XG5cbmNvbnN0IGdldE1lbnVOYW1lcyA9ICgpID0+IHtcblx0Y29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcblx0XHRpZiAoIHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSApIHtcblx0XHRcdGlmICggMjAwID09PSB4bWxodHRwLnN0YXR1cyApIHtcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSggeG1saHR0cC5yZXNwb25zZVRleHQgKTtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IFtdO1xuXHRcdFx0XHRmb3IgKCBjb25zdCBtIG9mIHBhcnNlZCApIHtcblx0XHRcdFx0XHRsaXN0LnB1c2goIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBtLm5hbWUsXG5cdFx0XHRcdFx0XHR2YWx1ZTogbS5uYW1lLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtZW51TmFtZXMgPSBsaXN0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHR4bWxodHRwLm9wZW4oICdHRVQnLCBVUklfQ0xfU0lURV9VUkwgKyAnL3dwLWpzb24vdXJpLWNvbXBvbmVudC1saWJyYXJ5L3YxL21lbnVzJywgdHJ1ZSApO1xuXHR4bWxodHRwLnNlbmQoKTtcbn07XG5cbmdldE1lbnVOYW1lcygpO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC9tZW51Jywge1xuXG5cdHRpdGxlOiBfXyggJ01lbnUnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG1lbnVzIHdoZW4gdGhlIHNhbWUgY29sbGVjdGlvbiBvZiBsaW5rcyBtdXN0IGFwcGVhciBvbiBtdWx0aXBsZSBwYWdlcy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRuYW1lOiAnbWVudTEnLFxuXHRcdFx0dGl0bGU6IF9fKCAnTWFpbiBNZW51JyApLFxuXHRcdFx0c2hvd3RpdGxlOiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGRlcHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0XHRzaG93dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdib29sJyxcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgYnV0dG9uIGl0c2VsZlxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdC8vIFNldCB0aGUgY2xhc3NuYW1lc1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdFx0bGV0IG5hbWUgPSAnJztcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLm5hbWUgKSB7XG5cdFx0XHRcdG5hbWUgPSAnOiAnICsgYXR0cmlidXRlcy5uYW1lO1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMubmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRpdGxlICkge1xuXHRcdFx0XHR0aXRsZSA9IGF0dHJpYnV0ZXMudGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0aXRsZU1ldGEgPSAnJztcblx0XHRcdGlmICggYXR0cmlidXRlcy5zaG93dGl0bGUgKSB7XG5cdFx0XHRcdHRpdGxlTWV0YSA9IDxzcGFuIGNsYXNzTmFtZT1cImNsLW1lbnUtdG9nZ2xlXCI+eyB0aXRsZSB9PC9zcGFuPjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWVudS1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHR7IHRpdGxlTWV0YSB9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLW1lbnUtcGxhY2Vob2xkZXJcIj5NZW51IHBsYWNlaG9sZGVyeyBuYW1lIH08L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgaW5zcGVjdG9yQ29udHJvbHMgPSAoXG5cdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17IHsgcGFkZGluZ1JpZ2h0OiAnN3B4JyB9IH0+PERhc2hpY29uIGljb249XCJ3YXJuaW5nXCIgLz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlRoaXMgc2l0ZSBoYXMgbm8gbWVudXMuICBDcmVhdGUgb25lIHVuZGVyIHRoZSBBcHBlYXJhbmNlIHRhYi48L2Rpdj5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdCk7XG5cblx0XHRpZiAoICEhIG1lbnVOYW1lcyApIHtcblx0XHRcdGluc3BlY3RvckNvbnRyb2xzID0gKFxuXHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWVudScgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmFtZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgbmFtZSB9ICkgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1lbnVOYW1lcyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnSWYgbm8gdGl0bGUgaXMgcHJvdmlkZWQsIHRoZSBtZW51IG5hbWUgd2lsbCBiZSB1c2VkLicgKSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZXRhLWZpZWxkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyB0aXRsZSBvbiBkZXNrdG9wJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVGl0bGVzIGFyZSBhbHdheXMgc2hvd24gb24gbW9iaWxlLicgKSB9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnNob3d0aXRsZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzaG93dGl0bGU6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdEZXB0aCcgKSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDIgfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRlcHRoICkgPT4gc2V0QXR0cmlidXRlcyggeyBkZXB0aCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVwdGggfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0eyBpbnNwZWN0b3JDb250cm9scyB9XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UGxhaW5UZXh0LFxuXHRSaWNoVGV4dCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRUb29sYmFyLFxuXHRCbG9ja0FsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9tZXRyaWMuc3ZnJyApIH1cblx0XHRcdGFsdD1cIm1ldHJpY1wiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLW1ldHJpYyc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdGlmICggISEgaXNTZWxlY3RlZCApIHtcblx0XHRjbGFzc2VzICs9ICcgc2VsZWN0ZWQnO1xuXHR9XG5cdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSApIHtcblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLmZsb2F0ICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5mbG9hdDtcblx0fVxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL21ldHJpYycsIHtcblxuXHR0aXRsZTogX18oICdNZXRyaWMnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIG1ldHJpY3MgdG8gaWxsdXN0cmF0ZSBhIGZhY3QgdGhhdCBpcyBjb25jaXNlIGFuZCBlYXN5IHRvIGNvbnN1bWUuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bWV0cmljOiBfXyggJzQwSycgKSxcblx0XHRcdGNhcHRpb246IF9fKCAnTGVhZ3VlcyB1bmRlciB0aGUgc2VhJyApLFxuXHRcdFx0c3R5bGU6ICdkYXJrJyxcblx0XHR9LFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bWV0cmljOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGNhcHRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0ZmxvYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSBlZGl0b3IgdmlldyBvZiB0aGUgY2FyZCBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyggYXR0cmlidXRlcywgaXNTZWxlY3RlZCApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHRvb2x0aXBcblx0XHRcdGxldCB0aXRsZSA9ICcnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnRvb2x0aXAgKSB7XG5cdFx0XHRcdHRpdGxlID0gYXR0cmlidXRlcy50b29sdGlwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2wtbWV0cmljLWJsb2NrLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfSB0aXRsZT17IHRpdGxlIH0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBtZXRyaWM6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1ldHJpYyB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICcxMDAlJyApIH1cblx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0Lz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBjYXB0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHRhZ25hbWU9XCJwXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnbWV0cmljcyBvbiB0aGlzIHBhZ2UnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvc3Bhbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdDxCbG9ja0FsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mbG9hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZmxvYXQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHQvLyBAdG9kbzogdGVjaG5pY2FsbHksIHlvdSBjYW4gaGF2ZSBhIGNsZWFyIGFuZCBkYXJrIG1ldHJpY1xuXHRcdC8vIG91ciBidXR0b25ncm91cCBvbmx5IGFsbG93cyB1c2VycyB0byBzZWxlY3Qgb25lXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29sIHRpcFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRvb2x0aXA6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudG9vbHRpcCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWV0YS1maWVsZFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0cmljIFN0eWxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpZD1cIm1ldHJpYy1zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD17IF9fKCAnTWV0cmljIFN0eWxlJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IFsgJ3N0YW5kYXJkJywgJ2NsZWFyJywgJ2RhcmsnLCAnb3ZlcmxheScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IGtleSA9PT0gYXR0cmlidXRlcy5zdHlsZTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVJbnNwZWN0b3JDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlQ29udGVudEVkaXRGb3JtKCksXG5cdFx0XSApO1xuXHR9LCAvLyBFbmQgZWRpdFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0VG9nZ2xlQ29udHJvbCxcblx0RGF0ZVBpY2tlcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdFBsYWluVGV4dCxcblx0UmljaFRleHQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0VG9vbGJhcixcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRJbm5lckJsb2Nrcyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5dO1xuXG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IHBsYWNlaG9sZGVyOiAnWW91ciBub3RpY2UgY29udGVudC4uLicsIGRyb3BDYXA6IGZhbHNlIH0gXSxcbl07XG5cbmNvbnN0IGN1c3RvbUljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGltZ1xuXHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRjbGFzc05hbWU9XCJkYXNoaWNvblwiXG5cdFx0XHRzcmM9eyAoIFVSSV9DTF9VUkwgKyAnaS9pY29ucy9ub3RpY2Uuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL25vdGljZScsIHtcblx0dGl0bGU6IF9fKCAnTm90aWNlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBub3RpY2VzIHRvIGRpc3BsYXkgY29udGVudCB0aGF0IGlzIHBhcnRpY3VsYXJseSB1cmdlbnQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGl0bGU6IF9fKCAnUGxlYXNlIE5vdGUnICksXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ05vdGljZXMgYXJlIG1lYW50IHRvIGJlIHRlbXBvcmFyeSBhbmQgdGltZWx5IGFuZCBzaG91bGQgb25seSBiZSB1c2VkIHRvIGNvbW11bmljYXRlIGFuIGV4Y2VwdGlvbmFsIGNvbmRpdGlvbi4nICksXG5cdFx0XHR9LFxuXHRcdH0gXSxcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdGV4cGlyYXRpb246IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0c2hvd19leHBpcmVkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHRcdGRpc21pc3NpYmxlOiB7XG5cdFx0XHR0eXBlOiAnYm9vbCcsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0Y29udGVudFdyYXBwZXI6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1ub3RpY2UnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhdHRyaWJ1dGVzLmNsYXNzTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnN0eWxlICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgYSBtZXNzYWdlIG9uIHRoZSBhZG1pbiBzY3JlZW4gaWYgdGhlIG5vdGljZSBpcyBleHBpcmVkXG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IGV4cCA9IG5ldyBEYXRlKCBhdHRyaWJ1dGVzLmV4cGlyYXRpb24gKTtcblx0XHRcdGxldCBleHBpcmF0aW9uTWVzc2FnZSA9ICcnO1xuXHRcdFx0bGV0IHN5bnRheCA9ICdhbmQgd2lsbCBub3QnO1xuXHRcdFx0aWYgKCAhISBhdHRyaWJ1dGVzLnNob3dfZXhwaXJlZCApIHtcblx0XHRcdFx0c3ludGF4ID0gJ2J1dCB3aWxsIHN0aWxsJztcblx0XHRcdH1cblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5leHBpcmF0aW9uICYmIGV4cC5nZXRUaW1lKCkgPD0gZGF0ZS5nZXRUaW1lKCkgKSB7XG5cdFx0XHRcdGV4cGlyYXRpb25NZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJjbC1jb21wb25lbnQtbWVzc2FnZVwiPlRoaXMgbm90aWNlIGhhcyBleHBpcmVkIHsgc3ludGF4IH0gYmUgdmlzaWJsZSB3aGVuIHB1Ymxpc2hlZC48L2Rpdj47XG5cdFx0XHR9XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHR7IGV4cGlyYXRpb25NZXNzYWdlIH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdDxoMT48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBub3RpY2UgdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibm90aWNlLXN0eWxlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdOb3RpY2UgU3R5bGUnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICd1cmdlbnQnLCAnY292aWQxOScgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZSA9ICggdW5kZWZpbmVkID09PSBhdHRyaWJ1dGVzLnN0eWxlICkgPyAnJyA6IGF0dHJpYnV0ZXMuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IHN0eWxlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBrZXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHN0eWxlOiBrZXkgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNhcGl0YWxpemVkVmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQWxsb3cgdmlzaXRvcnMgdG8gZGlzbWlzcyB0aGlzIG5vdGljZVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuZGlzbWlzc2libGUgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBkaXNtaXNzaWJsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8RGF0ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRXhwaXJhdGlvbiBkYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50RGF0ZT17IGF0dHJpYnV0ZXMuZXhwaXJhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGV4cGlyYXRpb246IGRhdGUgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgYWZ0ZXIgZXhwaXJlZFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc2hvd19leHBpcmVkIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2hvd19leHBpcmVkOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdEJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9oZWFkaW5nJyxcblx0J2NvcmUvcGFyYWdyYXBoJyxcblx0J2NvcmUvbGlzdCcsXG5cdCd1cmktY2wvYnV0dG9uJyxcbl07XG5jb25zdCBURU1QTEFURSA9IFtcblx0WyAnY29yZS9oZWFkaW5nJywgeyBsZXZlbDogMSwgcGxhY2Vob2xkZXI6ICdNeSBQYW5lbCcgfSBdLFxuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5cdFsgJ3VyaS1jbC9idXR0b24nLCB7fSBdLFxuXTtcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY29uc3QgY3VzdG9tSWNvbiA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdGNsYXNzTmFtZT1cImRhc2hpY29uXCJcblx0XHRcdHNyYz17ICggVVJJX0NMX1VSTCArICdpL2ljb25zL3BhbmVsLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRsZXQgY2xhc3NlcyA9ICggJ3N1cGVyJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICdjbC1wYW5lbC1zdXBlcicgOiAnY2wtcGFuZWwnO1xuXHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBhdHRyaWJ1dGVzLnJldmVyc2UgKSB7XG5cdFx0Y2xhc3NlcyArPSAnIHJldmVyc2UnO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd1cmktY2wvcGFuZWwnLCB7XG5cblx0dGl0bGU6IF9fKCAnUGFuZWwnICksXG5cdGljb246IGN1c3RvbUljb24sXG5cdGNhdGVnb3J5OiAnY2wtYmxvY2tzJyxcblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIHBhbmVscyB0byBwcm92aWRlIGEgZGVlcCwgdmlzdWFsIGNvbnRleHQgZm9yIGEgcGFydGljdWxhciB0b3BpYy4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdBIEJpdCBNb3JlJyApLFxuXHRcdFx0bWVkaWFJRDogdHJ1ZSxcblx0XHRcdGltZzogVVJJX0NMX1VSTCArICdpL2V4YW1wbGUuanBnJyxcblx0XHRcdHJldmVyc2U6IHRydWUsXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogWyB7XG5cdFx0XHRuYW1lOiAnY29yZS9oZWFkaW5nJyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0bGV2ZWw6IDIsXG5cdFx0XHRcdGNvbnRlbnQ6IF9fKCAnT3B0aW9ucycgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50OiBfXyggJ0EgcGFuZWwgaXMgZGlmZmVyZW50IGZyb20gYSBjYXJkIGluIHRoYXQgYSBwYW5lbCBtYXkgaW5jbHVkZSA8YSBocmVmPVwiI1wiPm11bHRpcGxlIGxpbmtzPC9hPiBvciBidXR0b25zLicgKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAndXJpLWNsL2J1dHRvbicsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHRleHQ6IF9fKCAnTGVhcm4gTW9yZScgKSxcblx0XHRcdH0sXG5cdFx0fSBdLFxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0cmV2ZXJzZToge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGNvbnRlbnRXcmFwcGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHR9LFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGltYWdlIG9yIHRoZSBhZGQgaW1hZ2Ugc2VjdGlvblxuXHRcdGNvbnN0IGdldEltYWdlQnV0dG9uID0gKCBvcGVuRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXMubWVkaWFJRCB8fCBhdHRyaWJ1dGVzLmltZyApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmltZyB9XG5cdFx0XHRcdFx0XHRhbHQ9eyBhdHRyaWJ1dGVzLmFsdCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj17ICdmb3JtYXQtaW1hZ2UnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQWRkIGFuIGltYWdlJyxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGFuIGltYWdlLCB1cGxvYWQgYSBuZXcgb25lIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMgKTtcblxuXHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdyYXBwZXI6ICcnIH0gKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGlmICggJ3N1cGVyJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXBhbmVsLXN1cGVyLWJsdXJcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wYW5lbC1zdXBlci1pbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1lZGlhSUQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcGFuZWwtc3VwZXItdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInBvc3RlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFJRDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlPXsgVEVNUExBVEUgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgbWVkaWEnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gR2VuZXJhdGUgc2lkZWJhciBpbnNwZWN0b3IgY29udHJvbHMgZm9yIG90aGVyIGN1c3RvbSBhdHRyaWJ1dGVzXG5cdFx0Y29uc3QgY3JlYXRlSW5zcGVjdG9yQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRm9ybWF0JyApIH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSwgc3VwZXIgcGFuZWwgcHJldmlld3Mgd2lsbCBhcHBlYXIgc2ltcGxpZmllZCBpbiB0aGUgZWRpdG9yIHdpbmRvdy4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicGFuZWwtZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQYW5lbCBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdzdXBlcicgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGbGlwIHBhbmVsIGxheW91dFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMucmV2ZXJzZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHJldmVyc2U6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHREYXNoaWNvbixcblx0QnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxuXHRUb29sYmFyQnV0dG9uLFxuXHR3aXRoTm90aWNlcyxcblx0QmFzZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b25Hcm91cCxcblx0Rm9jYWxQb2ludFBpY2tlcixcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0UmljaFRleHQsXG5cdFBsYWluVGV4dCxcblx0VVJMSW5wdXQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvY2stbGlicmFyeS9zcmNcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcHJvbW8uc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3Byb21vJywge1xuXG5cdHRpdGxlOiBfXyggJ1Byb21vJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBwcm9tb3MgdG8gc2hvd2Nhc2UgdGltZWx5IG1hcmtldGluZyBpbmZvcm1hdGlvbi4nICksXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR0aXRsZTogX18oICdUaXRsZScgKSxcblx0XHRcdGJvZHk6IF9fKCAnU29tZSBib2R5IHRleHQnICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZS5qcGcnLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gVGhlIG1lZGlhSUQgaXMgd2hhdCBnb2VzIGludG8gdGhlIHNob3J0Y29kZSBmb3IgZnJvbnQtZW5kIGRpc3BsYXlcblx0Ly8gdGhlIGltZyBhbmQgYWx0IGFyZSBmb3IgZWRpdG9yIHBsYWNlaG9sZGVyc1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRsaW5rOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGxpbmt0ZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGFsdDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRsZXQgbWV0YTtcblx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRtZXRhID0gKFxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGFcIlxuXHRcdFx0XHRcdG9uU3VibWl0PXsgKCBldmVudCApID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT1cInJvdyBsaW5rXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgdGl0bGU9XCJMaW5rcyB0bzpcIj48RGFzaGljb24gaWNvbj1cImFkbWluLWxpbmtzXCIgLz48L2xhYmVsPlxuXHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxpbms6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy51cmkuZWR1L1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1ldGEtZmllbGRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGVkaXRvciB2aWV3IG9mIHRoZSBwcm9tbyBpdHNlbGZcblx0XHRjb25zdCBjcmVhdGVDb250ZW50RWRpdEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NlcyA9ICdjbC1wcm9tbyc7XG5cdFx0XHRpZiAoICEhIGF0dHJpYnV0ZXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEhIGlzU2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ21pY3JvJyA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyBtaWNybyc7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1wcm9tby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1taWNyby1jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1lvdXIgcHJvbW8gdGl0bGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbC1wcm9tby1taWNyby10ZXh0LWxpbmtcIj48UGxhaW5UZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggY29udGVudCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGlua3RleHQ6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5saW5rdGV4dCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnWW91ciBsaW5rIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+eyBtZXRhIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzdHlsZSA9ICdzdHlsZS1ibHVyJztcblx0XHRcdGlmICggISEgYXR0cmlidXRlcy5zdHlsZSAmJiAnZGVmYXVsdCcgIT09IGF0dHJpYnV0ZXMuc3R5bGUgKSB7XG5cdFx0XHRcdHN0eWxlID0gJ3N0eWxlLScgKyBhdHRyaWJ1dGVzLnN0eWxlO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGUgPSAnY2wtcHJvbW8tYmFja2Ryb3AgJyArIHN0eWxlO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbC1wcm9tby1ibG9jay1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWJhY2tkcm9wLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBzdHlsZSB9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXByb21vLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRpdGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PHA+PFBsYWluVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJvZHk6IGNvbnRlbnQgfSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5ib2R5IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIHByb21vIHRleHQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLXRleHQtbGlua1wiPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rdGV4dDogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxpbmt0ZXh0IH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdZb3VyIGxpbmsgdGV4dCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz48L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbC1wcm9tby1pbWctd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nXCI+PHNwYW4gY2xhc3NOYW1lPVwiY2wtcHJvbW8taW1nLWxpbmtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsLXByb21vLWJsb2NrLWVkaXRvci1tZXRhXCI+eyBtZXRhIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWVkaWFJRCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiBnZXRJbWFnZUJ1dHRvbiggb3BlbiApIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIEdlbmVyYXRlIGJsb2NrIGNvbnRyb2xzIGZvciBhbGlnbm1lbnQsIGV0Y1xuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXG5cdFx0XHRcdFx0eyAhISBhdHRyaWJ1dGVzLmltZyAmJiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXIgbGFiZWw9XCJDaG9vc2UgbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdDogbWVkaWEuYWx0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0bGV0IHN0eWxlQ29udHJvbDtcblx0XHRpZiAoICdtaWNybycgIT09IGF0dHJpYnV0ZXMuZm9ybWF0ICkge1xuXHRcdFx0c3R5bGVDb250cm9sID0gKFxuXHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3R5bGUnICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IF9fKCAnVG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UsIHByb21vIHByZXZpZXdzIHdpbGwgYXBwZWFyIHNpbXBsaWZpZWQgaW4gdGhlIGVkaXRvciB3aW5kb3cuJyApIH1cblx0XHRcdFx0XHRcdGlkPVwicHJvbW8tc3R5bGVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQcm9tbyBTdHlsZScgKSB9PlxuXHRcdFx0XHRcdFx0XHR7IFsgJ2RlZmF1bHQnLCAnYnJhbmQnLCAnY29uZmV0dGknIF0ubWFwKCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBrZXkgPSAoICdkZWZhdWx0JyA9PT0gdmFsdWUgKSA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gKCB1bmRlZmluZWQgPT09IGF0dHJpYnV0ZXMuc3R5bGUgKSA/ICcnIDogYXR0cmlidXRlcy5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9ICgga2V5ID09PSBmb3JtYXQgKTtcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGtleSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17IHNlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1wcmVzc2VkPXsgc2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBzdHlsZToga2V5IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdGb3JtYXQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvbW8tZm9ybWF0XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPXsgX18oICdQcm9tbyBGb3JtYXQnICkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgWyAnZGVmYXVsdCcsICdtaWNybycgXS5tYXAoICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcGl0YWxpemVkVmFsdWUgPSB2YWx1ZS5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gKCAnZGVmYXVsdCcgPT09IHZhbHVlICkgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBmb3JtYXQgPSAoIHVuZGVmaW5lZCA9PT0gYXR0cmlidXRlcy5mb3JtYXQgKSA/ICcnIDogYXR0cmlidXRlcy5mb3JtYXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gKCBrZXkgPT09IGZvcm1hdCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9eyBzZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyBmb3JtYXQ6IGtleSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2FwaXRhbGl6ZWRWYWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXG5cdFx0XHRcdFx0XHR7IHN0eWxlQ29udHJvbCB9XG5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdC8vIFNlbmQgdGhlIGVkaXRvciBpbnRlcmZhY2VzIHRvIHRoZSB2aWV3XG5cdFx0cmV0dXJuICggW1xuXHRcdFx0Y3JlYXRlQmxvY2tDb250cm9scygpLFxuXHRcdFx0Y3JlYXRlSW5zcGVjdG9yQ29udHJvbHMoKSxcblx0XHRcdGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSgpLFxuXHRcdF0gKTtcblx0fSwgLy8gRW5kIGVkaXRcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG5cdFRvb2xiYXJCdXR0b24sXG5cdEJ1dHRvbixcblx0d2l0aE5vdGljZXMsXG5cdEJhc2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uR3JvdXAsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRQbGFpblRleHQsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrQWxpZ25tZW50VG9vbGJhcixcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQnY29yZS9wYXJhZ3JhcGgnLFxuXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbICdjb3JlL3BhcmFncmFwaCcsIHsgcGxhY2Vob2xkZXI6ICcnLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvcXVvdGUuc3ZnJyApIH1cblx0XHRcdGFsdD1cImJ1dHRvblwiXG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSAoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKSA9PiB7XG5cdGxldCBjbGFzc2VzID0gJ2NsLXF1b3RlJztcblx0aWYgKCAhISBhdHRyaWJ1dGVzLmNsYXNzTmFtZSApIHtcblx0XHQvLyBAdG9kbyB0aGlzIGdldHMgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHdyYXBwZXIuLi4gcmVtb3ZlIGl0P1xuXHRcdGNsYXNzZXMgKz0gJyAnICsgYXR0cmlidXRlcy5jbGFzc05hbWU7XG5cdH1cblx0aWYgKCAhISBpc1NlbGVjdGVkICkge1xuXHRcdGNsYXNzZXMgKz0gJyBzZWxlY3RlZCc7XG5cdH1cblxuXHRpZiAoICEhIGF0dHJpYnV0ZXMuaW1nICkge1xuXHRcdGNsYXNzZXMgKz0gJyBoYXMtaW1hZ2UnO1xuXHR9IGVsc2Uge1xuXHRcdGNsYXNzZXMgKz0gJyBuby1pbWFnZSc7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3F1b3RlJywge1xuXG5cdHRpdGxlOiBfXyggJ1F1b3RlJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBxdW90ZXMgdG8gY3JlYXRlIGEgYmxvY2txdW90ZSBlbGVtZW50IHRoYXQgc3RhbmRzIG91dCBmcm9tIHRoZSBwYWdlLicgKSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHF1b3RlOiBfXyggJ09jZWFuLCB3aG8gaXMgdGhlIHNvdXJjZSBvZiBhbGwuJyApLFxuXHRcdFx0Y2l0YXRpb246IF9fKCAnSG9tZXInICksXG5cdFx0XHRtZWRpYUlEOiB0cnVlLFxuXHRcdFx0aW1nOiBVUklfQ0xfVVJMICsgJ2kvZXhhbXBsZV9zcXVhcmUuanBnJyxcblx0XHR9LFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRxdW90ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRjaXRhdGlvbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdG1lZGlhSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgfSApIHtcblx0XHQvLyBHZW5lcmF0ZSB0aGUgaW1hZ2Ugb3IgdGhlIGFkZCBpbWFnZSBzZWN0aW9uXG5cdFx0Y29uc3QgZ2V0SW1hZ2VCdXR0b24gPSAoIG9wZW5FdmVudCApID0+IHtcblx0XHRcdGlmICggYXR0cmlidXRlcy5tZWRpYUlEICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuaW1nIH1cblx0XHRcdFx0XHRcdGFsdD17IGF0dHJpYnV0ZXMuYWx0IH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltYWdlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRpY29uPXsgJ2Zvcm1hdC1pbWFnZScgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdBZGQgYW4gaW1hZ2UnLFxuXHRcdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgYW4gaW1hZ2UsIHVwbG9hZCBhIG5ldyBvbmUgb3Igc2VsZWN0IGEgZmlsZSBmcm9tIHlvdXIgbGlicmFyeS4nICksXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG1lZGlhICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0aW1nOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoIGF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQgKTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGltYWdlQ2xhc3MgPSAoICEhIGF0dHJpYnV0ZXMubWVkaWFJRCApID8gJ2NsLXF1b3RlLWltYWdlJyA6ICcnO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NlcyB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBpbWFnZUNsYXNzIH0+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0OiBtZWRpYS5hbHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZzogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gZ2V0SW1hZ2VCdXR0b24oIG9wZW4gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxibG9ja3F1b3RlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHF1b3RlOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5xdW90ZSB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdUaGUgcXVvdGUnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvYmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdDxjaXRlPjxQbGFpblRleHRcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbnRlbnQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNpdGF0aW9uOiBjb250ZW50IH0gKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jaXRhdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdBbm9ueW1vdXMnICkgfVxuXHRcdFx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHQvPjwvY2l0ZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUJsb2NrQ29udHJvbHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9XCJjb250cm9sc1wiPlxuXHRcdFx0XHRcdHsgISEgYXR0cmlidXRlcy5pbWcgJiYgKFxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyIGxhYmVsPVwiQ2hvb3NlIG1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17ICggbWVkaWEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IG1lZGlhLmFsdCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWc6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYUlEOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tZWRpYUlEIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBtZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gU2VuZCB0aGUgZWRpdG9yIGludGVyZmFjZXMgdG8gdGhlIHZpZXdcblx0XHRyZXR1cm4gKCBbXG5cdFx0XHRjcmVhdGVCbG9ja0NvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gW1xuXHQndXJpLWNsL3RhYicsXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFicy5zdmcnICkgfVxuXHRcdFx0YWx0PVwiYnV0dG9uXCJcblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NOYW1lcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0bGV0IGNsYXNzZXMgPSAnY2wtdGFicyc7XG5cdGlmICggISEgYXR0cmlidXRlcy5jbGFzc05hbWUgKSB7XG5cdFx0Ly8gQHRvZG8gdGhpcyBnZXRzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byB3cmFwcGVyLi4uIHJlbW92ZSBpdD9cblx0XHRjbGFzc2VzICs9ICcgJyArIGF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiBjbGFzc2VzO1xufTtcblxuY29uc3QgZ2V0VGFic1RlbXBsYXRlID0gKCB0YWJzICkgPT4ge1xuXHRyZXR1cm4gWyAuLi5BcnJheSggdGFicyApIF0ubWFwKCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gWyAndXJpLWNsL3RhYicsIHt9IF07XG5cdH0gKTtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndXJpLWNsL3RhYnMnLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFicycgKSxcblx0aWNvbjogY3VzdG9tSWNvbixcblx0Y2F0ZWdvcnk6ICdjbC1ibG9ja3MnLFxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgdGFicyB0byBkaXNwbGF5IGNvbnRlbnQgdGhhdCBoYXMgYSBjb3JyZWxhdGlvbiBidXQgaXMgbm90IGRpcmVjdGx5IHJlbGF0ZWQuJyApLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dGFiczogMixcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICd1cmktY2wvdGFiJyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdHRpdGxlOiAnQXBwbGVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ0VhY2ggdGFiIGNhbiBjb250YWluIHBhcmFncmFwaHMsIGxpbmtzLCBhbmQgb3RoZXIgY29tcG9uZW50cy4nICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmFtZTogJ3VyaS1jbC9idXR0b24nLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBfXyggJ01vcmUgYWJvdXQgZnJ1aXQnICksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAndXJpLWNsL3RhYicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHR0aXRsZTogJ09yYW5nZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6ICdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF9fKCAnVGhpcyB0YWIgd2lsbCBoYXZlIGRpZmZlcmVudCBpbmZvcm1hdGlvbiB0aGFuIHRoZSBmaXJzdCB0YWIsIGJ1dCB0aGUgaW5mb3JtYXRpb24gc2hvdWxkIGNvcnJlbGF0ZSBzb21laG93LicgKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBfXyggJ09ubHkgb25lIHRhYiB3aWxsIGJlIHZpc2libGUgYXQgYSB0aW1lIG9uIHRoZSBsaXZlIHBhZ2UuJyApLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0YWJzOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDIsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdC8vIEdlbmVyYXRlIHRoZSBpbWFnZSBvciB0aGUgYWRkIGltYWdlIHNlY3Rpb25cblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHQvLyBHZW5lcmF0ZSBzaWRlYmFyIGluc3BlY3RvciBjb250cm9scyBmb3Igb3RoZXIgY3VzdG9tIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBjcmVhdGVJbnNwZWN0b3JDb250cm9scyA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RhYnMnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50YWJzIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dFRhYnMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhYnM6IG5leHRUYWJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17IDYgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNyZWF0ZUNvbnRlbnRFZGl0Rm9ybSA9ICgpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzIH0+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9eyBnZXRUYWJzVGVtcGxhdGUoIGF0dHJpYnV0ZXMudGFicyApIH1cblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPVwiYWxsXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHRoZSBlZGl0b3IgaW50ZXJmYWNlcyB0byB0aGUgdmlld1xuXHRcdHJldHVybiAoIFtcblx0XHRcdGNyZWF0ZUluc3BlY3RvckNvbnRyb2xzKCksXG5cdFx0XHRjcmVhdGVDb250ZW50RWRpdEZvcm0oKSxcblx0XHRdICk7XG5cdH0sIC8vIEVuZCBlZGl0XG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0KTtcblx0fSxcblxufSApO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuY29uc3Qge1xuXHRQbGFpblRleHQsXG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbXG5cdCdjb3JlL2ltYWdlJyxcblx0J2NvcmUvaGVhZGluZycsXG5cdCdjb3JlL3BhcmFncmFwaCcsXG5cdCdjb3JlL2xpc3QnLFxuXHQndXJpLWNsL2J1dHRvbicsXG5cdCd1cmktY2wvY2FyZCcsXG5cdCd1cmktY2wvbWV0cmljJyxcblx0J3VyaS1jbC9xdW90ZScsXG5dO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ1lvdXIgdGFiIGNvbnRlbnQuLi4nLCBkcm9wQ2FwOiBmYWxzZSB9IF0sXG5dO1xuXG5jb25zdCBjdXN0b21JY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdHdpZHRoPVwiMjBcIlxuXHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGljb25cIlxuXHRcdFx0c3JjPXsgKCBVUklfQ0xfVVJMICsgJ2kvaWNvbnMvdGFiLnN2ZycgKSB9XG5cdFx0XHRhbHQ9XCJidXR0b25cIlxuXHRcdC8+XG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3VyaS1jbC90YWInLCB7XG5cblx0dGl0bGU6IF9fKCAnVGFiJyApLFxuXHRpY29uOiBjdXN0b21JY29uLFxuXHRwYXJlbnQ6IFsgJ3VyaS1jbC90YWJzJyBdLFxuXHRjYXRlZ29yeTogJ2NsLWJsb2NrcycsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRpbnNlcnRlcjogZmFsc2UsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNsLXRhYlwiPlxuXHRcdFx0XHQ8aDE+PFBsYWluVGV4dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb250ZW50ICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZTogY29udGVudCB9ICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1RhYiBUaXRsZScgKSB9XG5cdFx0XHRcdFx0a2VlcFBsYWNlaG9sZGVyT25Gb2N1cz17IHRydWUgfVxuXHRcdFx0XHQvPjwvaDE+XG5cdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0dGVtcGxhdGU9eyBURU1QTEFURSB9XG5cdFx0XHRcdFx0dGVtcGxhdGVMb2NrPXsgZmFsc2UgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSwgLy8gRW5kIGVkaXRcblxuXHRzYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHQpO1xuXHR9LFxuXG59ICk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Fic3RyYWN0L2Jsb2NrJztcbmltcG9ydCAnLi9ib3hvdXQvYmxvY2snO1xuaW1wb3J0ICcuL2JyZWFrb3V0L2Jsb2NrJztcbmltcG9ydCAnLi9idXR0b24vYmxvY2snO1xuaW1wb3J0ICcuL2NhcmQvYmxvY2snO1xuaW1wb3J0ICcuL2RhdGUvYmxvY2snO1xuaW1wb3J0ICcuL2hlcm8vYmxvY2snO1xuaW1wb3J0ICcuL21lbnUvYmxvY2snO1xuaW1wb3J0ICcuL21ldHJpYy9ibG9jayc7XG5pbXBvcnQgJy4vbm90aWNlL2Jsb2NrJztcbmltcG9ydCAnLi9wYW5lbC9ibG9jayc7XG5pbXBvcnQgJy4vcHJvbW8vYmxvY2snO1xuaW1wb3J0ICcuL3F1b3RlL2Jsb2NrJztcbmltcG9ydCAnLi90YWJzL3RhYic7XG5pbXBvcnQgJy4vdGFicy9ibG9jayc7XG4iXSwic291cmNlUm9vdCI6IiJ9