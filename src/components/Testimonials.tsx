// import React from 'react';
import Picture1 from '../img/Picture5.png';
import Picture2 from '../img/Picture2.png';
import Picture3 from '../img/Picture3.png';


const team = [
  {
    name: "Eggcelent Hatcheries",
    role: "Founder & Lead Engineer",
    image: Picture1,
    bio: "Eggcelent Hatcheries"
  },
  {
    name: "Eggcelent Hatcheries",
    role: "Eggcelent Hatcheries",
    image: Picture2,
    bio: "Eggcelent Hatcheries"
  },
  {
    name: "Eggcelent Hatcheries",
    role: "Eggcelent Hatcheries",
    image: Picture3,
    bio: "Eggcelent Hatcheries"
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-yellow-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}