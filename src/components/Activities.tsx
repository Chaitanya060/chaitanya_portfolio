import { Users, Trophy, Calendar, Code } from 'lucide-react';
import codingCompetition from '@/assets/coding-competition.jpg';

const Activities = () => {
  return (
    <section id="activities" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Extra-curricular <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Leadership and community involvement in competitive programming
          </p>
        </div>

        {/* Featured Activity */}
        <div className="card-elevated rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Activity Image */}
            <div className="relative overflow-hidden">
              <img 
                src={codingCompetition} 
                alt="School of Competitive Coding Club Activities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent"></div>
            </div>

            {/* Activity Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Activity Meta */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-primary">
                  <Users size={20} />
                  <span className="font-semibold">Leadership Role</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>July 2023 – May 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6 gradient-text leading-tight">
                School of Competitive Coding (SOCC) Club
              </h3>

              {/* Role & Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-3">Club Leader</h4>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Led the SOCC Club, boosting its profile and membership while organizing 
                  technical events like coding competitions, hackathons, and workshops to 
                  foster continuous learning.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold gradient-text">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Trophy className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Event Organization</p>
                      <p className="text-sm text-muted-foreground">
                        Successfully organized multiple coding competitions and hackathons
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Membership Growth</p>
                      <p className="text-sm text-muted-foreground">
                        Significantly increased club membership and engagement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="text-accent mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Technical Workshops</p>
                      <p className="text-sm text-muted-foreground">
                        Conducted workshops on competitive programming and algorithms
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Developed */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 gradient-text">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Event Management", "Team Building", "Public Speaking", "Mentoring"].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Impact */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="card-elevated p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">12</div>
            <p className="text-muted-foreground">Months of Leadership</p>
          </div>
          <div className="card-elevated p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <p className="text-muted-foreground">Events Organized</p>
          </div>
          <div className="card-elevated p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <p className="text-muted-foreground">Students Mentored</p>
          </div>
          <div className="card-elevated p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <p className="text-muted-foreground">Engagement Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;