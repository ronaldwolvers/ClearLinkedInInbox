

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

//Chain promises.
function clickFirstMessage() {
	$(".msg-conversation-listitem__link:eq(0)").click();
}

function clickOverFlowButton() {
	$(".msg-thread__topcard-overflow-icon").click();
}

function clickDeleteConversationButton() {
	$(".msg-topcard__full-width-action-button.delete").click();
}

function clickDeleteConfirmButton() {
	$(".msg-modal__button.confirm-delete-btn").click();
}

function executeAfterTimeout(functionToExecute, timeout) {
	return new Promise(resolve => {
		setTimeout(() => {
			functionToExecute();
			resolve();
		}, timeout);
	});
}

executeAfterTimeout(clickFirstMessage, 5000).
	then(executeAfterTimeout(clickOverFlowButton, 5000)).
	then(executeAfterTimeout(clickDeleteConversationButton, 5000)).
	then(executeAfterTimeout(clickDeleteConfirmButton, 5000));