const User = require('../Model/User');
const bcrypt = require('bcryptjs');
const userlogin = require('../Model/UserLogin');

const getvalue = async (req,res)=>{
    let log;
    try{
    log = await User.find();
    }catch(err){
        console.log(err);
    };
    if(!log){
        return res.status(400).json({message:'connot get value'})
    }
     return res.status(200).json({log});
};

const getbyId = async (req,res)=>{
    const id = req.param.id;
    let log;
    try{ 
    log = await User.findId(id);
    }catch(err){
        console.log(err);
    };

    if(!log){
         res.status(400).json({message:'connot get value'});
    }
     res.status(200).json({log});
};


const Register = async (req,res ) => {
    const {firstname,lastname,email,password} = req.body;
     try{
      //hash password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password,salt);
//exist email checking
     const existEmail = await User.findOne({email});
     if(existEmail){
         res.status(400).json({message:" emaili already exist"});
         return;
     }
  // create User
    const  user = new User({
        firstname,
        lastname,
        email,
        password:hashpassword,
      });

      const save = await user.save();
    
     res.status(200).json({message:"user created"});
    }catch(err){
    res.status(401).json({err});
    }

    
    if(!user){
        return res.status(400).json({message:'connot add'});
      }else{
        res.status(201).json({user});
      };
};

const Login= async (req,res)=>{ 
    const {email,password} = req.body;
    try{
    // exist email checking 
   const emailCheck = await userlogin.findOne({email});
   if(!emailCheck) {
       return res.status(400).json({message:"email does not match"})
  }

    //password checking
   const validpassword = bcrypt.compare("password","User.password");
   if(!validpassword){   
      return res.status(400).json({message:"wrong password"})
   };
  
   //hash password
    const salt = await bcrypt.genSalt(10);
    const hashpassword1 = await bcrypt.hash(password,salt);

    //create login data
    const create = new userlogin({
        email,
        password:hashpassword1,
    })
    
      const store = await create.save();
     
        res.status(200).json({message:"success"});
     }catch(err){
      res.status(404).json({message:"login user not found"});
   };

};     
module.exports = { getvalue,getbyId,Register,Login};