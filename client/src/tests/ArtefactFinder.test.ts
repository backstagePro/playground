
import ServiceLocator from "../ServiceLocator"
import { SERVICE_ARTEFACT_FINDER, SERVICE_ARTEFACT_FINDER_PARAMS } from '../services';

jest.setTimeout(10000);

it.only('Should test Artefact Finder', async () => {

  let artefactFinder = await ServiceLocator
    .get<SERVICE_ARTEFACT_FINDER, SERVICE_ARTEFACT_FINDER_PARAMS>(SERVICE_ARTEFACT_FINDER, {
      projectPath: '/home/niki/bs/playground/example-test-project'
    });

  let artefacts = await artefactFinder.findAllArtefact();

  expect(artefacts).toBeTruthy();
});