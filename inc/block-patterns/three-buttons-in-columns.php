<?php

	$slug = basename( __FILE__, '.php' );
	$title = __( 'Three buttons', 'uri' );
	$description = _x( 'Three buttons in columns.', 'Block pattern description', 'uri' );
	$keywords = 'button, column';
	$categories  = array( 'uri' );

	$pattern = <<<PATTERN
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/button {"link":"https://www.uri.edu","text":"Button"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/button {"link":"https://www.uri.edu","text":"Prominent","style":"prominent"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/button {"link":"https://www.uri.edu","text":"Disabled","style":"disabled"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
PATTERN;
