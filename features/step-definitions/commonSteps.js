const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} home page", async (page) => {
    await browser.url(`${page}`);
});