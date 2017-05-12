<!DOCTYPE html>
<html lang="en-US">

	<head>
        <title>Tiles</title>	
        <link rel="stylesheet" type="text/css" href="../css/playground.css">
        <link rel="stylesheet" type="text/css" href="../nextgen/style.css">
        <link href="https://fonts.googleapis.com/css?family=Hind:400,600|Open+Sans:400,700" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="../js/main.js"></script>
        <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    </head>
	
	<body class="nav-tiles">
        
        <nav>
            <script>$('nav').load('../includes/nav.html');</script>
        </nav>
        
        <main>
            
            <h1>Tiles</h1>
            <img class="wireframe right" src="../media/wireframes/tiles.svg" alt="Tiles">
            <p>Tiles are a layout framework for organizing square content blocks along two axes, with a fixed number of blocks along the x-axis.</p>
            
            <ul id="localnav">
                <li><a href="#usage">Usage</a></li>
            </ul>
            
            <section id="usage">
                <h2>Usage</h2>
                <p>Tiles are implemented with the class <code class="class">tiles</code></p>
                <p>Tiles support grids with three, four, or five tiles in width. The number of tiles across the page can be controled by the classes <code class="class second">thirds</code>, <code class="class second">fourths</code>, and <code class="class second">fifths</code>, respecively.  Tile grids can contain an infinite number of tiles.</p>

                <article>
                    <h4>3 Tiles Across</h4>
                    <xmp class="prettyprint">
<div class="tiles thirds">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    ...
</div>     
                    </xmp>
                    <div class="tiles thirds">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </article>
                    
                <article>
                    <h4>4 Tiles Across</h4>
                    <xmp class="prettyprint">
<div class="tiles fourths">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    ...
</div>     
                    </xmp>
                    <div class="tiles fourths">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </article>
            
                <article>
                    <h4>5 Tiles Across</h4>
                    <xmp class="prettyprint">
<div class="tiles fifths">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    ...
</div>     
                    </xmp>
                    <div class="tiles fifths">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </article>
                
            </section><!-- end usage -->
            
        </main>
        
        <footer>
            <script>$('footer').load('../includes/footer.html');</script>
        </footer>
        
    </body>
    
</html>