// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Project from '../../src/model/entities/Project';
import ServiceLocator from '../../src/ServiceLocator'
import { SERVICE_MONGODB_ADAPTER, SERVICE_REPOSITORY_FACTORY } from '../../src/services'

type Data = {

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {

    let repo = ServiceLocator.get<SERVICE_REPOSITORY_FACTORY, any>(SERVICE_REPOSITORY_FACTORY, null);

    let project = await repo.getRepository('project');

    // let id = await project.create(new Project({path: 'test/path/to/project'}));

    // let result = await project.update('614b25622d689cf4c7ca2140', new Project({path: 'test case path'}));

    // let result = await project.delete('614b25622d689cf4c7ca2140');

    let result = await project.find(new Project({ path: 'test/path/to/project' }));

    res.status(200).json({ result:result });

  } catch(e: any){

    return res.status(500).json({ error: e.message });
  }

}
