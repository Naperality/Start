const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
//decalare elements in html 
const postsContainer  = document.getElementById("posts-container");
//populate the forum using async
const fetchData = async () => {
    try{
        //fetching data using await
        const res = await fetch(forumLatest);
        //getting the JSON Obj
        const data = await res.json();
        //result of data is done - console.log(data)
        showLatestPosts(data);
    }catch(err){
        console.log(err);
    }
};
fetchData();

//displaying the data got from fetchData Method
const showLatestPosts = (data) => {
    const {topic_list,users} = data; //destructuring 
    const {topics} = topic_list;
    postsContainer.innerHTML = topics.map((item)=>{
        const {
            id,
            title,
            views,
            posts_count,
            slug,
            posters,
            category_id,
            bumped_at,
          } = item;
          return `
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>`;    
        }).join('');
};