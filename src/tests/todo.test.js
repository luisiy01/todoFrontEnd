import { createStore, combineReducers, applyMiddleware } from "redux";
import todo from "../redux/reducers/todo";
import user from "../redux/reducers/user";
import thunk from "redux-thunk";
import {
  callAddToDo,
  callGetToDo,
  callCompleteToDo,
  callDeleteToDo,
} from "../api/Todo";
import { callLoginUser } from "../api/User";

const reducer = combineReducers({
  todo,
  user,
});

let store = createStore(reducer, applyMiddleware(thunk));

describe("tests related with todo api calls", () => {
  afterEach(() => {
    store = createStore(reducer, applyMiddleware(thunk));
  });

  beforeEach(async (done) => {
    //login user
    store
      .dispatch(
        callLoginUser({
          email: "luisnunez91@gmail.com",
          password: "12345678",
        })
      )
      .then(() => {
        done();
      });
  });

  test("create todo", async (done) => {
    store
      .dispatch(
        callAddToDo({
          toDo: {
            todo: "bla blab asfsdfdsf lablablalb",
            dueDate: "2020-07-23T04:15:15.340Z",
          },
          user_id: store.getState().user.user._id,
          authToken: store.getState().user.authToken,
        })
      )
      .then(() => {
        expect(store.getState().todo.added).toEqual(true);
        done();
      });
  });

  test("get todo list", async (done) => {
    store.dispatch(callGetToDo(store.getState().user.authToken)).then(() => {
      expect(store.getState().todo.get).toEqual(true);
      done();
    });
  });

  test("complete a todo", async (done) => {
    //create a todo
    store
      .dispatch(
        callAddToDo({
          toDo: {
            todo: "bla blab asfsdfdsf lablablalb",
            dueDate: "2020-07-23T04:15:15.340Z",
          },
          user_id: store.getState().user.user._id,
          authToken: store.getState().user.authToken,
        })
      )
      .then(() => {
        store
          .dispatch(
            callCompleteToDo({
              token: store.getState().user.authToken,
              _id: store.getState().todo.todoList[
                store.getState().todo.todoList.length - 1
              ]._id,
            })
          )
          .then(() => {
            console.log("store", store.getState().todo);
            expect(store.getState().todo.completed).toEqual(true);
            done();
          });

        done();
      });
  });

  test("delete a todo", async (done) => {
    //create a todo
    store
      .dispatch(
        callAddToDo({
          toDo: {
            todo: "bla blab asfsdfdsf lablablalb",
            dueDate: "2020-07-23T04:15:15.340Z",
          },
          user_id: store.getState().user.user._id,
          authToken: store.getState().user.authToken,
        })
      )
      .then(() => {
        store
          .dispatch(
            callDeleteToDo({
              token: store.getState().user.authToken,
              _id: store.getState().todo.todoList[
                store.getState().todo.todoList.length - 1
              ]._id,
            })
          )
          .then(() => {
            expect(store.getState().todo.deleted).toEqual(true);
            done();
          });

        done();
      });
  });
});
