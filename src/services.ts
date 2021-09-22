import RepositoryFactory from "./model/RepositoryFactory";
import ServiceLocator from "./ServiceLocator";
import MongoDbAdapter from "./services/db/MongoDbAdapter";
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

ServiceLocator.set(SERVICE_METADATA_CREATOR, () => {
    
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

/**
 * Mongodb Adapter
 * 
 */
export let SERVICE_MONGODB_ADAPTER: 'SERVICE_MONGODB_ADAPTER' = 'SERVICE_MONGODB_ADAPTER';
export type SERVICE_MONGODB_ADAPTER = MongoDbAdapter;


ServiceLocator.set(SERVICE_MONGODB_ADAPTER, () => {
    
    return new MongoDbAdapter();
});


/**
 * Used to get entity repository 
 *
 */
export let SERVICE_REPOSITORY_FACTORY: 'SERVICE_REPOSITORY_FACTORY' = 'SERVICE_REPOSITORY_FACTORY';
export type SERVICE_REPOSITORY_FACTORY = RepositoryFactory;


ServiceLocator.set(SERVICE_REPOSITORY_FACTORY, () => {
    
    return new RepositoryFactory( ServiceLocator.get<SERVICE_MONGODB_ADAPTER, any>(SERVICE_MONGODB_ADAPTER, null) );
});