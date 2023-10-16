import { configureStore } from "@reduxjs/toolkit";
import batchReducer from "../redux/features/batch/batchListSlice";
import technologyReducer from "../redux/features/technology/CreateTechSlice";
import associateReducer from "../redux/features/associate/ListAssociateSlice";
import NotificationListSlice from "../redux/features/notification/NotificationListSlice";
import assignTest  from "../redux/features/assignTestToCandidate/assignTestSlice";
import  testList  from "../redux/features/test/CreateTestSlice";
import dataSlice from "../redux/features/technology/createTechnologySlice"
import CreateClientSlice, {createClient} from "../redux/features/client/CreateClientSlice";
import CreateClientQuestionSlice from "../redux/features/client/CreateClientQuestionSlice";
export const store = configureStore({
  reducer: {
    batch: batchReducer,
    technology: technologyReducer,
    associate: associateReducer,
    notification: NotificationListSlice,
    assignTest:assignTest, //get test list using react with dummy data
    test:testList,//get testlist using redux toolkit
    tech:dataSlice,
    clients:CreateClientSlice,
    clientQuestion:CreateClientQuestionSlice //Add client interview Question 

  },
});
