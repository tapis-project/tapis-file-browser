import * as React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {FileOperationsApi} from "../tapis-files-client/apis";

export class DataBrowser extends React.Component {

  fileOperationsAPI: FileOperationsApi;

  constructor(props: any) {
    super(props);
    this.fileOperationsAPI = new FileOperationsApi();
  }

  componentDidMount(): void {
    this.fileOperationsAPI = new FileOperationsApi();
    this.fileOperationsAPI.listFiles({systemId: 'test-system', path: '/'})
      .subscribe( (resp)=>{
        console.log(resp);
      })
  }

  render() {
    return <>
      <Row>
       <Col>
         <Button variant="outline-primary">
           <i className="fa fa-download"> </i>
           Download
         </Button>
         <Button variant="outline-primary">
           <i className="fa fa-trash-o"> </i>
           Trash
         </Button>
       </Col>
      </Row>
    </>
  }

}
