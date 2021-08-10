let categories = document.querySelectorAll(".category");
let tabs = document.querySelectorAll("a.tab");
var curtab = '#tab0';
var phds = {
    name    : $('#phdname'),
    year    : $('#phdyear'),
    area    : $('#phdarea'),
    otherSup: $('#phdotherSup'),
    number  : $('#phdnumber'),
    status  : $('#phdcurrStatus'),
    submit  : $('#phdSubmit'),
    table   : $('#phdTable')
}
var moocs ={
    title   : $("#mooctitle"),
    type    : $("#mooctype"),
    submit  : $('#moocSubmit'),
    table   : $('#moocTable')

}
// Section 1 Teaching Engangements
var subjects = {
        degree     : $('#degree'),
        course     : $('#course'),
        type       : $('#type'),
        number     : $('#number'),
        lecture    : $('#lecture'),
        tutorial   : $('#tutorial'),
        practical  : $('#practical'),
        percent    : $('#percent'),
        years      : $('#years'),
        feedback   : $('#feedback'),
        semester   : $('#semester'),
        submit     : $('#teachingSubmit'),
        table      : $('#teachingTable')
}
// // validation of teaching Engagements
// Done 
// subjects.submit.on("click",function ()
// {
//     if (subjects.course==='')
//     {
//         alert("Hello! I am an alert box!");
//         alert("Enter course code");
//         return;
//     }
//     console.log("validating the teaching engagement function");
//     if (subjects.degree.val==='select')
//     {
//         alert("Please Select Degree");
//         return;


//     }
// })
var innovations = {
    input: $('#innov'),
    submit : $('#addInnov'),
    table	: $('#Table101')
}
var details = {
    input: $('#detail'),
    type: $('#detailType'),
    submit : $('#addDetail'),
    table	: $('#Table102')
}
var instructs = {
    input: $('#instruct'),
    submit : $('#addInstruct'),
    table	: $('#Table103')
}
var projects = { 
    level   : $('#level'),
    title   : $('#title'),
    num     : $('#num'), 
    nm      : $('#name'),
    sup     : $('#super'),
    submit  : $('#projectSubmit'),
    table   : $('#projectsTable')
}

var journals = {
	author	: $('#author2a'),
	title	: $('#title2a'),
	journal	: $('#journal2a'),
	vol	: $('#vol2a'),
	year	: $('#year2a'),
	page	: $('#page2a'),
	coauthor	: $('#coAuthor2a'),
	status	: $('#status2a'),
	areaofRes	: $('#areaofRes2a'),
	submit	: $('#AddPSpr'),
	table	: $('#Table5')
}

var papers = {
	author	: $('#author2b'),
	title	: $('#title2b'),
	confjournalName	: $('#conf2b'),
	year	: $('#year2b'),
	page	: $('#proceedings2b'),
	coauthor	: $('#coAuthor2b'),
	areaofRes	: $('#areaofRefConf'),
	submit	: $('#AddP'),
	table	: $('#Table6')
}

var books =
    {
        authors:$('#author2c'),
        title:$('#title2c'),
		publisher:$('#pub2c'),
        volume:$('#vol2c'),
        year:$('#year2c'),
        pages:$('#pro2c'),
        type:$('#edit'),
		submit	: $('#AddPS'),
	table	: $('#Table7')
    }
var reports =
    {
        title:$('#nameofTitleReport'),
        particulars:$('#particulars'),
        authors:$('#authorBook'),
        remarks:$('#remarksBook'),
		submit	: $('#AddPSp'),
	    table	: $('#Table8')
    }
	
var srps=
    {
        title:$('#nameofTitleProject'),
        fundingAgency:$('#fundingAgency'),
        financial:$('#fundingOutlay'),
        year:$('#yearOfStart'),
        period:$('#totalPeriod'),
        otherInvest:$('#nameOfPI'),
        status:$('#statusOfProjects'),
		submit	: $('#AddPSP'),
	    table	: $('#Table9')
             
    }
var cps=
    {
        title:$('#nameofTitleCProject'),
        fundingAgency:$('#fundingCAgency'),
        financial:$('#fundingCOutlay'),
        year:$('#yearCOfStart'),
        period:$('#totalCPeriod'),
        otherInvest:$('#nameOfCPI'),
        status:$('#statusCOfProjects'),
		submit	: $('#AddPS3b'),
	    table	: $('#Table10')
             
    }
	
var patents =
        {
            title:$('#patents'),
            status:$('#awafi'),
            members:$('#grpMem'),
			submit	: $('#AddPS3c'),
	        table	: $('#Table11')
        }
		
var lectures =
    {
        title:$('#titleOfLecture'),
        date:$('#date'),
		place:$('#place'),
		programme:$('#programme'),
        info:$('#relInfo'),
		submit	: $('#AddPS3d'),
	    table	: $('#Table12')
    }
	
var orgCourses =
    {
        title:$('#titleOfLecture4'),
        date:$('#dateOoC'),
        sponsoredBy:$('#sponseredBy'),
        type:$('#typeOOC'),
		submit	: $('#AddPS4a'),
	    table	: $('#Table13')
    }
	
var stcs =
    {
        title:$('#coursePSTC'),
        sponsoredBy:$('#sponseredByPSTC'),
		type:$('#typePSTC'),
        date:$('#datePSTC'),
		submit	: $('#AddPSTC'),
	    table	: $('#Table14')
    }

