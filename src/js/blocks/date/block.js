const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;

const {
	PanelBody,
	PanelRow,
	withNotices,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup,
	ToggleControl,
	DatePicker,
} = wp.components;

const {
	AlignmentToolbar,
	PlainText,
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	BlockControls,
	Toolbar,
	BlockAlignmentToolbar,
} = wp.blockEditor;

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/date.svg' ) }
			alt="date"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-date';
	if ( !! attributes.className ) {
		// @todo this gets automatically applied to wrapper... remove it?
		classes += ' ' + attributes.className;
	}
	if ( !! isSelected ) {
		classes += ' selected';
	}
	if ( !! attributes.color ) {
		classes += ' cl-date-' + attributes.color;
	}
	if ( !! attributes.float ) {
		classes += ' ' + attributes.float;
	}
	return classes;
};

registerBlockType( 'uri-cl/date', {

	title: __( 'Date' ),
	icon: customIcon,
	category: 'cl-blocks',
	description: __( 'Use dates to display a downloadable calendar event.' ),
	example: {
		attributes: {
			date: __( 'July 28, 2061' ),
			caption: __( 'Halley’s Comet reaches perihelion' ),
		},
	},

	attributes: {
		date: {
			type: 'string',
		},
		caption: {
			type: 'string',
		},
		color: {
			type: 'string',
		},
		float: {
			type: 'string',
		},
		show_year: {
			type: 'bool',
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		// Generate editor view of the card itself
		const createContentEditForm = () => {
			const classes = classNames( attributes, isSelected );

			if ( ! attributes.date ) {
				setAttributes( { date: new Date() } );
			}

			const date = new Date( attributes.date );

			let month = date.toLocaleString( 'default', { month: 'long' } );
			if ( !! attributes.show_year ) {
				month = date.toLocaleString( 'default', { month: 'short' } ) + ' ' + date.getFullYear();
			}

			// Display a message on the admin screen if the notice is expired
			const today = new Date();
			let expirationMessage = '';
			if ( !! attributes.date && date.getTime() <= today.getTime() ) {
				expirationMessage = <div className="cl-component-message">This date may no longer be relevant.</div>;
			}

			return (
				<div className="container">
					{ expirationMessage }
					<div className={ classes }>
						<div className="cl-date-content-wrapper">
							<div className="cl-date-content">
								<div className="cl-date-month">
									{ month }
								</div>
								<div className="cl-date-day">
									{ date.getDate() }
								</div>
							</div>
						</div>
						<div className="cl-date-caption-wrapper">
							<div className="cl-date-caption">
								<PlainText
									onChange={ ( content ) => setAttributes( { caption: content } ) }
									value={ attributes.caption }
									placeholder={ __( 'Your date caption' ) }
									keepPlaceholderOnFocus={ true }
								/>
							</div>
						</div>
					</div>
				</div>
			);
		};

		// Generate block controls for alignment, etc
		const createBlockControls = () => {
			return (
				<BlockControls key="controls">
					<BlockAlignmentToolbar
						value={ attributes.float }
						onChange={ ( content ) => setAttributes( { float: content } ) }
					/>
				</BlockControls>
			);
		};

		// Generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<BaseControl
								label={ __( 'Date Color' ) }
								id="date-color"
							>
								<ButtonGroup aria-label={ __( 'Date Color' ) }>
									{ [ 'blue', 'red', 'grey' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'blue' === value ) ? '' : value;
										const color = ( undefined === attributes.color ) ? '' : attributes.color;
										const selected = ( key === color );

										return (
											<Button
												key={ key }
												isSecondary
												isPrimary={ selected }
												aria-pressed={ selected }
												onClick={ ( content ) => setAttributes( { color: key } ) }
											>
												{ capitalizedValue }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<DatePicker
								label="Date"
								currentDate={ attributes.date }
								onChange={ ( date ) => setAttributes( { date } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label="Show year"
								checked={ attributes.show_year }
								onChange={ ( content ) => setAttributes( { show_year: content } ) }
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createBlockControls(),
			createInspectorControls(),
			createContentEditForm(),
		] );
	}, // End edit

} );
