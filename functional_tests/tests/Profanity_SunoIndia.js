const taiko = require('taiko');
const assert = require('assert');

const {
    button,
    goto,
    click,
} = require('taiko');

step("Open Profanity Website for <flow> Initiative", async (flow) => {
    await taiko.waitFor(500)
    if(flow == "asr") {
        await goto(process.env.profanity_test_url_asr||'https://dev-nplt.vakyansh.in/en/profanity.html?type=asr', {waitForEvents:['loadEventFired']});
    }
    if(flow == "parallel") {
        await goto(process.env.profanity_test_url_parallel, {waitForEvents:['loadEventFired']});
    }
    if(flow == "text") {
        await goto(process.env.profanity_test_url_text, {waitForEvents:['loadEventFired']});
    }
    if(flow == "ocr") {
        await goto(process.env.profanity_test_url_ocr, {waitForEvents:['loadEventFired']});
    }
   
    await taiko.waitFor(500)
});