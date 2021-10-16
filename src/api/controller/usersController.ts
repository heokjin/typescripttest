import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import { User } from "./../users/user";
import { UsersService, UserCreationParams } from "./../users/usersService";

@Route("users")
export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(@Path() userId: number, @Query("name") name?: string): Promise<User> {
        process.stdout.write('1')

        return new UsersService().get(userId, "AA");
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
        this.setStatus(201); // set return status 201
        let a = new UsersService().create(requestBody);

        process.stdout.write(a.id + a.name + a.email + '\n');

        return;
    }

}