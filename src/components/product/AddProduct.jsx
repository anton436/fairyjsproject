import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  });

  const { addProduct } = useProducts();

  const handleInp = (e) => {
    if (e.target.name == 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  console.log(product);
  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id='outlined-basic'
        label='Name'
        name='name'
        size='small'
        variant='outlined'
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id='outlined-basic'
        label='Description'
        name='description'
        size='small'
        variant='outlined'
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id='outlined-basic'
        label='Price'
        name='price'
        size='small'
        variant='outlined'
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id='outlined-basic'
        label='Picture'
        name='picture'
        size='small'
        variant='outlined'
        onChange={handleInp}
      />
      <TextField
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id='outlined-basic'
        label='Type'
        name='type'
        size='small'
        variant='outlined'
        onChange={handleInp}
      />
      <Button
        onClick={() => addProduct(product)}
        fullWidth
        size='large'
        variant='outlined'
      >
        Add product
      </Button>
    </Box>
  );
};

export default AddProduct;