var visits =
    {
        place:$('#placeVisit'),
        purpose:$('#purposeVisit'),
        date:$('#dateVisit'),
		submit	: $('#AddVisit'),
	    table	: $('#Table15')
    }
var extensions = {
    input: $('#extension'),
    submit : $('#AddExtension'),
    table	: $('#Table16')
}
var depts = {
    input: $('#DeptResps'),
    submit : $('#AddDeptResps'),
    table	: $('#Table17')

}
var institutes = {
    input: $('#InstituteResps'),
    submit : $('#AddInstituteResps'),
    table	: $('#Table18')

}
var assignments = {
    input: $('#Works'),
    submit : $('#AddAssignments'),
    table	: $('#Table19')
}
var others = {
    input: $('#works'),
    submit : $('#AddWorks'),
    table	: $('#Table20')
}
var self = {
        input: $('#selfAppraisel'),
        submit : $('#addSelf'),
        edit  : $("#editSelf")
}
var comments = {
        input : $('#comments'),
        submit:    $('#addComments'),
        edit  : $("#editComments")

}	

for(let i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(){
        for(let j=0; j<categories.length;j++){
            categories[j].style.display="none";
            tabs[j].style.color = "#003366";}  
            if(i<categories.length)
            {
            categories[i].style.display="block"; 
            tabs[i].style.color="Red";
            
        }
    })
}
var score = 0
function calc() {
    document.getElementById('scor').innerHTML = "Current score : " + score
}
$(function() {
    // I INSTRUCTIONAL ELEMENT [Max marks: 30] 

    //--------------------------A_ Teaching Engagement-----------------------------------------------
    //GET
    $('#tab0').on('click', function() {
        curtab = '#tab0';
        $.ajax({
            url: '/teaching',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
              var tbodyEl = $('tbody');

                tbodyEl.html('');
                score = 0
                response.subjects.forEach(function(subject) {
                    score = score + subject.lecture + subject.tutorial + subject.practical * (0.5)
                    tbodyEl.append('\
                        <tr>\
                            <td class="degree">' + subject.degree + '</td>\
                            <td class="course">' + subject.course + '</td>\
                            <td class="type">' + subject.type + '</td>\
                            <td class="number">' + subject.number + '</td>\
                            <td class="lecture">' + subject.lecture + '</td>\
                            <td class="tutorial">' + subject.tutorial + '</td>\
                            <td class="practical">' + subject.practical + '</td>\
                            <td class="percent">' + subject.percent + '</td>\
                            <td class="years">' + subject.years + '</td>\
                            <td class="feedback">' + subject.feedback + '</td>\
                            <td class="semester">' + subject.semester + '</td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
                if (score > 14)
                    score = 14
                calc()
            }
        });
    });
    //POST Request
    subjects.submit.on('click',function(event){
        console.log("button clicked");
        event.preventDefault();
        
        if (subjects.degree.val()=='select')
        {
            alert('Select Degree Missed');
            return;
        }
        if (subjects.course.val()=='')
        {
            alert("Enter Course Details");
            return;
        }
        if (subjects.degree.val() == '' || subjects.course.val() == '' || subjects.type.val() == '' || subjects.number.val() == '' || subjects.lecture.val() == '' || subjects.tutorial.val() == '' || subjects.practical.val() == '' || subjects.percent.val() == '' || subjects.years.val() == '' || subjects.feedback.val() == '' || subjects.semester.val() == '')
        {
            alert("Please Fill all Entries , Fill NA in Empty vlaues");
            return;
        }
        $.ajax({
            url: '/teaching',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({  
                    degree     : subjects.degree.val(),    
                    course     : subjects.course.val(), 
                    type       : subjects.type.val(), 
                    number     : subjects.number.val(), 
                    lecture    : subjects.lecture.val(),
                    tutorial   : subjects.tutorial.val(), 
                    practical  : subjects.practical.val(), 
                    percent    : subjects.percent.val(), 
                    years      : subjects.years.val(), 
                    feedback   : subjects.feedback.val(), 
                    semester   : subjects.semester.val()
                       
                }),
            success: function(response) {
                console.log(response); 
                document.querySelector('#form1').reset();
                $('#tab0').click();
            }
        });    
    })
    //UPDATE
    subjects.table.on('click', '.update-button',function(){
        var rowEl = $(this).closest('tr');
        var course = rowEl.find('.course').text();
        subjects.degree.val(rowEl.find('.degree').text());
        subjects.course.val(rowEl.find('.course').text());
        subjects.type.val(rowEl.find('.type').text());
        subjects.number.val(rowEl.find('.number').text());
        subjects.lecture.val(rowEl.find('.lecture').text());
        subjects.tutorial.val(rowEl.find('.tutorial').text());
        subjects.practical.val(rowEl.find('.practical').text());
        subjects.percent.val(rowEl.find('.percent').text());
        subjects.years.val(rowEl.find('.years').text());
        subjects.feedback.val(rowEl.find('.feedback').text());
        subjects.semester.val(rowEl.find('.semester').text());

        $.ajax({
            url: '/teaching/'+course,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab0').click();
            }
        });
    })

    //DELETE
    subjects.table.on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        console.log(rowEl);
        var course = rowEl.find('.course').text();
        $.ajax({
            url: '/teaching/'+course,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab0').click();
            }
        });
    });

// ======================= MOOCs and other courses ==================

//------------------tab101

