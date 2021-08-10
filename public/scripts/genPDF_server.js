var sectionEndLine = {text: "- - - - - - - - - - - - - - - - - - - - - - - - \n\n\n",style: 'tableTitle'};
var pagebreakbefore = {text: ' ',pageBreak: "before", style: 'section_header'};
function addSectionHeader(str){return {text: str,style: 'section_header'}}
function addSectionSubHeader(str){return {text: str,style: 'section_subheader'}}
function addDefaultText(str){return {text: str,style: 'defaultText'}}  
function addTableTitle(str){return {text: str,bold :true,style: 'tableTitle'}}



   

function getDD(iNeed){

    var dateS = "June 2020";
    var dateE ="May 2021";
                
            //var logo = getBase64ImageFromURL('https://picsum.photos/200')
            var docDefinition = {
                pageSize: 'A4',
                content : [        
                //objs of pdf end
                    // {  alignment: 'justify',
                    //     columns: [
                            
                    //         {image: logo,width: 150,opacity: 0.5},
                    //         {text:'Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR', style:'main1'}
                    //     ]
                    // },
                   // {text:logo,style:'main1'},
                    {text:`Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR`, style:'main1'},
                    {text:`Faculty Performance Appraisal Performa   (from ${dateS} to ${dateE})`, style:'main2'},
                    {text:`Appraisal Period: ${dateS} to ${dateE}.`, style:'main2'},
                    {text:"Note: Please mention each and every information only for the appraisal period.\n\n",style:'main2_bold'}               
                ],
                styles: {

                    //FOR DOC START
                    main1: {fontSize: 12,bold: true,alignment: 'center',margin: [0, 0, 0, 10]},
                    main2: {fontSize: 10,alignment: 'center',margin: [0, 0, 0, 10]},
                    main2_bold: {fontSize: 9,bold: true,alignment: 'center',margin: [0, 0, 0, 10]},
                    header: {fontSize: 12,bold: true,margin: [0, 0, 0, 10]},
                    subheader: {fontSize: 11,bold: true,margin: [0, 10, 0, 5]},
                    section_header: {fontSize: 10,bold: true,margin: [0, 0, 0, 10]},
                    section_subheader: {fontSize: 10,margin: [0, 0, 0, 10]},
                    defaultText: {fontSize: 10,margin: [5, 0, 0, 10], alignment: 'justify'},
                    tableTitle: {fontSize: 10,bold:true,//alignment: 'justify'
                    alignment: 'center' },
                    tableExample: { margin: [0, 5, 0, 15]},
                    tableHeader: {bold: true,fontSize: 11,color: 'black'}
                },

                defaultStyle: {
                    fontSize: 10
                    // alignment: 'justify'
                }
            };
        
        //add contents to pdf
        
        //add personal Details
        docDefinition.content.push(addSectionHeader("\n"));
        var uname = iNeed.username;
        var name  = iNeed.name;
        var dept = iNeed.department;
        var email = iNeed.email;
        var facid = iNeed.username;
        docDefinition.content.push(addSectionHeader(`Name : ${name}`));
        docDefinition.content.push(addSectionHeader(`Department : ${dept}`));
        docDefinition.content.push(addSectionHeader(`Faculty ID : ${facid}`));
        docDefinition.content.push(addSectionHeader(`Email : ${email}`));
        docDefinition.content.push(addSectionHeader("\n"));
        

        //section addition
        addSection1(docDefinition,iNeed);
        docDefinition.content.push(pagebreakbefore);

        addSection2(docDefinition, iNeed);
        docDefinition.content.push(pagebreakbefore);

        addSection3(docDefinition, iNeed);
        docDefinition.content.push(pagebreakbefore);
        //done till here

        addSection4(docDefinition,iNeed);
        docDefinition.content.push(pagebreakbefore);

        addSection5(docDefinition,iNeed);
        docDefinition.content.push(pagebreakbefore);

        addSectionRest(docDefinition,iNeed);        
        docDefinition.content.push(pagebreakbefore);

        addSectionHodAndEnd(docDefinition,iNeed);
        
        return docDefinition;
};



// ------------------------------- SECTION 1 Functions -------------------------------------
function sec1_addSubjectTable(tbody, sem){

    //conrnt of table
    //body attribute
    var res = new Array();

    var HeadRow = [
                    {text: ' ', style: 'tableHeader'}, 
                    {text: 'Course No & Title', style: 'tableHeader'}, 
                    {text: 'Core/ Elective', style: 'tableHeader'}, 
                    {text: 'No of Students', style: 'tableHeader'}, 
                    {text: 'Weekly load\n (L, T, P)', style: 'tableHeader'}, 
                    {text: 'Student Feedback', style: 'tableHeader'}, 
                    {text: 'Sole/Shared (%age)', style: 'tableHeader'}, 
                    {text: 'Offering for how many years continuously?', style: 'tableHeader'}                      
                    ]	;

    res.push(HeadRow);

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
        var row = new Array();
        for(let i=0;i<tbody[0].length;i++){
        row.push({
                colspan: 1,
                text: tbody[index][i],
                //text :"Random" ,
                style: 'defaultStyle'
            });
        }        
        res.push(row);        
    }



    return {
                style: 'tableExample',
                table: {                  //no of rows as table head
                //total = 450
                widths: [30, 80, 45, 50, 50, 75, 45, 75],
                //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
                headerRows: 1,                 
                body: res
                }
            }      
}

function sec1_addProjectTable(tbody){
    //conrnt of table
    //body attribute
    var res = new Array();

    var HeadRow = [
                    {text: 'Level	Title of Project/Thesis/Dissertation', style: 'tableHeader'}, 
                    {text: 'Title of Project/Thesis/Dissertation', style: 'tableHeader'}, 
                    {text: 'No of groups/projects', style: 'tableHeader'}, 
                    {text: 'Names/Roll Nos  of Students in each group/ project', style: 'tableHeader'}, 
                    {text: 'Name of other supervisors (if any)', style: 'tableHeader'}                                            
                    ]	;

    res.push(HeadRow);

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
        var row = new Array();
        for(let i=0;i<tbody[0].length;i++){
        row.push({
                colspan: 1,
                text: tbody[index][i],
                //text :"Random" ,
                style: 'defaultStyle'
            });
        }        
        res.push(row);        
    }



    return {
                style: 'tableExample',
                table: {                  //no of rows as table head
                //total = 450
                widths: [50, 150,50,100,100],
                //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
                headerRows: 1,                 
                body: res
                }
            }

}

