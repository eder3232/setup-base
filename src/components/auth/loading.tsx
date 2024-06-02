import { Oval } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        ariaLabel="oval-loading"
        color="green"
      />
    </div>
  )
}

export default Loading
