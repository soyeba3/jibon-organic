import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: "1",
    name: "Tahmid Ahmed",
    role: "Regular Customer",
    content:
      "The ghee from Jibon Organic has transformed my cooking. The authentic aroma and flavor take me back to my childhood. I use it daily for cooking and even as a remedy for minor skin irritations.",
    avatar: "/images/avatar1.png",
  },
  {
    id: "2",
    name: "Farzana Rahman",
    role: "Home Chef",
    content:
      "As a home chef focused on authentic Bengali cuisine, I swear by Jibon Organic's mustard oil. The pungent aroma and rich taste elevate my dishes, and my customers always ask for my secret ingredient!",
    avatar: "/images/avatar2.png",
  },
  {
    id: "3",
    name: "Kabir Islam",
    role: "Health Enthusiast",
    content:
      "I switched to Jibon Organic's coconut oil as part of my health journey. Not only do I use it for cooking, but it's also become an essential part of my skincare routine. Pure quality!",
    avatar: "/images/avatar3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-16 w-full">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Customers Love Us
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            See what our customers have to say about our organic oil products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full max-w-md w-full">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex-1">
                  <svg
                    className="h-6 w-6 text-muted-foreground/70"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-2">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
