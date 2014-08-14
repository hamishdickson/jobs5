angular.module("MyApp").run(["$templateCache", function($templateCache) {$templateCache.put("views/detail.html","<div class=\"container\" ng-controller=\"DetailController as detailCtrl\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            Job {{jobDetails.jobNumber}}\n            <div class=\"pull-right\">\n                <input class=\"search\" type=\"text\" ng-model=\"query.name\" placeholder=\"Search...\">\n            </div>\n        </div>\n        <div class=\"panel-body\">\n            <p>{{jobDetails.description}}</p>\n            <p>{{jobDetails.response}}</p>\n\n            <!--  Job notes list and update -->\n            <div>\n                <ul>\n                    <h4>Notes</h4>\n\n                    <li ng-repeat=\"note in jobDetails.notes\">\n                        <p ng-if=\"!note.body && !note.response && !note.status\">{{note}}</p>\n                        <blockquote ng-show=\"note.body || note.response || note.status\">\n                            <p ng-show=\"note.body\">New note: {{note.body}}</p>\n\n                            <p ng-show=\"note.response\">New response: {{note.response}}</p>\n\n                            <p ng-show=\"note.status\">Status changed to: {{note.status}}</p>\n\n                            <cite class=\"clearfix\">—{{note.author}} on {{note.createdOn | date :\n                                \'medium\'}}</cite>\n\n                            <p ng-show=\"note.fail\">This didn\'t post!</p>\n                        </blockquote>\n                    </li>\n                </ul>\n            </div>\n\n\n            <!--  Notes Form -->\n            <form name=\"notesForm\" ng-controller=\"NotesController as notesCtrl\"\n                  ng-submit=\"notesForm.$valid && (notesCtrl.note.body || notesCtrl.note.response || notesCtrl.note.status) && notesCtrl.addNote(jobDetails)\"\n                  novalidate>\n\n                <!--  Live Preview -->\n                <blockquote ng-show=\"notesCtrl.note.body || notesCtrl.note.response || notesCtrl.note.status\">\n                    <p ng-show=\"notesCtrl.note.body\">New note: {{notesCtrl.note.body}}</p>\n\n                    <p ng-show=\"notesCtrl.note.response\"><strong>Updated response: {{notesCtrl.note.response}}</strong></p>\n\n                    <p ng-show=\"notesCtrl.note.status\">New status: {{notesCtrl.note.status}}</p>\n                </blockquote>\n\n                <!--  Notes Form -->\n                <h4>Add an update</h4>\n                <fieldset class=\"form-group\">\n                    <select ng-model=\"notesCtrl.note.status\" class=\"form-control\"\n                            ng-options=\"status for status in statuss\" title=\"Status\">\n                        <option value=\"\">Job status</option>\n                    </select>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <textarea ng-model=\"notesCtrl.note.body\" class=\"form-control\"\n                              placeholder=\"Add me some notes ...\"\n                              title=\"Notes\"></textarea>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <textarea ng-model=\"notesCtrl.note.response\" class=\"form-control\"\n                              placeholder=\"Response to client ...\"\n                              title=\"Response\" maxlength=\"135\"></textarea>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Add update\"/>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>");
$templateCache.put("views/home.html","<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"col-sm-12\">\n            <div class=\"col-sm-1\">\n                <h4>Filters:</h4>\n            </div>\n            <div class=\"col-sm-8\">\n                <ul class=\"genres\">\n                    <li ng-repeat=\"status in statuss\">\n                        <span ng-click=\"filterByStatus(status)\">Status {{status}}</span>\n                    </li>\n                </ul>\n\n                <ul class=\"genres\">\n                    <li ng-repeat=\"import in importances\">\n                        <span ng-click=\"filterByImportance(import)\">Priority {{import}}</span>\n                    </li>\n                </ul>\n                <ul class=\"genres\">\n                    <li>\n                        <span ng-click=\"noFilter()\">No filter</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" ng-controller=\"JobsController as jobsCtrl\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            {{headingTitle}}\n            <div class=\"pull-right\">\n                <input class=\"search\" type=\"text\" ng-model=\"query.jobNumber\" placeholder=\"Search...\">\n            </div>\n        </div>\n        <div class=\"panel-body\">\n\n            <div ng-show=\"jobsCtrl.jobsData.length === 0\"><p>Cool - looks like you don\'t have any jobs to show!</p>\n            </div>\n\n            <div class=\"row show-list\">\n                <div class=\"list-group\">\n                    <div class=\"list-group-item panel panel-body col-sm-6\"\n                         ng-repeat=\"job in jobsCtrl.jobsData | filter: {status: sublist} | filter: { importance : subImport } | filter: query\">\n                        <h3><a href=\"/detail/job/{{job.jobNumber}}\">{{job.jobNumber}}</a>\n\n                            <div class=\"pull-right\">Status {{job.status}}</div>\n                        </h3>\n                        <div>\n                            <h4 ng-repeat=\"deliverable in job.deliverables\" ng-if=\"$first\" class=\"deliverable-date\">Next deliverable:\n                                {{deliverable.promisedDate | dateFilter: deliverable.promisedDate}}</h4>\n                            <h4 class=\"pull-right\">Priority: {{job.importance}}</h4>\n                        </div>\n                        <job-tabs></job-tabs>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("views/job-notes.html","<!--  Job notes list and update -->\n<div>\n    <ul>\n        <h4>Notes</h4>\n\n        <li ng-repeat=\"note in job.notes\">\n            <p ng-if=\"!note.body && !note.response && !note.status\">{{note}}</p>\n            <blockquote ng-show=\"note.body || note.response || note.status\">\n                <p ng-show=\"note.body\">New note: {{note.body}}</p>\n\n                <p ng-show=\"note.response\">New response: {{note.response}}</p>\n\n                <p ng-show=\"note.status\">Status changed to: {{note.status}}</p>\n\n                <cite class=\"clearfix\">—{{note.author}} on {{note.createdOn | date :\n                    \'medium\'}}</cite>\n            </blockquote>\n        </li>\n    </ul>\n</div>\n\n\n<!--  Notes Form -->\n<form name=\"notesForm\" ng-controller=\"NotesController as notesCtrl\"\n      ng-submit=\"notesForm.$valid && (notesCtrl.note.body || notesCtrl.note.response || notesCtrl.note.status) && notesCtrl.addNote(job)\"\n      novalidate>\n\n    <!--  Live Preview -->\n    <blockquote ng-show=\"notesCtrl.note.body || notesCtrl.note.response || notesCtrl.note.status\">\n        <p ng-show=\"notesCtrl.note.body\">New note: {{notesCtrl.note.body}}</p>\n\n        <p ng-show=\"notesCtrl.note.response\"><strong>Updated response: {{notesCtrl.note.response}}</strong></p>\n\n        <p ng-show=\"notesCtrl.note.status\">New status: {{notesCtrl.note.status}}</p>\n    </blockquote>\n\n    <!--  Notes Form -->\n    <h4>Add an update</h4>\n    <fieldset class=\"form-group\">\n        <select ng-model=\"notesCtrl.note.status\" class=\"form-control\"\n                ng-options=\"status for status in statuss\" title=\"Status\">\n            <option value=\"\">Job status</option>\n        </select>\n    </fieldset>\n    <fieldset class=\"form-group\">\n        <textarea ng-model=\"notesCtrl.note.body\" class=\"form-control\"\n                  placeholder=\"Add me some notes ...\"\n                  title=\"Notes\"></textarea>\n    </fieldset>\n    <fieldset class=\"form-group\">\n        <textarea ng-model=\"notesCtrl.note.response\" class=\"form-control\"\n                  placeholder=\"Response to client ...\"\n                  title=\"Response\" maxlength=\"135\"></textarea>\n    </fieldset>\n    <fieldset class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Add update\"/>\n    </fieldset>\n</form>");
$templateCache.put("views/jobs-billing.html","<div>\n    <h4>Billing information</h4>\n    <p><strong>Work order:</strong> <a href=\"/detail/job/{{job.workorder}}\">{{job.workorder}}</a></p>\n\n    <p><strong>Whos\' paying:</strong> {{job.whoPay}}</p>\n\n    <p><strong>Invoice text:</strong> {{job.invoiceText}}</p>\n</div>");
$templateCache.put("views/jobs-summary.html","<!-- Jobs summary details -->\n<div ng-show=\"job.description\">\n    <h4>Description</h4>\n    <blockquote>\n        <p>{{job.description}}</p>\n    </blockquote>\n</div>\n\n<div ng-show=\"job.response\">\n    <h4>Last response</h4>\n    <blockquote>\n        <p>{{job.response}}</p>\n    </blockquote>\n</div>");
$templateCache.put("views/jobs-tabs.html","<!-- tabs section -->\n<section>\n    <ul class=\"nav nav-pills\">\n        <li ng-class=\"{ active:tabCtrl.isSet(1) }\">\n            <a href=\"\" ng-click=\"tabCtrl.setTab(1)\">Summary</a>\n        </li>\n        <li ng-class=\"{ active:tabCtrl.isSet(2) }\">\n            <a href=\"\" ng-click=\"tabCtrl.setTab(2)\">Updates</a>\n        </li>\n        <li ng-class=\"{ active:tabCtrl.isSet(3) }\">\n            <a href=\"\" ng-click=\"tabCtrl.setTab(3)\">Billing</a>\n        </li>\n    </ul>\n\n    <!--  Description Tab\'s Content  -->\n    <job-summary ng-show=\"tabCtrl.isSet(1)\"></job-summary>\n\n    <!--  Notes Tab\'s Content  -->\n    <job-notes ng-show=\"tabCtrl.isSet(2)\"></job-notes>\n\n    <!-- billing information -->\n    <jobs-billing ng-show=\"tabCtrl.isSet(3)\"></jobs-billing>\n\n</section>");
$templateCache.put("views/login.html","<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"center-form panel\">\n            <div class=\"panel-body\">\n                <h2 class=\"text-center\">Login</h2>\n\n                <form method=\"post\" ng-submit=\"loginCtrl.login(username)\" name=\"loginForm\">\n\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg\" type=\"text\" name=\"username\"\n                               ng-model=\"username\" placeholder=\"Initials\" required autofocus autocomplete=\"off\">\n                    </div>\n\n                        <!-- TODO password disabled for now - reinstate if needed -->\n<!--                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg\" type=\"password\" name=\"password\"\n                               ng-model=\"password\" placeholder=\"Password\" required>\n                    </div>-->\n\n                    <button type=\"submit\" ng-disabled=\"loginForm.$invalid\"\n                            class=\"btn btn-lg btn-block btn-success\">Sign In\n                    </button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");}]);