<!DOCTYPE html>
<html lang="en-US">

	<head>
        <meta http-equiv="X-UA-Compatible" content="IE=8, IE=9">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Columns</title>
        <link rel="stylesheet" type="text/css" href="../css/playground.css">
        <link rel="stylesheet" type="text/css" href="../nextgen/style.css">
        <link href="https://fonts.googleapis.com/css?family=Hind:400,600|Open+Sans:400,700" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="../js/main.js"></script>
        <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    </head>
	
	<body class="nav-columns">
        
        <nav>
            <script>$('nav').load('../includes/nav.html');</script>
        </nav>
        
        <main>
            
            <h1>Columns</h1>
            <img class="wireframe right" src="../media/wireframes/columns.svg" alt="Columns">
            <p>Columns are a layout framework for organizing content into single row of equal-width, equal-height blocks, where height is determined by the block with the most content.</p>
            
            <ul id="localnav">
                <li><a href="#implement">Implementing</a></li>
                <li><a href="#content">Content</a></li>
            </ul>
            
            <section id="implement">
                <h2>Implementing</h2>
                
                <p>Columns are implemented with the class <code class="class">cols</code>, and the number of columns is specified by the classes <code class="class second">halves</code> and <code class="class second">thirds</code>.</p>
                
                <xmp class="prettyprint">
<div class="cols halves">
    <div>...</div><!-- 1 -->
    <div>...</div><!-- 2 -->
</div>
                </xmp>                    
                <div class="cols halves">
                    <div>
                        <p><b>Column 1</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a commodo ante. Integer ut dolor quis tellus porta blandit. Suspendisse lobortis orci eu augue sagittis, ornare volutpat diam elementum.</p>
                    </div>
                    <div>
                        <p><b>Column 2</b></p>
                        <p>Quisque eu odio eu metus finibus bibendum nec vel lorem. In consequat diam in orci molestie molestie. Phasellus nulla quam, tempor et hendrerit eget, laoreet id ligula. Fusce suscipit sem at lacus auctor malesuada.</p>
                    </div>
                </div>
                
                <xmp class="prettyprint">
<div class="cols thirds">
    <div>...</div><!-- 1 -->
    <div>...</div><!-- 2 -->
    <div>...</div><!-- 3 -->
</div>
                </xmp>                    
                <div class="cols thirds">
                    <div>
                        <p><b>Column 1</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <p><b>Column 2</b></p>
                        <p>Ut iaculis vestibulum urna, placerat rutrum dolor pretium sit amet. Aenean non porta leo. Phasellus non nunc laoreet, iaculis neque in, porttitor diam. Ut mattis, lorem ac sodales gravida, felis urna hendrerit massa, sit amet mattis sapien sapien sed ipsum.</p>
                    </div>
                    <div>
                        <p><b>Column 3</b></p>
                        <p>Curabitur consectetur aliquet purus vel luctus. Pellentesque eget mollis sapien, vitae volutpat mauris.</p>
                    </div>
                </div>

            </section><!-- end usage -->
                
            <section id="content">
                <h2>Content</h2>
                <h4>Columns have some limited native features, and can contain other components.</h4>
                <p>On their own, each column supports a banner image. Columns preserve the original aspect ratio of the image, so images should be cropped as desired before including them in the page.</p>
                <xmp class="prettyprint">
<div class="cols halves">
    <div>
        <img>
        <h1>Title</h1>
        <p>Paragraph text.</p>
        <p>Another paragraph.</p>
    </div>
    <div>...</div>
</div>
                </xmp>
                <article>
                    <div class="cols halves">
                        <div>
                            <img src="../media/native/hero_1.jpg" alt="Column Hero 1">
                            <h1>The First One</h1>
                            <p>Here is some content.  Columns can contain an image, text, and buttons, as well as other components.  Text is aligned to the left edge of the column, and images span the column's width.</p>
                            <a class="button" href="">Check it out</a>
                        </div>
                        <div>
                            <img src="../media/native/hero_2.jpg" alt="Column Hero 2">
                            <h1>A Great Column</h1>
                            <p>Here is some longer content.  This should force other columns with less content to be the same height as this column.</p>
                            <p>Columns can have multiple paragraphs, but should only contain <b>one image</b> to be used as a banner (excluding images that appear in cards).</p>
                        </div>
                    </div>
                </article>
                                
            </section><!-- end columns -->
            
        </main>
        
        <footer>
            <script>$('footer').load('../includes/footer.html');</script>
        </footer>
        
    </body>
    
</html>