import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core';
import {RequestStatusType} from "../../app/app-reducer";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    entityStatus: RequestStatusType
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    console.log("EditableSpan called");
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const  a = props.entityStatus

    return editMode
        ?    <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} disabled={props.entityStatus === "loading"} />
        : <span onDoubleClick={activateEditMode} >{props.value}</span>
});
