type Trip = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

type Booking =   {
  id: string,
  userId: string,
  tripId: string,
  guests: number,
  date: string,
  trip: Pick<Trip, ('title' | 'duration' | 'price')>,
  totalPrice: number,
  createdAt: string
}

export { type Booking, type Trip }
