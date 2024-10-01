import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
        constructor(private readonly userService:UserService){}
        /*
        1. get /user --> get the all user
        2. get /user/:id  --> get the particular use
        3. post /user --> create an user
        4 patch /user:id ---> update a particular thing in user
        5 delete /user:/id --> delete particular user
        */

        @Get() //--> find the all user 
        findAll(@Query('role') role?:'user' | 'admin' |'superAdmin'){
                return this.userService.findAll(role)
        }
        
        @Get(':id')  // --> get the user which specfic id
        findOne(@Param('id') id:string){
                return this.userService.findOne(+ id)
        }
        @Post()   //--> create new user
        createUser(@Body() user:{name:string,email:string,role?:'user'|"admin"|"superAdmin"}){
                return this.userService.createUser(user)
        }
        @Patch(':id') //--> update the field in user 
        updateUser(@Param('id')id:string,@Body() userUpdated:{name:string,email:string,role?:'user'|"admin"|"superAdmin"}){
                return this.userService.updateUser(+id,userUpdated)
        }
        @Delete(':id') //--> delete the use 
        deleteUser(@Param('id') id:string){
                return this.userService.deleteUser(+id)
        }
}

