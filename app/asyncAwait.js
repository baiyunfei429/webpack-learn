// example1.
(async ()=>{
  console.log("async");
  console.time("async");
  await sleep(3000);
  console.timeEnd("async");
  console.log("async-end");
})()

// example2.
const fetchUsers = (user)=>{
  return window.fetch(`https://api.douban.com/v2/user/${user}`).then( res=>res.json())
}


const getUser = async (user) =>{
  let users = await fetchUsers(user);
  console.log( users);
}

console.log( getUser("flyingzl"))