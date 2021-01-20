import { action } from "@storybook/addon-actions";
import React from "react";

import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {
  console.log(props)
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={props.name}
          /*
            This must be a controlled component
          */
          />
        </form>
        <InterviewerList 
        interviewers={props.interviewers}
        interviewer={props.interviewer}
        setInterviewer={action("setInterviewer")}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}