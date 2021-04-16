describe('Protractor baby steps',function()
		{
	it('Casestudy3',function()
			//'Angular JS website' define the test case name
			{
		
		browser.manage().window().maximize();
		 browser.get('https://www.delta.com/apac/en'); 
		 element(by.className("login-btn btn btn-danger")).click();
		 element(by.id("userId")).sendKeys("senthil");	
		 browser.sleep(2000);
		 element(by.id("lastName")).sendKeys("raja");
		 element(by.id("password")).sendKeys("April2021!");
		element(by.className("btn btn-danger loginButton")).click();
		browser.sleep(20000);
		
		element(by.id("headPrimary1")).click();
       element(by.id("fromAirportName")).click().then(function(){
        browser.wait(element(by.className("modal-dialog search-flyout airport-lookup")).isDisplayed, 5000);
		 
        }).then(function(){
        	browser.actions().mouseMove(element(by.className("form-control mr-0 input-mobile-tab-class airport-search ng-pristine ng-valid ng-touched")).sendKeys("India")).perform();
        	browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        	browser.actions().sendKeys(protractor.Key.ENTER).perform();

        })
		
        element(by.id("toAirportName")).click().then(function(){
        
        
        browser.wait(element(by.className("airport-lookup-container search-dialog")).isDisplayed, 5000);
		 
	        }).then(function(){
	        	browser.actions().mouseMove(element(by.className("form-control mr-0 input-mobile-tab-class airport-search ng-pristine ng-valid ng-touched")).sendKeys("Indo")).perform();
	        	browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
	        	browser.actions().sendKeys(protractor.Key.ENTER).perform();

	        })

		 element(by.id("selectTripType-val")).click();
        element(by.cssContainingText('.select-ui-optionList','One Way')).click();
		 
               
        browser.executeScript("document.getElementById('calDepartLabelCont').value='17/04/2021'")       
        

        browser.executeScript("document.getElementById('calReturnLabelCont').value='18/04/2021'")
        
        element(by.id("passengers-val")).click();
        element(by.cssContainingText('.select-ui-optionList','1 Passenger')).click();
        
        element(by.id("btn-book-submit")).click();
        element(by.id("btnSubmit")).click();
       			
	})
			
})