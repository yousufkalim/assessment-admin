import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../api";
import "antd/dist/antd.css";
import { Select } from "antd";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";
// core components

const { Option } = Select;

const AddCandidate = ({ openModal, handleModal, getCandidates }) => {
  let [candidate, setCandidate] = useState({ skills: ["HTML"] });
  let [skills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "Express",
  ]);

  const handleInput = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleSkillsInput = (value) => {
    setCandidate({ ...candidate, skills: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !candidate.name ||
      !candidate.email ||
      !candidate.department ||
      !candidate.skills
    ) {
      toast.error("All fields are required");
    } else {
      api("post", "/users", candidate).then((res) => {
        toast.success("Candidate added successfully");
        getCandidates();
        handleModal();
      });
    }
  };

  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="Y" toggle={handleModal}>
          Add a candidate
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="9" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Name</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter candidate's name here"
                          type="text"
                          value={candidate.name}
                          name="name"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="9" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Email</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter candidate's email here"
                          type="email"
                          value={candidate.email}
                          name="email"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="9" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Department</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          type="select"
                          value={candidate.department}
                          name="department"
                          onChange={handleInput}
                        >
                          <option value="">Select a department</option>
                          <option value="MERN">MERN</option>
                          <option value="RN">React Native</option>
                          <option value="dotNET">.NET</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="9" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Skills</label>
                        <Select
                          className="form-control-alternative text-default"
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Select candidate's skill"
                          defaultValue={[skills[0]]}
                          onChange={handleSkillsInput}
                        >
                          {skills.map((skill) => (
                            <Option key={skill}>{skill}</Option>
                          ))}
                        </Select>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Save
          </Button>

          <Button onClick={handleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddCandidate;
