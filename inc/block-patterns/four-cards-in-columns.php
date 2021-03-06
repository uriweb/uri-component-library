<?php

	$title = __( 'Four cards', 'uri' );
	$description = _x( 'Four cards in columns.', 'Block pattern description', 'uri' );
	$keywords = 'card, column';
	$categories = array( 'columns' );

	$weight = 70;

	$pattern = <<<PATTERN
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/card {"title":"Home","body":"The University ...","link":"https://www.uri.edu/","button":"Explore URI"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/card {"title":"Honors","body":"Students enrolled in ...","link":"https://www.uri.edu/academics/","button":"Explore Academics at URI"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/card {"title":"Majors","body":"Our 90-plus majors offer ...","link":"https://www.uri.edu/programs/","button":"Find your major"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/card {"title":"About","body":"The University is ...","link":"https://www.uri.edu/about/","button":"Search graduate programs"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
PATTERN;