$('#tab101').on('click', function() {
   
    $.ajax({
        url: '/innov',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.innovs.forEach(function(other) {
                console.log(other.title);
                score=score+1
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + other.title + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 2)
                score = 2
           
            calc()
        }
    });
});
//POST Request
innovations.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (innovations.input.val()=='')
    {
        alert('Please Enter Some thing !');
        return;
    }
    $.ajax({
        url: '/innov',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title:innovations.input.val()
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form2').reset();
            $('#tab101').click();
        }
    });    

})
//UPDATE
innovations.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    innovations.input.val(rowEl.find('.title').text());

    $.ajax({
        url: '/innov/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab101').click();
        }
    });
})

//DELETE
innovations.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/innov/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab101').click();
        }
    });
});
//===========tab102
$('#tab102').on('click', function() {
    $.ajax({
        url: '/detail',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.details.forEach(function(detail) {
                if (detail.type == 'lab')
                    score = score + 2
                else
                    score = score + 1
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + detail.title + '</td>\
                        <td class="type">' + detail.type + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            calc()
        }
    });
});
//POST Request
details.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if ( details.input.val() == '') {
        alert('Please Enter something !');
        return;
    }
    $.ajax({
        url: '/detail',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : details.input.val(),
                    type         : details.type.val(),
                  
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form3').reset();
            $('#tab102').click();
        }
    });    
})
//UPDATE
details.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    details.input.val(rowEl.find('.title').text());
    details.type.val(rowEl.find('.type').text());

    $.ajax({
        url: '/detail/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab102').click();
        }
    });
})

//DELETE
details.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/detail/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab102').click();
        }
    });
});
//==========tab103
$('#tab103').on('click', function() {
   
    $.ajax({
        url: '/instruct',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            calc()
            response.instructs.forEach(function(instruct) {
                score = score + 1
                console.log(instruct.title);
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + instruct.title + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 2)
                score = 2

            calc()
        }
    });
});
//POST Request
instructs.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (instructs.input.val()== '') {
        alert('Please Enter something !');
        return;
    }
    $.ajax({
        url: '/instruct',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title:instructs.input.val()
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form4').reset();
            $('#tab103').click();
        }
    });    
})
//UPDATE
instructs.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    instructs.input.val(rowEl.find('.title').text());
    $.ajax({
        url: '/instruct/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab103').click();
        }
    });
})

//DELETE
instructs.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/instruct/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab103').click();
        }
    });
});
$('#tab1').on('click', function() {
    curtab = '#tab1';
    $.ajax({
        url: '/mooc',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.moocs.forEach(function(mooc) {
                if (mooc.type == 'Organised')
                    score = score + 5
                else
                    score = score + 3
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + mooc.title + '</td>\
                        <td class="type">' + mooc.type + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            
            calc()
        }
    });
});
//POST Request
moocs.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (moocs.title.val()==''|| moocs.type.val()=='select')
    {
        alert("Enter Your Details");
        return;
    }
    $.ajax({
        url: '/mooc',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : moocs.title.val(),
                    type         : moocs.type.val(),
                  
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form5').reset();
            $('#tab1').click();
        }
    });    
})
//UPDATE
moocs.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    moocs.title.val(rowEl.find('.title').text());
    moocs.type.val(rowEl.find('.type').text());

    $.ajax({
        url: '/mooc/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab1').click();
        }
    });
})

//DELETE
moocs.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/mooc/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab1').click();
        }
    });
});

    //-------------------------------------Project and Thesis------------------------------------------
    // GET/READ
    $('#tab2').on('click', function() {
        $.ajax({
            url: '/project',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
              var tbodyEl = $('tbody');

                tbodyEl.html('');
                score = 0
                response.projects.forEach(function(project) {
                    score = score + project.num * 2
                    tbodyEl.append('\
                        <tr>\
                            <td class="level">' + project.level + '</td>\
                            <td class="title">' + project.title + '</td>\
                            <td class="num">' + project.num + '</td>\
                            <td class="name">' + project.name + '</td>\
                            <td class="super">' + project.super + '</td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
                if (score > 10)
                    score = 10
                calc()
            }
        });
    });
   

    // CREATE/POST
    
    projects.submit.on('click', function(event) {
        event.preventDefault();
        if (projects.title.val() == '' || projects.sup.val()=='' || projects.level.val()=='' || projects.nm.val()=='' ) {
            alert('Please Enter something !');
            return;
        }
        $.ajax({
            url: '/project',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({  
                level   : projects.level.val(),
                title   : projects.title.val(),
                num     : projects.num.val(), 
                name    : projects.nm.val(),
                super   : projects.sup.val()
            }),
            success: function(response) {
                console.log(response); 
                document.querySelector('#form6').reset();
                $('#tab2').click();
            }
        });
    });

    //UPDATE
    projects.table.on('click', '.update-button',function(){
        var rowEl = $(this).closest('tr');
        var titl = rowEl.find('.title').text();
        projects.level.val(rowEl.find('.level').text());
        projects.title.val(rowEl.find('.title').text()); 
        projects.num.val(rowEl.find('.num').text());
        projects.nm.val(rowEl.find('.name').text());
        projects.sup.val(rowEl.find('.super').text());

        
        $.ajax({
            url: '/project/'+titl,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab2').click();
            }
        });
    })
    // DELETE
    projects.table.on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        console.log(rowEl);
        var title = rowEl.find('.title').text();
        $.ajax({
            url: '/project/'+title,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab2').click();
            }
        });
    });
    
