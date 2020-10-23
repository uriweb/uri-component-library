<?php

	$title = __( 'Headline and paragraph', 'uri' );
	$description = _x( 'Headline and paragraph.', 'Block pattern description', 'uri' );
	$keywords = 'headline, people, person, column';
	$categories = array( 'text' );

	$pattern = <<<PATTERN
<!-- wp:group -->
<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"level":3} -->
<h3>Preparing for Your Year Abroad</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Preparing for the year abroad in a stress-free way takes many months of planning, starting the fall before you depart, depending on the visa and travel considerations of your destination. Preparation meetings for ...</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:group -->
PATTERN;
