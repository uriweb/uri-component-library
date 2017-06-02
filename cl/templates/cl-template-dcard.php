<?php if ($atts['link']!=''): ?>
    <a class="dcard" href="<?php print $atts['link']; ?>">
<?php else: ?>
    <div class="dcard">
<?php endif; ?>
        <?php if ($atts['img']!=''): ?>
        <img src="<?php print $atts['img']; ?>">
        <?php endif; ?>
        <?php if ($atts['title']!=''): ?>
        <h1><?php print $atts['title']; ?></h1>
        <?php endif; ?>
        <?php if ($atts['body']!=''): ?>
        <p><?php print $atts['body']; ?></p>
        <?php endif; ?> 
<?php if ($atts['link']!=''): ?>
    </a>
<?php else: ?>
    </div>
<?php endif; ?>
