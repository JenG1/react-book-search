import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}
export function BookListItem(props) {
  return (
    <li className="list-group-item" style={{ marginBottom: 15 }}>
      <Container>
        <Row>
          <Col size="xs-2 sm-2">
            <Thumbnail src={props.image || "https://placehold.it/200x300"} />
          </Col>

          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p><strong>By: </strong>{props.authors}</p>
            <p>
              {props.description || "There is no description of this book."}
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.link}
            >
              Learn more about the book
            </a>
          </Col>

          <Col size="xs-2 sm-1">
            <Button
              className={"btn btn-primary"}
              click={props.click(props.id)}
              value={props.id}

            >
              Save
              </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}