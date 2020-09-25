<?php

	$slug = basename( __FILE__, '.php' );
	$title = __( 'Four metrics', 'uri' );
	$description = _x( 'Four cards in columns.', 'Block pattern description', 'uri' );
	$keywords = 'metric, column';
	$categories  = array( 'uri' );

	$pattern = <<<PATTERN
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/metric {"metric":"195","caption":"Academic programs"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/metric {"metric":"4.2","caption":"Average years to degree","style":"dark"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/metric {"metric":"85%","caption":"Faculty with terminal degrees","style":"clear"} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:uri-cl/metric {"metric":"16:1","caption":"Student to faculty ratio","style":"standard"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
PATTERN;
