import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
      active: "all"
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioItems() {
    axios
      .get('https://daynebechtold.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState({
            data: response.data.portfolio_items
        }) }
      )
      .catch( error => {
        console.log(error);
      });
  }

  handleFilter(filter) {
    var element = event.target;
    if (element.id !== this.state.active) {
        this.setState({
            active: element.id
        });
    }
    if (filter === "CLEAR_FILTERS") {
      this.PortfolioItems();
    } else { 
      this.portfolioItems(filter); 
    }
  }

  portfolioItems(filter=null) {
    return this.state.data.map(item => {
        console.log(item);
        if(filter){
          if(item.category === filter){
            return (
              <PortfolioItem 
                  key={item.id} 
                  item={item}
              />
            );
          }
        } else {
          return (
            <PortfolioItem 
              key={item.id} 
              item={item}
            />
          )
        }
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
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button id='all' className={`btn ${this.state.active === 'all' ? 'active' : null}`} onClick={() => this.handleFilter("CLEAR_FILTERS")}>
              All
          </button>
          <button id='Front-End' className={`btn ${this.state.active === 'Front-End' ? 'active' : null}`}  onClick={() => this.handleFilter("Front-End")}>
              Front-End
          </button>
          <button id='Back-End' className={`btn ${this.state.active === 'Back-End' ? 'active' : null}`}  onClick={() => this.handleFilter("Back-End")}>
              Back-End
          </button>
          <button id='Full-Stack' className={`btn ${this.state.active === 'Full-Stack' ? 'active' : null}`} onClick={() => this.handleFilter("Full-Stack")}>
              Full-Stack
          </button>
        </div>
        <div className="portfolio-items-wrapper">
            {this.portfolioItems(this.state.active !== 'all' ? this.state.active : null)}
        </div>
      </div>
    );
  }
}