// ----------------------PHD--------------------
$('#tab3').on('click', function() {
   
    $.ajax({
        url: '/phd',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.phds.forEach(function(phd) {
		 score=score+2;
                tbodyEl.append('\
                    <tr>\
                        <td class="name">' + phd.name + '</td>\
                        <td class="year">' + phd.year + '</td>\
                        <td class="area">' + phd.area + '</td>\
                        <td class="otherSup">' + phd.otherSup + '</td>\
                        <td class="number">' + phd.number + '</td>\
                        <td class="status">' + phd.currStatus + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            
            calc() 
        }
    });
});
//POST Request
phds.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (phds.name.val() == '' || phds.area.val()=='' || phds.status.val()=='') {
        alert('Please Enter something !');
        return;
    }
    $.ajax({
        url: '/phd',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    name        : phds.name.val(),
                    year        : phds.year.val(),
                    area        : phds.area.val(),
                    otherSup    : phds.otherSup.val(),
                    number      : phds.number.val(),
                    currStatus  : phds.status.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form7').reset();
            $('#tab3').click();
        }
    });    
})
//UPDATE
phds.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var name = rowEl.find('.name').text();
    phds.name.val(rowEl.find('.name').text());
    phds.year.val(rowEl.find('.year').text());
    phds.area.val(rowEl.find('.area').text());
    phds.otherSup.val(rowEl.find('.otherSup').text());
    phds.number.val(rowEl.find('.number').text());
    phds.status.val(rowEl.find('.status').text());
    

    $.ajax({
        url: '/phd/'+name,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab3').click();
        }
    });
})

//DELETE
phds.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var name = rowEl.find('.name').text();
    $.ajax({
        url: '/phd/'+name,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab3').click();
        }
    });
});

$('#tab4').on('click', function() {
        $.ajax({
            url: '/journal',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
              var tbodyEl = $('tbody');
                
                tbodyEl.html('');
                score = 0
                response.journals.forEach(function(journal) {
                   
                    if (journal.areaofRes == "SCI")
                        score = score + 3
                    else if (journal.areaofRes == "SCOPUS")
                        score = score + 2
                    else if (journal.areaofRes == 'Unpaid')
                        score = score + 1
                    else
                        score = score
                    tbodyEl.append('\
                        <tr>\
                            <td class="author">' + journal.author + '</td>\
                            <td class="title">' + journal.title + '</td>\
                            <td class="journal">' + journal.journal + '</td>\
                            <td class="vol">' + journal.vol + '</td>\
                            <td class="year">' + journal.year + '</td>\
                            <td class="page">' + journal.page + '</td>\
                            <td class="coauthor">' + journal.coauthor + '</td>\
                            <td class="status">' + journal.status + '</td>\
                            <td class="areaofRes">' + journal.areaofRes + '</td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
                calc()
            }
        });
    });
    //POST Request
    journals.submit.on('click',function(event){
        console.log("button clicked");
        event.preventDefault();
        if (journals.author.val() == '' || journals.title.val() == '' || journals.page.val()=='')
        {
            alert("Please Enter Something !")
            return;
        }
        
        $.ajax({
            url: '/journal',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({  
                    author     : journals.author.val(),    
                    title     : journals.title.val(), 
                    journal       : journals.journal.val(), 
                    vol     : journals.vol.val(), 
                    year    : journals.year.val(),
                    page   : journals.page.val(), 
                    coauthor  : journals.coauthor.val(), 
                    status   : journals.status.val(), 
                    areaofRes      : journals.areaofRes.val()
                }),
            success: function(response) {
                console.log(response); 
                document.querySelector('#form8').reset();
                $('#tab4').click();
            }
        });    
    })
    //UPDATE
    journals.table.on('click', '.update-button',function(){
        var rowEl = $(this).closest('tr');
        var title = rowEl.find('.title').text();
        journals.author.val(rowEl.find('.author').text());
        journals.title.val(rowEl.find('.title').text());
        journals.journal.val(rowEl.find('.journal').text());
        journals.vol.val(rowEl.find('.vol').text());
        journals.year.val(rowEl.find('.year').text());
        journals.page.val(rowEl.find('.page').text());
        journals.coauthor.val(rowEl.find('.coauthor').text());
        journals.status.val(rowEl.find('.status').text());
        journals.areaofRes.val(rowEl.find('.areaofRes').text());

        $.ajax({
            url: '/journal/'+title,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab4').click();
            }
        });
    })

    //DELETE
    journals.table.on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        console.log(rowEl);
        var title = rowEl.find('.title').text();
        $.ajax({
            url: '/journal/'+title,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab4').click();
            }
        });
    });
	
	
