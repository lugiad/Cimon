/**
 * Created by Administrator on 2015/9/29.
 */
angular.module('insurance.controllers',[])
    .controller('InsuranceCtrl', function ($scope, $filter) {
        $scope.count = 1;
        $scope.year = 1;
        $scope.getTime = function () {
            var time = $filter('date')($scope.startTime,'yyyy年MM月dd日')
            $scope.endTime = time.substr(0,3)+(parseInt(time[3])+$scope.year)+time.substr(4,time.length)
        }
        $scope.radioboxes = [
            {key:1,value:'选项1'},
            {key:2,value:'选项2'},
            {key:3,value:'选项2'},
            {key:4,value:'选项2'}];
        $scope.tabs = [
            {name:'保险责任',url:'templates/tab-view1.html'},
            {name:'保险条款',url:'templates/tab-view2.html'}]
    })
    .controller('FormCtrl', function ($scope, $stateParams) {
        $scope.idCard = '';
        $scope.birth = ''; 
        console.log($scope.idCard)
        $scope.getBirthday = function(){
            console.log($scope.idCard.length)
        	if($scope.idCard.length>15)
                $scope.birth = $scope.idCard.substr(6,4)+'-'+$scope.idCard.substr(10,2)+'-'+$scope.idCard.substr(12,2)
            console.log($scope.birth)
        }
        $scope.fee = $stateParams.fee;
    })