import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Personal.css";
export default function Personal() {
  return (
    <>
      <div className="coloana1">
        <div className="linie1">
          <div className="Carte">
            <h2 className="Jucatori">Jucatori</h2>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/AlexandruDragomir.png"
                  alt="Alexandru Dragomir"
                  className="Imagine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Alexandru Dragomir
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={"/personal/jucator"}>
                  <Button className="Button1" size="small" color="primary">
                    Afla mai mult
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className="Carte2">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/Cezar Ciubotariu.jpg"
                  alt="Cezar Ciubotariu"
                  className="Imagine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cezar Ciubotariu
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={"/personal/jucator"}>
                  <Button className="Button1" size="small" color="primary">
                    Afla mai mult
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className="Carte3">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/CosminBoghean.jpg"
                  alt="Cosmin Boghean"
                  className="Imagine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cosmin Boghean
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={"/personal/jucator"}>
                  <Button className="Button1" size="small" color="primary">
                    Afla mai mult
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className="Carte3">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/CosminCiubotariu.jpg"
                  alt="Cosmin Ciubotariu"
                  className="Imagine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cosmin Ciubotariu
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={"/personal/jucator"}>
                  <Button className="Button1" size="small" color="primary">
                    Afla mai mult
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="linie2">
          <div className="Carte">
            <div className="Carte4">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea className="card">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/DariusPop.jpg"
                    alt="Darius Pop"
                    className="Imagine"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Darius Pop
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={"/personal/jucator"}>
                    <Button className="Button1" size="small" color="primary">
                      Afla mai mult
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          </div>
          <div className="Carte2">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/IoanVerciuc.jpg"
                  alt="Ioan Verciuc"
                  className="Imagine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ioan Verciuc
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={"/personal/jucator"}>
                  <Button className="Button1" size="small" color="primary">
                    Afla mai mult
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className="Carte3">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="card">
                <CardMedia
                  component="img"
                  height="140"
                  image="/images/MariusGontariu.jpg"
                  alt="Marius Gontariu"
                  className="Imagine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Marius Gontariu
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={"/personal/jucator"}>
                  <Button className="Button1" size="small" color="primary">
                    Afla mai mult
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        </div>

        <div className="linie2">
          <div className="Carte">
            <h2 className="Antrenori">Antrenori</h2>
            <div className="Carte4">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea className="card">
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/TudorOrasanu.jpg"
                    alt="Tudor Orasanu"
                    className="Imagine"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Tudor Orasanu
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={"/personal/jucator"}>
                    <Button className="Button1" size="small" color="primary">
                      Afla mai mult
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
