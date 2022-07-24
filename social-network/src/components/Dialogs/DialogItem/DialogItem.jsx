import React from "react";
import styles from "../Dialogs.module.scss"
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;

	return (
		<div className={styles.dialog}>
					<NavLink to={path}>{props.name}</NavLink>
				</div>
	)
}

export default DialogItem;