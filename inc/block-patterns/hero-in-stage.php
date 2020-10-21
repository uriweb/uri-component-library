<?php

	$title = __( 'Fullscreen Video Hero', 'uri' );
	$description = _x( 'Hero with a video embedded in a stage element.', 'Block pattern description', 'uri' );
	$keywords = 'headline, hero, full, width, video';
	$categories = array( 'header' );

	$pattern = <<<PATTERN
<!-- wp:group -->
<div id="stage" class="wp-block-group fade"><div class="wp-block-group__inner-container">

<!-- wp:uri-cl/hero {"headline":"Think Big","subhead":"Study in a small beautiful place with some of the biggest thinkers in the world.","link":"https://www.uri.edu/","id":"67f7251e-3f65-a8e2-42c5-6b183dddc040","vid":"https://vimeo.com/377092097/13e9ce1d78","img":"https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus.jpg","button":"Learn More","format":"super","className":"fitted"} /-->

</div></div>
<!-- /wp:group -->
PATTERN;
