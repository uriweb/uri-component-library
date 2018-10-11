/**
 * TABS
 *
 * @package uri-component-library
 */

( function() {

	'use strict';

	window.addEventListener( 'load', initCLTabs, false );

	function initCLTabs() {

		var els, i;

		els = document.querySelectorAll( '.cl-tabs' );
		for ( i = 0; i < els.length; i++ ) {
			formatTabs( els[i], i + 1 );
		}

	}

	/*
	 * Restyle the component to make it look great
	 * @param tabbed el the .cl-tabs element
	 * @param tabbedIndex num the index of tabbed on the page
	 */
	function formatTabs( tabbed, tabbedIndex ) {

		var header, href, tabs, tablist, panels, li, a, i, numtabs, anchor;

		// Add a hook for the js version styles
		tabbed.classList.add( 'cl-tabs-js' );

		panels = tabbed.querySelectorAll( '.cl-tab' );

		// Create tabs
		tablist = document.createElement( 'ul' );
		tablist.setAttribute( 'role', 'tablist' );

		numtabs = 0;

		for ( i = 0; i < panels.length; i++ ) {

			numtabs++;

			// Try to use panel h1 or h2 for tab names, otherwise use generic name
			header = panels[i].querySelector( 'h1' );
			if ( header ) {
				header = header.innerHTML;
			} else {
				header = panels[i].querySelector( 'h2' );
				if ( header ) {
					header = header.innerHTML;
				} else {
					header = 'Section ' + numtabs;
				}
			}

			// Try to use panel id for tab href, otherwise create generic id for panel and href.
			href = panels[i].id;
			if ( '' === href ) {
				href = 'cl-tabs-' + tabbedIndex + '-tab-section-' + numtabs;
				panels[i].id = href;
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

		tabbed.insertBefore( tablist, panels[0] );

		// Add event listeners to tabs
		tabs = tablist.querySelectorAll( 'a' );
		for ( i = 0; i < tabs.length; i++ ) {
			tabs[i].addEventListener(
				'click',
				function( e ) {
					handleClick( e, tabs, tablist, panels );
				}
				);
			tabs[i].addEventListener(
				'keydown',
				function( e ) {
					handleKeystroke( e, tabs, panels );
				}
				);
		}

		// Add tab panel semantics and hide them all
		for ( i = 0; i < panels.length; i++ ) {

			panels[i].setAttribute( 'role', 'tabpanel' );
			panels[i].setAttribute( 'tabindex', '-1' );
			panels[i].setAttribute( 'aria-labelledby', tabs[i].id );
			panels[i].hidden = true;

		}

		// Initially activate the first tab and reveal the first tab panel
		tabs[0].removeAttribute( 'tabindex' );
		tabs[0].setAttribute( 'aria-selected', 'true' );
		panels[0].hidden = false;

		// Go to the anchored tab, if there is one
		anchor = getAnchoredElement( tabbed );
		if ( null !== anchor ) {
			switchTab( tabs, panels, tablist.querySelector( '[aria-selected]' ), anchor );
		}

	}

	/*
	 * Get any anchor in url
	 * @param tabbed el the current .cl-tabs element
	 * @return the anchored element
	 */
	function getAnchoredElement( tabbed ) {

		var urlParts, section, anchor;

		urlParts = document.URL.split( '#' );
		anchor = null;

		if ( urlParts.length > 1 ) {

			section = tabbed.querySelector( '#' + urlParts[1] );

			if ( null !== section ) {
				anchor = document.getElementById( section.getAttribute( 'aria-labelledby' ) );
			}

		}

		return anchor;

	}

	/*
	 * Handle tab clicking
	 * @param e obj the event object
	 */
	function handleClick( e, tabs, tablist, panels ) {

		var currentTab;

		e.preventDefault();

		currentTab = tablist.querySelector( '[aria-selected]' );

		if ( e.currentTarget !== currentTab ) {
			switchTab( tabs, panels, currentTab, e.currentTarget );
		}

	}

	/*
	 * Handle key input
	 * @param e obj the event object
	 */
	function handleKeystroke( e, tabs, panels ) {

		// Get the index of the current tab in the tabs node list
		var index = Array.prototype.indexOf.call( tabs, e.currentTarget );

		// Work out which key the user is pressing and
		// Calculate the new tab's index where appropriate
		var dir = 37 === e.which ? index - 1 : 39 === e.which ? index + 1 : 40 === e.which ? 'down' : null;

		if ( null !== dir ) {
			e.preventDefault();

			// If the down key is pressed, move focus to the open panel,
			// otherwise switch to the adjacent tab
			if ( 'down' === dir ) {
				panels[index].focus();
			} else if ( tabs[dir] ) {
				switchTab( tabs, panels, e.currentTarget, tabs[dir] );
			} else {
				void 0;
			}

		}
	}

	/*
	 * The tab switching function
	 * @param oldTab el the current tab
	 * @param newTab el the tab selected
	 */
	function switchTab( tabs, panels, oldTab, newTab ) {

		var index, oldIndex;

		newTab.focus();

		// Make the active tab focusable by the user (Tab key)
		newTab.removeAttribute( 'tabindex' );

		// Set the selected state
		newTab.setAttribute( 'aria-selected', 'true' );
		oldTab.removeAttribute( 'aria-selected' );
		oldTab.setAttribute( 'tabindex', '-1' );

		// Get the indices of the new and old tabs to find the correct
		// tab panels to show and hide
		index = Array.prototype.indexOf.call( tabs, newTab );
		oldIndex = Array.prototype.indexOf.call( tabs, oldTab );
		panels[oldIndex].hidden = true;
		panels[index].hidden = false;

	}

})();
