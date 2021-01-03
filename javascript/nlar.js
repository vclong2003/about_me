var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About VCL";
	$scope.updateInfo = "";
	$scope.verify = "";
	$scope.des = "Description about me !";
	$scope.cv = "Job";
	$scope.job1 = "Web Developer";
	$scope.job2 = "";
	$scope.contact = "Info";
	$scope.contact1 = "vclong2003@gmail.com";
	$scope.contact2 = "facebook.com/charon833";
	$scope.contactmi = "CONTACT ME";
	$scope.ifyou = "My contact information";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://facebook.com/charon833";
	$scope.linkzl = "https://zalo.me/0888827768";
	$scope.linksc = "";
	$scope.linkgm = "vclong2003@gmail.com";
	$scope.phonenumber = "0888827768 - Vinaphone";
	$scope.email = "vclong2003@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Mọi viễn cảnh, mọi ý tưởng bạn mong ước đều có thể trở thành hiện thực, miễn là bạn cam kết và nỗ lực hành động bằng mọi cách. Bạn không thể chỉ tưởng tượng và đợi một bà tiên xuất hiện biến mọi thứ thành sự thực. Thái độ sống là yếu tố quan trọng quyết định cuộc sống của bạn. Chỉ cần bạn thay đổi thái độ sống tích cực thì cuộc đời của bạn sẽ tràn ngập niềm vui và hạnh phúc. Chúc bạn nhiều an lạc trong cuộc sống!";
	$scope.contentStory2 = "Quãng thời gian cấp 3 thực sự rất ý nghĩa với tôi. Tôi yêu tất cả các bạn. Chúc mọi người luôn hạnh phúc và gặt hái nhiều thành công.";
	$scope.storytitle1 = "";
	$scope.storytitle2 = "";
	$scope.nothinglikeus = "";
	$scope.thankall = "";
	$scope.au = "VCL";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});