$('#tab5').on('click', function() {
        $.ajax({
            url: '/paper',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
              var tbodyEl = $('tbody');
              calc()
              score=0
                tbodyEl.html('');
                
                response.papers.forEach(function(paper) {
                    if (paper.areaofRes == 'SCOPUS')
                        score = score + 1
                    else
                        score = score + 0.5
                    tbodyEl.append('\
                        <tr>\
                            <td class="author">' + paper.author + '</td>\
                            <td class="title">' + paper.title + '</td>\
                            <td class="confjournalName">' + paper.confjournalName + '</td>\
                            <td class="year">' + paper.year + '</td>\
                            <td class="page">' + paper.page + '</td>\
                            <td class="coauthor">' + paper.coauthor + '</td>\
                            <td class="areaofRes">' + paper.areaofRes + '</td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
                calc();
            }
        });
    });
    //POST Request
    papers.submit.on('click',function(event){
        console.log("button clicked");
        event.preventDefault();
        if (papers.author.val() == '' || papers.title.val() == '' || papers.page.val() == '') {
            alert("Please Enter Something !")
            return;
        }
        $.ajax({
            url: '/paper',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({  
                    author     : papers.author.val(),    
                    title     : papers.title.val(), 
                    confjournalName       : papers.confjournalName.val(),
                    year    : papers.year.val(),
                    page   : papers.page.val(), 
                    coauthor  : papers.coauthor.val(),
                    areaofRes      : papers.areaofRes.val()
                }),
            success: function(response) {
                console.log(response); 
                document.querySelector('#form9').reset();
                $('#tab5').click();
            }
        });    
    })
    //UPDATE
    papers.table.on('click', '.update-button',function(){
        var rowEl = $(this).closest('tr');
        var title = rowEl.find('.title').text();
        papers.author.val(rowEl.find('.author').text());
        papers.title.val(rowEl.find('.title').text());
        papers.confjournalName.val(rowEl.find('.confjournalName').text());
        papers.year.val(rowEl.find('.year').text());
        papers.page.val(rowEl.find('.page').text());
        papers.coauthor.val(rowEl.find('.coauthor').text());
        papers.areaofRes.val(rowEl.find('.areaofRes').text());

        $.ajax({
            url: '/paper/'+title,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab5').click();
            }
        });
    })

    //DELETE
    papers.table.on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        console.log(rowEl);
        var title = rowEl.find('.title').text();
        $.ajax({
            url: '/paper/'+title,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#tab5').click();
            }
        });
    });
	
	
	
//6
$('#tab6').on('click', function() {
   
    $.ajax({
        url: '/book',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.books.forEach(function(book) {
                if (book.type=="Authored" )
                    score = score + 2
                else
                    score = score + 1
                tbodyEl.append('\
                    <tr>\
                        <td class="authors">' + book.author + '</td>\
                        <td class="title">' + book.title + '</td>\
                        <td class="publisher">' + book.publisher + '</td>\
                        <td class="volume">' + book.volume + '</td>\
                        <td class="year">' + book.year + '</td>\
                        <td class="pages">' + book.pages + '</td>\
						<td class="type">' + book.type + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 4)
                score = 4
            
            calc()
        }
    });
});
//POST Request
books.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (books.authors.val() == '' || books.title.val() == '' || books.pages.val() == '') {
        alert("Please Enter Something !")
        return;
    }
    $.ajax({
        url: '/book',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    author        : books.authors.val(),
                    title        : books.title.val(),
                    publisher        : books.publisher.val(),
                    volume    : books.volume.val(),
                    year      : books.year.val(),
                    pages  : books.pages.val(),
					type		: books.type.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form10').reset();
            $('#tab6').click();
        }
    });    
})
//UPDATE
books.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    books.authors.val(rowEl.find('.authors').text());
    books.title.val(rowEl.find('.title').text());
    books.publisher.val(rowEl.find('.publisher').text());
    books.volume.val(rowEl.find('.volume').text());
    books.year.val(rowEl.find('.year').text());
    books.pages.val(rowEl.find('.pages').text());
	books.type.val(rowEl.find('.type').text());
    

    $.ajax({
        url: '/book/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab6').click();
        }
    });
})

//DELETE
books.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/book/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab6').click();
        }
    });
});

//7
$('#tab7').on('click', function() {
   
    $.ajax({
        url: '/report',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.reports.forEach(function(report) {
		score=score+1;
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + report.title + '</td>\
                        <td class="particulars">' + report.particulars + '</td>\
                        <td class="authors">' + report.authors + '</td>\
                        <td class="remarks">' + report.remarks + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 2)
                score = 2
            calc() 
        }
    });
});
//POST Request
reports.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (reports.authors.val() == '' || reports.title.val() == '' || reports.particulars.val() == '') {
        alert("Please Enter Something !")
        return;
    }
    $.ajax({
        url: '/report',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : reports.title.val(),
                    particulars        : reports.particulars.val(),
                    authors        : reports.authors.val(),
                    remarks    : reports.remarks.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form11').reset();

            $('#tab7').click();
        }
    });    
})
//UPDATE
reports.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    reports.title.val(rowEl.find('.title').text());
    reports.particulars.val(rowEl.find('.particulars').text());
    reports.authors.val(rowEl.find('.authors').text());
    reports.remarks.val(rowEl.find('.remarks').text());
    
    $.ajax({
        url: '/report/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab7').click();
        }
    });
})

//DELETE
reports.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/report/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab7').click();
        }
    });
});

