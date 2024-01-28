export default function GoogleMap({ children, ...props }) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.261486179813!2d27.705885476133826!3d-25.794946077331026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe27c1f4b61b5d%3A0xa97bb693448e84a!2sThe%20Nut%20Farm%20%7C%20Wedding%20Venue!5e0!3m2!1sen!2sza!4v1706186430360!5m2!1sen!2sza"
      className="w-full mt-3"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
