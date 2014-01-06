'use strict';
angular.module('yaru22.directives.hovercard', []).directive('hovercard', function () {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'angular-hovercard.tmpl',
		scope: {
			background: '@',
			hoverTmplUrl: '=',
			async: '=',
			labelColor: '@',
			onHoverIn: '&',
			onHoverOut: '&',
			placement: '@',
			width: '@'
		},
		link: function ($scope, element, attrs) {
			$scope.hoverLabelStyle = {};
			$scope.hoverTmplAsyncUrl = '';
			if ($scope.async || typeof attrs.$attr.async !== 'undefined') {
				$scope.shouldLoadContent = false;
			} else {
				$scope.shouldLoadContent = true;
			}
			$scope.loadContent = function () {
				$scope.shouldLoadContent = true;
			};
			$scope.getTmplUrl = function () {
				if ($scope.shouldLoadContent) {
					return $scope.hoverTmplUrl;
				} else {
					return '';
				}
			};
			if ($scope.labelColor) {
				$scope.hoverLabelStyle.color = $scope.labelColor;
			}
			$scope.hoverCardStyle = {};
			if ($scope.background) {
				$scope.hoverCardStyle.background = $scope.background;
			}
			if ($scope.width) {
				$scope.hoverCardStyle.width = $scope.width;
			}
			if ($scope.placement) {
				var positionStrings = $scope.placement.replace(/([A-Z])/g, ' $1').toLowerCase().split(' ');
				var positionObj = {};
				positionObj[positionStrings[0]] = true;
				positionObj[positionStrings[1]] = true;
				if (positionObj.bottom) {
					$scope.hoverCardStyle.bottom = '';
					$scope.hoverCardStyle.top = '-1em';
					$scope.hoverCardStyle['padding-bottom'] = '';
					$scope.hoverCardStyle['padding-top'] = '3em';
				}
				if (positionObj.top) {
					$scope.hoverCardStyle.bottom = '-1em';
					$scope.hoverCardStyle.top = '';
					$scope.hoverCardStyle['padding-bottom'] = '3em';
					$scope.hoverCardStyle['padding-top'] = '';
				}
				if (positionObj.left) {
					$scope.hoverCardStyle.left = '';
					$scope.hoverCardStyle.right = '-1em';
				}
				if (positionObj.right) {
					$scope.hoverCardStyle.left = '-1em';
					$scope.hoverCardStyle.right = '';
				}
			}
		}
	};
});
