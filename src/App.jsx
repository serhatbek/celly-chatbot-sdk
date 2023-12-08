import { Container, FileDownload, ViewImage } from './components';
import { downloadItems } from './components/FileDownload/data';
import { viewItems } from './components/ViewImage/data';
viewItems;
function App() {
  return (
    <div className='wrapper'>
      <Container>
        <FileDownload
          fileUrl={downloadItems.url}
          fileIcon={downloadItems.icon}
          fileTitle={downloadItems.text}
        />
      </Container>
      <Container>
        <ViewImage />
      </Container>
    </div>
  );
}

export default App;
