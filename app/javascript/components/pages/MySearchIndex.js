import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class MySearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchToDelete: undefined,
    };
  }

  render() {
    const toggle = () => {
      this.setState({ searchToDelete: undefined });
    };

    return (
      <React.Fragment>
        <div id="search-index-page">
          <h3 id="my-search-h3">
            <em>
              Saved <span id="my-search-span">TICities</span>
            </em>
          </h3>

          <div id="search-index-body">
            <Row xs="1" sm="2" md="3" id="my-search-row">
              {this.props.searches.map((search, index) => {
                return (
                  <Col id="my-search-card">
                    <div key={index} className="searches-card">
                      <h3>{search.city1}</h3>
                      <h3>{search.city2}</h3>
                      <h3>{search.city3}</h3>
                      <br />
                      <Link
                        to={`/searchresults/${search.id}`}
                        className="button my-search-info"
                      >
                        More Info
                      </Link>
                      <Button
                        className="button my-search-delete"
                        onClick={() => {
                          this.setState({ searchToDelete: search.id });
                        }}
                      >
                        Delete
                      </Button>
                      <Modal isOpen={this.state.searchToDelete !== undefined}>
                        <ModalHeader toggle={toggle}>Delete Search</ModalHeader>
                        <ModalBody>
                          Are you sure you want to delete this search? You will
                          no longer have access to these results if you proceed.
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="primary"
                            onClick={() => {
                              toggle();
                              this.props.deleteSearch(
                                this.state.searchToDelete
                              );
                            }}
                          >
                            Delete
                          </Button>{" "}
                          <Button color="secondary" onClick={toggle}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MySearchIndex;
