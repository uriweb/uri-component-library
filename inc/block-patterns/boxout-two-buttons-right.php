<?php

	$title = __( 'Boxout with two buttons, floated right', 'uri' );
	$description = _x( 'Boxout with two buttons, floated right.', 'Block pattern description', 'uri' );
	$keywords = 'button, boxout';

	$pattern = <<<PATTERN
<!-- wp:uri-cl/boxout {"title":"Athletics","float":"right","contentWrapper":""} -->
<!-- wp:paragraph {"placeholder":"Your boxout content..."} -->
<p>Learn about varsity, intramural, and club athletics at the University of Rhode Island, buy tickets, Rhody gear, and get the latest news about your favorite teams.</p>
<!-- /wp:paragraph -->

<!-- wp:uri-cl/button {"link":"https://www.gorhody.com/","text":"Go Rhody","style":"prominent","className":"block-level"} /-->

<!-- wp:uri-cl/button {"link":"http://web.uri.edu/campusrec/","text":"Campus Rec"} /-->
<!-- /wp:uri-cl/boxout -->
PATTERN;
