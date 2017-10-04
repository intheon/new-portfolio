<template>
	<div>
		<div class="bg-image">
			<img src="../../assets/img/blog.jpg">
		</div>
		<div class="content-area left-pad">
			<h1>Blog</h1>
			<section class="blog-item" id="custom-wordpress-plugin">
				<time>4th Oct 2017</time>
				<h3>Building Custom Wordpress Themes</h3>
				<div class="tags">
					<div class="tag">Wordpress</div>
					<div class="tag">Theming</div>
					<div class="tag">PHP</div>
					<div class="tag">Tutorial</div>
					<div class="tag">CSS</div>
				</div>
				<p><q>Don't reinvent the wheel, DRY, Work smart - Don't work hard...</q></p>
				<p>Whatever the reason <i>not</i> to do this, in this very first blog we'll be looking at just how easy it is to build a custom wordpress plugin from idea to deployment.</p>
				<p><a href="./blog/custom-and-complete-wordpress-theme-tutorial">Read more...</a></p>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>


time {
	font-size: 14px;
}

.tags {
	font-size: 12px;
	margin-bottom: 32px;
	float: left;
	width: 100%;
}

.tag {
	display: inline;
	padding: 8px;
	background: #eeeeee;
	border-radius: 8px;
	margin-right: 4px;
}


.blog-item h3 {
	margin-bottom: 32px;
	float: left;
	border-bottom: 1px solid #b0b0b0;
	width: 100%;
}

.blog-item h4 {
	margin-top: 32px;
	font-size: 14px;
	letter-spacing: 0.5px;
}

</style>
