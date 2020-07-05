import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/usersActions';
import './styles.scss';

const AddUserForm = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    occupation: '',
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPssword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [formErrors, setFormErrors] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const newUser = {
      firstName,
      lastName,
      username,
      password,
      occupation,
    };
    // Attempt to register
    props.register(newUser);

    //Clear setUserCredentials
    setFirstName('');
    setLastName('');
    setUsername('');
    setPssword('');
    setOccupation('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = { ...formErrors };

    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length < 3 ? 'minimum 3 characaters required' : '';
        setFirstName(value);
        break;
      case 'lastName':
        errors.lastName =
          value.length < 3 ? 'minimum 3 characaters required' : '';
        setLastName(value);
        break;
      case 'username':
        errors.username =
          value.length < 3 ? 'minimum 3 characaters required' : '';
        setUsername(value);
        break;
      case 'occupation':
        errors.occupation =
          value.length < 3 ? 'minimum 3 characaters required' : '';
        setOccupation(value);
        break;
      case 'password':
        formErrors.password =
          value.length < 6 ? 'minimum 6 characaters required' : '';
        setPssword(value);
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              className={formErrors.firstName.length > 0 ? 'error' : null}
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
              value={firstName}
              onChange={handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              className={formErrors.lastName.length > 0 ? 'error' : null}
              placeholder="Last Name"
              type="text"
              name="lastName"
              noValidate
              value={lastName}
              onChange={handleChange}
            />
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>

          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              className={formErrors.username.length > 0 ? 'error' : null}
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              noValidate
              value={username}
              onChange={handleChange}
            />
            {formErrors.username.length > 0 && (
              <span className="errorMessage">{formErrors.username}</span>
            )}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className={formErrors.password.length > 0 ? 'error' : null}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              value={password}
              onChange={handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>

          <div className="occupation">
            <label htmlFor="occupation">Occupation</label>
            <input
              className={formErrors.occupation.length > 0 ? 'error' : null}
              placeholder="Occupation"
              type="text"
              name="occupation"
              noValidate
              value={occupation}
              onChange={handleChange}
            />
            {formErrors.occupation.length > 0 && (
              <span className="errorMessage">{formErrors.occupation}</span>
            )}
          </div>

          <div className="createAccount">
            <button type="submit" onClick={handleSubmit}>
              Create Account
            </button>
            <small>Already Have an Account?</small>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  usersReducer: state.user,
});

export default connect(mapStateToProps, { register })(AddUserForm);
