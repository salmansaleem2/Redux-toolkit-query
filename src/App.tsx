import './App.css'
import { useAddCommentMutation, useCommentQuery, useCommentsQuery } from './services/commentApi'

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useCommentsQuery();
  console.log(data, "data");
  return (
    <div>
      <h1>React Redux Toolkit RTK Query </h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>{data?.slice(499)?.map(comment => {
          return <div className='data' key={comment?.id}>
            <span>{comment?.name}</span>
            <span><CommentDetail id={comment?.id} /></span>
          </div>
        })}</div>
      )
      }
      <div><AddComment /></div>
    </div >
  )
}

export const CommentDetail = ({ id }: { id: string }) => {
  const { data } = useCommentQuery(id);
  return (
    <pre>{data?.name}</pre>
  )
}

export const AddComment = () => {
  const [addComment] = useAddCommentMutation();
  const { refetch } = useCommentsQuery();
  const comment = {
    "postId": 1,
    "id": 501,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem "
  }
  const addHandler = async () => {
    await addComment(comment)
    refetch();
  }
  return (
    <>
      <button onClick={addHandler}>Add Contact</button>
    </>
  )
}

export default App
