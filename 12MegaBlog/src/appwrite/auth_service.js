import conf from "../conf/conf.js";
import {Client,Account,ID} from 'appwrite';

export class AuthService{
    client=new Client();
    //we didn't give new account because before we have to give clients method, which we can't give here
    //cause it will be the class property
    //which is waste of resource
    account;
    //when you make object 'constructor' method call it by default
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl )
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                //call another method
                //login it into pages
                return this.login({email,password})

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    //check if they have account or not

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite service:: getCurrentUser:: Error",error);
            
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite Service:: LogOut::error", error);
            
        }
    }
}

//whoever use this class, they had to make a object and use it so we can make object here for quality code

const authService=new AuthService();

export default authService;