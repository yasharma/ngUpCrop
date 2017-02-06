'use strict';
(function(){
	angular.module('ngUpCropApp', ['ngMaterial', 'ngFileUpload', 'ngImgCrop'])
	.controller('ngUpCropCtrl', [function () {
		var vm = this;
		vm.onFileSelect = function (file, event) {
			console.log(file);	
		};
	}]);
}());