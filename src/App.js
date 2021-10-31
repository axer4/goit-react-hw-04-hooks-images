import LoadMore from "./components/button/button";
import ImageGallery from "./components/imagegallery/ImageGallery";
import Loaders from "./components/loader/Loader";
import FetchImages from "./services/fetchImages";
import styles from './App.module.css';

const { useState, useEffect } = require("react");
const { Searchbar } = require("./components/searchbar/Searchbar");

export default function App() {

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const onSubmit = (value) => {
    setValue(value);
  }
  const nextPage = (page) => {
    setPage(page);
  }
  useEffect(() => {
    if (!value) {
      return
    }
    setLoading(true)
    FetchImages(value, currentPage).then(response => setData(response.data.hits))
      .catch(err => console.log(err))
      .finally(setLoading(false));
  },[value]);
  useEffect(() => {
    if (!value) {
      return
    }
    setLoading(true);
    FetchImages(value,currentPage)
      .then(response => setData([...data, ...response.data.hits]))
      .then(() =>     window.scrollTo({
     top: document.documentElement.scrollHeight,
     behavior: 'smooth',
}))
      .catch(err => console.log(err))
      .finally(setLoading(false))
   },[currentPage])
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.value !== prevState.value) {
//       this.setState({ loading: true })
//       FetchImages(this.state.value)
//         .then(response =>
//           this.setState({
//             data: response.data.hits
//           })
//       )
//         .catch(err => console.log(err))
//       .finally(() => this.setState({loading:false}))
//     }
//     else if (this.state.page !== prevState.page) {
//        this.setState({loading: true})
//       FetchImages(this.state.value, this.state.page)
//         .then(response =>
//           this.setState(prevState => ({
//             data: [...prevState.data,...response.data.hits]
//           }))
//       )
//       .catch(err => console.log(err))
//       .finally(() => this.setState({loading:false}))
//     }
//     window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
  //
    return <div className = {styles.app}>
            <Searchbar onSubmit={onSubmit} />
       <ImageGallery data={data} />
      {loading && <Loaders/>}
      <LoadMore
        data={data}
        nextPage = {nextPage}
      /> 
      </div> 
  }