function sec1_addThesisTable(tbody){
    //conrnt of table
    //body attribute
    var res = new Array();

    var HeadRow = [
                    {text: 'Sr.NO.', style: 'tableHeader'}, 
                    {text: 'Name of Student', style: 'tableHeader'}, 
                    {text: 'Registration Year and Status (FT with stipend under Institute/TEQIP/Project/PT)', style: 'tableHeader'}, 
                    {text: 'Area of research/Title of thesis undertaken', style: 'tableHeader'}, 
                    {text: 'Other supervisor (s) (if any), name & department', style: 'tableHeader'},
                    {text: 'No of publications in Journals during the reported period', style: 'tableHeader'}, 
                    {text: 'Current status: Comprehensive done/Pre-submission done/Thesis submitted/ awarded', style: 'tableHeader'}                                           
                    ]	;

    res.push(HeadRow);

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
        var row = new Array();
        for(let i=0;i<tbody[0].length;i++){
        row.push({
                colspan: 1,
                text: tbody[index][i],
                //text :"Random" ,
                style: 'defaultStyle'
            });
        }        
        res.push(row);        
    }



    return {
                style: 'tableExample',
                table: {                  //no of rows as table head
                //total = 450
                widths: [30, 50,75,75,75,50,75],
                //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
                headerRows: 1,                 
                body: res
                }
            }

}

