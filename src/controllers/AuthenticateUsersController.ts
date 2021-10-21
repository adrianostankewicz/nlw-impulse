import { Request, Response } from "express";
import { AuthenticateUsersService } from "../services/AuthenticateUsersService";


class AuthenticateUsersController {
  async handle(request: Request, response: Response) {

    const { code } = request.body;

    const service = new AuthenticateUsersService();

    try{
      const result = await service.execute(code);
      return response.json(result);

    }catch(err){
      return response.json({error: err.message });
    }
  }
}

export { AuthenticateUsersController }