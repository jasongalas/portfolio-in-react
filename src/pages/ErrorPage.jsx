import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh no! D8</h1>
      <p>Sorry, an unexpected error has occurred! Please use a proper link from above.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
