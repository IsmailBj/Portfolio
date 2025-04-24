export const  Mailto =({ email, subject, body, ...props }:any) => {
    return (
      <a href={`mailto:${email}`}>
        <span className='g-mail'>
            {email}
        </span>
      </a>
    );
  }