const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I enter the word {string} in the search bar", async (word) =>{
    await $('input[type=search]').setValue(word);
});

When("I click the search button", async () =>{
    await $('div.header2021-search-button').click();
});


Then("Check that at least one item appears", async() =>{
    const itemsList = await $('div.list-wrap > div.item-cells-wrap');
    await itemsList.waitForExist();
    await expect(itemsList).toHaveChildren({ gte: 1 });
});
