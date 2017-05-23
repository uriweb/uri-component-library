<div class="flexcard<?php if ($atts['reverse']): ?> reverse<?php endif; ?>">
    <figure>
        <img src="<?php print $atts['img']; ?>">
    </figure>
    <article>
        <?php if ($atts['title']!=''): ?>
        <h1><?php print $atts['title']; ?></h1>
        <?php endif; ?>
        <?php if ($content!=null): ?>
        <p><?php print $content; ?></p>
        <?php endif; ?>
        <a class="button" href="<?php print $atts['link']; ?>"><?php print $atts['button']; ?></a>
    </article>
</div>