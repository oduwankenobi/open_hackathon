import React from "react";
import PDFViewer from "mgr-pdf-viewer-react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

const BlueButton = withStyles({
  root: {
    color: grey[900],
    border: "1px solid black",
    borderRadius: 4,
  },
  checked: {},
})((props) => <Button color="default" {...props} />);

function PdfView({ pdfFile }) {
  // const pdfFile = useSelector(state => state.forms.pdfFile);
  console.log("View", pdfFile);
  const [page, setPage] = React.useState(0);

  if (!pdfFile) return null;

  return (
    <div>
      <div>
        <PDFViewer document={{ file: pdfFile }} page={page} scale={0.65} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0px",
        }}
      >
        <BlueButton
          variant="outlined"
          color="primary"
          onClick={() => setPage(page - 1 > 0 ? page - 1 : page)}
        >
          Предыдущая страница
        </BlueButton>
        <BlueButton
          variant="outlined"
          color="primary"
          onClick={() => setPage(page + 1)}
        >
          Следующая страница
        </BlueButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pdfFile: state.forms.pdfFile,
});

export default connect(mapStateToProps)(PdfView);
