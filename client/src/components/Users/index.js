import React, { Component } from 'react';
import UserItem from './../UserItem';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actions/usersActions';
import FiltersForm from '../FiltersForm';
import './styles.scss';

class Users extends Component {
  state = {
    search: '',
    select: 'desc',
  };

  async componentDidMount() {
    await this.props.getUsers();
    console.log('componentDidMount', this.props.users.users);
  }

  onSelect = () => {
    switch (this.state.select) {
      case 'desc':
        this.setState({
          select: 'asc',
        });
        console.log('this.setState = desc');
        break;
      case 'asc':
        this.setState({
          select: 'desc',
        });
        console.log('this.setState = asc');
        break;
      default:
        break;
    }
  };

  handleChange = (e) => {
    this.setState({ search: e });
  };

  sortAsc = (arr, field) => {
    return arr.sort(function (a, b) {
      if (a[field] > b[field]) return 1;

      if (b[field] > a[field]) return -1;

      return 0;
    });
  };

  sortDesc = (arr, field) => {
    return arr.sort(function (a, b) {
      if (a[field] > b[field]) return -1;

      if (b[field] > a[field]) return 1;

      return 0;
    });
  };

  render() {
    const users = this.props.users.users.map((item, index) => {
      const fullName = `${item.firstName} + ' ' ${item.lastName}`;
      if (
        this.state.search !== '' &&
        fullName.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1
      ) {
        return null;
      }
      if (this.state.select === 'desc') {
        this.props.users.users.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        console.log('1');
      } else {
        this.props.users.users.sort((a, b) =>
          b.firstName.localeCompare(a.firstName)
        );
      }

      return (
        <UserItem
          key={index}
          firstName={item.firstName}
          lastName={item.lastName}
          occupation={item.occupation}
        />
      );
    });
    return (
      <div className="users-wrap">
        <FiltersForm
          onChange={this.handleChange}
          value={this.state.search}
          getUsers={this.getUsers}
          select_value={this.onSelect}
        />
        <div className="users">{users}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.usersReducer,
  sort: state.sortReducer,
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
