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
    items: [
      {
        id: 1,
        title: "Buy Car",
        completed: false,
        tags: ["home", "buy"],
      },
      {
        id: 2,
        title: "Go to meeting with Jack",
        completed: false,
        tags: ["work", "meeting"],
      },
      {
        id: 3,
        title: "Clean the House",
        completed: false,
        tags: ["home", "affairs"],
      },
      {
        id: 4,
        title: "meeting with David",
        completed: false,
        tags: ["work", "meeting"],
      },
    ],
  };

  handleGettingAllTags = () => {
    const items = this.state.items;
    const tags = [];
    items.map((item) => tags.push(...item.tags));
    return [...new Set(tags)];
  };

  handleAddFilterTag = (selectedTag) => {
    let filterTags = this.state.filterTags;
    let selectedTagIndex = filterTags.indexOf(selectedTag);

    if (selectedTagIndex === -1) {
      this.setState((prevState) => ({
        filterTags: [...prevState.filterTags, selectedTag],
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

    console.log(selectedTags);
    const filterdItems = items.filter((item) =>
      selectedTags.every((i) => item.tags.includes(i))
    );

    return filterdItems;
  };

  handleAddItem = (item) => {

    this.setState((prevState) => ({
      items: [...prevState.items, {
        id: 5,
        title: item,
        completed: false,
        tags: ["work", "meeting"],
      }],
    }));
  };

  render() {
    const items = this.handleFilter();
    const tags = this.handleGettingAllTags();
    return (
      <>
        <Layout
          header={<Header />}
          content={<Content items={items} handleAddItem={this.handleAddItem} />}
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
