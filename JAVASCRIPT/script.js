const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
//decalare elements in html 
const postsContainer  = document.getElementById("posts-container");

//category  object
const allCategories = {
    299: { category: "Career Advice", className: "career" },
    409: { category: "Project Feedback", className: "feedback" },
    417: { category: "freeCodeCamp Support", className: "support" },
    421: { category: "JavaScript", className: "javascript" },
    423: { category: "HTML - CSS", className: "html-css" },
    424: { category: "Python", className: "python" },
    432: { category: "You Can Do This!", className: "motivation" },
    560: { category: "Backend Development", className: "backend" },
};

//category method
const forumCategory = (id) => {
    let selectedCategory = {};
    if(allCategories.hasOwnProperty(id)){
        const {className,category} = allCategories[id];        
        selectedCategory.className = className;
        selectedCategory.category = category;
    }
    else{
        selectedCategory.className = "general";
        selectedCategory.category = "General";
        selectedCategory.id = 1;
    }
    const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
    const linkText = selectedCategory.category;
    const linkClass = `category ${selectedCategory.className}`;
    return `<a href="${url}" class="${linkClass}" target="_blank">${linkText}</a>`;
};

//activity in real time ISO 8601 method
const timeAgo = (time) => {
    const currentTime = new Date(); //get time in real time
    const lastPost = new Date(time); //get last post change in time
    const timeDifference = currentTime - lastPost;
    const msPerMinute = 1000 * 60;
    //calculations on providing the time after replies
    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    if(minutesAgo < 60){
        return `${minutesAgo}m ago`;
    }
    if(hoursAgo < 24){
        return `${hoursAgo}h ago`;
    }
    return `${daysAgo}d ago`;
};

//conversion of view count for readability method
const viewCount = (views) => {
    const thousands = Math.floor(views / 1000);
    if(views >= 1000){
        return `${thousands}k`;
    }
    return views;
};

//avatar of users method
const avatars = (posters,users) => {
    return posters.map((poster)=>{
        const user = users.find((user)=>user.id===poster.user_id);
        if(user){
            const avatar = user.avatar_template.replace(/{size}/,30);
            const userAvatarUrl = avatar.startsWith("/user_avatar/")
            ? avatarUrl.concat(avatar)
            : avatar;
            return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
        }
    }).join('');
};

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
            <td>
                <a class = "post-title" target="_blank" href="${forumTopicUrl}${slug}/${id}">${title}</a>
                ${forumCategory(category_id)}
            </td>
            <td>
                <div class="avatar-container">
                    ${avatars(posters,users)}
                </div>
            </td>
            <td>
                ${posts_count - 1}
            </td>
            <td>
                ${viewCount(views)}
            </td>
            <td>
                ${timeAgo(bumped_at)}
            </td>
          </tr>`;    
        }).join('');
};