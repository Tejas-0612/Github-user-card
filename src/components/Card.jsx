import React from "react";
import Shimmer from "./Shimmer";

const cardDetails = {
  login: "akshaymarch7",
  id: 12824231,
  node_id: "MDQ6VXNlcjEyODI0MjMx",
  avatar_url: "https://avatars.githubusercontent.com/u/12824231?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/akshaymarch7",
  html_url: "https://github.com/akshaymarch7",
  followers_url: "https://api.github.com/users/akshaymarch7/followers",
  following_url:
    "https://api.github.com/users/akshaymarch7/following{/other_user}",
  gists_url: "https://api.github.com/users/akshaymarch7/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/akshaymarch7/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/akshaymarch7/subscriptions",
  organizations_url: "https://api.github.com/users/akshaymarch7/orgs",
  repos_url: "https://api.github.com/users/akshaymarch7/repos",
  events_url: "https://api.github.com/users/akshaymarch7/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/akshaymarch7/received_events",
  type: "User",
  site_admin: false,
  name: "Akshay Saini",
  company: "Founder @namastedev",
  blog: "akshaysaini.in",
  location: "India",
  email: null,
  hireable: true,
  bio: "May the code be with you. Amen.",
  twitter_username: "akshaymarch7",
  public_repos: 8,
  public_gists: 0,
  followers: 2513,
  following: 1,
  created_at: "2015-06-10T04:36:48Z",
  updated_at: "2023-10-20T08:06:19Z",
};

const Card = ({ cardDetails, elementRef }) => {
  // const data=useGithubData();
  // console.log(data)
  if (cardDetails.message == "Not Found") return <p>User does not exist</p>;
  return (
    <div
      className="border-2 border-white w-[350px] mx-auto text-center rounded-2xl  "
      elementRef={elementRef}
    >
      <img
        src={cardDetails.avatar_url}
        className="w-32 rounded-full border-red-300 border-2 mx-auto"
      />
      <h1 className="text-2xl font-semibold">{cardDetails.name}</h1>
      <p>{cardDetails.login}</p>
      <h1>{cardDetails.bio}</h1>
      <p>{cardDetails.blog}</p>
      <p>{cardDetails.company}</p>
      <p>{cardDetails.email}</p>
      <p>{cardDetails.location}</p>
    </div>
  );
};

export default Card;
