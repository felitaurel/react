import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "./firebase";
import {
  Container,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order);
    });
  }, [id]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'navy',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" component="h1" sx={{ color: 'white', mb: 2 }}>
              ¡Gracias por tu compra!
            </Typography>
          </Box>

          {orderData !== null ? (
            <Box>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Tus productos comprados:
              </Typography>
              <List>
                {orderData.items.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ color: 'white' }}>
                            {item.nombre}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            {item.count} unidades
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < orderData.items.length - 1 && <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />}
                  </React.Fragment>
                ))}
              </List>
              <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                Orden de compra: <strong>{orderData.id}</strong>
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
              <CircularProgress sx={{ color: 'white' }} />
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default OrderConfirm;

