import { useState } from "react"; // import { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";
import { Header, Form, SearchButton, Input } from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useState("");

  const handleSearchChange = (event) => {
    setSearchParams(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchParams.trim() === "") {
      // trim() - видаляє пробіли з початку та кінця
      return toast.error("Input search query");
    }
    onSubmit(searchParams);
    setSearchParams("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ImSearch size="20" />
        </SearchButton>

        <Input
          type="text"
          name="searchParams"
          value={searchParams}
          onChange={handleSearchChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

export default Searchbar;

Searchbar.propsTypes = {
  onSubmit: PropTypes.func.isRequired,
};
