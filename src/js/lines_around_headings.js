function add_section_headings_class() {
	var headings = $("h1");

	if (headings.length < 2) {
		headings.attr("data-toc-skip", "true");
		headings = $("h2:not(.symbol_section)").add("h2:not(.symbols_section)")
	}

	if (headings.length > 1)
		headings.addClass("section_headings");
	else
		headings.attr("data-toc-skip", "true");
}

$(document).ready(function() {
	add_section_headings_class();
});
