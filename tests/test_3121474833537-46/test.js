var test = {"uid":"3121474833537-46","name":"testCreateNewLeadAndFail","description":"Test creation of a new lead","timestamp":"2016/09/25 at 22:59:04","duration":0,"parameters":null,"properties":{"Groups":"[regression, sugarcrm]","Class":"il.co.topq.difido.TestsSugarCrm"},"reportElements":[{"title":"Step 1 - Navigating to login screen","message":null,"status":"success","type":"step","time":"22:59:04:"},{"title":"login","message":"1474833544517login.png","status":"success","type":"img","time":"22:59:04:"},{"title":"Performing login","message":null,"status":"success","type":"startLevel","time":"22:59:04:"},{"title":"Sending keys with value 'admin' to component 'userTb'","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":"Sending keys with value '12345' to component 'passwordTb'","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":"Clicking on component submitBtn","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":null,"message":null,"status":"success","type":"stopLevel","time":"22:59:04:"},{"title":"dashboard","message":"1474833544527dashboard.png","status":"success","type":"img","time":"22:59:04:"},{"title":"Step 2 - Navigating to create lead page","message":null,"status":"success","type":"step","time":"22:59:04:"},{"title":"Clicking on 'Leads' menu item","message":null,"status":"success","type":"startLevel","time":"22:59:04:"},{"title":"Clicking on component SalesItm","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":"Clicking on component LeadsItm","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":null,"message":null,"status":"success","type":"stopLevel","time":"22:59:04:"},{"title":"searchleads","message":"1474833544536searchleads.png","status":"success","type":"img","time":"22:59:04:"},{"title":"Clicking on create new lead","message":null,"status":"success","type":"startLevel","time":"22:59:04:"},{"title":"Clicking on component createLeadItm","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":null,"message":null,"status":"success","type":"stopLevel","time":"22:59:04:"},{"title":"createlead","message":"1474833544550createlead.png","status":"success","type":"img","time":"22:59:04:"},{"title":"Typing lead details","message":null,"status":"success","type":"startLevel","time":"22:59:04:"},{"title":"Selecting 'Mr.' in component 'salutationSelect'","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":"Sending keys with value 'Itai' to component 'firstNameTb'","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":"Sending keys with value 'Agmon' to component 'lastNameTb'","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":"Clicking on component submitBtn","message":null,"status":"success","type":"regular","time":"22:59:04:"},{"title":null,"message":null,"status":"success","type":"stopLevel","time":"22:59:04:"},{"title":"saveleads","message":"1474833544562saveleads.png","status":"success","type":"img","time":"22:59:04:"},{"title":"Step 3 - Asserting that the lead exists","message":null,"status":"success","type":"step","time":"22:59:04:"},{"title":"SELECT key,salutation,first_name,last_name FROM Leads WHERE last_name='Agmon';","message":"<table style=\"width:100%\"  border=\"1\">\t<tr>\t\t<th>key</th>\t\t<th>salutation</th>\t\t<th>first_name</th> \t\t<th>last_name</th>\t</tr>\t<tr>\t\t<td>34523</td>\t\t<td>Mr.</td>\t\t<td>Itai</td> \t\t<td>Agmon</td>\t</tr></table>","status":"success","type":"html","time":"22:59:04:"},{"title":"Server log file","message":"server.log","status":"success","type":"lnk","time":"22:59:04:"},{"title":"searchleads2","message":"1474833544582searchleads2.png","status":"success","type":"img","time":"22:59:04:"},{"title":"The test ended with the following exception:","message":"java.lang.AssertionError: expected [Lead 'Mr. Itai Agmon' was found] but found [No lead 'Mr. Itai Agmon' was found]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\n\tat org.testng.Assert.assertEquals(Assert.java:123)\n\tat org.testng.Assert.assertEquals(Assert.java:176)\n\tat org.testng.Assert.assertEquals(Assert.java:186)\n\tat il.co.topq.difido.TestsSugarCrm.testCreateNewLeadAndFail(TestsSugarCrm.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:84)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\n\tat org.testng.TestRunner.run(TestRunner.java:617)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\n\tat org.testng.TestNG.run(TestNG.java:1057)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:137)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:58)\n","status":"failure","type":"regular","time":"22:59:04:"}]};