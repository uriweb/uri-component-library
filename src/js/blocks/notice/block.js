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
	InnerBlocks,
} = wp.blockEditor;

const ALLOWED_BLOCKS = [
	'core/paragraph',
];

const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Your notice content...', dropCap: false } ],
];

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/notice.svg' ) }
			alt="button"
		/>
	);
};

registerBlockType( 'uri-cl/notice', {
	title: __( 'Notice' ),
	icon: customIcon,
	category: 'cl-blocks',
	attributes: {
		expiration: {
			type: 'string',
		},
		title: {
			type: 'string',
		},
		style: {
			type: 'string',
		},
		show_expired: {
			type: 'bool',
			default: false,
		},
		dismissible: {
			type: 'bool',
			default: true,
		},
		contentWrapper: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes } ) {
		const createContentEditForm = () => {
			let classes = 'cl-notice';
			if ( !! attributes.className ) {
				classes += ' ' + attributes.className;
			}

			if ( !! attributes.style ) {
				classes += ' ' + attributes.style;
			}

			// Display a message on the admin screen if the notice is expired
			const date = new Date();
			const exp = new Date( attributes.expiration );
			let expirationMessage = '';
			let syntax = 'and will not';
			if ( !! attributes.show_expired ) {
				syntax = 'but will still';
			}
			if ( !! attributes.expiration && exp.getTime() <= date.getTime() ) {
				expirationMessage = <div className="cl-component-message">This notice has expired { syntax } be visible when published.</div>;
			}

			setAttributes( { contentWrapper: '' } );

			return (
				<div className="container">
					{ expirationMessage }
					<div className={ classes }>
						<h1><PlainText
							onChange={ ( content ) => setAttributes( { title: content } ) }
							value={ attributes.title }
							placeholder={ __( 'Your notice title' ) }
							keepPlaceholderOnFocus={ true }
						/></h1>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={ TEMPLATE }
						/>
					</div>
				</div>
			);
		};

		const createInspectorControls = () => {
			return (
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<BaseControl
								label={ __( 'Notice Style' ) }
								id="notice-style"
							>
								<ButtonGroup aria-label={ __( 'Notice Style' ) }>
									{ [ 'default', 'urgent', 'covid19' ].map( ( value ) => {
										const capitalizedValue = value.charAt( 0 ).toUpperCase() + value.slice( 1 );
										const key = ( 'default' === value ) ? '' : value;
										const style = ( undefined === attributes.style ) ? '' : attributes.style;
										const selected = ( key === style );

										return (
											<Button
												key={ key }
												isSecondary
												isPrimary={ selected }
												aria-pressed={ selected }
												onClick={ ( content ) => setAttributes( { style: key } ) }
											>
												{ capitalizedValue }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</BaseControl>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label="Allow visitors to dismiss this notice"
								checked={ attributes.dismissible }
								onChange={ ( content ) => setAttributes( { dismissible: content } ) }
							/>
						</PanelRow>

						<PanelRow>
							<DatePicker
								label="Expiration date"
								currentDate={ attributes.expiration }
								onChange={ ( date ) => setAttributes( { expiration: date } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label="Show after expired"
								checked={ attributes.show_expired }
								onChange={ ( content ) => setAttributes( { show_expired: content } ) }
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createContentEditForm(),
			createInspectorControls(),
		] );
	}, // End edit

	save( { attributes } ) {
		return (
			<InnerBlocks.Content />
		);
	},

} );
