import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";

import DropzoneComponent from "react-dropzone-component";
import {
  addedFile,
  addPassportPhoto,
  removePassportPhoto,
} from "../../actions";

import "./styles/example.css";
import "./styles/filepicker.css";
import "./styles/dropzone.min.css";

class SmallDropzone extends React.Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif",
      autoProcessQueue: false,
    };

    this.componentConfig = {
      iconFiletypes: [],
      showFiletypeIcon: true,
      postUrl: "no-url",
    };
  }

  handleFileAdded(file) {
    this.props.addPassPhoto(this.props.id, file);
    console.log(`--- passport photo ${this.props.id} added`);
  }

  handleFileRemoved() {
    this.props.removePassPhoto(this.props.id);
    console.log(`--- passport photo ${this.props.id} removed`);
  }

  render() {
    const config = this.componentConfig;
    const { djsConfig } = this;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      addedfile: this.handleFileAdded.bind(this),
      removedfile: this.handleFileRemoved.bind(this),
    };

    return (
      <div
        style={{
          "max-height": "150px",
          "max-width": "150px",
          margin: "auto",
          "margin-bottom": "15px",
        }}
      >
        <DropzoneComponent
          config={config}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPassPhoto: (id, file) => dispatch(addPassportPhoto(id, file)),
  removePassPhoto: (id) => dispatch(removePassportPhoto(id)),
});

export default connect(null, mapDispatchToProps)(SmallDropzone);
