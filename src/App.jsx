import { Container, FileDownload } from './components';
import { downloadItems } from './components/FileDownload/data';

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
      <Container>hgf</Container>
    </div>
  );
}

export default App;
