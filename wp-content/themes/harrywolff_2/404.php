<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

					<div id="main" class=" clearfix" role="main">

						<article id="post-not-found" class="hentry clearfix">

							<header class="article-header">
								<h1>Where did it go?</h1>
								<h2><?php _e("404 - Article Not Found", "bonestheme"); ?></h2>

							</header> <!-- end article header -->

							<section class="entry-content">

								<p><?php _e("The article you were looking for was not found, but maybe try looking again!", "bonestheme"); ?></p>

							</section> <!-- end article section -->

							<section class="search">

									<p><?php get_search_form(); ?></p>

							</section> <!-- end search section -->

							<footer class="article-footer">

									<p><?php _e("I can't believe I've done this.", "bonestheme"); ?></p>

							</footer> <!-- end article footer -->

						</article> <!-- end article -->

					</div> <!-- end #main -->

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>
