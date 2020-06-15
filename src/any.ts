import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  //let data: any = response.data;
  interface Article {
    id: number;
    title: string;
    discription: string;
  }
  //let data: object[] = response.data;
  let data: Article[] = response.data;

  console.log(data);
  console.log(data[0].title);
});
