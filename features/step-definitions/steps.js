const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const cart=require("../pageobjects/cart");
const addToCart = require('../pageobjects/addToCart.page.js');
const swipe=require("../pageobjects/swipe.page.js");
Given(/^I am on the login page$/,async  () => {
	await browser.pause(2000);
});

When(/^I login with username and password$/,async  () => {
    await addToCart.cart();
   await swipe.swipegesture();
});

Then(/^I should see the home page$/,async  () => {
	return true;
});




























// await $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView').click();
// await $('//android.widget.TextView[@text="Below you will find the latitude and longitude. You can use Appium to change them with this link."]').click();


// const { width, height } = await client.getWindowRect();

// const centerX = width / 2;
// const centerY = height / 2;

// console.log(`Center Coordinates: (${centerX}, ${centerY})`);

//    const touchActions = [
//     { action: 'press', x: centerX, y: centerY - 100 },
//     { action: 'moveTo', x: centerX, y: centerY - 200 },
//     { action: 'wait', ms: 100 },
//     { action: 'moveTo', x: centerX, y: centerY + 100 },
//     { action: 'release' }
// ];

// await client.multitouchPerform(touchActions);