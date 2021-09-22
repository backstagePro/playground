import Directory from "./directory/Directory";

/**
 * Finds playground artefacts from given project
 */
export default class ArtefactFinder {


  private directory: Directory;

  constructor(directory: Directory){

    this.directory = directory;
  }
}