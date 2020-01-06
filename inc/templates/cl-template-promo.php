<?php

$classes = 'cl-promo';

if ( ! empty( $atts['class'] ) ) {
	$classes .= ' ' . $atts['class'];
}

$output = '<section class="cl-wrapper cl-promo-wrapper">';
$output .= '<div class="' . $classes . '"';

if ( ! empty( $atts['css'] ) ) {
	$output .= 'style="' . $atts['css'] . '"';
}

$output .= '>';

$output .= '<div class="cl-promo-backdrop-wrapper">';

$background = '<div class="cl-promo-backdrop blur" style="background-image:url(' . $atts['img'] . ')"></div>';

if ( 'confetti' == $atts['format'] ) {
	$background = '<div class="cl-promo-backdrop confetti"></div>';
}

$output .= $background;
$output .= '</div>';

$output .= '<div class="cl-promo-content">';

$output .= '<div class="cl-promo-text">';

if ( ! empty( $atts['title'] ) ) {
	$output .= '<h1>' . $atts['title'] . '</h1>';
}

if ( ! empty( $atts['body'] ) ) {
	$output .= '<p>' . $atts['body'] . '</p>';
}

if ( ! empty( $atts['linktext'] ) ) {
	$output .= '<p><a class="cl-promo-text-link" href="' . $atts['link'] . '">' . $atts['linktext'] . '</a></p>';
}

$output .= '</div>';

$output .= '<div class="cl-promo-img-wrapper">';
$output .= '<div class="cl-promo-img">';
$output .= '<a class="cl-promo-img-link" href="' . $atts['link'] . '">';
$output .= uri_cl_build_img_tag( $atts['img'], $atts['alt'] );
$output .= '</a></div></div>';

$output .= '</div>';

$output .= '</div>';
$output .= '</section>';


?>
<!--
<section>
  <div class="campaign-promo breakout">
	<div class="campaign-promo-content content-width">
	  <h1>Calling all big thinkers</h1>
	  <a href="https://www.uri.edu/thinkbig/video">Watch the video</a>
	  <div class="campaign-promo-img">
		<a class="campaign-promo-img-link" href="https://www.uri.edu/thinkbig/video">
		  <img class="alignnone size-full wp-image-28469" src="https://www.uri.edu/wp-content/uploads/home/2019/09/2019FC-homepage-video-poster.jpg" alt="Poster frame for the campaign video. A woman looks into the camera." width="1000" height="562">
		</a>
	  </div>
	</div>
  </div>
</section>

-->

<!-- INSTAGRAM -->

<!--

<section>
  <div class="instagram-promo breakout">
	<div class="instagram-promo-content content-width">
	  <h1>Congrats to our EA admits!</h1>
	  Share your <a href="https://www.instagram.com/universityofri/">#InAtURI</a> post with us today!
	  <div class="instagram-promo-embed">

	  https://www.instagram.com/p/BtELKKcBQcO/

	  </div>
	</div>
  </div>
</section>

-->
