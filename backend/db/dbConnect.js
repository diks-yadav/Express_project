const url=`${process.env.DB_URL}`;
const {MongoClient}=require("mongodb");
async function dbConnect(){
    console.log("db connection");
      const client=new MongoClient(url);
      const db=client.db("Eduacation_Managament")
      const collection =db.collection("Users");
      return collection;
}

module.exports=dbConnect;