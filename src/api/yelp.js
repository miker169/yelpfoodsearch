import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rhk4Bk1TpksBYGqM2vMHupHwe8q-EodqP6mXhrkj5RiNwWUSfGkvPajDmGSYvx6o9aC4wDKtUu_-almYrxuk4nFK5p8Jn1P3kB_wwDEXlMWoNCkaWyDt35BWUQCFXnYx'
    }
});