//8
$('#tab8').on('click', function() {
   
    $.ajax({
        url: '/srp',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.srps.forEach(function(srp) {
		if(srp.financial>=1000000)
		score=score+5;
		else
		score=score+2

                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + srp.title + '</td>\
                        <td class="fundingAgency">' + srp.fundingAgency + '</td>\
                        <td class="financial">' + srp.financial + '</td>\
                        <td class="year">' + srp.year + '</td>\
                        <td class="period">' + srp.period + '</td>\
                        <td class="status">' + srp.status + '</td>\
						 <td class="otherInvest">' + srp.otherInvest + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            calc()
        }
    });
});
//POST Request
srps.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (srps.title.val()==''|| srps.fundingAgency.val()=='' || srps.financial.val()=='')
    {
        alert("Please enter someting !")
        return;

    }
    $.ajax({
        url: '/srp',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : srps.title.val(),
                    fundingAgency        : srps.fundingAgency.val(),
                    financial        : srps.financial.val(),
                    year    : srps.year.val(),
                    period      : srps.period.val(),
                    status  : srps.status.val(),
					otherInvest  : srps.otherInvest.val()
                   
            }),
        success: function(response) {
            console.log(response);
            document.querySelector('#form12').reset();
            $('#tab8').click();
        }
    });    
})
//UPDATE
srps.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    srps.title.val(rowEl.find('.title').text());
    srps.fundingAgency.val(rowEl.find('.fundingAgency').text());
    srps.financial.val(rowEl.find('.financial').text());
    srps.year.val(rowEl.find('.year').text());
    srps.period.val(rowEl.find('.period').text());
    srps.status.val(rowEl.find('.status').text());
	srps.otherInvest.val(rowEl.find('.otherInvest').text());
    

    $.ajax({
        url: '/srp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab8').click();
        }
    });
})

//DELETE
srps.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/srp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab8').click();
        }
    });
});

//9
$('#tab9').on('click', function() {
   
    $.ajax({
        url: '/cp',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.cps.forEach(function(cp) {
                if (cp.financial > 500000)
                    score = score + 1
                else
                    score = score + 0.5
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + cp.title + '</td>\
                        <td class="fundingAgency">' + cp.fundingAgency + '</td>\
                        <td class="financial">' + cp.financial + '</td>\
                        <td class="year">' + cp.year + '</td>\
                        <td class="period">' + cp.period + '</td>\
                        <td class="status">' + cp.status + '</td>\
						<td class="otherInvest">' + cp.otherInvest + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 10)
                score = 10
            calc()
        }
    });
});
//POST Request
cps.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (cps.title.val() == '' || cps.year.val() == '' || cps.status.val()=='' )
    {
        alert('Please enter something ');
        return ;
    }
    $.ajax({
        url: '/cp',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : cps.title.val(),
                    fundingAgency        : cps.fundingAgency.val(),
                    financial        : cps.financial.val(),
                    year    : cps.year.val(),
                    period      : cps.period.val(),
                    status  : cps.status.val(),
					otherInvest  : cps.otherInvest.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form13').reset();
            $('#tab9').click();
        }
    });    
})
//UPDATE
cps.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    cps.title.val(rowEl.find('.title').text());
    cps.fundingAgency.val(rowEl.find('.fundingAgency').text());
    cps.financial.val(rowEl.find('.financial').text());
    cps.year.val(rowEl.find('.year').text());
    cps.period.val(rowEl.find('.period').text());
    cps.status.val(rowEl.find('.status').text());
	cps.otherInvest.val(rowEl.find('.otherInvest').text());
    

    $.ajax({
        url: '/cp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab9').click();
        }
    });
})

//DELETE
cps.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/cp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab9').click();
        }
    });
});

//10

$('#tab10').on('click', function() {
   
    $.ajax({
        url: '/patent',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
		score=0
            response.patents.forEach(function(patent) {
		if(patent.status='Awarded')
	 	score=score+5;
		else 
		score=score+2;

                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + patent.title + '</td>\
                        <td class="status">' + patent.status + '</td>\
                        <td class="members">' + patent.members + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
	calc();
        }
    });
});
//POST Request
patents.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if ( patents.title.val()=='' || patents.members.val()==''|| patents.status.val()=='')
    {
        alert('Please fill all the fields !');
        return ;
    }
    $.ajax({
        url: '/patent',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : patents.title.val(),
                    status        : patents.status.val(),
                    members        : patents.members.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form14').reset();
            $('#tab10').click();
        }
    });    
})
//UPDATE
patents.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    patents.title.val(rowEl.find('.title').text());
    patents.status.val(rowEl.find('.status').text());
    patents.members.val(rowEl.find('.members').text());
    

    $.ajax({
        url: '/patent/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab10').click();
        }
    });
})

//DELETE
patents.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/patent/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab10').click();
        }
    });
});

//11

$('#tab11').on('click', function() {
   
    $.ajax({
        url: '/lecture',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.lectures.forEach(function(lecture) {
		score=score+1;
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + lecture.title + '</td>\
                        <td class="date">' + lecture.date + '</td>\
                        <td class="place">' + lecture.place + '</td>\
                        <td class="programme">' + lecture.programme + '</td>\
                        <td class="info">' + lecture.info + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 2)
                score = 2
            calc()
        }
    });
});
//POST Request
lectures.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (lectures.title.val()==''|| lectures.date.val()==''|| lectures.programme.val()=='')
    {
        alert("Please Enter all the fields !")
        return ;
    }
    $.ajax({
        url: '/lecture',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : lectures.title.val(),
                    date        : lectures.date.val(),
                    place        : lectures.place.val(),
                    programme    : lectures.programme.val(),
                    info      : lectures.info.val()
                   
            }),
        success: function(response) {
            console.log(response);
            document.querySelector('#form15').reset();
            $('#tab11').click();
        }
    });    
})
//UPDATE
lectures.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    lectures.title.val(rowEl.find('.title').text());
    lectures.date.val(rowEl.find('.date').text());
    lectures.place.val(rowEl.find('.place').text());
    lectures.programme.val(rowEl.find('.programme').text());
    lectures.info.val(rowEl.find('.info').text());
    

    $.ajax({
        url: '/lecture/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab11').click();
        }
    });
})

