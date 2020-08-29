"use strict"

let superTeam = {
    title: "",
    leader: "",
    members: [],
    memberCount: 0,
    agenda: "",
    isEvil: false
};
let res = "";

superTeam.title = prompt("Name: ");
superTeam.leader = prompt("Leader: ");
let leaders = prompt("Members: ");
superTeam.members = leaders.split(',');
superTeam.memberCount = superTeam.members.length;
superTeam.agenda = prompt("Agenda: ");
superTeam.isEvil = prompt("is Evil?: ");
res = "Here`s the team:\n" + "name - " + superTeam.title + "\n" + 
    "leader - " + superTeam.leader + "\n" + "members - " + superTeam.members + "\n" +
    "memberCount - " + superTeam.memberCount + "\n" + "agenda - " + superTeam.agenda + "\n" +
    "isEvil - " + Boolean(superTeam.isEvil);
alert(res);
