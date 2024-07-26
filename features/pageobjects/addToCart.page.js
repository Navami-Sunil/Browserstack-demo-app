class addcart{
 async cart(){
await $('//android.widget.EditText[@content-desc="test-Username"]').setValue("standard_user");
    await $('//android.widget.EditText[@content-desc="test-Password"]').setValue("secret_sauce");
    await $('//android.widget.TextView[@text="LOGIN"]').click();
    await $('(//android.widget.TextView[@text="ADD TO CART"])[1]').click();

await browser.pause(2000);
    
     await swipe(520,1619,537,570);
await $("(//android.widget.TextView[@text=\"ADD TO CART\"])[3]").click();
await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.view.ViewGroup').click();
await $('//android.widget.TextView[@text="REMOVE"]').click();
await swipe(520,1619,537,570);
await $('//android.widget.TextView[@text="CHECKOUT"]').click();
await $('//android.widget.EditText[@content-desc="test-First Name"]').setValue("Navami");
await $('//android.widget.EditText[@content-desc="test-Last Name"]').setValue("Sunil");
await $('//android.widget.EditText[@content-desc="test-Zip/Postal Code"]').setValue("909090");
await $('//android.view.ViewGroup[@content-desc="test-CONTINUE"]').click();

await $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView').click();
await $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]').click();
 }
}
module.exports=new cart();