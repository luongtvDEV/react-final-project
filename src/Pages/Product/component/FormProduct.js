import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
import Grid from '@mui/joy/Grid';
import { Container } from '@mui/joy';
import { Button } from '@mui/joy'
import { AppConsumer } from '../../../store';
import productApi from '../../../api/productApi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
    productName: yup.string().required('This field is required'),
    price: yup.number().required('This field is required'),
    quantity: yup.number().required('This field is required'),
    description: yup.string().required('This field is required'),
});

export default function FormProduct({ addProduct, updateProduct }) {

    const [state, dispatch] = AppConsumer();
    const { handleSubmit, control, reset, setValue, error, formState: { errors } } = useForm({
        defaultValues: {
            productName: '',
            price: '',
            quantity: '',
            description: ''
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const getProductById = async () => {
            let res = await productApi.getProductById(state.idProduct);
            const { productName, price, quantity, description } = res.data;
            setValue('productName', productName);
            setValue('price', price);
            setValue('quantity', quantity);
            setValue('description', description);

        }
        getProductById();
    }, [state.idProduct])

    const onSubmit = (data) => {
        if (!state.idProduct) {
            addProduct(data);
            reset();

            return;
        }
        updateProduct(state.idProduct, data);
        setValue('productName', '');
        setValue('price', '');
        setValue('quantity', '');
        setValue('description', '');
        reset();

    }
    const onSubmitAddProduct = async (data) => {
        addProduct(data);
    }
    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{ flexGrow: 0 }}>
                        <Grid xs={4}>
                            <Controller name='productName' control={control} render={({ field }) =>
                                <TextField name='productName'
                                    label='Product Name'
                                    placeholder='Product Name'
                                    {...field}
                                    fullWidth
                                    helperText={errors.productName && errors.productName.message}
                                    error={!!errors.productName} />
                            } />
                        </Grid>
                        <Grid xs={4}>
                            <Controller name='price' control={control} render={({ field }) =>
                                <TextField name='price' label='Price' placeholder='Price' {...field} fullWidth
                                     helperText={errors.price && errors.price.message}
                                    error={!!errors.price} />
                            } />
                        </Grid>
                        <Grid xs={4}>
                            <Controller name='quantity' control={control} render={({ field }) =>
                                <TextField name='quantity' label='Quantity' placeholder='Quantity' {...field} fullWidth
                                    helperText={errors.quantity && errors.quantity.message}
                                    error={!!errors.quantity} />
                            } />
                        </Grid>
                        <Grid xs={12}>
                            <Controller name='description' control={control} render={({ field }) =>
                                <TextField name='description' label='Description' placeholder='Description' {...field} fullWidth
                                    helperText={errors.description && errors.description.message}
                                    error={!!errors.description} />
                            } />
                        </Grid>
                    </Grid>

                    <Button type='submit'>Add</Button>
                </form>
            </Container>


        </div>
    )
}
