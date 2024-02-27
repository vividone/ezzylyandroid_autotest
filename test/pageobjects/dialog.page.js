class DialogObj {
	get appBtn() {
		return $('//android.widget.TextView[@content-desc="Accessibility"]');
	}
	get alertDialogBtn() {
		return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
	}
	get textEntryDialogBtn() {
		return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
	}
	get userNameField() {
		return $(
			'//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]'
		);
	}
	get passwordField() {
		return $(
			'//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]'
		);
	}
	get dialogOkBtn() {
		return $('//android.widget.Button[@resource-id="android:id/button1"]');
	}
	get dialogCancelBtn() {
		return $('//android.widget.Button[@resource-id="android:id/button2"]');
	}

	// get everyMondayBtn() {
	// 	return $('//android.widget/CheckedTextView[@index="0"]');
	// }

	weekdayCheckbox(index) {
		return $(`//android.widget/CheckedTextView[@index="${index}"]`);
	}
	get days() {
		return $$('//android.widget.CheckedTextView');
	}

	get viewBtn() {
		return $('//android.widget.TextView[@content-desc="Views"]');
	}

	pauseFnc(p) {
		driver.pause(p);
	}

	get tabsBtn() {
		return $('//android.widget.TextView[@content-desc="Tabs"]');
	}
	get contentByIdBtn() {
		return $('//android.widget.TextView[@content-desc="1"]');
	}
	get tabs() {
		return $$('android.widget.LinearLayout');
	}
	get tab1Details() {
		return $('~tab1');
	}
	get tab2Details() {
		return $('~tab2');
	}
	get tab3Details() {
		return $('~tab3');
	}
	get repeatAlarmBtn() {
		return $('//android.widget/Button[@content-desc="Repeat alarm"]');
	}
}
module.exports = new DialogObj();
