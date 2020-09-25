<?php

	$title = __( 'Three cards', 'uri' );
	$description = _x( 'Three cards in columns.', 'Block pattern description', 'uri' );
	$keywords = 'card, column';

	$pattern = <<<PATTERN
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
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
