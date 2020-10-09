<?php

	$title = __( 'Two buttons', 'uri' );
	$description = _x( 'Two buttons in columns.', 'Block pattern description', 'uri' );
	$keywords = 'button, column';
	$categories = array( 'buttons', 'columns' );

	$weight = 10;

	$pattern = <<<PATTERN
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/button {"link":"https://www.uri.edu","text":"Prominent","style":"prominent"} /--></div>
<!-- /wp:column --></div>

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/button {"link":"https://www.uri.edu","text":"Button"} /--></div>
<!-- /wp:column -->

<!-- /wp:columns -->
PATTERN;
