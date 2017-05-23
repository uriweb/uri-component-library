<?php if ($atts['clickable']): ?>
    <a class="card" href="<?php print $atts['link']; ?>">
        <?php if ($atts['img']!=''): ?>
        <img src="<?php print $atts['img']; ?>">
        <?php endif; ?>
        <?php if ($atts['title']!=''): ?>
        <h1><?php print $atts['title']; ?></h1>
        <?php endif; ?>
        <?php if ($content!=null): ?>
        <p><?php print $content; ?></p>
        <?php endif; ?>
        <span class="button"><?php print $atts['button']; ?></span>
    </a>
<?php else: ?>
    <div class="card">
        <?php if ($atts['img']!=''): ?>
        <img src="<?php print $atts['img']; ?>">
        <?php endif; ?>
        <?php if ($atts['title']!=''): ?>
        <h1><?php print $atts['title']; ?></h1>
        <?php endif; ?>
        <?php if ($content!=null): ?>
        <p><?php print $content; ?></p>
        <?php endif; ?>
        <a class="button" href="<?php print $atts['link']; ?>"><?php print $atts['button']; ?></a>
    </div>
<?php endif; ?>