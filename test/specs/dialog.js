const dialog = require('../pageobjects/dialog.page');
var chai = require('chai');
const expect = chai.expect;

describe('Dialog ~', () => {
	beforeEach('', () => {});

	it('Verify text entry are editable', () => {
		dialog.appBtn.click();
		dialog.alertDialogBtn.click();
		dialog.textEntryDialogBtn.click();

		dialog.userNameField.addValue('Test User');
		dialog.userNameField.clearValue();
		dialog.userNameField.addValue('Actual User');
		dialog.passwordField.addValue('Test Pass');
		dialog.passwordField.clearValue();
		dialog.passwordField.addValue('Actual Pass');

		let text = dialog.userNameField.getText();
		console.log(text);
		// expect(text).equal('Actual User');

		dialog.dialogOkBtn.click();
	});
	///
	it('Scrolls to a view', () => {
		dialog.viewBtn.click();
		driver.touchAction([
			{ action: 'press', x: 500, y: 1400 },
			{ action: 'moveTo', x: 500, y: 300 },
			'release',
		]);
	});
	it('Verify orientation', () => {
		console.log(driver.getOrientation());
		driver.setOrientation('LANDSCAPE');
		dialog.pauseFnc(2000);
		driver.saveScreenshot('./screenshots/landscape.png');
		dialog.appBtn.click();

		driver.setOrientation('PORTRAIT');
		driver.back();
		driver.saveScreenshot('./screenshots/portriat.png');
	});

	it('Verify the repeat alarm attribute is checked when selected', () => {
		let isChecked, text;

		dialog.appBtn.click();
		dialog.alertDialogBtn.click();
		dialog.repeatAlarmBtn.click();
		text = dialog.weekdayCheckbox(0).getText();
		driver.pause(2000);
		// expect(text).equal('Every Monday');

		isChecked = dialog.weekdayCheckbox(0).getAttribute('checked');
		driver.pause(2000);
		// expect(isChecked).equal('false');

		dialog.weekdayCheckbox().cllick();
		isChecked = dialog.weekdayCheckbox(0).getAttribute('checked');
		// expect(isChecked).equal('true');
	});
	// it('Verify Timeouts', () => {
	// 	driver.setImplicitTimeout(10000);
	// 	// driver.setTimeouts(10000);
	// 	// dialog.pauseFnc(10000);
	// 	dialog.viewBtn.click();
	// });
});
