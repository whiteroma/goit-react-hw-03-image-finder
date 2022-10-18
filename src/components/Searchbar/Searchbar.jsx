import React from 'react';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { SearchBar, SearchForm, SearchInput } from './Searchbar.styled';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  imgName: '',
};

const validationSchema = Yup.string({
  imgName: Yup.string().required('Please enter your search query'),
});

class Searchbar extends React.Component {
  handleSubmit = (values, { resetForm }) => {
    if(values.imgName.trim() === '') {
        return toast.error('Please enter your search query')
    };
    this.props.onSubmit(values.imgName);
    resetForm();
  };

  render() {
    return (
      <SearchBar>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
        >
          <SearchForm>
            <button aria-label="search" type="submit">
              <FcSearch size="23px" />
            </button>

            <SearchInput
              name="imgName"
              type="text"
              placeholder="Search images and photos"
            />
            {/* <React.StrictMode>
              <ErrorMessage render={msg => toast.error(msg)} name="imgName" />
            </React.StrictMode> */}
          </SearchForm>
        </Formik>
      </SearchBar>
    );
  }
}

export default Searchbar;

  /* <div style={{ textAlign: 'center', color: "#c70d0d"}}>{msg}</div> */

