import RepositoryFactory from "./model/RepositoryFactory";
import ServiceLocator from "./ServiceLocator";
import ArtefactFactory from "./services/artefacts/ArtefactFactory";
import ArtefactFinder from "./services/artefacts/ArtefactFinder";
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

ServiceLocator.set(SERVICE_PROJECT_LOADER, async () => {
    
    return new ProjectLoader();

});


 /**
 * Service used for loading the project into the system.
 * 
 * Here is the moment, where if metadata folder is missing, will be created.
 */
export let SERVICE_METADATA_CREATOR: 'SERVICE_METADATA_CREATOR' = 'SERVICE_METADATA_CREATOR';
export type SERVICE_METADATA_CREATOR = ProjectLoader;

ServiceLocator.set(SERVICE_METADATA_CREATOR, async () => {
    
    return new ProjectLoader();

});

/**
 * Abstraction on top of directory.
 * 
 * If given directory doesn't exist, it will be created.
 * 
 */
export let SERVICE_DIRECTORY: 'SERVICE_DIRECTORY' = 'SERVICE_DIRECTORY';
export type SERVICE_DIRECTORY = DirectoryManager;


ServiceLocator.set(SERVICE_DIRECTORY, async () => {
    
    return new DirectoryManager();
});

/**
 * Mongodb Adapter
 * 
 */
export let SERVICE_MONGODB_ADAPTER: 'SERVICE_MONGODB_ADAPTER' = 'SERVICE_MONGODB_ADAPTER';
export type SERVICE_MONGODB_ADAPTER = MongoDbAdapter;


ServiceLocator.set(SERVICE_MONGODB_ADAPTER, async () => {
    
    return new MongoDbAdapter();
});


/**
 * Used to get entity repository 
 *
 */
export let SERVICE_REPOSITORY_FACTORY: 'SERVICE_REPOSITORY_FACTORY' = 'SERVICE_REPOSITORY_FACTORY';
export type SERVICE_REPOSITORY_FACTORY = RepositoryFactory;


ServiceLocator.set(SERVICE_REPOSITORY_FACTORY, async () => {
    
    return new RepositoryFactory( 
        (await ServiceLocator.get<SERVICE_MONGODB_ADAPTER, any>(SERVICE_MONGODB_ADAPTER, null)) 
    );
});


/**
 * Used to collect all artefacts from given project 
 *
 */
export let SERVICE_ARTEFACT_FINDER: 'SERVICE_ARTEFACT_FINDER' = 'SERVICE_ARTEFACT_FINDER';
export type SERVICE_ARTEFACT_FINDER = ArtefactFinder;
export type SERVICE_ARTEFACT_FINDER_PARAMS = {
    projectPath: string;
}


ServiceLocator.set(SERVICE_ARTEFACT_FINDER, async (params: SERVICE_ARTEFACT_FINDER_PARAMS) => {

    let directoryProvider = await ServiceLocator
        .get<SERVICE_DIRECTORY, any>(SERVICE_DIRECTORY, null);


    let directory = await directoryProvider.getDirectory(params.projectPath)
    
    return new ArtefactFinder(
        directory,
        (await ServiceLocator.get<SERVICE_ARTEFACT_FACTORY, any>(SERVICE_ARTEFACT_FACTORY, null))
    );
    
}, {singleton: false});

/**
 * Used to create artefacts 
 *
 */
export let SERVICE_ARTEFACT_FACTORY: 'SERVICE_ARTEFACT_FACTORY' = 'SERVICE_ARTEFACT_FACTORY';
export type SERVICE_ARTEFACT_FACTORY = ArtefactFactory;

ServiceLocator.set(SERVICE_ARTEFACT_FACTORY, async () => {
    
    return new ArtefactFactory();
});
