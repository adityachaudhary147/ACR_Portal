function initRoutes(app) {
    app.get("/",function(req,res){
        res.render("login");
    })
    app.get("/index",middleware.isLoggedin,function(req,res){
        res.render("index");
    })
    //register
    app.get("/register",function(req,res){
        res.render("register");
    })
    app.post("/register",function(req,res){
        var newUser = new User ({
            username    : req.body.username,
            name        : req.body.name,
            email       : req.body.email,
            department  : req.body.department     
        });
        console.log(req.body);
        User.register(newUser,req.body.password,function(err,user){
            
            if(err){
                
                console.log("error herr "+ err.message);
    
               // req.flash("error",err.message);
                res.redirect("/register");
            }
            else {
            passport.authenticate("local")(req,res,function(){
               // req.flash("success","Signed up as "+user.username);
                res.redirect("/index");
            })}
        })
    })
    //login
    app.get("/login",function(req,res){
        res.render("login");
    })
    app.post("/login",passport.authenticate("local",{
        successRedirect : "/index",
      //  failureFlash : true,
        failureRedirect : "/login",
        
    }),function(req,res){
        if(err){
            console.log(err.message);
          //  req.flash("error",err.message);
            res.redirect("/login");
        }
    })
    
    //logout
    app.get("/logout",function(req,res){
        req.logout();
      //  req.flash("success","Logged out succcessfully!!");
        res.redirect("/login");
    })
    
    //Teaching engagement routes
    app.get("/teaching",function(req,res){
        User.findById(req.user._id)
        .populate('subjects')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({subjects:user.subjects});
            }
        });
    });
    app.post("/teaching",function(req,res){
        
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Subject.create(req.body,function(err,subject){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        subject.save();
                        foundUser.subjects.push(subject);
                        foundUser.save();
                        res.send({subjects:foundUser.subjects});
                    }
                })            
            }
        })    
    })
    app.delete("/teaching/:course",function(req,res){
        var course = req.params.course;
        console.log(course);
        User.findById(req.user._id)
        .populate('subjects')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.subjects.forEach(function(subject,index){
                    if(subject.course === course){
                        console.log("found a match");
                        let id = subject._id;
                        Subject.findByIdAndDelete(subject._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.subjects.splice(index,1);
                    }
                });
                user.save();
                res.send({subjects:user.subjects});
            }
        });
        
    })
    //Innnovation routes
    app.get("/innov",function(req,res){
        User.findById(req.user._id)
        .populate('innovs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({innovs:user.innovs});
            }
        });
    })
    app.post("/innov",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Innov.create(req.body,function(err,innov){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        innov.save();
                        foundUser.innovs.push(innov);
                        foundUser.save();
                        res.send({innovs:foundUser.innovs});
                    }
                })            
            }
        }) 
    })
    app.delete("/innov/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('innovs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.innovs.forEach(function(innov,index){
                    if(innov.title === title){
                        console.log("found a match");
                        let id = innov._id;
                        Innov.findByIdAndDelete(innov._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.innovs.splice(index,1);
                    }
                });
                user.save();
                res.send({innovs:user.innovs});
            }
        });
    })
    //Details routes
    app.get("/detail",function(req,res){
        User.findById(req.user._id)
        .populate('details')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({details:user.details});
            }
        });
    })
    app.post("/detail",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Detail.create(req.body,function(err,detail){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        detail.save();
                        foundUser.details.push(detail);
                        foundUser.save();
                        res.send({details:foundUser.details});
                    }
                })            
            }
        }) 
    })
    app.delete("/detail/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('details')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.details.forEach(function(detail,index){
                    if(detail.title === title){
                        console.log("found a match");
                        let id = detail._id;
                        Detail.findByIdAndDelete(detail._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.details.splice(index,1);
                    }
                });
                user.save();
                res.send({details:user.details});
            }
        });  
    })
    //Instruct Routes
    app.get("/instruct",function(req,res){
        User.findById(req.user._id)
        .populate('instructs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({instructs:user.instructs});
            }
        });
    })
    app.post("/instruct",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Instruct.create(req.body,function(err,instruct){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        instruct.save();
                        foundUser.instructs.push(instruct);
                        foundUser.save();
                        res.send({instructs:foundUser.instructs});
                    }
                })            
            }
        }) 
    })
    app.delete("/instruct/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('instructs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.instructs.forEach(function(instruct,index){
                    if(instruct.title === title){
                        console.log("found a match");
                        let id = instruct._id;
                        Instruct.findByIdAndDelete(instruct._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.instructs.splice(index,1);
                    }
                });
                user.save();
                res.send({instructs:user.instructs});
            }
        });
        
    })
    
    //MOOC Routes
    app.get("/mooc",function(req,res){
        User.findById(req.user._id)
        .populate('moocs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({moocs:user.moocs});
            }
        });
    })
    app.post("/mooc",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Mooc.create(req.body,function(err,mooc){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        mooc.save();
                        foundUser.moocs.push(mooc);
                        foundUser.save();
                        res.send({moocs:foundUser.moocs});
                    }
                })            
            }
        }) 
    })
    app.delete("/mooc/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('moocs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.moocs.forEach(function(mooc,index){
                    if(mooc.title === title){
                        console.log("found a match");
                        let id = mooc._id;
                        Mooc.findByIdAndDelete(mooc._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.moocs.splice(index,1);
                    }
                });
                user.save();
                res.send({moocs:user.moocs});
            }
        });
        
    })
    
    
    //Project Routes
    
    app.get("/project",function(req,res){
        User.findById(req.user._id)
        .populate('projects')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({projects:user.projects});
            }
        });
    })
    app.post("/project",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Project.create(req.body,function(err,project){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        project.save();
                        foundUser.projects.push(project);
                        foundUser.save();
                        res.send({projects:foundUser.projects});
                    }
                })            
            }
        }) 
    })
    app.delete("/project/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('projects')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.projects.forEach(function(project,index){
                    if(project.title === title){
                        console.log("found a match");
                        let id = project._id;
                        Project.findByIdAndDelete(project._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.projects.splice(index,1);
                    }
                });
                user.save();
                res.send({projects:user.projects});
            }
        });
        
    })
    
    //PHD Routes
    
    app.get("/phd",function(req,res){
        User.findById(req.user._id)
        .populate('phds')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({phds:user.phds});
            }
        });
    })
    app.post("/phd",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Phd.create(req.body,function(err,phd){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        phd.save();
                        foundUser.phds.push(phd);
                        foundUser.save();
                        res.send({phds:foundUser.phds});
                    }
                })            
            }
        }) 
    })
    app.delete("/phd/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('phds')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.phds.forEach(function(phd,index){
                    if(phd.name === title){
                        console.log("found a match");
                        let id = phd._id;
                        Phd.findByIdAndDelete(phd._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.phds.splice(index,1);
                    }
                });
                user.save();
                res.send({phds:user.phds});
            }
        });
        
    })
    
    //Journal Routes
    app.get("/journal",function(req,res){
        User.findById(req.user._id)
        .populate('journals')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({journals:user.journals});
            }
        });
    })
    app.post("/journal",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Journal.create(req.body,function(err,journal){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        journal.save();
                        foundUser.journals.push(journal);
                        foundUser.save();
                        res.send({journals:foundUser.journals});
                    }
                })            
            }
        }) 
    })
    app.delete("/journal/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('journals')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.journals.forEach(function(journal,index){
                    if(journal.title === title){
                        console.log("found a match");
                        let id = journal._id;
                        Journal.findByIdAndDelete(journal._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.journals.splice(index,1);
                    }
                });
                user.save();
                res.send({journals:user.journals});
            }
        });
        
    })
    
    
    //Conference paper Routes
    app.get("/paper",function(req,res){
        User.findById(req.user._id)
        .populate('papers')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({papers:user.papers});
            }
        });
    })
    app.post("/paper",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Paper.create(req.body,function(err,paper){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        paper.save();
                        foundUser.papers.push(paper);
                        foundUser.save();
                        res.send({papers:foundUser.papers});
                    }
                })            
            }
        }) 
    })
    app.delete("/paper/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('papers')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.papers.forEach(function(paper,index){
                    if(paper.title === title){
                        console.log("found a match");
                        let id = paper._id;
                        Paper.findByIdAndDelete(paper._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.papers.splice(index,1);
                    }
                });
                user.save();
                res.send({papers:user.papers});
            }
        });
        
    })
    
    //Books Routes
    app.get("/book",function(req,res){
        User.findById(req.user._id)
        .populate('books')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({books:user.books});
            }
        });
    })
    app.post("/book",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Book.create(req.body,function(err,book){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        book.save();
                        foundUser.books.push(book);
                        foundUser.save();
                        res.send({books:foundUser.books});
                    }
                })            
            }
        }) 
    })
    app.delete("/book/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('books')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.books.forEach(function(book,index){
                    if(book.title === title){
                        console.log("found a match");
                        let id = book._id;
                        Book.findByIdAndDelete(book._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.books.splice(index,1);
                    }
                });
                user.save();
                res.send({books:user.books});
            }
        });
        
    })
    
    //Reports Routes
    app.get("/report",function(req,res){
        User.findById(req.user._id)
        .populate('reports')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({reports:user.reports});
            }
        });
    })
    app.post("/report",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Report.create(req.body,function(err,report){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        report.save();
                        foundUser.reports.push(report);
                        foundUser.save();
                        res.send({reports:foundUser.reports});
                    }
                })            
            }
        }) 
    })
    app.delete("/report/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('reports')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.reports.forEach(function(report,index){
                    if(report.title === title){
                        console.log("found a match");
                        let id = report._id;
                        Report.findByIdAndDelete(report._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.reports.splice(index,1);
                    }
                });
                user.save();
                res.send({reports:user.reports});
            }
        });
        
    })
    
    //Sponsored Reasearch Projects Routes
    app.get("/srp",function(req,res){
        User.findById(req.user._id)
        .populate('srps')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({srps:user.srps});
            }
        });
    })
    app.post("/srp",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Srp.create(req.body,function(err,srp){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        srp.save();
                        foundUser.srps.push(srp);
                        foundUser.save();
                        res.send({srps:foundUser.srps});
                    }
                })            
            }
        }) 
    })
    app.delete("/srp/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('srps')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.srps.forEach(function(srp,index){
                    if(srp.title === title){
                        console.log("found a match");
                        let id = srp._id;
                        Srp.findByIdAndDelete(srp._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.srps.splice(index,1);
                    }
                });
                user.save();
                res.send({srps:user.srps});
            }
        });
        
    })
    
    //CP Routes
    app.get("/cp",function(req,res){
        User.findById(req.user._id)
        .populate('cps')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({cps:user.cps});
            }
        });
    })
    app.post("/cp",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Cp.create(req.body,function(err,cp){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        cp.save();
                        foundUser.cps.push(cp);
                        foundUser.save();
                        res.send({cps:foundUser.cps});
                    }
                })            
            }
        }) 
    })
    app.delete("/cp/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('cps')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.cps.forEach(function(cp,index){
                    if(cp.title === title){
                        console.log("found a match");
                        let id = cp._id;
                        Cp.findByIdAndDelete(cp._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.cps.splice(index,1);
                    }
                });
                user.save();
                res.send({cps:user.cps});
            }
        });
        
    })
    
    //Patent Routes
    app.get("/patent",function(req,res){
        User.findById(req.user._id)
        .populate('patents')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({patents:user.patents});
            }
        });
    })
    app.post("/patent",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Patent.create(req.body,function(err,patent){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        patent.save();
                        foundUser.patents.push(patent);
                        foundUser.save();
                        res.send({patents:foundUser.patents});
                    }
                })            
            }
        }) 
    })
    app.delete("/patent/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('patents')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.patents.forEach(function(patent,index){
                    if(patent.title === title){
                        console.log("found a match");
                        let id = patent._id;
                        Patent.findByIdAndDelete(patent._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.patents.splice(index,1);
                    }
                });
                user.save();
                res.send({patents:user.patents});
            }
        });
        
    })
    
    
    //Lecture Routes
    app.get("/lecture",function(req,res){
        User.findById(req.user._id)
        .populate('lectures')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({lectures:user.lectures});
            }
        });
    })
    app.post("/lecture",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Lecture.create(req.body,function(err,lecture){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        lecture.save();
                        foundUser.lectures.push(lecture);
                        foundUser.save();
                        res.send({lectures:foundUser.lectures});
                    }
                })            
            }
        }) 
    })
    app.delete("/lecture/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('lectures')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.lectures.forEach(function(lecture,index){
                    if(lecture.title === title){
                        console.log("found a match");
                        let id = lecture._id;
                        Lecture.findByIdAndDelete(lecture._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.lectures.splice(index,1);
                    }
                });
                user.save();
                res.send({lectures:user.lectures});
            }
        });
        
    })
    
    //Organised Courses Routes
    app.get("/orgCourse",function(req,res){
        User.findById(req.user._id)
        .populate('orgCourses')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({orgCourses:user.orgCourses});
            }
        });
    })
    app.post("/orgCourse",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                OrgCourse.create(req.body,function(err,orgCourse){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        orgCourse.save();
                        foundUser.orgCourses.push(orgCourse);
                        foundUser.save();
                        res.send({orgCourses:foundUser.orgCourses});
                    }
                })            
            }
        }) 
    })
    app.delete("/orgCourse/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('orgCourses')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.orgCourses.forEach(function(orgCourse,index){
                    if(orgCourse.title === title){
                        console.log("found a match");
                        let id = orgCourse._id;
                        OrgCourse.findByIdAndDelete(orgCourse._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.orgCourses.splice(index,1);
                    }
                });
                user.save();
                res.send({orgCourses:user.orgCourses});
            }
        });
        
    })
    
    
    //Participated STC Routes
    app.get("/stc",function(req,res){
        User.findById(req.user._id)
        .populate('stcs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({stcs:user.stcs});
            }
        });
    })
    app.post("/stc",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Stc.create(req.body,function(err,stc){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        stc.save();
                        foundUser.stcs.push(stc);
                        foundUser.save();
                        res.send({stcs:foundUser.stcs});
                    }
                })            
            }
        }) 
    })
    app.delete("/stc/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('stcs')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.stcs.forEach(function(stc,index){
                    if(stc.title === title){
                        console.log("found a match");
                        let id = stc._id;
                        Stc.findByIdAndDelete(stc._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.stcs.splice(index,1);
                    }
                });
                user.save();
                res.send({stcs:user.stcs});
            }
        });
    })
    
    //Places visited Routes
    app.get("/visit",function(req,res){
        User.findById(req.user._id)
        .populate('visits')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({visits:user.visits});
            }
        });
    })
    app.post("/visit",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Visit.create(req.body,function(err,visit){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        visit.save();
                        foundUser.visits.push(visit);
                        foundUser.save();
                        res.send({visits:foundUser.visits});
                    }
                })            
            }
        }) 
    })
    app.delete("/visit/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('visits')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.visits.forEach(function(visit,index){
                    if(visit.place === title){
                        console.log("found a match");
                        let id = visit._id;
                        Visit.findByIdAndDelete(visit._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.visits.splice(index,1);
                    }
                });
                user.save();
                res.send({visits:user.visits});
            }
        });
        
    })
    
    //Extension Routes
    app.get("/extension",function(req,res){
        User.findById(req.user._id)
        .populate('extensions')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({extensions:user.extensions});
            }
        });
    })
    app.post("/extension",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Extension.create(req.body,function(err,extension){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        extension.save();
                        foundUser.extensions.push(extension);
                        foundUser.save();
                        res.send({extensions:foundUser.extensions});
                    }
                })            
            }
        }) 
    })
    app.delete("/extension/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('extensions')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.extensions.forEach(function(extension,index){
                    if(extension.title === title){
                        console.log("found a match");
                        let id = extension._id;
                        Extension.findByIdAndDelete(extension._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.extensions.splice(index,1);
                    }
                });
                user.save();
                res.send({extensions:user.extensions});
            }
        });
        
    })
    
    
    //Department Responsibilities Extension Routes
    app.get("/departmentResp",function(req,res){
        User.findById(req.user._id)
        .populate('depts')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({departmentResps:user.depts});
            }
        });
    })
    app.post("/departmentResp",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Dept.create(req.body,function(err,dept){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        dept.save();
                        foundUser.depts.push(dept);
                        foundUser.save();
                        res.send({departmentResps:foundUser.depts});
                    }
                })            
            }
        }) 
    })
    app.delete("/departmentResp/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('depts')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.depts.forEach(function(dept,index){
                    if(dept.title === title){
                        console.log("found a match");
                        let id = dept._id;
                        Dept.findByIdAndDelete(dept._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.depts.splice(index,1);
                    }
                });
                user.save();
                res.send({departmentResps:user.depts});
            }
        });
        
    })
    
    
    //Institute Responsibilities Extension Routes
    app.get("/insituteResp",function(req,res){
        User.findById(req.user._id)
        .populate('insts')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({insituteResps:user.insts});
            }
        });
    })
    app.post("/insituteResp",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Inst.create(req.body,function(err,inst){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        inst.save();
                        foundUser.insts.push(inst);
                        foundUser.save();
                        res.send({insituteResps:foundUser.insts});
                    }
                })            
            }
        }) 
    })
    app.delete("/insituteResp/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('insts')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.insts.forEach(function(inst,index){
                    if(inst.title === title){
                        console.log("found a match");
                        let id = inst._id;
                        Inst.findByIdAndDelete(inst._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.insts.splice(index,1);
                    }
                });
                user.save();
                res.send({insituteResps:user.insts});
            }
        });
        
    })
    
    //Other Assignments Extension Routes
    app.get("/assignment",function(req,res){
        User.findById(req.user._id)
        .populate('assignments')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({assignments:user.assignments});
            }
        });
    })
    app.post("/assignment",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Assignment.create(req.body,function(err,assignment){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        assignment.save();
                        foundUser.assignments.push(assignment);
                        foundUser.save();
                        res.send({assignments:foundUser.assignments});
                    }
                })            
            }
        }) 
    })
    app.delete("/assignment/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('assignments')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.assignments.forEach(function(assignment,index){
                    if(assignment.title === title){
                        console.log("found a match");
                        let id = assignment._id;
                        Assignment.findByIdAndDelete(assignment._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.assignments.splice(index,1);
                    }
                });
                user.save();
                res.send({assignments:user.assignments});
            }
        });
        
    })
    
    
    
    //Any Other Work (NOT MENTIONED ABOVE) Routes
    app.get("/other",function(req,res){
        User.findById(req.user._id)
        .populate('others')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({others:user.others});
            }
        });
    })
    app.post("/other",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Other.create(req.body,function(err,other){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        other.save();
                        foundUser.others.push(other);
                        foundUser.save();
                        res.send({others:foundUser.others});
                    }
                })            
            }
        }) 
    })
    app.delete("/other/:title",function(req,res){
        var title = req.params.title;
    
        User.findById(req.user._id)
        .populate('others')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                
                user.others.forEach(function(other,index){
                    if(other.title === title){
                        console.log("found a match");
                        let id = other._id;
                        Other.findByIdAndDelete(other._id,function(err){
                            if(err){
                                console.log(err);
                            }
                            else console.log("deleted");
                        })
                        user.others.splice(index,1);
                    }
                });
                user.save();
                res.send({others:user.others});
            }
        });
    })
    
    //Self appraisel
    app.get("/self",function(req,res){
        User.findById(req.user._id)
        .populate('self')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({self:user.self});
            }
        });
    })
    app.post("/self",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Self.create(req.body,function(err,self){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        self.save();
                        foundUser.self = self;
                        foundUser.save();
                        res.send({self:foundUser.self});
                    }
                })            
            }
        }) 
    })
    //COMMENT 
    app.get("/comment",function(req,res){
        User.findById(req.user._id)
        .populate('comment')
        .exec(function(err,user){
            if(err){
                console.log(err);
            }else {
                console.log(user);
                res.send({comment:user.comment});
            }
        });
    })
    app.post("/comment",function(req,res){
        User.findById(req.user._id,function(err,foundUser){
            if(err){
                console.log(err);
            }else {
                Comment.create(req.body,function(err,comment){
                    if(err)
                    console.log(err);
                    else{
                        console.log(req.body);
                        comment.save();
                        foundUser.comment = comment;
                        foundUser.save();
                        res.send({comment:foundUser.comment});
                    }
                })            
            }
        }) 
    })
    
    
}

module.exports = initRoutes