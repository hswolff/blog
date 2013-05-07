			<footer class="footer" role="contentinfo">

				<div id="inner-footer" class="clearfix">

					<nav role="navigation">
							<?php bones_footer_links(); ?>
									</nav>

					<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>.</p>

				</div> <!-- end #inner-footer -->

			</footer> <!-- end footer -->

		</div> <!-- end #container -->

		<!-- all js scripts are loaded in library/bones.php -->
		<?php wp_footer(); ?>
		<script type="text/javascript">
		  var _sf_async_config = { uid: 47740, domain: 'harrywolff.com', useCanonical: true };
		  (function() {
		    function loadChartbeat() {
		      window._sf_endpt = (new Date()).getTime();
		      var e = document.createElement('script');
		      e.setAttribute('language', 'javascript');
		      e.setAttribute('type', 'text/javascript');
		      e.setAttribute('src','//static.chartbeat.com/js/chartbeat.js');
		      document.body.appendChild(e);
		    };
		    var oldonload = window.onload;
		    window.onload = (typeof window.onload != 'function') ?
		      loadChartbeat : function() { oldonload(); loadChartbeat(); };
		  })();
		</script>
	</body>

</html> <!-- end page. what a ride! -->
