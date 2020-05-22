import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";

import DropzoneComponent from "react-dropzone-component";
import {
  addedFile,
  addLabourFile,
  removeFile,
  removeLabourFile,
  updateCheckbox,
} from "../../actions";

class DropzoneLabour extends React.Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif, application/pdf ",
      autoProcessQueue: false,
    };

    this.componentConfig = {
      iconFiletypes: [],
      showFiletypeIcon: true,
      postUrl: "no-url",
    };
  }

  handleFileAdded(file) {
    this.props.addFile(file);
    console.log("labour file uploaded", file.name);
  }

  handleFileRemoved(file) {
    this.props.removeFile(file);
    console.log("labour file removed", file.name);
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
          height: "100%",
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

const mapStateToProps = (state) => ({
  files: state.forms.labourFiles,
});

const mapDispatchToProps = (dispatch) => ({
  addFile: (file) => dispatch(addLabourFile(file)),
  removeFile: (file) => {
    dispatch(removeLabourFile(file));
    dispatch(
      updateCheckbox({
        check1: false,
        check2: false,
        check3: false,
      })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneLabour);
