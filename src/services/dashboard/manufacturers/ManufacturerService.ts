import { CreateManufacturerRequest } from "../../../models/requests/dashboard/manufacturers/CreateManufacturerRequest";
import { UpdateManufacturerRequest } from "../../../models/requests/dashboard/manufacturers/UpdateManufacturerRequest";
import { CreatedManufacturerResponse, } from "../../../models/responses/dashboard/manufacturers/CreatedManufacturerResponse";
import { GetListManufacturerResponse } from "../../../models/responses/dashboard/manufacturers/GetListManufacturerResponse";
import { ManufacturerResponse } from "../../../models/responses/dashboard/manufacturers/ManufacturerResponse";
import { UpdatedManufacturerResponse } from "../../../models/responses/dashboard/manufacturers/UpdatedManufacturerResponse";
import { BaseService} from "../../BaseService";

class ManufacturerService 
    extends BaseService<
            GetListManufacturerResponse,ManufacturerResponse,
            CreatedManufacturerResponse, CreateManufacturerRequest,
            UpdatedManufacturerResponse,UpdateManufacturerRequest
            >{
	 
  constructor() {
	 	super("Manufacturers");
  }
	
}

export default ManufacturerService;