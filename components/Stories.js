import { faker } from '@faker-js/faker';
import Story from "./Story";
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react"


function Stories() {
  const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(15)].map((_, i) => ({
            id: i,
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
            company: faker.company.companyName()
        }));

        setSuggestions(suggestions);
    }, []);

  const { data: session } = useSession();

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map(profile => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username} />
      ))}
    </div>
  )
}

export default Stories