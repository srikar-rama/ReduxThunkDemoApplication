import "./styles.css";
import { fetchUsers } from "./actions";
import { connect } from "react-redux";
import { useEffect } from "react";

function App({ userData, fetchUsers }) {
  const users = userData.users;
  const loading = false;
  const error = userData.error;
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Hey ,I'm using Redux Thunk </h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users &&
        users.map((user, i) => (
          <h1 key={i} style={{ color: "orange" }}>
            {user.name}
          </h1>
        ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.users
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
