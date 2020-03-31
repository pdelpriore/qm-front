import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ScrollArea from "react-scrollbar";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import MakeRecipeButton from "./makeRecipeButton";
import RecipesList from "./RecipesList";
import RecipeDetails from "./RecipeDetails";
import { useSelector } from "react-redux";
import "./recipeBook.css";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  const { detailsShowed } = useSelector(state => state.showRecipeDetails);
  return (
    <div className="recipebook-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="recipebook-first-section">
        <Row>
          <Col xs={3} />
          <Col xs={9}>
            <div className="recipebook-list">
              <ScrollArea
                className="recipesList-item-simplebar"
                smoothScrolling={true}
              >
                <ListGroup>
                  <RecipesList />
                </ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="recipebook-second-section">
        <div className={detailsShowed ? "recipebook-recipes-buttons" : ""}>
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row className="mb-2" />
          <MakeRecipeButton />
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row>
            <Col xs={2} />
            <Col xs={10}>
              <Image
                className="recipebook-soup"
                src={require("../../assets/imgs/soupret.jpg")}
              />
            </Col>
          </Row>
        </div>
        {detailsShowed && (
          <div className="recipebook-recipes-details">
            <Row className="mb-5" />
            <Row className="mb-5" />
            <RecipeDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeBook;
