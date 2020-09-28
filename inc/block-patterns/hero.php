<?php

	$title = __( 'Hero', 'uri' );
	$description = _x( 'Hero as a heading.', 'Block pattern description', 'uri' );
	$keywords = 'headline, hero';
	$categories = array( 'header' );

	$pattern = <<<PATTERN
<!-- wp:uri-cl/hero {"headline":"Think Big","id":"67f7251e-3f65-a8e2-42c5-6b183dddc040","img":"https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus.jpg"} /-->
PATTERN;
