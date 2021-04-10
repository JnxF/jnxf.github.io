// tsc -w projects.ts
;
function sup2str(s) {
    if (s.url) {
        return "<a href=\"" + s.url + "\">" + s.name + "</a>";
    }
    return s.name;
}
function month2text(i) {
    return ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][i];
}
var MonthList;
(function (MonthList) {
    MonthList[MonthList["January"] = 1] = "January";
    MonthList[MonthList["February"] = 2] = "February";
    MonthList[MonthList["March"] = 3] = "March";
    MonthList[MonthList["April"] = 4] = "April";
    MonthList[MonthList["May"] = 5] = "May";
    MonthList[MonthList["June"] = 6] = "June";
    MonthList[MonthList["July"] = 7] = "July";
    MonthList[MonthList["August"] = 8] = "August";
    MonthList[MonthList["September"] = 9] = "September";
    MonthList[MonthList["October"] = 10] = "October";
    MonthList[MonthList["November"] = 11] = "November";
    MonthList[MonthList["December"] = 12] = "December";
})(MonthList || (MonthList = {}));
var henrique = {
    name: "Henrique Debarba",
    url: "https://pure.itu.dk/portal/en/persons/henrique-galvan-debarba(4ac798ea-a458-473f-ba46-2e7515cf72e4).html"
};
var johansen = {
    name: "Mads Johansen Lassen",
    url: "https://pure.itu.dk/portal/da/persons/mads-johansen-lassen(da1b2e0b-9208-4171-8b23-59f06a1163a9).html"
};
var wasowski = {
    name: "Andrzej Wąsowski",
    url: "http://www.itu.dk/people/wasowski/"
};
var seidl = {
    name: "Christoph Seidl",
    url: "https://scholar.google.de/citations?user=QbqbY4kAAAAJ"
};
var leon = {
    name: "Leon Derczynski",
    url: "https://scholar.google.com/citations?user=d8iwqa8AAAAJ"
};
var joaquim = {
    name: "Joaquim Giret-Imhaus"
};
var sestoft = {
    name: "Peter Sestoft",
    url: "http://www.itu.dk/people/sestoft/"
};
var lystrom = {
    name: "Rasmus Lystrøm",
    url: "https://www.ondfisk.dk/"
};
var zhoulai = {
    name: "Zhoulai Fu",
    url: "https://zhoulaifu.com/"
};
var ferrein = {
    name: "Alexander Ferrein",
    url: "https://scholar.google.com/citations?user=ZKQRE7cAAAAJ"
};
var corbato = {
    name: "Carlos Hernández Corbato",
    url: "https://www.tudelft.nl/staff/c.h.corbato/"
};
var anthony = {
    name: "Anthony Remazeilles",
    url: "https://aremazeilles.gitlab.io/"
};
var jon = {
    name: "Jon Azpiazu",
    url: "https://es.linkedin.com/in/jonazpiazu/"
};
var adam = {
    name: "Adam Alami",
    url: "https://scholar.google.com/citations?user=a1CgIpgAAAAJ"
};
var projects = [
    {
        name: "Cross-IDE ROS Integration Tool",
        short_description: "A Visual Studio Code extension for managing ROS artifacts.",
        year: 2020,
        month: MonthList.August,
        url: "https://github.com/JnxF/cross-ide-ros-integration-tool",
        supervisors: [wasowski, seidl],
        image: "cross.png"
    },
    {
        name: "Budget Tower Defense",
        short_description: "A Tower Defense game implemented using C++.",
        year: 2019,
        month: MonthList.December,
        authors: [joaquim],
        supervisors: [henrique, johansen],
        image: "budget.png"
    },
    {
        name: "Advent of Code 2020",
        short_description: "The 2020 edition of the most famous advent calendar of code.",
        year: 2020,
        month: MonthList.December,
        url: "https://github.com/jnxf/advent-of-code-2020",
        image: "advent.png"
    },
    {
        name: "Extending and enhancing the C5 library",
        short_description: "TBD",
        year: 2019,
        month: MonthList.June,
        url: "https://github.com/sestoft/C5",
        supervisors: [sestoft, lystrom],
        image: "c5.png"
    },
    {
        name: "e-Health Eurocampus",
        short_description: "TBD",
        image: "ehealth.png",
        year: 2019,
        month: MonthList.July,
        authors: ["Melpo Pittara", "Philip Ebner", "Stefan Dimitrov"].map(function (n) { return { name: n }; })
    },
    {
        name: "Drawploy",
        year: 2019,
        month: MonthList.April,
        short_description: "TBD",
        image: "drawploy.png"
    }
];
var publications = [
    {
        name: "Dangerous Liaisons: the Impact of Phonetics in False Friends Detection Among Romance Languages",
        supervisors: [leon],
        document_url: "publications/false_friends.pdf",
        url: "https://github.com/JnxF/nlp-dl",
        year: 2020,
        month: MonthList.August
    },
    {
        name: "D3.7 Experiences From Test and Analysis in the ROS Project",
        subtitle: "ROS-Industrial Quality-Assured Robot Software Components – ROSIN",
        supervisors: [wasowski],
        year: 2021,
        month: MonthList.January,
        authors: [wasowski, zhoulai]
    },
    {
        name: "D3.4 Testing-Based Validation Infrastructure for ROS",
        subtitle: "ROS-Industrial Quality-Assured Robot Software Components – ROSIN",
        supervisors: [wasowski, ferrein, corbato],
        year: 2020,
        month: MonthList.June,
        authors: [zhoulai, anthony, wasowski, jon, adam]
    }
];
function printProjects(projects) {
    projects.sort(function (b, a) { return a.year + a.month / 12 - b.year - b.month / 12; });
    var msg = "<div class='row'>";
    var index = 0;
    for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
        var p = projects_1[_i];
        msg += "\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4\">\n                    <div class=\"card-img-top\"><img src=\"images/" + p.image + "\"></div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">" + p.name + "</h4>\n                        <p class=\"card-text\">" + p.short_description + "</p>\n                        <button class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#modal-" + index + "\">Read more</button>\n                    </div>\n                </div>\n            </div>";
        index += 1;
    }
    msg += "</div>";
    return msg;
}
function printPublications(publications) {
    var _a;
    publications.sort(function (b, a) { return a.year + a.month / 12 - b.year - b.month / 12; });
    var paper = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-text\" viewBox=\"0 0 16 16\">\n    <path d=\"M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z\"/>\n    <path d=\"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/>\n    </svg>";
    var msg = "<ul class=\"list-group\">";
    for (var _i = 0, publications_1 = publications; _i < publications_1.length; _i++) {
        var p = publications_1[_i];
        msg += "<li class=\"list-group-item\">";
        if (p.url) {
            msg += "<a href=\"" + p.url + "\"><em>" + p.name + "</em></a>";
        }
        else {
            msg += "<em>" + p.name + "</em>";
        }
        msg += ". ";
        if (p.subtitle) {
            msg += p.subtitle + ". ";
        }
        msg += "<br>";
        msg += ((_a = month2text(p.month)) !== null && _a !== void 0 ? _a : "") + " " + p.year + ". ";
        if (p.authors) {
            var real_authors = p.authors;
            real_authors.push({ name: "Francisco Martínez Lasaca" });
            msg += real_authors.map(sup2str).join(", ") + ". ";
        }
        if (p.supervisors) {
            msg += "Supervised by " + p.supervisors.map(sup2str).join(", ") + ".";
        }
        if (p.document_url) {
            msg += " <a style=\"white-space: nowrap;\" href=\"" + p.document_url + "\">" + paper + " Paper</a>";
        }
        msg += "</li>";
    }
    msg += "</ul>";
    return msg;
}
function printModals(projects) {
    var _a, _b;
    var index = 0;
    var msg = "";
    for (var _i = 0, projects_2 = projects; _i < projects_2.length; _i++) {
        var project = projects_2[_i];
        var supervisors = project.supervisors ? "<h5>Supervisors</h5>\n        <p>" + project.supervisors.map(sup2str).join(", ") + "</p>" : "";
        var real_authors = project.authors ? project.authors.concat({ name: "Francisco Martínez Lasaca" }) : [{ name: "Francisco Martínez Lasaca" }];
        var authors = "<h5>Author" + (real_authors.length >= 2 ? "s" : "") + "</h5>" + "<p>" + real_authors.map(sup2str).join(", ") + "</p>";
        var link_list = (_a = [project.url]) !== null && _a !== void 0 ? _a : [];
        var links = "<h5>Link" + (link_list.length >= 2 ? "s" : "") + "</h5>" + "<p>" + link_list.map(function (l) { return "<a href=\"" + l + "\">GitHub repository</a>"; }).join("<br>") + "</p>";
        msg += "<div class=\"modal fade\" id=\"modal-" + index + "\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">\n                            " + project.name + "\n                        </h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">\u00D7</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <img src=\"images/" + project.image + "\">\n                        <p class=\"mt-3\">" + project.short_description + "</p>\n                        <h5>Date</h5>\n                        <p>" + ((_b = month2text(project.month)) !== null && _b !== void 0 ? _b : "") + " " + project.year + "</p>\n                        " + authors + "\n                        " + supervisors + " \n                        " + links + "\n                    </div>\n                </div>\n            </div>\n        </div>";
        index += 1;
    }
    return msg;
}
window.onload = function () {
    // document.getElementById("pub").innerHTML = projects.map(printProject).join(" ");
    document.getElementById("publications").innerHTML = printPublications(publications);
    document.getElementById("projects").innerHTML = printProjects(projects);
    document.getElementById("modals").innerHTML = printModals(projects);
};
