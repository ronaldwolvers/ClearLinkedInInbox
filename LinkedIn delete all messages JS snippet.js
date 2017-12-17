

//

//Old.
$(".msg-conversation-card__delete").each(function(){$(this).click();$("button.confirm-delete-btn").click();}); 

//Click ellipsis.
$(".msg-thread__topcard-overflow-icon").click();

//Click ellipses for all messages that are visible.
$(".msg-conversation-listitem__link").each(function(){$(".msg-thread__topcard-overflow-icon").click();});

//Click ellipses for all messages that are visible and hit "Delete", followed by "Yes, delete".
$(".msg-conversation-listitem__link:first").each(
	function() {
		setTimeout(function printSomeStuff() {
			console.log('Some stuff in the console');
		});
		$(".msg-thread__topcard-overflow-icon").click();
		$(".msg-topcard__full-width-action-button.delete").click();
		$(".msg-modal__button.confirm-delete-btn").click();
	}
);

//Click ellipses for all messages that are visible and hit "Delete", followed by "Yes, delete". Looping.
var count = 4;
function deleteFirstVisibleMessage() {
	$(".msg-conversation-listitem__link:first").each(
		function() {
			if (count > 0) {
				setTimeout(deleteFirstVisibleMessage);
			}
			$(".msg-thread__topcard-overflow-icon").click();
			$(".msg-topcard__full-width-action-button.delete").click();
			$(".msg-modal__button.confirm-delete-btn").click();
			count--;
		}
	);
}
deleteFirstVisibleMessage();

//Same as above but with chained promises.

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

//Keep looping while there are still messages.
while	($(".msg-conversation-listitem__link:eq(0)").length > 0) {
	await executeAfterTimeout(clickFirstMessage, 5000).then(executeAfterTimeout.bind(this, clickOverFlowButton, 5000)).then(executeAfterTimeout.bind(this, clickDeleteConversationButton, 5000)).then(executeAfterTimeout.bind(this, clickDeleteConfirmButton, 5000));
}