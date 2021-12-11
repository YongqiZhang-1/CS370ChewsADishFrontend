import React from "react";
import { ProjectList } from "../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} width="800" height="128"  />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
           
            <BtnGroup>
              
              <a 
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" class="btn"> Go to Post ➜ </button>
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
