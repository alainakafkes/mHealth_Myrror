// Modified from http://www.aspsnippets.com/Articles/Send-Pass-Data-Values-from-one-page-to-another-using-jQuery.aspx
$(function () {
    $("#size-button").bind("click", function () {
    var url = "projection.html?size=" + encodeURIComponent($("#search_input").val());
    window.location.href = url;
    });
});