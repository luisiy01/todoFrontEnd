import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "../redux/reducers/user";
import thunk from "redux-thunk";
import { callLoginUser, callCreateUser } from "../api/User";
//connect to test DB

const reducer = combineReducers({
  user,
});

const store = createStore(reducer, applyMiddleware(thunk));

describe("tests related with user api calls", () => {
  //use an existing  user with correct password to pass this test
  test("login user", async (done) => {
    store
      .dispatch(
        callLoginUser({
          email: "luisnunez91@gmail.com",
          password: "12345678",
        })
      )
      .then(() => {
        expect(store.getState().user.isAuthUser).toEqual(true);
        done();
      });
  });

  //use a new email and password to pass this test
  test("create user", async (done) => {
    store
      .dispatch(
        callCreateUser({
          email: "luisnunez91@gmail.com",
          password: "12345678",
        })
      )
      .then(() => {
        expect(store.getState().user.created).toEqual(true);
        done();
      });
  });
});
