import React from 'react'
import { useState, useEffect, useContext } from "react";
import { getProductData } from "./firebase.js";
import { useParams } from "react-router-dom";
import { cartContext } from './cartContext.jsx';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Snackbar,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function ItemDetail(props) {
  const { addToCart, getItemInCart } = useContext(cartContext);
  const { id, nombre, descripcion, img, precio, stock } = props;
  const itemInCart = getItemInCart(id);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const maxItems = itemInCart ? stock - itemInCart.count : stock;
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const tallesPosibles = [36, 37, 38, 39, 40, 41, 42, 43, 44];

  const handleSizeChange = (event, newSize) => {
    setSelectedSize(newSize);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, Math.min(prev + change, maxItems)));
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...props, size: selectedSize }, quantity);
      setOpenSnackbar(true);
      setIsAddedToCart(true);
    } else {
      alert('Por favor, selecciona un talle antes de agregar al carrito.');
    }
  };

  return (
    <Card elevation={3} sx={{ my: 5, overflow: 'visible' }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={img}
            alt={nombre}
            sx={{ height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h4" gutterBottom>{nombre}</Typography>
              <Typography variant="h5" color="primary" gutterBottom>$ {precio}</Typography>
              <Typography variant="body1" paragraph>{descripcion}</Typography>
              
              <Box my={3}>
                <Typography variant="h6" gutterBottom>Talle</Typography>
                <ToggleButtonGroup
                  value={selectedSize}
                  exclusive
                  onChange={handleSizeChange}
                  aria-label="shoe size"
                >
                  {tallesPosibles.map((size) => (
                    <ToggleButton key={size} value={size} aria-label={`size ${size}`}>
                      {size}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>

              {stock > 0 ? (
                <Box>
                  <Typography variant="h6" gutterBottom>Cantidad</Typography>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                      <RemoveIcon />
                    </Button>
                    <Typography variant="h6" mx={2}>{quantity}</Typography>
                    <Button onClick={() => handleQuantityChange(1)} disabled={quantity >= maxItems}>
                      <AddIcon />
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={handleAddToCart}
                    disabled={!selectedSize || isAddedToCart}
                    fullWidth
                  >
                    {isAddedToCart ? 'Agregado al Carrito' : 'Agregar al Carrito'}
                  </Button>
                </Box>
              ) : (
                <Chip label="Sin stock" color="error" />
              )}
            </Box>

            {itemInCart && (
              <Typography variant="body2" mt={2}>
                Ya tienes {itemInCart.count} unidad(es) en el carrito
              </Typography>
            )}
          </CardContent>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={`${nombre} agregado al carrito, cantidad: ${quantity}`}
        action={
          <Button color="secondary" size="small" onClick={() => navigate('/cart')}>
            Ir al carrito
          </Button>
        }
      />
    </Card>
  );
}

export default ItemDetail;

