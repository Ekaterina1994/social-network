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

  return (
    <div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{ dialogsElements }
			</div>
			<div className={styles.messages}>
				{ messagesElements }
			</div>
    </div>
  );
};

export default Dialogs;
