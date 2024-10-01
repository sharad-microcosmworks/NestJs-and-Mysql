import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

        private users=[{
                'id':1,
                'name':"user1",
                'email':"user1@gmail.com",
                "role":'superAdmin'
        },
        {
                'id':2,
                'name':"user2",
                'email':"user2@gmail.com",
                "role":'Admin'
        },
        {
                'id':3,
                'name':"user3",
                'email':"user3@gmail.com",
                "role":'user'
        },
        {
                'id':4,
                'name':"user4",
                'email':"user4@gmail.com",
                "role":'user'
        },
        {
                'id':5,
                'name':"user5",
                'email':"user5@gmail.com",
                "role":'superAdmin'
        },

]
        findAll(role?:"user"|'admin'|'superAdmin'){
                if(role){
                        return  this.users.filter((user)=>{user.role ===role})
                }
                return this.users
        }
        findOne(id:number){
                const user=this.users.find(user=> user.id ===id)
                return user
        }
        createUser(user:{name:string,email:string,role?:'user'|"admin"|"superAdmin"}){
                const currentId=this.users.length
                const newUser={
                        id:currentId,
                        role:user.role,
                        ...user
                }
                this.users.push(newUser)
                return newUser
        }
        updateUser(id:number,use:{name?:string,email?:string,role?:'user'|"admin"|"superAdmin"}){
                this.users= this.users.map(user=>{
                        if(user.id===id){
                                return {...user,...user}
                        }
                        return user 
                }) 
                return this.findOne(id)
        }
        deleteUser(id:number){
                const removedUser=this.findOne(id)
                const updatedUsers= this.users.filter(user=>user.id!==id)
                this.users=updatedUsers
                return {updatedUsers,removedUser};
        }
}
