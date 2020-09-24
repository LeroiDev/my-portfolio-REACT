import React from "react";

const ShowCase = () => {
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 50;

      if (this.isDeleting) {
        typeSpeed /= 6;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 850;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }
  // Init On DOM Load
  document.addEventListener("DOMContentLoaded", init);

  // Init App
  function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  return (
    <div className="container">
      <div className="showcase">
        <h1>Web Development React js</h1>
        <button className="btn">
          <i className="fas fa-arrow-circle-down"> </i> View react projects
        </button>
        <h3>
          <span
            className="txt-type"
            data-wait="2000"
            data-words='["Welcome, my name is Leroi, currently I am working with React mostly", "JavaScript, Es5,Es6 and newer standards","HTML,CSS-flexbox,grid,sass,GitHub,FireBase,Api" ,"Kindly view some of my projects..."]'
          ></span>
        </h3>
      </div>
    </div>
  );
};

export default ShowCase;
