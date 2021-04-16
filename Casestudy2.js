describe('Protractor baby steps',function()
		{
	it('Casestudy2',function()
						{
		
		browser.manage().window().maximize();
		 browser.get('https://www.delta.com/apac/en'); 
		 element(by.className("login-btn btn btn-danger")).click();
		 element(by.id("userId")).sendKeys("senthil");	
		 browser.sleep(2000);
		 element(by.id("lastName")).sendKeys("raja");
		 element(by.id("password")).sendKeys("April2021!");
		element(by.className("btn btn-danger loginButton")).click();
		
		browser.manage().timeouts().implicitlyWait(10000);			
		
		element(by.xpath("/html/body/app-root/div[1]/ngc-global-nav/header/div/nav/div/div[2]/ngc-login/div/span")).click();
					
		element(by.id("flyout-logOut-link")).click();
		 
			
	})
			
})