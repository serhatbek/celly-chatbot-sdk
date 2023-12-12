import { AudioPlayer, Container, FileDownload, ViewImage } from './components';
import { audioItems } from './components/AudioPlayer/data';
import { downloadItems } from './components/FileDownload/data';
import { viewItems } from './components/ViewImage/data';

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
        <FileDownload
          fileUrl={downloadItems.url}
          fileIcon={downloadItems.icon}
          fileTitle={downloadItems.text}
          fileCanDownload={true}
        />
      </Container>
      <Container>
        <ViewImage imgUrl={viewItems.imgSmall} />
      </Container>

      <Container>
        <ViewImage
          imgUrl={viewItems.imgSmall}
          imgDesc='Lorem ipsum dolor sit amet.'
        />
      </Container>

      <Container>
        <ViewImage
          imgUrl={viewItems.imgSmall}
          imgDesc='Lorem ipsum dolor sit amet.'
          fileCanDownload={true}
        />
      </Container>

      <Container>
        <ViewImage imgUrl={viewItems.imgLarge} />
      </Container>

      <Container>
        <ViewImage
          imgUrl={viewItems.imgLarge}
          imgDesc='Lorem ipsum dolor sit amet.'
        />
      </Container>

      <Container>
        <ViewImage
          imgUrl={viewItems.imgLarge}
          imgDesc='Lorem ipsum dolor sit amet.'
          fileCanDownload={true}
        />
      </Container>

      <Container>
        <AudioPlayer audioFile={audioItems.sonicTheme} />
      </Container>

      <Container>
        <AudioPlayer audioFile={audioItems.sonicTheme} fileCanDownload={true} />
      </Container>
    </div>
  );
}

export default App;
