import React from "react";
import { connect } from "react-redux";

import DropzoneComponent from "react-dropzone-component";
import { addedFile, removeFile, updateCheckbox } from "../../actions";

class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "application/pdf ",
      autoProcessQueue: false,
    };

    this.componentConfig = {
      iconFiletypes: [],
      showFiletypeIcon: true,
      postUrl: "no-url",
    };

    this.state = {
      numFiles: 0,
    };
  }

  handleFileAdded(file) {
    this.setState({
      numFiles: this.state.numFiles + 1,
    });
    if (file.name[file.name.length - 1] !== "f") {
      console.log("--- bad file extension", file.name);
      return;
    }
    this.props.addFile(file);
    console.log("passport file uploaded", file.name);
  }

  handleFileRemoved() {
    if (this.state.numFiles > 1) {
      this.setState({
        numFiles: this.state.numFiles - 1,
      });
      return;
    }
    this.setState({
      numFiles: this.state.numFiles - 1,
    });
    this.props.removeFile();
    console.log("passport file removed");
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
      <DropzoneComponent
        config={config}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  pdfFile: state.forms.pdfFile,
});

const mapDispatchToProps = (dispatch) => ({
  addFile: (file) => dispatch(addedFile(file)),
  removeFile: () => {
    dispatch(removeFile());
    dispatch(
      updateCheckbox({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
      })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropzone);
