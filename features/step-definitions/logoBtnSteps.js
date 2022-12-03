const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I open {string} tab", async (tab) =>{
   await $(`span=${tab}`).click();
    //await $(`//span[text()="${tab}"]`).click();
});

When("I click on the Internet shop logo", async () =>{
    await $('div.header2021-logo').click();
});


Then("Check that the main page opened", async() =>{
    await expect(browser).toHaveUrl("https://www.newegg.com/")
});
