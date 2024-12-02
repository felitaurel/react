import { useNavigate } from "react-router-dom";
import { cartContext } from "./cartContext";
import { createOrder } from "./firebase";
import { useContext, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Checkout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const navigate = useNavigate();
  const { cart, getTotalPriceInCart } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      const idOrder = await createOrder(orderData);
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  const isFormValid = buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "";

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'navy',
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <form onSubmit={handleCheckout}>
            <Stack spacing={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: 'white',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  Completa tus datos para completar la compra
                  <ShoppingBagIcon sx={{ ml: 1 }} />
                </Typography>
              </Box>

              <TextField
                fullWidth
                label="Nombre"
                value={buyer.firstname}
                name="firstname"
                onChange={onInputChange}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Apellido"
                value={buyer.lastname}
                name="lastname"
                onChange={onInputChange}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Edad"
                value={buyer.age}
                name="age"
                type="number"
                onChange={onInputChange}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!isFormValid}
                  fullWidth
                  startIcon={<CheckCircleIcon />}
                  sx={{
                    bgcolor: 'success.main',
                    '&:hover': {
                      bgcolor: 'success.dark',
                    },
                  }}
                >
                  Confirmar Compra
                </Button>
                <Button
                  onClick={resetForm}
                  variant="outlined"
                  fullWidth
                  startIcon={<CancelIcon />}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  Cancelar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Checkout;

