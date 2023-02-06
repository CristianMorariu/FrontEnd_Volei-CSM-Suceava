
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { response } = require("express");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false}));

app.set("view engine","ejs");

app.post("/inregistrare", async(req, res) => {
    try {
          
        
       const {Categorie} = req.body;
        const {Nume} = req.body;
        const {Prenume} = req.body;
       const {Email} = req.body;
        const {Parola}=req.body;
      

        const newAdmin = await pool.query ("INSERT INTO Administrare_Pagina(Nume,Prenume,Email,Parola) VALUES($1,$2,$3,$4) Returning *",
        [Nume,Prenume,Email,Parola]);

        res.json (newAdmin.rows[0]);
        console.log(response);
    
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/login", async(req, res) => {
    try {
          
        
 
       const {Email} = req.body;
        const {Parola}=req.body;
      

        const newAdmin = await pool.query ("Select* From Administrare_Pagina where Email = $1 and Parola=$2",
        [Email,Parola]);
        res.json (newAdmin.rows[0]);
        console.log(response);
    
    } catch (error) {
        console.error(error.message);
    }
})
app.get("/noutati/search",async(req,res) =>{
    try {
        const { desc } = req.body;
        const search = await pool. query ("SELECT idNoutati FROM Noutati where title like ('%' || $1 || '%'); ",[desc]);        

        res.json(search);
    } catch (error) {
        console.error(error.message);
        
    }


})

app.get("/admins",async(req,res) =>{
    try {
        const allAdmins = await pool.query("Select *  from Administrare_Pagina");
        res.json(allAdmins.rows);
    } catch (error) {
        console.error(error.message);
        
    }
})

app.get("/admins/:id",async(req,res) =>{
    try {
        const { id } = req.params;
        const admin = await pool. query ("SELECT * FROM Administrare_Pagina where id=$1",[id]);        

        res.json(admin.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }


})

app.post("/admins/:id",async (req, res) =>{
    try {
        const { id } = req.params;
        const {Nume}  = req.body;
        const updateAdmin = await pool.query("UPDATE Administrare_Pagina set Nume =$1 where idAdministrare =$2",[Nume, id]);
    res.json("mere");
    } catch (error) {
        console.log(error.message);
    }
})

app.delete("/admins/:id", async (req, res) => {
    try {
        const { id }= req.params;
        const deleteAdmin = await pool.query("DELETE FROM test10000 WHERE id=$1",[id]);
        res.json("S-a sters");
    } catch (error) {
        console.log(error.message);
    }
})



app.post("/creare_noutati", async(req, res) => {
    try {
          
        console.log("sunt aici");
       const {title} = req.body;
        const {body} = req.body;
             

        const newStire = await pool.query ("INSERT INTO Noutati(title, body) VALUES($1,$2) Returning *",
        [title,body]);

        res.json (newStire.rows[0]);
        console.log(response);
    
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/noutate", async(req, res) => {
    try {
          
        const {title} = req.body;
        const {body}=req.body;
        const newGetStire = await pool.query ("Select IdNoutate From Noutati where title = $1 and body=$2",
        [title,body]);
        res.json (newGetStire.rows[0]);
        console.log(response);
    
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/noutati",async(req,res) =>{
    try {
        const allStiri = await pool.query("Select IdNoutati, src, datatime,title,body from Noutati");
        res.json(allStiri.rows);
    } catch (error) {
        console.error(error.message);
        
    }
})

app.get("/noutati/:id",async(req,res) =>{
    try {
        const { id } = req.params;
        const stire = await pool. query ("SELECT * FROM Noutati where id=$1",[id]);        

        res.json(stire.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }


})

app.get("/id/:title",async(req,res) =>{
    try {
        const { title } = req.body;
        const stire = await pool. query ("SELECT IdNoutate FROM Noutati where title=$1 ",[title]);        

        res.json(stire.rows[0]);
    } catch (error) {
        console.error(error.message);
        
    }


}) 
app.post("/noutati/:id",async (req, res) =>{
    try {
        const { id } = req.params;
        const {Titlu} = req.body;
        const {Descriere}  = req.body;
        if(Titlu!=null && Descriere !=null)
        {
            const updateStire= await pool.query("UPDATE Stiri set Titlu =$1, Descriere=$2 where idStiri =$3",[Titlu,Descriere, id]);
        }
        if(Titlu== null && Descriere!=null)
          {
            const updateStire1= await pool.query("UPDATE Stiri set Descriere =$1 where idStiri =$2",[Descriere, id]);
          }
          if(Titlu!= null && Descriere==null)
          {
            const updateStire1= await pool.query("UPDATE Stiri set Titlu =$1 where idStiri =$2",[Titlu, id]);
          }
    
 
    } catch (error) {
        console.log(error.message);
    }
})

app.delete("/noutati/:id", async (req, res) => {
    try {
        const { id }= req.params;
        const deleteAdmin = await pool.query("DELETE FROM Noutati WHERE IdNoutate=$1",[id]);
        res.json("S-a sters");
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/jucator", async (req, res) => {
    try {
        const {datainscriere} = req.body;
        const {Nume}=req.body;
        const {Prenume}=req.body;
        const {Descriere}=req.body;
        const {DataNastere}=req.body;
        const {ImgLink}=req.body;
        const addJucator = await pool.query ("Insert into Jucator (datainscriere, Nume, Prenume, Descriere, DataNastere,ImgLink) Values($1,$2,$3,$4,$5,$6) RETURNING*",
        [datainscriere,Nume,Prenume,Descriere,DataNastere,ImgLink]);
        res.json (addJucator.rows[0]);
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(PORT,() =>{
    console.log('server on 3001');
})