//DELETE
lectures.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/lecture/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab11').click();
        }
    });
});

//12

$('#tab12').on('click', function() {
   
    $.ajax({
        url: '/orgCourse',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.orgCourses.forEach(function(orgCourse) {
                if (orgCourse.type == 'International')
                    score = score + 2
                else
                    score = score + 1
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + orgCourse.title + '</td>\
                        <td class="type">' + orgCourse.type + '</td>\
                        <td class="sponsoredBy">' + orgCourse.sponsoredBy + '</td>\
                        <td class="date">' + orgCourse.date + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            calc()
        }
    });
});
//POST Request
orgCourses.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (orgCourses.title.val()==''|| orgCourses.type.val()=='' || orgCourses.date.val()=='')
    {
        alert('Please enter all the fields !')
        return;
    }
    $.ajax({
        url: '/orgCourse',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : orgCourses.title.val(),
                    type        : orgCourses.type.val(),
                    sponsoredBy        : orgCourses.sponsoredBy.val(),
                    date    : orgCourses.date.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form16').reset();
            $('#tab12').click();
        }
    });    
})
//UPDATE
orgCourses.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    orgCourses.title.val(rowEl.find('.title').text());
    orgCourses.type.val(rowEl.find('.type').text());
    orgCourses.sponsoredBy.val(rowEl.find('.sponsoredBy').text());
    orgCourses.date.val(rowEl.find('.date').text());
    

    $.ajax({
        url: '/orgCourse/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab12').click();
        }
    });
})

//DELETE
orgCourses.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/orgCourse/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab12').click();
        }
    });
});
//13

$('#tab13').on('click', function() {
   
    $.ajax({
        url: '/stc',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.stcs.forEach(function(stc) {
                if (stc.type == 'Outside')
                    score = score + 1
                else
                    score = score + 0.5
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + stc.title + '</td>\
                        <td class="sponsoredBy">' + stc.sponsoredBy + '</td>\
                        <td class="date">' + stc.date + '</td>\
                        <td class="type">' + stc.type + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 2)
                score = 2
            
            calc()
        }
    });
});
//POST Request
stcs.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (stcs.title.val()==''|| stcs.sponsoredBy.val()==''|| stcs.date.val()=='')
    {
        alert("Please Enter all the fields")
        return;
    }
    $.ajax({
        url: '/stc',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title        : stcs.title.val(),
                    sponsoredBy        : stcs.sponsoredBy.val(),
                    type        : stcs.type.val(),
                    date    : stcs.date.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form17').reset();
            $('#tab13').click();
        }
    });    
})
//UPDATE
stcs.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    stcs.title.val(rowEl.find('.title').text());
    stcs.sponsoredBy.val(rowEl.find('.sponsoredBy').text());
    stcs.type.val(rowEl.find('.type').text());
    stcs.date.val(rowEl.find('.date').text());
    

    $.ajax({
        url: '/stc/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab13').click();
        }
    });
})

//DELETE
stcs.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/stc/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab13').click();
        }
    });
});

//14
$('#tab14').on('click', function() {
   
    $.ajax({
        url: '/visit',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.visits.forEach(function(visit) {
                score = score + 1
                 tbodyEl.append('\
                    <tr>\
                        <td class="place">' + visit.place + '</td>\
                        <td class="purpose">' + visit.purpose + '</td>\
                        <td class="date">' + visit.date + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 2)
                score = 2
            calc()
        }
    });
});
//POST Request
visits.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (visits.place.val()==''|| visits.purpose.val()==''|| visits.date.val()=='')
    {
        alert('Please enter all the details !')
        return ;
    }
    $.ajax({
        url: '/visit',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    place        : visits.place.val(),
                    purpose        : visits.purpose.val(),
                    date        : visits.date.val()
                   
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form18').reset();
            $('#tab14').click();
        }
    });    
})
//UPDATE
visits.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var place = rowEl.find('.place').text();
    visits.place.val(rowEl.find('.place').text());
    visits.purpose.val(rowEl.find('.purpose').text());
    visits.date.val(rowEl.find('.date').text());
    

    $.ajax({
        url: '/visit/'+place,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab14').click();
        }
    });
})

//DELETE
visits.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var place = rowEl.find('.place').text();
    $.ajax({
        url: '/visit/'+place,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab14').click();
        }
    });
});

//4d tab15
$('#tab15').on('click', function() {
   
    $.ajax({
        url: '/extension',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.extensions.forEach(function(extension) {
                score = score + 1
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + extension.title + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 5)
                score = 5
            calc()
        }
    });
});
//POST Request
extensions.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if ( extensions.input.val()=='')
    {
        alert("Please enter something !")
        return;
    }
    $.ajax({
        url: '/extension',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title:extensions.input.val()
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form19').reset();
            $('#tab15').click();
        }
    });    
})
//UPDATE
extensions.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    extensions.input.val(rowEl.find('.title').text());
     

    $.ajax({
        url: '/extension/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab15').click();
        }
    });
})

