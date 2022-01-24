INTEGRAÇÃO COM O STRIPE:

-Crie uma conta, cadastre um produto.

-instale o yarn: yarn add stipe

-Pegue sua secret key, na raíz do projeto crie um arquivo chamado   .env.local, nele crie a seguinte variável: STRIPE_API_KEY = *secret key*

-Na pasta src crie um arquivo chamado stripe.ts

- Coloque esse código = 
 import Stripe from 'stripe';

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion:'2020-08-27',
        appInfo:{
            name:*Nome do app*,
            version:'0.1.0'
        }
    }
)
 