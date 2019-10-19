import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioItems() {
    axios
      .get('https://daynebechtold.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        console.log("Response Data", response);
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch( error => {
        console.log(error);
      });
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
        return (
            <PortfolioItem 
                key={item.id} 
                item={item}
            />
        );
    });
  }

  componentDidMount(){
      this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
        <div className="portfolio-items-wrapper">
            <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
                eCommerce
            </button>
            <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
                Scheduling
            </button>
            <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
                Enterprise
            </button>
            {this.portfolioItems()}
        </div>
    );
  }
}