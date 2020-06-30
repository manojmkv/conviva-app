import { IFetchResponse } from './IFetchResponse';
import { EmployeesDetailsResponse } from '../responses/EmployeesDetailsResponse';

export default class ConfigurationParameterClient {
    async getOfficeIds() {
        return await fetch(`http://dummy.restapiexample.com/api/v1/employees`, {
            method: "get",
            headers: { "Content-Type": "application/json" }
        }) as IFetchResponse<EmployeesDetailsResponse>;
    }
}