function addSection1(dd,iNeed){
    var head = "I	       INSTRUCTIONAL ELEMENT	  [Max marks: 30]\n";
    var subhead ="\n(a)	Teaching Engagement (One UG Subject (min) per semester is compulsory for a faculty member)\n";
    var instructions = "[Max marks: 14 for both semesters, Distribution of mark: 01 mark @ 01 hour Lecture/Tutorial class and 0.5 marks @ 01 hour practical class]"

    dd.content.push(addSectionHeader(head));
    dd.content.push(addSectionSubHeader(subhead));
    dd.content.push(addDefaultText(instructions));

    //adding subject tables
    var oddSemTBody =  new Array();
    var evenSemTBody = new Array();
    //console.log(iNeed.subjects);
    if(iNeed.subjects)
    (iNeed.subjects).forEach((item) => {
        var row = new Array();
        row.push(item.degree);
        row.push(item.course);
        row.push(item.type);
        row.push(item.number);
        //ltp
        row.push(`(${item.lecture}, ${item.tutorial}, ${item.practical})`);
        row.push(item.feedback);
        row.push(item.percent);
        row.push(item.years);

        if(item.semester=='Odd'){
            oddSemTBody.push(row);
        }else{
            evenSemTBody.push(row);
        }
    });
    // if(oddSemTBody.length == 0)
    //     oddSemTBody = [["", "", "", "","","", "", ""]];    
    // if(evenSemTBody.length == 0)
    //     evenSemTBody = [["", "", "", "","","", "", ""]];
    // var oddSemTBody = [
    //     ["UG1", "TitleAAAAAAAAAAA", "Core", "Strength of class", [3,1,0],"feedBack", "shared", "years"],
    //     ["UG2", "Title", "Elective", "Strength of class", "(2, 1, 1)","feedBack", "shared", "years"]
    // ];
    // var evenSemTBody = [
    //     ["UG2", "Title", "Core", "Strength of class", [2,1,0],"feedBack", "shared", "years"]
    // ];
    dd.content.push(addTableTitle("\nOdd Semester (July to December)"));
    dd.content.push(sec1_addSubjectTable(oddSemTBody,"Odd"));
    dd.content.push(addTableTitle("\nEven Semester (January to June)"));
    dd.content.push(sec1_addSubjectTable(evenSemTBody,"Even"));
    dd.content.push(sectionEndLine);
    //subject Tables done


    //add innovaton
    var innovation = "Innovations in teaching (during the reported period):[Max marks 02 @ 01 per innovation]";
    dd.content.push(addSectionSubHeader(innovation));
    // var innovation_val = [
    //     " ________________________________________________________________________",
    //];
    // for (let index = 0; index < innovation_val.length; index++) {
    //     var element = `${index+1}. ${innovation_val[index]}` ;
    //     dd.content.push(addDefaultText(element));        
    // }
    // insert innovs
    if(iNeed.innovs)
    (iNeed.innovs).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. ${item.title}`));
    }); 
    //dd.content.push(sectionEndLine);
    //innovation ends


    //add Lab new
    var newLab = "\nDetails of new laboratory/new experiment developed (if any): 02 marks per new laboratory developed/01 mark per new experiment:";
    dd.content.push(addSectionSubHeader(newLab));

    // var newLab_val = [
    //     [" __________","Experiment"],
    //     [" DBMS","Lab"],
    //     [" OOPS","Experiment"],
    //     [" __________","Lab"],
        
    // ];  
    // for (let index = 0; index < newLab_val.length; index++) {
    //     var element = `${index+1}. (${newLab_val[index][1]}):  ${newLab_val[index][0]}` ;
    //     dd.content.push(addDefaultText(element));        
    // }

    // insert lab/exp
    if(iNeed.details)
    (iNeed.details).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. (${item.type}):  ${item.title}`));
    }); 

    //dd.content.push(sectionEndLine);
    //lab ends

    //add Other Instructional Tasks
    var OtherInstitutionTask = "\nOther Instructional Tasks [Max marks: 02 @ 01 mark per Instructional task]";
    var OtherInstitutionTask_instructions = "(Such as development of Instructional software, Education technology packages (including ETV films, modular courses, practical supervision etc.).";
    dd.content.push(addSectionSubHeader(OtherInstitutionTask));
    dd.content.push(addDefaultText(OtherInstitutionTask_instructions));
    // var OtherInstitutionTask_val = [
    //     " ________________________________________________________________________",
    //     "task",
    //     " ________________________________________________________________________",
    //     " ________________________________________________________________________",
    //     " ________________________________________________________________________"
    // ];
    // //instructs
    // for (let index = 0; index < OtherInstitutionTask_val.length; index++) {
    //     var element = `${index+1}. ${OtherInstitutionTask_val[index]}` ;
    //     dd.content.push(addDefaultText(element));        
    // }
    if((iNeed.instructs))
    (iNeed.instructs).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. ${item.title}`));
    });
    //dd.content.push(sectionEndLine);
    //Other Instructional Tasks ends


    // -------------------- MOOCS -----------------------------------
    var moocs = "\n\n(b)	MOOC/NPTEL/online courses like Coursera";
    var moocs_instructions ="\t\t\t(05 marks per course organized/03 marks for attending a full course with completion certificate)";
    dd.content.push(addSectionSubHeader(moocs));
    dd.content.push(addDefaultText(moocs_instructions));
    // var moocs_val = [
    // [" __________","Attented"],
    //     [" DBMS","Organized"],
    //     [" OOPS","Attented"],
    //     [" __________","Organized"]
    // ];

    // for (let index = 0; index < moocs_val.length; index++) {
    //     var element = `${index+1}. (${moocs_val[index][1]}):  ${moocs_val[index][0]}` ;
    //     dd.content.push(addDefaultText(element));        
    // }
    if(iNeed.moocs)
    (iNeed.moocs).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. ${item.type} : ${item.title}`));
    });

    // -------------------- MOOCS Ends-----------------------------------


    //-------------------------------Projets and thesis-----------------------
    var project_thesis = "(c)	Project and Thesis (Dissertation) Supervision:  (max marks: 10)";
    var project_thesis_instructons ="B Tech Project @ 02 per project/group\nM Tech/M Sc/MBA Project@ 02 per project/group"
    dd.content.push(addSectionSubHeader(project_thesis));
    dd.content.push(addDefaultText(project_thesis_instructons));
    // var project_thesis_TBody = [
    //     ["B.Tech", "Title", "5", "18124001,\n18124002,\n18124003,\n18124004,\n18124005", "abc"],
    //     ["M.Tech", "Title", "5", "18124001,\n18124002,\n18124003,\n18124004,\n18124005", "ABC"],
    // ];
    var project_thesis_TBody = new Array();
    if(iNeed.projects)
    (iNeed.projects).forEach((item) => {
        var row = new Array();
        row.push(item.level);
        row.push(item.title);
        row.push(item.num);        
        row.push(item.name.replace(/[,]/g,',\n'))
        //row.push(item.name);
        row.push(item.super);     
       
        project_thesis_TBody.push(row);
       
    });
    // if(project_thesis_TBody.length == 0)
    //     project_thesis_TBody = [["","","","",""]];
    dd.content.push(sec1_addProjectTable(project_thesis_TBody));
    //-------------------------------Projets and thesis ends-----------------------

    //-------------------------------Phd Supervision-----------------------
    var phdSupervision = "(d)	(d)	Ph.D Research Supervision";
    var phdSupervision_instructons ="[Ph.D. pursuing: 02 marks per Ph.D. student till 03 years of registration, 01 marks per Ph.D. student during 4th and 5th year of registration. No marks shall be awarded for Ph.D. guidance after 05 years of registration, Ph.D. Awarded: 04 marks per Candidate]";
    dd.content.push(addSectionSubHeader(phdSupervision));
    dd.content.push(addDefaultText(phdSupervision_instructons));
    // var phdSupervision_TBody = [
    //     ["Sno","name","resh yr","Aear","NAME@","2","awarded"],
    //     ["Sno2","name2","resh yr2","Aear2","NAME@2","3","Thesis Submitted"]
    // ];
    var phdSupervision_TBody = new Array();
    if(iNeed.phds)
    (iNeed.phds).forEach((item,index) => {
        var row = new Array();
        row.push(`${index+1}`);
        row.push(item.name);
        row.push(item.year);
        row.push(item.area);
        row.push(item.otherSup);
        row.push(item.number);
        row.push(item.currStatus); 
       
        phdSupervision_TBody.push(row);
       
    });
    // if(phdSupervision_TBody.length == 0)
    //     phdSupervision_TBody = [["","","","","","",""]];

    dd.content.push(sec1_addThesisTable(phdSupervision_TBody));
    //-------------------------------Phd supervision ends-----------------------

    //dd.content.push(addSectionHeader(sectionEndLine));

}

// ------------------------------ section 1 functions ends----------------------------------









//-----------------------------   Section2 functons --------------------------------------------

function sec2_addConferenceTable(tbody){
    var res = new Array();
    var HeadRow = [
                    {text: 'S No', style: 'tableHeader'}, 
                    {text: 'Details of paper:Authors names (sequence as in paper), Title of paper, Name of Conference, (Year), Page nos of proceedings.', style: 'tableHeader'}, 
                    {text: 'Please mention indexed with:SCI & Web of Science/SCI/SCOPUS/not indexed', style: 'tableHeader'}, 
                    {text: 'Names of co-authors', style: 'tableHeader'}                                            
                ]	;

    res.push(HeadRow);

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
    var row = new Array();
    for(let i=0;i<tbody[0].length;i++){
        row.push({
            colspan: 1,
            text: tbody[index][i],
            //text :"Random" ,
            style: 'defaultStyle'
            });
    }        
    res.push(row);        
    }



    return {
            style: 'tableExample',
            table: {                  //no of rows as table head
                //total = 450
                widths: [50, 150,150,150,150],
                //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
                headerRows: 1,                 
                body: res
            
            }
        }
}

