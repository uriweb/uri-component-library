<?php

	$title = __( 'Headline and people', 'uri' );
	$description = _x( 'Headline and list of people.', 'Block pattern description', 'uri' );
	$keywords = 'headline, people, person, column';

	$pattern = <<<PATTERN
<!-- wp:group -->
<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading -->
<h2>Faculty</h2>
<!-- /wp:heading -->

<!-- wp:shortcode -->
[uri-people-tool group="faculty" department="false" address="true" before='<div class="uri-people-tool cl-tiles halves">' after="</div>"]
<!-- /wp:shortcode --></div></div>
<!-- /wp:group -->
PATTERN;
