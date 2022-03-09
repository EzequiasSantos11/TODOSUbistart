import prismaClient from "../prisma";
import { response } from "express";

class UpDateDosService{
  async execute( id, title: string, description: string, deadline: string){

    let user: any = prismaClient.tarefas.findFirst({
      where:{
        id: id,
      }
    })
    if(!user){
     return response.status(401).json({message: "TODO does not found!"})
    }else{
      user = await prismaClient.tarefas.create({
        data:{
          id: user.id,
          title,
          description,
          deadline
        }
      })
      return response.status(200).json({message: "sucess"})
    }
  }
}

export {UpDateDosService};