import React from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import cityData from "../TicityCities.js";
import findCities from "../../helpers/find-cities";

class SearchNew extends React.Component {
  constructor(props) {
    super(props);
    searchKey: "";
    searchValue: 0;
    this.state = {
      form: {
        city1: "",
        city2: "",
        city3: "",
        housing: 0,
        costofliving: 0,
        startups: 0,
        capital: 0,
        travel: 0,
        commute: 0,
        business: 0,
        safety: 0,
        healthcare: 0,
        education: 0,
        environment: 0,
        economy: 0,
        taxation: 0,
        internetaccess: 0,
        leisure: 0,
        tolerance: 0,
        outdoors: 0,
        user_id: this.props.current_user.id,
      },
      success: false,
    };
  }

  findCities = (cityData) => {
    let { form } = this.state;
    const newForm = findCities(
      cityData,
      form,
      this.searchKey,
      this.searchValue
    );
    this.setState({ form: newForm });
  };

  handleChange = (e) => {
    let { form } = this.state;
    this.searchKey = e.target.name;
    this.searchValue = e.target.value;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.findCities(cityData);
    this.props.createNewSearch(this.state.form);
    this.setState({ success: true });
  };

  render() {
    return (
      <>
        <h3>Rank your most important category</h3>
        <div className="body-container">
          <div className="form">
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Housing</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="housing"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.housing}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Cost of Living</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="costofliving"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.costofliving}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Startups</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="startups"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.startups}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Venture Capital</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="capital"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.capital}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Travel</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="travel"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.travel}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Commute</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="commute"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.commute}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Business</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="business"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.business}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Safety</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="safety"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.safety}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Healthcare</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="healthcare"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.healthcare}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Education</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="education"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.education}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Environment</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="environment"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.environment}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <div className="form-button-wrapper">
                    <Button
                      name="submit"
                      className="button"
                      onClick={this.handleSubmit}
                    >
                      Find Your TICity!!!
                    </Button>
                  </div>
                </Col>
                <Col>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Economy</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="economy"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.economy}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Taxation</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="taxation"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.taxation}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Internet Access</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="internetaccess"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.internetaccess}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Leisure and Culture</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="leisure"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.leisure}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Tolerance</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="tolerance"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.tolerance}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Outdoors</Label>
                      </Col>
                      <Col>
                        <Input
                          type="number"
                          name="outdoors"
                          min="0"
                          max="10"
                          onChange={this.handleChange}
                          value={this.state.form.outdoors}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        {this.state.success && (
          <Redirect to={`/searchresults/${this.state.form.id}`} />
        )}
      </>
    );
  }
}

export default SearchNew;
