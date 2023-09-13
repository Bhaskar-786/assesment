import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { promises } from 'dns';
@Injectable()
export class UserServices {
  constructor(
    @InjectRepository(User)
     private usersRepository: Repository<User>,

    ) {}

// get user by user name
async getUserByUsername(name: string): Promise<User | undefined> {
  const allUsers = await this.usersRepository.find();
  for (const user of allUsers) {
    if (user.name === name) {
      return user;
    }
  }
  return undefined; // User not found
}
 
// get all users

  async findall(): Promise<User[]>{
   return await this.usersRepository.find();
  }

// get one user  

  async findone(id:number): Promise<User>{
    return await this.usersRepository.findOne({where: {id}});
   }

// create user

async create(user: User): Promise<User>{
   const newUser = this.usersRepository.create(user);
   return await this.usersRepository.save(newUser);

 }


 // update user

 async update(id:number , user : User  ): Promise<User>{
 await this.usersRepository.update(id , user);
 return await this.usersRepository.findOne({where:{id}}); 
}

// delete user

async delete(id:number): Promise<void>{
   await this.usersRepository.delete(id);
 }


}
 