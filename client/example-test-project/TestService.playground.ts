import TestService from "./TestService"

export default {
  name: 'Test',

  /**
   * The group of the artefact 
   */
  group: "Services",

  /**
   * The type of the artefact
   */
  type: 'service',

  /**
   * Related to the artefact type
   */
  servicePath: './TestService.ts',

  methodMapping: {
    test: 'test'
  },
  
  runs: [
    ({show, info}: any) => {

    info(`Using test() method`)

    let testService = new TestService();

    show(`
      When called with param 'dadad' will return ...
    `, testService.test('dadad'));
    }
  ]
}