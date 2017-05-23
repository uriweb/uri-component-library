<?php if ($atts['clickable']): ?>
    <a class="card" href="<?php print $atts['link']; ?>">
<?php else: ?>
    <div class="card">
<?php endif; ?>
        <?php if ($atts['img']!=''): ?>
        <img src="<?php print $atts['img']; ?>">
        <?php endif; ?>
        <?php if ($atts['title']!=''): ?>
        <h1><?php print $atts['title']; ?></h1>
        <?php endif; ?>
        <?php if ($content!=null): ?>
        <p><?php print $content; ?></p>
        <?php endif; ?>
        <?php if ($atts['clickable']): ?>
        <span class="button"><?php print $atts['button']; ?></span>
        <?php else: ?>
        <a class="button" href="<?php print $atts['link']; ?>"><?php print $atts['button']; ?></a>
        <?php endif; ?>
<?php if ($atts['clickable']): ?>
    </a>
<?php else: ?>
    </div>
<?php endif; ?>