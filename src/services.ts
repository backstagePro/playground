import ServiceLocator from "./ServiceLocator";
import Directory from "./services/directory/Directory";
import DirectoryManager from "./services/directory/DirectoryManager";
import ProjectLoader from "./services/ProjectLoader";

/**
 * Service used for loading the project into the system.
 * 
 * Here is the moment, where if metadata folder is missing, will be created.
 */
export let SERVICE_PROJECT_LOADER: 'SERVICE_PROJECT_LOADER' = 'SERVICE_PROJECT_LOADER';
export type SERVICE_PROJECT_LOADER = ProjectLoader;

ServiceLocator.set(SERVICE_PROJECT_LOADER, () => {
    
    return new ProjectLoader();

});


 /**
 * Service used for loading the project into the system.
 * 
 * Here is the moment, where if metadata folder is missing, will be created.
 */
export let SERVICE_METADATA_CREATOR: 'SERVICE_METADATA_CREATOR' = 'SERVICE_METADATA_CREATOR';
export type SERVICE_METADATA_CREATOR = ProjectLoader;

ServiceLocator.set(SERVICE_PROJECT_LOADER, () => {
    
    return new ProjectLoader();

});

/**
 * Abstraction on top of directory
 * 
 *  ***All paths are relative to BS_CONTAINER_SITES_FOLDER env variable***
 */
export let SERVICE_DIRECTORY: 'SERVICE_DIRECTORY' = 'SERVICE_DIRECTORY';
export type SERVICE_DIRECTORY = DirectoryManager;


ServiceLocator.set(SERVICE_DIRECTORY, () => {
    
    return new DirectoryManager();
});