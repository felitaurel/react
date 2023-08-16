import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function ActionAreaCard(props) {
  const {id, nombre, descripcion, img, precio, category} = props;
  console.log('item')
  return (<Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'stretch'}}>
    <CardActionArea component={Link} to={`/product/${id}`} sx={{display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'stretch'}}>      
      <CardMedia
                          component="img"
                          height="140"
                          src= {img}
                          alt={nombre}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            
                            {nombre} 
                            
                            
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {descripcion}
                            {precio}
                            
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
  );
}
export default ActionAreaCard;
{/*Chequear docs, cambiar la accion on click a Link = './product/${id} para que genere dinamico un componente especifico a cada item
                            Capaz sacar la descripcion y precio y solo mostrarlo en onclick?
                            Ademas deberia llevar primero a itemdetailcontainer(que lleva a item detail)*/ }
                          
/*<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>      <CardMedia
                            component="img"
                            height="140"
                            src= {img}
                            alt={nombre}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              
                              {nombre} 
                              
                              
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {descripcion}
                              {precio}
                              
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      */