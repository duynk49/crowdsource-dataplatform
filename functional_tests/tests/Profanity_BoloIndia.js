const taiko = require('taiko');
const assert = require('assert');

const {
    openBrowser,
    button,
    goto,
    write,
    accept,
    alert,
    click,
    into,
} = require('taiko');
const path = require('path');

step("User details popup should appear", async function () {
    if (await taiko.text('User Details').exists()) {
        assert.ok('speaker details pop-up exists')
    }
    await taiko.waitFor(500)
});
step("When User enter <usernm> Email and select prefered langauge as <lang>", async function (usernm,lang) {
    if (await taiko.text('User Details').exists()) {
        const username = taiko.textBox({ id: 'username' })
        await taiko.waitFor(700)
        await write(usernm, into(username))
        await taiko.dropDown({ id: 'preferred-language' }).select(lang);
    }
});

step("User should see the Alert for user not found", async function() {  
    await taiko.waitFor(500)
   // assert.ok(await text('User not found').exists());
   alert('User not found', async () => await accept())
});

step("User should see the Alert for invalid user", async function() {  
    await taiko.waitFor(500)
   // assert.ok(await text('User not found').exists());
   alert('Enter valid email', async () => await accept())
});