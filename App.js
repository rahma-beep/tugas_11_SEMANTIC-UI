import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
List,
Loader,
Dimmer,
Placeholder,
Segment,
Grid,
Header,
Icon,
Button,
Divider,
Search,
Image
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
    <div>
    <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>OR</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Cari document
          </Header>

          <Search placeholder='Search document...' />
        </Grid.Column>
        <Grid.Column>
          <Header icon>
            <Icon name='file pdf outline' />
          Tambah Document Baru
          </Header>
          <Button primary>Create Document</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  <Segment>
   <Dimmer active>
     <Loader />
   </Dimmer>
   <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
 </Segment>
 <Grid columns={3}>
 <Grid.Column>
 <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
 </Grid.Column>
 <Grid.Column>
 <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
 </Grid.Column>
 <Grid.Column>
 <List>
 <h3>Website Terkait</h3>
 <List.Item>
   <List.Icon name='linkify' />
   <List.Content>
     <a href='http://www.google.com'>Google</a>
   </List.Content>
   </List.Item>
   <List.Item>
     <List.Icon name='linkify' />
     <List.Content>
       <a href='http://www.facebook.com'>Facebook</a>
     </List.Content>
     </List.Item>
     <List.Item>
       <List.Icon name='linkify' />
       <List.Content>
         <a href='http://www.semantic-ui.com'>Semantic UI</a>
       </List.Content>
       </List.Item>
       <List.Item>
         <List.Icon name='linkify' />
         <List.Content>
           <a href='http://niomic.com'>Niomic</a>
         </List.Content>
         </List.Item>
         <List.Item>
           <List.Icon name='linkify' />
           <List.Content>
             <a href='http://react.com'>React</a>
           </List.Content>
           </List.Item>
  </List>
 </Grid.Column>

 </Grid>
    </div>
    );
  }
}


export default App;
