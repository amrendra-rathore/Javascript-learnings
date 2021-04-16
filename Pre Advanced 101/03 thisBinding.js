const amrendra = {
  firstName: "Amrendra",
  lastName: "Rathore",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// amrendra.getInfo();
// dj.getInfo();

// var djInfo = amrendra.getInfo.bind(dj);
// djInfo();

amrendra.getInfo.call(dj);
