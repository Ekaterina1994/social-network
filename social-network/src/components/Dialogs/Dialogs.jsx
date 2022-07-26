import React from "react";
import styles from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

	let dialogsElements = props.dialogsData.map((dialog) => {
		return (<DialogItem name={dialog.name} id={dialog.id} />)
	});
	

	let messagesElements = props.messagesData.map((message) => {
		return (<Message message={message.message} id={message.id} />)
	});

	let newMessageElement = React.createRef();

	let addMessage = () => {
		let message = newMessageElement.current.value;

		alert(message);
	}

  return (
    <div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{ dialogsElements }
			</div>
			<div className={styles.messages}>
				{ messagesElements }
				<div>
				<textarea ref={newMessageElement}></textarea>
				</div>
				<div>
				<button onClick={addMessage}>Send message</button>
				</div>
			</div>
    </div>
  );
};

export default Dialogs;
