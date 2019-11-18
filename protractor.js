describe('User Registration Page Tests', function()
 {
    beforeEach(function() 
    {
        browser.get('/#/register');
    });

    it('user registration success', function()
    {
	{
        element(by.model('user.UserName')).sendKeys('some-' + randVal);
        element(by.model('user.email')).sendKeys('some' + randVal + '@user.com');
        element(by.model('user.password')).sendKeys('123456');
        element(by.id('submitBtn')).click();
    }
        browser.getCurrentUrl().then(function(url) {
            expect(url).toEqual('https://github.com/');     
        });
    }
};