import React from "react";
import PDFViewer from "mgr-pdf-viewer-react";
import { connect } from "react-redux";
import { GreyButton } from "../components-with-styles";

function PdfView({ pdfFile }) {
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
        <GreyButton
          variant="outlined"
          color="primary"
          onClick={() => setPage(page - 1 > 0 ? page - 1 : page)}
        >
          Предыдущая страница
        </GreyButton>
        <GreyButton
          variant="outlined"
          color="primary"
          onClick={() => setPage(page + 1)}
        >
          Следующая страница
        </GreyButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pdfFile: state.forms.pdfFile,
});

export default connect(mapStateToProps)(PdfView);