function sec2_addBooksTable(tbody){
    var res = new Array();
    var HeadRow = [
                    {text: 'Authors names (same order as in publication)', style: 'tableHeader'}, 
                    {text: 'Title, Publishers', style: 'tableHeader'}, 
                    {text: 'Vol No. , (Year) Page nos', style: 'tableHeader'}, 
                    {text: 'Authored/Edited', style: 'tableHeader'}                                            
                ]	;

    res.push(HeadRow);

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
    var row = new Array();
    for(let i=0;i<tbody[0].length;i++){
        row.push({
            colspan: 1,
            text: tbody[index][i],
            //text :"Random" ,
            style: 'defaultStyle'
            });
    }        
    res.push(row);        
    }



    return {
            style: 'tableExample',
            table: {                  //no of rows as table head
                //total = 450
                widths: [100, 100,100,100],
                //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
                headerRows: 1,                 
                body: res
            
            }
        }
}

function sec2_addReportTable(tbody){
  var res = new Array();
  var HeadRow = [
                  {text: 'S. No.', style: 'tableHeader'}, 
                  {text: 'Title of Report ', style: 'tableHeader'}, 
                  {text: 'Particulars (sponsored R & D / Consultancy/ status reports etc.)', style: 'tableHeader'}, 
                  {text: 'Authors (same order as in publication)', style: 'tableHeader'},
                  {text: 'Remarks (External/ Internal report)', style: 'tableHeader'},                                           
                ]	;

  res.push(HeadRow);

  //adding rows (data)
  for (let index = 0; index < tbody.length; index++) {
    var row = new Array();
    for(let i=0;i<tbody[0].length;i++){
      row.push({
            colspan: 1,
            text: tbody[index][i],
            //text :"Random" ,
            style: 'defaultStyle'
          });
    }        
    res.push(row);        
  }



  return {
            style: 'tableExample',
            table: {                  //no of rows as table head
              //total = 450
              widths: [50, 100,100,100,100],
              //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
              headerRows: 1,                 
              body: res
            
          }
        }
}

function sec2_addJournalTable(tbody){
    //body attribute
    var res = new Array();

    var HeadRow = [
                    {text: 'S.No.', style: 'tableHeader'}, 
                    {text: 'Details of paper:Authors names (sequence as in paper), Title of paper, Name of journal, Vol. No. (Year) Page nos.', style: 'tableHeader'}, 
                    {text: 'Please mention indexed with: SCI & Web of Science/SCI/SCOPUS/not paid', style: 'tableHeader'}, 
                    {text: 'Names of co-authors', style: 'tableHeader'}, 
                    {text: '*Status of paper :Accepted/Published/online', style: 'tableHeader'}                                            
                ]	;

    res.push(HeadRow);

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
    var row = new Array();
    for(let i=0;i<tbody[0].length;i++){
        row.push({
            colspan: 1,
            text: tbody[index][i],
            //text :"Random" ,
            style: 'defaultStyle'
            });
    }        
    res.push(row);        
    }



    return {
            style: 'tableExample',
            table: {                  //no of rows as table head
                //total = 450
                widths: [25, 180,70,100,70],
                //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
                headerRows: 1,                 
                body: res
            }
            }
}

function addSection2(dd, iNeed){
    var res;
    var head = "II.	RESEARCH PAPERS/PUBLICATIONS	[Max. marks: 30]\n";
    var subhead ="\n(a)	(a)	Refereed  Journal Papers (Accepted/Published during the report period)\n";
    var instructions = "[03 marks for SCI journal and 02 marks for Scopus journal at the time of its publication/online, 1.0 mark per paper published in other unpaid peer reviewed journals, no marks for other journals/paid journals]\n(*Claim of marks can be made only for once, i.e. either at the time of acceptance or its publication/online)";
        
    dd.content.push(addSectionHeader(head));
    dd.content.push(addSectionSubHeader(subhead));
    dd.content.push(addDefaultText(instructions));

    // var JournalData =[
    // ["ABC","ABC","ABC","ABC","ABC"],
    // ["ABC","ABC","ABC","ABC","ABC"],
    // ["ABC","ABC","ABC","ABC","ABC"]
    // ];
    var JournalData = new Array();
    if(iNeed.journals)
    (iNeed.journals).forEach((item,index) => {
        var row = new Array();
        row.push(`${index+1}`);
        row.push(`Authors :${item.author} \nTitle :${item.title} \nJournal Name :${item.journal}\nVol :${item.vol}\n Pages :${item.page}`);
        row.push(item.areaofRes); 
        row.push(item.coauthor);
        row.push(item.status);     
       
        JournalData.push(row);
       
    });     
    // if(JournalData.length == 0)
    //     JournalData = [["","","","",""]];
    dd.content.push(sec2_addJournalTable(JournalData));

    //---------------------------------------------------------
    var Conference ="\n(b)	Refereed Conference Research Papers (Published during the report period) \n";
    var Conference_instructions = "[01 mark per paper published in international conference indexed with SCOPUS, 0.5 marks per paper for other Conferences], {Session Chair: additional 01 mark (max), Best paper: additional 02 marks (max)}: Marks shall be applicable if the paper has been presented in the conference by one of the authors.";
    dd.content.push(addSectionSubHeader(Conference));
    dd.content.push(addDefaultText(Conference_instructions));

    // var ConferenceData =[
    // ["ABC","ABC","ABC","ABC"],
    // ["ABC","ABC","ABC","ABC"]
    // ];

    var ConferenceData = new Array();
    if((iNeed.papers))
    (iNeed.papers).forEach((item,index) => {
        var row = new Array();
        row.push(`${index+1}`);
        row.push(`Authors :${item.coauthor}\nTitle :${item.title}\nConference :${item.confjournalName}\nYear :${item.year}\nPages :${item.page}`);  
        row.push(item.areaofRes);
        row.push(item.coauthor);     
       
        ConferenceData.push(row);
       
    });   
    
    // if(ConferenceData.length == 0)
    //     ConferenceData = [["","","",""]];
    dd.content.push(sec2_addConferenceTable(ConferenceData));

    //--------------------------------------
    var books ='\n(c)	Books, Monographs, Lab or Design manuals – Authored/ Edited [Max marks: 04: 02+02)';
    var books_instructions ='[01 mark for each Chapter authored/edited with max 02 marks, 02 marks for the Book authored]';
    dd.content.push(addSectionSubHeader(books));
    dd.content.push(addDefaultText(books_instructions));
    // var books_val = [
    // ["ABC","ABC","ABC","ABC"],
    // ["ABC","ABC","ABC","ABC"]
    // ];
    var books_val = new Array();
    if(iNeed.books)
    (iNeed.books).forEach((item) => {
        var row = new Array();
        row.push(item.author);
        row.push(`Title :${item.title}\nPublisher :${item.publisher}`);
        row.push(`Vol. :${item.volume}\nYear :${item.year}\nPages :${item.pages}`);
        //row.push(item.name);
        row.push(item.type);     
       
        books_val.push(row);
       
    });  

    // if(books_val.length == 0)
    //     books_val = [["","","",""]];
    dd.content.push(sec2_addBooksTable(books_val));

    //-----------------------------------
    var Report ='\n(d)	Technical Reports (External & Internal): ';
    var Report_instructions ='[01 mark for each Report with max. 02 marks]';
    dd.content.push(addSectionSubHeader(Report));
    dd.content.push(addDefaultText(Report_instructions));
    // var Report_val = [
    // ["ABC","ABC","ABC","ABC","shag"],
    // ["ABC","ABC","ABC","ABC","jjdsj"]
    // ];
    var Report_val = new Array();
    if(iNeed.reports)
    (iNeed.reports).forEach((item,index) => {
        var row = new Array();
        row.push(`${index+1}`);
        row.push(item.title);
        row.push(item.particulars);
        row.push(item.authors);
        row.push(item.remarks);
        //row.push(item.name.replace(/[,]/g,',\n'));       
       
        Report_val.push(row);
       
    });
    
    // if(Report_val.length == 0)
    //     Report_val.push(["","","",""]);

    dd.content.push(sec2_addReportTable(Report_val));

    //-------------------------------
    //dd.content.push(addSectionHeader(sectionEndLine));   

}

