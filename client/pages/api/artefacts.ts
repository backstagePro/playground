// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ServiceLocator from '../../src/ServiceLocator';
import { SERVICE_ARTEFACT_FINDER, SERVICE_ARTEFACT_FINDER_PARAMS } from '../../src/services';
type Data = {
  artefacts: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let artefactFinder = await ServiceLocator
    .get<SERVICE_ARTEFACT_FINDER, SERVICE_ARTEFACT_FINDER_PARAMS>(SERVICE_ARTEFACT_FINDER, {
      projectPath: '/usr/src/app/example-test-project'
    });

  let artefacts = await artefactFinder.findAllArtefact();
  
  res.status(200).json({  artefacts  });
}
