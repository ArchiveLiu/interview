axios.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response1) {
  if (err) {
    console.error(err);
  } else {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + response1.data.id, function (err, response2) {
      if (err) {
        console.error(err);
      } else {
        axios.get('https://jsonplaceholder.typicode.com/users/' + response2.data[0].userId, function (err, response3) {
          if (err) {
            console.error(err);
          } else {
            axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + response3.data.id, function (err, response4) {
              if (err) {
                console.error(err);
              } else {
                // Do something with the data
                const data1 = response1.data;
                const data2 = response2.data;
                const data3 = response3.data;
                const data4 = response4.data;
                const allData = [data1, data2, data3, data4];
                localStorage.setItem('allData', JSON.stringify(allData));
              }
            });
          }
        });
      }
    });
  }
});



// async优化方案

const axiosGet = url =>{
    return new Promise(_resolve=>{
       axios.get(url,function(_err,_response){
        if(!_err){
            _resolve(response.data)
        }else{
            console.error(_err);
        }
       })
    })
}

async function fetchData(){
    const data1=await axiosGet('https://jsonplaceholder.typicode.com/posts/1')
    const data2=await axiosGet(`https://jsonplaceholder.typicode.com/comments?postId=${data1.id}`)
    const data3=await axiosGet(`https://jsonplaceholder.typicode.com/users/${data2[0].userId}`)
    const data4=await axiosGet(`https://jsonplaceholder.typicode.com/todos?userId=${data3.id}`)
    const allData = [data1, data2, data3, data4];
    localStorage.setItem('allData', JSON.stringify(allData));
}