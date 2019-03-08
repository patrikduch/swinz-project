import { newGet } from '../utils/request-utils';

export default class ProjectInfoApi {

    static getProjectName() {        
        return newGet ('http://localhost:64097/api/customers')
    }
}
