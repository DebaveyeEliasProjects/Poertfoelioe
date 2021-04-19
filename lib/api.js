import path from "path";
import matter from "gray-matter";
import fs from "fs"; 

export const getProjectData = async () => {
  const files = fs.readdirSync('projects');
  console.log(files)

  

  let sendProps = []

  files.forEach(element => {
    let data = {
      title: "",
      description: "",
      coverImage: "",
      link: "",
      publishDate: undefined
    }
    // console.log(element);
    const markdownWithMeta = fs.readFileSync(path.join('projects', element)).toString();
    const x = matter(markdownWithMeta).data;
    data.title = x.title;
    data.description = x.description;
    data.coverImage = x.coverImage;
    data.publishDate = Date.parse(x.publishDate);
    data.link = element.replace(".md","");
    // console.log(data);
    sendProps.push(data);
    // console.log(sendProps);
  });
  let newProps = sendProps.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.publishDate) - new Date(a.publishDate);
  });
  return newProps;
}


export const getFourProjects = async () => {
  const files = fs.readdirSync('projects');
  // console.log(files)

  

  let sendProps = await getProjectData();

  let toSend = sendProps.slice(0,4)

  
  return toSend;
}