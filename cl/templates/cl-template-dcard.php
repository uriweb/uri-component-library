<?php if ($atts['link']!=''): ?>
    <a class="dcard" href="<?php print $atts['link']; ?>">
        <?php if ($atts['img']!=''): ?>
        <img src="<?php print $atts['img']; ?>">
        <?php endif; ?>
        <?php if ($atts['title']!=''): ?>
        <h1><?php print $atts['title']; ?></h1>
        <?php endif; ?>
        <?php if ($content!=null): ?>
        <p><?php print $content; ?></p>
        <?php endif; ?>
    </a>
<?php else: ?>
    <div class="dcard">
        <?php if ($atts['img']!=''): ?>
        <img src="<?php print $atts['img']; ?>">
        <?php endif; ?>
        <?php if ($atts['title']!=''): ?>
        <h1><?php print $atts['title']; ?></h1>
        <?php endif; ?>
        <?php if ($content!=null): ?>
        <p><?php print $content; ?></p>
        <?php endif; ?>
    </div>
<?php endif; ?>