//DELETE
extensions.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/extension/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab15').click();
        }
    });
});


//5a tab16
$('#tab16').on('click', function() {
   
    $.ajax({
        url: '/departmentResp',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.departmentResps.forEach(function(extension) {
		score=score+1;
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + extension.title + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 2)
                score = 2

            calc()
        }
    });
});
//POST Request
depts.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (depts.input.val()=='')
    {
        alert("Please enter something !")
        return;
    }
    $.ajax({
        url: '/departmentResp',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title:depts.input.val()
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form20').reset();
            $('#tab16').click();
        }
    });    
})
//UPDATE
depts.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    depts.input.val(rowEl.find('.title').text());
     

    $.ajax({
        url: '/departmentResp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab16').click();
        }
    });
})

//DELETE
depts.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/departmentResp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab16').click();
        }
    });
});
//5b Institute level
$('#tab17').on('click', function() {
   
    $.ajax({
        url: '/insituteResp',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.insituteResps.forEach(function(extension) {
                score = score + 2 
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + extension.title + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 5)
                score = 5
            calc()
        }
    });
});
//POST Request
institutes.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (institutes.input.val()=='')
    {
        alert("Please enter something !")
        return ;
    }
    $.ajax({
        url: '/insituteResp',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title:institutes.input.val()
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form21').reset();
            $('#tab17').click();
        }
    });    
})
//UPDATE
institutes.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    institutes.input.val(rowEl.find('.title').text());
     

    $.ajax({
        url: '/insituteResp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab17').click();
        }
    });
})

//DELETE
institutes.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/insituteResp/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab17').click();
        }
    });
});
//5c other assignments

$('#tab18').on('click', function() {
   
    $.ajax({
        url: '/assignment',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score = 0
            response.assignments.forEach(function(extension) {
                score = score + 1
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + extension.title + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score > 4)
                score = 4
            calc()
        }
    });
});
//POST Request
assignments.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (assignments.input.val()=='')
    {
        alert("Please enter something !");
        return ;
    }
    $.ajax({
        url: '/assignment',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title:assignments.input.val()
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form22').reset();
            $('#tab18').click();
        }
    });    
})
//UPDATE
assignments.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    assignments.input.val(rowEl.find('.title').text());
     

    $.ajax({
        url: '/assignment/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab18').click();
        }
    });
})

//DELETE
assignments.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/assignment/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab18').click();
        }
    });
});
// 6 other works
$('#tab19').on('click', function() {
   
    $.ajax({
        url: '/other',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
          var tbodyEl = $('tbody');

            tbodyEl.html('');
            score =0
            response.others.forEach(function(other) {
                score=score+1
                console.log(other.title);
                tbodyEl.append('\
                    <tr>\
                        <td class="title">' + other.title + '</td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
            if (score>2)
            score=2
            calc()
        }
    });
});
//POST Request
others.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    score=0
    if (others.input.val()=='')
    {
        alert("Please enter something !")
        return ;
    }
    $.ajax({
        url: '/other',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    title:others.input.val()
            }),
        success: function(response) {
            console.log(response); 
            document.querySelector('#form23').reset();
            $('#tab19').click();
        }
    });    
})
//UPDATE
others.table.on('click', '.update-button',function(){
    var rowEl = $(this).closest('tr');
    var title = rowEl.find('.title').text();
    others.input.val(rowEl.find('.title').text());
     

    $.ajax({
        url: '/other/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab19').click();
        }
    });
})

//DELETE
others.table.on('click', '.delete-button', function() {
    var rowEl = $(this).closest('tr');
    console.log(rowEl);
    var title = rowEl.find('.title').text();
    $.ajax({
        url: '/other/'+title,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $('#tab19').click();
        }
    });
});

//Self Appraisel
//GET REQUEST

$('#tab20').on('click', function() {
   score=0
   calc()
    $.ajax({
        url: '/self',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
                self.input.val(response.self.comment);
                if(self.input.val()!=""){
                    self.input.prop("disabled", true);
                }
        }
    });
   
});
//POST REQUEST
self.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (self.input.val()=="")
    {
        alert("Please enter something ")
        return ;
    }
    //send post request
    $.ajax({
        url: '/self',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    comment: self.input.val(),                   
            }),
        success: function(response) {
            console.log(response); 
            $('#tab20').click();
        }
    });  
    self.input.prop("disabled", true);
})
self.edit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    self.input.prop("disabled", false);
})

//Comments
//GET REQUEST
$('#tab21').on('click', function() {
    
    score = 0
    calc()
    $.ajax({
        url: '/comment',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            comments.input.val(response.comment.comment);
            if(comments.input.val()!=""){
                comments.input.prop("disabled", true);
            }
        }
    });
    
});
//POST REQUEST
comments.submit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    if (comments.input.val()=='')
    {
        alert("Please Enter Something !")
        return ;
    }
    //send post request
    $.ajax({
        url: '/comment',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({  
                    comment: comments.input.val(),                   
            }),
        success: function(response) {
            console.log(response); 
            $('#tab21').click();
        }
    });  
    comments.input.prop("disabled", true);
})
comments.edit.on('click',function(event){
    console.log("button clicked");
    event.preventDefault();
    //send post request
    comments.input.prop("disabled", false);
})


// At the beginning
$(document).ready(function(){
    console.log(curtab);
    $(curtab).click();
})  
})

