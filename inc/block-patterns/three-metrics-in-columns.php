<?php

	$title = __( 'Three metrics', 'uri' );
	$description = _x( 'Three metrics in columns.', 'Block pattern description', 'uri' );
	$keywords = 'metric, column';
	$categories = array( 'columns' );

	$weight = 40;

	$pattern = <<<PATTERN
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/metric {"metric":"45","caption":"Regions"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/metric {"metric":"$7M","caption":"Investment"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/metric {"metric":"98%","caption":"Success Rate"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
PATTERN;
