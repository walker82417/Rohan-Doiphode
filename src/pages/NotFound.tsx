import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const url = `https://rohandoiphode.lovable.app${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>Page Not Found — Rohan Doiphode</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Rohan Doiphode's portfolio home." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Page Not Found — Rohan Doiphode" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to Rohan Doiphode's portfolio home." />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content="Page Not Found — Rohan Doiphode" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist. Return to Rohan Doiphode's portfolio home." />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-foreground/80">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
