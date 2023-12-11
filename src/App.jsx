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
        <ViewImage
          classes='view-image__body--small'
          imgUrl={viewItems.imgSmall}
        />
      </Container>

      <Container>
        <ViewImage
          classes='view-image__body--small'
          imgUrl={viewItems.imgSmall}
          imgDesc='Lorem ipsum dolor sit amet.'
        />
      </Container>

      <Container>
        <ViewImage
          classes='view-image__body--small'
          imgUrl={viewItems.imgSmall}
          imgDesc='Lorem ipsum dolor sit amet.'
          fileCanDownload={true}
        />
      </Container>

      <Container>
        <ViewImage
          classes='view-image__body--large'
          imgUrl={viewItems.imgLarge}
        />
      </Container>

      <Container>
        <ViewImage
          classes='view-image__body--large'
          imgUrl={viewItems.imgLarge}
          imgDesc='Lorem ipsum dolor sit amet.'
        />
      </Container>

      <Container>
        <ViewImage
          classes='view-image__body--large'
          imgUrl={viewItems.imgLarge}
          imgDesc='Lorem ipsum dolor sit amet.'
          fileCanDownload={true}
        />
      </Container>
    </div>
  );
}

export default App;