//--------------------------------------Section2 functons ends---------------------------------






//---------------------------------------  Section 3 functions --------------------------------

function sec3_addJournalTable(tbody){
    //body attribute
    var res = new Array();

    var HeadRow = [
                    {text: 'Level	Title of Project/Thesis/Dissertation', style: 'tableHeader'}, 
                    {text: 'No of groups/projects', style: 'tableHeader'}, 
                    {text: '(Names/)Roll Nos  of Students in each group/ project', style: 'tableHeader'}, 
                    {text: 'No of Students', style: 'tableHeader'}, 
                    {text: 'Name of other supervisors (if any)', style: 'tableHeader'}                                            
                ]	;

    res.push(HeadRow);

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
    var row = new Array();
    for(let i=0;i<tbody[0].length;i++){
        row.push({//colspan: 1,
            text: tbody[index][i],style: 'defaultStyle'});
    }        
    res.push(row);        
    }



    return {
            style: 'tableExample',
            table: {widths: [50, 100,100,100,100],headerRows: 1,body: res}
            }
}

function sec3_addConsultProjectTable(tbody){

  //conrnt of table
  //body attribute
  var res = new Array();

  var HeadRow = [
                  {text: 'S.No.', style: 'tableHeader'}, 
                  {text: 'Title of Project', style: 'tableHeader'}, 
                  {text: 'Funding Agency', style: 'tableHeader'}, 
                  {text: 'Financial Outlay ', style: 'tableHeader'}, 
                  {text: 'Year of start & total period', style: 'tableHeader'} ,
                  {text: 'Name of P.I and other Investigators', style: 'tableHeader'} ,
                  {text: 'Status: started or completed or in progress', style: 'tableHeader'}                                           
                ]	;

  res.push(HeadRow);

  //adding rows (data)
  for (let index = 0; index < tbody.length; index++) {
    var row = new Array();
    for(let i=0;i<tbody[0].length;i++){
      row.push({
            colspan: 1,
            text: tbody[index][i],
            //text :"Random" ,
            style: 'defaultStyle'
          });
    }        
    res.push(row);        
  }



  return {
            style: 'tableExample',
            table: {                  //no of rows as table head
              //total = 450
              widths: [50, 60,60,60,60,60,60],
              //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
              headerRows: 1,                 
              body: res
            }
          }
}

function sec3_addContinuingTable(tbody){
  //conrnt of table
  //body attribute
  var res = new Array();

  var HeadRow = [
                  {text: 'S.No.', style: 'tableHeader'}, 
                  {text: 'Title of Lecture/ Lecture Series', style: 'tableHeader'}, 
                  {text: 'Date, Place and Programme where lectures delivered', style: 'tableHeader'}, 
                  {text: 'Other relevant information', style: 'tableHeader'}                                           
                ]	;

  res.push(HeadRow);

  //adding rows (data)
  for (let index = 0; index < tbody.length; index++) {
    var row = new Array();
    for(let i=0;i<tbody[0].length;i++){
      row.push({
            colspan: 1,
            text: tbody[index][i],
            //text :"Random" ,
            style: 'defaultStyle'
          });
    }        
    res.push(row);        
  }



  return {
            style: 'tableExample',
            table: {                  //no of rows as table head
              //total = 450
              widths: [50, 150,150,150,150],
              //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
              headerRows: 1,                 
              body: res
            }
          }
}

