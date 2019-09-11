const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const sha1=require('sha1');
const mongoose=require('mongoose');
const multer=require('multer');
//multer code start
const path="./attach";
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
  })

  let upload = multer({ storage: storage }).single('Image');


//multer code end
mongoose.connect("mongodb://localhost/project2",
{
     useCreateIndex: true,
     useNewUrlParser: true
})
let adminModel=require('./database/admin');
let catModel=require('./database/category');
let newsModel=require('./database/news');
const app=express();
//for send email
let nodemailer = require('nodemailer');
let  transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'yourpass'
  }
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//end
app.use(cors());//cross origin request allow
app.use(bodyParser.json());//parse in json
//allow attach folder to access images
app.use('/images',express.static('attach'));
//search
app.get('/api/search/:ser',function(req,res)
{
    let ser=req.params.ser;
    res.json({'msg':ser})
})
//for feedback
app.post('/api/feedback',function(req,res)
{
    let name=req.body.name;
    let email=req.body.email;
    let mobile=req.body.mobile;
    let message=req.body.message;
    var mailOptions = {
        from: 'cetpas@gmail.com',
        to: 'sumitjoshi.cetpa@gmail.com',
        subject: 'Sending Feedback',
        text: 'Student Enquiry \n Name : '+name+'\n Email :'+email+'\nMobile :'+mobile+'\nMessage :'+message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({'msg':'Email sent: ' + info.response});
        }
      });
})

//define api 
 app.post('/api/adminlogin',function(req,res)
 {
     let email=req.body.email;
     let password=sha1(req.body.password);//40 digit encrypt password
    //   let ins=new adminModel({'email':email,'password':password});
    //  ins.save(function(err)
    //  {
    //      if(err){}
    //      else { 
    //         res.json({'err':0,'msg':'Data saved'});
    //      }
    //  })
     
     
     adminModel.find({'email':email,'password':password},function(err,data)
     {
         if(err)
         {
             res.json({'err':1,'msg':'Problem in login'});
         }
         else if(data.length==0)
         {
            res.json({'err':1,'msg':'Email or password is not correct'}); 
         }
         else
         {
            res.json({'err':0,'msg':'Login Success' ,'ulogin':email});
         }
     })
    //  insert data
    //  let ins=new adminModel({'email':email,'password':password});
    //  ins.save(function(err)
    //  {
    //      if(err){}
    //      else { 
    //         res.json({'err':0,'msg':'Data saved'});
    //      }
    //  })
 })
 //api for addcategory
 app.post('/api/addcategory',function(req,res)
 {
     upload(req,res,function(err)
     {
         if(err){}
         else{
             let cname=req.body.cname;
             let description=req.body.description;
             let fname=req.file.filename;
             let ins=new catModel({'cname':cname,'description':description,'image':fname});
             ins.save(function(err)
             {
                 if(err){}
                 else
                 {
                     res.json({'err':0,'msg':'category saved'})
                 }
             })
         }
     })
 })
 app.post('/api/addnews',function(req,res)
 {
     upload(req,res,function(err)
     {
         if(err){}
         else{
             //console.log(req.body);
             //console.log(req.file.filename);
             let cname=req.body.cname;
             let title=req.body.title;
             let body=req.body.body;
             let fname=req.file.filename;
             let ins=new newsModel({'cname':cname,'title':title,'body':body,'image':fname});
             ins.save(function(err)
             {
                 if(err){}
                 else
                 {
                     res.json({'err':0,'msg':'News saved'})
                 }
             })
         }
     })
 })
 //fetch category 
 app.get('/api/fetchcategory',function(req,res)
 {
     catModel.find({},function(err,data)
     {
         if(err){}
         else
         {
             res.json({'err':0,'cdata':data});
         }
     })
 })
 //fetch latestnews 
//  app.get('/api/latestnews',function(req,res)
//  {
//      newsModel.find({},function(err,data)
//      {
//          if(err){}
//          else
//          {
//              res.json({'err':0,'ndata':data});
//          }
//      })
//  })
 //fetch news by category
 app.get('/api/newsbycategory/:cn',function(req,res)
 {
     let cn=req.params.cn;
     newsModel.find({'cname':cn},function(err,data)
     {
         if(err){}
         else
         {
             res.json({'err':0,'ndata':data});
         }
     })
 })
 //fetch category by id
 app.get('/api/fetchcategorybyid/:id',function(req,res)
 {
     let cid=req.params.id;
     catModel.find({'_id':cid},function(err,data)
     {
         if(err){}
         else
         {
             res.json({'err':0,'cdata':data});
         }
     })
 })
 //delete cat 
 app.get('/api/deletecat/:id',function(req,res)
 {
     let cid=req.params.id;
     catModel.remove({'_id':cid},function(err)
     {
         if(err){}
         else
         {
             res.json({'err':0,'msg':'Category Deleted'})
         }
     })
 })
 //password change
 app.post('/api/changeadminpass',function(req,res)
 {
     let op=sha1(req.body.op);
     let np=sha1(req.body.np);
     let uid=req.body.uid;
     //chnage password pass
 })
//define port 
app.listen(8899,function()
{
    console.log("Work on 8899");
})