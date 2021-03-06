/**
 * TABS
 */

( function() {
	'use strict';

	window.addEventListener( 'load', initCLTabs, false );

	function initCLTabs() {
		let i;

		const els = document.querySelectorAll( '.cl-tabs' );
		for ( i = 0; i < els.length; i++ ) {
			formatTabs( els[ i ], i + 1 );
		}
	}

	/**
	 * Restyle the component to make it look great
	 *
	 * @param {Object} tabbed The .cl-tabs element.
	 * @param {number} tabbedIndex The index of tabbed on the page.
	 */
	function formatTabs( tabbed, tabbedIndex ) {
		let header, href, li, a, i, numtabs;

		// Add a hook for the js version styles
		tabbed.classList.add( 'cl-tabs-js' );

		const panels = tabbed.querySelectorAll( '.cl-tab' );

		// Create tabs
		const tablist = document.createElement( 'ul' );
		tablist.setAttribute( 'role', 'tablist' );

		numtabs = 0;

		for ( i = 0; i < panels.length; i++ ) {
			numtabs++;

			// Try to use panel h1 or h2 for tab names, otherwise use generic name
			header = panels[ i ].querySelector( 'h1' );
			if ( header ) {
				header = header.innerHTML;
			} else {
				header = panels[ i ].querySelector( 'h2' );
				if ( header ) {
					header = header.innerHTML;
				} else {
					header = 'Section ' + numtabs;
				}
			}

			// Try to use panel id for tab href, otherwise create generic id for panel and href.
			href = panels[ i ].id;
			if ( '' === href ) {
				href = 'cl-tabs-' + tabbedIndex + '-tab-section-' + numtabs;
				panels[ i ].id = href;
			}

			li = document.createElement( 'li' );
			li.setAttribute( 'role', 'presentation' );

			a = document.createElement( 'a' );
			a.href = '#' + href;
			a.id = 'cl-tabs-' + tabbedIndex + '-tab-' + numtabs;
			a.setAttribute( 'role', 'tab' );
			a.setAttribute( 'tabindex', '-1' );
			a.innerHTML = header;

			li.appendChild( a );
			tablist.appendChild( li );
		}

		tabbed.insertBefore( tablist, panels[ 0 ] );

		// Add event listeners to tabs
		const tabs = tablist.querySelectorAll( 'a' );
		for ( i = 0; i < tabs.length; i++ ) {
			tabs[ i ].addEventListener(
				'click',
				function( e ) {
					handleClick( e, tabs, tablist, panels );
				}
			);
			tabs[ i ].addEventListener(
				'keydown',
				function( e ) {
					handleKeystroke( e, tabs, panels );
				}
			);
		}

		// Add tab panel semantics and hide them all
		for ( i = 0; i < panels.length; i++ ) {
			panels[ i ].setAttribute( 'role', 'tabpanel' );
			panels[ i ].setAttribute( 'tabindex', '-1' );
			panels[ i ].setAttribute( 'aria-labelledby', tabs[ i ].id );
			panels[ i ].hidden = true;
		}

		// Initially activate the first tab and reveal the first tab panel
		tabs[ 0 ].removeAttribute( 'tabindex' );
		tabs[ 0 ].setAttribute( 'aria-selected', 'true' );
		panels[ 0 ].hidden = false;

		// Go to the anchored tab, if there is one
		const anchor = getAnchoredElement( tabbed );
		if ( null !== anchor ) {
			switchTab( tabs, panels, tablist.querySelector( '[aria-selected]' ), anchor );
		}
	}

	/**
	 * Get any URL anchor and return the corresponding tab
	 *
	 * @param {Object} tabbed The current .cl-tabs element.
	 * @return {Object} The tab <a> that controls the anchored panel.
	 */
	function getAnchoredElement( tabbed ) {
		let section, anchor;

		const urlParts = document.URL.split( '#' );
		anchor = null;

		if ( urlParts.length > 1 ) {
			section = tabbed.querySelector( '#' + urlParts[ 1 ] );

			if ( null !== section ) {
				anchor = document.getElementById( section.getAttribute( 'aria-labelledby' ) );
			}
		}

		return anchor;
	}

	/**
	 * Handle tab clicking
	 *
	 * @param {Object} e The event object.
	 * @param {Array} tabs The tab <a>'s.
	 * @param {Object} tablist The tabs <ul>.
	 * @param {Array} panels The tab sections.
	 */
	function handleClick( e, tabs, tablist, panels ) {
		e.preventDefault();

		const currentTab = tablist.querySelector( '[aria-selected]' );

		if ( e.currentTarget !== currentTab ) {
			switchTab( tabs, panels, currentTab, e.currentTarget );
		}
	}

	/**
	 * Handle key input
	 *
	 * @param {Object} e The event object.
	 * @param {Array} tabs The tab <a>'s.
	 * @param {Array} panels The tab sections.
	 */
	function handleKeystroke( e, tabs, panels ) {
		let dir;

		// Get the index of the current tab in the tabs node list
		const index = Array.prototype.indexOf.call( tabs, e.currentTarget );

		// Work out which key the user is pressing and
		// Calculate the new tab's index where appropriate
		if ( 37 === e.which ) {
			dir = index - 1;
		} else if ( 39 === e.which ) {
			dir = index + 1;
		} else if ( 40 === e.which ) {
			dir = 'down';
		} else {
			dir = null;
		}

		if ( null !== dir ) {
			e.preventDefault();

			// If the down key is pressed, move focus to the open panel,
			// otherwise switch to the adjacent tab
			if ( 'down' === dir ) {
				panels[ index ].focus();
			} else if ( tabs[ dir ] ) {
				switchTab( tabs, panels, e.currentTarget, tabs[ dir ] );
			} else {
				void 0;
			}
		}
	}

	/**
	 * The tab switching function
	 *
	 * @param {Array} tabs The tab <a>'s.
	 * @param {Array} panels The tab sections.
	 * @param {Object} oldTab The current tab.
	 * @param {Object} newTab The tab selected.
	 */
	function switchTab( tabs, panels, oldTab, newTab ) {
		newTab.focus();

		// Make the active tab focusable by the user (Tab key)
		newTab.removeAttribute( 'tabindex' );

		// Set the selected state
		newTab.setAttribute( 'aria-selected', 'true' );
		oldTab.removeAttribute( 'aria-selected' );
		oldTab.setAttribute( 'tabindex', '-1' );

		// Get the indices of the new and old tabs to find the correct
		// tab panels to show and hide
		const index = Array.prototype.indexOf.call( tabs, newTab );
		const oldIndex = Array.prototype.indexOf.call( tabs, oldTab );
		panels[ oldIndex ].hidden = true;
		panels[ index ].hidden = false;
	}
}() );