function addSection3(dd,iNeed){
  var head = "III 	SPONSORED R & D CONSULTANCY & EXTENSION ELEMENTS        [Max. marks: 16]\n";
  var subhead ="\n(a)	Sponsored Research Projects: (Project under TEQIP/Institute grant shall not be considered for marks)\n";
  var instructions = "05 marks for completion/ongoing status, of each sponsored research project with grant more than 10 lacs during the period of reporting. 02 mark for sponsored project from any govt agency/Industry/Institute with grant less than 10 lacs, for completion/ongoing status of such project";
        
  dd.content.push(addSectionHeader(head));
  dd.content.push(addSectionSubHeader(subhead));
  dd.content.push(addDefaultText(instructions));

//   var JournalData =[
//     ["ABC","ABC","ABC","ABC","ABC"],
//     ["ABC","ABC","ABC","ABC","ABC"],
//     ["ABC","ABC","ABC","ABC","ABC"]
//   ];
    var JournalData = new Array();
    if(iNeed.srps)
    (iNeed.srps).forEach((item,index) => {
        var row = new Array();
        row.push(`${index+1}`);
        row.push(item.title);
        row.push(item.fundingAgency);
        row.push(item.financial);
        row.push(`${item.year} |${item.period}`);
        row.push(item.otherInvest);
        row.push(item.status);
        //row.push(item.name.replace(/[,]/g,',\n'));
        
       
        JournalData.push(row);
       
    });
    
    // if(JournalData.length == 0)
    //     JournalData.push(["","","","","","",""]);
  dd.content.push(sec3_addConsultProjectTable(JournalData));

  //---------------------------------------------------------
  var constutancy_projects ="\n(b)	Consultancy Projects: \n";
  var constutancy_projects_instructions = "Max 10 marks for cumulative 05 lacs @ 01 mark for cumulative Rs 50,000/-  during the period of reporting";
        
  dd.content.push(addSectionSubHeader(constutancy_projects));
  dd.content.push(addDefaultText(constutancy_projects_instructions));

//   var Consult_projectData =[
//     ["ABC","ABC","ABC","ABC","ABC",'ABC',"ABC"],
//     ["ABC","ABC","ABC","ABC","ABC",'ABC',"ABC"],
//     ["ABC","ABC","ABC","ABC","ABC",'ABC',"ABC"],
//     ["ABC","ABC","ABC","ABC","ABC",'ABC',"ABC"]
//   ];

    var Consult_projectData = new Array();
    if(iNeed.cps)
    (iNeed.cps).forEach((item,index) => {
        var row = new Array();
        row.push(`${index+1}`);
        row.push(item.title);
        row.push(item.fundingAgency);
        row.push(item.financial);
        row.push(`${item.year} |${item.period}`);
        row.push(item.otherInvest);
        row.push(item.status);
        //row.push(item.name.replace(/[,]/g,',\n'));
        
    
        Consult_projectData.push(row);
    
    });

    // if(Consult_projectData.length == 0)
    //     Consult_projectData.push(["","","","","","",""]);

     dd.content.push(sec3_addConsultProjectTable(Consult_projectData));

  //----------------------------------------------------------
  var prod ="\n(c)	Products/ Processes/ Development and Technology Transfer/ Patents:\n";
  var prod_instructions = "(Give particulars with names of group members involved)\n[05 marks for award of each patent/Technology transfer, 02 marks for filing of each patent]";
  dd.content.push(addSectionSubHeader(prod));
  dd.content.push(addDefaultText(prod_instructions));

//  var prod_val = [
//     [" __________","type1"],
//     [" DBMS","type2"],
//     [" OOPS","type1"],
//     [" __________","type2"]       
// ];

//   for (let index = 0; index < prod_val.length; index++) {
//     var element = `${index+1}. (${prod_val[index][1]}):  ${prod_val[index][0]}` ;
//     dd.content.push(addDefaultText(element));        
//   }

if((iNeed.patents))
    (iNeed.patents).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. (${item.status}) :${item.title} \n\t\t\t- Members :${item.members}`));
    }); 

  //------------------------------------------------------------------------
  //---------------------------------------------------------
  var continuing ="\n(d)	Products/ Processes/ Development and Technology Transfer/ Patents: \n";
  var continuing_instructions = "(Give particulars with names of group members involved)\n[05 marks for award of each patent/Technology transfer, 02 marks for filing of each patent]";
        
  dd.content.push(addSectionSubHeader(continuing));
  dd.content.push(addDefaultText(continuing_instructions));

//   var continuing_data =[
//     ["ABC","ABC","ABC","ABC"],
//     ["ABC","ABC","ABC","ABC"],
//     ["ABC","ABC","ABC","ABC"],
//     ["ABC","ABC","ABC","ABC"]
//   ];
var continuing_data =new Array();
if(iNeed.lectures)
(iNeed.lectures).forEach((item,index) => {
    var row = new Array();
    row.push(`${index+1}`);
    row.push(item.title);
    row.push(`Date :${item.date}\nPlace :${item.place}\nProg. Name :${item.programme}`);
    row.push(item.info);
    //row.push(item.name.replace(/[,]/g,',\n'));
    
   
    continuing_data.push(row);
   
});

// if(continuing_data.length == 0)
//     continuing_data.push(["","","",""]);
  dd.content.push(sec3_addContinuingTable(continuing_data));

  //-----------------------------------------------
  //dd.content.push(addSectionHeader(sectionEndLine));

}

//----------------------------       Section 3 Functions ends -------------------------






//-------------------------         Section 4 functons ----------------------

function sec4_addSTCTable(tbody){
    //table body
    var res = new Array();

    var HeadRow = [
        "Name of the Course",
        "Type",
        "Sponsored by",
        "Dates"
    ];
    res.push(HeadRow);
    //head row added

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
        var row = new Array();
        for(let i=0;i<tbody[0].length;i++){
        row.push({
                //colspan: 1,
                text: tbody[index][i],style: 'defaultStyle'});
        }
        
        //add ith row
        res.push(row);        
  }


  return {
        style: 'tableExample',
        table: {widths: [150,100,100,100],headerRows: 1,body: res}
    }
}

function sec4_addConferenceTable(tbody){
    //table body
    var res = new Array();

    var HeadRow = [
        "Name of the Conf./Course",
        'Type',
        "Sponsored by",
        "Dates"
    ];
    res.push(HeadRow);
    //head row added

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
        var row = new Array();
        for(let i=0;i<tbody[0].length;i++){
        row.push({
                //colspan: 1,
                text: tbody[index][i],style: 'defaultStyle'});
        }
        
        //add ith row
        res.push(row);        
  }


  return {
        style: 'tableExample',
        table: {widths: [150,100,100,100],headerRows: 1,body: res}
    }
}

function sec4_addExpertLectureTable(tbody){
    //table body
    var res = new Array();

    var HeadRow = [
        "Instt. /Organization visited",
        "Purpose of visit	",
        "Dates of visit"
    ];
    res.push(HeadRow);
    //head row added

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
        var row = new Array();
        for(let i=0;i<tbody[0].length;i++){
        row.push({
                //colspan: 1,
                text: tbody[index][i],style: 'defaultStyle'});
        }
        
        //add ith row
        res.push(row);        
  }


  return {
        style: 'tableExample',
        table: {widths: [150,150,150],headerRows: 1,body: res}
    }
}

function sec4_addOtherInstTask(body,dd){
    for (let index = 0; index < body.length; index++) {
        var element = `${index+1}. ${body[index]}` ;
        dd.content.push(addDefaultText(element));        
      }
}


function addSection4(dd,iNeed){
    var Heading = "IV:	ORGANIZATION/PARTICIPATION OF COURSES/CONFERENCES/SEMINAR/ WORKSHOP AND OTHER EXTENSION WORKS [Max. marks: 13]";
    dd.content.push(addSectionHeader(Heading));


    //a. conference
    var conf ="(a)	Organization of Courses/ Conferences";
    var conf_instructions= "[03 marks for courses/STC/FDP/MDP of at least 5 days self sponsored/sponsored by external agencies like GIAN/ATAL/others, 03 marks for self sponsored international/national conference, 02 marks for each international conference/STC/FDP/MDP sponsored by Institute; 01 mark for each national conference/ workshop/webinar/expert lecture by eminent person]";
    dd.content.push(addSectionSubHeader(conf));
    dd.content.push(addDefaultText(conf_instructions));

    // var conf_val=[
    //     ["Name","sponsered by", "Dates"],
    //     ["Name","sponsered by", "Dates"],
    //     ["Name","sponsered by", "Dates"],
    // ];
        var conf_val = new Array();
        if(iNeed.orgCourses)
    (iNeed.orgCourses).forEach((item) => {
        var row = new Array();
        row.push(item.title);
        row.push(item.type);
        row.push(item.sponsoredBy);
        row.push(item.date);
        //row.push(item.name.replace(/[,]/g,',\n'));
           
        conf_val.push(row);
    
    });

    // if(conf_val.length == 0)
    //     conf_val.push(["","","",""]);
    dd.content.push(sec4_addConferenceTable(conf_val));


    //b. STC
    var stc ="(b)	Participation  in Short Term Courses";
    var stc_ins ="[Max 02 marks @ 01 mark per STC/FDP/MDP outside NIT Jalandhar , max 01 mark @ 0.5 mark per STC/FDP/MDP attended at NIT Jalandhar ]";
    dd.content.push(addSectionSubHeader(stc));
    dd.content.push(addDefaultText(stc_ins));
    // var stc_val =[
    //     ["Name","sponsered by", "Dates"],
    //     ["Name","sponsered by", "Dates"],
    //     ["Name","sponsered by", "Dates"],
    // ];
    var stcs_val = new Array();
    if(iNeed.stcs)
	(iNeed.stcs).forEach((item) => {
	    var row = new Array();
	    row.push(item.title);
        row.push(item.type);
        row.push(item.sponsoredBy);
        row.push(item.date);
	   
	    stcs_val.push(row);
	   
	});

	// if(stcs_val.length == 0)
	//     stcs_val.push(["","","",""]);
    dd.content.push(sec4_addSTCTable(stcs_val));


    //c expert lecture
    var  exp ="(c)	Visit to Outside Institute/ Organization other than delivering expert lecture";
    var  exp_ins = "[01 mark per visit, max 02 marks]";
    dd.content.push(addSectionSubHeader(exp));
    dd.content.push(addDefaultText(exp_ins));
    // var exp_val =[
    //     ["Name","Purpose", "Dates"],
    //     ["Name","Purpose", "Dates"],
    //     ["Name","Purpose", "Dates"],
    // ];
    var exp_val = new Array();
    if(iNeed.visits)
	(iNeed.visits).forEach((item) => {
	    var row = new Array();
	    row.push(item.place);
        row.push(item.purpose);
        row.push(item.date);
	    //row.push(item.name.replace(/[,]/g,',\n'));
	    
	   
	    exp_val.push(row);
	   
	});

	// if(exp_val.length == 0)
	//     exp_val.push(["","",""]);
    dd.content.push(sec4_addExpertLectureTable(exp_val));


    //other institution task
    var  other ="(d)	Other Extension Tasks (outside NIT Jalandhar)";
	var  other_ins = "( Such as involvement with outside institutes -  Network / Joint Projects, International  &  National Academics, Professional Societies, Industry / Govt./ Public/ Community Service, Editorial & Renewing work, Editing of proceedings, Development of national code of standards, members of advisory committee/BOS/Senate/BOG/professional bodies/Governing Council/Selection Committees outside NIT Jalandhar/Chief Guest outside NIT Jalandhar/Editorship of journal/Reviewer of journal, membership of Professional bodies/award/recognition etc.)\n[Maximum 05 marks @ 01 mark per activity]";
	dd.content.push(addSectionSubHeader(other));
	dd.content.push(addDefaultText(other_ins));
	// var other_val =[
	//     "----------------",
    //     "asdfghj.........."
	// ];
    // var other_val =new Array();
    if(iNeed.extensions)
    (iNeed.extensions).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. ${item.title}`));
    }); 
	//dd.content.push(sec4_addOtherInstTask(other_val,dd));

}

