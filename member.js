function skillsMember() {
  var member = this;
  var skills = this.skills;

  function getSkills() {
    return skills;
  }

  function addSkill(skill) {
    skills.push(skill);
  }

  function removeSkill(skill) {
    var index = skills.indexOf(skill);
    if (index > -1) {
      skills.splice(index, 1);
    }
  }

  member.getSkills = getSkills;
  member.addSkill = addSkill;
  member.removeSkill = removeSkill;
}