import { Calendar, Clock } from 'lucide-react';
import { Badge } from '../shared/Badge';

const AppointmentCard = ({ title, doctor, datetime, type, location }) => (
  <Card className="mb-4">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{doctor}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
      <Badge variant={type === 'upcoming' ? 'warning' : 'default'}>
        {datetime}
      </Badge>
    </div>
  </Card>
);

const UpcomingAppointments = () => {
  const appointments = [
    {
      title: 'Prenatal Checkup',
      doctor: 'Dr. Sarah Johnson',
      datetime: 'Tomorrow, 10:00 AM',
      type: 'upcoming',
      location: 'City Hospital'
    },
    {
      title: 'Ultrasound Scan',
      doctor: 'Dr. Michael Chen',
      datetime: 'Nov 15, 2:30 PM',
      type: 'scheduled',
      location: 'Women\'s Clinic'
    }
  ];

  return (
    <Card className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Appointments</h2>
        <Button variant="secondary" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule New
        </Button>
      </div>
      
      <div>
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
      </div>
    </Card>
  );
};

export { 

    UpcomingAppointments
  };