//----------------------------       Section 4 Functions ends -------------------------




//-------------------------         Section 5 functons ----------------------
function addSection5(dd,iNeed){
    var head = "V	MANGEMENT & INSTITUTIONAL DEVELOPMENT ELEMENTS	  [Max. marks: 09]\n";
    var subhead ="(a)	Department/ Centre’s Level:  [Maximum 02 marks @ 01 mark per activity]\n";
    //var instructions = "[Max marks: 14 for both semesters, Distribution of mark: 01 mark @ 01 hour Lecture/Tutorial class and 0.5 marks @ 01 hour practical class]"
    dd.content.push(addSectionHeader(head));
    dd.content.push(addSectionSubHeader(subhead));
    //dd.content.push(addDefaultText(instructions));
    if(iNeed.depts)
    (iNeed.depts).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. ${item.title}`));
    });


    var insts = "(b)	Institute Level: (Max 05 marks)"+
                        "\n\t*[05 marks for Dean, HOD, Associate Dean, Chief Warden, Deputy Chief Warden, TEQIP Coordinator/Prof Incharge (Training & Placement), Chief vigilance Officer/Advisor (Estate)]"+
                        "\n\t*[02 marks @ each for for warden, assistant warden, convener/Coordinator/Incharge IPC, House Allotmenr, Investment committee/CCE/Space Incubation center/Alumni Affairs/TBI/Library committee/Guest house/campus amenities/IIC/SC/ST cell, NCC, E classroom, Community development, Medical amenities, Newsletter/Brochure, Annual report, Technical Events, Cultural events, NKN, GIAN, Yoga, Raj Bhasha, security, time table, classroom, Academic repository, IPR, IQAC, NSS, vehicle maintenance, Horticulture, sports, EPABX, Vice Chairman TBI/Space Incubation]";
    dd.content.push(addSectionSubHeader(insts));
    if(iNeed.insts)
    (iNeed.insts).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. ${item.title}`));
    });


    var assignments = "(c)	Other assignments: (Chairmanship and memberships of other committees, involvement in student services/activities, Institute community and administrative assignments, CSAB, CCMT, CCMN, various external examinations held at NIT Jalandhar as Centre.)"  
                +"\n\t[Maximum 04 marks @ 01 mark per activity]";
    dd.content.push(addSectionSubHeader(assignments));
    if(iNeed.assignments)
    (iNeed.assignments).forEach((item,index) => {
        //innovation_val.push(item.title);
        dd.content.push(addDefaultText(`${index+1}. ${item.title}`));
    });


}

