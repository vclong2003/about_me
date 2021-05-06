var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "";
	$scope.verify = "";
	$scope.des = "Description about me !";
	$scope.cv = "Job";
	$scope.job1 = "Web Developer";
	$scope.job2 = "";
	$scope.contact = "Info";
	$scope.contact1 = "vclong2003@gmail.com";
	$scope.contact2 = "facebook.com/vclong8303";
	$scope.contactmi = "CONTACT ME";
	$scope.ifyou = "My contact information";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zal";
	$scope.modal3 = "";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://facebook.com/vclong8303";
	$scope.linkzl = "https://zalo.me/0888827768";
	$scope.linksc = "";
	$scope.linkgm = "vclong2003@gmail.com";
	$scope.phonenumber = "0888827768 - Vinaphone";
	$scope.email = "vclong2003@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Trường THPT Cầu Giấy là trường công lập thành lập năm 2007, được cấp nguồn ngân sách Nhà nước trong đào tạo và giáo dục học sinh.";
	$scope.contentStory2 = "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.";
	$scope.storytitle1 = "";
	$scope.storytitle2 = "";
	$scope.nothinglikeus = "";
	$scope.thankall = "";
	$scope.au = "VCL";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone = !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail = !$scope.gmail;
	};
});