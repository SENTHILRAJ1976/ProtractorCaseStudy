describe('Protractor baby steps',function()
		{
	it('CaseStudy1',function()
			//'Angular JS website' define the test case name
			{
		//browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();
		 browser.get('https://www.delta.com/apac/en'); 
		 
		 element(by.css("a[class*='btn-link']")).click();
		 browser.sleep(10000);
		
		  element(by.id("basicInfoFirstName")).sendKeys("senthil");
		 element(by.id("basicInfoLastName")).sendKeys("Raj");
		
		//To select the dropdown value from Gender combo
		element(by.id("basicInfoGender-button")).click();
		element(by.cssContainingText('.ui-menu-item','Female')).click();
						
		//To select  the Month		
		
	     element(by.id("basicInfoMob-button")).click();
		 element(by.cssContainingText('.ui-menu-item','October')).click();	
		element(by.id("basicInfoDob-button")).click();
		element(by.cssContainingText('.ui-menu-item','2')).click();
		element(by.id("basicInfoYob-button")).click();
		element(by.cssContainingText('.ui-menu-item','1990')).click();
			
		//browser.sleep(10000);	
		element(by.className("proCountry")).click();
		element(by.cssContainingText('.ui-menu-item','India')).click();
		
		element(by.id("addressBox")).click();
		element(by.cssContainingText('.ui-menu-item','Home')).click();
		
		element(by.id("addr1-1")).sendKeys("Gangavalli");
		element(by.id("cityCountyWard-1")).sendKeys("Salem");
		element(by.id("postal-1")).sendKeys("636105");
		
		element(by.id("phoneCountryCode")).click();
		element(by.cssContainingText('.ui-menu-item','India  91')).click();
		
		element(by.id("requiredAreacode")).sendKeys("636105");
		element(by.id("requiredPhoneNumber")).sendKeys("8729875721");
		element(by.id("basicInfoEmailAddress")).sendKeys("Rajsenthil76@gmail.com");
		element(by.id("requiredEmail2")).sendKeys("Rajsenthil76@gmail.com");
		element(by.id("basicInfoUserName")).sendKeys("senthil");
		element(by.id("basicInfoPassword")).sendKeys("April2021!");
		element(by.id("requiredEqualTo")).sendKeys("April2021!");
		element(by.id("basicInfoQuestionId1-button")).click();
		element(by.cssContainingText('.ui-menu-item','What was your favorite place to visit as a child?')).click();
		element(by.id("basicInfoAnswer1")).sendKeys("Kerela");
		element(by.id("basicInfoQuestionId2-button")).click();
		element(by.cssContainingText('.ui-menu-item','What is the name of your childhood best friend?')).click();
		element(by.id("basicInfoAnswer2")).sendKeys("Sanjay");
		element(by.id("next")).click().then(function(){
			expect(element(by.className("idp-enrollment-confirmation-header")).getText()).toContain('Welcome');
		})		
	})
			
})