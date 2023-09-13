import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserServices } from './user.service';
import { User } from './user.entity';
import { get } from 'http';
 
@Controller('users')
export class UsersController{
constructor(private readonly usersServices :UserServices){}
//get all users
@Get()
async findAll(): Promise<User[]>{
  return await this.usersServices.findall();
}


//get one user
@Get(':id')
async findOne(@Param('id') id: number ): Promise<User>{

  const user  = await this.usersServices.findone(id);
  if(!user){
    throw new Error("User not Found")
  }else
  {
    return user;
  }
}
//create user
@Post()
async create(@Body() user: User): Promise<User> {
  return await this.usersServices.create(user);
}

//update user
@Put(':id')
async update(@Param('id') id: number, @Body() user: User): Promise<User> {
  return this.usersServices.update(id, user);
}

//delete user
@Delete(':id')
async delete(@Param('id') id: number): Promise<void> {
  //handle the error if user not found
  const user = await this.usersServices.findone(id);
  if (!user) {
    throw new Error('User not found');
  }
  return this.usersServices.delete(id);
}


}
 