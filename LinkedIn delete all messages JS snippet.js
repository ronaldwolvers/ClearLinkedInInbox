//Execute the Javascript snippet below directly on your LinkedIn messages page to clear your
//inbox, slowly but steadily.
//Authored 21 Jan 2019, http://www.linkedin.com/messaging/
//Edited by Jonathan Schober (Littlejd1997)
//https://github.com/ronaldw/ClearLinkedInInbox

//Click the first visible message.
function clickFirstMessage() {
	$(".msg-conversation-listitem__link:eq(0)").click();
}

//Click the "overflow" button (ellipsis / three dots).
//No longer Needed
function clickOverFlowButton() {
	$(".msg-thread-actions__dropdown").children().first().click();
}

//Click the "delete conversation" button.
function clickDeleteConversationButton() {
	$('#ember110').click()
}

//Click the "confirm" button.
function clickDeleteConfirmButton() {
	$(".js-msg-delete").click()
}


//Generic function that can execute arbitrary functions after a specified timeout.
function executeAfterTimeout(functionToExecute, timeout) {
	return new Promise(resolve => {
		setTimeout(() => {
			functionToExecute();
			resolve();
		}, timeout);
	});
}


//Timeout (in milliseconds) in between every step. Due to asynchronous calls being made on the page
//a timeout is necessary, but the value of the timeout was arbitrarily chosen.
const timeout = 500;

//Keep looping while there are still messages.
while	($(".msg-conversation-listitem__link:eq(0)").length > 0) {
	await executeAfterTimeout(clickFirstMessage, timeout). then(executeAfterTimeout.bind(this, clickDeleteConversationButton, timeout)).then(executeAfterTimeout.bind(this, clickDeleteConfirmButton, timeout));
}
