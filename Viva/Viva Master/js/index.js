let shareBtn = $("#shareBtn");
let socialBar = $("#socialBar")
shareBtn.click(function(){
socialBar.toggleClass('active');
shareBtn.toggleClass('hide');
shareBtn.toggleClass('fa-share-alt');
shareBtn.toggleClass('fa-times');
})