//----------------------------      Section 5 Functions ends -------------------------



//-------------------------         Section 5 after functons and rest ----------------------
function addSectionRest(dd,iNeed){
    var head = "VI	OTHER WORKS (not included in the form above: Assigned by the Director: 02 marks @ 01 mark per assignment)	[Max. marks : 02]";
    dd.content.push(addSectionHeader(head));
    if(iNeed.others)
    (iNeed.others).forEach((item,index) => {
        dd.content.push(addDefaultText(`${index+1}. ${item.title}`));
    });



    var head2 = "VII	SELF APPRAISAL";
    var subhead2 ="(Comments on the work including particulars of circumstances for not being able to undertake activities in some elements)\n";
    dd.content.push(addSectionHeader(head2));
    dd.content.push(addSectionSubHeader(subhead2));
    if(iNeed.self)
        dd.content.push(addDefaultText(`- ${iNeed.self.comment}\n`));

    var head3 = "VIII	COMMENTS/ SUGGESTIONS FOR FUTURE WORK";
    var subhead3 ="(Including difficulties faced, if any, and suggestions for improvement, training, infrastructure etc. for professional growth and for achievement of excellence)\n";
    dd.content.push(addSectionHeader(head3));
    dd.content.push(addSectionSubHeader(subhead3));
    if(iNeed.comment)
        dd.content.push(addDefaultText(` - ${iNeed.comment.comment} \n`));
        
        
    
    var sign = '\n\n\t\t(Signature of faculty member with date)';
    dd.content.push(addDefaultText(sign));


}

function sec6_ScoreTable(){
    //conrnt of table
    //body attribute
    var res = new Array();

    var HeadRow = [
                    {text: 'S.No.', style: 'tableHeader'}, 
                    {text: 'Component', style: 'tableHeader'}, 
                    {text: 'Max. marks', style: 'tableHeader'}, 
                    {text: 'Marks obtained', style: 'tableHeader'}, 
                ]	;

    res.push(HeadRow);

    var tbody = [
                        [1,"INSTRUCTIONAL ELEMENT","30",""],
                        [2,"RESEARCH PAPERS/PUBLICATIONS","30",""],
                        [3,"SPONSORED R & D CONSULTANCY & EXTENSION ELEMENTS","16",""],
                        [4,"ORGANIZATION/PARTICIPATION OF COURSES/CONFERENCES/SEMINAR/ WORKSHOP AND OTHER EXTENSION WORKS","13",""],
                        [5,"MANGEMENT & INSTITUTIONAL DEVELOPMENT ELEMENTS","09",""],
                        [6,"OTHER WORKS","02",""],
                        ["","","",""],
                        ["","GRAND TOTAL","100",""],
                ];

    //adding rows (data)
    for (let index = 0; index < tbody.length; index++) {
        var row = new Array();
        for(let i=0;i<tbody[0].length;i++){
        row.push({
                colspan: 1,
                text: tbody[index][i],
                //text :"Random" ,
                style: 'defaultStyle'
            });
        }        
        res.push(row);        
    }



    return {
                style: 'tableExample',
                table: {                  //no of rows as table head
                //total = 450
                widths: [50, 300,50,50],
                //widths: ['8%', '15%', '10%', '10%', '15%', '30%', '10%', '17%'],
                headerRows: 1,                 
                body: res
                }
            }

}

function addSectionHodAndEnd(dd,iNeed){
    var head = "X	FORWARDING, APPRAISAL & FOLLOW UP";
    var subhead ="A)	Forwarded by Head of Department/ Centre\n";
    var instructions = "(With comments, if necessary, about the information given)";    
    dd.content.push(addSectionHeader(head));
    dd.content.push(addSectionSubHeader(subhead));
    dd.content.push(addDefaultText(instructions+
                                    "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"));    
    dd.content.push(addDefaultText(("Signature of H.O.D. with date)\n\n\n\n")));
    dd.content.push(addDefaultText(("(Counter Signature of Faculty Member with date)\n\n\n\n")));

    dd.content.push(pagebreakbefore);
    var head2 = "B)	Comments of Appraisal Committee to be communicated to the faculty member";
    dd.content.push(addSectionHeader(head2));

    dd.content.push(sec6_ScoreTable());


    var sign = "Signature with date\n\n\n\n\n\n\n\n"
                +"C)	Follow up Action:\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
                +"DIRECTOR/ DIRECTOR’S NOMINEE\n\n\n\n\n";
    dd.content.push(addSectionSubHeader(sign));   


}

//----------------------------      Section 5 after Functions ends -------------------------



// export {
//     getDD
// };



























function getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }




exports.getDD = getDD;