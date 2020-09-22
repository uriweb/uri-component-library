const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PlainText,
	RichText,
	URLInput,
	InspectorControls,
	BlockControls,
	Toolbar,
	BlockAlignmentToolbar,
} = wp.blockEditor;
const {
	Dashicon,
	PanelBody,
	PanelRow,
	BaseControl,
	TextControl,
	Button,
	ButtonGroup,
	RangeControl,
	ToggleControl,
	SelectControl,
} = wp.components;

const customIcon = () => {
	return (
		<img
			width="20"
			height="20"
			className="dashicon"
			src={ ( URI_CL_URL + 'i/icons/menu.svg' ) }
			alt="button"
		/>
	);
};

const classNames = ( attributes, isSelected ) => {
	let classes = 'cl-menu';
	if ( !! isSelected ) {
		classes += ' selected';
	}

	return classes;
};

let menuNames = false;

const getMenuNames = () => {
	const xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = () => {
		if ( xmlhttp.readyState === XMLHttpRequest.DONE ) {
			if ( 200 === xmlhttp.status ) {
				const parsed = JSON.parse( xmlhttp.responseText );
				const list = [];
				for ( const m of parsed ) {
					list.push( {
						label: m.name,
						value: m.name,
					} );
				}
				menuNames = list;
			}
			return false;
		}
	};

	xmlhttp.open( 'GET', URI_CL_SITE_URL + '/wp-json/uri-component-library/v1/menus', true );
	xmlhttp.send();
};

getMenuNames();

registerBlockType( 'uri-cl/menu', {

	title: __( 'Menu' ),
	icon: customIcon,
	category: 'cl-blocks',
	attributes: {
		name: {
			type: 'string',
		},
		depth: {
			type: 'number',
			default: 1,
		},
		showtitle: {
			type: 'bool',
			default: false,
		},
		title: {
			type: 'string',
		},
	},

	edit( { attributes, className, setAttributes, isSelected } ) {
		// Generate editor view of the button itself
		const createContentEditForm = () => {
			// Set the classnames
			const classes = classNames( attributes, isSelected );

			let name = '';
			let title = '';
			if ( !! attributes.name ) {
				name = ': ' + attributes.name;
				title = attributes.name;
			}

			if ( !! attributes.title ) {
				title = attributes.title;
			}

			let titleMeta = '';
			if ( attributes.showtitle ) {
				titleMeta = <span className="cl-menu-toggle">{ title }</span>;
			}

			return (
				<div className="container cl-menu-block-form">
					<div className={ classes }>
						{ titleMeta }
						<div className="cl-menu-placeholder">Menu placeholder{ name }</div>
					</div>
				</div>
			);
		};

		let inspectorControls = (
			<PanelBody>
				<PanelRow>
					<div style={ { paddingRight: '7px' } }><Dashicon icon="warning" /></div>
					<div>This site has no menus.  Create one under the Appearance tab.</div>
				</PanelRow>
			</PanelBody>
		);

		if ( !! menuNames ) {
			inspectorControls = (
				<PanelBody>
					<SelectControl
						label={ __( 'Menu' ) }
						value={ attributes.name }
						onChange={ ( name ) => setAttributes( { name } ) }
						options={ menuNames }
					/>
					<PanelRow>
						<TextControl
							label={ __( 'Title' ) }
							help={ __( 'If no title is provided, the menu name will be used.' ) }
							onChange={ ( content ) => setAttributes( { title: content } ) }
							value={ attributes.title }
							className="meta-field"
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show title on desktop' ) }
							help={ __( 'Titles are always shown on mobile.' ) }
							checked={ attributes.showtitle }
							onChange={ ( content ) => setAttributes( { showtitle: content } ) }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={ __( 'Depth' ) }
							max={ 2 }
							min={ 1 }
							onChange={ ( depth ) => setAttributes( { depth } ) }
							value={ attributes.depth }
						/>
					</PanelRow>
				</PanelBody>
			);
		}

		// Generate sidebar inspector controls for other custom attributes
		const createInspectorControls = () => {
			return (
				<InspectorControls>
					{ inspectorControls }
				</InspectorControls>
			);
		};

		// Send the editor interfaces to the view
		return ( [
			createInspectorControls(),
			createContentEditForm(),
		] );
	}, // End edit

} );
