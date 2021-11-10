import { IconType } from "react-icons";

export type Category = "react" | "node" | "express" | "django" | "mongo";

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Education {
  course: string;
  school: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface NavItemType {
  active: string;
  setActive: Function;
  name: string;
  route: string;
}

export interface ProjectCardType {
  project: IProject;
}

export interface ProjectCardDetailsType {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  key_techs: string[];
  setShowDetail: Function;
}

export interface IProjectsNavItem {
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}

export interface IProjectsNav {
  handlerFilterCategory: Function;
  active: string;
}

export interface IBar {
  value: Skill;
}

export interface IServiceCard {
  service: Service;
}

export interface IEducation {
  value: Education;
}

export interface IExperience {
  value: Experience;
}
