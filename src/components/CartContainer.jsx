import React, { useContext } from "react";
import { cartContext } from "./cartContext";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Box,
  Container,
  Divider,
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
  const total = cart.reduce((sum, item) => sum + item.precio * item.count, 0);

  if (cart.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Tu carrito está vacío</Typography>
        <Button component={Link} to="/" variant="contained" color="primary" sx={{ mt: 2 }}>
          Continuar Comprando
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Tus items
      </Typography>
      
      <Card elevation={3}>
        <CardContent sx={{ p: 0 }}>
          {/* Header */}
          <Grid container sx={{ 
            backgroundColor: 'primary.main', 
            color: 'primary.contrastText',
            p: 2,
            display: { xs: 'none', md: 'flex' }
          }}>
            <Grid item md={3}>
              <Typography variant="subtitle1">Producto</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="subtitle1">Detalles</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="subtitle1">Precio</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="subtitle1">Cantidad</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="subtitle1">Total</Typography>
            </Grid>
          </Grid>

          {/* Cart Items */}
          {cart.map((item) => (
            <Box key={item.id}>
              <Grid container sx={{
                p: 2,
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: 'action.hover',
                }
              }}>
                {/* Product Image */}
                <Grid item xs={12} md={3} sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 2
                }}>
                  <Box sx={{
                    width: 100,
                    height: 100,
                    overflow: 'hidden',
                    borderRadius: 1,
                    flexShrink: 0
                  }}>
                    <img
                      src={item.img}
                      alt={item.nombre}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Grid>

                {/* Product Name */}
                <Grid item xs={12} md={3}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                    {item.nombre}
                  </Typography>
                </Grid>

                {/* Unit Price */}
                <Grid item xs={6} md={2}>
                  <Typography variant="body1" sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5 
                  }}>
                    <Box component="span" sx={{ 
                      display: { md: 'none' },
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}>
                      Precio:
                    </Box>
                    ${item.precio}
                  </Typography>
                </Grid>

                {/* Quantity */}
                <Grid item xs={6} md={2}>
                  <Typography variant="body1" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}>
                    <Box component="span" sx={{ 
                      display: { md: 'none' },
                      color: 'text.secondary',
                      fontSize: '0.875rem'
                    }}>
                      Cantidad:
                    </Box>
                    {item.count}
                  </Typography>
                </Grid>

                {/* Total Price */}
                <Grid item xs={6} md={2}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                      ${item.count * item.precio}
                    </Typography>
                    <IconButton 
                      onClick={() => removeItem(item.id)}
                      color="error"
                      size="small"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
              <Divider />
            </Box>
          ))}

          {/* Cart Total and Checkout */}
          <Box sx={{ 
            p: 3,
            backgroundColor: 'grey.50',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { sm: 'center' },
            justifyContent: 'space-between',
            gap: 2
          }}>
            <Typography variant="h6">
              Total de la compra: ${total}
            </Typography>
            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ShoppingCartCheckoutIcon />}
            >
              Proceder al pago
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CartContainer;

