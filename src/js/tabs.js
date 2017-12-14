(function () {

    'use strict';
        
    window.addEventListener('load', initCLTabs, false);
    
    var numtabs = 0; // Keep this global so we can advance it for each tab we create.
    
    function initCLTabs() {
        
        var els, i;
        
        els = document.querySelectorAll('.cl-tabs');
        for (i = 0; i<els.length; i++) {
            formatTabs(els[i]);
        }
        
    }
    
    function formatTabs(tabbed) {
    
        var panels, tablist, header, href, li, a, i;
        
        // Add a hook for the js version styles
        tabbed.classList.add('cl-tabs-js');
        
        panels = tabbed.querySelectorAll('section');
        
        // Create tabs
        tablist = document.createElement('ul');
        tablist.setAttribute('role', 'tablist');
        
        for (i=0; i<panels.length; i++) {
            
            numtabs++;
            
            // Try to use panel h1 or h2 for tab names, otherwise use generic name
            header = panels[i].querySelector('h1');
            if (header) {
                header = header.innerHTML;
            } else {
                header = panels[i].querySelector('h2');
                if (header) {
                    header = header.innerHTML;
                } else {
                    header = 'Section ' + numtabs;
                }
            }
            
            // Try to use panel id for tab href, otherwise create generic id for panel and href.
            href = panels[i].id;
            if (href == '') {
                href = 'cl-tab-section-' + numtabs;
                panels[i].id = href;
            }
            
            li = document.createElement('li');
            li.setAttribute('role', 'presentation');
            
            a = document.createElement('a');
            a.href = '#' + href;
            a.id = ('cl-tabs-tab-' + numtabs);
            a.setAttribute('role', 'tab');
            a.setAttribute('tabindex', '-1');
            a.innerHTML = header;
            
            li.appendChild(a);
            tablist.appendChild(li);
        }
        
        tabbed.insertBefore(tablist, panels[0]);
        
        
        // Add event listeners to tabs
        var tabs = tablist.querySelectorAll('a');
        for (i=0; i<tabs.length; i++) {
            
            tabs[i].addEventListener('click', function (e) {
                e.preventDefault();
                var currentTab = tablist.querySelector('[aria-selected]');
                if (e.currentTarget !== currentTab) {
                    switchTab(panels, tabs, currentTab, e.currentTarget);
                }
            });
            
            // Handle keydown events for keyboard users
            tabs[i].addEventListener('keydown', function (e) {

                // Get the index of the current tab in the tabs node list
                var index = Array.prototype.indexOf.call(tabs, e.currentTarget);

                // Work out which key the user is pressing and
                // Calculate the new tab's index where appropriate
                var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;

                if (dir !== null) {
                    e.preventDefault();

                    // If the down key is pressed, move focus to the open panel,
                    // otherwise switch to the adjacent tab
                    if (dir === 'down') {
                        panels[i].focus();
                    } else if (tabs[dir]) {
                        switchTab(panels, tabs, e.currentTarget, tabs[dir]);
                    } else {
                        void 0;
                    }

                }

            });
        }


        // Add tab panel semantics and hide them all
        for (i=0; i<panels.length; i++) {
            
            panels[i].setAttribute('role', 'tabpanel');
            panels[i].setAttribute('tabindex', '-1');
            
            var id = panels[i].getAttribute('id');
            panels[i].setAttribute('aria-labelledby', tabs[i].id);
            panels[i].hidden = true;
            
        };

        // Initially activate the first tab and reveal the first tab panel
        tabs[0].removeAttribute('tabindex');
        tabs[0].setAttribute('aria-selected', 'true');
        panels[0].hidden = false;
        
    }
    
    // The tab switching function
    function switchTab(panels, tabs, oldTab, newTab) {

        newTab.focus();

        // Make the active tab focusable by the user (Tab key)
        newTab.removeAttribute('tabindex');

        // Set the selected state
        newTab.setAttribute('aria-selected', 'true');
        oldTab.removeAttribute('aria-selected');
        oldTab.setAttribute('tabindex', '-1');

        // Get the indices of the new and old tabs to find the correct
        // tab panels to show and hide
        var index = Array.prototype.indexOf.call(tabs, newTab);
        var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
        panels[oldIndex].hidden = true;
        panels[index].hidden = false;

    };
    
})();