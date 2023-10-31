import React from "react";
import Card from "../../../ui/card/Card";
import classes from "./AddClient.module.css";
import ClientQuestionForm from "./ClientQuestionForm";
// import { useLocation } from "react-router";

const AddClientQuestion = () => {
  
  return (
    <div className={classes.card}>
      <Card>
        <ClientQuestionForm  />
      </Card>
    </div>
  );
};
export default AddClientQuestion;
