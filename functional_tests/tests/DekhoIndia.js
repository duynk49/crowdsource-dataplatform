const taiko = require('taiko');
const assert = require('assert');

const { button, click, image, link, clear, text, scrollTo } = require('taiko');

step('Validate Dekho India content', async function () {
  assert.ok(await text('Enrich your language by typing the text you see').exists());
  assert.ok(await text('Validate').exists());
  assert.ok(await text('Label').exists());
  await scrollTo('Contributions made to Dekho India');
  await taiko.waitFor(500);
  assert.ok(await text('Contribution Tracker').isVisible());
  assert.ok(await text('Overall Summary').isVisible());
  assert.ok(await text('Contributions made to Dekho India').isVisible());
  assert.ok(await text('Your language and top 3 contributed languages').isVisible());
});

step('User should see the top Language graph and other stats for Dekho India', async function () {
  assert.ok(await text('Your language and top 3 contributed languages').exists());
  assert.ok(await text('Languages').exists());
  assert.ok(await text('People participated').exists());
  assert.ok(await text('Images labelled').exists());
  assert.ok(await text('Images validated ').exists());
});

step(
  'When user clicks on Dekho India breadcrumb, user should land on Dekho India home page',
  async function () {
    await taiko.image('dekhoLogo').exists();
    await click(taiko.image('dekhoLogo'));
    await taiko.waitFor(1000);
    assert.ok(await text('Enrich your language by typing the text you see').isVisible());
  }
);

step('User clears the edit field should disable the buttons again', async function () {
  await clear(taiko.textBox('Add Text'));
  await taiko.waitFor(500);
  assert.ok(await button('Submit').isDisabled());
  assert.ok(await button('Cancel').isDisabled());
});

step('<name> button should be enabled', async function (name) {
  await taiko.waitFor(1000);
  assert.ok(!(await taiko.button(name).isDisabled()));
});

step('<arg0> should be enabled , <arg1> <arg2> buttons should be enabled', async function (arg0, arg1, arg2) {
  await taiko.waitFor(3000);
  assert.ok(!(await taiko.button({ id: arg0 }).isDisabled()));
  assert.ok(!(await taiko.button({ id: arg1 }).isDisabled()));
  assert.ok(!(await taiko.button({ id: arg2 }).isDisabled()));
});

step('User should see the text <text>', async function (text) {
  await taiko.waitFor(500);
  assert.ok(taiko.text(text).isVisible());
});

step(
  'When user clicks on Contribute more button , user should see no data available message for <initiative>',
  async function (initiative) {
    await taiko.waitFor(500);
    await click(button('Contribute More'));
    await taiko.waitFor(2000);

    if (initiative == 'Dekho India') {
      assert.ok(await text('Thank you for your enthusiasm to label the images').exists());
    }
    if (initiative == 'Likho India') {
      assert.ok(await text('Thank you for your enthusiasm to translate the sentences.').exists());
    }
    if (initiative == 'Suno India') {
      assert.ok(await text('Thank you for your enthusiasm to transcribe the recordings.').exists());
    }
  }
);

step(
  'When user clicks on Validate more button , user should see no data available message for <initiative>',
  async function (initiative) {
    await taiko.waitFor(500);
    await click(button('Validate More'));
    await taiko.waitFor(2000);

    if (initiative == 'Dekho India') {
      assert.ok(await text('Thank you for your enthusiasm to validate the image labels.').exists());
    }
    if (initiative == 'Likho India') {
      assert.ok(await text('Thank you for your effort to validate translations.').exists());
    }
    if (initiative == 'Suno India') {
      assert.ok(await text('Thank you for your enthusiasm to validate the recordings.').exists());
    }
  }
);
step('When user clicks on Validate more button', async function () {
  await taiko.waitFor(500);
  await click(button('Validate More'));
  await taiko.waitFor(2000);
});

step('Validate thank you page bronze Badge for Dekho India', async function () {
  await taiko.waitFor(2000);
  assert.ok(await text('Congratulations on winning a new badge!').isVisible());
  assert.ok(await text('You’ve earned your Dekho India Bronze Bhasha Samarthak Badge').isVisible());
  assert.ok(await text('Validated 5 image label(s) in Kannada').isVisible());
  assert.ok(await text('Share on').isVisible());
  assert.ok(await text('Download').isVisible());
  assert.ok(await image('Bronze Badge english').isVisible());
  assert.ok(!(await image('bronzeDownload').isDisabled()));
});

step('User should see add extension and watch video link', async function () {
  await taiko.waitFor(1000);
  assert.ok(await link('Install Now').exists());
  assert.ok(await button('Watch the video').exists());
});

step('User should store the progress bar for <initiative>', async function (initiative) {
  await taiko.waitFor(2000);
  await taiko.$('#progress_bar').exists();
  const contributionMade = await taiko.$('//*[@data-testid="TargetProgress"]').text();
  const contributedValue = contributionMade.split('/');
  initialProgressValue = contributedValue[0];
  assert.ok(await text(`${initiative} Target Achieved`).isVisible());
});

step('Clicking watch video link should open video', async function () {
  assert.ok(await button('Watch the video').exists());
  assert.ok(await link('Install Now').exists());
  taiko.waitFor(500);
});

step('Validate Thank you page content for Dekho India', async function () {
  assert.ok(await text('Dekho India Target Achieved').exists());
  assert.ok(await text('Image(s)').exists());
  assert.ok(await text('Labelled (in images)').isVisible());
});

step('User clears the edit field should disable the buttons again in validation', async function () {
  await clear(taiko.textBox('Edit'));
  await taiko.waitFor(500);
  assert.ok(await button('Submit').isDisabled());
});

step(
  'User should be able to see bronze Badge after winning with <contributionLeft> <label> contribution left',
  async function (contributionLeft, label) {
    assert.ok(await text('You are a Bronze Validator').isVisible());
    assert.ok(await text('Your Badge').isVisible());
    assert.ok(await text('Share on').isVisible());
    assert.ok(await text(`Validate ${contributionLeft} ${label} to earn your Silver Badge.`).isVisible());
    assert.ok(await image('Bronze badge').isVisible());
  }
);

step(
  'User clicks on <arg0> , he should see thank you page with heading <contributed> <label> contributed',
  async function (arg0, contributed, label) {
    await click(taiko.button(arg0));
    await taiko.waitFor(2000);
    assert.ok(await text(`You validated ${contributed} ${label} for your language!`).isVisible());
  }
);
