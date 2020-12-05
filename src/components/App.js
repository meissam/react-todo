import React, { Component } from "react";

import Layout from "../Layout/Layout";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

import "../assets/css/styles.css";


class App extends Component {
  state = {
    error: null,
    filterTags: [],
    items: [],
  };

  handleGettingAllTags = () => {
    const items = this.state.items;
    const tags = [];
    items.map((item) => tags.push(...item.tags));
    return [...new Set(tags)];
  };

  handleAddFilterTag = (selectedTag) => {
    let newTag = selectedTag.trim();
    let filterTags = this.state.filterTags;
    let selectedTagIndex = filterTags.indexOf(newTag);

    if (selectedTagIndex === -1) {
      this.setState((prevState) => ({
        filterTags: [...prevState.filterTags, newTag],
      }));
    }
  };

  handleRemoveFilterTag = (selectedTag) => {
    this.setState((prevState) => ({
      filterTags: prevState.filterTags.filter((tag) => selectedTag !== tag),
    }));
  };

  handleFilter = () => {
    const items = this.state.items;
    const selectedTags = this.state.filterTags;

    const filterdItems = items.filter((item) =>
      selectedTags.every((i) => item.tags.includes(i))
    );

    return filterdItems;
  };

  handleAddItem = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  handleRemoveItem = (item) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((option) => item !== option.id),
    }));
  };



  componentDidMount() {
    try {
      const json = localStorage.getItem('items');
      const items = JSON.parse(json);

      if (items) {
        this.setState(() => ({ items }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem('items', json);
    }
  }
  componentWillUnmount() {
  }


  render() {
    const items = this.handleFilter();
    const tags = this.handleGettingAllTags();
    return (
      <>
        <Layout
          header={<Header handleAddItem={this.handleAddItem} />}
          content={
            <Content items={items} handleRemoveItem={this.handleRemoveItem} />
          }
          sidebar={
            <Sidebar
              tags={tags}
              activeFilters={this.state.filterTags}
              handleAddFilterTag={this.handleAddFilterTag}
              handleRemoveFilterTag={this.handleRemoveFilterTag}
            />
          }
        />
      </>
    );
  }
}

export default App;
