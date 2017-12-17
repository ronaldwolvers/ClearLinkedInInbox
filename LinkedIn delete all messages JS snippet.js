//Execute the Javascript snippet below directly on your LinkedIn messages page to clear your
//inbox, slowly but steadily.
//Authored 17 december 2017, http://www.linkedin.com/messaging/

//https://github.com/ronaldw/ClearLinkedInInbox

//Click the first visible message.
function clickFirstMessage() {
	$(".msg-conversation-listitem__link:eq(0)").click();
}

//Click the "overflow" button (ellipsis / three dots).
function clickOverFlowButton() {
	$(".msg-thread__topcard-overflow-icon").click();
}

//Click the "delete conversation" button.
function clickDeleteConversationButton() {
	$(".msg-topcard__full-width-action-button.delete").click();
}

//Click the "confirm" button.
function clickDeleteConfirmButton() {
	$(".msg-modal__button.confirm-delete-btn").click();
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
const timeout = 1000;

//Keep looping while there are still messages.
while	($(".msg-conversation-listitem__link:eq(0)").length > 0) {
	await executeAfterTimeout(clickFirstMessage, timeout).then(executeAfterTimeout.bind(this, clickOverFlowButton, timeout)).then(executeAfterTimeout.bind(this, clickDeleteConversationButton, timeout)).then(executeAfterTimeout.bind(this, clickDeleteConfirmButton, timeout));
}