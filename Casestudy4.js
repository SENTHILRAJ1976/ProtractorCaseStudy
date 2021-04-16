describe('Protractor baby steps',function()
		{
	it('Casestudy4',function()
			
			{
		
		browser.manage().window().maximize();
		 browser.get('https://www.delta.com/apac/en'); 
		 element(by.className("login-btn btn btn-danger")).click();
		 element(by.id("userId")).sendKeys("senthil");	
		 browser.sleep(2000);
		 element(by.id("lastName")).sendKeys("raja");
		 element(by.id("password")).sendKeys("April2021!");
		element(by.className("btn btn-danger loginButton")).click();
		 browser.sleep(3000);
		 
		var travelinfo=element(by.id("headSectab1"));
		var firstclass=element(by.id("primary-static-link-2"));
		
		browser.actions().mouseMove(travelinfo).mouseMove(firstclass).click().perform();
		browser.sleep(5000);
		
		element(by.linkText("BOOK NOW")).click();
			
	})
			
})