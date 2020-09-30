<?php

	$title = __( 'Panel', 'uri' );
	$description = _x( 'Panel as a big feature.', 'Block pattern description', 'uri' );
	$keywords = 'headline, panel';
	$categories = array( 'header' );

	$pattern = <<<PATTERN
<!-- wp:uri-cl/panel {"img":"https://web.uri.edu/graduate-school/files/gs-academics-hero.jpg","alt":"A ship’s crew prepares an underwater drone.","contentWrapper":""} -->
<!-- wp:heading {"level":1,"placeholder":"My Panel"} -->
<h1>Dedicated to research, scholarship, and creative work</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"placeholder":""} -->
<p>We are global thinkers with a real-world sensibility, offering part- and full-time programs of study to accommodate your schedule. Small classes, personalized programs and individual attention are the rule, not the exception. And 87 percent of URI’s faculty have doctoral or terminal degrees.</p>
<!-- /wp:paragraph -->

<!-- wp:uri-cl/button {"link":"https://www.uri.edu/programs/","text":"Find a Program"} /-->
<!-- /wp:uri-cl/panel -->
PATTERN;
