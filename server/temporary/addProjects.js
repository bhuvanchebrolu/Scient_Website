require("dotenv").config();
const mongoose = require("mongoose");
const {rmiProjects,dcProjects,everProjects,ecellProjects,spiderProjects,psiProjects,forceHyperloopProject,dataByteProjects,threeDProjects,orbitProjects} = require("./allProjects.js");
const Project = require("../models/Project.js");
const Club = require("../models/Club.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/mybooking";


const clubName =["E-Cell","SPIDER","FORCE HYPERLOOP", "DESIGNERS CONSORTIUM","RMI","PSI","EVER","3D AERODYNAMICS","DATABYTE","ORBIT"];
const clubMap={
  0:ecellProjects,
  1:spiderProjects,
  2:forceHyperloopProject,
  3:dcProjects,
  4:rmiProjects,
  5:psiProjects,
  6:everProjects,
  7:threeDProjects,
  8:dataByteProjects,
  9:orbitProjects
}
async function main() {
  console.log("MONGO_URL:", MONGO_URL);
  await mongoose.connect(MONGO_URL);
  console.log("Connection has been established");
  for(let i=0;i<10;i++){
    await initDB(clubName[i],i);
  }
  
  return;
}
const initDB = async (club,i) => {
  let currClub = await Club.findOne({ name: club});
  if (!currClub) {
    console.error(`Club "${clubName}" not found`);
    return;
  }

  const deleted = await Project.deleteMany({ club: currClub._id });

  console.log(
    `Deleted ${deleted.deletedCount} existing projects for "${clubName}"`
  );
  const projectsToInsert = clubMap[i].map((proj) => ({
    name: proj.name,
    description: proj.description,
    year: proj.year,
    image: proj.image || {},
    club: currClub._id,
  }));

  const inserted = await Project.insertMany(projectsToInsert);
  console.log(`Inserted ${inserted.length} projects for club "${clubName}"`);

  // Update club's projects array with new project IDs
  currClub.projects = inserted.map(p => p._id);
  await currClub.save();
  console.log(`Updated "${club}" club document with project references`);
  return;
};
main();