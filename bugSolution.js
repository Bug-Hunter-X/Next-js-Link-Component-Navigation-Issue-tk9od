```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <div>
      <Link href="/profile">
        <a onClick={handleClick}>Go to Profile</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```