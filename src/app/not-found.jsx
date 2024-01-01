import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry, the page you requested does not exist</p>
        <Link href="/">Home</Link>

    </div>
  )
}

export default NotFound