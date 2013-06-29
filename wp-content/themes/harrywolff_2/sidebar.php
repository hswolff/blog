				<div id="sidebar1" class="sidebar twocol last clearfix" role="complementary">
					<?php include 'ads.php'; ?>

					<?php if ( is_active_sidebar( 'sidebar1' ) ) : ?>

						<?php dynamic_sidebar( 'sidebar1' ); ?>

					<?php else : ?>

						<?// This content shows up if there are no widgets defined in the backend. ?>

						<div style="display:none;" class="alert alert-help">
							<p><?php _e("Please activate some Widgets.", "bonestheme");  ?></p>
						</div>

					<?php endif; ?>

				</div>