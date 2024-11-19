import { FaUser } from "react-icons/fa";
import { VscReactions } from "react-icons/vsc";

const Post = ({ post }) => {
  return (
    <div className="card   bg-neutral text-neutral-content w-96">
      <div className="card-body">
        <div className=" flex w-full  items-center justify-between">
          <div className="avatar  gap-x-2 items-center flex">
            <div className="  p-2  bg-primary  rounded-full">
              <FaUser className=" fill-black" />
            </div>
            <p className=" font-medium   ">{post.Username}</p>
          </div>
          <div className="reactions flex">
            <div className="badge badge-xs badge-ghost py-3 gap-x-[2px] px-2">
              {post.reactions}
              <VscReactions className=" size-5" />
            </div>
          </div>
        </div>
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          {post.Tags.map((tag) => (
            <div key={post.id} className="badge badge-outline  py-3">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
