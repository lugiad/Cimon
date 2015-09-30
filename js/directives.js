/**
 * Created by Administrator on 2015/9/29.
 */
angular.module('insurance.directives',[])
    .directive('cRadiobox', function () {
        return {
            restrict:'E',
            scope:{
                data:'=',
                keyName:'@',
                valueName:'@'
            },
            templateUrl:'templates/template-radiobox.html',
            link: function (scope, element) {
                scope.check = function (id) {
                    console.log(id)
                    document.getElementById('r'+id).style.borderColor = '#1ab394';
                    document.getElementById('rc'+id).style.display = 'block'
                }
            }
        }
    })
    .directive('cTabs', function () {
        return {
            restrict:'E',
            scope:{
                tabs:'='
            },
            templateUrl:'templates/template-tabs.html',
            link: function (scope) {
                scope.currentView = scope.tabs[0].url;
                scope.switchTab = function (tab,index) {
                    if(scope.currentView != tab.url){
                        angular.forEach(scope.tabs, function (t, i) {
                            if(i!=index){
                                document.getElementById('t'+i).style.borderColor = 'lightgrey';
                                document.getElementById('t'+i).style.backgroundColor = 'whitesmoke';
                                document.getElementById('t'+i).style.color = '#1ab394';
                            }
                            else{
                                document.getElementById('t'+i).style.borderColor = '#1ab394';
                                document.getElementById('t'+i).style.backgroundColor = 'white';
                                document.getElementById('t'+i).style.color = '#40754a';
                            }
                        })
                        scope.currentView = tab.url;
                    }
                }
            }
        }
    })