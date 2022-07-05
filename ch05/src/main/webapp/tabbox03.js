// jQuery로 작성하기
$(function() {
	var $obj = $("li");
	$obj.click(function() {
		for(var i=0; i<$obj.length; i++) {
			if($($obj[i]).hasClass("selected")) {
				$($obj[i]).removeClass("selected");
			}
		}
		!$(this).hasClass("selected") && $(this).addClass("selected");
	})
})
