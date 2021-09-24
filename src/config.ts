export let API: string;

if (process.env.NODE_ENV === 'development') {
  console.log(process.env.REACT_APP_DEVLOPMENT_API_URL)
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!;
} else if (process.env.NODE_ENV === 'production') {
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!;
}
