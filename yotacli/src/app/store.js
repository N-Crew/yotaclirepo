import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "../redux/features/batch/batchListSlice";
import technologyReducer from "../redux/features/technology/CreateTechSlice";
import associateReducer from "../redux/features/associate/ListAssociateSlice";
import NotificationListSlice from "../redux/features/notification/NotificationListSlice";
import assignTest  from "../redux/features/assignTestToCandidate/assignTestSlice";
import  testList  from "../redux/features/test/CreateTestSlice";
import CreateClientSlice, {clientList, createClient} from "../redux/features/client/CreateClientSlice";
import techList  from "../redux/features/technology/createTechnologySlice";
import ClientQuestionListSlice from "../redux/features/client/ClientQuestionListSlice";
import techCreate from "../redux/features/technology/CreateTechSlice"
export const store = configureStore({
  reducer: {
    batch: batchReducer,
    technology: technologyReducer,
    associate: associateReducer,
    notification: NotificationListSlice,
    assignTest:assignTest, //get test list using react with dummy data
    test:testList,//get testlist using redux toolkit
    techList:techList,
    clients:CreateClientSlice,
    clients:CreateClientSlice,
    questionList:ClientQuestionListSlice, 
    clientQuestionsList:ClientQuestionListSlice, // fetch client interview questions
    updateClient:clientList,
    updateTech:techCreate,

  },
});
