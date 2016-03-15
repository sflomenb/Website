var Project = function(name, langs) {
  self = this;
  this.name = name;
  this.language = [];
  langs.forEach(function(lang) {
    self.language.push(lang);
  });
}

var projects = [];
var projectViews = document.getElementsByClassName("project-group");

var getInfo = function(el) {
  document.getElementById()
}

for(var i = 0; i < projectViews.length; i++) {
  $id = projectViews[i].id;
  projects.push(new Project($id, document.getElementById($id+"-knowledge").innerHTML.substr(26).split(", ")));
}

var clearFilter = function() {
  projects.forEach(function(project) {
    document.getElementById(project.name).classList.remove('hide');
  })
};

var buttons = document.getElementsByClassName('btn');
for (var i = 0; i < buttons.length-1; i++) {
  buttons[i].addEventListener('click', function(ev) {
    clearFilter();
    buttonLang = ev.target.innerText;
    projectsToHide = [];
    projects.forEach(function(project) {
      var hide = false;
      project.language.forEach(function(lang) {
        if(lang == buttonLang.replace(/ /g,'')) {
          hide = true;
        }
      })
      if(!hide) {
        projectsToHide.push(project);
      }
      hide = false;
    })

    projectsToHide.forEach(function(projectToHide) {
      document.getElementById(projectToHide.name).classList.add('hide');
    })
  });

}
document.getElementById("clearBtn").addEventListener('click', clearFilter);


var getLangs = function(project) {
  var result;
  project.language.forEach(function(lang) {
    if(!result) {
      result = lang;
    }
    else {
      result += " " + lang;
    }
  })
  return project.language
}
